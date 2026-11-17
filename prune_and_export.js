const fs = require('fs');
const path = require('path');
const vm = require('vm');
const xlsx = require('xlsx');

const DATA_JS_PATH = path.join(__dirname, 'data.js');

function loadDB() {
  const content = fs.readFileSync(DATA_JS_PATH, 'utf8');
  const startIndex = content.indexOf('const CBT_EXAMS_DATABASE');
  if (startIndex === -1) throw new Error('CBT_EXAMS_DATABASE not found');

  const beforeDB = content.substring(0, startIndex);
  const dbDeclaration = content.substring(startIndex);
  const executableCode = dbDeclaration.replace('const CBT_EXAMS_DATABASE', 'var CBT_EXAMS_DATABASE');

  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(executableCode, sandbox);

  return { db: sandbox.CBT_EXAMS_DATABASE, beforeDB };
}

function saveDB(db, beforeDB) {
  const json = JSON.stringify(db, null, 2);
  const newContent = beforeDB + 'const CBT_EXAMS_DATABASE = ' + json + ';\n';
  fs.writeFileSync(DATA_JS_PATH, newContent, 'utf8');
  console.log('Saved data.js with only GAT mocks!');
}

function pruneAndExport() {
  let { db, beforeDB } = loadDB();
  
  // 1. Filter out everything except nda-gat-new-*
  db = db.filter(exam => exam.id && exam.id.startsWith('nda-gat-new-'));
  
  console.log(`Kept ${db.length} NDA GAT papers. Deleted all others to prevent leakage.`);
  saveDB(db, beforeDB);

  // 2. Export to Excel
  const wb = xlsx.utils.book_new();
  
  // We'll create one sheet per exam or a combined sheet. A combined sheet is usually easier to read.
  const allQuestions = [];
  
  db.forEach(exam => {
      exam.questions.forEach((q, idx) => {
          let optionsStr = '';
          if (q.options && q.options.length > 0) {
              optionsStr = q.options.map((o, i) => `${String.fromCharCode(65+i)}. ${o}`).join('   |   ');
          }
          
          allQuestions.push({
              Exam_ID: exam.id,
              Title: exam.title,
              Question_Num: idx + 1,
              Topic: q.topicId || 'Unknown',
              Question: q.question,
              Options: optionsStr,
              Correct_Index: q.correct,
              Explanation: q.explanation || ''
          });
      });
  });

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
  
  const excelPath = path.join(__dirname, 'scratch', 'NDA_GAT_Papers.xlsx');
  xlsx.writeFile(wb, excelPath);
  console.log(`Successfully generated ${excelPath} with ${allQuestions.length} total questions.`);
}

pruneAndExport();
