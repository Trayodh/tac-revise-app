const fs = require('fs');

let content = fs.readFileSync('app.js', 'utf8');

const startIndex = content.indexOf('const CBT_EXAMS_DATABASE = [');
if (startIndex === -1) {
  console.error("Could not find CBT_EXAMS_DATABASE start");
  process.exit(1);
}

let initMockIndex = content.indexOf('function initMockExams()', startIndex);
let startBracket = startIndex + 'const CBT_EXAMS_DATABASE = '.length;

let arrayEndIndex = -1;
let brackets = 0;
let started = false;

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
  let exams;
  try {
    exams = eval('(' + arrayString + ')');
  } catch (e) {
    console.error("Eval failed", e);
    process.exit(1);
  }

  // Collect all unique questions to form a pool for the combined test
  let questionPool = [];
  let seen = new Set();
  
  exams.forEach(exam => {
    exam.questions.forEach(q => {
      if (!seen.has(q.question)) {
        seen.add(q.question);
        questionPool.push(q);
      }
    });
  });
  
  // Shuffle pool to ensure mixed subjects
  for (let i = questionPool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questionPool[i], questionPool[j]] = [questionPool[j], questionPool[i]];
  }

  // Generate 10 new AFCAT exams
  for(let i = 3; i <= 12; i++) {
    let mockQuestions = [];
    for(let j = 0; j < 100; j++) {
      let q = Object.assign({}, questionPool[j % questionPool.length]);
      mockQuestions.push(q);
    }
    
    exams.push({
      id: `afcat-combined-mock-${i}`,
      exam: "AFCAT",
      subject: "Combined",
      title: `AFCAT Combined Mock Test ${i}`,
      duration: 120,
      questionsCount: 100,
      rules: { correctMarks: 3.0, incorrectMarks: -1.0, examType: "AFCAT" },
      questions: mockQuestions
    });
  }

  let newArrayString = JSON.stringify(exams, null, 2);
  let newContent = content.substring(0, startBracket) + newArrayString + content.substring(arrayEndIndex + 1);

  fs.writeFileSync('app.js', newContent, 'utf8');
  console.log("Successfully injected 10 new AFCAT combined mock exams.");
} else {
  console.error("Could not find end of array");
  process.exit(1);
}
