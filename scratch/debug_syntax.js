const fs = require('fs');
const acorn = require('acorn');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data.js');
let code = fs.readFileSync(dataPath, 'utf8');

try {
  acorn.parse(code, { ecmaVersion: 2020 });
  console.log('data.js parsed successfully! No syntax errors.');
} catch (e) {
  console.log('Acorn parse error:', e.message);
  if (e.loc) {
    console.log('Error at Line:', e.loc.line, 'Column:', e.loc.column);
    const lines = code.split('\n');
    const startLine = Math.max(1, e.loc.line - 10);
    const endLine = Math.min(lines.length, e.loc.line + 15);
    for (let i = startLine; i <= endLine; i++) {
      const marker = i === e.loc.line ? '=> ' : '   ';
      console.log(`${marker}${i}: ${lines[i - 1]}`);
    }
  }
}
