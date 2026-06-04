const fs = require('fs');

global.window = {};
global.EXPANDED_NOTES_DATA = {};

for (let i = 1; i <= 9; i++) {
  const filename = i === 1 ? 'notes_extra.js' : `notes_extra_${i}.js`;
  if (fs.existsSync(filename)) {
    const cleanContent = fs.readFileSync(filename, 'utf8').replace(/window\./g, 'global.');
    (new Function(cleanContent))();
  }
}

const appCode = fs.readFileSync('app.js', 'utf8');
const startIdx = appCode.indexOf('const NOTES_DATABASE = {');
let endIdx = -1;
let bracketCount = 0;
let foundStart = false;
for (let i = startIdx; i < appCode.length; i++) {
  if (appCode[i] === '{') {
    bracketCount++;
    foundStart = true;
  } else if (appCode[i] === '}') {
    bracketCount--;
  }
  if (foundStart && bracketCount === 0) {
    endIdx = i + 1;
    break;
  }
}
const db = (new Function(`return ${appCode.substring(startIdx + 22, endIdx)};`))();

const topicIds = [
  'syl-exercises',
  'physics-electricity-magnetism',
  'physics-heat',
  'chemistry-everyday-fertilisers',
  'human-systems'
];

let output = '';
topicIds.forEach(id => {
  let found = null;
  for (const subKey in db) {
    for (const ch of db[subKey].chapters) {
      for (const tp of ch.topics) {
        if (tp.id === id) {
          found = tp;
        }
      }
    }
  }
  
  if (found) {
    const notes = global.EXPANDED_NOTES_DATA[id] || found.notes || '';
    output += `\n\n====================================================\n`;
    output += `TOPIC: ${found.title} (${id})\n`;
    output += `====================================================\n`;
    output += notes + '\n';
  }
});

fs.writeFileSync('scratch/specific_topics_content.txt', output, 'utf8');
console.log('Successfully written science content to scratch/specific_topics_content.txt in UTF-8!');
