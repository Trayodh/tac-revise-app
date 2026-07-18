const fs = require('fs');

const newEntry = {
  "id": "jul-26-hydrogen-train",
  "topic": "Infrastructure & Technology",
  "text": "India launched its first **indigenous hydrogen-powered train** in July 2026, marking a significant step towards the 'Net Zero Carbon Emission by 2030' goal for Indian Railways.",
  "details": {
    "winner": "Indian Railways",
    "award": "First Hydrogen Train",
    "nationality": "Indian",
    "summary": "A green initiative operating on the Jind-Sonipat section under 'Hydrogen for Heritage'."
  },
  "mcq": {
    "question": "Which initiative encompasses the launch of India's first indigenous hydrogen-powered train in July 2026?",
    "options": [
      "A) Hydrogen for Heritage",
      "B) Green Railways Mission",
      "C) Vande Bharat Hydrogen",
      "D) Project Net Zero"
    ],
    "answer": "A",
    "explanation": "The 'Hydrogen for Heritage' initiative aims to operate hydrogen-powered trains on heritage and hilly routes to promote green transportation."
  }
};

const filePath = 'current_affairs_db.js';
let content = fs.readFileSync(filePath, 'utf8');

const searchStr = '"July 2026": [';
const insertIndex = content.indexOf(searchStr) + searchStr.length;

if (content.indexOf(searchStr) !== -1) {
  const newContent = content.substring(0, insertIndex) + '\n    ' + JSON.stringify(newEntry, null, 4).split('\n').join('\n    ') + ',' + content.substring(insertIndex);
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log("Successfully added hydrogen train to July 2026 in current_affairs_db.js");
} else {
  console.error("Could not find July 2026 array");
}

// Also check if data.js has it
const dataJsPath = 'data.js';
if (fs.existsSync(dataJsPath)) {
    let dataContent = fs.readFileSync(dataJsPath, 'utf8');
    const dataInsertIndex = dataContent.indexOf(searchStr) + searchStr.length;
    if (dataContent.indexOf(searchStr) !== -1) {
        const newDataContent = dataContent.substring(0, dataInsertIndex) + '\n    ' + JSON.stringify(newEntry, null, 4).split('\n').join('\n    ') + ',' + dataContent.substring(dataInsertIndex);
        fs.writeFileSync(dataJsPath, newDataContent, 'utf8');
        console.log("Successfully added hydrogen train to July 2026 in data.js");
    }
}
