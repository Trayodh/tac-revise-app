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

const idRe = /id:\s*["']([^"']+)["']/g;
let m;
const hits = [];
while ((m = idRe.exec(src)) !== null) hits.push({ id: m[1], idx: m.index });

let total = 0, emptyFormulas = [], emptyMindmaps = [];

for (let i = 0; i < hits.length; i++) {
  const { id, idx } = hits[i];
  const nextIdx = (i + 1 < hits.length) ? hits[i + 1].idx : src.length;
  const block = src.slice(idx, nextIdx);

  if (!block.includes('formulas:') || !block.includes('mindmap:')) continue;
  total++;

  // Check formulas
  const fMatch = /formulas:\s*[`'"]([^`]+)[`'"]/.exec(block);
  if (!fMatch || fMatch[1].trim().length < 20) emptyFormulas.push(id);

  // Check mindmap branches - count BOTH quoted and unquoted title
  const mmKeyIdx = block.indexOf('mindmap:');
  let bs = mmKeyIdx + 8;
  while (bs < block.length && block[bs] !== '{') bs++;
  const be = findClosingBrace(block, bs);
  if (be === -1) { emptyMindmaps.push(id); continue; }

  const mmStr = block.slice(bs, be + 1);
  // Count both styles: `title:` (unquoted JS) and `"title":` (JSON)
  const branchCount = (mmStr.match(/"?title"?:/g) || []).length;
  if (branchCount < 2) emptyMindmaps.push(id);
}

console.log('Total topics:', total);
console.log('Empty Formulas:', emptyFormulas.length, emptyFormulas.length > 0 ? emptyFormulas.join(', ') : '✅ NONE');
console.log('Empty Mindmaps:', emptyMindmaps.length, emptyMindmaps.length > 0 ? emptyMindmaps.join(', ') : '✅ NONE');
