const fs = require('fs');

global.window = {};
global.EXPANDED_NOTES_DATA = {};

// Load notes_extra
for (let i = 1; i <= 9; i++) {
  const filename = i === 1 ? 'notes_extra.js' : `notes_extra_${i}.js`;
  if (fs.existsSync(filename)) {
    try {
      const cleanContent = fs.readFileSync(filename, 'utf8').replace(/window\./g, 'global.');
      (new Function(cleanContent))();
    } catch (e) {
      console.error(`Error loading ${filename}:`, e.message);
    }
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

const subjects = ['physics', 'chemistry', 'biology'];
subjects.forEach(subKey => {
  console.log(`\n================Subject: ${subKey.toUpperCase()}================`);
  const subject = db[subKey];
  subject.chapters.forEach(ch => {
    console.log(`\nChapter: ${ch.title} (${ch.id})`);
    ch.topics.forEach(tp => {
      const notes = global.EXPANDED_NOTES_DATA[tp.id] || tp.notes || '';
      console.log(`  Topic: ${tp.title} (${tp.id})`);
      console.log(`    Notes Length: ${notes.length} characters`);
      if (notes.length > 0) {
        console.log(`    Snippet: ${notes.trim().substring(0, 200).replace(/\s+/g, ' ')}...`);
      } else {
        console.log(`    Important: WARNING: NO NOTES DEFINED!`);
      }
    });
  });
});
