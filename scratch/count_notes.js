const fs = require('fs');
const content = fs.readFileSync('notes_data_upgraded.js', 'utf8');
const regex = /notes:\s*`([\s\S]*?)`/g;
const regex2 = /notes:\s*"([\s\S]*?)"/g;
console.log('Backticks:', (content.match(regex) || []).length);
console.log('Quotes:', (content.match(regex2) || []).length);
