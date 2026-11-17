const fs = require('fs');

let content = fs.readFileSync('app.js', 'utf8');

let startIndex = content.indexOf('const CBT_EXAMS_DATABASE = [');
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

let arrayString = content.substring(startBracket, arrayEndIndex + 1);
let exams = eval('(' + arrayString + ')');

let afcat = exams.filter(e => e.exam === 'AFCAT');
console.log(`Found ${afcat.length} AFCAT exams`);
if(afcat.length > 0) {
  console.log(`Questions count for first AFCAT: ${afcat[0].questions.length}`);
}
