const fs = require('fs');
const vm = require('vm');

async function main() {
  console.log("=== Partial Merge: Injecting Completed Exams into data.js ===");
  
  const cachePath = 'scratch/generated_questions.json';
  if (!fs.existsSync(cachePath)) {
    console.log("Cache file not found!");
    return;
  }
  
  const cache = JSON.parse(fs.readFileSync(cachePath, 'utf8'));
  const dataContent = fs.readFileSync('data.js', 'utf8');
  
  const dbStart = dataContent.indexOf('const CBT_EXAMS_DATABASE =');
  if (dbStart === -1) {
    console.error("CBT_EXAMS_DATABASE not found in data.js");
    return;
  }
  
  // Robust extraction using VM
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(dataContent + ';\nwindow.CBT_EXAMS_DATABASE = CBT_EXAMS_DATABASE;', sandbox);
  const CBT_EXAMS_DATABASE = sandbox.window.CBT_EXAMS_DATABASE;

  let updatedCount = 0;
  let questionsMerged = 0;
  
  // Map the cache to CBT_EXAMS_DATABASE
  for (const [examId, questions] of Object.entries(cache)) {
    if (questions.length === 0) continue;
    
    // Check if it already exists
    let existingExam = CBT_EXAMS_DATABASE.find(e => e.id === examId);
    if (!existingExam) {
      // Parse examId like "nda-math-mock-2"
      const parts = examId.split('-');
      const examType = parts[0].toUpperCase();
      let subjectStr = parts[1];
      let mockNum = parseInt(parts[3]);
      
      let title = "";
      if (examType === "NDA" && subjectStr === "math") title = "NDA Mathematics";
      else if (examType === "CDS" && subjectStr === "math") title = "CDS Mathematics";
      else if (examType === "AFCAT" && subjectStr === "combined") title = "AFCAT (Combined)";
      else if (examType === "NDA" && subjectStr === "english") title = "NDA English";
      else if (examType === "CDS" && subjectStr === "english") title = "CDS English";
      else if (examType === "NDA" && subjectStr === "gat") title = "NDA GAT";
      else if (examType === "CDS" && subjectStr === "gs") title = "CDS General Studies";
      else if (examType === "CDS" && subjectStr === "gk") title = "CDS General Knowledge";
      else title = `${examType} ${subjectStr}`;
      
      existingExam = {
        id: examId,
        title: `${title} (Mock ${mockNum})`,
        exam: examType,
        year: "Mock Series",
        duration: examType === "AFCAT" ? 120 : (subjectStr.includes('math') ? 150 : 120),
        questionsCount: questions.length,
        questions: questions
      };
      CBT_EXAMS_DATABASE.push(existingExam);
      updatedCount++;
      questionsMerged += questions.length;
      console.log(`+ Created and Merged ${examId} (${questions.length} questions)`);
    } else {
      existingExam.questions = questions;
      existingExam.questionsCount = questions.length;
      updatedCount++;
      questionsMerged += questions.length;
      console.log(`~ Updated ${examId} (${questions.length} questions)`);
    }
  }

  const updatedCbtExamsStr = JSON.stringify(CBT_EXAMS_DATABASE, null, 2);
  const newContent = dataContent.substring(0, dbStart) + 'const CBT_EXAMS_DATABASE = ' + updatedCbtExamsStr + ';\n\n// End of File\n';
  
  fs.writeFileSync('data.js', newContent);
  console.log(`\nSUCCESS: Merged ${questionsMerged} questions across ${updatedCount} exams into data.js!`);
}

main();
