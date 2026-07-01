const fs = require('fs');

const bank = JSON.parse(fs.readFileSync('question_banks/cds_pyq_bank.json', 'utf8'));

// Helper to get random questions from a specific topic
function getRandom(arr, count) {
    if (!arr || arr.length === 0) return [];
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

const engPool = bank.english || [];
const mathPool = bank.maths || [];
const afcatPool = bank.afcat || [];
const gsPool = bank.gs || [];

// Sub-pools for GS
const geoPool = gsPool.filter(q => q.topicId === 'geography');
const historyPool = gsPool.filter(q => q.topicId === 'history');
const polityPool = gsPool.filter(q => q.topicId === 'polity' || q.question.toLowerCase().includes('article') || q.question.toLowerCase().includes('constitution'));
const ecoPool = gsPool.filter(q => q.topicId === 'economy' || q.question.toLowerCase().includes('bank') || q.question.toLowerCase().includes('gdp'));
const sciPool = gsPool.filter(q => q.topicId === 'science' || q.question.toLowerCase().includes('velocity') || q.question.toLowerCase().includes('acid') || q.question.toLowerCase().includes('cell'));
const caPool = gsPool.filter(q => q.topicId === 'current_affairs');
const miscPool = gsPool.filter(q => q.topicId === 'general_knowledge' || q.topicId === 'sports' || q.topicId === 'mixed' || !q.topicId);

function safeGet(pool, count) {
    const res = getRandom(pool, count);
    const deficit = count - res.length;
    if (deficit > 0) {
        res.push(...getRandom(miscPool, deficit));
    }
    return res;
}

// 1. NDA GAT = 50 English + 100 GS
const ndaQuestions = [
    ...safeGet(engPool, 50),
    ...safeGet(sciPool, 25), // Physics
    ...safeGet(sciPool, 15), // Chem
    ...safeGet(sciPool, 10), // Bio
    ...safeGet(historyPool, 10),
    ...safeGet(polityPool, 10),
    ...safeGet(geoPool, 20),
    ...safeGet(caPool, 10)
];

// 2. CDS GS = 120 GS
const cdsQuestions = [
    ...safeGet(caPool, 27),
    ...safeGet(geoPool, 23),
    ...safeGet(historyPool, 20),
    ...safeGet(polityPool, 15),
    ...safeGet(sciPool, 10), // Bio
    ...safeGet(sciPool, 8),  // Chem
    ...safeGet(ecoPool, 8),
    ...safeGet(sciPool, 9)   // Physics
];

// 3. AFCAT Combined = 30 Eng, 25 GS, 15 Math, 30 Reasoning
const afcatQuestions = [
    ...safeGet(engPool, 30),
    ...safeGet(gsPool, 25),
    ...safeGet(mathPool, 15),
    ...safeGet(afcatPool, 30) // Reasoning
];

const code = fs.readFileSync('data.js', 'utf8') + '\nmodule.exports = { CBT_EXAMS_DATABASE, NOTES_DATABASE };';
const m = new module.constructor();
m._compile(code, 'data.js');

const db = m.exports.CBT_EXAMS_DATABASE;
const notes = m.exports.NOTES_DATABASE;

// Update the mocks in DB
const ndaMock = db.find(e => e.title === 'NDA GAT — YouTube Intelligence Extraction Mock');
if (ndaMock) ndaMock.questions = ndaQuestions;

const cdsMock = db.find(e => e.title === 'CDS GS — YouTube Intelligence Extraction Mock');
if (cdsMock) cdsMock.questions = cdsQuestions;

const afcatMock = db.find(e => e.title === 'AFCAT — YouTube Intelligence Extraction Mock');
if (afcatMock) afcatMock.questions = afcatQuestions;

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
console.log(`Successfully rebuilt YouTube mocks to exact weightage quotas: NDA (${ndaQuestions.length}), CDS (${cdsQuestions.length}), AFCAT (${afcatQuestions.length})`);
