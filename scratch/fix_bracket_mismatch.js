const fs = require('fs');
const path = require('path');
const vm = require('vm');

const dataPath = path.join(__dirname, '..', 'data.js');

function fixAllMismatches() {
  // Increase iteration limit to 150 to catch all premature closes
  for (let iter = 1; iter <= 150; iter++) {
    const content = fs.readFileSync(dataPath, 'utf8');
    const lines = content.split('\n');
    
    let targetIdx = -1;
    for (let i = 0; i < lines.length - 3; i++) {
      const lineI = lines[i];
      const lineI1 = lines[i+1];
      const lineI2 = lines[i+2];
      const lineI3 = lines[i+3];
      
      const trimmedI2 = lineI2.trim();
      const isNextBranchStart = (trimmedI2 === '{' && lineI3 && lineI3.trim().startsWith('title:')) || 
                                trimmedI2.startsWith('{title:') || 
                                trimmedI2.startsWith('{"title":') ||
                                trimmedI2.startsWith("{'title':");
      
      // Match exactly 20 spaces for ] and 12 spaces for }, and starting a branch
      if (lineI.startsWith('                    ]') && 
          lineI1.startsWith('            },') && 
          isNextBranchStart) {
        targetIdx = i;
        break;
      }
    }
    
    if (targetIdx === -1) {
      console.log('No premature close patterns found!');
      break;
    }
    
    console.log(`[Iteration ${iter}] Found premature close at line ${targetIdx + 1}. Fixing...`);
    // Change line at targetIdx - 1 to end with a comma if it doesn't
    let prevLine = lines[targetIdx - 1];
    lines[targetIdx - 1] = prevLine.replace(/\r?$/, ',\r');
    
    // Delete targetIdx and targetIdx + 1 (the ']' and '},')
    lines.splice(targetIdx, 2);
    
    fs.writeFileSync(dataPath, lines.join('\n'), 'utf8');
    console.log('Fixed one mismatch.');
  }
  
  // Verify compilation
  try {
    const finalCode = fs.readFileSync(dataPath, 'utf8');
    new vm.Script(finalCode);
    console.log('🎉 SUCCESS: data.js compiles perfectly!');
  } catch (err) {
    console.error('❌ Verification failed:', err.stack);
  }
}

fixAllMismatches();
