const fs = require('fs');
const bank = JSON.parse(fs.readFileSync('question_banks/structured_bank.json', 'utf8'));

let matches = [];
function search(obj, path = '') {
    if (!obj) return;
    if (typeof obj === 'string') {
        if (obj.toLowerCase().includes('variant')) {
            const hasParentheses = /\(\s*Variant\s+\d+([\s\S]*?)\)/gi.test(obj);
            const isExplanationOrNormal = /invariant|variants of the same gene|variants of/i.test(obj);
            if (!hasParentheses && !isExplanationOrNormal) {
                matches.push({ path, val: obj });
            }
        }
    } else if (Array.isArray(obj)) {
        obj.forEach((item, idx) => search(item, `${path}[${idx}]`));
    } else if (typeof obj === 'object') {
        for (const key in obj) {
            search(obj[key], `${path}.${key}`);
        }
    }
}
search(bank);
console.log(JSON.stringify(matches, null, 2));
