const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data.js');
const code = fs.readFileSync(dataPath, 'utf8');
const lines = code.split('\n');

// Print lines 390 to 440 with backtick counts
for (let i = 390; i < 440; i++) {
  const line = lines[i];
  if (!line) continue;
  let backtickCount = 0;
  for (let c = 0; c < line.length; c++) {
    if (line[c] === '`' && (c === 0 || line[c-1] !== '\\')) {
      backtickCount++;
    }
  }
  console.log(`Line ${i + 1} has ${backtickCount} backticks: ${line.trim()}`);
}
