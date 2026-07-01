/**
 * generate_all_papers.js
 * 
 * STEP 2: Generates ALL mock exam papers from structured_bank.json
 * using strict subject + topic weightage rules.
 * 
 * Papers generated:
 *   NDA Mathematics    — 10 papers × 120 questions
 *   NDA GAT            — 10 papers × 150 questions (50 Eng + 100 GS/Science)
 *   CDS Mathematics    — 10 papers × 100 questions
 *   CDS English        — 10 papers × 120 questions
 *   CDS General Know.  — 10 papers × 120 questions
 *   AFCAT Combined     — 10 papers × 100 questions
 */

const fs = require('fs');

const BANK = JSON.parse(fs.readFileSync('question_banks/structured_bank.json', 'utf8'));

// ─── Pool manager — random without replacement across papers ──────────────────
// Each pool is shuffled once; papers draw sequentially so no duplicates across mocks.

const pools = {};

function buildPool(arr) {
    const shuffled = [...arr].sort(() => Math.random() - 0.5);
    return { data: shuffled, idx: 0 };
}

function draw(poolKey, arr, count, existingQuestions = []) {
    if (!pools[poolKey]) pools[poolKey] = buildPool(arr);
    const pool = pools[poolKey];
    const result = [];
    let attempts = 0;
    
    // Normalize existing questions to build the seen set
    const seenStems = new Set(existingQuestions.map(item => {
        return item.question.replace(/\s*[eE]?\s*(?:20)?\d{2}\s*\(?[IV]+\)?[\s,]*$/g, '')
                            .replace(/^\d+\.\s+(?=[a-zA-Z_])/, '')
                            .replace(/\s*\(\s*Variant\s+\d+(?:\s*[\/\-]\s*\d+)?\s*\)/gi, '')
                            .toLowerCase()
                            .replace(/[^a-z0-9]/g, '')
                            .substring(0, 80);
    }));
    
    while (result.length < count && attempts < arr.length * 2) {
        const q = pool.data[pool.idx % pool.data.length];
        pool.idx++;
        attempts++;
        if (q && q.question && q.options && q.options.length === 4) {
            const cleanStem = q.question.replace(/\s*[eE]?\s*(?:20)?\d{2}\s*\(?[IV]+\)?[\s,]*$/g, '')
                                       .replace(/^\d+\.\s+(?=[a-zA-Z_])/, '')
                                       .replace(/\s*\(\s*Variant\s+\d+(?:\s*[\/\-]\s*\d+)?\s*\)/gi, '')
                                       .toLowerCase()
                                       .replace(/[^a-z0-9]/g, '')
                                       .substring(0, 80);
            
            if (!seenStems.has(cleanStem)) {
                result.push(q);
                seenStems.add(cleanStem);
            }
        }
    }
    return result;
}

// ─── Weightage quotas (from agreed rules) ─────────────────────────────────────

