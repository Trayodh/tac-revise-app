const fs = require('fs');
const vm = require('vm');

console.log("=== VERIFYING SECTION BOUNDARY ENFORCEMENT ===");

const dataPath = 'data.js';
let s = fs.readFileSync(dataPath, 'utf8');
s = s.replace(/const CBT_EXAMS_DATABASE/g, 'var CBT_EXAMS_DATABASE');

const context = {};
vm.createContext(context);
vm.runInContext(s, context);

const exams = context.CBT_EXAMS_DATABASE;

const HISTORY_PATTERNS = [
    'ajanta', 'ellora', 'gupta', 'maurya', 'delhi sultanate',
    'maratha', 'vijayanagara', 'chola', 'pallava', 'rashtrakuta',
    'harappan', 'indus valley', 'vedic', 'ashoka', 'chandragupta',
    'akbar', 'aurangzeb', 'humayun', 'babur', 'shershah',
    'revolt of 1857', 'sepoy mutiny', 'jallianwala', 'quit india',
    'non-cooperation', 'civil disobedience', 'khilafat',
    'partition of india', 'cabinet mission', 'simon commission',
    'bhagat singh', 'subhas chandra bose', 'bal gangadhar tilak',
    'swadeshi movement', 'rowlatt act', 'montague chelmsford',
    'socialist tendency', 'growth of socialist', 'battle of', 'treaty of'
];

const GEO_PATTERNS = [
    'glacial trough', 'glacial', 'metamorphic rock', 'igneous rock', 'sedimentary rock',
    'alpine glacier', 'continental glacier', 'cotton textile industry', 'river basin', 'watershed',
    'monsoon', 'westerlies', 'trade winds', 'jet stream', 'soil erosion', 'deforestation', 'desertification',
    'earthquake zone', 'tectonic plate', 'volcanic', 'tsunami', 'saar', 'ruhr', 'nile', 'amazon', 'yangtze',
    'ganges', 'brahmaputra', 'himalayan', 'deccan plateau', 'western ghats', 'eastern ghats',
    'bay of bengal', 'arabian sea', 'indian ocean', 'latitude', 'longitude'
];

let mismatches = 0;

exams.forEach(exam => {
  if (exam.id.includes('gat-v2')) {
    // GAT Sections:
    // History: 100-114
    // Geography: 115-134
    exam.questions.forEach((q, idx) => {
      const txt = (q.question + ' ' + (q.options||[]).join(' ')).toLowerCase();
      if (idx >= 100 && idx < 115) {
        // Should be history, must NOT be geography
        if (GEO_PATTERNS.some(p => txt.includes(p)) && !HISTORY_PATTERNS.some(p => txt.includes(p))) {
          console.log(`[MISMATCH GAT History Section] ${exam.id} Q${idx+1} has Geography content: "${q.question.substring(0, 80)}..."`);
          mismatches++;
        }
      }
      if (idx >= 115 && idx < 135) {
        // Should be geography, must NOT be history
        if (HISTORY_PATTERNS.some(p => txt.includes(p)) && !GEO_PATTERNS.some(p => txt.includes(p))) {
          console.log(`[MISMATCH GAT Geography Section] ${exam.id} Q${idx+1} has History content: "${q.question.substring(0, 80)}..."`);
          mismatches++;
        }
      }
    });
  }
  
  if (exam.id.includes('gk-v2')) {
    // CDS GS Sections:
    // Geography: 20-41
    // History: 42-63
    exam.questions.forEach((q, idx) => {
      const txt = (q.question + ' ' + (q.options||[]).join(' ')).toLowerCase();
      if (idx >= 20 && idx < 42) {
        // Should be geography, must NOT be history
        if (HISTORY_PATTERNS.some(p => txt.includes(p)) && !GEO_PATTERNS.some(p => txt.includes(p))) {
          console.log(`[MISMATCH CDS GK Geography Section] ${exam.id} Q${idx+1} has History content: "${q.question.substring(0, 80)}..."`);
          mismatches++;
        }
      }
      if (idx >= 42 && idx < 64) {
        // Should be history, must NOT be geography
        if (GEO_PATTERNS.some(p => txt.includes(p)) && !HISTORY_PATTERNS.some(p => txt.includes(p))) {
          console.log(`[MISMATCH CDS GK History Section] ${exam.id} Q${idx+1} has Geography content: "${q.question.substring(0, 80)}..."`);
          mismatches++;
        }
      }
    });
  }
});

console.log(`\nTotal boundary mismatches found: ${mismatches}`);
