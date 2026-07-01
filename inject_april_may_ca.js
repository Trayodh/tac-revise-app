const fs = require('fs');

const caDb = require('./ca_db_extracted.json');
const bankPath = 'question_banks/structured_bank.json';
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));

let injectedCount = 0;

['April 2026', 'May 2026'].forEach(month => {
    if (caDb[month]) {
        caDb[month].forEach(item => {
            if (item.mcq) {
                const q = {
                    question: item.mcq.question,
                    options: item.mcq.options,
                    correct: item.mcq.correct,
                    explanation: item.mcq.explanation,
                    topicId: 'current_affairs',
                    exam: 'ALL',
                    subject: 'General Knowledge'
                };
                
                // Inject into various CA banks
                if (bank.nda && bank.nda.gat && bank.nda.gat.current_affairs) {
                    bank.nda.gat.current_affairs.push(q);
                }
                if (bank.cds && bank.cds.gs && bank.cds.gs.current_affairs) {
                    bank.cds.gs.current_affairs.push(q);
                }
                if (bank.afcat && bank.afcat.general_awareness && bank.afcat.general_awareness.current_affairs) {
                    bank.afcat.general_awareness.current_affairs.push(q);
                }
                
                injectedCount++;
            }
        });
    }
});

fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2), 'utf8');
console.log(`Successfully injected ${injectedCount} questions for April and May into the structured bank.`);
