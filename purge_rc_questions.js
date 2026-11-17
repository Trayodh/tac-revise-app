/**
 * purge_rc_questions.js
 * 
 * Removes all orphaned Reading Comprehension questions.
 * This includes:
 * 1. Completely dropping the 'reading_comprehension' bucket everywhere.
 * 2. Scanning all other buckets to remove any stragglers that mention 
 *    "the passage", "the author", "the writer", etc.
 */

const fs = require('fs');
const bank = JSON.parse(fs.readFileSync('question_banks/structured_bank.json', 'utf8'));

let droppedCount = 0;

const RC_PATTERNS = [
    /according to the passage/i,
    /author of the passage/i,
    /writer of the passage/i,
    /the writer is of the opinion/i,
    /the passage suggests/i,
    /based on the passage/i,
    /the author.*implies/i,
    /the author.*believes/i,
];

function isRCQuestion(q) {
    if (!q || !q.question) return false;
    const txt = q.question.toLowerCase();
    return RC_PATTERNS.some(p => p.test(txt));
}

// Recursively traverse the bank object and filter arrays
function traverseAndPurge(obj) {
    for (let key in obj) {
        if (Array.isArray(obj[key])) {
            // Drop the entire bucket if it's explicitly reading_comprehension
            if (key === 'reading_comprehension') {
                droppedCount += obj[key].length;
                obj[key] = []; // Empty the array
            } else {
                // Filter out any RC questions that leaked into other buckets
                const originalLength = obj[key].length;
                obj[key] = obj[key].filter(q => {
                    if (isRCQuestion(q)) {
                        console.log(`[RC DROP] ${q.question.substring(0, 80)}`);
                        return false;
                    }
                    return true;
                });
                droppedCount += (originalLength - obj[key].length);
            }
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
            traverseAndPurge(obj[key]);
        }
    }
}

traverseAndPurge(bank);

console.log('\n=== PURGE COMPLETE ===');
console.log(`Total orphaned RC questions dropped: ${droppedCount}`);

fs.writeFileSync('question_banks/structured_bank.json', JSON.stringify(bank, null, 2));
console.log('\nSaved structured_bank.json. Regenerating papers...');

require('child_process').execSync('node generate_all_papers.js', { stdio: 'inherit' });
