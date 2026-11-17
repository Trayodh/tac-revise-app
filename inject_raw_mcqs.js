const fs = require('fs');

const mcqFilePath = 'Pathfinder_Elite/extracted_raw_mcqs.json';
const bankFilePath = 'question_banks/pathfinder_bank.json';

if (!fs.existsSync(mcqFilePath)) {
  console.log("No extracted MCQs found.");
  process.exit(0);
}

const extractedMcqs = JSON.parse(fs.readFileSync(mcqFilePath, 'utf8'));
const bank = JSON.parse(fs.readFileSync(bankFilePath, 'utf8'));

let injectedCount = 0;

extractedMcqs.forEach(mcq => {
  // All these modules are General Studies topics
  mcq.source = "pathfinder_elite";
  mcq.subject = "gs";
  mcq.id = "pf_" + Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
  
  if (mcq.question && mcq.options && mcq.options.length > 0) {
    bank.gs.push(mcq);
    injectedCount++;
  }
});

fs.writeFileSync(bankFilePath, JSON.stringify(bank, null, 2));
console.log(`Successfully injected ${injectedCount} MCQs into pathfinder_bank.json (gs section).`);
