const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log("=== STARTING RE-RECTIFICATION WITH STRICT SUBJECT FILTERING ===");

// 1. Load data.js
const dataPath = 'data.js';
let s = fs.readFileSync(dataPath, 'utf8');
s = s.replace(/const CBT_EXAMS_DATABASE/g, 'var CBT_EXAMS_DATABASE');
s = s.replace(/const QUESTION_BANK_DATABASE/g, 'var QUESTION_BANK_DATABASE');
s = s.replace(/const NOTES_DATABASE/g, 'var NOTES_DATABASE');

const context = {};
vm.createContext(context);
try {
  vm.runInContext(s, context);
} catch (e) {
  console.error("Failed to parse data.js:", e.message);
  process.exit(1);
}

const exams = context.CBT_EXAMS_DATABASE;
const questionBank = context.QUESTION_BANK_DATABASE;
const notes = context.NOTES_DATABASE;

// 2. Load structured_bank.json
const structuredBank = JSON.parse(fs.readFileSync('question_banks/structured_bank.json', 'utf8'));

// 3. Load doubts.json
const doubts = JSON.parse(fs.readFileSync('doubts.json', 'utf8'));

// 4. Hardcoded DUPE_OPTIONS corrections mapping
const dupeFixes = [
  {
    pattern: /quadratic.*inequation/i, // Relaxed pattern to match correctly
    correctStem: "The solution set for the quadratic inequation x² - 5x + 6 ≥ 0 is",
    correctOptions: ["(-∞, 2] ∪ [3, ∞)", "(-∞, 2) ∪ (3, ∞)", "[2, 3]", "(-∞, 2] ∪ [2, ∞)"],
    correctIndex: 0
  },
  {
    pattern: /roots.*equation.*x.*1.*ratio/i,
    correctStem: "If the roots of the equation x² + x + 1 = 0 are in the ratio m : n, then",
    correctOptions: ["√m/n + √n/m + 1 = 0", "√m/n + √n/m = 0", "m/n + n/m + 1 = 0", "m/n + n/m = 0"],
    correctIndex: 0
  },
  {
    pattern: /value of.*cos.*θ/i,
    correctStem: "The value of √(2 + √(2 + 2 cos 4θ)) is",
    correctOptions: ["2 cos θ", "2 sin θ", "2 cos 2θ", "2 sin 2θ"],
    correctIndex: 0
  },
  {
    pattern: /parallelogram.*adjacent.*BD/i,
    correctStem: "ABCD is a parallelogram with AB and AD as adjacent sides. If ∠A = 60° and AB = 2 AD, then the diagonal BD will be equal to",
    correctOptions: ["AD", "AD√2", "AD√3", "2 AD"],
    correctIndex: 2
  },
  {
    pattern: /diagonal.*cube.*surface area/i,
    correctStem: "If the diagonal of a cube is of length l, then the total surface area of the cube is",
    correctOptions: ["2 l²", "3 l²", "l²", "6 l²"],
    correctIndex: 0
  },
  {
    pattern: /elevation.*tower.*distances.*p.*q/i,
    correctStem: "The angles of elevation of the top of a tower from two points at distances p and q from the base and on the same straight line are 27° and 63° respectively. What is the height of the tower?",
    correctOptions: ["pq", "√pq", "pq/2", "(pq)²"],
    correctIndex: 1
  },
  {
    pattern: /What is 0 53 053/i,
    correctStem: "What is 0.53(bar) + 0.053(bar) equal to?",
    correctOptions: ["1.0\\overline{68}", "1.06\\overline{8}", "1.\\\overline{068}", "1.068"],
    correctIndex: 0
  },
  {
    pattern: /ax - b and g\(x\) = cx \+ d/i,
    correctStem: "If f(x) = ax - b and g(x) = cx + d are such that f(g(x)) = g(f(x)), then which one of the following holds?",
    correctOptions: ["f(d) = g(-b)", "f(b) = g(d)", "f(d) = g(b)", "f(-b) = g(d)"],
    correctIndex: 0
  }
];

function findDupeFix(stem) {
  for (const fix of dupeFixes) {
    if (fix.pattern.test(stem)) return fix;
  }
  return null;
}

