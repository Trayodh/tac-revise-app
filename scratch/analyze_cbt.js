const fs = require('fs');

const dataContent = fs.readFileSync('data.js', 'utf8');

const dbStart = dataContent.indexOf('const CBT_EXAMS_DATABASE =');
if (dbStart === -1) {
  console.error("CBT_EXAMS_DATABASE not found!");
  process.exit(1);
}

// Find the first '['
let firstBracket = dataContent.indexOf('[', dbStart);
if (firstBracket === -1) {
  console.error("No opening bracket found!");
  process.exit(1);
}

let bracketCount = 0;
let arrayEndIndex = -1;
for (let j = firstBracket; j < dataContent.length; j++) {
  if (dataContent[j] === '[') {
    bracketCount++;
  } else if (dataContent[j] === ']') {
    bracketCount--;
    if (bracketCount === 0) {
      arrayEndIndex = j;
      break;
    }
  }
}

if (arrayEndIndex === -1) {
  console.error("Failed to find end of CBT_EXAMS_DATABASE array!");
  process.exit(1);
}

const cbtExamsStr = dataContent.substring(firstBracket, arrayEndIndex + 1);
const CBT_EXAMS_DATABASE = eval('(' + cbtExamsStr + ')');

console.log(`Loaded ${CBT_EXAMS_DATABASE.length} exams.`);
const examCounts = {};
CBT_EXAMS_DATABASE.forEach(exam => {
  const key = `${exam.exam} - ${exam.subject}`;
  if (!examCounts[key]) {
    examCounts[key] = [];
  }
  examCounts[key].push({
    id: exam.id,
    title: exam.title,
    questionsCount: exam.questions.length
  });
});

console.log("Exam summary:");
for (const [key, list] of Object.entries(examCounts)) {
  console.log(`\n=== ${key} (${list.length} exams) ===`);
  list.forEach(item => {
    console.log(`  - ${item.title} (${item.id}): ${item.questionsCount} questions`);
  });
}

// Check duplicates
const allQuestions = {};
let duplicateCount = 0;
CBT_EXAMS_DATABASE.forEach(exam => {
  exam.questions.forEach(q => {
    const text = q.question.trim().toLowerCase();
    if (allQuestions[text]) {
      allQuestions[text].push(exam.title);
      duplicateCount++;
    } else {
      allQuestions[text] = [text];
    }
  });
});

console.log(`\nTotal questions: ${CBT_EXAMS_DATABASE.reduce((acc, e) => acc + e.questions.length, 0)}`);
console.log(`Unique questions: ${Object.keys(allQuestions).length}`);
console.log(`Duplicate question references: ${duplicateCount}`);
