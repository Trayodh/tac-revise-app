const fs = require('fs');

const caDbPath = './ca_db_extracted.json';
const caBankPath = './question_banks/ca_bank.json';

const caDb = JSON.parse(fs.readFileSync(caDbPath, 'utf8'));
const caBank = JSON.parse(fs.readFileSync(caBankPath, 'utf8'));

const existingStems = new Set(caBank.ca.map(q => q.question));

let injected = 0;
['April 2026', 'May 2026'].forEach(month => {
    if (caDb[month]) {
        caDb[month].forEach(item => {
            if (item.mcq && !existingStems.has(item.mcq.question)) {
                caBank.ca.push({
                    question: item.mcq.question,
                    options: item.mcq.options,
                    correct: item.mcq.correct,
                    explanation: `[${month}] ` + item.mcq.explanation,
                    topicId: 'current_affairs',
                    difficulty: 'medium',
                    exam: 'ALL'
                });
                injected++;
            }
        });
    }
});

fs.writeFileSync(caBankPath, JSON.stringify(caBank, null, 2), 'utf8');
console.log(`Injected ${injected} into ca_bank.json`);
