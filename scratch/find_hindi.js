const fs = require('fs');

const data = JSON.parse(fs.readFileSync('question_banks/cds_pyq_bank.json', 'utf8'));
const hindiRegex = /[\u0900-\u097F]/;
const englishRegex = /[a-zA-Z]/;

let pureHindi = 0;
let bilingual = 0;

Object.values(data).forEach(arr => {
    if (Array.isArray(arr)) {
        arr.forEach(q => {
            if (q && hindiRegex.test(q.question)) {
                if (englishRegex.test(q.question)) {
                    bilingual++;
                    console.log(`\n--- BILINGUAL ---`);
                    console.log(`Q: ${q.question}`);
                } else {
                    pureHindi++;
                }
            }
        });
    }
});

console.log(`\nPure Hindi: ${pureHindi}`);
console.log(`Bilingual: ${bilingual}`);
