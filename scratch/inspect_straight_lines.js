const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data.js');
const code = fs.readFileSync(dataPath, 'utf8');
const lines = code.split('\n');

const idx = lines.findIndex(l => l.includes('id: "straight-lines"'));
if (idx !== -1) {
  console.log('Found straight-lines at line', idx + 1);
  console.log(lines.slice(idx, idx + 60).join('\n'));
} else {
  console.log('Not found');
}
