const fs = require('fs');

const notesFile = 'notes_extra_history.js';
let content = fs.readFileSync(notesFile, 'utf8');

const sections = {
  'dance-music': 'culture_dance_music.html',
  'literature': 'culture_literature.html',
  'religion-festivals': 'culture_festivals.html',
  'paintings': 'culture_paintings.html'
};

for (const [key, file] of Object.entries(sections)) {
  const injection = fs.readFileSync(file, 'utf8');
  const startIdx = content.indexOf(`EXPANDED_NOTES_DATA["${key}"] = \``);
  if (startIdx === -1) {
    console.log(`Key ${key} not found`);
    continue;
  }
  
  const endIdx = content.indexOf('`;', startIdx);
  if (endIdx === -1) {
    console.log(`Closing backtick not found for ${key}`);
    continue;
  }
  
  content = content.slice(0, endIdx) + '\n' + injection + '\n' + content.slice(endIdx);
  console.log(`Injected ${key}`);
}

fs.writeFileSync(notesFile, content, 'utf8');
console.log('Update complete.');
