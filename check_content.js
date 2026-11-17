const fs = require('fs');

const code = fs.readFileSync('app.js', 'utf8');

// Extract the NOTES_DATABASE string
const startIdx = code.indexOf('const NOTES_DATABASE = {');
let endIdx = -1;
let bracketCount = 0;
let foundStart = false;

for (let i = startIdx; i < code.length; i++) {
  if (code[i] === '{') {
    bracketCount++;
    foundStart = true;
  } else if (code[i] === '}') {
    bracketCount--;
  }
  
  if (foundStart && bracketCount === 0) {
    endIdx = i + 1;
    break;
  }
}

const dbString = code.substring(startIdx + 22, endIdx);
let db;
try {
  // Try evaluating the object
  db = (new Function(`return ${dbString};`))();
  
  const missing = [];
  
  for (const subjectKey in db) {
    const subject = db[subjectKey];
    for (const chapter of subject.chapters) {
      if (!chapter.topics || chapter.topics.length === 0) {
        missing.push(`${subjectKey} -> ${chapter.title} (No topics)`);
      } else {
        for (const topic of chapter.topics) {
          if (!topic.notes && !topic.formulas) {
            missing.push(`${subjectKey} -> ${chapter.title} -> ${topic.title} (Missing both notes and formulas)`);
          } else if (!topic.notes) {
            missing.push(`${subjectKey} -> ${chapter.title} -> ${topic.title} (Missing notes)`);
          }
        }
      }
    }
  }
  
  if (missing.length === 0) {
    console.log("No missing content! All topics have notes/formulas.");
  } else {
    console.log("Missing content found:");
    missing.forEach(m => console.log(m));
  }
  
} catch (e) {
  console.error("Failed to parse:", e.message);
}
