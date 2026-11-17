const fs = require('fs');

const dataFile = fs.readFileSync('data.js', 'utf8');
const evalCode = dataFile.replace('const NOTES_DATABASE =', 'global.NOTES_DATABASE =')
  .replace('let CURRENT_AFFAIRS_DB =', 'global.CURRENT_AFFAIRS_DB =')
  .replace('let CURRENT_AFFAIRS_LIVE =', 'global.CURRENT_AFFAIRS_LIVE =');
global.CURRENT_AFFAIRS_DB = {};
global.CBT_EXAMS_DATABASE = [];
eval(evalCode);

const db = global.NOTES_DATABASE;

// Check EXTRA_QUESTION_BANK
const extraFile = fs.readFileSync('extra_bank_data.js', 'utf8');
const extraEvalCode = extraFile.replace('window.EXTRA_QUESTION_BANK =', 'global.EXTRA_QUESTION_BANK =');
eval(extraEvalCode);
const mcqs = global.EXTRA_QUESTION_BANK;

// Check EXPANDED_NOTES_DATA
global.window = {};
global.window.EXPANDED_NOTES_DATA = {};
try {
  const exNotesFiles = ['notes_generated_polity.js', 'notes_generated_history.js', 'notes_extra_reasoning.js', 'notes_generated_geography.js', 'notes_generated_science.js'];
  for (let file of exNotesFiles) {
    if (fs.existsSync(file)) {
      const content = fs.readFileSync(file, 'utf8');
      eval(content);
    }
  }
} catch (e) {
  console.log("Error evaluating expanded notes:", e);
}
let expandedNotes = global.window.EXPANDED_NOTES_DATA;

let chaptersToRemove = [];
let totalTopicsRemoved = 0;

for (let subj in db) {
  let subjectObj = db[subj];
  let chapters = subjectObj.chapters;
  if (!chapters || !Array.isArray(chapters)) continue;
  
  // We will filter the chapters array
  let chaptersToKeep = [];
  
  for (let i = 0; i < chapters.length; i++) {
    let chapterObj = chapters[i];
    let chapTitle = chapterObj.title;
    let topics = chapterObj.topics || [];
    let hasNotes = false;
    
    // check if this chapter has MCQs
    let hasMCQs = false;
    let cleanSubjTitle = subjectObj.title.split(' (')[0].split(' &')[0].trim();
    if (mcqs[cleanSubjTitle] && mcqs[cleanSubjTitle][chapTitle]) {
      hasMCQs = mcqs[cleanSubjTitle][chapTitle].length > 0;
    } else if (mcqs[subjectObj.title] && mcqs[subjectObj.title][chapTitle]) {
      hasMCQs = mcqs[subjectObj.title][chapTitle].length > 0;
    }
    
    for (let t of topics) {
       if ((t.notes && t.notes !== "Notes coming soon..." && t.notes.length > 50) || expandedNotes[t.id]) {
         hasNotes = true;
         break;
       }
    }
    
    if (hasMCQs && !hasNotes) {
      console.log(`Chapter to remove: [${subjectObj.title}] -> ${chapTitle} (has MCQs: ${hasMCQs}, has Notes: ${hasNotes})`);
      chaptersToRemove.push({subj, chapTitle});
    } else {
      chaptersToKeep.push(chapterObj);
    }
  }
  
  subjectObj.chapters = chaptersToKeep;
}

// Chapters are already removed by assigning chaptersToKeep

if (chaptersToRemove.length > 0) {
    let newContent = dataFile;
    // Replace the NOTES_DATABASE declaration completely
    const startIdx = newContent.indexOf('const NOTES_DATABASE =');
    const endIdx = newContent.indexOf('if (typeof module', startIdx);
    if (startIdx !== -1 && endIdx !== -1) {
        newContent = newContent.substring(0, startIdx) + `const NOTES_DATABASE = ${JSON.stringify(db, null, 2)};\n\n` + newContent.substring(endIdx);
        fs.writeFileSync('data.js', newContent, 'utf8');
        console.log(`Successfully removed ${chaptersToRemove.length} chapters from data.js`);
    } else {
        console.log("Failed to inject pruned NOTES_DATABASE back to data.js");
    }
} else {
    console.log("No chapters matched the criteria.");
}
