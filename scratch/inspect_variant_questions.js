const fs = require('fs');
const bank = JSON.parse(fs.readFileSync('question_banks/structured_bank.json', 'utf8'));

let matches = [];
function search(obj) {
    if (!obj) return;
    if (typeof obj === 'string') {
        if (obj.includes('BENEVOLENT')) {
            matches.push(obj);
        }
    } else if (Array.isArray(obj)) {
        obj.forEach((item) => search(item));
    } else if (typeof obj === 'object') {
        if (obj.question && obj.question.includes('BENEVOLENT')) {
            matches.push(obj);
        } else {
            for (const key in obj) {
                search(obj[key]);
            }
        }
    }
}
search(bank);
console.log(JSON.stringify(matches.slice(0, 5), null, 2));
