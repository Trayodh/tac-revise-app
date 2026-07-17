const fs = require('fs');

console.log('Loading question banks...');

let gsPool = [];
let englishPool = [];
let mathsNdaPool = [];
let mathsCdsAfcatPool = [];

// Helper to push a question
function addQuestion(q, targetPool) {
    if (!q || !q.question || !q.options) return;
    targetPool.push({
        question: q.question,
        options: q.options,
        correct: q.correct !== undefined ? q.correct : 0,
        explanation: q.explanation || "Detailed solution is available upon Up-Armouring.",
        topicId: q.topicId || q.topic || "mixed"
    });
}

// 1. Load pathfinder_bank.json
try {
    const pfData = JSON.parse(fs.readFileSync('question_banks/pathfinder_bank.json', 'utf8'));
    if (pfData.gs) pfData.gs.forEach(q => addQuestion(q, gsPool));
    if (pfData.english) pfData.english.forEach(q => addQuestion(q, englishPool));
    if (pfData.maths) pfData.maths.forEach(q => {
        if (q.exam === 'NDA') {
            addQuestion(q, mathsNdaPool);
        } else {
            addQuestion(q, mathsCdsAfcatPool);
        }
    });
    console.log('Loaded pathfinder_bank.json');
} catch (e) {
    console.log('Failed to load pathfinder_bank.json', e.message);
}

// 2. Load structured_bank.json
try {
    const stData = JSON.parse(fs.readFileSync('question_banks/structured_bank.json', 'utf8'));
    for (const exam of Object.keys(stData)) {
        for (const subject of Object.keys(stData[exam])) {
            const val = stData[exam][subject];
            let qArray = [];
            if (Array.isArray(val)) {
                qArray = val;
            } else if (typeof val === 'object') {
                for (const topic of Object.keys(val)) {
                    qArray = qArray.concat(val[topic]);
                }
            }
            
            qArray.forEach(q => {
                if (subject === 'gs' || subject === 'gk') {
                    addQuestion(q, gsPool);
                } else if (subject === 'english') {
                    addQuestion(q, englishPool);
                } else if (subject === 'maths' || subject === 'math') {
                    if (exam.toLowerCase() === 'nda') {
                        addQuestion(q, mathsNdaPool);
                    } else {
                        addQuestion(q, mathsCdsAfcatPool);
                    }
                }
            });
        }
    }
    console.log('Loaded structured_bank.json');
} catch (e) {
    console.log('Failed to load structured_bank.json', e.message);
}

console.log(`Total GS: ${gsPool.length}`);
console.log(`Total English: ${englishPool.length}`);
console.log(`Total Maths (NDA): ${mathsNdaPool.length}`);
console.log(`Total Maths (CDS/AFCAT): ${mathsCdsAfcatPool.length}`);

// Optionally deduplicate by question text
function dedupe(pool) {
    const seen = new Set();
    const result = [];
    for (const q of pool) {
        const text = (q.question || '').trim().toLowerCase();
        if (!seen.has(text) && text.length > 5) {
            seen.add(text);
            result.push(q);
        }
    }
    return result;
}

gsPool = dedupe(gsPool);
englishPool = dedupe(englishPool);
mathsNdaPool = dedupe(mathsNdaPool);
mathsCdsAfcatPool = dedupe(mathsCdsAfcatPool);

console.log('--- After Deduplication ---');
console.log(`Total GS: ${gsPool.length}`);
console.log(`Total English: ${englishPool.length}`);
console.log(`Total Maths (NDA): ${mathsNdaPool.length}`);
console.log(`Total Maths (CDS/AFCAT): ${mathsCdsAfcatPool.length}`);

const finalObj = {
    gs: gsPool,
    english: englishPool,
    maths_nda: mathsNdaPool,
    maths_cds_afcat: mathsCdsAfcatPool
};

const fileContent = `window.EXTRA_QUESTION_BANK = ${JSON.stringify(finalObj, null, 2)};`;

fs.writeFileSync('extra_bank_data.js', fileContent, 'utf8');
console.log('Successfully filled Question Armoury (extra_bank_data.js).');
