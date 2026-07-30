const fs = require('fs');
const content = fs.readFileSync('www/notes_extra_history.js', 'utf8');
const start = content.indexOf('EXPANDED_NOTES_DATA["buddhism-and-jainism"]');
const end = content.indexOf('EXPANDED_NOTES_DATA["mauryan-empire"]');
fs.writeFileSync('temp_history.txt', content.slice(start, end));
console.log('Written to temp_history.txt');
