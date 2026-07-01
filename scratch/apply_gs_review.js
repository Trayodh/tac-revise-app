const fs = require('fs');
const xlsx = require('xlsx');

function applyReview() {
    console.log("Loading mapping and review data...");
    const map = JSON.parse(fs.readFileSync('scratch/original_questions_map.json', 'utf8'));
    const wb = xlsx.readFile('scratch/cds_review_all_v2.xlsx');
    const sheet = xlsx.utils.sheet_to_json(wb.Sheets['GS']);

    const filesToSave = new Set();
    const dataCache = {};

    console.log(`Processing ${sheet.length} rows from GS sheet...`);
    let deletes = 0;
    let updates = 0;

    // Load all necessary files into dataCache
    for (const s of sheet) {
        const mapEntry = map[s.ID];
        if (!mapEntry) continue;
        const sf = mapEntry.sourceFile;
        if (sf === 'structured_bank.json') continue; // Shouldn't happen for GS
        if (!dataCache[sf]) {
            dataCache[sf] = JSON.parse(fs.readFileSync(`question_banks/${sf}`, 'utf8'));
            filesToSave.add(sf);
        }
    }

    // Process backwards to safely splice
    for (let i = sheet.length - 1; i >= 0; i--) {
        const row = sheet[i];
        const mapEntry = map[row.ID];
        if (!mapEntry) continue;

        const sourceFile = mapEntry.sourceFile;
        const bucket = mapEntry.originalBucket;
        let data = dataCache[sourceFile];

        if (!data) continue;

        let targetArray;
        if (Array.isArray(data)) {
            targetArray = data;
        } else {
            const parts = bucket.split('.');
            let current = data;
            for (let j = 0; j < parts.length; j++) {
                if (j === parts.length - 1) {
                    targetArray = current[parts[j]];
                } else {
                    current = current[parts[j]];
                }
            }
        }

        if (!targetArray || !Array.isArray(targetArray)) continue;

        // Find question by exact text match
        const qIndex = targetArray.findIndex(q => q.question === row.Question);
        if (qIndex === -1) continue;

        const action = (row.Action || '').toString().toUpperCase();
        if (action === 'DELETE') {
            targetArray.splice(qIndex, 1);
            deletes++;
        } else if (action === 'KEEP') {
            let examTarget = (row.Exam || '').toString().toUpperCase();
            if (examTarget === 'CSE') examTarget = 'CDS'; // default CSE to CDS
            if (examTarget && targetArray[qIndex].exam !== examTarget) {
                targetArray[qIndex].exam = examTarget;
                updates++;
            }
        }
    }

    console.log(`Applied ${deletes} deletions and ${updates} exam updates.`);

    for (const sf of filesToSave) {
        fs.writeFileSync(`question_banks/${sf}`, JSON.stringify(dataCache[sf], null, 2));
        console.log(`Saved updated ${sf}`);
    }
}

applyReview();
