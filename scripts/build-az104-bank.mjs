import fs from "node:fs/promises";

const IN_PAIRED = "src/extracted/az104-paired-qa.json";
const IN_MANUAL = "src/extracted/az104-manual-overrides.json";
const OUT_TS = "src/data/banks/az104.generated.ts";
const OUT_REPORT = "src/extracted/az104-build-report.json";

// The source Anki note type ("AllInOne (kprim, mc, sc)") tags every note with
// an explicit QType field: 0 = kprim (a fixed yes/no statement grid), 1 = mc
// (multiple correct answers), 2 = sc (single correct answer). This is a hard
// authoring signal from the deck itself, so it takes priority over any
// text-based guess.
const KPRIM_QTYPE = "0";

const TYPE_HINTS = {
  // Drag-and-drop and dropdown-hotspot ("Hot Area:") questions get flattened
  // by the deck author into a plain option pool + correct-answer bit flags,
  // losing the original per-target grouping. We detect them from the prompt
  // wording so they render with the matching interactive widget instead of
  // a plain option list.
  DRAG_DROP: /(drag\s*drop|select\s+and\s+place)/i,
  HOTSPOT: /\bhotspot\b|\bhot\s*area\b|drop-?down menus?\s+to\s+select/i,
};

const NBSP = String.fromCharCode(0xa0);
const NUL_CHAR = String.fromCharCode(0x00);

