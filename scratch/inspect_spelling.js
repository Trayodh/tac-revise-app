const fs = require('fs');

const bank = JSON.parse(fs.readFileSync('question_banks/structured_bank.json', 'utf8'));

let count = 0;
function scanObject(obj, path = '') {
  if (Array.isArray(obj)) {
    obj.forEach((q, idx) => {
      if (q && q.options) {
        const unique = new Set(q.options.map(o => o.trim().toLowerCase()));
        if (unique.size < q.options.length) {
          count++;
          console.log(`${path} [${idx}]: "${q.question.substring(0, 80)}"`);
          console.log(`  Options: ${JSON.stringify(q.options)}`);
        }
      }
    });
  } else if (typeof obj === 'object' && obj !== null) {
    for (const key of Object.keys(obj)) {
      scanObject(obj[key], path ? `${path}.${key}` : key);
    }
  }
}

scanObject(bank);
console.log(`Total questions with duplicate options in bank: ${count}`);
