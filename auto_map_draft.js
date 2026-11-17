const fs = require('fs');
const files = fs.readdirSync('images');
const c = fs.readFileSync('notes_data.js', 'utf8');
const topics = [];
const regex = /id:\s*['"]([^'"]+)['"],\s*title:\s*['"]([^'"]+)['"]/g;
let match;
while ((match = regex.exec(c)) !== null) {
  topics.push({id: match[1], title: match[2]});
}

const map = {};
for (const file of files) {
  // simple matching
  let bestMatch = null;
  let maxMatches = 0;
  const words = file.replace('.png', '').replace('.jpg', '').split(/[_-]/);
  for (const t of topics) {
    let matches = 0;
    const tWords = t.title.toLowerCase().split(/[^a-z0-9]+/);
    for (const w of words) {
      if (w.length > 2 && tWords.includes(w.toLowerCase())) {
        matches++;
      }
    }
    if (t.id.toLowerCase().includes(words[0].toLowerCase())) matches += 0.5;
    
    if (matches > maxMatches) {
      maxMatches = matches;
      bestMatch = t;
    }
  }
  if (bestMatch) {
    map[file] = bestMatch.id;
  }
}
fs.writeFileSync('auto_map_draft.json', JSON.stringify(map, null, 2));
console.log('Mapped', Object.keys(map).length, 'images.');
