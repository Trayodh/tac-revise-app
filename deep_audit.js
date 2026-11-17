const fs = require('fs');

let s = fs.readFileSync('data.js', 'utf8');
s = s.replace(/const CBT_EXAMS_DATABASE/g, 'var CBT_EXAMS_DATABASE');

const vm = require('vm');
const context = {};
vm.createContext(context);
vm.runInContext(s, context);

const exams = context.CBT_EXAMS_DATABASE;

const doubts = [];

function getExamType(id) {
  if (id.includes('math')) return 'MATH';
  if (id.includes('english')) return 'ENGLISH';
  if (id.includes('gk')) return 'GK';
  if (id.includes('gat')) return 'GAT';
  if (id.includes('afcat')) return 'AFCAT';
  return 'UNKNOWN';
}

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
  // Check for numeric-only options
  const numOpts = q.options.filter(o => /^[\s₹`Rs\.]*[\d\.\-\/\s\,\%\(\)]+$/.test(o.trim())).length;
  if (numOpts >= 3) score += 3;
  return score;
}

function isEnglishQuestion(q) {
  const text = q.question;
  const patterns = [
    /synonym/i, /antonym/i, /idiom/i, /phrase/i,
    /grammar/i, /tense/i, /verb/i, /noun/i, /adjective/i, /adverb/i,
    /spelling/i, /comprehension/i,
    /fill in the blank/i, /correct sentence/i,
    /meaning of/i, /opposite of/i,
    /one word substitution/i,
    /active voice/i, /passive voice/i,
    /direct speech/i, /indirect speech/i,
    /correctly spelt/i, /misspelt/i,
    /underlined/i, /bold/i, /italicised/i,
    /passage/i,
  ];
  let score = 0;
  for (const p of patterns) { if (p.test(text)) score++; }
  return score;
}

function isGKQuestion(q) {
  const text = q.question;
  const patterns = [
    /who is/i, /who was/i, /who founded/i,
    /which country/i, /which state/i, /capital of/i,
    /president/i, /prime minister/i, /chief minister/i,
    /constitution/i, /article\s*\d/i, /amendment/i,
    /battle of/i, /treaty of/i,
    /river/i, /mountain/i, /plateau/i,
    /planet/i, /solar system/i,
    /scientist/i, /discovered/i, /invented/i,
    /award/i, /nobel/i,
    /ISRO/i, /NASA/i, /DRDO/i, /UNESCO/i,
    /olympic/i, /world cup/i,
    /vitamin/i, /disease/i,
    /war\b/i, /revolt/i, /movement/i,
    /mughal/i, /british/i, /dynasty/i, /empire/i, /kingdom/i,
  ];
  let score = 0;
  for (const p of patterns) { if (p.test(text)) score++; }
  return score;
}

for (const exam of exams) {
  const examType = getExamType(exam.id);
  const seenInThisExam = new Set();

  for (let i = 0; i < exam.questions.length; i++) {
    const q = exam.questions[i];
    const qNum = i + 1;
    
    // Check for duplicate questions within same mock
    const normStem = q.question.toLowerCase().replace(/[^a-z0-9]/g, '').substring(0, 80);
    if (seenInThisExam.has(normStem)) {
      doubts.push({ exam: exam.id, title: exam.title, qNum, type: 'DUPLICATE_MOCK', detail: 'Duplicate question within same mock exam', q: q.question, options: q.options, correct: q.correct });
    }
    seenInThisExam.add(normStem);

    const mathScore = isMathQuestion(q);
    const engScore = isEnglishQuestion(q);
    const gkScore = isGKQuestion(q);

    // 1. WRONG SUBJECT
    if (examType === 'GK' && mathScore >= 3 && gkScore < 2) {
      doubts.push({ exam: exam.id, title: exam.title, qNum, type: 'WRONG_SUBJECT', detail: 'Math Q in GK paper', q: q.question, options: q.options, correct: q.correct });
    }
    if (examType === 'MATH' && gkScore >= 3 && mathScore < 1) {
      doubts.push({ exam: exam.id, title: exam.title, qNum, type: 'WRONG_SUBJECT', detail: 'GK Q in Math paper', q: q.question, options: q.options, correct: q.correct });
    }
    if (examType === 'MATH' && engScore >= 2 && mathScore < 1) {
      doubts.push({ exam: exam.id, title: exam.title, qNum, type: 'WRONG_SUBJECT', detail: 'English Q in Math paper', q: q.question, options: q.options, correct: q.correct });
    }
    if (examType === 'ENGLISH' && mathScore >= 3 && engScore < 1) {
      doubts.push({ exam: exam.id, title: exam.title, qNum, type: 'WRONG_SUBJECT', detail: 'Math Q in English paper', q: q.question, options: q.options, correct: q.correct });
    }
    if (examType === 'ENGLISH' && gkScore >= 3 && engScore < 1) {
      doubts.push({ exam: exam.id, title: exam.title, qNum, type: 'WRONG_SUBJECT', detail: 'GK Q in English paper', q: q.question, options: q.options, correct: q.correct });
    }
    if (examType === 'GK' && engScore >= 2 && gkScore < 1 && mathScore < 1) {
      doubts.push({ exam: exam.id, title: exam.title, qNum, type: 'WRONG_SUBJECT', detail: 'English Q in GK paper', q: q.question, options: q.options, correct: q.correct });
    }

    // 2. TRUNCATED / GARBLED / BROKEN
    const isBrokenStem = q.question.toLowerCase().includes('sherly wants to know') || 
                         q.question.includes('Codes A B C D A B C D') ||
                         /^\s*X-rays are e\s*$/i.test(q.question);
    if (q.question.length < 20 || isBrokenStem) {
      doubts.push({ exam: exam.id, title: exam.title, qNum, type: 'TRUNCATED', detail: isBrokenStem ? 'Broken question stem' : 'Very short question text', q: q.question, options: q.options, correct: q.correct });
    }

    // 3. MISSING / BAD OPTIONS / EMPTY OPTIONS
    const hasEmptyOption = q.options.some(o => o.trim().length === 0);
    if (q.options.length < 4 || hasEmptyOption) {
      doubts.push({ exam: exam.id, title: exam.title, qNum, type: 'BAD_OPTIONS', detail: hasEmptyOption ? 'Empty option text' : `Only ${q.options.length} options`, q: q.question, options: q.options, correct: q.correct });
    }
    if (q.correct < 0 || q.correct >= q.options.length) {
      doubts.push({ exam: exam.id, title: exam.title, qNum, type: 'BAD_ANSWER', detail: `Correct index ${q.correct} out of range (${q.options.length} options)`, q: q.question, options: q.options, correct: q.correct });
    }

    // 4. DUPLICATE OPTIONS
    const uniqueOpts = new Set(q.options.map(o => o.trim().toLowerCase()));
    if (uniqueOpts.size < q.options.length && q.options.length >= 4) {
      doubts.push({ exam: exam.id, title: exam.title, qNum, type: 'DUPE_OPTIONS', detail: 'Options contain duplicates', q: q.question, options: q.options, correct: q.correct });
    }

    // 5. CDS MATH papers with history/gk topicId
    if (examType === 'MATH' && (q.topicId === 'history' || q.topicId === 'general_knowledge')) {
      // Only flag if the question truly doesn't look like math
      if (mathScore < 1) {
        doubts.push({ exam: exam.id, title: exam.title, qNum, type: 'WRONG_SUBJECT', detail: `topicId="${q.topicId}" in Math paper`, q: q.question, options: q.options, correct: q.correct });
      }
    }
  }
}

// Output as JSON for further processing
fs.writeFileSync('doubts.json', JSON.stringify(doubts, null, 2), 'utf8');
console.log(`Total doubts found: ${doubts.length}`);

// Also print a readable summary
for (const d of doubts) {
  console.log(`\n[${d.type}] ${d.exam} Q${d.qNum} — ${d.detail}`);
  console.log(`  "${d.q.substring(0, 120)}${d.q.length > 120 ? '...' : ''}"`);
  for (let j = 0; j < d.options.length; j++) {
    console.log(`  ${String.fromCharCode(65+j)}) ${d.options[j].substring(0, 80)}${j === d.correct ? ' ✓' : ''}`);
  }
}
