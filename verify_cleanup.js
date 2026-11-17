const fs = require('fs');

let s = fs.readFileSync('data.js', 'utf8');
s = s.replace(/const CBT_EXAMS_DATABASE/g, 'var CBT_EXAMS_DATABASE');

const vm = require('vm');
const context = {};
vm.createContext(context);
vm.runInContext(s, context);

const exams = context.CBT_EXAMS_DATABASE;

console.log(`Total exams: ${exams.length}`);
console.log('');

// Verify CDS GK papers
const gkExams = exams.filter(e => e.id.startsWith('cds-gk'));
for (const exam of gkExams) {
    // Check for any remaining math questions
    let mathCount = 0;
    for (const q of exam.questions) {
        const text = q.question;
        if (/profit|loss|compound interest|simple interest|selling price|cost price/i.test(text)) {
            const hasNumericOptions = q.options.filter(o => /^[\s₹`Rs\.]*[\d\.\-\/\s\,\%]+$/.test(o.trim())).length >= 3;
            if (hasNumericOptions) {
                mathCount++;
                console.log(`⚠️  Possible math Q still in ${exam.id}: "${text.substring(0, 80)}..."`);
            }
        }
    }
    console.log(`${exam.id}: ${exam.questions.length} questions, ${mathCount} suspicious math Qs remaining`);
}

// Also check for duplicate questions across ALL exams
console.log('\n--- Checking for cross-exam duplicates in CDS GK papers ---');
const seen = new Map();
let dupes = 0;
for (const exam of gkExams) {
    for (let i = 0; i < exam.questions.length; i++) {
        const key = exam.questions[i].question.substring(0, 100).trim();
        if (seen.has(key)) {
            dupes++;
            console.log(`⚠️  DUPLICATE: "${key.substring(0, 60)}..." in ${exam.id} Q${i+1} (first seen in ${seen.get(key)})`);
        } else {
            seen.set(key, `${exam.id} Q${i+1}`);
        }
    }
}
console.log(`Total duplicates found across GK papers: ${dupes}`);
