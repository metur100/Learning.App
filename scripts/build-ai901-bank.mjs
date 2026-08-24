import fs from "node:fs/promises";
import path from "node:path";

const HTML_DIR = "src/images/AI-901";
const EXISTING_TS = "src/data/questions.ts";
const OUT_TS = "src/data/banks/ai901.generated.ts";
const OUT_REPORT = "src/extracted/ai901-build-report.json";

function cleanText(s) {
  return String(s ?? "")
    .replace(/\r/g, "")
    .replace(/\u00a0/g, " ")
    .replace(/\u0000/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function decodeEntities(s) {
  return String(s ?? "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/gi, "'")
    .replace(/&#(\d+);/g, (_m, n) => String.fromCharCode(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_m, n) => String.fromCharCode(parseInt(n, 16)));
}

function htmlToText(html) {
  const withBreaks = String(html ?? "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n")
    .replace(/<p\b[^>]*>/gi, "")
    .replace(/<li\b[^>]*>/gi, "- ")
    .replace(/<\/li>/gi, "\n")
    .replace(/<[^>]+>/g, "");

  return cleanText(decodeEntities(withBreaks));
}

function normalizePrompt(s) {
  return cleanText(s)
    .toLowerCase()
    .replace(/\bhotspot\b/g, "")
    .replace(/\bnote:\s*each correct selection is worth one point\.?/g, "")
    .replace(/[^a-z0-9\n ]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractDisplayedQuestionCards(htmlText) {
  const out = [];
  const headerRegex = /Question\s*(\d+)\s*<span/gi;
  const markers = [...htmlText.matchAll(headerRegex)].map((m) => ({
    number: Number(m[1]),
    start: m.index,
  }));

  for (let i = 0; i < markers.length; i += 1) {
    const cur = markers[i];
    const next = markers[i + 1];
    const block = htmlText.slice(cur.start, next ? next.start : htmlText.length);

    const promptMatch = block.match(/<div class="prose[^\"]*max-w-none">([\s\S]*?)<\/div>/i);
    const prompt = promptMatch ? htmlToText(promptMatch[1]) : "";

    const options = [];
    const optionRegex =
      /<span class="flex size-6[^\"]*">\s*([A-F])\s*<\/span><div class="prose[^\"]*">([\s\S]*?)<\/div><span class="flex min-h-6/gi;
    let om;
    while ((om = optionRegex.exec(block)) !== null) {
      options.push({ id: om[1], text: cleanText(htmlToText(om[2])) });
    }

    const correctMatch = block.match(/<h3[^>]*>\s*Correct answer:\s*([A-F](?:\s*,\s*[A-F])*)\s*<\/h3>/i);
    const correct = correctMatch
      ? [...new Set(correctMatch[1].split(",").map((x) => x.trim().toUpperCase()).filter(Boolean))]
      : [];

    out.push({
      number: cur.number,
      prompt,
      promptNorm: normalizePrompt(prompt),
      options,
      correct,
    });
  }

  return out;
}

function inferTopic(prompt) {
  const p = prompt.toLowerCase();
  if (/(speech|voice|text to speech|speech sdk)/.test(p)) return "Speech";
  if (/(openai|gpt|prompt|agent|foundry model|responses api|token)/.test(p)) return "Generative AI";
  if (/(responsible ai|fairness|transparency|privacy|security|inclusiveness|accountability)/.test(p)) return "Responsible AI";
  if (/(vision|image|ocr|face|object detection|classification|custom vision)/.test(p)) return "Vision";
  if (/(language|sentiment|key phrase|entity|translate|question answering|conversational language)/.test(p)) return "Language";
  if (/(content understanding|invoice|document)/.test(p)) return "Content Understanding";
  if (/(knowledge mining|search|indexer)/.test(p)) return "Azure AI Search";
  return "AI-901";
}

function inferType(prompt, selectedCount, optionsCount) {
  const p = prompt.toLowerCase();
  if (p.includes("for each of the following statements") && p.includes("select yes") && p.includes("select no")) {
    return "hotspot-boolean";
  }
  if (p.includes("drag") || p.includes("select and place")) return "drag-drop";
  if (p.includes("hotspot") || p.includes("drop-down")) {
    if (selectedCount > 1) return "hotspot-dropdown";
    return "hotspot-select";
  }
  if (selectedCount > 1) return "multiple";
  if (optionsCount <= 1) return "hotspot-select";
  return "single";
}

function parseExistingPrompts(tsText) {
  const prompts = new Set();
  const regex = /prompt:\s*'((?:\\.|[^'\\])*)'/g;
  let m;
  while ((m = regex.exec(tsText)) !== null) {
    const unescaped = m[1]
      .replace(/\\n/g, "\n")
      .replace(/\\'/g, "'")
      .replace(/\\\\/g, "\\");
    prompts.add(normalizePrompt(unescaped));
  }
  return prompts;
}

function parseExistingQuestions(tsText) {
  const match = tsText.match(/export const questions: Question\[] = ([\s\S]*);\s*$/);
  if (!match) return [];
  const source = `(${match[1]})`;
  try {
    // eslint-disable-next-line no-new-func
    return Function(`"use strict"; return ${source};`)();
  } catch {
    return [];
  }
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
  const entries = Object.entries(value);
  if (!entries.length) return "{}";
  return `{\n${entries.map(([k, v]) => `${"  ".repeat(indent + 1)}${k}: ${toTsLiteral(v, indent + 1)}`).join(",\n")}\n${pad}}`;
}

async function main() {
  const files = (await fs.readdir(HTML_DIR))
    .filter((f) => f.endsWith(".html"))
    .sort((a, b) => a.localeCompare(b));

  const existingText = await fs.readFile(EXISTING_TS, "utf8");
  const existingPromptNorms = parseExistingPrompts(existingText);
  const existingQuestions = parseExistingQuestions(existingText);
  const existingByPrompt = new Map(existingQuestions.map((q) => [normalizePrompt(q.prompt), q]));

  const newCandidates = [];
  const extractionIssues = [];

  for (const file of files) {
    const fullPath = path.join(HTML_DIR, file);
    const html = await fs.readFile(fullPath, "utf8");

    const cards = extractDisplayedQuestionCards(html);

    for (const card of cards) {
      const prompt = cleanText(card.prompt);
      const options = card.options;
      const selected = card.correct;
      const inferredType = inferType(prompt, selected.length, options.length);
      const existingMatch = existingByPrompt.get(normalizePrompt(prompt));

      const base = {
        id: 50000 + card.number,
        number: card.number,
        topic: inferTopic(prompt),
        prompt,
        keySource: selected.length > 0 ? "source" : "domain",
        explanation:
          selected.length > 0
            ? `Source answer: ${selected.join(", ")}`
            : "Source did not expose the answer key in this capture.",
      };

      if (inferredType === "hotspot-boolean" && options.length > 0) {
        const yesNo = selected.length ? selected.map((x) => x.toUpperCase()) : [];
        newCandidates.push({
          ...base,
          type: "hotspot-boolean",
          statements: options.map((o, idx2) => ({
            id: `s${idx2 + 1}`,
            text: o.text,
            answer: yesNo.includes(o.id),
          })),
        });
        continue;
      }

      if (!options.length) {
        if (existingMatch) {
          newCandidates.push({
            ...base,
            topic: existingMatch.topic,
            keySource: existingMatch.keySource,
            explanation: existingMatch.explanation,
            type: existingMatch.type,
            options: existingMatch.options,
            statements: existingMatch.statements,
            targets: existingMatch.targets,
            correct: existingMatch.correct,
            codeContext: existingMatch.codeContext,
          });
          continue;
        }

        if (inferredType === "hotspot-boolean") {
          newCandidates.push({
            ...base,
            type: "hotspot-boolean",
            statements: [
              { id: "s1", text: "Statement 1 (from screenshot)", answer: false },
              { id: "s2", text: "Statement 2 (from screenshot)", answer: false },
              { id: "s3", text: "Statement 3 (from screenshot)", answer: false },
            ],
            explanation: "Question structure recovered from source page, but statement text/key requires screenshot transcription.",
          });
          extractionIssues.push(`${file}: question ${card.number} missing statement text/key`);
          continue;
        }

        if (inferredType === "drag-drop" || inferredType === "hotspot-dropdown") {
          newCandidates.push({
            ...base,
            type: inferredType,
            options: [
              { id: "A", text: "Option 1 (from screenshot)" },
              { id: "B", text: "Option 2 (from screenshot)" },
            ],
            targets: [
              { id: "t1", text: "Target 1 (from screenshot)" },
            ],
            correct: ["t1:A"],
            explanation: "Question structure recovered from source page, but full drag/drop values require screenshot transcription.",
          });
          extractionIssues.push(`${file}: question ${card.number} missing drag/drop text/key`);
          continue;
        }

        newCandidates.push({
          ...base,
          type: "single",
          options: [
            { id: "A", text: "Insufficient data in imported page capture" },
            { id: "B", text: "Other / unsure" }
          ],
          correct: selected[0] ? [selected[0]] : ["A"],
        });
        extractionIssues.push(`${file}: question ${card.number} had no extracted options (fallback created)`);
        continue;
      }

      if (inferredType === "multiple") {
        const correct = selected.length ? selected : [options[0].id];
        if (!selected.length) extractionIssues.push(`${file}: question ${card.number} multiple had no selected option`);
        newCandidates.push({ ...base, type: "multiple", options, correct });
        continue;
      }

      const singleCorrect = selected[0] ?? options[0].id;
      if (!selected.length) extractionIssues.push(`${file}: question ${card.number} single had no selected option`);
      newCandidates.push({
        ...base,
        type: inferredType === "hotspot-select" ? "single" : inferredType,
        options,
        correct: [singleCorrect],
      });
    }
  }

  const byNumber = new Map();
  for (const q of newCandidates) {
    if (!byNumber.has(q.number)) byNumber.set(q.number, q);
  }

  const allByNumber = [...byNumber.values()].sort((a, b) => a.number - b.number);
  const duplicateReport = {
    againstExisting: [],
    withinNew: [],
  };

  const seenNewPrompts = new Set();
  for (const q of allByNumber) {
    const norm = normalizePrompt(q.prompt);
    if (!norm) continue;
    if (existingPromptNorms.has(norm)) duplicateReport.againstExisting.push(q.number);
    if (seenNewPrompts.has(norm)) duplicateReport.withinNew.push(q.number);
    seenNewPrompts.add(norm);
  }

  const outTs = `import type { Question } from "../../types";\n\nexport const ai901NewQuestions: Question[] = ${toTsLiteral(allByNumber, 0)};\n`;

  await fs.mkdir(path.dirname(OUT_TS), { recursive: true });
  await fs.mkdir(path.dirname(OUT_REPORT), { recursive: true });
  await fs.writeFile(OUT_TS, outTs, "utf8");
  await fs.writeFile(
    OUT_REPORT,
    JSON.stringify(
      {
        sourceFiles: files,
        extractedCandidates: newCandidates.length,
        uniqueByNumber: byNumber.size,
        addedToBank: allByNumber.length,
        duplicates: duplicateReport,
        issues: extractionIssues,
      },
      null,
      2,
    ),
    "utf8",
  );

  console.log(`AI-901 new candidates: ${newCandidates.length}`);
  console.log(`AI-901 unique by number: ${byNumber.size}`);
  console.log(`AI-901 added after dedupe: ${allByNumber.length}`);
  console.log(`Duplicates vs existing: ${duplicateReport.againstExisting.length}`);
  console.log(`Duplicates within new: ${duplicateReport.withinNew.length}`);
  console.log(`Report: ${OUT_REPORT}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
