const fs = require('fs');
const path = require('path');
const vm = require('vm');
const xlsx = require('xlsx');

const DATA_JS_PATH = path.join(__dirname, 'data.js');

function restoreAndExport() {
  const content = fs.readFileSync(DATA_JS_PATH, 'utf8');
  const startIndex = content.indexOf('const CBT_EXAMS_DATABASE');
  if (startIndex === -1) throw new Error('CBT_EXAMS_DATABASE not found');

  const beforeDB = content.substring(0, startIndex);
  
  // 1. Rebuild CBT_EXAMS_DATABASE string without duplicates, mapping to the variables
  let newDBStr = "const CBT_EXAMS_DATABASE = [\n";
  for (let i = 1; i <= 8; i++) {
     newDBStr += `  {
    "id": "nda-gat-new-${i}",
    "exam": "NDA",
    "subject": "General Ability Test (GAT)",
    "title": "NDA GAT Official Mock ${i} (AI extracted)",
    "duration": 150,
    "rules": { "correctMarks": 4.0, "incorrectMarks": -1.33 },
    "questions": typeof NDA_GAT_MOCK_${i} !== 'undefined' ? NDA_GAT_MOCK_${i} : []
  }`;
     if (i < 8) newDBStr += ",\n";
     else newDBStr += "\n";
  }
  newDBStr += "];\n";

  fs.writeFileSync(DATA_JS_PATH, beforeDB + newDBStr, 'utf8');
  console.log('Restored data.js to hold strictly the NDA GAT mocks mapping to their variables.');

  // 2. Export to Excel
  const sandbox = {};
  vm.createContext(sandbox);
  // We run beforeDB so sandbox gets populated with NDA_GAT_MOCK_1, etc.
  try {
      vm.runInContext(beforeDB, sandbox);
  } catch(e) {
      console.error("Error evaluating beforeDB:", e);
  }

  const wb = xlsx.utils.book_new();
  const allQuestions = [];

  for (let i = 1; i <= 8; i++) {
      const mockData = sandbox[`NDA_GAT_MOCK_${i}`];
      if (!mockData || mockData.length === 0) continue;
      
      const examTitle = `NDA GAT Official Mock ${i} (AI extracted)`;
      const examId = `nda-gat-new-${i}`;

      mockData.forEach((q, idx) => {
          let optionsStr = '';
          if (q.options && q.options.length > 0) {
              optionsStr = q.options.map((o, i) => `${String.fromCharCode(65+i)}. ${o}`).join('   |   ');
          }
          
          allQuestions.push({
              Exam_ID: examId,
              Title: examTitle,
              Question_Num: idx + 1,
              Topic: q.topicId || 'Unknown',
              Question: q.question,
              Options: optionsStr,
              Correct_Index: q.correct,
              Explanation: q.explanation || ''
          });
      });
  }

  const ws = xlsx.utils.json_to_sheet(allQuestions);
  const colWidths = [
      { wch: 15 }, // Exam_ID
      { wch: 35 }, // Title
      { wch: 15 }, // Q Num
      { wch: 15 }, // Topic
      { wch: 80 }, // Question
      { wch: 60 }, // Options
      { wch: 15 }, // Correct
      { wch: 60 }  // Explanation
  ];
  ws['!cols'] = colWidths;
  
  xlsx.utils.book_append_sheet(wb, ws, "GAT_Mocks");
  
  const excelPath = path.join(__dirname, 'scratch', 'NDA_GAT_Papers_Final.xlsx');
  xlsx.writeFile(wb, excelPath);
  console.log(`Successfully generated ${excelPath} with ${allQuestions.length} total questions.`);
}

restoreAndExport();
