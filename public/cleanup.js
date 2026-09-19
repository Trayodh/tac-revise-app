const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
const link = '<div style="background: linear-gradient(90deg, #6366f1, #8b5cf6); padding: 10px; text-align: center; border-radius: 8px; margin: 15px; font-weight: bold;"><a href="pathfinder.html" style="color: white; text-decoration: none; display: block; font-size: 1.1em;">🚀 View Complete Pathfinder History Notes &rarr;</a></div>\n';

html = html.replace(link, '');
fs.writeFileSync('index.html', html);
console.log('Reverted index.html');

try {
  fs.unlinkSync('pathfinder.html');
  console.log('Deleted pathfinder.html');
} catch (e) {
  console.log('pathfinder.html already deleted');
}
