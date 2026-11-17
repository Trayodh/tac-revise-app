const fs = require('fs');
const vm = require('vm');
const content = fs.readFileSync('data.js', 'utf8').replace('const CBT_EXAMS_DATABASE', 'var CBT_EXAMS_DATABASE');
const sandbox = {};
sandbox.window = sandbox;
vm.createContext(sandbox);
vm.runInContext(content, sandbox);

let invalidQuestions = [];

sandbox.CBT_EXAMS_DATABASE.forEach(exam => {
    exam.questions.forEach((q, idx) => {
        if (typeof q.correct !== 'number' || q.correct < 0 || q.correct >= q.options.length) {
            invalidQuestions.push({ examTitle: exam.title, questionText: q.question, options: q.options, correct: q.correct });
        }
    });
});

console.log(JSON.stringify(invalidQuestions, null, 2));
