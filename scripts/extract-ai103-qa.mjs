// Extracts the AI-103 practice set from the Examice "Questions & Answers" PDF.
//
//   node scripts/extract-ai103-qa.mjs [path/to/pdf]
//
// Outputs (both committed, the PDF itself is not):
//   src/extracted/ai103-parsed.json  stem / options / CORRECT markers / suggested answer per question
//   src/extracted/ai103-media/       every embedded image (answer areas and exhibits), named p<page>_<n>.png
//
// The personal-copy watermark (header/footer lines) is stripped from the text.
import fs from "node:fs/promises";
import path from "node:path";
import { PDFParse } from "pdf-parse";

const PDF =
  process.argv[2] ??
  "src/data/AI-103/Examice _ Certification Exam Practice Questions & Answers.pdf";
const OUT_JSON = "src/extracted/ai103-parsed.json";
const OUT_MEDIA = "src/extracted/ai103-media";

function pageName(page, i) {
  return `p${String(page).padStart(3, "0")}_${i + 1}.png`;
}

/** Splits page texts into per-question line lists, dropping watermark lines. */
function splitQuestions(pages) {
  const questions = [];
  let cur = null;
  for (const p of pages) {
    for (const line of p.text.split("\n")) {
      const header = line.match(/^QUESTION (\d+)\s/);
      if (header) {
        cur = { number: Number(header[1]), pages: [], lines: [] };
        questions.push(cur);
        continue;
      }
      if (!cur) continue; // title page lines
      const cleaned = line
        .replace(/Personal copy · \S+@\S+/g, "")
        .replace(/Q\d+ · [A-Z][a-z]+ \d{1,2}, \d{4}/g, "")
        .replace(/\t/g, " ")
        .replace(/\s+$/g, "");
      if (cleaned === "" && line.trim() !== "") continue; // pure watermark line
      cur.lines.push(cleaned);
    }
    if (cur && !cur.pages.includes(p.num)) cur.pages.push(p.num);
  }
  return questions;
}

function parseQuestion(q, images) {
  const text = q.lines.join("\n").trim();
  const at = text.indexOf("SUGGESTED ANSWER");
  const body = (at >= 0 ? text.slice(0, at) : text).trim();
  const answer = at >= 0 ? text.slice(at + "SUGGESTED ANSWER".length).trim() : "";

  // Options are the last run of lines starting "A ", "B ", ... (case studies
  // contain prose lines that also start with "A ").
  const lines = body.split("\n");
  let start = -1;
  for (let i = lines.length - 1; i >= 0; i--) {
    if (/^A\s/.test(lines[i]) && lines.slice(i + 1).some((x) => /^B\s/.test(x))) {
      start = i;
      break;
    }
  }
  const options = [];
  const correct = [];
  if (start >= 0) {
    let expect = "A";
    for (const line of lines.slice(start)) {
      const m = line.match(/^([A-H])\s+(.*)$/);
      if (m && m[1] === expect) {
        options.push({ id: m[1], text: m[2] });
        expect = String.fromCharCode(expect.charCodeAt(0) + 1);
      } else if (options.length) {
        options[options.length - 1].text += " " + line.trim();
      }
    }
    for (const o of options) {
      if (/\bCORRECT\b/.test(o.text)) correct.push(o.id);
      o.text = o.text.replace(/\s*\bCORRECT\b\s*/g, " ").replace(/\s+/g, " ").trim();
    }
  }
  const stem = (start >= 0 ? lines.slice(0, start) : lines).join("\n").trim();
  const head = stem.split("\n").slice(0, 2).join("\n");
  const kind = /^DRAG DROP/m.test(head)
    ? "drag-drop"
    : /^HOTSPOT/m.test(head)
      ? "hotspot"
      : correct.length > 1
        ? "multiple"
        : "single";

  const sugg = answer.match(/The suggested answer is ([A-H](?:\s*(?:,|and)\s*[A-H])*)\./);
  return {
    number: q.number,
    kind,
    pages: q.pages,
    stem,
    options,
    correct,
    suggested: sugg ? sugg[1].split(/\s*(?:,|and)\s*/) : null,
    // Source reasoning without the "The suggested answer is X." sentence.
    reasoning: (sugg ? answer.replace(sugg[0], "") : answer).trim(),
    images: images.filter((im) => q.pages.includes(im.page)).map((im) => im.name),
  };
}

async function main() {
  const parser = new PDFParse({ data: await fs.readFile(PDF) });
  const { pages } = await parser.getText();
  const imageResult = await parser.getImage({ imageThreshold: 40 });
  await parser.destroy();

  await fs.rm(OUT_MEDIA, { recursive: true, force: true });
  await fs.mkdir(OUT_MEDIA, { recursive: true });
  const images = [];
  for (const page of imageResult.pages) {
    for (const [i, img] of page.images.entries()) {
      const name = pageName(page.pageNumber, i);
      images.push({ page: page.pageNumber, name });
      await fs.writeFile(path.join(OUT_MEDIA, name), img.data);
    }
  }

  const questions = splitQuestions(pages).map((q) => parseQuestion(q, images));
  const leaked = questions.filter((q) => /@|Issued to|Personal copy/.test(JSON.stringify(q)));
  if (leaked.length) throw new Error(`Watermark left in questions ${leaked.map((q) => q.number)}`);

  await fs.writeFile(OUT_JSON, JSON.stringify(questions, null, 2) + "\n", "utf8");
  console.log(`Questions: ${questions.length}, images: ${images.length}`);
  console.log(`Output: ${OUT_JSON}, ${OUT_MEDIA}/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
