const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data.js');
const code = fs.readFileSync(dataPath, 'utf8');
const lines = code.split('\n');

const slice = lines.slice(390, 440).join('\n');
console.log('Contains ${ ?', slice.includes('${'));

// Find where ${ occurs in the slice
let idx = slice.indexOf('${');
while (idx !== -1) {
  console.log('Found ${ at character offset:', idx);
  console.log('Surrounding text:', slice.substring(Math.max(0, idx - 20), Math.min(slice.length, idx + 50)));
  idx = slice.indexOf('${', idx + 1);
}
