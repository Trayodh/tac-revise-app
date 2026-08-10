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
  'clean_notes.js'
];

let replacedMap = new Map();

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Regex to match corrupted UTF-8 sequences interpreted as CP437.
  // Many CP437 symbols map to weird unicode characters.
  // Emojis typically start with F0 9F (≡ƒ).
  // Other common ones start with E2 (Γ) or C2 (┬) or CE (╬).
  
  const regex = /≡ƒ[^\x00-\x7F]{2}|≡ƒ[^\x00-\x7F]|Γ[^\x00-\x7F]{2}|Γ[^\x00-\x7F]|┬[^\x00-\x7F]|╬[^\x00-\x7F]|├[^\x00-\x7F]|╧[^\x00-\x7F]|ß[^\x00-\x7F]{2}|∩╕Å/g;

  content = content.replace(regex, (match) => {
    try {
      const fixed = iconv.encode(match, 'cp437').toString('utf8');
      if (fixed.includes('')) return match; // skip invalid fixes
      replacedMap.set(match, fixed);
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

console.log("Replacements made:");
for (const [k, v] of replacedMap.entries()) {
  console.log(`${k} -> ${v}`);
}
