import fs from "node:fs/promises";

const IN_Q = "src/new/extracted/az305-questions.json";
const IN_PAIRED = "src/new/extracted/az305-paired-qa.json";
const OUT_TS = "src/data/banks/az305.generated.ts";
const OUT_REPORT = "src/new/extracted/az305-build-report.json";

const TYPE_HINTS = {
  DRAG_DROP: /(drag\s*drop|select\s+and\s+place)/i,
  HOTSPOT: /\bhotspot\b/i,
  YES_NO_GRID: /(for each of the following statements[\s\S]*select yes[\s\S]*otherwise[\s\S]*select no)/i,
  MULTI: /(each\s+correct\s+answer\s+presents\s+part\s+of\s+the\s+solution|choose\s+two|select\s+two|select\s+all\s+that\s+apply|choose two)/i,
};

function cleanText(s) {
  return String(s ?? "")
    .replace(/\r/g, "")
    .replace(/\u00a0/g, " ")
    .replace(/\u0000/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function normalizeTopic(topicNumber) {
  return `Topic ${topicNumber}`;
}

function normalizeSimple(s) {
  return cleanText(s)
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/\s+/g, " ")
    .toLowerCase()
    .trim();
}

function parseOptionLine(line) {
  const m = line.match(/^([A-F])\.\s+(.+)$/);
  if (!m) return null;
  return { id: m[1], text: cleanText(m[2]) };
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

    const startsNewSection = /^(hot area:|select and place:|note:|instructions:|answer area)$/i.test(line);
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

function expectedSlotsFromPrompt(prompt) {
  const p = prompt.toLowerCase();
  if (/\bwhich\s+three\b|\bthree\s+settings\b|\bthree\s+actions\b/.test(p)) return 3;
  if (/\bwhich\s+four\b|\bfour\s+settings\b|\bfour\s+actions\b/.test(p)) return 4;
  if (/\bwhich\s+five\b|\bfive\s+settings\b|\bfive\s+actions\b/.test(p)) return 5;
  if (/\bwhich\s+two\b|\btwo\s+settings\b|\btwo\s+actions\b/.test(p)) return 2;
  return null;
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
  const letters = [...cleanText(answer).matchAll(/\b([A-F])\b/g)].map((m) => m[1]);

  if (letters.length === 0) {
    const compact = cleanText(answer).replace(/\s+/g, "");
    if (/^[A-F]{1,6}$/i.test(compact)) {
      const asSplit = compact.toUpperCase().split("");
      return [...new Set(asSplit.filter((x) => validOptionIds.has(x)))];
    }
  }

  return [...new Set(letters.filter((x) => validOptionIds.has(x)))];
}

function splitAnswerParts(answer) {
  const cleaned = cleanText(answer)
    .replace(/^answer\s*[:\-]\s*/i, "")
    .replace(/[“”]/g, '"')
    .replace(/\s+[–-]\s+/g, ", ")
    .replace(/\s+and\s+/gi, ", ");

  if (!cleaned) return [];

  return cleaned
    .split(/[,;\n]+/)
    .map((x) => x.trim())
    .filter(Boolean)
    .map((x) => x.replace(/^([A-F])\.\s+/, "").trim())
    .filter((x) => x.length > 0);
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

function buildMappingQuestion(base, type, options, answerText, issues) {
  const expected = expectedSlotsFromPrompt(base.prompt);
  const parts = splitAnswerParts(answerText);

  let pool = [...options];
  const ensureOption = (text) => {
    const key = normalizeSimple(text);
    const existing = pool.find((o) => normalizeSimple(o.text) === key);
    if (existing) return existing.id;
    const id = `O${pool.length + 1}`;
    pool.push({ id, text: cleanText(text) });
    return id;
  };

  const mappedIds = [];
  for (const p of parts) {
    if (!p) continue;
    mappedIds.push(ensureOption(p));
  }

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

function isLikelyYesNoSeries(answer) {
  const m = cleanText(answer).match(/\b(YES|NO)\b/gi);
  return Boolean(m && m.length >= 1);
}

async function main() {
  const questions = JSON.parse(await fs.readFile(IN_Q, "utf8"));
  const paired = JSON.parse(await fs.readFile(IN_PAIRED, "utf8"));

  const answerByKey = new Map();
  for (const p of paired) {
    answerByKey.set(`${p.topic}:${p.questionNumber}`, cleanText(p.finalAnswer));
  }

  const bank = [];
  const issues = [];

  for (const q of questions) {
    const answerText = cleanText(answerByKey.get(`${q.topic}:${q.questionNumber}`) ?? q.sourceAnswer ?? "");
    const promptLines = cleanText(q.text).split("\n");
    const parsedPrompt = parseOptionsAndPrompt(promptLines);
    const options = parsedPrompt.options;
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

    if (inferred === "hotspot-boolean" || (!options.length && isLikelyYesNoSeries(answerText))) {
      const yn = [...answerText.matchAll(/\b(YES|NO)\b/gi)].map((m) => m[1].toUpperCase());
      const statements = options.length
        ? options.map((o, idx) => ({ id: `s${idx + 1}`, text: o.text, answer: (yn[idx] ?? "NO") === "YES" }))
        : [];

      if (statements.length) {
        bank.push({ ...base, type: "hotspot-boolean", statements });
      } else {
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
        issues.push(`Q${base.number}: yes/no collapsed to single`);
      }
      continue;
    }

    if (inferred === "drag-drop" || inferred === "hotspot-dropdown") {
      const mapped = buildMappingQuestion(base, inferred, options, answerText, issues);
      bank.push(mapped);
      continue;
    }

    const type = inferred === "hotspot-select" ? "single" : inferred;
    const letters = parseLetterAnswers(answerText, options);

    if (options.length === 0) {
      bank.push({
        ...base,
        type: "single",
        options: [
          { id: "A", text: answerText || "No extracted answer" },
          { id: "B", text: "Other / unsure" },
        ],
        correct: ["A"],
      });
      issues.push(`Q${base.number}: no options fallback used`);
      continue;
    }

    if (type === "multiple") {
      const correct = letters.length >= 2 ? letters : [letters[0] ?? options[0].id];
      if (letters.length < 2) {
        const parts = splitAnswerParts(answerText).map(normalizeSimple);
        if (parts.length >= 2) {
          const resolved = [];
          for (const p of parts) {
            const found = options.find((o) => normalizeSimple(o.text) === p);
            if (found) resolved.push(found.id);
          }
          if (resolved.length >= 2) {
            bank.push({ ...base, type, options, correct: [...new Set(resolved)] });
            continue;
          }
        }
        issues.push(`Q${base.number}: multiple fallback used`);
      }
      bank.push({ ...base, type, options, correct });
      continue;
    }

    const singleCorrect = letters[0] ?? options[0].id;
    if (!letters[0]) {
      const parts = splitAnswerParts(answerText).map(normalizeSimple);
      const direct = options.find((o) => parts.includes(normalizeSimple(o.text)));
      if (direct) {
        bank.push({ ...base, type: "single", options, correct: [direct.id] });
        continue;
      }
      issues.push(`Q${base.number}: single fallback used`);
    }
    bank.push({ ...base, type: "single", options, correct: [singleCorrect] });
  }

  const out = `import type { Question } from "../../types";\n\nexport const az305Questions: Question[] = ${toTsLiteral(bank, 0)};\n`;

  await fs.mkdir("src/data/banks", { recursive: true });
  await fs.writeFile(OUT_TS, out, "utf8");
  await fs.writeFile(
    OUT_REPORT,
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

  console.log(`AZ-305 questions produced: ${bank.length}`);
  console.log(`Unresolved/fallback flags: ${issues.length}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
