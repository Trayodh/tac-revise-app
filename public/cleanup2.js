const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(/<div[^>]*>.*?pathfinder\.html.*?<\/div>\n?/g, '');
fs.writeFileSync('index.html', html);
console.log('Regex strip complete.');