function cleanText(s) {
  return String(s ?? "")
    .split(NBSP)
    .join(" ")
    .split(NUL_CHAR)
    .join("")
    .replace(/\r/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function normalizeTopic(topic) {
  const t = cleanText(topic);
  return /^topic\s+/i.test(t) ? t : `Topic ${t}`;
}

function inferType(qtype, prompt, selectedCount) {
  if (qtype === KPRIM_QTYPE) return "hotspot-boolean";
  if (TYPE_HINTS.DRAG_DROP.test(prompt)) return "drag-drop";
  if (TYPE_HINTS.HOTSPOT.test(prompt)) return "hotspot-dropdown";
  if (qtype === "1" || selectedCount >= 2) return "multiple";
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

/** Builds a drag-drop / hotspot-dropdown question from a flat option pool +
 * per-option correct bit flags (the deck's original per-target structure
 * isn't recoverable), assigning the flagged options in their source order to
 * generic sequential targets - the same "Blank N" convention the AZ-204 /
 * AZ-400 banks use for the same situation. */
function buildMappingQuestion(base, type, options, bits, issues) {
  const flaggedIds = options.filter((_o, idx) => bits[idx] === 1).map((o) => o.id);

  if (!flaggedIds.length) {
    issues.push(`Q${base.number}: ${type} had no flagged option, defaulted to first option`);
    flaggedIds.push(options[0].id);
  }

  const targets = flaggedIds.map((_id, i) => ({ id: `t${i + 1}`, text: `Blank ${i + 1}` }));
  const correct = targets.map((t, i) => `${t.id}:${flaggedIds[i]}`);

  return { ...base, type, options, targets, correct };
}

// A large share of the deck's drag-drop/hotspot notes actually encode a
// "for each of N boxes, pick a value" match (e.g. two dropdowns "App1" /
// "App2") rather than a single ordered sequence, but the author flattened
// each box's candidates into one pool by prefixing the option text with the
// box name ("App1: Access keys", "App2: Access control (IAM)", ...). When
// every option follows that "PREFIX: value" shape and each distinct prefix
// has exactly one flagged (correct) candidate, that's a reliable signal to
// rebuild the real per-target structure instead of collapsing it into
// meaningless "Blank 1" / "Blank 2" targets.
const PREFIX_PATTERN = /^([^:]{1,30}):\s*(.+)$/;

function detectPrefixGroups(options, bits) {
  const matches = options.map((o) => o.text.match(PREFIX_PATTERN));
  if (!matches.every(Boolean)) return null;

  const prefixOrder = [];
  for (const m of matches) {
    const prefix = m[1].trim();
    if (!prefixOrder.includes(prefix)) prefixOrder.push(prefix);
  }
  if (prefixOrder.length < 2) return null;

  const flagCountByPrefix = new Map(prefixOrder.map((p) => [p, 0]));
  matches.forEach((m, idx) => {
    if (bits[idx] !== 1) return;
    const prefix = m[1].trim();
    flagCountByPrefix.set(prefix, flagCountByPrefix.get(prefix) + 1);
  });
  const allExactlyOne = [...flagCountByPrefix.values()].every((c) => c === 1);
  if (!allExactlyOne) return null;

  return { matches, prefixOrder };
}

function buildPrefixMappingQuestion(base, type, options, bits, prefixInfo) {
  const { matches, prefixOrder } = prefixInfo;
  const targets = prefixOrder.map((prefix, i) => ({ id: `t${i + 1}`, text: prefix }));
  // Strip the now-redundant "PREFIX: " lead-in from the displayed option text
  // since the target row it belongs to already carries that label.
  const poolOptions = options.map((o, idx) => ({ id: o.id, text: matches[idx][2].trim() }));

  const correct = targets.map((t, ti) => {
    const prefix = prefixOrder[ti];
    const idx = options.findIndex((_o, i) => matches[i][1].trim() === prefix && bits[i] === 1);
    return `${t.id}:${options[idx].id}`;
  });

  return { ...base, type, options: poolOptions, targets, correct };
}

/** Applies a per-question manual correction (target labels and/or explicit
 * correct order, matched by option text) for the rare case a correct answer
 * can't be reliably inferred from structure alone and had to be confirmed by
 * eye against the community answer-key screenshot. */
function applyManualOverride(built, manual) {
  if (!manual) return built;

  if (Array.isArray(manual.targets) && manual.targets.length > 0) {
    built.targets = manual.targets.map((t, idx) => ({ id: `t${idx + 1}`, text: t }));
  }

  if (Array.isArray(manual.correctOrder) && manual.correctOrder.length > 0) {
    const optionByText = new Map(built.options.map((o) => [o.text.toLowerCase(), o.id]));
    const newCorrect = [];
    for (let i = 0; i < built.targets.length; i += 1) {
      const wanted = String(manual.correctOrder[i] ?? "").toLowerCase();
      const id = optionByText.get(wanted);
      if (id) newCorrect.push(`${built.targets[i].id}:${id}`);
    }
    if (newCorrect.length === built.targets.length) built.correct = newCorrect;
  }

  return built;
}

async function main() {
  const paired = JSON.parse(await fs.readFile(IN_PAIRED, "utf8"));
  let manualOverrides = {};
  try {
    manualOverrides = JSON.parse(await fs.readFile(IN_MANUAL, "utf8"));
  } catch {
    manualOverrides = {};
  }

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
    const inferred = inferType(q.qtype, prompt, selected.length);

    const explanationLines = [];
    const explanationText = cleanText(q.explanationText ?? "");
    const sourceUrl = cleanText(q.sourceUrl ?? "");
    if (explanationText) explanationLines.push(explanationText);
    if (sourceUrl) explanationLines.push(`Reference: ${sourceUrl}`);
    explanationLines.push(`Source: ${q.sourceFile}${q.sourceNumber ? ` #${q.sourceNumber}` : ""}`);

    const base = {
      id: q.index,
      number: q.sourceNumber || q.index,
      topic: normalizeTopic(q.topic),
      prompt,
      keySource: inferred === "hotspot-boolean" || selected.length > 0 ? "source" : "domain",
      explanation: explanationLines.join("\n"),
    };

    if (inferred === "hotspot-boolean" && options.length > 0) {
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

    if (inferred === "drag-drop" || inferred === "hotspot-dropdown") {
      const prefixInfo = detectPrefixGroups(options, bits);
      const built = prefixInfo
        ? buildPrefixMappingQuestion(base, inferred, options, bits, prefixInfo)
        : buildMappingQuestion(base, inferred, options, bits, issues);
      bank.push(applyManualOverride(built, manualOverrides[q.index]));
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
        byType: bank.reduce((acc, q) => ({ ...acc, [q.type]: (acc[q.type] ?? 0) + 1 }), {}),
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