const QUOTAS = {

    NDA_MATHS: { // 120 total
        algebra:     [BANK.nda.maths.algebra,      30],
        trigonometry:[BANK.nda.maths.trigonometry, 20],
        geometry:    [BANK.nda.maths.geometry,     20],
        statistics:  [BANK.nda.maths.statistics,   20],
        arithmetic:  [BANK.nda.maths.arithmetic,   30],
    },

    NDA_GAT_ENGLISH: { // 50 total
        grammar:              [BANK.nda.gat.english.grammar,              20],
        vocabulary:           [BANK.nda.gat.english.vocabulary,           20],
        sentence_structure:   [BANK.nda.gat.english.sentence_structure,   10],
    },

    NDA_GAT_SCIENCE: { // 50 total
        physics:   [BANK.nda.gat.physics,   25],
        chemistry: [BANK.nda.gat.chemistry, 15],
        biology:   [BANK.nda.gat.biology,   10],
    },

    NDA_GAT_GS: { // 50 total
        history:        [BANK.nda.gat.history,        15],
        geography:      [BANK.nda.gat.geography,      20],
        polity:         [BANK.nda.gat.polity,          5],
        current_affairs:[BANK.nda.gat.current_affairs, 10],
    },

    CDS_MATHS: { // 100 total
        arithmetic:  [BANK.cds.maths.arithmetic,  40],
        algebra:     [BANK.cds.maths.algebra,     20],
        trigonometry:[BANK.cds.maths.trigonometry,15],
        geometry:    [BANK.cds.maths.geometry,    15],
        statistics:  [BANK.cds.maths.statistics,  10],
    },

    CDS_ENGLISH: { // 120 total
        grammar:              [BANK.cds.english.grammar,              40],
        vocabulary:           [BANK.cds.english.vocabulary,           40],
        sentence_structure:   [BANK.cds.english.sentence_structure,   40],
    },

    CDS_GS: { // 120 total
        current_affairs:  [BANK.cds.gs.current_affairs,   20],
        geography:        [BANK.cds.gs.geography,         22],
        history:          [BANK.cds.gs.history,           22],
        polity:           [BANK.cds.gs.polity,            20],
        economy:          [BANK.cds.gs.economy,           10],
        physics:          [BANK.cds.gs.physics,           10],
        chemistry:        [BANK.cds.gs.chemistry,          8],
        biology:          [BANK.cds.gs.biology,            8],
    },

    AFCAT_ENGLISH: { // 30 total
        vocabulary:       [BANK.afcat.english.vocabulary,         10],
        grammar:          [BANK.afcat.english.grammar,            10],
        sentence_structure:[BANK.afcat.english.sentence_structure,10],
    },
    
    AFCAT_GA: { // 25 total
        current_affairs:  [BANK.afcat.general_awareness.current_affairs, 5],
        history:          [BANK.afcat.general_awareness.history,         5],
        geography:        [BANK.afcat.general_awareness.geography,       5],
        polity:           [BANK.afcat.general_awareness.polity,          5],
        science:          [BANK.afcat.general_awareness.science,         5],
    },

    AFCAT_REASONING: { // 25 total
        reasoning:        [BANK.afcat.reasoning,                        25],
    },

    AFCAT_NUMERICAL: { // 20 total
        arithmetic:       [BANK.afcat.numerical_ability.arithmetic,     20],
    },
};

// ─── Generate a paper from quotas ─────────────────────────────────────────────

function generatePaper(quotaObj, configName, existingQuestions = []) {
    const questions = [...existingQuestions];
    for (const [key, [pool, count]] of Object.entries(quotaObj)) {
        const poolKey = configName + '_' + key;
        const drawn = draw(poolKey, pool, count, questions);
        if (drawn.length < count) {
            console.warn(`    WARNING: ${key} only has ${drawn.length}/${count} questions available`);
        }
        questions.push(...drawn);
    }
    return questions.slice(existingQuestions.length);
}

// ─── Load existing DB ─────────────────────────────────────────────────────────

const code = fs.readFileSync('data.js', 'utf8') + '\nmodule.exports = { CBT_EXAMS_DATABASE, NOTES_DATABASE, CURRENT_AFFAIRS_DB };';
const m = new module.constructor();
m._compile(code, 'data.js');
const db    = m.exports.CBT_EXAMS_DATABASE;
const notes = m.exports.NOTES_DATABASE;
const currentAffairs = m.exports.CURRENT_AFFAIRS_DB || {};

// ─── Rebuild all mock papers ───────────────────────────────────────────────────

const PAPER_CONFIGS = [
    { exam: 'NDA', subject: 'Mathematics',         count: 15, quota: 'NDA_MATHS',   rules: { correctMarks: 2.5,  incorrectMarks: -0.83 } },
    { exam: 'NDA', subject: 'General Ability Test (GAT)',count: 15, quota: 'NDA_GAT',     rules: { correctMarks: 4.0,  incorrectMarks: -1.33 } },
    { exam: 'CDS', subject: 'Elementary Mathematics',count: 15, quota: 'CDS_MATHS',   rules: { correctMarks: 1.0,  incorrectMarks: -0.33 } },
    { exam: 'CDS', subject: 'English',             count: 15, quota: 'CDS_ENGLISH', rules: { correctMarks: 1.0,  incorrectMarks: -0.33 } },
    { exam: 'CDS', subject: 'General Knowledge',   count: 15, quota: 'CDS_GS',      rules: { correctMarks: 1.0,  incorrectMarks: -0.33 } },
    { exam: 'AFCAT', subject: 'Combined',          count: 15, quota: 'AFCAT',       rules: { correctMarks: 3.0,  incorrectMarks: -1.0  } },
];

