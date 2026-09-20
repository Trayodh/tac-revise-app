const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');

// Import the database
const { CBT_EXAMS_DATABASE } = require('./data.js');

function exportNDAGAT() {
  if (!CBT_EXAMS_DATABASE) {
    console.error("Failed to load CBT_EXAMS_DATABASE from data.js");
    return;
  }

  // Filter out NDA GAT papers
  const ndaGatPapers = CBT_EXAMS_DATABASE.filter(exam => exam.id && exam.id.startsWith('nda-gat-'));
  console.log(`Found ${ndaGatPapers.length} NDA GAT papers to export.`);

  // Prepare questions for Excel
  const allQuestions = [];
  
  ndaGatPapers.forEach(exam => {
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
              Keep_Delete: 'Keep',
              Question: q.question,
              Options: optionsStr,
              Correct_Index: q.correct !== undefined ? q.correct : '',
              Explanation: q.explanation || ''
          });
      });
  });

  if (allQuestions.length === 0) {
      console.log("No questions found to export.");
      return;
  }

  const wb = xlsx.utils.book_new();
  const ws = xlsx.utils.json_to_sheet(allQuestions);
  
  const colWidths = [
      { wch: 15 }, // Exam_ID
      { wch: 35 }, // Title
      { wch: 15 }, // Q Num
      { wch: 15 }, // Topic
      { wch: 15 }, // Keep_Delete
      { wch: 80 }, // Question
      { wch: 60 }, // Options
      { wch: 15 }, // Correct
      { wch: 60 }  // Explanation
  ];
  ws['!cols'] = colWidths;
  
  xlsx.utils.book_append_sheet(wb, ws, "GAT_Mocks");
  
  const excelPath = path.join(__dirname, 'scratch', 'NDA_GAT_Papers_v3.xlsx');
  
  // Ensure the scratch directory exists
  if (!fs.existsSync(path.join(__dirname, 'scratch'))) {
      fs.mkdirSync(path.join(__dirname, 'scratch'));
  }
  
  xlsx.writeFile(wb, excelPath);
  console.log(`Successfully generated ${excelPath} with ${allQuestions.length} total questions.`);
}

exportNDAGAT();
