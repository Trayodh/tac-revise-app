const fs = require('fs');

const src = fs.readFileSync('data.js', 'utf8');

// Split the file by `id: "` or `id: '`
const blocks = src.split(/id:\s*['"]/);

let total = 0;
let emptyFormulas = [];
let emptyMindmaps = [];

for (let i = 1; i < blocks.length; i++) {
  const block = blocks[i];
  const idMatch = block.match(/^([^'"]+)['"]/);
  if (!idMatch) continue;
  
  const id = idMatch[1];
  
  // Only consider blocks that look like topics (they have a 'notes:' or 'formulas:' or 'mindmap:' field)
  if (!block.includes('notes:') && !block.includes('formulas:') && !block.includes('mindmap:')) {
    continue;
  }
  
  total++;
  
  // Check formulas
  const fMatch = block.match(/formulas:\s*[`'"]([\s\S]*?)[`'"]/);
  if (!fMatch || fMatch[1].trim().length < 20) {
    emptyFormulas.push(id);
  }
  
  // Check mindmap
  const mMatch = block.match(/mindmap:\s*\{([\s\S]*?)\}/);
  if (!mMatch || mMatch[1].trim().length < 20 || mMatch[1].includes('branches: []')) {
    emptyMindmaps.push(id);
  }
}

console.log('Total topics found:', total);
console.log('Empty Formulas:', emptyFormulas.length);
if (emptyFormulas.length > 0) console.log(emptyFormulas.join(', '));
console.log('Empty Mindmaps:', emptyMindmaps.length);
if (emptyMindmaps.length > 0) console.log(emptyMindmaps.join(', '));
