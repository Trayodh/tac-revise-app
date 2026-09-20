const fs = require('fs');
const content = fs.readFileSync('data.js', 'utf8');
eval(content);
let missing = false;
for(const s in NOTES_DATABASE) { 
  if(!NOTES_DATABASE[s].chapters) continue;
  NOTES_DATABASE[s].chapters.forEach(c => {
    if(!c.topics) return;
    c.topics.forEach(t => { 
      if(!t.title) { 
        console.log(`Missing title in ${s} -> ${c.id} -> ${t.id}`); 
        missing=true; 
      } 
    });
  });
}
if(!missing) console.log('All topics have titles.');
