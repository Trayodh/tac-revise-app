const fs = require('fs');
const txt = fs.readFileSync('notes_data.js', 'utf8');
const idx = txt.indexOf('Anticyclone.png');
const before = txt.substring(0, idx);
const idMatches = [...before.matchAll(/"id"\s*:\s*"([^"]+)"/g)];
console.log('ID:', idMatches[idMatches.length - 1][1]);
