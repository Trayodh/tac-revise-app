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

  // Update duration to 120 for all exams
  exams.forEach(exam => {
    exam.duration = 120;
  });

  let newArrayString = JSON.stringify(exams, null, 2);
  let newContent = content.substring(0, startBracket) + newArrayString + content.substring(arrayEndIndex + 1);

  fs.writeFileSync('app.js', newContent, 'utf8');
  console.log("Successfully updated all durations to 120 minutes (2 hours).");
} else {
  console.error("Could not find end of array");
  process.exit(1);
}
