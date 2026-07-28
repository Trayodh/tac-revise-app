const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(/<script src="data\.js[^>]*><\/script>/, '<script src="notes_data.js"></script>\n  <script src="questions_data.js"></script>');
fs.writeFileSync('index.html', html, 'utf8');
console.log('index.html updated successfully');
