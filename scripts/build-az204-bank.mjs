import fs from "node:fs/promises";

const IN_Q = "src/new/extracted/questions.json";
const IN_A = "src/new/extracted/answers.json";
const IN_OCR = "src/new/extracted/az204-ocr-options.json";
const IN_MANUAL = "src/new/extracted/az204-manual-overrides.json";
const OUT_TS = "src/data/banks/az204.generated.ts";

const TYPE_HINTS = {
  DRAG_DROP: /(drag\s*drop|select\s+and\s+place)/i,
  HOTSPOT: /\bhotspot\b/i,
  YES_NO_GRID: /(for each of the following statements[\s\S]*select yes[\s\S]*otherwise[\s\S]*select no)/i,
  MULTI: /(each\s+correct\s+answer\s+presents\s+part\s+of\s+the\s+solution|choose\s+two|select\s+two|select\s+all\s+that\s+apply|choose two)/i,
};

function cleanText(s) {
  return String(s ?? "")
    .replace(/\r/g, "")
    .replace(/âœ“|âœ—|✓|✗/g, "")
    .replace(/\u0000/g, "")
    .replace(/\u00a0/g, " ")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function parseOptionLine(line) {
  const m = line.match(/^([A-Z])\.\s+(.+)$/);
  if (!m) return null;
  return { id: m[1], text: m[2].trim() };
}

function parseOptionsAndPrompt(lines) {
  const options = [];
  const bodyLines = [];
  let currentOption = null;

  for (const raw of lines) {
    const line = raw.trim();
    const opt = parseOptionLine(line);
    if (opt) {
      currentOption = { ...opt };
      options.push(currentOption);
      continue;
    }

    const startsNewSection = /^(hot area:|select and place:|note:|instructions:)/i.test(line);
    const looksLikePrompt = /\?$/.test(line) || /^(you\s|what\s|which\s|how\s|does\s)/i.test(line);

    if (currentOption && line && !startsNewSection && !looksLikePrompt) {
      currentOption.text = `${currentOption.text} ${line}`.replace(/\s+/g, " ").trim();
      continue;
    }

    currentOption = null;
    bodyLines.push(raw);
  }

  return { options, prompt: cleanText(bodyLines.join("\n")) };
}

function normalizeTopic(topicNumber) {
  return `Topic ${topicNumber}`;
}

function expectedSlotsFromPrompt(prompt) {
  const p = prompt.toLowerCase();
  if (/\bwhich\s+three\b|\bthree\s+settings\b|\bthree\s+actions\b/.test(p)) return 3;
  if (/\bwhich\s+four\b|\bfour\s+settings\b|\bfour\s+actions\b/.test(p)) return 4;
  if (/\bwhich\s+five\b|\bfive\s+settings\b|\bfive\s+actions\b/.test(p)) return 5;
  if (/\bwhich\s+two\b|\btwo\s+settings\b|\btwo\s+actions\b/.test(p)) return 2;
  return null;
}

function looksStandaloneAnswerLine(line) {
  const l = cleanText(line);
  if (!l) return false;
  if (/^[A-G](\s*,\s*[A-G])*$/i.test(l)) return true;
  if (/^(yes|no)$/i.test(l)) return true;
  if (/^(yes|no)\b/i.test(l)) return true;
  if (/^no\s+change\s+required/i.test(l)) return true;
  if (/^[A-G]\s*\(/i.test(l)) return true;
  return false;
}

function countAnswerParts(text) {
  const parts = splitAnswerParts(text);
  return parts.length;
}

function splitAnswerParts(answer) {
  const cleaned = cleanText(answer)
    .replace(/^answer\s*[:\-]\s*/i, "")
    .replace(/[“”]/g, '"')
    .replace(/\s+[–-]\s+/g, ", ")
    .replace(/\s+and\s+/gi, ", ");

  if (!cleaned) return [];

  // Preserve command-like fragments as separate slots by splitting on comma/semicolon.
  const raw = cleaned
    .split(/[,;\n]+/)
    .map((x) => x.trim())
    .filter(Boolean)
    .filter((x) => !/^(topic\s+\d+)$/i.test(x));

  // Collapse duplicated whitespace and remove tiny noise tokens.
  const parts = raw
    .map((x) => x.replace(/\s+/g, " ").trim())
    .filter((x) => x.length > 1);

  return parts;
}

function assignAnswerBlocks(questions, answerLines) {
  const blocks = [];
  let ai = 0;

  for (const q of questions) {
    const qText = cleanText(q.text);
    const isComposite = TYPE_HINTS.DRAG_DROP.test(qText) || TYPE_HINTS.HOTSPOT.test(qText);
    const expected = expectedSlotsFromPrompt(qText);

    if (!isComposite) {
      blocks.push(cleanText(answerLines[ai]?.text ?? ""));
      ai += 1;
      continue;
    }

    let consumed = 0;
    let joined = "";

    while (ai < answerLines.length && consumed < 5) {
      const line = cleanText(answerLines[ai]?.text ?? "");
      if (!line) {
        ai += 1;
        continue;
      }

      joined = joined ? `${joined}, ${line}` : line;
      ai += 1;
      consumed += 1;

      const parts = countAnswerParts(joined);
      const nextLine = cleanText(answerLines[ai]?.text ?? "");
      const nextLooksStandalone = looksStandaloneAnswerLine(nextLine);

      if (expected && parts < expected) continue;
      if (expected && parts >= expected) break;
      if (!expected && parts >= 2 && nextLooksStandalone) break;
      if (!expected && consumed >= 2 && nextLooksStandalone) break;
      if (!expected && consumed >= 3) break;
    }

    blocks.push(cleanText(joined));
  }

  return blocks;
}

function inferBaseType(prompt, optionsCount) {
  if (TYPE_HINTS.YES_NO_GRID.test(prompt)) return "hotspot-boolean";
  if (TYPE_HINTS.DRAG_DROP.test(prompt)) return "drag-drop";
  if (TYPE_HINTS.HOTSPOT.test(prompt)) return "hotspot-dropdown";
  if (TYPE_HINTS.MULTI.test(prompt)) return "multiple";
  if (optionsCount <= 1) return "hotspot-select";
  return "single";
}

function parseLetterAnswers(answer, options) {
  const validOptionIds = new Set(options.map((o) => o.id));
  const letters = [...cleanText(answer).matchAll(/\b([A-G])\b/g)].map((m) => m[1]);
  return [...new Set(letters.filter((x) => validOptionIds.has(x)))];
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
  if (entries.length === 0) return "{}";
  return `{\n${entries
    .map(([k, v]) => `${"  ".repeat(indent + 1)}${k}: ${toTsLiteral(v, indent + 1)}`)
    .join(",\n")}\n${pad}}`;
}

function buildMappingQuestion(base, type, options, answerText, issues, ocrOptions = []) {
  const expected = expectedSlotsFromPrompt(base.prompt);
  const parts = splitAnswerParts(answerText);

  let pool = [...options];
  const ensureOption = (text) => {
    const normalized = text.toLowerCase();
    const existing = pool.find((o) => o.text.toLowerCase() === normalized);
    if (existing) return existing.id;
    const id = `O${pool.length + 1}`;
    pool.push({ id, text });
    return id;
  };

  for (const o of ocrOptions) ensureOption(o);

  const mappedIds = [];
  for (const p of parts) mappedIds.push(ensureOption(p));

  const slotCount = Math.max(expected ?? 0, mappedIds.length, 1);
  const targets = Array.from({ length: slotCount }, (_, i) => ({ id: `t${i + 1}`, text: `Blank ${i + 1}` }));

  const correct = [];
  for (let i = 0; i < targets.length; i += 1) {
    const optId = mappedIds[i] ?? mappedIds[mappedIds.length - 1];
    if (optId) correct.push(`${targets[i].id}:${optId}`);
  }

  if (!correct.length) {
    const fallbackId = ensureOption(cleanText(answerText) || "No extracted answer");
    correct.push(`t1:${fallbackId}`);
    issues.push(`Q${base.number}: mapping fallback used`);
  }

  return {
    ...base,
    type,
    options: pool,
    targets,
    correct,
    explanation: `Source answer: ${cleanText(answerText) || "(missing)"}`,
  };
}

async function main() {
  const questions = JSON.parse(await fs.readFile(IN_Q, "utf8"));
  const answerLines = JSON.parse(await fs.readFile(IN_A, "utf8"));
  let ocrMap = {};
  let manualOverrides = {};
  try {
    ocrMap = JSON.parse(await fs.readFile(IN_OCR, "utf8"));
  } catch {
    ocrMap = {};
  }
  try {
    manualOverrides = JSON.parse(await fs.readFile(IN_MANUAL, "utf8"));
  } catch {
    manualOverrides = {};
  }
  const answerBlocks = assignAnswerBlocks(questions, answerLines);

  const bank = [];
  const issues = [];

  for (let i = 0; i < questions.length; i += 1) {
    const q = questions[i];
    const answerText = cleanText(answerBlocks[i] ?? "");

    const promptLines = cleanText(q.text).split("\n");
    const parsedPrompt = parseOptionsAndPrompt(promptLines);
    const options = parsedPrompt.options;
    const manual = manualOverrides[q.index] ?? null;
    const ocrOptions = (manual?.options ?? ocrMap[q.index]?.options ?? []).filter(Boolean);
    const prompt = parsedPrompt.prompt;
    const inferred = inferBaseType(prompt, options.length);

    const base = {
      id: q.index,
      number: q.questionNumber,
      topic: normalizeTopic(q.topic),
      prompt,
      keySource: "source",
      explanation: `Source answer: ${answerText || "(missing)"}`,
    };

    if (inferred === "hotspot-boolean") {
      const yn = [...answerText.matchAll(/\b(YES|NO)\b/gi)].map((m) => m[1].toUpperCase());
      const statements = options.length
        ? options.map((o, idx) => ({ id: `s${idx + 1}`, text: o.text, answer: (yn[idx] ?? "NO") === "YES" }))
        : [];

      if (!statements.length) {
        const answer = /\bNO\b/i.test(answerText) ? "B" : "A";
        bank.push({
          ...base,
          type: "single",
          options: [
            { id: "A", text: "Yes" },
            { id: "B", text: "No" },
          ],
          correct: [answer],
        });
        issues.push(`Q${base.number}: boolean hotspot collapsed to single`);
      } else {
        bank.push({ ...base, type: "hotspot-boolean", statements });
      }
      continue;
    }

    if (inferred === "drag-drop" || inferred === "hotspot-dropdown") {
      const mapped = buildMappingQuestion(base, inferred, options, answerText, issues, ocrOptions);
      if (manual?.targets && Array.isArray(manual.targets) && manual.targets.length > 0) {
        mapped.targets = manual.targets.map((t, idx) => ({ id: `t${idx + 1}`, text: t }));
      }
      if (manual?.correctOrder && Array.isArray(manual.correctOrder) && manual.correctOrder.length > 0) {
        const optionByText = new Map(mapped.options.map((o) => [o.text.toLowerCase(), o.id]));
        const newCorrect = [];
        for (let i = 0; i < mapped.targets.length; i += 1) {
          const wanted = String(manual.correctOrder[i] ?? "").toLowerCase();
          const id = optionByText.get(wanted);
          if (id) newCorrect.push(`${mapped.targets[i].id}:${id}`);
        }
        if (newCorrect.length === mapped.targets.length) mapped.correct = newCorrect;
      }
      bank.push(mapped);
      continue;
    }

    let type = inferred === "hotspot-select" ? "single" : inferred;
    const letters = parseLetterAnswers(answerText, options);

    if (options.length === 0) {
      const sourceAnswer = answerText || "No extracted answer";
      bank.push({
        ...base,
        type: "single",
        options: [
          { id: "A", text: sourceAnswer },
          { id: "B", text: "Other / unsure" },
        ],
        correct: ["A"],
      });
      issues.push(`Q${base.number}: no options fallback used`);
      continue;
    }

    if (type === "multiple") {
      const correct = letters.length >= 2 ? letters : [letters[0] ?? options[0].id];
      if (letters.length < 2) issues.push(`Q${base.number}: multiple fallback used`);
      bank.push({ ...base, type, options, correct });
      continue;
    }

    const singleCorrect = letters[0] ?? options[0].id;
    if (!letters[0]) issues.push(`Q${base.number}: single fallback used`);
    bank.push({ ...base, type: "single", options, correct: [singleCorrect] });
  }

  const out = `import type { Question } from "../../types";\n\nexport const az204Questions: Question[] = ${toTsLiteral(bank, 0)};\n`;
  await fs.mkdir("src/data/banks", { recursive: true });
  await fs.writeFile(OUT_TS, out, "utf8");
  await fs.writeFile(
    "src/new/extracted/az204-build-report.json",
    JSON.stringify(
      {
        totalQuestions: questions.length,
        produced: bank.length,
        unresolved: issues,
      },
      null,
      2,
    ),
    "utf8",
  );

  console.log(`AZ-204 questions produced: ${bank.length}`);
  console.log(`Unresolved/fallback flags: ${issues.length}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
