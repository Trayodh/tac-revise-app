const fs = require('fs');

let content = fs.readFileSync('app.js', 'utf8');

const startIndex = content.indexOf('const CBT_EXAMS_DATABASE = [');
if (startIndex === -1) {
  console.error("Could not find CBT_EXAMS_DATABASE start");
  process.exit(1);
}

let initMockIndex = content.indexOf('function initMockExams()', startIndex);
if (initMockIndex === -1) {
  // Maybe it's `function setupMockExams()` or something else. Let's find `];` after the array instead by counting brackets.
  let brackets = 0;
  let started = false;
  let arrayEndIndex = -1;
  
  // Start from the `[`
  let startBracket = startIndex + 'const CBT_EXAMS_DATABASE = '.length;
  for (let i = startBracket; i < content.length; i++) {
    if (content[i] === '[') {
      brackets++;
      started = true;
    } else if (content[i] === ']') {
      brackets--;
    }
    
    if (started && brackets === 0) {
      arrayEndIndex = i;
      break;
    }
  }
  
  if (arrayEndIndex !== -1) {
    let arrayString = content.substring(startBracket, arrayEndIndex + 1);
    processExams(arrayString, startBracket, arrayEndIndex);
  } else {
    console.error("Could not find end of array");
    process.exit(1);
  }
} else {
  let arrayEndIndex = content.lastIndexOf('];', initMockIndex);
  let startBracket = startIndex + 'const CBT_EXAMS_DATABASE = '.length;
  let arrayString = content.substring(startBracket, arrayEndIndex + 1);
  processExams(arrayString, startBracket, arrayEndIndex);
}


function processExams(arrayString, startBracket, arrayEndIndex) {
  let exams;
  try {
    exams = eval('(' + arrayString + ')');
  } catch (e) {
    console.error("Eval failed", e);
    process.exit(1);
  }

  exams.forEach(exam => {
    let targetCount = 120; // Default for GS/GAT/English
    
    if (exam.exam === "AFCAT") {
      targetCount = 100;
    } else if (exam.subject && exam.subject.toLowerCase().includes("math")) {
      targetCount = 100;
    }
    
    exam.questionsCount = targetCount;
    
    const originalQuestions = exam.questions;
    if (!originalQuestions || originalQuestions.length === 0) return;
    
    let newQuestions = [];
    for (let i = 0; i < targetCount; i++) {
      let q = Object.assign({}, originalQuestions[i % originalQuestions.length]);
      newQuestions.push(q);
    }
    
    exam.questions = newQuestions;
  });

  let newArrayString = JSON.stringify(exams, null, 2);
  let newContent = content.substring(0, startBracket) + newArrayString + content.substring(arrayEndIndex + 1);

  fs.writeFileSync('app.js', newContent, 'utf8');
  console.log("Successfully expanded mock exams.");
}
