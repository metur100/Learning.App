import fs from "node:fs";

const txt = fs.readFileSync("src/data/banks/az204.generated.ts", "utf8");
const match = txt.match(/export const az204Questions: Question\[] = ([\s\S]*);\s*$/);
if (!match) throw new Error("Could not parse az204.generated.ts");
const data = eval(`(${match[1]})`);

const rows = data.filter((q) => q.type === "drag-drop" || q.type === "hotspot-dropdown");
let out = "# AZ-204 Drag/Hotspot Audit\n\n";
out += `Total mapped: ${rows.length}\n\n`;

for (const q of rows) {
  out += `## Q${q.number} (${q.topic}) - ${q.type}\n`;
  out += `${String(q.prompt || "").split("\n")[0]}\n\n`;
  out += `- Source: ${String(q.explanation || "").replace("Source answer: ", "")}\n`;
  out += `- Targets: ${(q.targets || []).map((t) => t.text).join(" | ")}\n`;
  out += `- Options: ${(q.options || []).map((o) => o.text).join(" | ")}\n`;
  out += `- Key: ${(q.correct || []).join(", ")}\n\n`;
}

fs.writeFileSync("src/new/extracted/az204-drag-hotspot-audit.md", out, "utf8");
console.log("written audit");
