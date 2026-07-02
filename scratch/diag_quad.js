const fs = require('fs');
const src = fs.readFileSync('data.js', 'utf8');

const idx = src.indexOf('id: "quadratic-eq"');
console.log('Topic found at index:', idx);
if (idx !== -1) {
  // Show 200 chars either side of the mindmap: field
  const mmIdx = src.indexOf('mindmap:', idx);
  console.log('mindmap: found at index:', mmIdx, '| diff from topic:', mmIdx - idx);
  // Print everything from topic start for 400 chars
  const snippet = src.slice(idx, idx + 500);
  console.log('\n--- TOPIC SNIPPET ---');
  console.log(snippet);
}
