const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data.js');
const code = fs.readFileSync(dataPath, 'utf8');
const lines = code.split('\n');

let count = 0;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  for (let j = 0; j < line.length - 1; j++) {
    if (line.charCodeAt(j) === 92 && line.charCodeAt(j+1) === 96) {
      count++;
      console.log(`Line ${i + 1}: ${line.trim()}`);
      break;
    }
  }
}
console.log('Total lines with escaped backticks:', count);
