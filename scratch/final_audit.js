/**
 * final_audit.js - Properly checks each topic's own mindmap/formulas
 * by splitting by topic boundaries (looking for the NEXT id: or end of array).
 */
const fs = require('fs');

function findClosingBrace(src, openIdx) {
  let depth = 0;
  for (let i = openIdx; i < src.length; i++) {
    if (src[i] === '{') depth++;
    else if (src[i] === '}') { depth--; if (depth === 0) return i; }
  }
  return -1;
}

const src = fs.readFileSync('data.js', 'utf8');

// Get all topic id positions in order
const idRe = /id:\s*["']([^"']+)["']/g;
let m;
const hits = [];
while ((m = idRe.exec(src)) !== null) {
  hits.push({ id: m[1], idx: m.index });
}

let total = 0, emptyFormulas = [], emptyMindmaps = [];

for (let i = 0; i < hits.length; i++) {
  const { id, idx } = hits[i];
  const nextIdx = (i + 1 < hits.length) ? hits[i + 1].idx : src.length;
  const block = src.slice(idx, nextIdx);

  // Must have formulas and mindmap to be a "topic"
  if (!block.includes('formulas:') || !block.includes('mindmap:')) continue;

  total++;

  // Check formulas
  const fMatch = /formulas:\s*[`'"]([^`]+)[`'"]/.exec(block);
  if (!fMatch || fMatch[1].trim().length < 20) {
    emptyFormulas.push(id);
  }

  // Check mindmap branches
  const mmKeyIdx = block.indexOf('mindmap:');
  if (mmKeyIdx === -1) { emptyMindmaps.push(id); continue; }

  let braceStart = mmKeyIdx + 8;
  while (braceStart < block.length && block[braceStart] !== '{') braceStart++;
  if (block[braceStart] !== '{') { emptyMindmaps.push(id); continue; }

  const braceEnd = findClosingBrace(block, braceStart);
  if (braceEnd === -1) { emptyMindmaps.push(id); continue; }

  const mmStr = block.slice(braceStart, braceEnd + 1);
  const branchCount = (mmStr.match(/"title":/g) || []).length;
  if (branchCount < 2) {
    emptyMindmaps.push(id);
  }
}

console.log('Total topic-level entries:', total);
console.log('Empty Formulas:', emptyFormulas.length, emptyFormulas.length > 0 ? '| ' + emptyFormulas.join(', ') : '');
console.log('Empty Mindmaps:', emptyMindmaps.length, emptyMindmaps.length > 0 ? '| ' + emptyMindmaps.join(', ') : '');
