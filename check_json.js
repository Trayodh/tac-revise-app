const fs = require('fs');
const content = fs.readFileSync('www/notes_extra_history.js', 'utf8');
console.log(content.includes('{"enhanced_html"') || content.includes('```json') ? 'Has JSON' : 'No JSON');
