import fs from "node:fs/promises";
import { PDFParse } from "pdf-parse";
import mammoth from "mammoth";

const PDF_PATH = "src/new/AZ 204.pdf";
const DOCX_PATH = "src/new/AZ 204 1.docx";
const OUT_DIR = "src/new/extracted";

function normalizeText(text) {
  return text
    .replace(/\r/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function extractQuestions(pdfText) {
  const text = normalizeText(pdfText)
    .replace(/\bTopic\s+(\d+)\s*-\s*Question\s+Set\s+\d+\b/gi, "")
    .replace(/\bExamTopics\b/gi, "");

  const markerRegex = /Topic\s+(\d+)\s+Question\s+#(\d+)/gi;
  const markers = [];
  let match;

  while ((match = markerRegex.exec(text)) !== null) {
    markers.push({
      start: match.index,
      markerLength: match[0].length,
      topic: Number(match[1]),
      questionNumber: Number(match[2]),
    });
  }

  const questions = [];

  const shouldDropLine = (line) => {
    const t = line.trim();
    if (!t) return true;
    if (/^--\s*\d+\s+of\s+\d+\s*--$/i.test(t)) return true;
    if (/^\d{2}\.\d{2}\.\d{2},\s*\d{1,2}:\d{2}/.test(t)) return true;
    if (/^https?:\/\//i.test(t)) return true;
    if (/\bAZ-204\s+Exam\b/i.test(t)) return true;
    if (/^\d+\s*\/\s*\d+$/.test(t)) return true;
    if (/^Page\s+\d+\b/i.test(t)) return true;
    return false;
  };

  for (let i = 0; i < markers.length; i += 1) {
    const current = markers[i];
    const next = markers[i + 1];
    const start = current.start + current.markerLength;
    const end = next ? next.start : text.length;

    let block = text.slice(start, end);
    block = block.replace(/\bReveal Solution Discussion\b[\s\S]*$/i, "");
    block = block.replace(/\bCorrect Answer:\s*[A-Z, ]+\b[\s\S]*$/i, "");

    block = block
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => !shouldDropLine(line))
      .join("\n");

    block = normalizeText(block);

    if (!block) {
      continue;
    }

    questions.push({
      index: questions.length + 1,
      topic: current.topic,
      questionNumber: current.questionNumber,
      text: block,
    });
  }

  return questions;
}

function extractAnswers(docxText) {
  const lines = normalizeText(docxText)
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  return lines
    .filter((line) => !/^AZ\s*204\s*Answer\s*sheet$/i.test(line))
    .filter((line) => !/^Topic\s+\d+$/i.test(line))
    .map((line, idx) => ({
      index: idx + 1,
      text: line,
    }));
}

function toMarkdown(questions, answers, paired) {
  const parts = [];
  parts.push("# AZ-204 Extracted Questions and Answers");
  parts.push("");
  parts.push(`- Questions extracted: ${questions.length}`);
  parts.push(`- Answers extracted: ${answers.length}`);
  parts.push(`- Paired by order: ${paired.length}`);
  parts.push("");

  for (const row of paired) {
    parts.push(`## Q${row.questionIndex} (Topic ${row.topic}, Original #${row.questionNumber})`);
    parts.push("");
    parts.push(row.questionText);
    parts.push("");
    parts.push(`**Answer ${row.answerIndex}:** ${row.answerText}`);
    parts.push("");
  }

  return `${parts.join("\n")}\n`;
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });

  const pdfBuffer = await fs.readFile(PDF_PATH);
  const parser = new PDFParse({ data: pdfBuffer });
  const pdfResult = await parser.getText();
  await parser.destroy();

  const questions = extractQuestions(pdfResult.text);
  const docxResult = await mammoth.extractRawText({ path: DOCX_PATH });
  const answers = extractAnswers(docxResult.value);

  const pairCount = Math.min(questions.length, answers.length);
  const paired = Array.from({ length: pairCount }, (_, i) => ({
    questionIndex: questions[i].index,
    topic: questions[i].topic,
    questionNumber: questions[i].questionNumber,
    questionText: questions[i].text,
    answerIndex: answers[i].index,
    answerText: answers[i].text,
  }));

  await fs.writeFile(`${OUT_DIR}/questions.json`, JSON.stringify(questions, null, 2), "utf8");
  await fs.writeFile(`${OUT_DIR}/answers.json`, JSON.stringify(answers, null, 2), "utf8");
  await fs.writeFile(`${OUT_DIR}/paired-qa.json`, JSON.stringify(paired, null, 2), "utf8");
  await fs.writeFile(`${OUT_DIR}/paired-qa.md`, toMarkdown(questions, answers, paired), "utf8");

  console.log(`Questions extracted: ${questions.length}`);
  console.log(`Answers extracted: ${answers.length}`);
  console.log(`Pairs written: ${paired.length}`);
  console.log(`Output folder: ${OUT_DIR}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
