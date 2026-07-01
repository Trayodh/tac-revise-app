const fs = require('fs');
const xlsx = require('xlsx');

function applyReview() {
    console.log("Loading mapping and review data...");
    const map = JSON.parse(fs.readFileSync('scratch/complete_questions_map.json', 'utf8'));
    
    // We try CSV first. Since xlsx library can read CSVs, we'll use that.
    let sheet;
    try {
        const wb = xlsx.readFile('scratch/cds_review_granular.csv');
        sheet = xlsx.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
        console.log(`Loaded ${sheet.length} rows from CSV.`);
    } catch(e) {
        console.log("Could not load CSV, falling back to XLSX...");
        const wb = xlsx.readFile('scratch/cds_review_granular.xlsx');
        sheet = [];
        for (const sheetName of wb.SheetNames) {
            sheet.push(...xlsx.utils.sheet_to_json(wb.Sheets[sheetName]));
        }
        console.log(`Loaded ${sheet.length} rows from XLSX.`);
    }

    const filesToSave = new Set();
    const dataCache = {};
    let deletes = 0;
    let updates = 0;

    // Load all necessary raw files into memory
    for (const s of sheet) {
        const mapEntry = map[s.ID];
        if (!mapEntry) continue;
        const sf = mapEntry.sourceFile;
        if (!dataCache[sf]) {
            dataCache[sf] = JSON.parse(fs.readFileSync(`question_banks/${sf}`, 'utf8'));
            filesToSave.add(sf);
        }
    }

    // Process rows backward to safely splice arrays
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
            const parts = bucket ? bucket.split('.') : [];
            let current = data;
            for (let j = 0; j < parts.length; j++) {
                if (!current[parts[j]]) current[parts[j]] = [];
                if (j === parts.length - 1) {
                    targetArray = current[parts[j]];
                } else {
                    current = current[parts[j]];
                }
            }
            if (parts.length === 0) {
                targetArray = data; // fallback if data is array but bucket empty
            }
        }

        if (!targetArray || !Array.isArray(targetArray)) continue;

        // The ID matches exactly the globalId from the map, but wait, the targetArray might have had items deleted if we process sequentially?
        // Since we go backward, splicing shouldn't affect the indices of items EARLIER in the array (which correspond to LOWER IDs).
        // Wait, the map maps globalId -> q. Does the map store the array index? NO.
        // It's safer to find by question string.
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
