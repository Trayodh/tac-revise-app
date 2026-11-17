const fs = require('fs');
let content = fs.readFileSync('data.js', 'utf8');
const regex = /id:\s*"ca-spain-c295",\s*title:\s*"India-Spain Aerospace Cooperation & C-295 Project",\s*\{\s*id:\s*"ca-space-nuclear"/;
content = content.replace(regex, 'id: "ca-spain-c295",\n            title: "India-Spain Aerospace Cooperation & C-295 Project"\n          },\n          {\n            id: "ca-space-nuclear"');
fs.writeFileSync('data.js', content);
console.log('Regex replace executed.');
