/**
 * enforce_subject_rules.js
 * 
 * Rules:
 *   - CDS General Knowledge  → NO English questions allowed (remove & replace with GS)
 *   - CDS Mathematics        → NO English questions allowed
 *   - NDA GAT                → English IS allowed (it's part of the paper)
 *   - AFCAT Combined         → English IS allowed (it's part of the paper)
 * 
 * English detection is based on the full English syllabus:
 *   Grammar   : parts of speech, subject-verb agreement, tenses, articles, prepositions,
 *               conjunctions, modals, active/passive voice, direct/indirect speech,
 *               error spotting, sentence correction/improvement, no improvement,
 *               no error, voice, narration
 *   Vocabulary: synonyms, antonyms, idioms, phrases, one-word substitution,
 *               word meanings in context, commonly confused words
 *   RC        : comprehension passages, main idea, inference, tone/purpose/logic
 *   Structure : para jumbles, sentence ordering (S1-S6, P:Q:R:S: type),
 *               cloze test, sentence completion, fill in the blanks
 */

const fs = require('fs');

// --- Load DB ------------------------------------------------------------------
const code = fs.readFileSync('data.js', 'utf8') + '\nmodule.exports = { CBT_EXAMS_DATABASE, NOTES_DATABASE };';
const m = new module.constructor();
m._compile(code, 'data.js');
const db    = m.exports.CBT_EXAMS_DATABASE;
const notes = m.exports.NOTES_DATABASE;

// --- Load replacement GS pool ------------------------------------------------
const bank = JSON.parse(fs.readFileSync('question_banks/cds_pyq_bank.json', 'utf8'));

const ENGLISH_TEXT_PATTERNS = [
    // Grammar — very specific phrases only
    'no improvement',
    'no error',
    'spot the error',
    'find the error',
    'error in the sentence',
    'sentence improvement',
    'active voice',
    'passive voice',
    'direct speech',
    'indirect speech',
    'reported speech',
    // Vocabulary — specific exam question stems
    'synonym of',
    'antonym of',
    'synonyms of',
    'antonyms of',
    'closest in meaning',
    'opposite in meaning',
    'one word substitution',
    'one-word substitution',
    'phrasal verb',
    'meaning of the idiom',
    'meaning of the phrase',
    'the idiom',
    'commonly confused',
    // RC — specific passage stems
    'according to the passage',
    'according to the author',
    'the author suggests',
    'the tone of the passage',
    'the writer implies',
    // Structure / jumbles — very specific
    'proper sequence should be',
    's1 :',
    's1:',
    's6 :',
    's6:',
    'fill in the blank',
    'fill in the blanks',
    'cloze test',
    'choose the correct word to fill',
    'choose the appropriate word to fill',
    'choose the correct alternative to fill',
    'directions :',
];

function isPermutationOfPQRS(opt) {
    const o = opt.trim().toUpperCase().replace(/[^PQRS]/g, '');
    return o.length === 4 && o.includes('P') && o.includes('Q') && o.includes('R') && o.includes('S');
}

function isEnglishQuestion(q) {
    if (!q || !q.question) return false;

    if (q.topicId && (q.topicId === 'english' || q.topicId.toLowerCase().includes('english'))) return true;

    const txt = (q.question + ' ' + (q.options || []).join(' ')).toLowerCase();

    for (const pat of ENGLISH_TEXT_PATTERNS) {
        if (txt.includes(pat)) return true;
    }

    // PQRS jumble detection
    if (q.options && q.options.length === 4) {
        const pqrsCount = q.options.filter(o => isPermutationOfPQRS(o)).length;
        if (pqrsCount >= 2) return true;
    }

    return false;
}

function isCleanGS(q) {
    if (!q || !q.question || !q.options || q.options.length !== 4) return false;
    if (isEnglishQuestion(q)) return false;
    const txt = (q.question + ' ' + q.options.join(' ')).toLowerCase();
    if (txt.includes('codes a b c d')) return false;
    return true;
}

const gsPool = (bank.gs || []).filter(isCleanGS);
let poolIndex = 0;

function getGSReplacement() {
    const q = gsPool[poolIndex % gsPool.length];
    poolIndex++;
    return q;
}

// --- Process ------------------------------------------------------------------
let totalReplaced = 0;

db.forEach(exam => {
    const isCDSGS   = exam.exam === 'CDS' && exam.subject === 'General Knowledge';
    const isCDSMath = exam.exam === 'CDS' && exam.subject === 'Mathematics';

    if (!isCDSGS && !isCDSMath) return;  // NDA GAT and AFCAT are left UNTOUCHED

    if (!exam.questions) return;

    for (let i = 0; i < exam.questions.length; i++) {
        if (isEnglishQuestion(exam.questions[i])) {
            const preview = (exam.questions[i].question || '').substring(0, 60);
            console.log(`[REMOVED] ${exam.title} Q${i+1}: "${preview}..."`);
            exam.questions[i] = getGSReplacement();
            totalReplaced++;
        }
    }
});

// --- Write back ---------------------------------------------------------------
const outString = `const CBT_EXAMS_DATABASE = ${JSON.stringify(db, null, 2)};

const NOTES_DATABASE = ${JSON.stringify(notes, null, 2)};

if (typeof window !== 'undefined') {
    window.CBT_EXAMS_DATABASE = CBT_EXAMS_DATABASE;
    window.NOTES_DATABASE = NOTES_DATABASE;
}

if (typeof module !== 'undefined') {
    module.exports = { CBT_EXAMS_DATABASE, NOTES_DATABASE };
}
`;

fs.writeFileSync('data.js', outString);
console.log('');
console.log('Done! Replaced ' + totalReplaced + ' English questions in CDS GS/Maths papers.');
console.log('NDA GAT and AFCAT Combined are untouched (English is valid there).');
