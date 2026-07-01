const fs = require('fs');

const code = fs.readFileSync('data.js', 'utf8') + '\nmodule.exports = { CBT_EXAMS_DATABASE };';
const m = new module.constructor();
m._compile(code, 'data.js');
const exams = m.exports.CBT_EXAMS_DATABASE;

let totalDupes = 0;
exams.forEach(paper => {
    paper.questions.forEach((q, idx) => {
        const stem = q.question;
        const norm = stem.toLowerCase().replace(/[^a-z0-9]/g, '').substring(0, 80);
        // Find if there is another index with the same norm
        const dupIdx = paper.questions.findIndex((otherQ, otherIdx) => {
            if (otherIdx === idx) return false;
            const otherNorm = otherQ.question.toLowerCase().replace(/[^a-z0-9]/g, '').substring(0, 80);
            return otherNorm === norm;
        });
        if (dupIdx !== -1 && idx < dupIdx) {
            totalDupes++;
            console.log(`[${paper.id}] Match found between idx ${idx} and ${dupIdx}:`);
            console.log(`idx ${idx}: ${q.question}`);
            console.log(`idx ${dupIdx}: ${paper.questions[dupIdx].question}`);
            console.log('---');
        }
    });
});
console.log(`Total duplicates found: ${totalDupes}`);
