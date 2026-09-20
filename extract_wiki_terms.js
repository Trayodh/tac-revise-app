const fs = require('fs');

const files = [
  'notes_data.js',
  'old_notes_data.js',
  'notes_extra_4.js',
  'notes_extra_history.js',
  'notes_extra_geography.js'
];

let allTerms = new Set();
const regex = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;

for (const file of files) {
  if (fs.existsSync(file)) {
    const text = fs.readFileSync(file, 'utf8');
    let match;
    while ((match = regex.exec(text)) !== null) {
      allTerms.add(match[1].trim());
    }
  }
}

const termsArray = Array.from(allTerms).sort();
console.log(`Found ${termsArray.length} unique wiki link terms.`);
fs.writeFileSync('extracted_wiki_terms.json', JSON.stringify(termsArray, null, 2));
