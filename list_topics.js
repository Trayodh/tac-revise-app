const fs = require('fs');
const data = fs.readFileSync('ai_generated_notes.js', 'utf8');

const regex = /"id":\s*"([^"]+)",\s*"title":\s*"([^"]+)",\s*"subject":\s*"([^"]+)",\s*"notes":\s*"([^"]+)"/g;
let match;
while ((match = regex.exec(data)) !== null) {
    const t = match[2];
    const n = match[4];
    console.log(t, '-', n.length, 'chars -', n.substring(0, 40));
}
