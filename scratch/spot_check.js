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

// Spot check a few of the "failing" topics
const checks = [
  'trig-identities', 'parts-of-speech', 'human-systems',
  'afcat-r-analogy', 'ca-schemes', 'env-hotspots'
];

for (const id of checks) {
  const topicIdx = src.indexOf('"' + id + '"');
  if (topicIdx === -1) { console.log(id + ': NOT FOUND'); continue; }
  
  const mmIdx = src.indexOf('mindmap:', topicIdx);
  if (mmIdx === -1) { console.log(id + ': no mindmap key'); continue; }
  
  let bs = mmIdx + 8;
  while (bs < src.length && src[bs] !== '{') bs++;
  const be = findClosingBrace(src, bs);
  if (be === -1) { console.log(id + ': no closing brace'); continue; }
  
  const mmStr = src.slice(bs, be + 1);
  const branchCount = (mmStr.match(/"title":/g) || []).length;
  console.log(id + ': branches=' + branchCount + ' | first 120:', mmStr.slice(0,120));
}
