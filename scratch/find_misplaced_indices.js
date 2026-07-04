const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data.js');
const code = fs.readFileSync(dataPath, 'utf8');
const lines = code.split('\n');

const startIdx = lines.findIndex(l => l.includes('Slope & Angles'));
console.log('Slope & Angles at line:', startIdx + 1);

// Find the line containing {title: "Calculations", subnodes: ["Percentage change"
const endIdx = lines.findIndex(l => l.includes('{title: "Calculations", subnodes: ["Percentage change"'));
console.log('End marker at line:', endIdx + 1);

if (startIdx !== -1 && endIdx !== -1) {
  console.log('\n--- Lines around startIdx ---');
  console.log(lines.slice(startIdx - 5, startIdx + 5).join('\n'));
  
  console.log('\n--- Lines around endIdx ---');
  console.log(lines.slice(endIdx - 10, endIdx + 5).join('\n'));
}
