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

function cleanText(s) {
  return String(s ?? "")
    .replace(/\r/g, "")
    .replace(/\u00a0/g, " ")
    .replace(/\u0000/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function stripHtml(html) {
  const text = String(html ?? "")
    .replace(/<img\s+[^>]*src=["']([^"']+)["'][^>]*>/gi, (_m, src) => `\n[Image: ${src}]\n`)
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
    .replace(/\u200b/g, "");

  return cleanText(text);
}

function parseBits(answerField, optionCount) {
  const bits = cleanText(answerField)
    .split(/\s+/)
    .map((x) => (x === "1" ? 1 : 0));

  while (bits.length < optionCount) bits.push(0);
  return bits.slice(0, optionCount);
}

function topicFromFileName(fileName) {
  const m = fileName.match(/T(\d+)(?:-T(\d+))?/i);
  if (!m) return fileName.replace(/\.apkg$/i, "");
  return m[2] ? `Topic ${m[1]}-${m[2]}` : `Topic ${m[1]}`;
}

function parseNoteFields(flds, sourceFile) {
  const parts = String(flds).split("\u001f");
  if (parts.length < 9) return null;

  const questionText = stripHtml(parts[0]);
  const sourceNumber = cleanText(parts[1]).replace(/^#\s*/, "");
  const options = parts.slice(3, 8).map((x) => stripHtml(x)).filter(Boolean);
  const bitFlags = parseBits(parts[8], options.length);

  return {
    topic: topicFromFileName(sourceFile),
    sourceFile,
    sourceNumber: Number(sourceNumber) || 0,
    questionText,
    options,
    bitFlags,
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

  for (const fileName of apkgFiles) {
    const fullPath = path.join(APKG_DIR, fileName);
    const zip = new AdmZip(fullPath);
    const dbEntry = zip.getEntry("collection.anki21b") || zip.getEntry("collection.anki2");
    if (!dbEntry) {
      console.warn(`Skipping ${fileName}: no collection database found`);
      continue;
    }

    const rawDb = dbEntry.getData();
    const dbBytes = dbEntry.entryName.endsWith(".anki21b") ? zstdDecompressSync(rawDb) : rawDb;
    const db = new SQL.Database(dbBytes);

    const notesResult = db.exec("select id, flds from notes");
    const notes = notesResult[0]?.values ?? [];

    for (const row of notes) {
      const parsed = parseNoteFields(row[1], fileName);
      if (parsed) extracted.push(parsed);
    }

    db.close();
    console.log(`Parsed ${notes.length} notes from ${fileName}`);
  }

  const unique = dedupeRows(extracted);

  const questions = unique.map((q) => ({
    index: q.index,
    topic: q.topic,
    sourceFile: q.sourceFile,
    sourceNumber: q.sourceNumber,
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
    questionText: q.questionText,
    options: q.options,
    bitFlags: q.bitFlags,
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
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});