/**
 * fix_mocks_direct.js
 * 
 * Directly fixes all broken mock test papers by:
 * 1. Reading data.js and identifying broken papers (< 80% unique questions)
 * 2. For each broken paper, keeping only the unique questions
 * 3. Using Gemini API ONE paper at a time with long waits between calls
 * 4. Falling back to keeping existing unique questions if API fails
 * 5. Removing any math questions from GS/GK papers
 * 
 * Usage: node fix_mocks_direct.js
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const DATA_JS_PATH = path.join(__dirname, 'data.js');
const BROKEN_THRESHOLD = 0.80;

function delay(ms) { return new Promise(r => setTimeout(r, ms)); }

// ========================
// MATH CONTAMINATION DETECTOR
// ========================
const MATH_KEYWORDS = [
  'sin⁻¹', 'cos⁻¹', 'tan⁻¹', 'sin(', 'cos(', 'tan(', 'cot ', 'sec x', 'cosec',
  '∫', 'integral', 'differentiat', 'dy/dx', 'd²y/dx²', 'lim(x→', 'lim (x',
  'matrix', 'matrices', 'determinant', '|adj a|', 
  'polynomial', 'quadratic equation', 'ax² + bx',
  'binomial theorem', 'permutation', 'combination',
  'vector a =', 'vector b =', 'projection of vector',
  'complex number', 'argand', 'modulus of z',
  'differential equation', 'particular solution',
  'conic section', 'parabola y²', 'ellipse',
  'direction cosines', 'direction ratios'
];

function isMathQuestion(questionText) {
  const ql = questionText.toLowerCase();
  return MATH_KEYWORDS.some(k => ql.includes(k.toLowerCase()));
}

// ========================
// LOAD DATABASE
// ========================
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

// ========================
// DETERMINE SUBJECT TYPE
// ========================
function getSubjectType(exam) {
  const id = exam.id.toLowerCase();
  const subj = exam.subject.toLowerCase();
  
  if (subj.includes('math')) return 'math';
  if (subj.includes('english')) return 'english';
  return 'gs'; // General Studies / GK / GAT / Combined
}

function getExamType(exam) {
  const id = exam.id.toLowerCase();
  if (id.includes('afcat')) return 'AFCAT';
  if (id.includes('cds')) return 'CDS';
  return 'NDA';
}

// ========================
// GENERATE QUESTIONS VIA GEMINI (single call, with retries)
// ========================
async function generateQuestions(exam, count, existingQuestions) {
  const examType = getExamType(exam);
  const subjectType = getSubjectType(exam);
  
  // Build list of existing question texts to tell the API to avoid
  const existingTexts = existingQuestions.slice(0, 15).map((q, i) => `${i+1}. ${q.question.substring(0, 80)}`).join('\n');
  
  let subjectPrompt = '';
  
  if (subjectType === 'math' && examType === 'NDA') {
    subjectPrompt = `NDA Mathematics (Class 11-12 level). Topics: Algebra (Sets, Complex Numbers, Quadratics, Sequences, Binomial, P&C) ~25%, Calculus (Limits, Differentiation, Integration, DiffEq) ~20%, Trigonometry (Identities, Inverse Trig, Heights & Distances) ~15%, Matrices & Determinants ~10%, Analytical Geometry (Lines, Circles, Conics, 3D) ~12%, Vectors ~8%, Statistics & Probability ~10%.
Questions must test multi-step problem-solving, not just formula substitution. Include application-based questions.`;
  } else if (subjectType === 'math' && examType === 'CDS') {
    subjectPrompt = `CDS Mathematics (10th-12th level). NO Calculus, NO Matrices, NO Complex Numbers.
Topics: Number System & HCF/LCM ~10%, Algebra (Polynomials, Equations, Progressions) ~18%, Arithmetic (Percentage, Profit/Loss, Interest, Ratio, Time/Work, Time/Distance, Averages) ~22%, Geometry (Triangles, Circles, Coordinate Geometry) ~18%, Mensuration ~12%, Trigonometry (basic ratios and identities only) ~10%, Statistics & Probability ~10%.
Include word problems requiring equation setup.`;
  } else if (subjectType === 'english') {
    subjectPrompt = `${examType} English (${examType === 'CDS' ? 'Graduate' : 'Higher Secondary'} level).
Topics: Reading Comprehension (include 2 passages of 300+ words with 5 Qs each) ~10Qs, Spotting Errors ~15Qs, Sentence Improvement ~12Qs, Synonyms ~10Qs, Antonyms ~8Qs, Idioms & Phrases ~10Qs, One Word Substitution ~8Qs, Fill in Blanks ~10Qs, Sentence Ordering ~8Qs, Voice/Speech ~7Qs, Cloze Test ~7Qs.
Use words like perfunctory, truculent, sanguine, mendacious, obsequious for vocabulary. Errors should be subtle.`;
  } else if (subjectType === 'gs') {
    const isAFCAT = examType === 'AFCAT';
    if (isAFCAT) {
      subjectPrompt = `AFCAT Combined Test (Graduate level for GK/English, Matriculation for Numerical).
Topics: General Awareness (History, Geography, Polity, Defence, Current Affairs, Science) ~25Qs, English (Comprehension, Errors, Synonyms, Antonyms, Idioms) ~30Qs, Numerical Ability (Percentage, Profit/Loss, Time/Work, Averages, Ratios — SIMPLE ARITHMETIC ONLY, NO calculus/trig) ~20Qs, Reasoning (Analogies, Series, Coding-Decoding, Verbal & Non-Verbal) ~25Qs.
Include at least 3 IAF-specific defence questions.`;
    } else {
      subjectPrompt = `${examType} General Studies / General Knowledge (${examType === 'CDS' ? 'Graduate' : 'Higher Secondary'} level).
CRITICAL: ZERO pure mathematics questions. No trigonometry, calculus, matrices, quadratics, algebra, polynomials.
Topics: History (Ancient, Medieval, Modern India, Freedom Struggle, World History) ~20Qs, Polity (Constitution, FR, DPSP, Parliament, Judiciary, Amendments) ~15Qs, Geography (Physical, Indian, World) ~15Qs, Physics (Mechanics, Optics, Sound, Heat, Electricity, Nuclear — conceptual only) ~12Qs, Chemistry (Acids-Bases, Metals, Carbon compounds, Everyday Chemistry) ~10Qs, Biology (Human Systems, Diseases, Ecology, Cell Biology) ~10Qs, Economics (Indian Economy, Monetary Policy, Fiscal Policy, Plans) ~10Qs, Environment (Biodiversity, Treaties, Protected Areas) ~8Qs, Defence (Exercises, Missiles, Commands, Rank Equivalence) ~8Qs, Current Affairs (Awards, Sports, Appointments, Science & Tech) ~12Qs.
Use UPSC multi-statement format: "Consider the following statements: 1... 2... Which is/are correct?"
Use assertion-reason format. Test analysis, not simple recall.`;
    }
  }

  const prompt = `Generate exactly ${count} unique, high-quality MCQ questions for the ${examType} ${exam.subject} exam.

${subjectPrompt}

THESE QUESTIONS ALREADY EXIST IN THE PAPER — DO NOT repeat or rephrase any of them:
${existingTexts}

QUESTION QUALITY:
- Follow UPSC question DNA: analytical, multi-step, elimination-based
- Distractors must be plausible — not obviously wrong
- Explanations must be detailed (2-3 sentences), showing solution method
- Mix difficulty: 30% Easy, 50% Medium, 20% Hard
- NO emojis anywhere

Return ONLY a valid JSON array. Each object: {"question":"...","options":["A","B","C","D"],"correct":0,"explanation":"..."}
No markdown fences. correct is 0-indexed (0=A,1=B,2=C,3=D).`;

  const models = ['gemini-2.5-flash', 'gemini-2.0-flash'];
  
  for (let retry = 0; retry < 4; retry++) {
    for (const model of models) {
      try {
        console.log(`    API call: model=${model}, retry=${retry}, requesting ${count} Qs...`);
        const res = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ parts: [{ text: prompt }] }],
              generationConfig: { temperature: 0.9, maxOutputTokens: 65536, response_mime_type: 'application/json' }
            })
          }
        );
        
        if (!res.ok) {
          const status = res.status;
          if (status === 429 || status === 503) {
            const wait = Math.min(20000 * Math.pow(2, retry), 120000);
            console.log(`    Rate limited (${status}). Waiting ${wait/1000}s...`);
            await delay(wait);
            break; // retry
          }
          console.warn(`    Model ${model} returned ${status}`);
          continue;
        }
        
        const data = await res.json();
        const raw = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
        const cleaned = raw.replace(/^```json\s*/g, '').replace(/\s*```$/g, '').trim();
        
        let qs;
        try { qs = JSON.parse(cleaned); } catch {
          try { qs = JSON.parse(cleaned.replace(/,\s*]/g, ']').replace(/,\s*}/g, '}')); } catch { continue; }
        }
        
        if (!Array.isArray(qs)) continue;
        
        const valid = qs.filter(q =>
          q.question && Array.isArray(q.options) && q.options.length === 4 &&
          typeof q.correct === 'number' && q.correct >= 0 && q.correct <= 3 && q.explanation
        );
        
        console.log(`    Got ${valid.length} valid Qs from ${model}`);
        return valid;
      } catch (err) {
        console.warn(`    Error: ${err.message}`);
      }
    }
  }
  return [];
}

// ========================
// FIX A SINGLE PAPER
// ========================
async function fixPaper(exam, crossPaperSet) {
  const subjectType = getSubjectType(exam);
  const examType = getExamType(exam);
  const targetCount = exam.questions.length; // Keep same question count
  
  console.log(`\n  [FIX] ${exam.id} | ${exam.subject} | Target: ${targetCount} Qs`);
  
  // Step 1: Extract unique questions from current paper
  const seen = new Set();
  let uniqueQs = [];
  for (const q of exam.questions) {
    const key = q.question.trim().toLowerCase().substring(0, 80);
    if (!seen.has(key)) {
      seen.add(key);
      uniqueQs.push(q);
    }
  }
  
  // Step 2: For GS/GK papers, remove math-contaminated questions
  if (subjectType === 'gs') {
    const beforeCount = uniqueQs.length;
    uniqueQs = uniqueQs.filter(q => !isMathQuestion(q.question));
    const removed = beforeCount - uniqueQs.length;
    if (removed > 0) {
      console.log(`    Removed ${removed} math-contaminated questions from GS paper`);
    }
  }
  
  console.log(`    Existing unique: ${uniqueQs.length} / ${targetCount}`);
  
  // Step 3: Calculate how many new questions we need
  const needed = targetCount - uniqueQs.length;
  
  if (needed <= 0) {
    console.log(`    Paper already has enough unique questions!`);
    // Still need to deduplicate
    return uniqueQs.slice(0, targetCount);
  }
  
  console.log(`    Need ${needed} new questions from Gemini API...`);
  
  // Step 4: Generate new questions in batches of max 50
  let newQuestions = [];
  const batchSize = Math.min(needed, 50);
  const batches = Math.ceil(needed / batchSize);
  
  for (let b = 0; b < batches; b++) {
    const batchNeeded = Math.min(batchSize, needed - newQuestions.length);
    if (batchNeeded <= 0) break;
    
    console.log(`    Batch ${b+1}/${batches}: requesting ${batchNeeded} questions...`);
    const batchQs = await generateQuestions(exam, batchNeeded, [...uniqueQs, ...newQuestions]);
    
    // Deduplicate against existing + cross-paper
    for (const q of batchQs) {
      const key = q.question.trim().toLowerCase().substring(0, 80);
      if (!seen.has(key) && !crossPaperSet.has(key)) {
        // For GS papers, double-check no math contamination
        if (subjectType === 'gs' && isMathQuestion(q.question)) continue;
        
        seen.add(key);
        crossPaperSet.add(key);
        newQuestions.push(q);
      }
    }
    
    if (b < batches - 1) {
      console.log(`    Waiting 20s before next batch...`);
      await delay(20000);
    }
  }
  
  console.log(`    Generated ${newQuestions.length} new unique questions`);
  
  // Step 5: Combine existing + new
  const finalQs = [...uniqueQs, ...newQuestions];
  console.log(`    Final paper: ${finalQs.length} / ${targetCount} questions`);
  
  return finalQs;
}

// ========================
// MAIN
// ========================
async function main() {
  console.log('=== MOCK TEST FIX ENGINE v2 ===\n');
  
  const { db, startIdx, fullContent } = loadDB();
  console.log(`Loaded ${db.length} exam papers`);
  
  // Identify broken papers
  const broken = [];
  db.forEach((exam, idx) => {
    const uniqueQs = new Set(exam.questions.map(q => q.question)).size;
    const ratio = uniqueQs / exam.questions.length;
    if (ratio < BROKEN_THRESHOLD) {
      broken.push({ exam, idx, uniqueQs, totalQs: exam.questions.length, ratio });
    }
  });
  
  console.log(`Found ${broken.length} broken papers\n`);
  
  // Build cross-paper dedup set from GOOD papers
  const crossPaperSet = new Set();
  db.forEach(exam => {
    const uniqueQs = new Set(exam.questions.map(q => q.question)).size;
    if (uniqueQs / exam.questions.length >= BROKEN_THRESHOLD) {
      exam.questions.forEach(q => crossPaperSet.add(q.question.trim().toLowerCase().substring(0, 80)));
    }
  });
  console.log(`Cross-paper set: ${crossPaperSet.size} questions from good papers\n`);
  
  // Backup
  const backupPath = DATA_JS_PATH + '.pre_fix_backup';
  if (!fs.existsSync(backupPath)) {
    fs.copyFileSync(DATA_JS_PATH, backupPath);
    console.log('Backed up data.js\n');
  }
  
  let fixedCount = 0;
  
  for (let i = 0; i < broken.length; i++) {
    const { exam, idx } = broken[i];
    console.log(`\n--- Paper ${i+1}/${broken.length} ---`);
    
    const fixedQs = await fixPaper(exam, crossPaperSet);
    
    if (fixedQs && fixedQs.length > 0) {
      db[idx].questions = fixedQs;
      db[idx].questionsCount = fixedQs.length;
      fixedCount++;
      
      // Save every 3 papers
      if (fixedCount % 3 === 0) {
        const beforeCbt = fullContent.substring(0, startIdx);
        const serialized = 'const CBT_EXAMS_DATABASE = ' + JSON.stringify(db, null, 2) + ';\n';
        fs.writeFileSync(DATA_JS_PATH, beforeCbt + serialized, 'utf8');
        console.log(`  [CHECKPOINT] Saved after ${fixedCount} papers`);
      }
    }
    
    // Wait between papers
    if (i < broken.length - 1) {
      console.log(`  Waiting 25s before next paper...`);
      await delay(25000);
    }
  }
  
  // Final save
  const beforeCbt = fullContent.substring(0, startIdx);
  const serialized = 'const CBT_EXAMS_DATABASE = ' + JSON.stringify(db, null, 2) + ';\n';
  fs.writeFileSync(DATA_JS_PATH, beforeCbt + serialized, 'utf8');
  
  console.log(`\n=== COMPLETE ===`);
  console.log(`Fixed: ${fixedCount} / ${broken.length} papers`);
  
  // Verify
  const { db: verifyDb } = loadDB();
  let allGood = true;
  verifyDb.forEach(exam => {
    const u = new Set(exam.questions.map(q => q.question)).size;
    const r = u / exam.questions.length;
    if (r < 0.9) {
      console.log(`  [WARN] ${exam.id}: ${u}/${exam.questions.length} unique (${(r*100).toFixed(0)}%)`);
      allGood = false;
    }
  });
  if (allGood) console.log('All papers verified OK!');
}

main().catch(err => { console.error('Fatal:', err); process.exit(1); });
