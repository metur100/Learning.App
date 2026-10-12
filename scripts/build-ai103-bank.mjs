// Builds src/data/banks/ai103.generated.ts from:
//   src/extracted/ai103-parsed.json          (scripts/extract-ai103-qa.mjs)
//   src/extracted/ai103-transcriptions.json  answer areas / exhibits transcribed from the PDF images
//   src/extracted/ai103-key-fixes.json       verified corrections + written explanations for text questions
//
//   node scripts/build-ai103-bank.mjs
//
// Exhibit images referenced by a question are copied to public/exam-media/ai-103/.
import fs from "node:fs/promises";
import path from "node:path";

const PARSED = "src/extracted/ai103-parsed.json";
const TRANSCRIPTIONS = "src/extracted/ai103-transcriptions.json";
const KEY_FIXES = "src/extracted/ai103-key-fixes.json";
const MEDIA_SRC = "src/extracted/ai103-media";
const MEDIA_OUT = "public/exam-media/ai-103";
const MEDIA_URL = "/exam-media/ai-103";
const OUT_TS = "src/data/banks/ai103.generated.ts";
const OUT_REPORT = "src/extracted/ai103-build-report.json";

/** Joins PDF-wrapped lines back into paragraphs. A line that does not end a
 * sentence continues on the next line when the next word would not have fit on
 * it (page width is ~95 characters) or the next line starts mid-sentence. */
