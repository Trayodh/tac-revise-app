const fs = require('fs');
const path = require('path');

const targetFiles = [
  'notes_extra_history.js',
  'notes_extra_history_1000w.js',
  'notes_extra_history_upgraded.js',
  'notes_data.js',
  'data.js',
  'notes_data_exam_focused.js',
  'notes_data_upgraded.js',
  'clean_notes.js',
  'ai_generated_notes.js',
  'android/app/src/main/assets/public/notes_extra_history.js',
  'android/app/src/main/assets/public/notes_extra_history_upgraded.js',
  'android/app/src/main/assets/public/notes_data.js'
];

const regex2 = /<h2[^>]*>.*?Pathfinder General Studies - Extra Revision.*?<\/h2>/g;

let modifiedCount = 0;
for (const file of targetFiles) {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) continue;
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let newContent = content.replace(regex2, '');
    
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Updated ${file}`);
      modifiedCount++;
    }
  } catch (e) {
    console.error(`Error processing ${file}: ${e.message}`);
  }
}
console.log(`Total files modified: ${modifiedCount}`);
