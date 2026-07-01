const fs = require('fs');
const vm = require('vm');

const dataContent = fs.readFileSync('data.js', 'utf8');
const dbStart = dataContent.indexOf('const CBT_EXAMS_DATABASE =');
if (dbStart === -1) {
    console.error("CBT_EXAMS_DATABASE not found in data.js");
    process.exit(1);
}

const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(dataContent + ';\nwindow.CBT_EXAMS_DATABASE = CBT_EXAMS_DATABASE;', sandbox);
const CBT_EXAMS_DATABASE = sandbox.window.CBT_EXAMS_DATABASE;

let updatedCount = 0;
CBT_EXAMS_DATABASE.forEach(exam => {
    if (exam.exam === 'NDA' && (exam.subject === 'GAT' || exam.subject === 'General Ability Test')) {
        exam.subject = 'General Ability Test (GAT)';
        updatedCount++;
        console.log(`Standardized subject for ${exam.id}`);
    }
});

if (updatedCount > 0) {
    const updatedCbtExamsStr = JSON.stringify(CBT_EXAMS_DATABASE, null, 2);
    const newContent = dataContent.substring(0, dbStart) + 'const CBT_EXAMS_DATABASE = ' + updatedCbtExamsStr + ';\n\n// End of File\n';
    fs.writeFileSync('data.js', newContent);
    console.log(`\nSUCCESS: Standardized ${updatedCount} exams to "General Ability Test (GAT)"`);
} else {
    console.log("No inconsistencies found.");
}
