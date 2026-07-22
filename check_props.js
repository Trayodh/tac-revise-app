const fs = require('fs');
const vm = require('vm');
const content = fs.readFileSync('data.js', 'utf8').replace('const CBT_EXAMS_DATABASE', 'var CBT_EXAMS_DATABASE');
const sandbox = {};
sandbox.window = sandbox;
vm.createContext(sandbox);
vm.runInContext(content, sandbox);

console.log(sandbox.CBT_EXAMS_DATABASE[0].questions[0]);
