const fs = require('fs');
const path = require('path');

const dataJsPath = path.join(__dirname, '..', 'data.js');
const content = fs.readFileSync(dataJsPath, 'utf8');

console.log("File length:", content.length);

// Find all occurrences of variable/object assignments like "let ..." or "const ..."
const lines = content.split(/\r?\n/);
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.match(/^(let|const|var|window\.)\s+\w+/)) {
    console.log(`Line ${i + 1}: ${line}`);
  }
}
