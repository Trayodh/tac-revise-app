const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data.js');

function runCheck() {
  try {
    execSync('node -e "require(\'./data.js\')"', { stdio: 'pipe', cwd: path.dirname(dataPath) });
    return { success: true };
  } catch (err) {
    const stderr = err.stderr ? err.stderr.toString() : err.message;
    const match = stderr.match(/data\.js:(\d+)/);
    if (match) {
      return { success: false, lineNum: parseInt(match[1], 10), stderr };
    }
    return { success: false, err: stderr };
  }
}

function fixLoop() {
  for (let iter = 1; iter <= 250; iter++) {
    const res = runCheck();
    if (res.success) {
      console.log('SUCCESS: data.js compiles perfectly!');
      break;
    }
    
    if (!res.lineNum) {
      console.error('Failed to parse line number from error:', res.err || res.stderr);
      break;
    }
    
    console.log(`[Iteration ${iter}] Syntax error found at line ${res.lineNum}`);
    
    // Read the file and parse lines
    const content = fs.readFileSync(dataPath, 'utf8');
    const lines = content.split('\n');
    
    const errIdx = res.lineNum - 1; // 0-indexed
    
    // Check if the previous line ends with a backtick
    const prevLine = lines[errIdx - 1] ? lines[errIdx - 1].trim() : '';
    if (prevLine.endsWith('`')) {
      console.log(`Line ${res.lineNum - 1} ends with backtick. Searching for end of duplicate block...`);
      
      // Find the next line that ends with a backtick (with lookahead of 200 lines)
      let endIdx = -1;
      for (let i = errIdx; i < Math.min(lines.length, errIdx + 200); i++) {
        if (lines[i].trim().endsWith('`')) {
          endIdx = i;
          break;
        }
      }
      
      if (endIdx !== -1) {
        console.log(`Found end of duplicate block at line ${endIdx + 1}: "${lines[endIdx].trim()}"`);
        // Remove lines from errIdx to endIdx (inclusive)
        lines.splice(errIdx, endIdx - errIdx + 1);
        
        fs.writeFileSync(dataPath, lines.join('\n'), 'utf8');
        console.log(`Removed lines ${res.lineNum} to ${endIdx + 1}. Saved data.js.`);
      } else {
        console.error(`Could not find ending backtick within 200 lines after line ${res.lineNum}`);
        break;
      }
    } else {
      console.error(`Line ${res.lineNum - 1} does not end with a backtick. Cannot auto-heal.`);
      // Let's print surrounding lines
      for (let i = Math.max(0, errIdx - 3); i <= Math.min(lines.length - 1, errIdx + 3); i++) {
        console.log(`  ${i+1}: ${lines[i]}`);
      }
      break;
    }
  }
}

fixLoop();
