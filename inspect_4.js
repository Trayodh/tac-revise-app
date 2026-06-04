const fs = require('fs');

const code = fs.readFileSync('notes_extra_4.js', 'utf8');
const regex = /EXPANDED_NOTES_DATA\[["'](.*?)["']\]\s*=\s*`/g;
let match;
while ((match = regex.exec(code)) !== null) {
  const key = match[1];
  const index = match.index;
  // Count lines before index
  const linesBefore = code.substring(0, index).split('\n').length;
  console.log(`Key: ${key} starts around line ${linesBefore}`);
}
