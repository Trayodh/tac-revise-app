const fs = require('fs');

function parseCsvRow(text) {
    let result = [];
    let cur = '';
    let inQuote = false;
    for (let i = 0; i < text.length; i++) {
        let c = text[i];
        if (c === '"') {
            // Handle escaped quotes ""
            if (i + 1 < text.length && text[i+1] === '"') {
                cur += '"';
                i++; // skip next quote
            } else {
                inQuote = !inQuote;
            }
        } else if (c === ',' && !inQuote) {
            result.push(cur);
            cur = '';
        } else {
            cur += c;
        }
    }
    result.push(cur);
    return result;
}

try {
    const csvContent = fs.readFileSync('scratch/cds_gs_review.csv', 'utf8');
    const originalQuestions = JSON.parse(fs.readFileSync('scratch/original_questions_map.json', 'utf8'));
    
    const newBank = { gs: [], english: [], maths: [], afcat: [] };
    const lines = csvContent.split('\n');
    let deletedCount = 0;
    
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;
        
        const cols = parseCsvRow(line);
        if (cols.length < 4) continue;
        
        const id = parseInt(cols[0], 10);
        if (!isNaN(id)) {
            const action = cols[1].trim().toUpperCase();
            
            if (action === 'DELETE' || action === 'D') {
                deletedCount++;
                continue;
            }
            
            const bucket = cols[2].trim().toLowerCase();
            const topic = cols[3].trim();
            
            // Retrieve original question and apply changes
            const q = originalQuestions[id];
            
            if (topic && topic !== 'unknown') {
                q.topicId = topic;
            }
            
            if (newBank[bucket]) {
                newBank[bucket].push(q);
            } else {
                // Failsafe
                if (!newBank.gs) newBank.gs = [];
                newBank.gs.push(q);
            }
        }
    }

    fs.writeFileSync('question_banks/cds_pyq_bank.json', JSON.stringify(newBank, null, 2));
    
    console.log(`\n=================================`);
    console.log(`✅ Successfully ingested CSV!`);
    console.log(`🗑️  Deleted: ${deletedCount} questions.`);
    console.log(`📦 New Counts - GS: ${newBank.gs.length} | English: ${newBank.english.length} | Maths: ${newBank.maths.length}`);
    console.log(`=================================\n`);
    
} catch (e) {
    console.error("Error ingesting CSV:", e);
}
