const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
const link = '<div style="background: linear-gradient(90deg, #6366f1, #8b5cf6); padding: 10px; text-align: center; border-radius: 8px; margin: 15px; font-weight: bold;"><a href="pathfinder.html" style="color: white; text-decoration: none; display: block; font-size: 1.1em;">🚀 View Complete Pathfinder History Notes &rarr;</a></div>';

if (!html.includes('pathfinder.html')) {
  html = html.replace('<body>', '<body>\n' + link);
  fs.writeFileSync('index.html', html);
  console.log('Added link to index.html');
} else {
  console.log('Link already exists in index.html');
}
