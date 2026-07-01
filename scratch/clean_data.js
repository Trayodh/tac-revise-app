const fs = require('fs');

const file = 'data.js';
let content = fs.readFileSync(file, 'utf8');

const targetStr = 'id: "nda-math-mock-2"';
const endIndex = content.indexOf(targetStr);

if (endIndex > 0) {
  // Find the start of the object right before this
  const blockStart = ',\\n  {\\n    id: "nda-math-mock-2"';
  const lastCommaIndex = content.lastIndexOf(blockStart);
  
  if (lastCommaIndex > 0) {
    const newContent = content.substring(0, lastCommaIndex) + '\\n];\\n';
    fs.writeFileSync(file, newContent);
    console.log('Wiped generated mocks from data.js');
  } else {
    console.log('Could not find exact block start separator.');
  }
} else {
  console.log('No generated mocks found (or already wiped).');
}

if(fs.existsSync('scratch/generated_questions.json')) {
  fs.writeFileSync('scratch/generated_questions.json', JSON.stringify({}));
  console.log('Wiped generated_questions.json cache.');
}
