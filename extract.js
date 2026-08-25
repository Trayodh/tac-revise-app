const fs = require('fs');
const data = fs.readFileSync('notes_data.js', 'utf8');
const match = data.match(/"title":\s*"Cloze Strategy",[\s\S]*?"notes":\s*"([^"]+)"/);
if (match) console.log(match[1].substring(0, 1000));
