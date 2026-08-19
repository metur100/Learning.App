import fs from 'fs';

const paired = JSON.parse(fs.readFileSync('src/new/extracted/az400-paired-qa.json', 'utf8'));
const ids = JSON.parse(fs.readFileSync('src/new/extracted/_topic4_composite_ids.json', 'utf8')).map(x=>x.id);
const ocr = JSON.parse(fs.readFileSync('src/new/extracted/az400-ocr-options.json', 'utf8'));

const byId = {};
paired.forEach(p => byId[p.index] = p);

const out = {};
ids.forEach(id => {
  out[id] = {
    paired: byId[id],
    ocr: ocr[String(id)] || null,
  };
});

const scratchDir = 'C:/Users/TURKES~1/AppData/Local/Temp/claude/c--Users-TurkesMedin-repos-Medin-Learning-App/f1af5d5d-9e28-46eb-8c41-aa95f9b8ecb8/scratchpad';
fs.writeFileSync(scratchDir + '/topic4_composite_combined.json', JSON.stringify(out, null, 2));
console.log('done', Object.keys(out).length);
