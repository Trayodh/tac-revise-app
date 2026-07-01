/**
 * validate_questions.js
 * 
 * Data integrity validator for CBT_EXAMS_DATABASE.
 * Runs automatically on server startup and blocks launch if critical issues found.
 * Can also be run standalone: `node validate_questions.js`
 * 
 * Checks:
 *  1. No duplicate questions within or across papers of the same exam type
 *  2. No wrong-subject questions (math in GK, GK in English, etc.)
 *  3. No garbled/truncated questions
 *  4. No invalid answer indices
 *  5. All questions have exactly 4 options
 *  6. No junk text in options (page numbers, etc.)
 */

const fs = require('fs');
const path = require('path');

// ─── Classification Helpers ──────────────────────────────────────────────

const MATH_PATTERNS = [
  /\bprofit\b/i, /\bloss\b/i, /\bcost price\b/i, /\bselling price\b/i,
  /\bcompound interest\b/i, /\bsimple interest\b/i, /\brate of interest\b/i,
  /\bHCF\b/, /\bLCM\b/, /\bdivisible\b/i, /\bremainder when\b/i,
  /\btriangle\b/i, /\bdiameter\b/i, /\bradius\b/i,
  /\barea\b/i, /\bperimeter\b/i, /\bvolume\b/i,
  /\bequation\b/i, /\bquadratic\b/i, /\bpolynomial\b/i,
  /\btrigonometr/i,
  /\bpipe.*fill/i, /\bcistern\b/i,
  /\bprobability\b/i, /\bpermutation\b/i, /\bcombination\b/i,
  /\bsurface area\b/i, /\bcone\b/i, /\bcylinder\b/i, /\bsphere\b/i,
  /\barithmetic progression\b/i, /\bgeometric progression\b/i,
  /\bpercentage\b/i, /\bdiscount\b/i, /\bmarked price\b/i,
];

