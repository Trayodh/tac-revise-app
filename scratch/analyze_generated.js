const fs = require('fs');

let content = fs.readFileSync('notes_generated.js', 'utf8');

const regex = /window\.EXPANDED_NOTES_DATA\["(.*?)"\]/g;
let m;
let total = 0;
while ((m = regex.exec(content)) !== null) {
  total++;
}

console.log(`Total expanded topics in notes_generated.js: ${total}`);
