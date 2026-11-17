const fs = require('fs');

const bank = JSON.parse(fs.readFileSync('question_banks/cds_pyq_bank.json', 'utf8'));

// Helper to get random questions from a specific topic
function getRandom(arr, count) {
    if (!arr || arr.length === 0) return [];
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Function to find questions that match a topic/sub-topic
function getQuestionsForTopic(topicName, count) {
    let pool = [];
    if (bank[topicName]) {
        pool.push(...bank[topicName]);
    }
    if (bank.gs) {
        pool.push(...bank.gs.filter(q => q.topicId && q.topicId.toLowerCase().includes(topicName.replace('_', ' '))));
    }
    if (pool.length < count && bank.gs) {
        pool.push(...getRandom(bank.gs, count - pool.length));
    }
    return getRandom(pool, count);
}

function generateNDAMock() {
    let q = [];
    q.push(...getQuestionsForTopic('physics', 23));
    q.push(...getQuestionsForTopic('chemistry', 16));
    q.push(...getQuestionsForTopic('biology', 11));
    q.push(...getQuestionsForTopic('history', 16));
    q.push(...getQuestionsForTopic('geography', 16));
    q.push(...getQuestionsForTopic('polity', 18));
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

let dataJs = fs.readFileSync('data.js', 'utf8');

// Find the start of CBT_EXAMS_DATABASE
const startIdx = dataJs.indexOf('const CBT_EXAMS_DATABASE = [');
if (startIdx === -1) {
    console.error("Could not find CBT_EXAMS_DATABASE");
    process.exit(1);
}

// Find the closing bracket for CBT_EXAMS_DATABASE array.
// Because it's a huge array, we look for the next const definition.
// Wait, we know `data.js` has:
// const CBT_EXAMS_DATABASE = [ ... ];
// const NOTES_DATABASE = { ... };
const endIdx = dataJs.indexOf('const NOTES_DATABASE', startIdx);
// Find the last ']' before endIdx
const arrayEndIdx = dataJs.lastIndexOf(']', endIdx);

if (arrayEndIdx === -1) {
    console.error("Could not find end of array");
    process.exit(1);
}

const mockStrings = [
    JSON.stringify(newNDAMock, null, 2),
    JSON.stringify(newCDSMock, null, 2),
    JSON.stringify(newAFCATMock, null, 2)
].join(',\n');

// Inject right before the closing bracket of CBT_EXAMS_DATABASE
dataJs = dataJs.slice(0, arrayEndIdx) + ',\n' + mockStrings + '\n' + dataJs.slice(arrayEndIdx);

fs.writeFileSync('data.js', dataJs);
console.log("Successfully appended 3 brand new YouTube Mocks to CBT_EXAMS_DATABASE!");