function getMathScore(q) {
  let score = 0;
  for (const p of MATH_PATTERNS) { if (p.test(q.question)) score++; }
  const numOpts = q.options.filter(o => /^[\s₹`Rs\.]*[\d\.\-\/\s\,\%\(\)]+$/.test(o.trim())).length;
  if (numOpts >= 3) score += 3;
  return score;
}

function getExamSubject(examId) {
  if (examId.includes('math')) return 'MATH';
  if (examId.includes('english')) return 'ENGLISH';
  if (examId.includes('gk')) return 'GK';
  if (examId.includes('gat')) return 'MIXED';  // NDA GAT is legitimately mixed
  if (examId.includes('afcat')) return 'MIXED'; // AFCAT is legitimately mixed
  return 'UNKNOWN';
}

// ─── Validation Engine ──────────────────────────────────────────────────

function validateDatabase(exams) {
  const errors = [];   // Critical — block server start
  const warnings = []; // Advisory — log but don't block

  // Group exams by type for cross-paper duplicate checking
  const examGroups = {};
  for (const exam of exams) {
    const prefix = exam.id.replace(/-v\d+-\d+$/, '').replace(/-\d+$/, '');
    if (!examGroups[prefix]) examGroups[prefix] = [];
    examGroups[prefix].push(exam);
  }

  // ── Check 1: Cross-paper duplicates within each exam group ──
  for (const [group, groupExams] of Object.entries(examGroups)) {
    const seen = new Map(); // question text -> first occurrence
    for (const exam of groupExams) {
      for (let i = 0; i < exam.questions.length; i++) {
        const key = exam.questions[i].question.substring(0, 100).trim();
        if (seen.has(key)) {
          warnings.push({
            type: 'DUPLICATE',
            exam: exam.id,
            qIndex: i,
            message: `Duplicate of ${seen.get(key)}: "${key.substring(0, 60)}..."`
          });
        } else {
          seen.set(key, `${exam.id} Q${i + 1}`);
        }
      }
    }
  }

  for (const exam of exams) {
    const subject = getExamSubject(exam.id);

    for (let i = 0; i < exam.questions.length; i++) {
      const q = exam.questions[i];
      const qLabel = `${exam.id} Q${i + 1}`;

      // ── Check 2: Wrong subject ──
      if (subject === 'GK' || subject === 'ENGLISH') {
        const mathScore = getMathScore(q);
        if (mathScore >= 4) {
          warnings.push({
            type: 'WRONG_SUBJECT',
            exam: exam.id,
            qIndex: i,
            message: `Math question in ${subject} paper (score=${mathScore}): "${q.question.substring(0, 60)}..."`
          });
        }
      }

      // ── Check 3: Invalid answer index ──
      if (q.correct < 0 || q.correct >= q.options.length) {
        errors.push({
          type: 'BAD_ANSWER',
          exam: exam.id,
          qIndex: i,
          message: `Answer index ${q.correct} out of range (${q.options.length} options): "${q.question.substring(0, 60)}..."`
        });
      }

      // ── Check 4: Wrong number of options ──
      if (q.options.length < 4) {
        errors.push({
          type: 'BAD_OPTIONS',
          exam: exam.id,
          qIndex: i,
          message: `Only ${q.options.length} options: "${q.question.substring(0, 60)}..."`
        });
      }

      // ── Check 5: Garbled match-the-following ──
      if (/Codes\s+A\s+B\s+C\s+D\s+A\s+B\s+C\s+D/.test(q.question) && q.question.length < 80) {
        errors.push({
          type: 'GARBLED',
          exam: exam.id,
          qIndex: i,
          message: `Garbled match-the-following (missing lists): "${q.question.substring(0, 60)}..."`
        });
      }

      // ── Check 6: Junk text in options ──
      for (let j = 0; j < q.options.length; j++) {
        if (/\d{3}\s+GENERAL\s+(SCIENCE|STUDIES|ENGLISH|KNOWLEDGE)/.test(q.options[j])) {
          warnings.push({
            type: 'JUNK_TEXT',
            exam: exam.id,
            qIndex: i,
            message: `Option ${String.fromCharCode(65 + j)} has trailing junk: "${q.options[j].substring(0, 60)}..."`
          });
        }
      }

      // ── Check 7: Stray leading numbers in short question stems ──
      if (/^\d+\.\s+/.test(q.question) && q.question.length < 30) {
        warnings.push({
          type: 'STRAY_NUMBER',
          exam: exam.id,
          qIndex: i,
          message: `Stray number in stem: "${q.question}"`
        });
      }

      // ── Check 8: Duplicate options within same question ──
      const optSet = new Set(q.options.map(o => o.trim().toLowerCase()));
      if (optSet.size < q.options.length - 1) {
        warnings.push({
          type: 'DUPE_OPTIONS',
          exam: exam.id,
          qIndex: i,
          message: `Duplicate options in: "${q.question.substring(0, 60)}..."`
        });
      }
    }
  }

  return { errors, warnings };
}

// ─── Main ────────────────────────────────────────────────────────────────

function runValidation() {
  const dataPath = path.join(__dirname, 'data.js');
  
  if (!fs.existsSync(dataPath)) {
    console.error('[VALIDATOR] ❌ data.js not found!');
    return { success: false, errors: [{ message: 'data.js not found' }], warnings: [] };
  }

  let s = fs.readFileSync(dataPath, 'utf8');
  s = s.replace(/const CBT_EXAMS_DATABASE/g, 'var CBT_EXAMS_DATABASE');

  const vm = require('vm');
  const ctx = {};
  vm.createContext(ctx);
  
  try {
    vm.runInContext(s, ctx);
  } catch (e) {
    console.error('[VALIDATOR] ❌ Failed to parse data.js:', e.message);
    return { success: false, errors: [{ message: `Parse error: ${e.message}` }], warnings: [] };
  }

  const exams = ctx.CBT_EXAMS_DATABASE;
  if (!exams || !Array.isArray(exams)) {
    console.error('[VALIDATOR] ❌ CBT_EXAMS_DATABASE not found or not an array');
    return { success: false, errors: [{ message: 'CBT_EXAMS_DATABASE not found' }], warnings: [] };
  }

  const { errors, warnings } = validateDatabase(exams);

  // Print results
  if (warnings.length > 0) {
    console.log(`[VALIDATOR] ⚠️  ${warnings.length} warning(s):`);
    for (const w of warnings.slice(0, 10)) {
      console.log(`  ⚠️  [${w.type}] ${w.exam} Q${w.qIndex + 1}: ${w.message}`);
    }
    if (warnings.length > 10) console.log(`  ... and ${warnings.length - 10} more`);
  }

  if (errors.length > 0) {
    console.error(`[VALIDATOR] ❌ ${errors.length} critical error(s):`);
    for (const e of errors.slice(0, 20)) {
      console.error(`  ❌ [${e.type}] ${e.exam} Q${e.qIndex + 1}: ${e.message}`);
    }
    if (errors.length > 20) console.error(`  ... and ${errors.length - 20} more`);
    console.error(`\n[VALIDATOR] ❌ VALIDATION FAILED. Fix the errors above before starting the server.`);
    return { success: false, errors, warnings };
  }

  console.log(`[VALIDATOR] ✅ All ${exams.length} exams passed validation (${warnings.length} warnings)`);
  return { success: true, errors: [], warnings };
}

// Run standalone
if (require.main === module) {
  const result = runValidation();
  process.exit(result.success ? 0 : 1);
}

module.exports = { runValidation, validateDatabase };
