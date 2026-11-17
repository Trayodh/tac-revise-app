const fs = require('fs');
const bankPath = 'question_banks/structured_bank.json';
let bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));

let fixedCount = 0;

function traverse(node, currentTopic) {
    if (Array.isArray(node)) {
        node.forEach(q => {
            if (q.question && q.options) {
                // If it's something useless like 'mixed' or 'general_knowledge' or missing, update it
                if (!q.topicId || q.topicId === 'mixed' || q.topicId === 'general_knowledge' || q.topicId === 'Unknown') {
                    q.topicId = currentTopic;
                    fixedCount++;
                }
            }
        });
    } else if (typeof node === 'object' && node !== null) {
        for (const [key, value] of Object.entries(node)) {
            traverse(value, key);
        }
    }
}

// Fix NDA GAT and CDS GS specifically, or just traverse the whole thing
traverse(bank, 'Unknown');

fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2), 'utf8');
console.log(`Fixed ${fixedCount} topic IDs in structured_bank.json`);
