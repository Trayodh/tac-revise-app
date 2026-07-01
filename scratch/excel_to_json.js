const fs = require('fs');
const xlsx = require('xlsx');

try {
    const allMap = JSON.parse(fs.readFileSync('scratch/original_questions_map.json', 'utf8'));
    const wb = xlsx.readFile('scratch/all_exams_review.xlsx');

    const newFiles = {
        'cds_pyq_bank.json': { gs: [], english: [], maths: [], afcat: [] },
        'capf_pyq_bank.json': { gs: [], english: [], maths: [], afcat: [] },
        'upsc_master_bank.json': { gs: [] },
        'nda_gs_part1.json': [],
        'nda_gs_part2.json': []
    };
    
    // We also need to update structured_bank.json but ONLY for nda.maths
    const structData = JSON.parse(fs.readFileSync('question_banks/structured_bank.json', 'utf8'));
    if (structData.nda && structData.nda.maths) {
        // Clear them out so we can re-populate them from the Excel sheet
        for (const key of Object.keys(structData.nda.maths)) {
            structData.nda.maths[key] = [];
        }
    }

    let deletedCount = 0;
    let movedCount = 0;

    for (const sheetName of wb.SheetNames) {
        const ws = wb.Sheets[sheetName];
        const rows = xlsx.utils.sheet_to_json(ws);
        
        for (const row of rows) {
            if (row.ID === '' || row.ID === undefined) continue;
            const id = parseInt(row.ID, 10);
            if (isNaN(id)) continue;
            
            const action = (row.Action || '').toString().trim().toUpperCase();
            if (action === 'DELETE' || action === 'D') {
                deletedCount++;
                continue;
            }
            
            const mapEntry = allMap.find(m => m.globalId === id);
            if (!mapEntry) continue;
            
            const q = mapEntry.q;
            let topic = (row.Topic || '').toString().trim();
            if (topic && topic !== 'unknown') {
                q.topicId = topic;
            }
            
            if (mapEntry.sourceFile === 'structured_bank.json') {
                // Handle NDA Maths
                topic = topic.toLowerCase();
                if (!structData.nda.maths[topic]) {
                    structData.nda.maths[topic] = [];
                }
                structData.nda.maths[topic].push(q);
                continue;
            }
            
            let targetSubject = (row.TargetSubject || '').toString().trim().toLowerCase();
            const fileStruct = newFiles[mapEntry.sourceFile];
            
            if (Array.isArray(fileStruct)) {
                // Flat array like NDA - can't change buckets
                fileStruct.push(q);
            } else {
                // Bucket file like CDS/CAPF
                if (!fileStruct[targetSubject]) {
                    targetSubject = sheetName.toLowerCase();
                    if (!fileStruct[targetSubject]) targetSubject = mapEntry.originalBucket; // Fallback
                }
                if (targetSubject !== mapEntry.originalBucket) movedCount++;
                fileStruct[targetSubject].push(q);
            }
        }
    }

    // Write all back
    for (const [fileName, data] of Object.entries(newFiles)) {
        fs.writeFileSync(`question_banks/${fileName}`, JSON.stringify(data, null, 2));
    }
    fs.writeFileSync('question_banks/structured_bank.json', JSON.stringify(structData, null, 2));

    console.log(`\n=================================`);
    console.log(`✅ Successfully ingested Excel file!`);
    console.log(`🗑️  Deleted: ${deletedCount} total questions.`);
    console.log(`🚚 Moved Subjects: ${movedCount} questions.`);
    console.log(`=================================\n`);
} catch(e) {
    console.error("Error:", e);
}
