const fs = require('fs');

// Evaluate data.js to extract NOTES_DATABASE
const src = fs.readFileSync('data.js', 'utf8');
// Find all topic objects that have empty/missing formulas or mindmap
const emptyFormulas = [];
const emptyMindmap = [];

// Match topics with formulas: '' or formulas: `` or no formulas field
const topicBlocks = src.match(/\{\s*id:\s*['"]([^'"]+)['"]/g) || [];
console.log('Total topic id references found:', topicBlocks.length);

// Count empty formulas
const emptyFormulasRx = /formulas:\s*[`'"](\s*)[`'"]/g;
let m;
let count = 0;
while ((m = emptyFormulasRx.exec(src)) !== null) {
  count++;
}
console.log('Topics with empty formulas string:', count);

// Count empty mindmaps (mindmap: {} or mindmap: { root: "X", branches: [] })
const emptyMindmapRx = /mindmap:\s*\{\s*root:\s*['"][^'"]*['"],\s*branches:\s*\[\s*\]\s*\}/g;
count = 0;
while ((m = emptyMindmapRx.exec(src)) !== null) {
  count++;
}
console.log('Topics with empty branches array:', count);

// Count mindmap: {} completely empty
const emptyMindmapRx2 = /mindmap:\s*\{\s*\}/g;
count = 0;
while ((m = emptyMindmapRx2.exec(src)) !== null) {
  count++;
}
console.log('Topics with {} mindmap:', count);
