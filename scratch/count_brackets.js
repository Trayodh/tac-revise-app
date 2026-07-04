const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data.js');
const code = fs.readFileSync(dataPath, 'utf8');
const lines = code.split('\n');

const startIdx = lines.findIndex(l => l.includes('id: "differentiation"'));
const endIdx = lines.findIndex(l => l.includes('id: "integration"'));

console.log('differentiation lines:', startIdx + 1, 'to', endIdx);

let braces = 0;
let brackets = 0;
let insideTemplate = false;

for (let i = startIdx; i < endIdx; i++) {
  const line = lines[i];
  let charEscaped = false;
  for (let c = 0; c < line.length; c++) {
    if (line[c] === '\\') {
      charEscaped = !charEscaped;
      continue;
    }
    
    if (line[c] === '`' && !charEscaped) {
      insideTemplate = !insideTemplate;
      charEscaped = false;
      continue;
    }
    
    charEscaped = false;
    
    if (!insideTemplate) {
      if (line[c] === '{') braces++;
      if (line[c] === '}') braces--;
      if (line[c] === '[') brackets++;
      if (line[c] === ']') brackets--;
    }
  }
}

console.log('Final JS Braces balance:', braces);
console.log('Final JS Brackets balance:', brackets);
