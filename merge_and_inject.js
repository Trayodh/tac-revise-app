/**
 * merge_and_inject.js
 * 
 * 1. Merges all question bank part files into master banks
 * 2. For categories where we don't have enough handwritten questions,
 *    programmatically varies existing questions to fill gaps
 * 3. Injects into broken papers in data.js
 * 4. Removes math contamination from GS papers
 * 5. Cross-deduplicates across all papers
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const DATA_JS_PATH = path.join(__dirname, 'data.js');
const BANKS_DIR = path.join(__dirname, 'question_banks');
const BROKEN_THRESHOLD = 0.80;

const MATH_KEYWORDS = [
  'sin⁻¹','cos⁻¹','tan⁻¹','sin(','cos(','tan(','cot 15','sec x','cosec',
  '∫','integral','differentiat','dy/dx','d²y/dx²','lim(x→','lim (x','lim(',
  'matrix','matrices','determinant',
  'polynomial','quadratic equation','ax² + bx','ax²+bx',
  'binomial theorem',
  'vector a =','vector b =','projection of vector',
  'complex number','argand','modulus of z',
  'differential equation','particular solution',
  'conic section','parabola y²','ellipse x²',
  'direction cosines','direction ratios',
  'find the value of sin','find the value of cos','find the value of tan',
  'evaluate: sin','evaluate: cos','evaluate: tan',
  'if sinθ','if cosθ','if tanθ'
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

// Load all part files for a given bank prefix and merge them
function loadBankParts(prefix) {
  const allQs = [];
  const files = fs.readdirSync(BANKS_DIR).filter(f => f.startsWith(prefix) && f.endsWith('.json')).sort();
  for (const file of files) {
    try {
      const qs = JSON.parse(fs.readFileSync(path.join(BANKS_DIR, file), 'utf8'));
      allQs.push(...qs);
    } catch (e) {
      console.warn(`  [WARN] Failed to parse ${file}: ${e.message}`);
    }
  }
  // Deduplicate
  const seen = new Set();
  const unique = [];
  for (const q of allQs) {
    const key = q.question.trim().toLowerCase().substring(0, 100);
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(q);
    }
  }
  return unique;
}

function main() {
  console.log('=== MERGE & INJECT ENGINE ===\n');
  
  const { db, startIdx, fullContent } = loadDB();
  console.log(`Loaded ${db.length} papers from data.js`);
  
  // Backup
  const backupPath = DATA_JS_PATH + '.pre_merge_backup';
  if (!fs.existsSync(backupPath)) {
    fs.copyFileSync(DATA_JS_PATH, backupPath);
    console.log('Backed up data.js\n');
  }
  
  // Load all banks
  const banks = {
    'nda_gs': loadBankParts('nda_gs'),
    'cds_gs': loadBankParts('cds_gs'),       // Will fall back to nda_gs if empty
    'nda_english': loadBankParts('nda_english'),
    'cds_english': loadBankParts('cds_english'), // Will fall back to nda_english
    'nda_math': loadBankParts('nda_math'),
    'cds_math': loadBankParts('cds_math'),
    'afcat_combined': loadBankParts('afcat_combined')
  };
  
  // Fallback: CDS GS uses NDA GS bank if empty, etc.
  if (banks['cds_gs'].length === 0) banks['cds_gs'] = banks['nda_gs'];
  if (banks['cds_english'].length === 0) banks['cds_english'] = banks['nda_english'];
  if (banks['afcat_combined'].length === 0) banks['afcat_combined'] = banks['nda_gs']; // AFCAT combined uses GS + English
  
  console.log('Question banks loaded:');
  Object.entries(banks).forEach(([k, v]) => console.log(`  ${k}: ${v.length} questions`));
  
  // Identify broken papers
  const broken = [];
  db.forEach((exam, idx) => {
    const u = new Set(exam.questions.map(q => q.question)).size;
    if (u / exam.questions.length < BROKEN_THRESHOLD) {
      broken.push({ exam, idx, unique: u, total: exam.questions.length });
    }
  });
  console.log(`\nFound ${broken.length} broken papers\n`);
  
  // Build global dedup set from GOOD papers
  const globalSet = new Set();
  db.forEach(exam => {
    const u = new Set(exam.questions.map(q => q.question)).size;
    if (u / exam.questions.length >= BROKEN_THRESHOLD) {
      exam.questions.forEach(q => globalSet.add(q.question.trim().toLowerCase().substring(0, 100)));
    }
  });
  console.log(`Global dedup set: ${globalSet.size} questions from good papers\n`);
  
  // Track bank usage per key to distribute across papers
  const bankIdx = {};
  Object.keys(banks).forEach(k => bankIdx[k] = 0);
  
  let fixedCount = 0;
  let totalAdded = 0;
  
  for (const { exam, idx } of broken) {
    const et = getExamType(exam);
    const st = getSubjectType(exam);
    let bankKey = et === 'afcat' ? 'afcat_combined' : `${et}_${st}`;
    
    // For GAT/GK types, map to gs
    if (!banks[bankKey] || banks[bankKey].length === 0) {
      bankKey = `${et}_gs`;
    }
    if (!banks[bankKey] || banks[bankKey].length === 0) {
      bankKey = 'nda_gs'; // ultimate fallback
    }
    
    const target = exam.questions.length;
    
    // Step 1: Extract unique questions
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
    if (st === 'gs') {
      const before = uniqueQs.length;
      uniqueQs = uniqueQs.filter(q => !isMathQ(q.question));
      const removed = before - uniqueQs.length;
      if (removed > 0) {
        console.log(`  ${exam.id}: removed ${removed} math Qs`);
      }
    }
    
    // Step 3: Fill from bank (starting from where we left off for this bank)
    const bank = banks[bankKey];
    let added = 0;
    const needed = target - uniqueQs.length;
    
    let bi = bankIdx[bankKey] || 0;
    // If we've exhausted the bank, wrap around
    if (bi >= bank.length) bi = 0;
    
    const startBi = bi;
    let wrapped = false;
    
    while (added < needed && bank.length > 0) {
      const q = bank[bi];
      const key = q.question.trim().toLowerCase().substring(0, 100);
      
      if (!seen.has(key) && !globalSet.has(key)) {
        if (st === 'gs' && isMathQ(q.question)) {
          // Skip math questions in GS banks
        } else {
          seen.add(key);
          globalSet.add(key);
          uniqueQs.push(q);
          added++;
        }
      }
      
      bi = (bi + 1) % bank.length;
      if (bi === startBi) break; // Wrapped all the way around
    }
    
    bankIdx[bankKey] = bi;
    
    db[idx].questions = uniqueQs;
    db[idx].questionsCount = uniqueQs.length;
    
    const pct = uniqueQs.length > 0 ? 
      (new Set(uniqueQs.map(q => q.question)).size / uniqueQs.length * 100).toFixed(0) : '0';
    console.log(`  ${exam.id}: ${uniqueQs.length}/${target} Qs (${pct}% unique) — added ${added} from ${bankKey}`);
    
    fixedCount++;
    totalAdded += added;
  }
  
  // Write back
  const beforeCbt = fullContent.substring(0, startIdx);
  const serialized = 'const CBT_EXAMS_DATABASE = ' + JSON.stringify(db, null, 2) + ';\n';
  fs.writeFileSync(DATA_JS_PATH, beforeCbt + serialized, 'utf8');
  
  console.log(`\n=== RESULTS ===`);
  console.log(`Fixed: ${fixedCount} papers`);
  console.log(`Total questions injected: ${totalAdded}`);
  console.log(`File size: ${(fs.statSync(DATA_JS_PATH).size / 1024 / 1024).toFixed(2)} MB`);
  
  // Final verification
  console.log('\n=== VERIFICATION ===');
  const { db: vdb } = loadDB();
  let issues = 0;
  vdb.forEach(e => {
    const u = new Set(e.questions.map(q => q.question)).size;
    const r = u / e.questions.length;
    if (r < 0.95) {
      console.log(`  [WARN] ${e.id}: ${u}/${e.questions.length} unique (${(r*100).toFixed(0)}%)`);
      issues++;
    }
    // Check GS for math contamination
    const st = e.subject.toLowerCase();
    if (!st.includes('math') && !st.includes('english')) {
      const mathCount = e.questions.filter(q => isMathQ(q.question)).length;
      if (mathCount > 0) {
        console.log(`  [WARN] ${e.id}: ${mathCount} math Qs in GS paper`);
        issues++;
      }
    }
  });
  
  if (issues === 0) {
    console.log('  All papers verified OK!');
  } else {
    console.log(`  ${issues} issues remain (papers may still have fewer questions than target — bank needs more questions)`);
  }
}

main();
