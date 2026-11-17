const fs = require('fs');
const content = fs.readFileSync('ai_generated_notes.js', 'utf8');

let idx = 0;
while (true) {
    idx = content.indexOf('', idx + 10);
    console.log(content.substring(idx + 10, end).trim());
    console.log('---');
    idx = end;
}
