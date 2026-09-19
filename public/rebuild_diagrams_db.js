const fs = require('fs');

// Load NOTES_DATABASE
let dataContent = fs.readFileSync('notes_data.js', 'utf8');
dataContent = dataContent.replace(/const NOTES_DATABASE/g, 'global.NOTES_DATABASE');
eval(dataContent);
const db = global.NOTES_DATABASE;

// Load renderer
const custom = require('./assets/custom_diagrams.js');

const newDb = {};

function convertToStandard(mindmap) {
  const root = mindmap.root || 'Concept';
  const children = [];
  
  if (mindmap.branches) {
    mindmap.branches.forEach(b => {
      const branchObj = { label: b.title || 'Branch', children: [] };
      if (b.subnodes) {
        b.subnodes.forEach(sub => {
          branchObj.children.push({ label: sub, children: [] });
        });
      }
      children.push(branchObj);
    });
  }
  
  return { type: 'mindmap', root, children };
}

let count = 0;
for (const subjectId in db) {
  const subject = db[subjectId];
  for (const chapter of subject.chapters) {
    for (const topic of chapter.topics) {
      if (topic.mindmap) {
        const standardData = convertToStandard(topic.mindmap);
        const html = custom.renderCustomDiagram(standardData);
        const key = `${subjectId}__${topic.id}`;
        newDb[key] = html;
        count++;
      }
    }
  }
}

// Write diagrams_db.js
let out = `window.DIAGRAMS_DB = window.DIAGRAMS_DB || {};\n`;
for (const key in newDb) {
  out += `DIAGRAMS_DB["${key}"] = \`${newDb[key].replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`;\n`;
}

fs.writeFileSync('diagrams_db.js', out);
console.log(`Successfully rebuilt diagrams_db.js with ${count} custom HTML diagrams!`);
