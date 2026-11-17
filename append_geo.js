const fs = require('fs');
const content = fs.readFileSync('notes_batch3_geo.js', 'utf-8');
fs.appendFileSync('notes_generated_geography.js', '\n' + content, 'utf-8');
console.log('Appended geo batch 3 successfully');
