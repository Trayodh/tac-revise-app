const fs = require('fs');
const path = require('path');
const vm = require('vm');

const dataPath = path.join(__dirname, '..', 'data.js');

function fixMisplaced() {
  const content = fs.readFileSync(dataPath, 'utf8');
  const lines = content.split('\n');
  
  // Find "Slope & Angles"
  const startIdx = lines.findIndex(l => l.includes('Slope & Angles'));
  // Find the closing structure before "calculus"
  const calculusIdx = lines.findIndex(l => l.includes('id: "calculus"'));
  
  if (startIdx !== -1 && calculusIdx !== -1) {
    // We want to delete from the line after "            }," (line 404, index 403)
    // up to the line before "          }" (line 512, index 511)
    const delStart = 403; // 0-indexed line 404
    const delEnd = 511;   // 0-indexed line 512
    
    console.log(`Deleting misplaced mindmaps from line ${delStart + 1} to ${delEnd} (inclusive)`);
    lines.splice(delStart, delEnd - delStart);
    
    fs.writeFileSync(dataPath, lines.join('\n'), 'utf8');
    console.log('Successfully deleted misplaced mindmap block!');
  } else {
    console.error('Could not find start/end indices.');
  }
}

fixMisplaced();
