const fs = require('fs');

let s = fs.readFileSync('data.js', 'utf8');
s = s.replace(/const CBT_EXAMS_DATABASE =/g, 'var CBT_EXAMS_DATABASE =');

const vm = require('vm');
const context = {};
vm.createContext(context);
try {
    vm.runInContext(s, context);
    const exams = context.CBT_EXAMS_DATABASE;
    const cdsGk = exams.find(e => e.id === 'cds-gk-v2-1');
    if (!cdsGk) {
        console.log('cds-gk-v2-1 not found');
        process.exit(1);
    }
    
    // Let's print out all questions in cdsGk to find any that belong in AFCAT or MATHS.
    let outOfPlace = [];
    for (let i = 0; i < cdsGk.questions.length; i++) {
        const q = cdsGk.questions[i];
        if (q.question.includes('costing') || q.question.includes('profit') || q.question.includes('loss') || q.question.includes('ratio')) {
            outOfPlace.push({index: i, question: q.question, topic: q.topicId});
        }
    }
    
    console.log(`Found ${outOfPlace.length} suspicious questions:`);
    console.log(JSON.stringify(outOfPlace, null, 2));

} catch (e) {
    console.error(e);
}
