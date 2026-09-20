const fs = require('fs');
const content = fs.readFileSync('notes_data_exam_focused.js', 'utf8');

const regex = /"id":\s*"([^"]+)",\s*"title":\s*"([^"]+)"/g;
let match;
const results = [];
while ((match = regex.exec(content)) !== null) {
  results.push(match[1] + ' -> ' + match[2]);
}

console.log("Topics:");
console.log(results.filter(r => r.includes('bio') || r.includes('chem') || r.includes('phy') || r.includes('geo') || r.includes('science')).join('\n'));
