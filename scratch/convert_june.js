const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data.js');
let dataContent = fs.readFileSync(filePath, 'utf8');

// Find variable declaration via regex
const dbStartRegex = /let\s+CURRENT_AFFAIRS_DB\s*=/;
const dbStartMatch = dataContent.match(dbStartRegex);
if (!dbStartMatch) {
  console.error("Could not locate CURRENT_AFFAIRS_DB start in data.js");
  process.exit(1);
}
const dbStart = dbStartMatch.index;

const dbEndRegex = /const\s+CBT_EXAMS_DATABASE\s*=/;
const dbEndMatch = dataContent.match(dbEndRegex);
if (!dbEndMatch) {
  console.error("Could not locate CBT_EXAMS_DATABASE start in data.js");
  process.exit(1);
}
const dbEnd = dbEndMatch.index;

const dbDeclaration = dataContent.substring(dbStart, dbEnd);
const braceStart = dbDeclaration.indexOf('{');
const dbObjectStr = dbDeclaration.substring(braceStart);

// Clean up trailing semicolon or comment at the very end if any
const cleanDbObjectStr = dbObjectStr.substring(0, dbObjectStr.lastIndexOf('}') + 1);

// Evaluate as expression
const CURRENT_AFFAIRS_DB = eval('(' + cleanDbObjectStr + ')');

// Convert June 2026 entries
const juneItems = CURRENT_AFFAIRS_DB["June 2026"];
if (!juneItems) {
  console.error("June 2026 key not found in CURRENT_AFFAIRS_DB");
  process.exit(1);
}

juneItems.forEach(item => {
  if (item.details) {
    item.upscHighlights = [
      `Subject/Authority: ${item.details.winner}`,
      `Key Initiative/Event: ${item.details.award}`,
      `Location/Nationality: ${item.details.nationality}`,
      item.details.summary
    ];
    item.institutionalContext = item.details.winner;
    item.strategicImportance = item.details.summary;
    delete item.details;
  }
});

// Format the new declaration string
const newDbDecl = 'let CURRENT_AFFAIRS_DB = ' + JSON.stringify(CURRENT_AFFAIRS_DB, null, 2) + ';\n\n';

// Replace the old declaration in data.js
const updatedContent = dataContent.substring(0, dbStart) + newDbDecl + dataContent.substring(dbEnd);

fs.writeFileSync(filePath, updatedContent, 'utf8');
console.log("Successfully converted June 2026 current affairs to the new format in data.js!");
