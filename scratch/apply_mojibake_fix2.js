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

const regex = /(?:≡ƒ|Γ|┬|╬|├|╧|ß|∩╕Å)[^\x00-\x7F]+/g;

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  content = content.replace(regex, (match) => {
    try {
      const fixed = iconv.encode(match, 'cp437').toString('utf8');
      // If it still contains original bad character prefix, it might not have decoded well, but we trust iconv.
      return fixed;
    } catch (e) {
      return match;
    }
  });

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}
