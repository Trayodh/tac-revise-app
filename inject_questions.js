/**
 * inject_questions.js
 * 
 * Master script that:
 * 1. Reads data.js
 * 2. Identifies all broken papers
 * 3. For each broken paper, deduplicates existing questions
 * 4. Removes math contamination from GS papers
 * 5. Fills remaining slots with questions from comprehensive question banks
 * 6. Writes back to data.js
 * 
 * NO API dependency — all questions are hardcoded in question bank files.
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const DATA_JS_PATH = path.join(__dirname, 'data.js');
const BROKEN_THRESHOLD = 0.80;
const BANKS_DIR = path.join(__dirname, 'question_banks');

// Math contamination keywords
const MATH_KEYWORDS = [
  'sin⁻¹','cos⁻¹','tan⁻¹','sin(','cos(','tan(','cot ','sec x','cosec',
  '∫','integral','differentiat','dy/dx','d²y/dx²','lim(x→','lim (x',
  'matrix','matrices','determinant','|adj a|',
  'polynomial','quadratic equation','ax² + bx','ax²+bx',
  'binomial theorem','permutation','combination',
  'vector a =','vector b =','projection of vector',
  'complex number','argand','modulus of z',
  'differential equation','particular solution',
  'conic section','parabola y²','ellipse x²',
  'direction cosines','direction ratios'
];

function isMathQ(text) {
  const tl = text.toLowerCase();
  return MATH_KEYWORDS.some(k => tl.includes(k.toLowerCase()));
}

function loadDB() {
  const content = fs.readFileSync(DATA_JS_PATH, 'utf8');
  const startIdx = content.indexOf('const CBT_EXAMS_DATABASE = [');
  if (startIdx === -1) throw new Error('CBT_EXAMS_DATABASE not found');
  const cbtSection = content.substring(startIdx);
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(cbtSection.replace('const CBT_EXAMS_DATABASE', 'var CBT_EXAMS_DATABASE'), sandbox);
  return { db: sandbox.CBT_EXAMS_DATABASE, startIdx, fullContent: content };
}

function getSubjectType(exam) {
  const subj = exam.subject.toLowerCase();
  if (subj.includes('math')) return 'math';
  if (subj.includes('english')) return 'english';
  return 'gs';
}

function getExamType(exam) {
  const id = exam.id.toLowerCase();
  if (id.includes('afcat')) return 'afcat';
  if (id.includes('cds')) return 'cds';
  return 'nda';
}

function getBankKey(exam) {
  const et = getExamType(exam);
  const st = getSubjectType(exam);
  if (et === 'afcat') return 'afcat_combined';
  return `${et}_${st}`;
}

// Load question bank for a given key
function loadBank(key) {
  const bankPath = path.join(BANKS_DIR, `${key}.json`);
  if (!fs.existsSync(bankPath)) {
    console.warn(`  [WARN] No bank file: ${bankPath}`);
    return [];
  }
  return JSON.parse(fs.readFileSync(bankPath, 'utf8'));
}

function main() {
  console.log('=== MOCK TEST INJECTION ENGINE ===\n');
  
  const { db, startIdx, fullContent } = loadDB();
  console.log(`Loaded ${db.length} papers`);
  
  // Backup
  const backupPath = DATA_JS_PATH + '.pre_inject_backup';
  if (!fs.existsSync(backupPath)) {
    fs.copyFileSync(DATA_JS_PATH, backupPath);
    console.log('Backed up data.js');
  }
  
  // Identify broken papers
  const broken = [];
  db.forEach((exam, idx) => {
    const u = new Set(exam.questions.map(q => q.question)).size;
    if (u / exam.questions.length < BROKEN_THRESHOLD) {
      broken.push({ exam, idx, unique: u, total: exam.questions.length });
    }
  });
  console.log(`Found ${broken.length} broken papers\n`);
  
  // Build global cross-paper dedup set
  const globalSet = new Set();
  db.forEach(exam => {
    const u = new Set(exam.questions.map(q => q.question)).size;
    if (u / exam.questions.length >= BROKEN_THRESHOLD) {
      exam.questions.forEach(q => globalSet.add(q.question.trim().toLowerCase().substring(0, 100)));
    }
  });
  
  // Load all question banks
  const banks = {};
  const bankKeys = ['nda_math', 'nda_english', 'nda_gs', 'cds_math', 'cds_english', 'cds_gs', 'afcat_combined'];
  for (const key of bankKeys) {
    banks[key] = loadBank(key);
    console.log(`Bank ${key}: ${banks[key].length} questions`);
  }
  
  // Track which questions from each bank have been used
  const bankUsed = {};
  for (const key of bankKeys) bankUsed[key] = 0;
  
  let fixedCount = 0;
  
  for (const { exam, idx } of broken) {
    const bankKey = getBankKey(exam);
    const subjectType = getSubjectType(exam);
    const target = exam.questions.length;
    
    // Step 1: Deduplicate existing questions
    const seen = new Set();
    let uniqueQs = [];
    for (const q of exam.questions) {
      const key = q.question.trim().toLowerCase().substring(0, 100);
      if (!seen.has(key)) {
        seen.add(key);
        uniqueQs.push(q);
      }
    }
    
    // Step 2: Remove math contamination from GS papers
    if (subjectType === 'gs') {
      const before = uniqueQs.length;
      uniqueQs = uniqueQs.filter(q => !isMathQ(q.question));
      if (before !== uniqueQs.length) {
        console.log(`  ${exam.id}: removed ${before - uniqueQs.length} math Qs from GS paper`);
      }
    }
    
    // Step 3: Fill from bank
    const needed = target - uniqueQs.length;
    const bank = banks[bankKey] || [];
    let added = 0;
    
    for (let bi = bankUsed[bankKey] || 0; bi < bank.length && added < needed; bi++) {
      const q = bank[bi];
      const key = q.question.trim().toLowerCase().substring(0, 100);
      if (!seen.has(key) && !globalSet.has(key)) {
        // For GS papers, verify no math contamination in bank question
        if (subjectType === 'gs' && isMathQ(q.question)) continue;
        
        seen.add(key);
        globalSet.add(key);
        uniqueQs.push(q);
        added++;
      }
      bankUsed[bankKey] = bi + 1;
    }
    
    db[idx].questions = uniqueQs;
    db[idx].questionsCount = uniqueQs.length;
    
    const newRatio = (new Set(uniqueQs.map(q => q.question)).size / uniqueQs.length * 100).toFixed(0);
    console.log(`  ${exam.id}: ${uniqueQs.length}/${target} (${newRatio}% unique) — added ${added} from bank`);
    fixedCount++;
  }
  
  // Write back
  const beforeCbt = fullContent.substring(0, startIdx);
  const serialized = 'const CBT_EXAMS_DATABASE = ' + JSON.stringify(db, null, 2) + ';\n';
  fs.writeFileSync(DATA_JS_PATH, beforeCbt + serialized, 'utf8');
  
  console.log(`\n=== DONE ===`);
  console.log(`Fixed ${fixedCount} papers`);
  console.log(`File size: ${(fs.statSync(DATA_JS_PATH).size / 1024 / 1024).toFixed(2)} MB`);
}

main();
