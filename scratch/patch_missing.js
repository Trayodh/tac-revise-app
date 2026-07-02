// Patch industrics-geopolitics directly into notes_browser.js
const fs = require('fs');
let src = fs.readFileSync('js/notes_browser.js', 'utf8');

// Find the last entry before closing `};` of TOPIC_MAPS
const closeIdx = src.indexOf('"ca-space-nuclear"');
if (closeIdx === -1) {
  console.log('Could not find anchor. Trying alternative...');
  // Just add at the end of TOPIC_MAPS before `};`
  const tmEnd = src.lastIndexOf('"ca-space-nuclear":');
  console.log('Found at:', tmEnd);
}

// Simple: find `"ca-relations":` entry and add after it
const anchor = '"ca-relations": [';
const idx = src.indexOf(anchor);
console.log('Anchor index:', idx);
if (idx !== -1) {
  const lineEnd = src.indexOf('\n  ]', idx) + 4;
  const newEntry = '\n  "industrics-geopolitics": [\n    {\n      "title": "World Geopolitical Map",\n      "src": "images/current_affairs_world.png"\n    }\n  ],';
  src = src.slice(0, lineEnd) + newEntry + src.slice(lineEnd);
  fs.writeFileSync('js/notes_browser.js', src, 'utf8');
  console.log('Patched industrics-geopolitics into TOPIC_MAPS!');
} else {
  console.log('Anchor not found! Checking nearby...');
}
