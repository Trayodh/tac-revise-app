const fs = require('fs');
const iconv = require('iconv-lite');

const files = [
  'app.js',
  'notes_data.js',
  'notes_generated.js',
  'ai_generated_notes.js',
  'ca_data.js',
  'current_affairs_db.js',
  'index.html',
  'clean_notes.js',
  'app_before_0edf5a5.js',
  'old_index.html',
  'temp_notes.js'
];

let potentialMojibake = new Set();
// Search for sequences of 2 or more characters outside standard ASCII range, or specific prefixes
const regex = /(?:≡ƒ|Γ|┬|╬|├|╧|ß|∩╕Å)[^\x00-\x7F]+/g;

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = regex.exec(content)) !== null) {
    potentialMojibake.add(match[0]);
  }
}

console.log("Found sequences:");
for (let seq of potentialMojibake) {
    try {
        let fixed = iconv.encode(seq, 'cp437').toString('utf8');
        console.log(`${seq} -> ${fixed}`);
    } catch (e) {
        console.log(`${seq} -> ERROR`);
    }
}
