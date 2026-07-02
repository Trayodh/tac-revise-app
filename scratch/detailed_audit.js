const fs = require('fs');

const src = fs.readFileSync('data.js', 'utf8');

// Use a simple state machine or regex to find all topics
const topics = [];
const topicIdRegex = /id:\s*['"]([^'"]+)['"]/g;
let m;
while ((m = topicIdRegex.exec(src)) !== null) {
  const start = m.index;
  // find the next id to bound our search
  const nextMatch = topicIdRegex.exec(src);
  const end = nextMatch ? nextMatch.index : src.length;
  if (nextMatch) topicIdRegex.lastIndex = m.index + 1; // reset to after current match

  const block = src.slice(start, end);
  topics.push({ id: m[1], block });
}

let emptyFormulas = [];
let emptyMindmaps = [];

for (const topic of topics) {
  // If it's a chapter id or subject id it might not have formulas/mindmap. Let's assume topics have "notes" property.
  if (!blockHas(topic.block, "notes:") && !blockHas(topic.block, "formulas:") && !blockHas(topic.block, "mindmap:")) {
     continue; // probably a chapter or subject
  }
  
  // check formulas
  const fMatch = topic.block.match(/formulas:\s*[`'"]([\s\S]*?)[`'"]/);
  if (!fMatch || fMatch[1].trim().length < 20) {
     emptyFormulas.push(topic.id);
  }

  // check mindmap
  const mMatch = topic.block.match(/mindmap:\s*\{([\s\S]*?)\}/);
  if (!mMatch || mMatch[1].trim().length < 20 || mMatch[1].includes('branches: []')) {
     emptyMindmaps.push(topic.id);
  }
}

function blockHas(block, str) {
  return block.indexOf(str) !== -1;
}

console.log('Total identified topics:', topics.length);
console.log('Empty Formulas:', emptyFormulas.length);
if (emptyFormulas.length > 0) console.log(emptyFormulas.join(', '));
console.log('Empty Mindmaps:', emptyMindmaps.length);
if (emptyMindmaps.length > 0) console.log(emptyMindmaps.join(', '));
