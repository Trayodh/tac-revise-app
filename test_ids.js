const fs = require('fs');
const content = fs.readFileSync('notes_data.js', 'utf8');
const matches = [...content.matchAll(/"id":\s*"([^"]+)"/g)];
const allIds = matches.map(m => m[1]);
console.log('Total IDs: ' + allIds.length);
console.log('Includes climatology-clouds? ' + allIds.includes('climatology-clouds'));
console.log('Includes chemistry-numericals? ' + allIds.includes('chemistry-numericals'));

// Also check notes_extra_history.js
const historyContent = fs.readFileSync('notes_extra_history.js', 'utf8');
const matches2 = [...historyContent.matchAll(/"id":\s*"([^"]+)"/g)];
console.log('Total IDs in History: ' + matches2.length);
