import fs from "node:fs/promises";
import path from "node:path";
import { createWorker } from "tesseract.js";

const DIR = "src/images/AI-901";
const OUT = "src/extracted/ai901-screenshot-ocr.json";

async function main() {
  const files = (await fs.readdir(DIR))
    .filter((f) => /^Screenshot .*\.png$/i.test(f))
    .sort((a, b) => a.localeCompare(b));

  const worker = await createWorker("eng");
  const results = [];

  for (const file of files) {
    const fullPath = path.join(DIR, file);
    const { data } = await worker.recognize(fullPath);
    results.push({
      file,
      text: String(data?.text ?? "").replace(/\r/g, "").trim(),
    });
    console.log(`OCR done: ${file}`);
  }

  await worker.terminate();
  await fs.mkdir(path.dirname(OUT), { recursive: true });
  await fs.writeFile(OUT, JSON.stringify(results, null, 2), "utf8");

  console.log(`OCR files: ${results.length}`);
  console.log(`Output: ${OUT}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
