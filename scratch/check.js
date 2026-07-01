const fs = require('fs');
function summarize(file) {
  try {
    const data = JSON.parse(fs.readFileSync('./question_banks/' + file, 'utf8'));
    if (Array.isArray(data)) return `Array(${data.length})`;
    return Object.keys(data).map(k => `${k}: ${Array.isArray(data[k]) ? data[k].length : typeof data[k]}`).join(', ');
  } catch(e) { return e.message; }
}
console.log('CAPF:', summarize('capf_pyq_bank.json'));
console.log('UPSC (CSE):', summarize('upsc_master_bank.json'));
