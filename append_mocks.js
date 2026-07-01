const fs = require('fs');

const bank = JSON.parse(fs.readFileSync('question_banks/cds_pyq_bank.json', 'utf8'));

function getRandom(arr, count) {
    if (!arr || arr.length === 0) return [];
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function getQuestionsForTopic(topicName, count) {
    let pool = [];
    if (bank[topicName]) pool.push(...bank[topicName]);
    if (bank.gs) {
        pool.push(...bank.gs.filter(q => q.topicId && q.topicId.toLowerCase().includes(topicName.replace('_', ' '))));
    }
    if (pool.length < count && bank.gs) pool.push(...getRandom(bank.gs, count - pool.length));
    return getRandom(pool, count);
}

function generateNDAMock() {
    let q = [];
    q.push(...getQuestionsForTopic('physics', 23));
    q.push(...getQuestionsForTopic('chemistry', 16));
    q.push(...getQuestionsForTopic('biology', 11));
    q.push(...getQuestionsForTopic('history', 16));
    q.push(...getQuestionsForTopic('geography', 16));
    q.push(...getQuestionsForTopic('indian_polity', 18));
    if (q.length < 100) q.push(...getRandom(bank.gs, 100 - q.length));
    return q.slice(0, 100);
}

function generateCDSMock() {
    let q = [];
    q.push(...getQuestionsForTopic('physics', 10));
    q.push(...getQuestionsForTopic('chemistry', 10));
    q.push(...getQuestionsForTopic('biology', 10));
    q.push(...getQuestionsForTopic('history', 20));
    q.push(...getQuestionsForTopic('geography', 20));
    q.push(...getQuestionsForTopic('indian_polity', 20));
    q.push(...getQuestionsForTopic('current_affairs', 30));
    if (q.length < 120) q.push(...getRandom(bank.gs, 120 - q.length));
    return q.slice(0, 120);
}

function generateAFCATMock() {
    let q = [];
    q.push(...getQuestionsForTopic('current_affairs', 25));
    q.push(...getRandom(bank.english || [], 30));
    q.push(...getRandom(bank.maths || [], 15));
    q.push(...getRandom(bank.afcat || [], 30));
    if (q.length < 100) q.push(...getRandom(bank.afcat, 100 - q.length));
    return q.slice(0, 100);
}

const newNDAMock = {
    id: `nda-gat-youtube-mock-${Date.now()}`,
    exam: "NDA",
    subject: "GAT",
    title: "NDA GAT — YouTube Intelligence Extraction Mock",
    duration: 150,
    questionsCount: 100,
    rules: { correctMarks: 4, incorrectMarks: -1.33, examType: "NDA" },
    questions: generateNDAMock()
};

const newCDSMock = {
    id: `cds-gs-youtube-mock-${Date.now()}`,
    exam: "CDS",
    subject: "General Knowledge",
    title: "CDS GS — YouTube Intelligence Extraction Mock",
    duration: 120,
    questionsCount: 120,
    rules: { correctMarks: 0.83, incorrectMarks: -0.27, examType: "CDS" },
    questions: generateCDSMock()
};

const newAFCATMock = {
    id: `afcat-youtube-mock-${Date.now()}`,
    exam: "AFCAT",
    subject: "Combined",
    title: "AFCAT — YouTube Intelligence Extraction Mock",
    duration: 120,
    questionsCount: 100,
    rules: { correctMarks: 3, incorrectMarks: -1, examType: "AFCAT" },
    questions: generateAFCATMock()
};

// Evaluate data.js in memory to get the arrays
const code = fs.readFileSync('data.js', 'utf8') + '\nmodule.exports = { CBT_EXAMS_DATABASE, NOTES_DATABASE };';
const m = new module.constructor();
m._compile(code, 'data.js');

const db = m.exports.CBT_EXAMS_DATABASE;
const notes = m.exports.NOTES_DATABASE;

// Push to db
db.push(newNDAMock);
db.push(newCDSMock);
db.push(newAFCATMock);

// Rewrite data.js completely to guarantee perfectly valid syntax
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
console.log("Successfully appended 3 brand new YouTube Mocks to CBT_EXAMS_DATABASE!");
