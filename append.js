const fs = require('fs');
const content = fs.readFileSync('notes_batch4.js', 'utf-8');
fs.appendFileSync('notes_generated_polity.js', '\n' + content, 'utf-8');
console.log('Appended batch 4 successfully');
