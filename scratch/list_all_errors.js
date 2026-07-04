const fs = require('fs');
const path = require('path');
const vm = require('vm');

const dataPath = path.join(__dirname, '..', 'data.js');
let code = fs.readFileSync(dataPath, 'utf8');

console.log('Scanning for all syntax errors in original data.js...');

let tempCode = code;
let errors = [];

for (let i = 0; i < 50; i++) {
  try {
    new vm.Script(tempCode);
    console.log('No more syntax errors found!');
    break;
  } catch (err) {
    if (err instanceof SyntaxError && err.stack) {
      const match = err.stack.match(/evalmachine\.<anonymous>:(\d+)/);
      if (match) {
        const lineNum = parseInt(match[1], 10);
        const lines = tempCode.split('\n');
        errors.push({ lineNum, message: err.message, lineText: lines[lineNum - 1] });
        
        // Comment out the failing line so we can find the next syntax error
        lines[lineNum - 1] = '// ' + lines[lineNum - 1];
        tempCode = lines.join('\n');
      } else {
        console.error('Failed to parse line number:', err.stack);
        break;
      }
    } else {
      console.error('Non-syntax error:', err);
      break;
    }
  }
}

console.log('\n--- FOUND SYNTAX ERRORS ---');
errors.forEach((err, idx) => {
  console.log(`[Error ${idx + 1}] Line ${err.lineNum}: ${err.message}`);
  console.log(`      Code: ${err.lineText ? err.lineText.trim() : 'undefined'}`);
});
