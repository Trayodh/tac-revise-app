const fs = require('fs');
const path = require('path');
const vm = require('vm');

const dataPath = path.join(__dirname, '..', 'data.js');

function healEight() {
  for (let iter = 1; iter <= 20; iter++) {
    const currentCode = fs.readFileSync(dataPath, 'utf8');
    const currentLines = currentCode.split('\n');
    
    let foundTopicIdx = -1;
    let backtickLines = [];
    
    for (let i = 0; i < currentLines.length; i++) {
      const line = currentLines[i];
      if (line.includes('formulas:') && line.includes('`')) {
        let currentBackticks = [];
        for (let j = i; j < Math.min(currentLines.length, i + 150); j++) {
          if (j > i && (currentLines[j].trim().startsWith('id:') || currentLines[j].trim().startsWith('title:') || currentLines[j].trim().startsWith('notes:') || currentLines[j].trim().startsWith('},'))) {
            break;
          }
          if (currentLines[j].includes('`')) {
            let cleanLine = currentLines[j].replace(/\\`/g, '');
            if (cleanLine.includes('`')) {
              currentBackticks.push(j); // 0-indexed line index
            }
          }
        }
        
        if (currentBackticks.length >= 3) {
          foundTopicIdx = i;
          backtickLines = currentBackticks;
          break;
        }
      }
    }
    
    if (foundTopicIdx === -1) {
      console.log('No more topics with multiple backticks found!');
      break;
    }
    
    console.log(`[Iter ${iter}] Found multiple backticks starting around line ${foundTopicIdx + 1}:`, backtickLines.map(idx => idx + 1));
    
    const b2 = backtickLines[1];
    const bn = backtickLines[backtickLines.length - 1];
    
    console.log(`Deleting duplicate block from line ${b2 + 2} to ${bn + 1} (inclusive)`);
    // Delete lines from index b2 + 1 to bn
    currentLines.splice(b2 + 1, bn - b2);
    
    // Check if the line at b2 ends with a comma
    let lineAtB2 = currentLines[b2];
    if (lineAtB2 && lineAtB2.trim().endsWith('`')) {
      currentLines[b2] = lineAtB2.replace(/\r?$/, ',$&');
      console.log(`Appended comma to line ${b2 + 1}: "${currentLines[b2].trim()}"`);
    }
    
    fs.writeFileSync(dataPath, currentLines.join('\n'), 'utf8');
    console.log(`Successfully repaired topic at line ${foundTopicIdx + 1}!`);
  }
  
  // Verify with vm.Script
  try {
    const finalCode = fs.readFileSync(dataPath, 'utf8');
    new vm.Script(finalCode);
    console.log('🎉 SUCCESS: data.js compiles perfectly now!');
  } catch (err) {
    console.error('❌ Verification failed after healing:', err.stack);
  }
}

healEight();
