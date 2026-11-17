const fs = require('fs');
const data = fs.readFileSync('diagram_index.json', 'utf8');
fs.writeFileSync('diagram_index_data.js', `window.DIAGRAM_INDEX = ${data};`, 'utf8');
console.log('Created diagram_index_data.js');
