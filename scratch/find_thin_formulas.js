const fs = require('fs');

const src = fs.readFileSync('data.js', 'utf8');

// Find formulas fields that are very short (likely placeholder)
const formulaRx = /id:\s*['"]([^'"]+)['"][\s\S]{1,2000}?formulas:\s*[`'"]([^`'"]{0,80})[`'"]/g;
let m;
const thin = [];
while ((m = formulaRx.exec(src)) !== null) {
  const id = m[1];
  const val = m[2].trim();
  if (val.length < 50) {
    thin.push({ id, val });
  }
}

console.log('Topics with thin/placeholder formulas (<50 chars):');
thin.forEach(t => console.log(' -', t.id, '|', JSON.stringify(t.val)));
console.log('Total:', thin.length);
