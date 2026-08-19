import fs from "node:fs/promises";
import fsSync from "node:fs";
import { PDFParse } from "pdf-parse";
import { createWorker } from "tesseract.js";

const PDF_PATH = "src/new/AZ 204.pdf";
const QUESTIONS_PATH = "src/new/extracted/questions.json";
const OUT_PATH = "src/new/extracted/az204-ocr-options.json";

function cleanText(s) {
  return String(s ?? "")
    .replace(/\r/g, "")
    .replace(/\u0000/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function normalizeOptionText(s) {
  return cleanText(s)
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/^[-•]\s*/, "")
    .replace(/^\d+[\.)]\s*/, "")
    .replace(/^([A-G])\.\s+/, "")
    .replace(/\s+/g, " ")
    .trim();
}

function findQuestionPage(pages, topic, number) {
  const re = new RegExp(`Topic\\s+${topic}\\s+Question\\s*#\\s*${number}\\b`, "i");
  for (let i = 0; i < pages.length; i += 1) {
    if (re.test(pages[i])) return i + 1;
  }
  return null;
}

function extractOptionCandidates(ocrText) {
  const text = cleanText(ocrText);
  const areaSplit = text.split(/(?:Hot\s*Area:|Select\s+and\s+Place:)/i);
  const area = areaSplit.length > 1 ? areaSplit.slice(1).join("\n") : text;

  const lines = area
    .split("\n")
    .map((l) => normalizeOptionText(l))
    .filter(Boolean)
    .filter((l) => l.length <= 120)
    .filter((l) => !/^https?:\/\//i.test(l))
    .filter((l) => !/AZ-204\s+Exam/i.test(l))
    .filter((l) => !/NOTE:\s*Each correct selection/i.test(l))
    .filter((l) => !/^Page\s+\d+/i.test(l))
    .filter((l) => !/^Topic\s+\d+\s+Question/i.test(l))
    .filter((l) => !/^\d+\s*\/\s*\d+$/.test(l))
    .filter((l) => l.split(" ").length <= 14)
    .filter((l) => !/^question\s*#?\s*\d+/i.test(l))
    .filter((l) => !/^topic\s+\d+/i.test(l))
    .filter((l) => !/^answer\s*area$/i.test(l))
    .filter((l) => !/^hot\s*area$/i.test(l))
    .filter((l) => !/^note[:\s]/i.test(l))
    .filter((l) => !/^(yes|no)$/i.test(l))
    .filter((l) => !/^(opti\s*answer|option\s*answer)$/i.test(l))
    .filter((l) => !/^(assignments?|conditions?|access controls?|session)$/i.test(l))
    .filter((l) => !/[?]$/.test(l))
    .filter((l) => !/\b(you\s+need|which\s+of\s+the\s+following|does\s+this\s+meet|solution:|what\s+should\s+you\s+do)\b/i.test(l));

  const quoted = [...area.matchAll(/["“]([^"”]{1,80})["”]/g)]
    .map((m) => normalizeOptionText(m[1]))
    .filter(Boolean);

  const cliLike = area
    .split("\n")
    .map((l) => normalizeOptionText(l))
    .filter((l) => /^(az|kubectl|docker|cmd|powershell|dotnet|from\s+)/i.test(l));

  const scored = [...quoted, ...lines, ...cliLike].map((line) => {
    let score = 0;
    if (/^(az|kubectl|docker|from|cmd|dotnet|create|set|call|enable|disable|grant|users?|groups?|cloud apps?|consumption|premium|standard)/i.test(line)) score += 3;
    if (line.length >= 6 && line.length <= 80) score += 1;
    if (/\b(create|index|client|binding|plan|policy|storage|http|json|host|function|command|script)\b/i.test(line)) score += 2;
    if (/^("[a-z0-9_]+"\s*:?|[a-z][a-z0-9_.-]{1,20})$/i.test(line)) score += 2;
    if (/^(answer area|hotspot|drag drop|select and place)$/i.test(line)) score -= 6;
    if (/\b(question|topic|does this meet|which of the following|you are|need to|answer by|note|requirements?)\b/i.test(line)) score -= 4;
    if (/[^a-z0-9\s\-_.:\/()"',]/i.test(line)) score -= 1;
    if (line.split(" ").length > 12) score -= 2;
    if (/\b(question|topic|does this meet|which of the following|you are|need to|answer by|note)\b/i.test(line)) score -= 4;
    return { line, score };
  });

  const merged = scored
    .filter((x) => x.score >= 2)
    .sort((a, b) => b.score - a.score || a.line.length - b.line.length)
    .map((x) => x.line)
    .slice(0, 24);
  const out = [];
  const seen = new Set();
  for (const m of merged) {
    const key = m.toLowerCase();
    if (!key) continue;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(m);
  }
  return out;
}

async function main() {
  const questions = JSON.parse(await fs.readFile(QUESTIONS_PATH, "utf8"));
  const composite = questions.filter((q) => /drag\s*drop|hotspot/i.test(q.text));

  const pdfBuffer = fsSync.readFileSync(PDF_PATH);
  const parser = new PDFParse({ data: pdfBuffer });
  const textResult = await parser.getText();
  const pages = textResult.pages.map((p) => cleanText(p.text));

  const pageByQuestion = new Map();
  for (const q of composite) {
    const page = findQuestionPage(pages, q.topic, q.questionNumber);
    if (page) pageByQuestion.set(q.index, page);
  }

  const uniquePages = [...new Set(pageByQuestion.values())].sort((a, b) => a - b);
  const worker = await createWorker("eng");
  const ocrByPage = new Map();

  let done = 0;
  for (const pageNum of uniquePages) {
    const shot = await parser.getScreenshot({ first: pageNum, last: pageNum, scale: 2 });
    const page = shot.pages[0];
    const tmpPath = `src/new/extracted/.ocr-page-${pageNum}.png`;
    await fs.writeFile(tmpPath, page.data);
    const { data } = await worker.recognize(tmpPath);
    await fs.unlink(tmpPath).catch(() => {});
    ocrByPage.set(pageNum, cleanText(data.text));
    done += 1;
    if (done % 10 === 0 || done === uniquePages.length) {
      console.log(`OCR processed ${done}/${uniquePages.length} pages`);
    }
  }

  await worker.terminate();
  await parser.destroy();

  const result = {};
  for (const q of composite) {
    const page = pageByQuestion.get(q.index);
    const ocrText = page ? ocrByPage.get(page) ?? "" : "";
    result[q.index] = {
      topic: q.topic,
      questionNumber: q.questionNumber,
      page,
      options: extractOptionCandidates(ocrText),
    };
  }

  await fs.writeFile(OUT_PATH, JSON.stringify(result, null, 2), "utf8");
  console.log(`Wrote OCR options for ${Object.keys(result).length} questions -> ${OUT_PATH}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
