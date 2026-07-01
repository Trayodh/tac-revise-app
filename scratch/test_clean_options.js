const fs = require('fs');
const vm = require('vm');

let s = fs.readFileSync('data.js', 'utf8');
s = s.replace(/const CBT_EXAMS_DATABASE/g, 'var CBT_EXAMS_DATABASE');

const context = {};
vm.createContext(context);
vm.runInContext(s, context);
const exams = context.CBT_EXAMS_DATABASE;

function cleanOptionText(opt) {
  if (typeof opt !== 'string') return opt;
  let cleaned = opt;
  
  // 1. If there's a page number and header/footer preceded by text, strip it
  cleaned = cleaned.replace(/(?<=\S\s+)\d+\s+(?:GENERAL\s+(?:SCIENCE|STUDIES|ENGLISH|KNOWLEDGE|MAPS)|MATHEMATICS|CDS\s+Pathfinder|Pathfinder|PRACTICE\s+EXERCISE|ANSWERS\s+(?:Practice\s+Exercise|Check\s+Your|Complete\s+Exercise)|Questions\s+[fF]rom\s+CDS\s+Exam|PAPER\s+General\s+Studies|HINTS\s+AND\s+SOLUTIONS|PASSAGE\s+\d+|Sentence\s+Completion).*$/gi, '');
  
  // 2. Strip general/math headers without page numbers
  cleaned = cleaned.replace(/\s*(?:GENERAL\s+(?:SCIENCE|STUDIES|ENGLISH|KNOWLEDGE|MAPS)|MATHEMATICS|CDS\s+Pathfinder|Pathfinder|PRACTICE\s+EXERCISE|ANSWERS\s+(?:Practice\s+Exercise|Check\s+Your|Complete\s+Exercise)|Questions\s+[fF]rom\s+CDS\s+Exam|PAPER\s+General\s+Studies|HINTS\s+AND\s+SOLUTIONS|PASSAGE\s+\d+|Sentence\s+Completion).*$/gi, '');

  // 3. Strip trailing "PRACTICE EXERCISE"
  cleaned = cleaned.replace(/\s*PRACTICE\s+EXERCISE\s*$/gi, '');

  return cleaned.trim();
}

let count = 0;
for (const exam of exams) {
  for (let i = 0; i < exam.questions.length; i++) {
    const q = exam.questions[i];
    for (let j = 0; j < q.options.length; j++) {
      const opt = q.options[j];
      if (/\b(?:GENERAL\s+(?:SCIENCE|STUDIES|ENGLISH|KNOWLEDGE)|MATHEMATICS\s*>|PRACTICE\s+EXERCISE|ANSWERS\s+Practice|Questions\s+from\s+CDS)/i.test(opt)) {
        console.log(`\nOriginal: "${opt}"`);
        console.log(`Cleaned:  "${cleanOptionText(opt)}"`);
        count++;
      }
    }
  }
}
console.log(`\nTotal scanned matching: ${count}`);
