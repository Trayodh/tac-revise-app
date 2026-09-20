const fs = require('fs');
const content = fs.readFileSync('www/data.js', 'utf8');
const hIndex = content.indexOf('"history"');
console.log('Index:', hIndex);
if (hIndex > -1) {
    console.log(content.slice(hIndex, hIndex + 1000));
}
