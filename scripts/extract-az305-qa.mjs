import fs from "node:fs/promises";
import fsSync from "node:fs";
import mammoth from "mammoth";
import { PDFParse } from "pdf-parse";
import { createWorker } from "tesseract.js";

const PDF_PATHS = [
  "src/new/AZ-305/Azure AZ-305 1-50 Fragen 1.pdf",
  "src/new/AZ-305/Azure AZ-305 50-100 Fragen 1.pdf",
  "src/new/AZ-305/Azure AZ-305 100-150 Fragen 1.pdf",
  "src/new/AZ-305/Azure AZ-305 100-200 Frage 1.pdf",
  "src/new/AZ-305/Azure AZ-305 200-250 1.pdf",
];

const DOCX_PATH = "src/new/AZ-305/AZ-305 Losungen 1.docx";
const DOCX_ALT_PATH = "src/new/AZ-305/AZ-305 L\u00f6sungen 1.docx";
const OUT_DIR = "src/new/extracted";
const OUT_QUESTIONS = `${OUT_DIR}/az305-questions.json`;
const OUT_ANSWERS = `${OUT_DIR}/az305-answers.json`;
const OUT_PAIRED = `${OUT_DIR}/az305-paired-qa.json`;
const OUT_MARKDOWN = `${OUT_DIR}/az305-paired-qa.md`;
const OUT_OCR_PAGES = `${OUT_DIR}/az305-ocr-pages.json`;

