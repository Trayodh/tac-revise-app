/**
 * deep_verify.js
 * Directly inspects the mindmap object for each of the 27 patched topics
 * by reading the JSON from the file.
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

const checks = [
  'data-interpretation', 'differentiation', 'integration',
  'earth-atmosphere', 'world-geography-mountains', 'india-national-parks',
  'panchayati-raj', 'physics-heat', 'tenses-complete'
];

for (const id of checks) {
  const topicIdx = src.indexOf('"' + id + '"');
  const mmIdx = src.indexOf('mindmap:', topicIdx);
  let bs = mmIdx + 8;
  while (bs < src.length && src[bs] !== '{') bs++;
  const be = findClosingBrace(src, bs);
  const mmStr = src.slice(bs, be + 1);

  // Count `title:` occurrences in this specific slice
  const cnt = (mmStr.match(/title:/g) || []).length;
  // Check first few chars
  console.log(id + ': title count=' + cnt + ' | start: ' + mmStr.slice(0, 60).replace(/\n/g, ' '));
}
