const fs = require('fs');
const files = ['ai_generated_notes.js', 'notes_data.js', 'notes_data_exam_focused.js', 'notes_data_upgraded.js'];
let foundMapInNonGeography = false;

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  const data = fs.readFileSync(file, 'utf8');
  const subjects = ['Physics', 'Chemistry', 'Biology', 'History', 'Polity'];
  
  for (const subject of subjects) {
    // We try to find subject blocks or check if notes contain maps while being in that subject
    // Easiest way: look for images of maps (like river_map, soil_map, etc.)
    const matches = data.match(/"subject":\s*"([^"]+)",[^}]*"notes":\s*"([^"]+)"/g);
    if (!matches) continue;
    
    for (const match of matches) {
      if (match.includes(`"subject": "${subject}"`) || match.includes(`"subject": "${subject.toLowerCase()}"`)) {
        if (match.includes('map.png') || match.includes('map.jpg') || match.includes('Map')) {
          // Exclude known biology maps if any, mostly we want to check for Geography maps
          if (match.includes('indian_river_systems') || match.includes('ocean_currents') || match.includes('monsoon')) {
            console.log(`Found geography map in ${subject} in ${file}`);
            foundMapInNonGeography = true;
          }
        }
      }
    }
  }
}
if (!foundMapInNonGeography) {
  console.log('No incorrectly injected maps found in other subjects!');
}
