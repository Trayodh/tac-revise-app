/**
 * strip_exam_tags.js
 * 
 * Removes trailing exam tags like "e 2014 I", "2013(II)", "e 2013(I), 16 (I)" 
 * that the PDF scraper accidentally appended to the end of 2,000+ questions.
 */

const fs = require('fs');
const bank = JSON.parse(fs.readFileSync('question_banks/structured_bank.json', 'utf8'));

// Regex to catch one or more exam tags at the end of the string
const TAG_REGEX = /(?:\s*e?\s*(?:20)?\d{2}\s*\(?[IV]+\)?[\s,]*)+$/i;

let strippedCount = 0;

function traverseAndStrip(obj) {
    for (let key in obj) {
        if (Array.isArray(obj[key])) {
            obj[key].forEach(q => {
                if (!q || !q.question) return;
                
                const original = q.question;
                const stripped = original.replace(TAG_REGEX, '');
                
                if (original !== stripped) {
                    q.question = stripped;
                    strippedCount++;
                }
            });
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
            traverseAndStrip(obj[key]);
        }
    }
}

traverseAndStrip(bank);

console.log('\n=== STRIP COMPLETE ===');
console.log(`Total questions cleaned: ${strippedCount}`);

fs.writeFileSync('question_banks/structured_bank.json', JSON.stringify(bank, null, 2));
console.log('\nSaved structured_bank.json. Regenerating papers...');

require('child_process').execSync('node generate_all_papers.js', { stdio: 'inherit' });
