const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.startsWith('notes_extra_') && f.endsWith('.js'));

let totalRemoved = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  const imgRegex = /<img[^>]*src=["']https:\/\/upload\.wikimedia\.org[^>]*alt=["']Map for[^>]*>/gi;
  
  const matches = content.match(imgRegex);
  if (matches) {
    totalRemoved += matches.length;
    content = content.replace(imgRegex, '');
    fs.writeFileSync(filePath, content);
    console.log(`Removed ${matches.length} old placeholder maps from ${file}`);
  }
}

console.log(`Total placeholder maps removed: ${totalRemoved}`);
