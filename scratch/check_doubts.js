const fs = require('fs');
const doubts = JSON.parse(fs.readFileSync('doubts.json', 'utf8'));

const dupes = doubts.filter(d => d.type === 'DUPE_OPTIONS');
console.log('Total DUPE_OPTIONS doubts:', dupes.length);
dupes.forEach((d, i) => {
  console.log(`\n${i+1}. Exam: ${d.exam}, Q${d.qNum}`);
  console.log(`Stem: "${d.q}"`);
  console.log('Options:', d.options);
  console.log('Correct index:', d.correct);
});
