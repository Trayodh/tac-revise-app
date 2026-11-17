const fs = require('fs');
let content = fs.readFileSync('data.js', 'utf8');
content = content.replace(
    'id: "ca-spain-c295",\n            title: "India-Spain Aerospace Cooperation & C-295 Project",\n          {\n            id: "ca-space-nuclear"', 
    'id: "ca-spain-c295",\n            title: "India-Spain Aerospace Cooperation & C-295 Project"\n          },\n          {\n            id: "ca-space-nuclear"'
);
fs.writeFileSync('data.js', content);
console.log('Fixed data.js syntax error.');
