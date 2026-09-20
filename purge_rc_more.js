/**
 * purge_rc_more.js
 * 
 * Cleans up options that have trailing tags like "PAPER II English", 
 * "34 CDS Solved Paper", "2014 (I)", etc.
 * 
 * Also drops additional orphaned reading comprehension questions
 * using "according to the author", "in the passage" etc.
 */

const fs = require('fs');
const bank = JSON.parse(fs.readFileSync('question_banks/structured_bank.json', 'utf8'));

// Catches: 
// - "34 CDS Solved Paper"
// - "PAPER II English"
// - "e 2014 I"
// - "2013 (I)"
const TAG_REGEX = /(?:(?:[\s,]*\d*\s*(?:CDS|NDA)\s*Solved\s*Paper\s*)|(?:[\s,]*PAPER\s*[IV]+\s*(?:English|Maths|GS)?\s*)|(?:[\s,]*e?\s*(?:20)?\d{2}\s*\(?[IV]+\)?\s*))+$/i;

let rcCount = 0;
let tagCount = 0;

function traverse(obj) {
    for (let key in obj) {
        if (Array.isArray(obj[key])) {
            const originalLen = obj[key].length;
            obj[key] = obj[key].filter(q => {
                if (!q || !q.question) return false;
                
                // Drop RC
                const txt = q.question.toLowerCase();
                if (/according to the author|according to the writer|in the passage/i.test(txt)) {
                    rcCount++;
                    return false;
                }
                
                // Clean options
                if (q.options) {
                    q.options = q.options.map(o => {
                        let stripped = o.replace(TAG_REGEX, '').trim();
                        // Also remove trailing commas
                        stripped = stripped.replace(/,+$/, '').trim();
                        if (stripped !== o.trim()) {
                            tagCount++;
                        }
                        return stripped;
                    });
                }
                
                // Clean question again
                const strippedQ = q.question.replace(TAG_REGEX, '').trim();
                if (strippedQ !== q.question.trim()) {
                    q.question = strippedQ;
                    tagCount++;
                }

                return true;
            });
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
            traverse(obj[key]);
        }
    }
}

traverse(bank);

console.log('\n=== DEEP CLEAN COMPLETE ===');
console.log('Additional RC dropped: ' + rcCount);
console.log('Tags stripped from options/questions: ' + tagCount);

fs.writeFileSync('question_banks/structured_bank.json', JSON.stringify(bank, null, 2));
console.log('\nSaved structured_bank.json. Regenerating papers...');

require('child_process').execSync('node generate_all_papers.js', { stdio: 'inherit' });