function cleanText(s) {
  return String(s ?? "")
    .replace(/\r/g, "")
    .replace(/\u00a0/g, " ")
    .replace(/\u0000/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function normalizeLine(line) {
  return cleanText(line)
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function parseDocxAnswers(rawText) {
  const lines = cleanText(rawText)
    .split("\n")
    .map((line) => normalizeLine(line))
    .filter(Boolean);

  const result = [];
  let currentTopic = 1;

  for (const line of lines) {
    const topicMatch = line.match(/^Topic\s+(\d+)\s*:/i);
    if (topicMatch) {
      currentTopic = Number(topicMatch[1]);
      continue;
    }

    const frageMatch = line.match(/^Frage\s+(\d+)\s*:\s*(.+)$/i);
    if (!frageMatch) continue;

    result.push({
      topic: currentTopic,
      questionNumber: Number(frageMatch[1]),
      text: cleanText(frageMatch[2]),
    });
  }

  return result;
}

function extractBoxesAnswer(block) {
  const out = [];
  const re = /Box\s+\d+\s*:\s*([^\n]+)/gi;
  let match;
  while ((match = re.exec(block)) !== null) {
    const line = cleanText(match[1]);
    if (!line) continue;
    const val = cleanText(line.split(" - ")[0]);
    if (val && val !== "-") out.push(val);
  }
  return out;
}

function cleanQuestionBody(raw) {
  const stopAt = [
    /Correct\s+Answer\s*:/i,
    /Community\s+vote\s+distribution/i,
  ];

  let body = raw;
  for (const re of stopAt) {
    const m = body.search(re);
    if (m >= 0) {
      body = body.slice(0, m);
      break;
    }
  }

  const lines = cleanText(body)
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .filter((line) => !/^--\s*\d+\s+of\s+\d+\s*--$/i.test(line))
    .filter((line) => !/^Most\s+voted/i.test(line))
    .filter((line) => !/^Correct\s+Answer\s*:/i.test(line))
    .filter((line) => !/^Community\s+vote\s+distribution/i.test(line))
    .filter((line) => !/^[A-F]\s*\(\d+%\)\s*$/i.test(line));

  return cleanText(lines.join("\n"));
}

function parseQuestionBlocks(ocrText) {
  const text = cleanText(ocrText);
  const marker = /Question\s*#\s*(\d+)\s+Topic\s+(\d+)/gi;
  const markers = [];
  let match;

  while ((match = marker.exec(text)) !== null) {
    markers.push({
      start: match.index,
      markerLength: match[0].length,
      questionNumber: Number(match[1]),
      topic: Number(match[2]),
    });
  }

  const found = [];
  for (let i = 0; i < markers.length; i += 1) {
    const cur = markers[i];
    const next = markers[i + 1];
    const block = text.slice(cur.start, next ? next.start : text.length);

    const caMatch = block.match(/Correct\s+Answer\s*:\s*([^\n\r]+)/i);
    let sourceAnswer = cleanText(caMatch?.[1] ?? "");

    const boxAnswers = extractBoxesAnswer(block);
    if ((!sourceAnswer || sourceAnswer === "-") && boxAnswers.length) {
      sourceAnswer = boxAnswers.join(", ");
    }

    const body = cleanQuestionBody(block.slice(cur.markerLength));
    if (!body) continue;

    found.push({
      topic: cur.topic,
      questionNumber: cur.questionNumber,
      text: body,
      sourceAnswer,
      hasBoxes: boxAnswers.length > 0,
    });
  }

  return found;
}

function dedupeQuestions(items) {
  const byKey = new Map();
  for (const q of items) {
    const key = `${q.topic}:${q.questionNumber}`;
    const prev = byKey.get(key);
    if (!prev || q.text.length > prev.text.length) {
      byKey.set(key, q);
    }
  }

  return [...byKey.values()]
    .sort((a, b) => (a.topic - b.topic) || (a.questionNumber - b.questionNumber))
    .map((q, idx) => ({ ...q, index: idx + 1 }));
}

function buildAnswerMap(entries) {
  const out = new Map();
  for (const e of entries) out.set(`${e.topic}:${e.questionNumber}`, e.text);
  return out;
}

function toMarkdown(paired, totalQuestions, totalAnswers) {
  const lines = [
    "# AZ-305 Extracted Questions and Answers",
    "",
    `- Questions extracted: ${totalQuestions}`,
    `- DOCX answers extracted: ${totalAnswers}`,
    `- Paired entries: ${paired.length}`,
    "",
  ];

  for (const p of paired) {
    lines.push(`## Q${p.index} (Topic ${p.topic}, Original #${p.questionNumber})`);
    lines.push("");
    lines.push(p.questionText);
    lines.push("");
    lines.push(`- PDF answer: ${p.sourceAnswer || "(missing)"}`);
    lines.push(`- DOCX answer: ${p.docxAnswer || "(missing)"}`);
    lines.push(`- Final answer: ${p.finalAnswer || "(missing)"}`);
    lines.push("");
  }

  return `${lines.join("\n")}\n`;
}

async function resolveDocxPath() {
  if (fsSync.existsSync(DOCX_PATH)) return DOCX_PATH;
  return DOCX_ALT_PATH;
}

async function ocrPdfToText(pdfPath, worker) {
  const pdfBuffer = fsSync.readFileSync(pdfPath);
  const parser = new PDFParse({ data: pdfBuffer });
  const textResult = await parser.getText();
  const pageCount = textResult.pages.length;

  let all = "";
  const pages = [];

  for (let pageNum = 1; pageNum <= pageCount; pageNum += 1) {
    const shot = await parser.getScreenshot({ first: pageNum, last: pageNum, scale: 2 });
    const img = shot.pages[0];
    const tmpPath = `${OUT_DIR}/.az305-ocr-p${pageNum}.png`;

    await fs.writeFile(tmpPath, img.data);
    const result = await worker.recognize(tmpPath);
    await fs.unlink(tmpPath).catch(() => {});

    const pageText = cleanText(result.data.text);
    pages.push({ page: pageNum, text: pageText });
    all += `\n\n${pageText}`;

    if (pageNum % 10 === 0 || pageNum === pageCount) {
      console.log(`OCR ${pdfPath}: ${pageNum}/${pageCount} pages`);
    }
  }

  await parser.destroy();
  return { allText: cleanText(all), pages };
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });

  const docxPath = await resolveDocxPath();
  const docx = await mammoth.extractRawText({ path: docxPath });
  const answerRows = parseDocxAnswers(docx.value);
  const answerMap = buildAnswerMap(answerRows);

  const worker = await createWorker("eng");
  const parsedByPdf = [];
  const ocrDump = [];

  for (const pdfPath of PDF_PATHS) {
    console.log(`Starting OCR for: ${pdfPath}`);
    const { allText, pages } = await ocrPdfToText(pdfPath, worker);
    const parsed = parseQuestionBlocks(allText);
    parsedByPdf.push(...parsed);
    ocrDump.push({ pdfPath, pages });
    console.log(`Parsed ${parsed.length} question blocks from ${pdfPath}`);
  }

  await worker.terminate();

  const questions = dedupeQuestions(parsedByPdf);
  const paired = questions.map((q) => {
    const key = `${q.topic}:${q.questionNumber}`;
    const docxAnswer = cleanText(answerMap.get(key) ?? "");
    const finalAnswer = cleanText(q.sourceAnswer || docxAnswer);
    return {
      index: q.index,
      topic: q.topic,
      questionNumber: q.questionNumber,
      questionText: q.text,
      sourceAnswer: q.sourceAnswer,
      docxAnswer,
      finalAnswer,
      answerSource: q.sourceAnswer ? "pdf" : docxAnswer ? "docx" : "missing",
      hasBoxes: q.hasBoxes,
    };
  });

  await fs.writeFile(
    OUT_QUESTIONS,
    JSON.stringify(
      questions.map((q) => ({
        index: q.index,
        topic: q.topic,
        questionNumber: q.questionNumber,
        text: q.text,
        sourceAnswer: q.sourceAnswer,
      })),
      null,
      2,
    ),
    "utf8",
  );
  await fs.writeFile(OUT_ANSWERS, JSON.stringify(answerRows, null, 2), "utf8");
  await fs.writeFile(OUT_PAIRED, JSON.stringify(paired, null, 2), "utf8");
  await fs.writeFile(OUT_MARKDOWN, toMarkdown(paired, questions.length, answerRows.length), "utf8");
  await fs.writeFile(OUT_OCR_PAGES, JSON.stringify(ocrDump, null, 2), "utf8");

  const missing = paired.filter((p) => !p.finalAnswer).length;
  console.log(`AZ-305 extracted questions: ${questions.length}`);
  console.log(`AZ-305 DOCX answer rows: ${answerRows.length}`);
  console.log(`AZ-305 missing final answers: ${missing}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
