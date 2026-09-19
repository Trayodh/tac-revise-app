const fs = require('fs');

const files = ['notes_data.js', ...fs.readdirSync('.').filter(f => f.startsWith('notes_extra') && f.endsWith('.js'))];
let totalModified = 0;

// The regex needs to carefully capture:
// <!-- DIAGRAM INJECTED -->
// <h4 ...>...</h4>
// <div ...>
//   <img ... />
// </div>
// It should stop at the first </div>
const regex = /\\n\\n\s*<!-- DIAGRAM INJECTED -->[\s\S]*?<\/div>\\n/g;
const regex2 = /\n\n\s*<!-- DIAGRAM INJECTED -->[\s\S]*?<\/div>\n/g;

// A fallback regex that is a bit more robust:
const regex3 = /\s*<!-- DIAGRAM INJECTED -->[\s\S]*?<div[^>]*>[\s\S]*?<img[^>]*>[\s\S]*?<\/div>\s*/g;
const regex4 = /\\\\n\\\\n\s*<!-- DIAGRAM INJECTED -->[\s\S]*?<\/div>\\\\n/g;

for (let file of files) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');
  let originalLen = content.length;
  
  content = content.replace(regex, '');
  content = content.replace(regex2, '');
  content = content.replace(regex3, '');
  content = content.replace(regex4, '');
  
  if (content.length !== originalLen) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Stripped diagrams from ${file}. Diff: ${originalLen - content.length} chars removed.`);
    totalModified++;
  }
}
console.log(`Finished stripping. Modified ${totalModified} files.`);
