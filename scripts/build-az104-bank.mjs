import fs from "node:fs/promises";

const IN_PAIRED = "src/extracted/az104-paired-qa.json";
const OUT_TS = "src/data/banks/az104.generated.ts";
const OUT_REPORT = "src/extracted/az104-build-report.json";

const TYPE_HINTS = {
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

function normalizeTopic(topic) {
  const t = cleanText(topic);
  return /^topic\s+/i.test(t) ? t : `Topic ${t}`;
}

function inferType(prompt, optionCount, selectedCount) {
  if (TYPE_HINTS.YES_NO_GRID.test(prompt)) return "hotspot-boolean";
  if (TYPE_HINTS.MULTI.test(prompt)) return "multiple";
  if (selectedCount >= 2) return "multiple";
  if (optionCount <= 1) return "hotspot-select";
  return "single";
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

async function main() {
  const paired = JSON.parse(await fs.readFile(IN_PAIRED, "utf8"));

  const bank = [];
  const issues = [];

  for (const q of paired) {
    const prompt = cleanText(q.questionText);
    const options = (q.options ?? []).map((text, idx) => ({
      id: String.fromCharCode(65 + idx),
      text: cleanText(text),
    }));

    const bits = Array.isArray(q.bitFlags) ? q.bitFlags.map((x) => (x ? 1 : 0)) : [];
    while (bits.length < options.length) bits.push(0);

    const selected = options.filter((_o, idx) => bits[idx] === 1).map((o) => o.id);
    const inferred = inferType(prompt, options.length, selected.length);

    const base = {
      id: q.index,
      number: q.sourceNumber || q.index,
      topic: normalizeTopic(q.topic),
      prompt,
      keySource: selected.length > 0 ? "source" : "domain",
      explanation: `Source: ${q.sourceFile}${q.sourceNumber ? ` #${q.sourceNumber}` : ""}`,
    };

    if (inferred === "hotspot-boolean") {
      const statements = options.map((o, idx) => ({
        id: `s${idx + 1}`,
        text: o.text,
        answer: bits[idx] === 1,
      }));
      bank.push({ ...base, type: "hotspot-boolean", statements });
      continue;
    }

    if (options.length === 0) {
      bank.push({
        ...base,
        type: "single",
        options: [
          { id: "A", text: "No options extracted" },
          { id: "B", text: "Other / unsure" },
        ],
        correct: ["A"],
      });
      issues.push(`Q${base.number}: no options fallback used`);
      continue;
    }

    if (inferred === "multiple") {
      const correct = selected.length >= 1 ? selected : [options[0].id];
      if (selected.length === 0) issues.push(`Q${base.number}: multiple had no selected key`);
      bank.push({ ...base, type: "multiple", options, correct });
      continue;
    }

    const correctSingle = selected[0] ?? options[0].id;
    if (!selected[0]) issues.push(`Q${base.number}: single fallback used`);
    bank.push({ ...base, type: "single", options, correct: [correctSingle] });
  }

  const out = `import type { Question } from "../../types";\n\nexport const az104Questions: Question[] = ${toTsLiteral(bank, 0)};\n`;

  await fs.mkdir("src/data/banks", { recursive: true });
  await fs.writeFile(OUT_TS, out, "utf8");
  await fs.writeFile(
    OUT_REPORT,
    JSON.stringify(
      {
        totalQuestions: paired.length,
        produced: bank.length,
        unresolved: issues,
      },
      null,
      2,
    ),
    "utf8",
  );

  console.log(`AZ-104 questions produced: ${bank.length}`);
  console.log(`Unresolved/fallback flags: ${issues.length}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});