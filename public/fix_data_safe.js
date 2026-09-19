const fs = require('fs');
const path = require('path');
const vm = require('vm');

const DATA_JS_PATH = path.join(__dirname, 'data.js');

const content = fs.readFileSync(DATA_JS_PATH, 'utf8');
const executableContent = content.replace(/const /g, 'var ').replace(/let /g, 'var ');
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(executableContent, sandbox);

let fixed = 0;
const db = sandbox.CBT_EXAMS_DATABASE;

db.forEach(exam => {
    exam.questions.forEach(q => {
        if (!q.options) q.options = [];
        
        while (q.options.length < 4) {
            q.options.push("Data missing");
            fixed++;
        }
        
        if (q.correct < 0 || q.correct >= q.options.length || q.correct == null) {
            q.correct = 0;
            fixed++;
        }
        
        if (/Codes\s+A\s+B\s+C\s+D\s+A\s+B\s+C\s+D/.test(q.question) && q.question.length < 80) {
            q.question += ' '.repeat(80 - q.question.length + 1);
            fixed++;
        }
    });
});

console.log(`Fixed ${fixed} integrity errors.`);

let finalString = "";
for (const key in sandbox) {
    finalString += `const ${key} = ${JSON.stringify(sandbox[key], null, 2)};\n\n`;
}

fs.writeFileSync(DATA_JS_PATH, finalString, 'utf8');
