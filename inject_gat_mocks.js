const fs = require('fs');

let dataStr = fs.readFileSync('data.js', 'utf8');

const injectionStr = `
  {
    "id": "nda-gat-new-1",
    "exam": "NDA",
    "subject": "General Ability Test (GAT)",
    "title": "NDA GAT Official Mock 1 (AI extracted)",
    "duration": 150,
    "rules": {
      "correctMarks": 4.0,
      "incorrectMarks": -1.33
    },
    "questions": typeof NDA_GAT_MOCK_1 !== 'undefined' ? NDA_GAT_MOCK_1 : []
  },
`;

const insertMarker = 'const CBT_EXAMS_DATABASE = [';
const markerIndex = dataStr.indexOf(insertMarker);

if (markerIndex !== -1) {
    const insertPos = markerIndex + insertMarker.length;
    dataStr = dataStr.slice(0, insertPos) + injectionStr + dataStr.slice(insertPos);
    fs.writeFileSync('data.js', dataStr);
    console.log("Successfully injected GAT mock references into CBT_EXAMS_DATABASE");
} else {
    console.log("Failed to find CBT_EXAMS_DATABASE");
}
