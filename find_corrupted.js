const fs = require('fs');
const txt = fs.readFileSync('index.html', 'utf8');
const lines = txt.split('\n');
lines.forEach((l, i) => {
  if (l.match(/[â‰¡Æ’Î“Ã]/)) {
    console.log((i+1) + ': ' + l.trim());
  }
});
