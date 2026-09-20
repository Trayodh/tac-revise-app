const fs = require('fs');
let content = fs.readFileSync('public/index.html', 'utf8');
content = content.replace(/\.js(\?v=\d+)?(["'])/g, '.js?v=106$2');
fs.writeFileSync('public/index.html', content);
fs.writeFileSync('index.html', content);
console.log('Done replacing index.html cache queries.');
