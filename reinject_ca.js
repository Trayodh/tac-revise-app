const fs = require('fs');

const caDb = require('./ca_db_extracted.json');
const bankPath = 'question_banks/structured_bank.json';
const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));

// Get the exact stems of the 16 questions to remove the old injected ones
const stemsToRemove = new Set();
['April 2026', 'May 2026'].forEach(month => {
    if (caDb[month]) {
        caDb[month].forEach(item => {
            if (item.mcq) stemsToRemove.add(item.mcq.question);
        });
    }
});

function removeOld(arr) {
    if (!arr) return;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i].question && stemsToRemove.has(arr[i].question)) {
            arr.splice(i, 1);
        }
    }
}

// Remove from everywhere
removeOld(bank.nda.gat.current_affairs);
removeOld(bank.cds.gs.current_affairs);
removeOld(bank.afcat.general_awareness.current_affairs);

let injectedCount = 0;

// Re-inject with explicit topicId and explanation
['April 2026', 'May 2026'].forEach(month => {
    const topicStr = 'current_affairs_' + month.split(' ')[0].toLowerCase();
    
    if (caDb[month]) {
        caDb[month].forEach(item => {
            if (item.mcq) {
                const q = {
                    question: item.mcq.question,
                    options: item.mcq.options,
                    correct: item.mcq.correct,
                    explanation: `[${month}] ` + item.mcq.explanation,
                    topicId: topicStr,
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
console.log(`Successfully re-injected ${injectedCount} questions for April and May with explicit labels.`);
