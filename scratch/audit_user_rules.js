const fs = require('fs');
const vm = require('vm');

console.log("=== AUDITING PAPERS AGAINST USER RULES ===");

// Load data.js
const dataPath = 'data.js';
let s = fs.readFileSync(dataPath, 'utf8');
s = s.replace(/const CBT_EXAMS_DATABASE/g, 'var CBT_EXAMS_DATABASE');

const context = {};
vm.createContext(context);
try {
  vm.runInContext(s, context);
} catch (e) {
  console.error("Failed to parse data.js:", e.message);
  process.exit(1);
}

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
    'socialist tendency in the national movement',
    'growth of socialist'
];

const GEO_PATTERNS = [
    'glacial trough', 'glacial', 'metamorphic rock', 'igneous rock', 'sedimentary rock',
    'alpine glacier', 'continental glacier',
    'cotton textile industry', 'river basin', 'watershed',
    'monsoon', 'westerlies', 'trade winds', 'jet stream',
    'soil erosion', 'deforestation', 'desertification',
    'earthquake zone', 'tectonic plate', 'volcanic', 'tsunami',
    'saar', 'ruhr', 'nile', 'amazon', 'yangtze', 'ganges', 'brahmaputra',
    'himalayan', 'deccan plateau', 'western ghats', 'eastern ghats',
    'bay of bengal', 'arabian sea', 'indian ocean'
];

let historyViolations = 0;
let geoViolations = 0;
let truncatedStatements = 0;

exams.forEach(exam => {
  const isGKPaper = exam.id.includes('gk') || exam.id.includes('gat');
  
  exam.questions.forEach((q, idx) => {
    const txt = (q.question + ' ' + (q.options||[]).join(' ')).toLowerCase();
    const fullQ = q.question;
    
    // Check Rule 5: Dropped truncated statements
    const isStatementFormat = /consider the following|which of the following statements/i.test(fullQ);
    if (isStatementFormat && fullQ.trim().length < 120) {
      console.log(`[VIOLATION - Truncated Statement] ${exam.id} Q${idx+1}: "${fullQ.substring(0, 80)}..." (length=${fullQ.trim().length})`);
      truncatedStatements++;
    }
    
    // Check if this is a general knowledge question in a GK paper that should be in History/Geography
    if (isGKPaper && q.topicId === 'general_knowledge') {
      if (HISTORY_PATTERNS.some(p => txt.includes(p))) {
        console.log(`[VIOLATION - History in GK] ${exam.id} Q${idx+1}: "${fullQ.substring(0, 80)}..."`);
        historyViolations++;
      }
      if (GEO_PATTERNS.some(p => txt.includes(p))) {
        console.log(`[VIOLATION - Geography in GK] ${exam.id} Q${idx+1}: "${fullQ.substring(0, 80)}..."`);
        geoViolations++;
      }
    }
  });
});

console.log("\n=== AUDIT SUMMARY ===");
console.log(`Truncated Statements: ${truncatedStatements}`);
console.log(`History in GK Paper: ${historyViolations}`);
console.log(`Geography in GK Paper: ${geoViolations}`);
console.log(`Total Violations: ${truncatedStatements + historyViolations + geoViolations}`);
