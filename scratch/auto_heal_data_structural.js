const fs = require('fs');
const vm = require('vm');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data.js');

function getSyntaxErrorLine(code) {
  try {
    new vm.Script(code);
    return null;
  } catch (err) {
    if (err instanceof SyntaxError && err.stack) {
      const match = err.stack.match(/evalmachine\.<anonymous>:(\d+)/);
      if (match) {
        return parseInt(match[1], 10);
      }
    }
    throw err;
  }
}

function isStructuralLine(line) {
  const trimmed = line.trim();
  if (trimmed === '') return false;
  
  // Property key match: id, title, notes, formulas, mindmap, topics, chapters, subjects
  if (/^\s*["']?(id|title|notes|formulas|mindmap|topics|chapters|subjects)["']?\s*:/i.test(trimmed)) {
    return true;
  }
  
  // JSON structure/brackets
  if (/^(\},?|\]|\}$)/.test(trimmed)) {
    return true;
  }
  
  return false;
}

function heal() {
  console.log('Starting auto-healing of data.js...');
  
  for (let iter = 1; iter <= 200; iter++) {
    const code = fs.readFileSync(dataPath, 'utf8');
    let lineNum;
    try {
      lineNum = getSyntaxErrorLine(code);
    } catch (e) {
      console.error('Non-syntax error or parsing crash:', e);
      break;
    }
    
    if (lineNum === null) {
      console.log('SUCCESS: data.js compiles perfectly with vm.Script! No syntax errors left.');
      break;
    }
    
    console.log(`[Iteration ${iter}] Syntax error at line ${lineNum}`);
    const lines = code.split('\n');
    const errIdx = lineNum - 1; // 0-indexed
    
    // Scan forward to find the next structural line
    let endIdx = -1;
    for (let i = errIdx; i < Math.min(lines.length, errIdx + 150); i++) {
      if (isStructuralLine(lines[i])) {
        endIdx = i;
        break;
      }
    }
    
    if (endIdx !== -1) {
      console.log(`Deleting raw text from line ${lineNum} to ${endIdx} (exclusive). Next structural line is line ${endIdx + 1}: "${lines[endIdx].trim()}"`);
      // Delete lines from errIdx to endIdx - 1
      lines.splice(errIdx, endIdx - errIdx);
      fs.writeFileSync(dataPath, lines.join('\n'), 'utf8');
    } else {
      console.error(`Could not find next structural line within 150 lines of line ${lineNum}. Stopping.`);
      // Print surrounding lines for debugging
      for (let i = Math.max(0, errIdx - 3); i <= Math.min(lines.length - 1, errIdx + 10); i++) {
        console.log(`  ${i+1}: ${lines[i]}`);
      }
      break;
    }
  }
}

heal();
