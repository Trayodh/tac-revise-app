const fs = require('fs');

const newsItem = {
    "id": "oct-2026-011",
    "topic": "Appointments",
    "text": "Air Marshal Ashutosh Dixit was appointed as the new Chief of the Air Staff (CAS) of the Indian Air Force, taking over the command of the world's fourth-largest air force.",
    "details": {
      "winner": "Air Marshal Ashutosh Dixit",
      "award": "Appointed as Chief of the Air Staff",
      "nationality": "India",
      "summary": "Air Marshal Ashutosh Dixit assumed command as the new Chief of the Air Staff, succeeding the previous chief."
    },
    "mcq": {
      "question": "Who was appointed as the new Chief of the Air Staff of the Indian Air Force in late 2026?",
      "options": ["Air Chief Marshal VR Chaudhari", "Air Marshal Ashutosh Dixit", "Air Marshal Amar Preet Singh", "Air Marshal Sandeep Singh"],
      "correct": 1,
      "explanation": "Air Marshal Ashutosh Dixit was appointed as the new Chief of the Air Staff."
    },
    "upscHighlights": ["Chief of the Air Staff (CAS)", "Indian Air Force Leadership", "Defence Appointments"],
    "strategicImportance": "The CAS is responsible for the operational readiness and modernization of the IAF amidst evolving regional security challenges."
};

function updateFile(filename) {
    if (!fs.existsSync(filename)) return;
    let content = fs.readFileSync(filename, 'utf8');
    
    // Look for October 2026 array end
    const pattern = /("October 2026":\s*\[)([\s\S]*?)(\]\s*\};?\s*$)/;
    if (pattern.test(content)) {
        console.log("Found existing October 2026 array at the end of " + filename);
        const match = content.match(pattern);
        let existingInner = match[2].trim();
        
        const jsonStr = JSON.stringify(newsItem, null, 2);
        
        let newInner = existingInner;
        if (newInner.length > 0 && newInner !== "") {
            if (newInner.endsWith(',')) {
                newInner = newInner.slice(0, -1);
            }
            newInner += ",\n" + jsonStr;
        } else {
            newInner = jsonStr;
        }
        
        content = content.replace(pattern, `$1\n${newInner}\n$3`);
        fs.writeFileSync(filename, content, 'utf8');
        console.log("Updated " + filename);
        return;
    }
    
    // Fallback if October 2026 is not the very last
    const pattern2 = /("October 2026":\s*\[)([\s\S]*?)(\],\s*"[A-Za-z]+ \d{4}":)/;
    if (pattern2.test(content)) {
        console.log("Found existing October 2026 array (with months after) in " + filename);
        const match = content.match(pattern2);
        let existingInner = match[2].trim();
        
        const jsonStr = JSON.stringify(newsItem, null, 2);
        
        let newInner = existingInner;
        if (newInner.length > 0 && newInner !== "") {
            if (newInner.endsWith(',')) newInner = newInner.slice(0, -1);
            newInner += ",\n" + jsonStr;
        } else {
            newInner = jsonStr;
        }
        
        content = content.replace(pattern2, `$1\n${newInner}\n$3`);
        fs.writeFileSync(filename, content, 'utf8');
        console.log("Updated " + filename);
        return;
    }

    console.log("Could not find October 2026 in " + filename);
}

['current_affairs_db.js', 'notes_data_exam_focused.js'].forEach(updateFile);
