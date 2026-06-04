const fs = require('fs');
const path = require('path');

// Simulate browser environment for the notes files
global.window = {};
global.EXPANDED_NOTES_DATA = {};

// Load all notes_extra files
for (let i = 1; i <= 9; i++) {
  const filename = i === 1 ? 'notes_extra.js' : `notes_extra_${i}.js`;
  const content = fs.readFileSync(filename, 'utf8');
  // Evaluate the content in global context to populate EXPANDED_NOTES_DATA
  try {
    // Replace window.with global. or just evaluate it
    const cleanContent = content.replace(/window\./g, 'global.');
    (new Function(cleanContent))();
  } catch (e) {
    console.error(`Failed to evaluate ${filename}:`, e.message);
  }
}

// Load app.js and extract NOTES_DATABASE
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

// Checklist topics from the user's image
const physicsChecklist = [
  { name: 'Mechanics (motion, force)', keywords: ['motion', 'force', 'newton'] },
  { name: 'Energy & machines', keywords: ['energy', 'machine', 'work', 'power'] },
  { name: 'Gravitation', keywords: ['gravitation', 'gravity', 'kepler'] },
  { name: 'Heat & temperature', keywords: ['heat', 'temperature', 'latent', 'specific heat'] },
  { name: 'Reflection/refraction', keywords: ['reflection', 'refraction', 'snell'] },
  { name: 'Lenses & mirrors', keywords: ['lens', 'mirror', 'myopia', 'defect'] },
  { name: 'Electricity & circuits', keywords: ['electricity', 'circuit', 'ohm', 'fuse'] },
  { name: 'Magnetism', keywords: ['magnetism', 'magnetic', 'field lines'] },
  { name: 'Radioactivity basics', keywords: ['radioactivity', 'decay', 'nuclear', 'fission'] },
  { name: 'Units & measurements', keywords: ['unit', 'measurement', 'dimension', 'light year'] },
  { name: 'Everyday devices', keywords: ['device', 'dynamo', 'motor', 'transformer', 'microphone'] }
];

const chemistryChecklist = [
  { name: 'Atomic structure basics', keywords: ['atomic structure', 'rutherford', 'bohr', 'isotope'] },
  { name: 'Elements & compounds', keywords: ['element', 'compound', 'mixture', 'sublimation'] },
  { name: 'Metals/non-metals', keywords: ['metal', 'non-metal', 'alloy', 'ore', 'metallurgy'] },
  { name: 'Corrosion', keywords: ['corrosion', 'rust', 'galvaniz', 'anodiz'] },
  { name: 'Fuels & petroleum', keywords: ['fuel', 'petroleum', 'coal', 'lpg', 'cng'] },
  { name: 'Acids, bases, salts', keywords: ['acid', 'base', 'salt', 'ph scale', 'litmus', 'soda'] },
  { name: 'Fertilisers', keywords: ['fertiliser', 'urea', 'npk'] },
  { name: 'Polymers/plastics', keywords: ['polymer', 'plastic', 'teflon', 'nylon', 'rubber'] },
  { name: 'Household chemicals', keywords: ['soap', 'detergent', 'saponification', 'glass', 'cement', 'medicine'] },
  { name: 'Environmental chemistry', keywords: ['environmental', 'pollution', 'acid rain', 'smog', 'ozone'] }
];

const biologyChecklist = [
  { name: 'Human body systems', keywords: ['digestive', 'circulatory', 'nervous', 'excretory', 'system'] },
  { name: 'Vitamins & deficiency diseases', keywords: ['vitamin', 'deficiency', 'scurvy', 'rickets'] },
  { name: 'Blood groups', keywords: ['blood group', 'rh factor', 'erythroblastosis', 'donor'] },
  { name: 'Hormones', keywords: ['hormone', 'thyroxine', 'insulin', 'adrenaline', 'auxin', 'gibberellin'] },
  { name: 'Genetics basics', keywords: ['genetic', 'dna', 'rna', 'mendel', 'chromosome', 'hemophilia'] },
  { name: 'Nutrition', keywords: ['nutrition', 'protein', 'carbohydrate', 'fat', 'anemia', 'goitre'] },
  { name: 'Immunity & vaccines', keywords: ['immunity', 'vaccine', 'antibody', 'antigen'] },
  { name: 'Diseases (viral, bacterial, protozoan)', keywords: ['disease', 'pathogen', 'malaria', 'tuberculosis', 'typhoid'] },
  { name: 'Plant biology', keywords: ['plant', 'kingdom', 'meristem', 'parenchyma', 'xylem', 'phloem'] }
];

function checkSubject(subjectKey, checklist) {
  console.log(`\n=== CHECKING SUBJECT: ${subjectKey.toUpperCase()} ===`);
  const subject = db[subjectKey];
  if (!subject) {
    console.log(`Subject ${subjectKey} not found in DB!`);
    return;
  }
  
  checklist.forEach(item => {
    let found = false;
    let details = '';
    
    // Search in DB chapters/topics
    for (const chapter of subject.chapters) {
      for (const topic of chapter.topics) {
        // Get the actual notes text (either from global.EXPANDED_NOTES_DATA or the topic object itself)
        const notesText = global.EXPANDED_NOTES_DATA[topic.id] || topic.notes || '';
        const formulasText = topic.formulas || '';
        const combinedText = (notesText + '\n' + formulasText).toLowerCase();
        
        // Check if any keyword matches
        const matches = item.keywords.filter(kw => combinedText.includes(kw.toLowerCase()));
        if (matches.length > 0) {
          found = true;
          details += `[Matched in Topic ID: ${topic.id} ("${topic.title}") via keywords: ${matches.join(', ')}]\n`;
        }
      }
    }
    
    if (found) {
      console.log(`• [Present] ${item.name}`);
      console.log(details.trim().split('\n').map(l => '   ' + l).join('\n'));
    } else {
      console.log(` [ABSENT OR VERY BRIEF] ${item.name}`);
    }
  });
}

checkSubject('physics', physicsChecklist);
checkSubject('chemistry', chemistryChecklist);
checkSubject('biology', biologyChecklist);
