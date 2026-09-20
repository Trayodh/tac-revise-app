const fs = require('fs');

// Read data.js and extract the CBT_EXAMS_DATABASE
let dataJsContent = fs.readFileSync('data.js', 'utf8');

// A dirty but effective way to load browser JS into Node is using eval 
// if it just declares consts/lets in the global scope.
// We'll replace const with var so it attaches to global or we can just eval in a wrapper.
const script = dataJsContent + '\nmodule.exports = { CBT_EXAMS_DATABASE };';
const moduleObj = { exports: {} };
const fn = new Function('module', 'exports', script);
fn(moduleObj, moduleObj.exports);

const DB = moduleObj.exports.CBT_EXAMS_DATABASE;

let mathsNdaPool = [];
let mathsCdsAfcatPool = [];
let gsPool = [];
let englishPool = [];

DB.forEach(exam => {
    exam.questions.forEach(q => {
        // Simple classification based on exam title or topic
        const title = exam.title.toLowerCase();
        let target = gsPool;
        if (title.includes('math')) {
            if (title.includes('nda')) {
                target = mathsNdaPool;
            } else {
                target = mathsCdsAfcatPool;
            }
        } else if (title.includes('english')) {
            target = englishPool;
        } else if (title.includes('gat') || title.includes('general')) {
            // Further classify GAT questions if possible, but mostly GS
            // For now, let's just put all GAT into GS unless it specifically looks like English
            if (q.question && q.question.toLowerCase().match(/(antonym|synonym|grammar|sentence|idiom)/)) {
                target = englishPool;
            } else {
                target = gsPool;
            }
        }
        
        target.push({
            question: q.question,
            options: q.options,
            correct: q.correct,
            explanation: q.explanation || "Detailed solution is available upon Up-Armouring.",
            topicId: q.topicId || "mixed"
        });
    });
});

// Take 100 questions per subject
mathsNdaPool = mathsNdaPool.slice(0, 100);
mathsCdsAfcatPool = mathsCdsAfcatPool.slice(0, 100);
gsPool = gsPool.slice(0, 100);
englishPool = englishPool.slice(0, 100);

const finalObj = {
    gs: gsPool,
    english: englishPool,
    maths_nda: mathsNdaPool,
    maths_cds_afcat: mathsCdsAfcatPool
};

const fileContent = `window.EXTRA_QUESTION_BANK = ${JSON.stringify(finalObj, null, 2)};`;

fs.writeFileSync('extra_bank_data.js', fileContent, 'utf8');
console.log(`Generated extra_bank_data.js with GS: ${gsPool.length}, English: ${englishPool.length}, Maths(NDA): ${mathsNdaPool.length}, Maths(CDS/AFCAT): ${mathsCdsAfcatPool.length} questions.`);