// Classification helpers to prevent drawing wrong-subject candidate questions
function isMathQuestion(q) {
  const text = q.question;
  const mathPatterns = [
    /profit/i, /loss\b/i, /cost price/i, /selling price/i,
    /compound interest/i, /simple interest/i, /rate of interest/i,
    /HCF/i, /LCM/i, /divisible/i, /remainder/i, /quotient/i,
    /triangle/i, /circle/i, /rectangle/i, /square/i,
    /area\b/i, /perimeter/i, /volume/i, /diameter/i, /radius/i,
    /equation/i, /quadratic/i, /polynomial/i,
    /sin\b/, /cos\b/, /tan\b/, /trigonometr/i,
    /speed.*time/i, /time.*distance/i, /km\/h/i, /m\/s/i,
    /pipe.*fill/i, /cistern/i,
    /work.*days/i, /days.*work/i,
    /probability/i, /permutation/i, /combination/i,
    /surface area/i, /cone/i, /cylinder/i, /sphere/i, /cuboid/i,
    /A\.P\./i, /G\.P\./i, /arithmetic progression/i,
    /find the value of/i, /solve/i,
    /how many.*litres/i, /how many.*metres/i,
    /fraction/i, /decimal/i,
    /percentage/i, /discount/i, /marked price/i,
  ];
  let score = 0;
  for (const p of mathPatterns) { if (p.test(text)) score++; }
  const numOpts = q.options.filter(o => /^[\s₹`Rs\.]*[\d\.\-\/\s\,\%\(\)]+$/.test(o.trim())).length;
  if (numOpts >= 3) score += 3;
  return score;
}

function getPoolForQuestion(examId, idx) {
  const bank = structuredBank;
  
  if (examId.startsWith('nda-math')) {
    if (idx < 30) return bank.nda.maths.algebra;
    if (idx < 50) return bank.nda.maths.trigonometry;
    if (idx < 70) return bank.nda.maths.geometry;
    if (idx < 90) return bank.nda.maths.statistics;
    return bank.nda.maths.arithmetic;
  }
  
  if (examId.startsWith('nda-gat')) {
    if (idx < 50) {
      if (idx < 20) return bank.nda.gat.english.grammar;
      if (idx < 40) return bank.nda.gat.english.vocabulary;
      return bank.nda.gat.english.sentence_structure;
    } else if (idx < 100) {
      const sidx = idx - 50;
      if (sidx < 25) return bank.nda.gat.physics;
      if (sidx < 40) return bank.nda.gat.chemistry;
      return bank.nda.gat.biology;
    } else {
      const gidx = idx - 100;
      if (gidx < 15) return bank.nda.gat.history;
      if (gidx < 35) return bank.nda.gat.geography;
      if (gidx < 40) return bank.nda.gat.polity;
      return bank.nda.gat.current_affairs;
    }
  }
  
  if (examId.startsWith('cds-math')) {
    if (idx < 40) return bank.cds.maths.arithmetic;
    if (idx < 60) return bank.cds.maths.algebra;
    if (idx < 75) return bank.cds.maths.trigonometry;
    if (idx < 90) return bank.cds.maths.geometry;
    return bank.cds.maths.statistics;
  }
  
  if (examId.startsWith('cds-english')) {
    if (idx < 40) return bank.cds.english.grammar;
    if (idx < 80) return bank.cds.english.vocabulary;
    return bank.cds.english.sentence_structure;
  }
  
  if (examId.startsWith('cds-gk')) {
    if (idx < 20) return bank.cds.gs.current_affairs;
    if (idx < 42) return bank.cds.gs.geography;
    if (idx < 64) return bank.cds.gs.history;
    if (idx < 84) return bank.cds.gs.polity;
    if (idx < 94) return bank.cds.gs.economy;
    if (idx < 104) return bank.cds.gs.physics;
    if (idx < 112) return bank.cds.gs.chemistry;
    return bank.cds.gs.biology;
  }
  
  if (examId.startsWith('afcat')) {
    if (idx < 30) {
      if (idx < 10) return bank.afcat.english.vocabulary;
      if (idx < 20) return bank.afcat.english.grammar;
      return bank.afcat.english.sentence_structure;
    } else if (idx < 55) {
      const gidx = idx - 30;
      if (gidx < 5) return bank.afcat.general_awareness.current_affairs;
      if (gidx < 10) return bank.afcat.general_awareness.history;
      if (gidx < 15) return bank.afcat.general_awareness.geography;
      if (gidx < 20) return bank.afcat.general_awareness.polity;
      return bank.afcat.general_awareness.science;
    } else if (idx < 80) {
      return bank.afcat.reasoning;
    } else {
      return bank.afcat.numerical_ability.arithmetic;
    }
  }
  
  return null;
}

function getCleanStemForDupeCheck(stem) {
  if (typeof stem !== 'string') return '';
  return stem.replace(/\s*[eE]?\s*(?:20)?\d{2}\s*\(?[IV]+\)?[\s,]*$/g, '')
             .replace(/^\d+\.\s+(?=[a-zA-Z_])/, '')
             .replace(/\s*\(\s*Variant\s+\d+(?:\s*[\/\-]\s*\d+)?\s*\)/gi, '')
             .toLowerCase()
             .replace(/[^a-z0-9]/g, '')
             .substring(0, 80);
}

function isCleanReplacement(q, examQuestions, isGKOrGS) {
  if (!q || !q.question || !q.options || q.options.length !== 4) return false;
  if (q.question.trim().length < 40) return false;
  
  // No duplicate options
  const optSet = new Set(q.options.map(o => o.trim().toLowerCase()));
  if (optSet.size !== 4) return false;
  
  // Valid answer index
  if (q.correct < 0 || q.correct >= 4) return false;
  
  // Strict Subject Check: If this is a GK/GS paper target, the candidate question MUST NOT look like Math!
  if (isGKOrGS && isMathQuestion(q) >= 3) return false;
  
  // Not already in the paper
  const candidateNorm = getCleanStemForDupeCheck(q.question);
  for (const eq of examQuestions) {
    const eqNorm = getCleanStemForDupeCheck(eq.question);
    if (candidateNorm === eqNorm) return false;
  }
  
  return true;
}

let dupeFixCount = 0;
let replacementCount = 0;

for (const doubt of doubts) {
  const exam = exams.find(e => e.id === doubt.exam);
  if (!exam) continue;
  
  const qIdx = doubt.qNum - 1;
  const originalQ = exam.questions[qIdx];
  if (!originalQ) continue;
  
  // Recheck if it's a DUPE_OPTIONS doubt
  const uniqueSize = new Set(originalQ.options.map(o => o.trim().toLowerCase())).size;
  const isDupe = uniqueSize < originalQ.options.length;
  
  let shouldSwap = false;
  
  if (doubt.type === 'DUPE_OPTIONS' || isDupe) {
    const fix = findDupeFix(originalQ.question);
    if (fix) {
      console.log(`[FIX] Applying DUPE_OPTIONS fix to ${doubt.exam} Q${doubt.qNum}: "${fix.correctStem.substring(0, 50)}..."`);
      originalQ.question = fix.correctStem;
      originalQ.options = fix.correctOptions;
      originalQ.correct = fix.correctIndex;
      dupeFixCount++;
    } else {
      console.log(`[REPLACE] No dupe options fix found for: "${originalQ.question.substring(0, 60)}". Swapping it.`);
      shouldSwap = true;
    }
  } 
  
  const isWrongSubject = (doubt.type === 'WRONG_SUBJECT') || 
                         (doubt.exam.includes('gk') && isMathQuestion(originalQ) >= 3);
  const isTruncated = doubt.type === 'TRUNCATED' || doubt.type === 'GARBLED' || originalQ.question.trim().length < 20;
  const isBadOptions = doubt.type === 'BAD_OPTIONS' || originalQ.options.length !== 4 || originalQ.options.some(o => o.trim().length === 0);
  const isDuplicateMock = doubt.type === 'DUPLICATE_MOCK';

  if (isWrongSubject || isTruncated || isBadOptions || isDuplicateMock) {
    shouldSwap = true;
  }

  if (shouldSwap) {
    const pool = getPoolForQuestion(doubt.exam, qIdx);
    if (pool && pool.length > 0) {
      let replaced = false;
      const isGKOrGS = doubt.exam.includes('gk') || (doubt.exam.includes('gat') && qIdx >= 50);
      
      const shuffledPool = [...pool].sort(() => Math.random() - 0.5);
      for (const candidate of shuffledPool) {
        if (isCleanReplacement(candidate, exam.questions, isGKOrGS)) {
          console.log(`[REPLACE] Swapping ${doubt.exam} Q${doubt.qNum} ("${originalQ.question.substring(0, 40)}...") with "${candidate.question.substring(0, 40)}..."`);
          exam.questions[qIdx] = JSON.parse(JSON.stringify(candidate));
          replaced = true;
          replacementCount++;
          break;
        }
      }
      
      if (!replaced) {
        console.error(`[ERROR] Failed to find a clean replacement question in pool of size ${pool.length} for ${doubt.exam} Q${doubt.qNum}`);
      }
    } else {
      console.error(`[ERROR] Could not resolve pool for ${doubt.exam} Q${doubt.qNum}`);
    }
  }
}

console.log(`Applied ${dupeFixCount} duplicate option fixes.`);
console.log(`Replaced/Corrected ${replacementCount} wrong-subject/truncated questions.`);

// Sync topicId with the actual section boundary
for (const exam of exams) {
  if (!exam.id.includes('-v2')) continue; // Skip handcrafted ones
  
  exam.questions.forEach((q, idx) => {
    if (exam.id.startsWith('nda-math')) {
      if (idx < 30) q.topicId = 'algebra';
      else if (idx < 50) q.topicId = 'trigonometry';
      else if (idx < 70) q.topicId = 'geometry';
      else if (idx < 90) q.topicId = 'statistics';
      else q.topicId = 'arithmetic';
    } else if (exam.id.startsWith('nda-gat')) {
      if (idx < 50) q.topicId = 'english';
      else if (idx < 75) q.topicId = 'physics';
      else if (idx < 90) q.topicId = 'chemistry';
      else if (idx < 100) q.topicId = 'biology';
      else if (idx < 115) q.topicId = 'history';
      else if (idx < 135) q.topicId = 'geography';
      else if (idx < 140) q.topicId = 'polity';
      else q.topicId = 'current_affairs';
    } else if (exam.id.startsWith('cds-math')) {
      if (idx < 40) q.topicId = 'arithmetic';
      else if (idx < 60) q.topicId = 'algebra';
      else if (idx < 75) q.topicId = 'trigonometry';
      else if (idx < 90) q.topicId = 'geometry';
      else q.topicId = 'statistics';
    } else if (exam.id.startsWith('cds-english')) {
      if (idx < 40) q.topicId = 'grammar';
      else if (idx < 80) q.topicId = 'vocabulary';
      else q.topicId = 'sentence_structure';
    } else if (exam.id.startsWith('cds-gk')) {
      if (idx < 20) q.topicId = 'current_affairs';
      else if (idx < 42) q.topicId = 'geography';
      else if (idx < 64) q.topicId = 'history';
      else if (idx < 84) q.topicId = 'polity';
      else if (idx < 94) q.topicId = 'economy';
      else if (idx < 104) q.topicId = 'physics';
      else if (idx < 112) q.topicId = 'chemistry';
      else q.topicId = 'biology';
    } else if (exam.id.startsWith('afcat')) {
      if (idx < 30) q.topicId = 'english';
      else if (idx < 55) {
        const gidx = idx - 30;
        if (gidx < 5) q.topicId = 'current_affairs';
        else if (gidx < 10) q.topicId = 'history';
        else if (gidx < 15) q.topicId = 'geography';
        else if (gidx < 20) q.topicId = 'polity';
        else q.topicId = 'science';
      } else if (idx < 80) q.topicId = 'reasoning';
      else q.topicId = 'numerical_ability';
    }
  });
}

// Save back to data.js
let original = fs.readFileSync(dataPath, 'utf8');
let before = original.substring(0, original.indexOf('const CBT_EXAMS_DATABASE'));
let after = original.substring(original.indexOf('const NOTES_DATABASE'));

const newDbStr = 'const CBT_EXAMS_DATABASE = ' + JSON.stringify(exams, null, 2) + ';\n\n';
const newQBankStr = 'const QUESTION_BANK_DATABASE = ' + JSON.stringify(questionBank, null, 2) + ';\n\n';

fs.writeFileSync(dataPath, before + newDbStr + newQBankStr + after, 'utf8');
console.log("Successfully saved updated database to data.js!");
console.log("=== RE-RECTIFICATION COMPLETED ===");
