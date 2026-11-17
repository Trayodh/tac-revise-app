const fs = require('fs');
const content = fs.readFileSync('notes_data.js', 'utf8');

const regex = /"id"\s*:\s*"([^"]+)"[\s\S]*?"title"\s*:\s*"([^"]+)"/g;
let match;
const topics = [];
while ((match = regex.exec(content)) !== null) {
    if (match[1].startsWith('geography') || match[1].includes('climat') || match[1].includes('monsoon') || match[1].includes('cyclone') || match[1].includes('earth') || match[1].includes('world')) {
        topics.push(`${match[1]} | ${match[2]}`);
    }
}
console.log(topics.join('\n'));
