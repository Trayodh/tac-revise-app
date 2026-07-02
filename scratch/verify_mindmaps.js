/**
 * verify_mindmaps.js
 * Reads data.js and checks how many branches each of the "failing" mindmaps have.
 * These topics have LONG notes so we need to search further.
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

const targets = ['quadratic-eq', 'complex-numbers', 'straight-lines', 'central-tendency'];

for (const id of targets) {
  const topicIdx = src.indexOf('id: "' + id + '"');
  if (topicIdx === -1) { console.log(id, ': NOT FOUND'); continue; }
  
  // Search up to 20000 chars for mindmap
  const mmIdx = src.indexOf('mindmap:', topicIdx);
  if (mmIdx === -1) { console.log(id, ': mindmap key NOT FOUND'); continue; }
  
  let braceStart = mmIdx + 8;
  while (braceStart < src.length && src[braceStart] !== '{') braceStart++;
  
  const braceEnd = findClosingBrace(src, braceStart);
  if (braceEnd === -1) { console.log(id, ': No closing brace'); continue; }
  
  const mmStr = src.slice(braceStart, braceEnd + 1);
  
  try {
    const mm = JSON.parse(mmStr);
    console.log(id + ': OK | root=' + mm.root + ' | branches=' + mm.branches.length);
  } catch(e) {
    console.log(id + ': PARSE ERROR |', e.message.slice(0, 80));
    console.log('  First 200 chars:', mmStr.slice(0, 200));
  }
}