function unwrap(text) {
  const out = [];
  for (const raw of String(text ?? "").split("\n")) {
    const line = raw.trim();
    const prev = out[out.length - 1];
    const nextWord = line.split(" ")[0];
    if (
      prev !== undefined &&
      line !== "" &&
      prev !== "" &&
      prev.length >= 50 &&
      !/[.?!:]$/.test(prev) &&
      !/ -$/.test(prev) &&
      !/^(You need|How should|What |Which |NOTE:)/.test(line) &&
      !(/\)$/.test(prev) && /^[A-Z]/.test(line)) &&
      (prev.length + 1 + nextWord.length >= 88 || /^[a-z0-9(“"'‘]/.test(line))
    ) {
      out[out.length - 1] = `${prev} ${line}`;
    } else {
      out.push(line);
    }
  }
  return out.join("\n").replace(/\n{3,}/g, "\n\n").trim();
}

const CASE_STUDY = /^Case Study -/m;

/** The part of the stem that is the actual question (case studies share a long scenario). */
function questionPart(stem) {
  if (!CASE_STUDY.test(stem)) return stem;
  const idx = stem.lastIndexOf("\nYou need to");
  return idx >= 0 ? stem.slice(idx) : stem.slice(-600);
}

const TOPICS = [
  ["Speech", /speech|voice|audio|transcri|pronunciation|wav\b|tts\b/g],
  ["Content Understanding & Documents", /content understanding|document intelligence|invoice|analyzer|\bocr\b|\bpdf|receipt|\bforms?\b/g],
  ["Vision & Video", /\bimage|vision|video|\bface|sora|dall-e|gpt-image|visual/g],
  ["Search & RAG", /ai search|\bindex|vector|semantic|retriev|\brag\b|grounding|knowledge|chunk|embedding|skillset/g],
  ["Monitoring & Evaluation", /evaluat|trace|tracing|telemetry|application insights|metric|observab|monitor|\blogs?\b|diagnostic/g],
  ["Responsible AI & Safety", /content safety|prompt shield|guardrail|harm|moderat|jailbreak|red team|filter|protected material|responsible/g],
  ["Security & Identity", /rbac|\brole\b|managed identity|entra|key vault|private endpoint|least privilege|api key|authenticat|network/g],
  ["Language", /language service|sentiment|entity|translat|\bpii\b|summariz|conversational language|clu\b/g],
  ["Agents", /\bagent|workflow|\btool|\bmcp\b|orchestrat|memory|thread|a2a/g],
  ["Models & Deployment", /deploy|fine-tun|model|responses api|prompt|token|gpt|temperature|throughput/g],
];

/** Questions the keyword heuristic misfiles (e.g. scenarios that mention images
 * but test Content Safety). */
const TOPIC_OVERRIDES = {
  8: "Responsible AI & Safety",
  12: "Speech",
  23: "Responsible AI & Safety",
  24: "Responsible AI & Safety",
  25: "Responsible AI & Safety",
  26: "Responsible AI & Safety",
  49: "Responsible AI & Safety",
  50: "Responsible AI & Safety",
  51: "Responsible AI & Safety",
  52: "Content Understanding & Documents",
  109: "Responsible AI & Safety",
  133: "Security & Identity",
  141: "Responsible AI & Safety",
  159: "Language",
};

function inferTopic(number, text) {
  if (TOPIC_OVERRIDES[number]) return TOPIC_OVERRIDES[number];
  const t = text.toLowerCase();
  let best = "Models & Deployment";
  let bestScore = 0;
  for (const [topic, re] of TOPICS) {
    const score = (t.match(re) ?? []).length;
    if (score > bestScore) {
      best = topic;
      bestScore = score;
    }
  }
  return best;
}

function insertExhibits(prompt, exhibits, number) {
  const lines = prompt.split("\n");
  const tail = [];
  for (const ex of exhibits ?? []) {
    const marker = `{{img:${MEDIA_URL}/${ex.file}}}`;
    if (!ex.after) {
      tail.push(marker);
      continue;
    }
    const needle = unwrap(ex.after);
    const idx = lines.findIndex((l) => l.includes(needle));
    if (idx < 0) throw new Error(`Q${number}: exhibit anchor not found: ${ex.after}`);
    lines.splice(idx + 1, 0, "", marker, "");
  }
  if (tail.length) lines.push("", ...tail.flatMap((m) => [m, ""]));
  return lines.join("\n").replace(/\n{3,}/g, "\n\n").trim();
}

function toTsLiteral(value, indent = 0) {
  const pad = "  ".repeat(indent);
  if (value === null) return "null";
  if (typeof value === "string") return JSON.stringify(value);
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  if (Array.isArray(value)) {
    if (value.length === 0) return "[]";
    return `[\n${value.map((v) => `${"  ".repeat(indent + 1)}${toTsLiteral(v, indent + 1)}`).join(",\n")}\n${pad}]`;
  }
  const entries = Object.entries(value).filter(([, v]) => v !== undefined);
  if (!entries.length) return "{}";
  return `{\n${entries.map(([k, v]) => `${"  ".repeat(indent + 1)}${k}: ${toTsLiteral(v, indent + 1)}`).join(",\n")}\n${pad}}`;
}

function validate(q) {
  const errs = [];
  const ids = (list) => new Set((list ?? []).map((o) => o.id));
  if (["single", "multiple"].includes(q.type)) {
    const opt = ids(q.options);
    if (opt.size < 2) errs.push("fewer than 2 options");
    if (!q.correct?.length) errs.push("no correct option");
    if (q.type === "single" && q.correct?.length !== 1) errs.push("single needs exactly 1 key");
    if (q.type === "multiple" && q.correct?.length < 2) errs.push("multiple needs 2+ keys");
    for (const c of q.correct ?? []) if (!opt.has(c)) errs.push(`unknown key ${c}`);
  } else if (q.type === "hotspot-boolean") {
    if (!q.statements?.length) errs.push("no statements");
    for (const s of q.statements ?? []) if (typeof s.answer !== "boolean") errs.push(`statement ${s.id} lacks answer`);
  } else {
    if (!q.targets?.length) errs.push("no targets");
    const keyed = new Map((q.correct ?? []).map((c) => c.split(":")));
    for (const t of q.targets ?? []) {
      const pool = q.type === "hotspot-dropdown" ? ids(t.options ?? q.options) : ids(q.options);
      if (pool.size < 2) errs.push(`target ${t.id} has fewer than 2 choices`);
      if (!keyed.has(t.id)) errs.push(`target ${t.id} has no key`);
      else if (!pool.has(keyed.get(t.id))) errs.push(`target ${t.id} key ${keyed.get(t.id)} not a choice`);
    }
    if (keyed.size !== (q.correct ?? []).length) errs.push("duplicate target keys");
  }
  if (!q.explanation || q.explanation.length < 40) errs.push("explanation missing/too short");
  if (/^Source answer:/i.test(q.explanation)) errs.push("placeholder explanation");
  return errs;
}

async function main() {
  const parsed = JSON.parse(await fs.readFile(PARSED, "utf8"));
  const transcriptions = JSON.parse(await fs.readFile(TRANSCRIPTIONS, "utf8"));
  const keyFixes = JSON.parse(await fs.readFile(KEY_FIXES, "utf8"));

  await fs.rm(MEDIA_OUT, { recursive: true, force: true });
  await fs.mkdir(MEDIA_OUT, { recursive: true });

  const questions = [];
  const report = { total: 0, byType: {}, byTopic: {}, correctedKeys: [], writtenExplanations: [], notes: {}, errors: {} };

  for (const p of parsed) {
    const tr = transcriptions[p.number];
    const fix = keyFixes[p.number];
    const override = { ...tr, ...fix };
    if (p.images.length && !tr) throw new Error(`Q${p.number}: has images but no transcription`);

    const type = override.type ?? p.kind;
    if (!["single", "multiple", "hotspot-dropdown", "hotspot-boolean", "drag-drop"].includes(type)) {
      throw new Error(`Q${p.number}: unresolved type ${type}`);
    }

    const prompt = insertExhibits(unwrap(p.stem), override.exhibits, p.number);
    for (const ex of override.exhibits ?? []) {
      await fs.copyFile(path.join(MEDIA_SRC, ex.file), path.join(MEDIA_OUT, ex.file));
    }

    const keySource = override.keySource ?? "source";
    const sourceReasoning = unwrap(p.reasoning).replace(/\n+/g, " ");
    // Prefer the source's own reasoning unless it is missing or a fix replaced it.
    let explanation =
      fix?.explanation ??
      (keySource === "source" && sourceReasoning.length >= 40 ? sourceReasoning : override.explanation);
    if (!fix?.explanation && explanation === override.explanation && sourceReasoning.length < 40) {
      report.writtenExplanations.push(p.number);
    }
    if (fix?.explanation) report.writtenExplanations.push(p.number);

    const correct = override.correct ?? p.correct;
    if (keySource === "domain") {
      const was = p.correct.length && correct.join() !== p.correct.join() ? p.correct.join(", ") : null;
      if (was) explanation += `\nNote: the source PDF marked ${was} as correct; the key was corrected after checking Microsoft Learn.`;
      report.correctedKeys.push(p.number);
    }
    if (override.caveat) explanation += `\nNote: ${override.caveat}`;
    if (override.note) report.notes[p.number] = override.note;

    const q = {
      id: p.number,
      number: p.number,
      type,
      topic: inferTopic(
        p.number,
        [questionPart(p.stem), override.codeContext, ...(override.options ?? p.options).map((o) => o.text)]
          .filter(Boolean)
          .join(" "),
      ),
      prompt,
      codeContext: override.codeContext,
      options: type === "hotspot-boolean" ? undefined : (override.options ?? (p.options.length ? p.options : undefined)),
      correct: type === "hotspot-boolean" ? undefined : correct,
      statements: type === "hotspot-boolean" ? override.statements : undefined,
      targets: ["hotspot-dropdown", "drag-drop"].includes(type) ? override.targets : undefined,
      keySource,
      explanation,
    };

    const errs = validate(q);
    if (errs.length) report.errors[p.number] = errs;
    report.byType[type] = (report.byType[type] ?? 0) + 1;
    report.byTopic[q.topic] = (report.byTopic[q.topic] ?? 0) + 1;
    questions.push(q);
  }
  report.total = questions.length;

  const ts = `import type { Question } from "../../types";\n\n// Generated by scripts/build-ai103-bank.mjs — do not edit by hand.\nexport const ai103Questions: Question[] = ${toTsLiteral(questions)};\n`;
  await fs.writeFile(OUT_TS, ts, "utf8");
  await fs.writeFile(OUT_REPORT, JSON.stringify(report, null, 2) + "\n", "utf8");

  console.log(`Questions: ${report.total}`);
  console.log("By type:", report.byType);
  console.log("By topic:", report.byTopic);
  console.log(`Corrected keys: ${report.correctedKeys.join(", ") || "none"}`);
  console.log(`Written explanations: ${report.writtenExplanations.join(", ") || "none"}`);
  const errCount = Object.keys(report.errors).length;
  if (errCount) {
    console.error("Validation errors:", report.errors);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
