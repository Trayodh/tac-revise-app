const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data.js');
const code = fs.readFileSync(dataPath, 'utf8');
const lines = code.split('\n');

const idx = lines.findIndex(l => l.includes('id: "differentiation"'));
console.log('Original line number of differentiation:', idx + 1);
if (idx !== -1) {
  console.log(lines.slice(idx, idx + 60).join('\n'));
}