const SUBJECT_LABELS = {
    'NDA-Mathematics':          'NDA Mathematics Mock Test',
    'NDA-General Ability Test (GAT)': 'NDA GAT Mock Test',
    'CDS-Elementary Mathematics': 'CDS Mathematics Mock Test',
    'CDS-English':              'CDS English Mock Test',
    'CDS-General Knowledge':    'CDS GK Mock Test',
    'AFCAT-Combined':           'AFCAT Combined Mock Test',
};

const ID_PREFIX = {
    'NDA-Mathematics':          'nda-math-v2',
    'NDA-General Ability Test (GAT)': 'nda-gat-v2',
    'CDS-Elementary Mathematics': 'cds-math-v2',
    'CDS-English':              'cds-english-v2',
    'CDS-General Knowledge':    'cds-gk-v2',
    'AFCAT-Combined':           'afcat-v2',
};

// Remove old auto-generated v2 mocks if any, keep handcrafted ones
const handcraftedTitles = new Set(db.filter(e => e.id && !e.id.includes('-v2')).map(e => e.title));

const newMocks = [];

for (const config of PAPER_CONFIGS) {
    const key = config.exam + '-' + config.subject;
    const label = SUBJECT_LABELS[key];
    const idPrefix = ID_PREFIX[key];

    console.log(`\nGenerating ${config.count} × "${label}"...`);

    for (let i = 1; i <= config.count; i++) {
        let questions;
        if (config.quota === 'NDA_GAT') {
            // GAT is a combination of 3 sections in order
            const engPaper = generatePaper(QUOTAS.NDA_GAT_ENGLISH, 'NDA_GAT_ENGLISH');
            const sciPaper = generatePaper(QUOTAS.NDA_GAT_SCIENCE, 'NDA_GAT_SCIENCE', engPaper);
            const gsPaper  = generatePaper(QUOTAS.NDA_GAT_GS, 'NDA_GAT_GS', [...engPaper, ...sciPaper]);
            questions = [...engPaper, ...sciPaper, ...gsPaper];
        } else if (config.quota === 'AFCAT') {
            const engPaper = generatePaper(QUOTAS.AFCAT_ENGLISH, 'AFCAT_ENGLISH');
            const gaPaper  = generatePaper(QUOTAS.AFCAT_GA, 'AFCAT_GA', engPaper);
            const numPaper = generatePaper(QUOTAS.AFCAT_NUMERICAL, 'AFCAT_NUMERICAL', [...engPaper, ...gaPaper]);
            const reasPaper= generatePaper(QUOTAS.AFCAT_REASONING, 'AFCAT_REASONING', [...engPaper, ...gaPaper, ...numPaper]);
            questions = [...engPaper, ...gaPaper, ...numPaper, ...reasPaper];
        } else {
            questions = generatePaper(QUOTAS[config.quota], config.quota);
        }

        const mockId = `${idPrefix}-${i}`;
        const title = `${label} ${i}`;

        const mock = {
            id: mockId,
            exam: config.exam,
            subject: config.subject,
            title: title,
            duration: config.exam === 'NDA' && config.subject === 'Mathematics' ? 150 :
                      config.exam === 'NDA' ? 150 :
                      config.exam === 'AFCAT' ? 120 : 120,
            rules: config.rules,
            questions: questions,
        };

        newMocks.push(mock);
        console.log(`  ${title}: ${questions.length} questions`);
    }
}

// ─── Write back ───────────────────────────────────────────────────────────────

const outString = `let CURRENT_AFFAIRS_DB = ${JSON.stringify(currentAffairs, null, 2)};

const CBT_EXAMS_DATABASE = ${JSON.stringify(newMocks, null, 2)};

const NOTES_DATABASE = ${JSON.stringify(notes, null, 2)};

if (typeof window !== 'undefined') {
    window.CBT_EXAMS_DATABASE = CBT_EXAMS_DATABASE;
    window.NOTES_DATABASE = NOTES_DATABASE;
    window.CURRENT_AFFAIRS_DB = CURRENT_AFFAIRS_DB;
}

if (typeof module !== 'undefined') {
    module.exports = { CBT_EXAMS_DATABASE, NOTES_DATABASE, CURRENT_AFFAIRS_DB };
}
`;

fs.writeFileSync('data.js', outString);
console.log('\n✅ Done! Generated ' + newMocks.length + ' new mock papers and saved to data.js');
console.log('Total papers in database: ' + newMocks.length);
