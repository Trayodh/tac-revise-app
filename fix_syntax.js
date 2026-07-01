const fs = require('fs');
let c = fs.readFileSync('data.js', 'utf8');

const target = `          {
            id: "ca-spain-c295",
            title: "India-Spain Aerospace Cooperation & C-295 Project",
          {
            id: "ca-space-nuclear",`;

const replacement = `          {
            id: "ca-spain-c295",
            title: "India-Spain Aerospace Cooperation & C-295 Project"
          },
          {
            id: "ca-space-nuclear",`;

if (c.includes(target)) {
  c = c.replace(target, replacement);
  fs.writeFileSync('data.js', c);
  console.log('Fixed syntax error in data.js');
} else {
  console.log('Target string not found in data.js. Attempting regex match.');
  // Fallback if exact spacing is different
  c = c.replace(/\{\s*id:\s*"ca-spain-c295",\s*title:\s*"India-Spain Aerospace Cooperation & C-295 Project",\s*\{/g, 
                `{\n            id: "ca-spain-c295",\n            title: "India-Spain Aerospace Cooperation & C-295 Project"\n          },\n          {`);
  fs.writeFileSync('data.js', c);
  console.log('Applied regex fix.');
}
