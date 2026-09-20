const fs = require('fs');
const content = fs.readFileSync('data.js', 'utf8');
const lines = content.split('\n');

if (lines[9003].trim() === '};' && lines[9002].trim() === '}') {
  lines.splice(9003, 0, '  ]');
  fs.writeFileSync('data.js', lines.join('\n'));
  console.log('Fixed data.js at line 9004');
} else {
  console.log('Lines do not match expected syntax error context.');
  console.log('Line 9003:', lines[9002]);
  console.log('Line 9004:', lines[9003]);
}
