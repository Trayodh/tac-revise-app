const fs = require('fs');

function updateAugust() {
    const jsonPath = 'august_2026_ca_generated.json';
    const dbPath = 'current_affairs_db.js';
    
    if (!fs.existsSync(jsonPath) || !fs.existsSync(dbPath)) {
        console.log("Files not found");
        return;
    }
    
    const rawData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    
    const transformed = rawData.map((item, idx) => {
        return {
            id: `ca-august-2026-${String(idx).padStart(3, '0')}-new`,
            topic: item.topic,
            text: item.oneLineRevision,
            details: {
                summary: `### 🎯 What Happened\n${item.whatHappened}\n\n### 💡 Why It Matters\n${item.whyImportant}\n\n### 📌 Key Facts\n${item.examFact}\n\n### 🏛️ Static GK Connection\n${item.staticGkConnections.join('\n')}\n\n### ⚠️ Exam Trap\n${item.examTrap}`
            },
            upscHighlights: [item.category, item.priority]
        };
    });
    
    let content = fs.readFileSync(dbPath, 'utf8');
    
    // Find the August 2026 array in current_affairs_db.js
    const pattern = /("August 2026":\s*\[)([\s\S]*?)(\],\s*"September 2026":)/;
    
    if (pattern.test(content)) {
        console.log("Found August 2026 in DB");
        const match = content.match(pattern);
        let existingInner = match[2].trim();
        
        const jsonStr = JSON.stringify(transformed, null, 2);
        const innerJson = jsonStr.substring(jsonStr.indexOf('[') + 1, jsonStr.lastIndexOf(']')).trim();
        
        if (existingInner.length > 0 && existingInner !== "") {
            if (existingInner.endsWith(',')) existingInner = existingInner.slice(0, -1);
            existingInner += ",\n" + innerJson;
        } else {
            existingInner = innerJson;
        }
        
        content = content.replace(pattern, `$1\n${existingInner}\n$3`);
        fs.writeFileSync(dbPath, content, 'utf8');
        console.log("Successfully injected new August 2026 items.");
    } else {
        console.log("Could not find August 2026 pattern.");
    }
}

updateAugust();
