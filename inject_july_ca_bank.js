const fs = require('fs');

// Read current_affairs_db.js
const dbContent = fs.readFileSync('current_affairs_db.js', 'utf8');
const start = dbContent.indexOf('window.CURRENT_AFFAIRS_DB = ') + 28;
let jsonStr = dbContent.substring(start).trim();
if (jsonStr.endsWith(';')) {
    jsonStr = jsonStr.slice(0, -1);
}
const db = JSON.parse(jsonStr);

// Read ca_bank.json
const caBankPath = './question_banks/ca_bank.json';
const caBank = JSON.parse(fs.readFileSync(caBankPath, 'utf8'));
const existingStems = new Set(caBank.ca.map(q => q.question));

let injected = 0;
if (db['July 2026']) {
    db['July 2026'].forEach(item => {
        if (item.mcq && !existingStems.has(item.mcq.question)) {
            let correctIndex = 0;
            if (item.mcq.answer === 'A') correctIndex = 0;
            else if (item.mcq.answer === 'B') correctIndex = 1;
            else if (item.mcq.answer === 'C') correctIndex = 2;
            else if (item.mcq.answer === 'D') correctIndex = 3;
            else correctIndex = parseInt(item.mcq.correct || 0);

            let options = item.mcq.options.map(opt => opt.replace(/^[A-D]\)\s*/, ''));

            caBank.ca.push({
                question: item.mcq.question,
                options: options,
                correct: correctIndex,
                explanation: `[July 2026] ` + item.mcq.explanation,
                topicId: 'current_affairs',
                difficulty: 'medium',
                exam: 'ALL'
            });
            injected++;
        }
    });
}

fs.writeFileSync(caBankPath, JSON.stringify(caBank, null, 2), 'utf8');
console.log(`Injected ${injected} into ca_bank.json`);
