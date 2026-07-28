const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
const stamp = Date.now();
html = html.replace('src="notes_data.js"', 'src="notes_data.js?v=' + stamp + '"');
html = html.replace('src="questions_data.js"', 'src="questions_data.js?v=' + stamp + '"');
html = html.replace(/src="app\.js\?v=\d+"/, 'src="app.js?v=' + stamp + '"');
fs.writeFileSync('index.html', html, 'utf8');
console.log('Cache busters added.');
