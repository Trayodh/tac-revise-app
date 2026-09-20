const fs = require('fs');
const exactMap = JSON.parse(fs.readFileSync('perfect_map.json'));
let topics = new Set();
let files = ['notes_data.js', 'notes_extra_history.js', 'notes_extra.js'];
files.forEach(f => {
  if(fs.existsSync(f)){
     let data = fs.readFileSync(f, 'utf8');
     for (const match of data.matchAll(/"id":\s*"([^"]+)"/g)) {
         topics.add(match[1]);
     }
  }
});
console.log('Total topics:', topics.size);
console.log('Chem:', [...topics].filter(t => t.includes('chem') || t.includes('matter') || t.includes('acid') || t.includes('metal')));
console.log('Econ:', [...topics].filter(t => t.includes('econ')));
console.log('Reasoning:', [...topics].filter(t => t.includes('reasoning')));
