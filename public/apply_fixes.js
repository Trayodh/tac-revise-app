const fs = require('fs');

let s = fs.readFileSync('data.js', 'utf8');
s = s.replace(/const CBT_EXAMS_DATABASE/g, 'var CBT_EXAMS_DATABASE');

const vm = require('vm');
const context = {};
vm.createContext(context);
vm.runInContext(s, context);

const exams = context.CBT_EXAMS_DATABASE;
const log = [];

// ============================================================
// 1. REMOVE garbled match-the-following + garbled math + missing data
// ============================================================

const toRemove = [
  { exam: 'cds-gk-v2-1', snippet: 'Treaty of Srirangapatam Codes A B C D' },
  { exam: 'cds-gk-v2-3', snippet: 'West-Pacific ocean Codes A B C D' },
  { exam: 'cds-gk-v2-8', snippet: 'Match the following List I (Minerals)' },
  { exam: 'afcat-v2-1', snippet: 'Uttar Pradesh Codes A B C D' },
  { exam: 'afcat-v2-1', snippet: 'DNAs Codes A B C D' },
  { exam: 'afcat-v2-2', snippet: 'Chalk Codes' },
  { exam: 'afcat-v2-5', snippet: 'Halebid Codes A B C D' },
  { exam: 'afcat-v2-7', snippet: 'Rise of petrochemicals, jet aircraft, computers Codes' },
  { exam: 'afcat-v2-8', snippet: 'Copper, zinc, nickel, aluminium Codes' },
  { exam: 'afcat-v2-8', snippet: 'Tropical evergreen Codes A B C D' },
  { exam: 'afcat-v2-9', snippet: 'Vaishali Codes A B C D' },
  { exam: 'afcat-v2-9', snippet: 'By wind Codes A B C D' },
  // Garbled math notation
  { exam: 'afcat-v2-5', snippet: 'If the roots of the equation x x 2 1 0' },
  // Missing data (modal class)
  { exam: 'afcat-v2-10', snippet: 'The modal class is' },
  // CDS GK 6 Q40 - garbled biology match
  { exam: 'cds-gk-v2-6', snippet: 'Transport proteins D. Actin and myosin 4. Storage proteins Codes' },
];

let totalRemoved = 0;
for (const item of toRemove) {
  const exam = exams.find(e => e.id === item.exam);
  if (!exam) { log.push(`⚠️ Exam ${item.exam} not found`); continue; }
  const before = exam.questions.length;
  exam.questions = exam.questions.filter(q => !q.question.includes(item.snippet));
  const removed = before - exam.questions.length;
  if (removed > 0) {
    totalRemoved += removed;
    log.push(`✓ REMOVED from ${item.exam}: "${item.snippet.substring(0, 50)}..." (${removed} question)`);
  } else {
    log.push(`⚠️ NOT FOUND in ${item.exam}: "${item.snippet.substring(0, 50)}..."`);
  }
}

// ============================================================
// 2. FIX wrong answers
// ============================================================

// Fix MUNIFICENCE: correct answer is C (index 2), not A (index 0)
for (const exam of exams) {
  for (const q of exam.questions) {
    if (q.question.trim() === 'MUNIFICENCE') {
      log.push(`✓ FIXED ${exam.id}: MUNIFICENCE answer ${q.correct} → 2 (Being very generous)`);
      q.correct = 2;
    }
  }
}

// Fix Petroleum: correct answer is D (index 3), not A (index 0)
for (const exam of exams) {
  for (const q of exam.questions) {
    if (q.question.includes('Petroleum is found')) {
      log.push(`✓ FIXED ${exam.id}: Petroleum answer ${q.correct} → 3 (deep under the surface)`);
      q.correct = 3;
    }
  }
}

// Fix Chinook: correct answer is C (index 2), not A (index 0)
for (const exam of exams) {
  for (const q of exam.questions) {
    if (q.question.includes('Chinook is a')) {
      log.push(`✓ FIXED ${exam.id}: Chinook answer ${q.correct} → 2 (warm wind in North America)`);
      q.correct = 2;
    }
  }
}

// Fix Chromosomes: correct answer is C (index 2), not A (index 0)
for (const exam of exams) {
  for (const q of exam.questions) {
    if (q.question.includes('Chromosomes are') && q.correct === 0) {
      log.push(`✓ FIXED ${exam.id}: Chromosomes answer ${q.correct} → 2 (made up of DNA as a main component)`);
      q.correct = 2;
    }
  }
}

