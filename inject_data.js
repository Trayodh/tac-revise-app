const fs = require('fs');

const dataJsPath = 'data.js';
let content = fs.readFileSync(dataJsPath, 'utf8');

const newSyllabus = JSON.parse(fs.readFileSync('new_syllabus_db.json', 'utf8'));

// We need to replace the content of const NOTES_DATABASE = { ... };
const startIndex = content.indexOf('const NOTES_DATABASE = {');
if (startIndex === -1) {
    console.error("Could not find NOTES_DATABASE in data.js");
    process.exit(1);
}

// Find the end of NOTES_DATABASE object declaration
// The file ends with:
// let CURRENT_AFFAIRS_DB = {};
// So we can find 'let CURRENT_AFFAIRS_DB' and go backwards.
const endBoundary = content.indexOf('let CURRENT_AFFAIRS_DB');
if (endBoundary === -1) {
    console.error("Could not find CURRENT_AFFAIRS_DB in data.js");
    process.exit(1);
}

// The actual end of NOTES_DATABASE is the semicolon before let CURRENT_AFFAIRS_DB
let endIndex = content.lastIndexOf('};', endBoundary) + 1;

if (endIndex === 0 || endIndex < startIndex) {
    console.error("Could not determine end of NOTES_DATABASE");
    process.exit(1);
}

// Generate the new string
const newDbString = 'const NOTES_DATABASE = ' + JSON.stringify(newSyllabus, null, 2) + ';';

// Replace
const newContent = content.substring(0, startIndex) + newDbString + '\n\n' + content.substring(endBoundary);

fs.writeFileSync(dataJsPath, newContent, 'utf8');
console.log("Successfully updated data.js with the new syllabus mapping!");
