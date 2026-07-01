const fs = require('fs');

const rawBank = JSON.parse(fs.readFileSync('question_banks/mmlu_bank.json', 'utf8'));

// Deep copy and shuffle arrays
function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

const pools = {
  math: shuffle([...rawBank.math]),
  english: shuffle([...rawBank.english]),
  gs: shuffle([...rawBank.gs])
};

const newExams = [];
let paperIndex = 1;

// Helper to pop questions
function popQuestions(poolName, count) {
  if (pools[poolName].length < count) return null;
  return pools[poolName].splice(0, count);
}

// 1. Generate NDA Math (100 qs each)
while (true) {
  const qs = popQuestions('math', 100);
  if (!qs) break;
  newExams.push({
    id: `nda-math-mock-${paperIndex}`,
    type: "NDA",
    subject: "Mathematics",
    title: `NDA Mathematics Mock Test ${paperIndex}`,
    description: "Complete 100-question Mathematics test based on actual academic standards.",
    durationMinutes: 150,
    questions: qs.map((q, i) => ({ ...q, id: `nda-m-${paperIndex}-${i+1}` }))
  });
  paperIndex++;
}

// 2. Generate CDS Math (100 qs each)
paperIndex = 1;
while (true) {
  const qs = popQuestions('math', 100);
  if (!qs) break;
  newExams.push({
    id: `cds-math-mock-${paperIndex}`,
    type: "CDS",
    subject: "Mathematics",
    title: `CDS Elementary Mathematics Mock Test ${paperIndex}`,
    description: "Complete 100-question Mathematics test based on actual academic standards.",
    durationMinutes: 120,
    questions: qs.map((q, i) => ({ ...q, id: `cds-m-${paperIndex}-${i+1}` }))
  });
  paperIndex++;
}

// 3. Generate CDS English (120 qs each)
paperIndex = 1;
while (true) {
  const qs = popQuestions('english', 120);
  if (!qs) break;
  newExams.push({
    id: `cds-english-mock-${paperIndex}`,
    type: "CDS",
    subject: "English",
    title: `CDS English Mock Test ${paperIndex}`,
    description: "Complete 120-question English test based on actual academic standards.",
    durationMinutes: 120,
    questions: qs.map((q, i) => ({ ...q, id: `cds-e-${paperIndex}-${i+1}` }))
  });
  paperIndex++;
}

// 4. Generate NDA GAT (120 qs: 40 English, 80 GS) - mixing them to make use of GS
paperIndex = 1;
while (true) {
  if (pools['english'].length < 40 || pools['gs'].length < 80) break;
  const engQs = popQuestions('english', 40);
  const gsQs = popQuestions('gs', 80);
  const combined = shuffle([...engQs, ...gsQs]);
  
  newExams.push({
    id: `nda-gat-mock-${paperIndex}`,
    type: "NDA",
    subject: "GAT",
    title: `NDA GAT Mock Test ${paperIndex}`,
    description: "Complete 120-question General Ability Test (English & General Knowledge).",
    durationMinutes: 150,
    questions: combined.map((q, i) => ({ ...q, id: `nda-g-${paperIndex}-${i+1}` }))
  });
  paperIndex++;
}

// 5. Generate CDS GK (120 qs each)
paperIndex = 1;
while (true) {
  const qs = popQuestions('gs', 120);
  if (!qs) break;
  newExams.push({
    id: `cds-gk-mock-${paperIndex}`,
    type: "CDS",
    subject: "General Knowledge",
    title: `CDS General Knowledge Mock Test ${paperIndex}`,
    description: "Complete 120-question General Knowledge test based on actual academic standards.",
    durationMinutes: 120,
    questions: qs.map((q, i) => ({ ...q, id: `cds-gk-${paperIndex}-${i+1}` }))
  });
  paperIndex++;
}

// 6. Generate AFCAT (100 qs: 20 Math, 20 English, 60 GS)
paperIndex = 1;
while (true) {
  if (pools['math'].length < 20 || pools['english'].length < 20 || pools['gs'].length < 60) break;
  const mathQs = popQuestions('math', 20);
  const engQs = popQuestions('english', 20);
  const gsQs = popQuestions('gs', 60);
  const combined = shuffle([...mathQs, ...engQs, ...gsQs]);
  
  newExams.push({
    id: `afcat-mock-${paperIndex}`,
    type: "AFCAT",
    subject: "Combined",
    title: `AFCAT Full Mock Test ${paperIndex}`,
    description: "Complete 100-question test covering Math, English, and General Awareness.",
    durationMinutes: 120,
    questions: combined.map((q, i) => ({ ...q, id: `afcat-${paperIndex}-${i+1}` }))
  });
  paperIndex++;
}

console.log(`Generated ${newExams.length} fully unique, zero-repetition exams!`);

// Now we replace data.js
let originalData = fs.readFileSync('data.js', 'utf8');

// Find where CBT_EXAMS_DATABASE starts and ends
const startIdx = originalData.indexOf('const CBT_EXAMS_DATABASE = [');
if (startIdx === -1) {
  console.error("Could not find CBT_EXAMS_DATABASE in data.js");
  process.exit(1);
}

// We will inject our new database at startIdx
const preText = originalData.substring(0, startIdx);
const newDbString = 'const CBT_EXAMS_DATABASE = ' + JSON.stringify(newExams, null, 2) + ';\n\n// End of File\n';

fs.writeFileSync('data.js', preText + newDbString, 'utf8');
console.log("Successfully completely rewritten data.js!");
