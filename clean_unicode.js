const fs = require('fs');
const path = require('path');

function walkSync(dir, filelist = []) {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else if (file.endsWith('.md')) {
      filelist.push(dirFile);
    }
  });
  return filelist;
}

const files = walkSync('./evolved_notes');
let modifiedCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;
  
  // Replace common encoding artifacts
  content = content.replace(/â€“/g, '—');
  content = content.replace(/â€”/g, '—');
  content = content.replace(/â€˜/g, "'");
  content = content.replace(/â€™/g, "'");
  content = content.replace(/â€œ/g, '"');
  content = content.replace(/â€/g, '"');
  content = content.replace(/â€¢/g, '•');
  content = content.replace(/Â°/g, '°');
  content = content.replace(/Ã©/g, 'é');
  content = content.replace(/â€¦/g, '…');
  content = content.replace(/â‡’/g, '⇒');
  
  // Also check for literal characters like ΓÇö and ┬░
  content = content.replace(/ΓÇö/g, '—');
  content = content.replace(/┬░/g, '°');
  content = content.replace(/ΓÇÖ/g, "'");

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    modifiedCount++;
  }
});

console.log(`Cleaned ${modifiedCount} files with unicode artifacts.`);
