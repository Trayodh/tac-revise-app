const fs = require('fs');

let dataStr = fs.readFileSync('data.js', 'utf8');

const injectionStr = `
  {
    "id": "nda-math-new-1",
    "exam": "NDA",
    "subject": "Mathematics",
    "title": "NDA Mathematics Official Mock 1 (AI extracted)",
    "duration": 150,
    "rules": {
      "correctMarks": 2.5,
      "incorrectMarks": -0.83
    },
    "questions": typeof window !== 'undefined' ? window.NDA_MATH_MOCK_1 : []
  },
  {
    "id": "nda-math-new-2",
    "exam": "NDA",
    "subject": "Mathematics",
    "title": "NDA Mathematics Official Mock 2 (AI extracted)",
    "duration": 150,
    "rules": {
      "correctMarks": 2.5,
      "incorrectMarks": -0.83
    },
    "questions": typeof window !== 'undefined' ? window.NDA_MATH_MOCK_2 : []
  },
`;

const insertMarker = 'const CBT_EXAMS_DATABASE = [';
const markerIndex = dataStr.indexOf(insertMarker);

if (markerIndex !== -1) {
    const insertPos = markerIndex + insertMarker.length;
    dataStr = dataStr.slice(0, insertPos) + injectionStr + dataStr.slice(insertPos);
    fs.writeFileSync('data.js', dataStr);
    console.log("Successfully injected mock references into CBT_EXAMS_DATABASE");
} else {
    console.log("Failed to find CBT_EXAMS_DATABASE");
}
