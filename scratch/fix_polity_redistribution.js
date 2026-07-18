const fs = require('fs');

// Read the extra_bank_data.js file
const code = fs.readFileSync('extra_bank_data.js', 'utf8');

// Parse the data by executing it in a sandbox
const window = {};
eval(code);
const data = window.EXTRA_QUESTION_BANK;

// Helper to push to a subject/chapter safely
function pushQuestion(subject, chapter, question) {
    if (!data[subject]) data[subject] = {};
    if (!data[subject][chapter]) data[subject][chapter] = [];
    data[subject][chapter].push(question);
}

// 1. Fix Polity chapters
const polityKeys = Object.keys(data['Polity'] || {});
for (const key of polityKeys) {
    if (key !== 'Indian Polity') {
        const questionsToMove = data['Polity'][key];
        let targetSubject = '';
        let targetChapter = '';
        
        if (key.includes('Physics')) {
            targetSubject = 'Physics';
            targetChapter = key === 'Physics' ? 'General Physics' : key;
        } else if (key.includes('Chemistry')) {
            targetSubject = 'Chemistry';
            targetChapter = 'General Chemistry';
        } else if (key.includes('Economy') || key.includes('Economics')) {
            targetSubject = 'Economics';
            targetChapter = 'Indian Economy';
        } else {
            // Default fallback if some other subject got mixed in
            targetSubject = key;
            targetChapter = 'General ' + key;
        }
        
        console.log(`Moving ${questionsToMove.length} questions from Polity > ${key} to ${targetSubject} > ${targetChapter}`);
        for (const q of questionsToMove) {
            pushQuestion(targetSubject, targetChapter, q);
        }
        
        delete data['Polity'][key];
    }
}

// 2. Fix Chemistry > Biology
if (data['Chemistry'] && data['Chemistry']['Biology']) {
    const questionsToMove = data['Chemistry']['Biology'];
    console.log(`Moving ${questionsToMove.length} questions from Chemistry > Biology to Biology > General Biology`);
    for (const q of questionsToMove) {
        pushQuestion('Biology', 'General Biology', q);
    }
    delete data['Chemistry']['Biology'];
}

// Write the fixed data back to the file
const newCode = 'window.EXTRA_QUESTION_BANK = ' + JSON.stringify(data, null, 2) + ';';
fs.writeFileSync('extra_bank_data.js', newCode);

console.log('Fixed extra_bank_data.js');
