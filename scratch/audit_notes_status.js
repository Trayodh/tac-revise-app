const fs = require('fs');

// Mock browser environment for loading files
global.window = {};
global.EXPANDED_NOTES_DATA = {};

// Load all notes_extra files to get expanded data
const files = fs.readdirSync('.').filter(f => f.startsWith('notes_extra') && f.endsWith('.js'));
console.log(`Found ${files.length} notes_extra files.`);
files.forEach(file => {
  try {
    const content = fs.readFileSync(file, 'utf8');
    const cleanContent = content.replace(/window\./g, 'global.');
    (new Function(cleanContent))();
  } catch (e) {
    console.error(`Failed to load ${file}:`, e.message);
  }
});

const totalExpandedKeys = Object.keys(global.EXPANDED_NOTES_DATA).length;
console.log(`Total expanded notes keys loaded: ${totalExpandedKeys}\n`);

// Load app.js and extract NOTES_DATABASE
const appCode = fs.readFileSync('app.js', 'utf8');
const startIdx = appCode.indexOf('const NOTES_DATABASE = {');
if (startIdx === -1) {
  console.error("Could not find NOTES_DATABASE in app.js");
  process.exit(1);
}

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

// Audit subjects
let grandTotalTopics = 0;
let grandTotalDetailed = 0;
let grandTotalPlaceholders = 0;

console.log("=== SUBJECT-WISE NOTES COVERAGE REPORT ===");
for (const subjectId in db) {
  const subject = db[subjectId];
  let totalTopics = 0;
  let detailedTopics = 0;
  let placeholderTopics = 0;
  let totalLength = 0;
  
  subject.chapters.forEach(chapter => {
    chapter.topics.forEach(topic => {
      totalTopics++;
      grandTotalTopics++;
      
      const expandedNote = global.EXPANDED_NOTES_DATA[topic.id];
      const inlineNote = topic.notes || '';
      
      if (expandedNote && expandedNote.trim().length > 100) {
        detailedTopics++;
        grandTotalDetailed++;
        totalLength += expandedNote.length;
      } else if (inlineNote && inlineNote.trim().length > 100 && !inlineNote.includes("Detailed notes expanded in")) {
        detailedTopics++;
        grandTotalDetailed++;
        totalLength += inlineNote.length;
      } else {
        placeholderTopics++;
        grandTotalPlaceholders++;
      }
    });
  });
  
  const avgLen = detailedTopics > 0 ? Math.round(totalLength / detailedTopics) : 0;
  const pct = totalTopics > 0 ? Math.round((detailedTopics / totalTopics) * 100) : 0;
  
  console.log(`- ${subject.title} (${subjectId}):`);
  console.log(`  * Total Topics: ${totalTopics}`);
  console.log(`  * Detailed Notes: ${detailedTopics} (${pct}%)`);
  console.log(`  * Missing/Placeholder: ${placeholderTopics}`);
  console.log(`  * Avg Length of Detailed Notes: ${avgLen} chars`);
}

console.log("\n=== OVERALL SUMMARY ===");
console.log(`Total Topics across all subjects: ${grandTotalTopics}`);
console.log(`Total Topics with detailed notes: ${grandTotalDetailed} (${Math.round((grandTotalDetailed/grandTotalTopics)*100)}%)`);
console.log(`Total Topics missing/placeholders: ${grandTotalPlaceholders}`);
