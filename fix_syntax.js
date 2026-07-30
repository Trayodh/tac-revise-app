const fs = require('fs');
let c = fs.readFileSync('notes_data.js', 'utf8');
c = c.replace(/cos²θ \)/g, 'cos²θ');
fs.writeFileSync('notes_data.js', c);
