const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data.js');
const code = fs.readFileSync(dataPath, 'utf8');
const lines = code.split('\n');

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  let count = 0;
  for (let j = 0; j < line.length; j++) {
    if (line[j] === '`') count++;
  }
  if (count >= 2) {
    console.log(`Line ${i + 1} has ${count} backticks: ${line.trim()}`);
  }
}
