const fs = require('fs');

const lines = fs.readFileSync('app.js', 'utf8').split('\n');

// Find the split point
let splitIndex = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('// 7. SCREEN SWITCHER & NAVIGATION')) {
    // The previous line is `// ==========================================`
    splitIndex = i - 1; 
    break;
  }
}

if (splitIndex === -1) {
  console.error("Could not find the split point.");
  process.exit(1);
}

console.log(`Found split point at line ${splitIndex}`);

const dataLines = lines.slice(0, splitIndex);
const logicLines = lines.slice(splitIndex);

fs.writeFileSync('data.js', dataLines.join('\n'));

const newAppJsContent = `// Tac-Revise Application Logic
// Dependencies: data.js (which contains NOTES_DATABASE, CURRENT_AFFAIRS_DB, etc.)

` + logicLines.join('\n');

// Backup original app.js just in case
fs.copyFileSync('app.js', 'app.js.mega_backup');
fs.writeFileSync('app.js', newAppJsContent);

console.log("Successfully split app.js into data.js and a leaner app.js!");
console.log(`data.js lines: ${dataLines.length}`);
console.log(`new app.js lines: ${logicLines.length}`);