// ============================================================
// 3. FIX junk text in options
// ============================================================

for (const exam of exams) {
  for (const q of exam.questions) {
    for (let i = 0; i < q.options.length; i++) {
      // Remove trailing junk like "629 GENERAL SCIENCE Phys..." or "733 GENERAL SCIENCE Biology..."
      const junkMatch = q.options[i].match(/^(.+?)\s+\d{3}\s+GENERAL\s/);
      if (junkMatch) {
        log.push(`✓ CLEANED ${exam.id}: Option "${q.options[i].substring(0, 50)}..." → "${junkMatch[1]}"`);
        q.options[i] = junkMatch[1];
      }
      // Also clean "571 GENERAL E..." pattern
      const junkMatch2 = q.options[i].match(/^(.+?)\s+\d{3}\s+GENERAL/);
      if (junkMatch2 && q.options[i] !== junkMatch2[1]) {
        log.push(`✓ CLEANED ${exam.id}: Option stripped trailing junk`);
        q.options[i] = junkMatch2[1];
      }
    }
  }
}

// ============================================================
// 4. FIX stray numbers in question stems
// ============================================================

for (const exam of exams) {
  for (const q of exam.questions) {
    // Remove leading "65. " or "37. " or "99. " from questions
    const numMatch = q.question.match(/^\d+\.\s+(.+)$/s);
    if (numMatch && q.question.length < 30) {
      log.push(`✓ CLEANED ${exam.id}: Removed stray number from "${q.question}" → "${numMatch[1]}"`);
      q.question = numMatch[1];
    }
  }
}

// ============================================================
// 5. FIX WHISTLE-BLOWER answer (A="A down" seems wrong, should be B="Informer")
// ============================================================

for (const exam of exams) {
  for (const q of exam.questions) {
    if (q.question.includes('WHISTLE-BLOWER') && q.correct === 0) {
      log.push(`✓ FIXED ${exam.id}: WHISTLE-BLOWER answer ${q.correct} → 1 (Informer)`);
      q.correct = 1;
    }
  }
}

// ============================================================
// 6. FIX PESSIMISTIC answer (A="Indifferent" - this asks for antonym, answer should be D="Hopeful")
// ============================================================

for (const exam of exams) {
  for (const q of exam.questions) {
    if (q.question.trim() === 'PESSIMISTIC' && q.correct === 0) {
      // Check if options suggest antonym
      const opts = q.options.map(o => o.toLowerCase());
      if (opts.includes('hopeful')) {
        log.push(`✓ FIXED ${exam.id}: PESSIMISTIC answer ${q.correct} → ${opts.indexOf('hopeful')} (Hopeful - antonym)`);
        q.correct = opts.indexOf('hopeful');
      }
    }
  }
}

// ============================================================
// SAVE
// ============================================================

let original = fs.readFileSync('data.js', 'utf8');
const startMarker = 'const CBT_EXAMS_DATABASE =';
const startIdx = original.indexOf(startMarker);

let depth = 0, endIdx = -1, inString = false, escapeNext = false;
for (let i = startIdx + startMarker.length; i < original.length; i++) {
  const ch = original[i];
  if (escapeNext) { escapeNext = false; continue; }
  if (ch === '\\' && inString) { escapeNext = true; continue; }
  if (ch === '"') { inString = !inString; continue; }
  if (inString) continue;
  if (ch === '[') depth++;
  if (ch === ']') {
    depth--;
    if (depth === 0) {
      let j = i + 1;
      while (j < original.length && (original[j] === ' ' || original[j] === '\r' || original[j] === '\n')) j++;
      if (original[j] === ';') j++;
      endIdx = j;
      break;
    }
  }
}

const before = original.substring(0, startIdx);
const after = original.substring(endIdx);
const newDb = 'const CBT_EXAMS_DATABASE = ' + JSON.stringify(exams, null, 2) + ';';
fs.writeFileSync('data.js', before + newDb + after, 'utf8');

console.log('=== EXECUTION LOG ===\n');
for (const line of log) console.log(line);
console.log(`\nTotal questions removed: ${totalRemoved}`);
console.log('✅ All fixes applied to data.js');
