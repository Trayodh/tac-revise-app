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
if(afcat.length > 0) {
  console.log("EXAM 1:", afcat[0].title);
  console.log("First question:", afcat[0].questions[0].question);
} else {
  console.log("No AFCAT exams found!");
}
