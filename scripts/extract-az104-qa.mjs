import fs from "node:fs/promises";
import path from "node:path";
import AdmZip from "adm-zip";
import initSqlJs from "sql.js";
import { zstdDecompressSync } from "node:zlib";

const APKG_DIR = "src/extracted/AZ-104";
const OUT_DIR = "src/extracted";
const OUT_QUESTIONS = `${OUT_DIR}/az104-questions.json`;
const OUT_ANSWERS = `${OUT_DIR}/az104-answers.json`;
const OUT_PAIRED = `${OUT_DIR}/az104-paired-qa.json`;
const OUT_MARKDOWN = `${OUT_DIR}/az104-paired-qa.md`;

const IMG_PUBLIC_ROOT = "exam-media/az-104";
const IMG_OUT_DIR = `public/${IMG_PUBLIC_ROOT}`;

// Anki note fields are joined with an ASCII Unit Separator (0x1F). Built via
// fromCharCode (rather than a \u escape) to avoid any editor/tool mangling.
const FIELD_SEP = String.fromCharCode(0x1f);
const NBSP = String.fromCharCode(0xa0);
const NUL_CHAR = String.fromCharCode(0x00);
const ZERO_WIDTH_SPACE = String.fromCharCode(0x200b);

function cleanText(s) {
  return String(s ?? "")
    .split(NBSP).join(" ")
    .split(NUL_CHAR).join("")
    .replace(/\r/g, "")
    // Anki's rich-text editor stores a literal "&nbsp;" entity (not the
    // actual NBSP character) for trailing spaces; left undecoded this
    // silently corrupts whitespace-split parsing (e.g. the answer bit
    // string "1 0 0 1&nbsp;" reads as bit4="1&nbsp;" !== "1" -> false).
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

/** Minimal protobuf varint + length-delimited reader, just enough to read Anki's
 * MediaEntries { repeated MediaEntry entries = 1; } / MediaEntry { string name = 1; ... } message. */
function readVarint(buf, offset) {
  let result = 0n;
  let shift = 0n;
  let pos = offset;
  for (;;) {
    const b = buf[pos];
    pos += 1;
    result |= BigInt(b & 0x7f) << shift;
    if ((b & 0x80) === 0) break;
    shift += 7n;
  }
  return [result, pos];
}

function decodeMediaEntryNames(buf) {
  const names = [];
  let offset = 0;
  while (offset < buf.length) {
    const [tag, afterTag] = readVarint(buf, offset);
    const fieldNum = Number(tag >> 3n);
    const wireType = Number(tag & 7n);
    offset = afterTag;
    if (wireType !== 2) throw new Error(`unexpected top-level wireType ${wireType}`);
    const [len, afterLen] = readVarint(buf, offset);
    offset = afterLen;
    const entryBuf = buf.subarray(offset, offset + Number(len));
    offset += Number(len);
    if (fieldNum !== 1) continue;

    let eoff = 0;
    let name = null;
    while (eoff < entryBuf.length) {
      const [etag, eafter] = readVarint(entryBuf, eoff);
      const efield = Number(etag >> 3n);
      const ewire = Number(etag & 7n);
      eoff = eafter;
      if (ewire === 0) {
        const [, nafter] = readVarint(entryBuf, eoff);
        eoff = nafter;
      } else if (ewire === 2) {
        const [elen, elenAfter] = readVarint(entryBuf, eoff);
        eoff = elenAfter;
        const val = entryBuf.subarray(eoff, eoff + Number(elen));
        eoff += Number(elen);
        if (efield === 1 && name === null) name = val.toString("utf8");
      } else {
        throw new Error(`unexpected entry wireType ${ewire}`);
      }
    }
    names.push(name);
  }
  return names;
}

/** Builds a filename -> zip-entry-name map ("0", "1", ...) from an apkg's media index. */
function readMediaMap(zip) {
  const mediaEntry = zip.getEntry("media");
  if (!mediaEntry) return new Map();
  const raw = mediaEntry.getData();
  let names;
  try {
    names = Object.values(JSON.parse(raw.toString("utf8")));
  } catch {
    names = decodeMediaEntryNames(zstdDecompressSync(raw));
  }
  const map = new Map();
  names.forEach((name, idx) => map.set(name, String(idx)));
  return map;
}

const ZSTD_MAGIC = Buffer.from([0x28, 0xb5, 0x2f, 0xfd]);

/** Modern (.anki21b) apkg packages store each media file zstd-compressed
 * inside its zip entry (on top of the zip's own container compression) -
 * without this, "images" are just raw zstd frames on disk. Detected by
 * magic bytes rather than assumed, so legacy packages that store media
 * uncompressed still round-trip correctly. */
function decompressMediaBytes(buf) {
  if (buf.length >= 4 && buf.subarray(0, 4).equals(ZSTD_MAGIC)) {
    return zstdDecompressSync(buf);
  }
  return buf;
}

function topicFromFileName(fileName) {
  const m = fileName.match(/T(\d+)(?:-T(\d+))?/i);
  if (!m) return fileName.replace(/\.apkg$/i, "");
  return m[2] ? `Topic ${m[1]}-${m[2]}` : `Topic ${m[1]}`;
}

function topicSlugFromFileName(fileName) {
  const m = fileName.match(/T(\d+)(?:-T(\d+))?/i);
  if (!m) return fileName.replace(/\.apkg$/i, "").replace(/[^a-z0-9]+/gi, "-");
  return m[2] ? `T${m[1]}-T${m[2]}` : `T${m[1]}`;
}

/** Replaces <img src="..."> tags with an inline {{img:URL}} marker on its own line.
 * Local (in-apkg) images are copied into public/exam-media/az-104/<slug>/ and referenced
 * by an absolute site path; remote (http) images are referenced directly by their URL. */
function resolveImages(html, ctx) {
  return String(html ?? "").replace(/<img\s+[^>]*src=["']([^"']+)["'][^>]*>/gi, (_m, src) => {
    if (/^https?:\/\//i.test(src)) {
      return `\n{{img:${src}}}\n`;
    }
    const zipEntryName = ctx.mediaMap.get(src);
    if (!zipEntryName) {
      ctx.missing.push(src);
      return `\n[Image unavailable: ${src}]\n`;
    }
    const url = ctx.copyImage(zipEntryName, src);
    return `\n{{img:${url}}}\n`;
  });
}

function stripHtml(html) {
  const text = String(html ?? "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n")
    .replace(/<\/div>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .split(ZERO_WIDTH_SPACE).join("");

  return cleanText(text);
}

function parseBits(answerField, optionCount) {
  const bits = cleanText(answerField)
    .split(/\s+/)
    .map((x) => (x === "1" ? 1 : 0));

  while (bits.length < optionCount) bits.push(0);
  return bits.slice(0, optionCount);
}

function isJunkStubNote(questionText, optionCount) {
  if (optionCount > 0) return false;
  const t = questionText.trim();
  return /^(duplicate of|copy of)\b/i.test(t) || /^#?\d+\s*(duplicate|copy)\b/i.test(t);
}

function parseNoteFields(flds, sourceFile, imgCtx) {
  const parts = String(flds).split(FIELD_SEP);
  if (parts.length < 9) return null;

  const questionHtml = resolveImages(parts[0], imgCtx);
  const questionText = stripHtml(questionHtml);
  const sourceNumber = cleanText(parts[1]).replace(/^#\s*/, "");
  const qtype = cleanText(parts[2]);
  const options = parts.slice(3, 8).map((x) => stripHtml(x)).filter(Boolean);
  const bitFlags = parseBits(parts[8], options.length);
  const sourceUrl = stripHtml(parts[9] ?? "");
  const explanationText = stripHtml(resolveImages(parts[10] ?? "", imgCtx));

  if (isJunkStubNote(questionText, options.length)) return null;

  return {
    topic: topicFromFileName(sourceFile),
    sourceFile,
    sourceNumber: Number(sourceNumber) || 0,
    qtype,
    questionText,
    options,
    bitFlags,
    sourceUrl,
    explanationText,
  };
}

function dedupeRows(rows) {
  const byKey = new Map();
  for (const row of rows) {
    const normQ = row.questionText.toLowerCase().replace(/\s+/g, " ").trim();
    const normOpts = row.options.map((x) => x.toLowerCase().replace(/\s+/g, " ").trim()).join("||");
    const key = `${normQ}__${normOpts}`;
    const prev = byKey.get(key);
    if (!prev || row.questionText.length > prev.questionText.length) byKey.set(key, row);
  }

  return [...byKey.values()].map((q, idx) => ({ ...q, index: idx + 1 }));
}

function toMarkdown(paired, totalNotes) {
  const lines = [
    "# AZ-104 Extracted Questions and Answers",
    "",
    `- Notes read: ${totalNotes}`,
    `- Unique paired entries: ${paired.length}`,
    "",
  ];

  for (const p of paired) {
    lines.push(`## Q${p.index} (${p.topic}, Original #${p.sourceNumber || "?"})`);
    lines.push("");
    lines.push(p.questionText || "(missing question)");
    lines.push("");
    p.options.forEach((o, i) => {
      const mark = p.bitFlags[i] ? "[x]" : "[ ]";
      lines.push(`- ${mark} ${String.fromCharCode(65 + i)}. ${o}`);
    });
    lines.push("");
  }

  return `${lines.join("\n")}\n`;
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });

  const entries = await fs.readdir(APKG_DIR, { withFileTypes: true });
  const apkgFiles = entries
    .filter((e) => e.isFile() && /\.apkg$/i.test(e.name))
    .map((e) => e.name)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  const SQL = await initSqlJs();
  const extracted = [];
  let imagesCopied = 0;
  const allMissing = [];
  const pendingWrites = [];

  for (const fileName of apkgFiles) {
    const fullPath = path.join(APKG_DIR, fileName);
    const zip = new AdmZip(fullPath);
    const dbEntry = zip.getEntry("collection.anki21b") || zip.getEntry("collection.anki2");
    if (!dbEntry) {
      console.warn(`Skipping ${fileName}: no collection database found`);
      continue;
    }

    const mediaMap = readMediaMap(zip);
    const slug = topicSlugFromFileName(fileName);
    const destDir = `${IMG_OUT_DIR}/${slug}`;
    await fs.mkdir(destDir, { recursive: true });

    const copiedInFile = new Set();
    const copyImage = (zipEntryName, filename) => {
      const safeName = filename.replace(/[^a-z0-9._-]/gi, "_");
      const publicUrl = `/${IMG_PUBLIC_ROOT}/${slug}/${safeName}`;
      if (!copiedInFile.has(safeName)) {
        const entry = zip.getEntry(zipEntryName);
        if (entry) {
          pendingWrites.push(fs.writeFile(`${destDir}/${safeName}`, decompressMediaBytes(entry.getData())));
          copiedInFile.add(safeName);
          imagesCopied += 1;
        }
      }
      return publicUrl;
    };

    const missing = [];
    const imgCtx = { mediaMap, copyImage, missing };

    const rawDb = dbEntry.getData();
    const dbBytes = dbEntry.entryName.endsWith(".anki21b") ? zstdDecompressSync(rawDb) : rawDb;
    const db = new SQL.Database(dbBytes);

    const notesResult = db.exec("select id, flds from notes");
    const notes = notesResult[0]?.values ?? [];

    let parsedCount = 0;
    for (const row of notes) {
      const parsed = parseNoteFields(row[1], fileName, imgCtx);
      if (parsed) {
        extracted.push(parsed);
        parsedCount += 1;
      }
    }

    db.close();
    if (missing.length) allMissing.push({ file: fileName, missing });
    console.log(`Parsed ${parsedCount}/${notes.length} notes from ${fileName} (${copiedInFile.size} images copied)`);
  }

  await Promise.all(pendingWrites);

  const unique = dedupeRows(extracted);

  const questions = unique.map((q) => ({
    index: q.index,
    topic: q.topic,
    sourceFile: q.sourceFile,
    sourceNumber: q.sourceNumber,
    qtype: q.qtype,
    text: q.questionText,
    options: q.options,
    bitFlags: q.bitFlags,
  }));

  const answers = unique.map((q) => ({
    index: q.index,
    topic: q.topic,
    sourceFile: q.sourceFile,
    sourceNumber: q.sourceNumber,
    bitFlags: q.bitFlags,
    optionCount: q.options.length,
  }));

  const paired = unique.map((q) => ({
    index: q.index,
    topic: q.topic,
    sourceFile: q.sourceFile,
    sourceNumber: q.sourceNumber,
    qtype: q.qtype,
    questionText: q.questionText,
    options: q.options,
    bitFlags: q.bitFlags,
    sourceUrl: q.sourceUrl,
    explanationText: q.explanationText,
  }));

  await fs.writeFile(OUT_QUESTIONS, JSON.stringify(questions, null, 2), "utf8");
  await fs.writeFile(OUT_ANSWERS, JSON.stringify(answers, null, 2), "utf8");
  await fs.writeFile(OUT_PAIRED, JSON.stringify(paired, null, 2), "utf8");
  await fs.writeFile(OUT_MARKDOWN, toMarkdown(paired, extracted.length), "utf8");

  const multi = paired.filter((p) => p.bitFlags.filter(Boolean).length >= 2).length;
  const single = paired.filter((p) => p.bitFlags.filter(Boolean).length === 1).length;
  const none = paired.filter((p) => p.bitFlags.filter(Boolean).length === 0).length;

  console.log(`AZ-104 notes read: ${extracted.length}`);
  console.log(`AZ-104 unique questions: ${paired.length}`);
  console.log(`AZ-104 single-key items: ${single}`);
  console.log(`AZ-104 multi-key items: ${multi}`);
  console.log(`AZ-104 no-key items: ${none}`);
  console.log(`AZ-104 images copied: ${imagesCopied}`);
  if (allMissing.length) {
    console.log(`AZ-104 unresolved local image refs:`, JSON.stringify(allMissing));
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
