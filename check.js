const fs = require('fs');
const d = fs.readFileSync('data.js', 'utf8');
const lines = d.split('\n');
const idx = lines.findIndex(l => l.indexOf('"January 2026": [') !== -1);
if (idx !== -1) {
  for (let i = idx; i >= 0; i--) {
     if (lines[i].includes('let ') || lines[i].includes('const ')) {
        console.log('Found declaration at line', i, ':', lines[i]);
        break;
     }
  }
}
