const fs = require('fs');
const data = fs.readFileSync('notes_data.js', 'utf8');
const idx = data.indexOf('"id": "stone-age"');
console.log(data.substring(idx, idx + 1500));
