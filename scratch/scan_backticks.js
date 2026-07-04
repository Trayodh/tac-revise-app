const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data.js');
const code = fs.readFileSync(dataPath, 'utf8');
const lines = code.split('\n');

let count = 0;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('formulas:') && line.includes('`')) {
    // Scan forward to see if there is a closing backtick that is followed by raw text, and then another closing backtick
    let backtickLines = [];
    for (let j = i; j < Math.min(lines.length, i + 120); j++) {
      if (j > i && (lines[j].trim().startsWith('id:') || lines[j].trim().startsWith('title:') || lines[j].trim().startsWith('notes:') || lines[j].trim().startsWith('},'))) {
        break;
      }
      if (lines[j].includes('`')) {
        // Count backticks on this line (excluding escaped ones)
        let cleanLine = lines[j].replace(/\\`/g, '');
        if (cleanLine.includes('`')) {
          backtickLines.push(j + 1); // 1-indexed line number
        }
      }
    }
    
    if (backtickLines.length >= 3) {
      count++;
      console.log(`Topic formulas starting at line ${i + 1} has multiple backticks at lines:`, backtickLines);
    }
  }
}
console.log('Total topics with multiple backticks:', count);
