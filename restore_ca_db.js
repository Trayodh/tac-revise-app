const fs = require('fs');

const oldContent = fs.readFileSync('old_data.js', 'utf8');
const startIdx = oldContent.indexOf('let CURRENT_AFFAIRS_DB =');
const endIdx = oldContent.indexOf('const CBT_EXAMS_DATABASE =');

if (startIdx === -1 || endIdx === -1) {
    console.error('Could not find CURRENT_AFFAIRS_DB in old_data.js');
    process.exit(1);
}

const caStr = oldContent.substring(startIdx, endIdx);

let currentContent = fs.readFileSync('data.js', 'utf8');

// If already there, do nothing
if (currentContent.includes('CURRENT_AFFAIRS_DB =')) {
    console.log('CURRENT_AFFAIRS_DB is already in data.js');
    process.exit(0);
}

// Prepend the CA DB
currentContent = caStr + '\n' + currentContent;

// Fix exports
currentContent = currentContent.replace(
    'window.CBT_EXAMS_DATABASE = CBT_EXAMS_DATABASE;',
    'window.CBT_EXAMS_DATABASE = CBT_EXAMS_DATABASE;\n    window.CURRENT_AFFAIRS_DB = CURRENT_AFFAIRS_DB;'
);

currentContent = currentContent.replace(
    'module.exports = { CBT_EXAMS_DATABASE, NOTES_DATABASE };',
    'module.exports = { CBT_EXAMS_DATABASE, NOTES_DATABASE, CURRENT_AFFAIRS_DB };'
);

fs.writeFileSync('data.js', currentContent);
console.log('Successfully restored CURRENT_AFFAIRS_DB to data.js');
