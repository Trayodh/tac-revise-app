const fs = require('fs');
const path = require('path');
const vm = require('vm');

const DATA_JS_PATH = path.join(__dirname, 'data.js');

function loadDB() {
  const content = fs.readFileSync(DATA_JS_PATH, 'utf8');
  const startIndex = content.indexOf('const CBT_EXAMS_DATABASE');
  if (startIndex === -1) throw new Error('CBT_EXAMS_DATABASE not found');

  const beforeDB = content.substring(0, startIndex);
  const dbDeclaration = content.substring(startIndex);
  const executableCode = dbDeclaration.replace('const CBT_EXAMS_DATABASE', 'var CBT_EXAMS_DATABASE');

  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(executableCode, sandbox);

  return { db: sandbox.CBT_EXAMS_DATABASE, beforeDB };
}

function saveDB(db, beforeDB) {
  const json = JSON.stringify(db, null, 2);
  const newContent = beforeDB + 'const CBT_EXAMS_DATABASE = ' + json + ';\n';
  fs.writeFileSync(DATA_JS_PATH, newContent, 'utf8');
  console.log('Saved data.js with GAT mock fixes!');
}

function fixGatMocks() {
  const { db, beforeDB } = loadDB();
  
  let fixedCount = 0;

  db.forEach(exam => {
    if (exam.id.startsWith('nda-gat-new-')) {
      exam.questions.forEach(q => {
        // Fix options length
        if (q.options && q.options.length < 4) {
            while (q.options.length < 4) {
                q.options.push("None of the above");
            }
            fixedCount++;
        }
        
        // Fix correct index
        if (typeof q.correct !== 'number' || q.correct < 0 || q.correct >= 4) {
            q.correct = 0;
            fixedCount++;
        }
      });
    }
  });

  console.log(`Applied ${fixedCount} structural fixes to GAT new mocks.`);
  saveDB(db, beforeDB);
}

fixGatMocks();
