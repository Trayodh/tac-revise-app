const fs = require('fs');

function main() {
    console.log("=== Merging NDA GAT Extracted Questions ===");

    const extractedPath = 'question_banks/nda_gat_extracted_temp.json';
    const bankPath = 'question_banks/structured_bank.json';

    if (!fs.existsSync(extractedPath)) {
        console.error(`Cannot find ${extractedPath}`);
        return;
    }

    if (!fs.existsSync(bankPath)) {
        console.error(`Cannot find ${bankPath}`);
        return;
    }

    let extractedData = JSON.parse(fs.readFileSync(extractedPath, 'utf8'));
    let bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));

    // Ensure nda and nda.gat exist
    if (!bank.nda) bank.nda = {};
    if (!bank.nda.gat) bank.nda.gat = {};

    let addCount = 0;
    let duplicateCount = 0;
    let invalidCount = 0;

    for (const q of extractedData) {
        if (!q || !q.question || !q.options || !q.subject) {
            invalidCount++;
            continue;
        }

        let subj = q.subject.toLowerCase().trim();
        // Fallback for misclassifications
        if (subj === 'general_knowledge' || subj === 'gk') {
            subj = 'current_affairs'; // Put unknown GK in current affairs to be safe
        }

        if (!bank.nda.gat[subj]) {
            bank.nda.gat[subj] = [];
        }

        // Deduplication by checking question string similarity
        const existingQs = bank.nda.gat[subj];
        const newQText = q.question.toLowerCase().replace(/[^a-z0-9]/g, '');
        
        let isDuplicate = false;
        for (const eq of existingQs) {
            if (eq && eq.question) {
                const eqText = eq.question.toLowerCase().replace(/[^a-z0-9]/g, '');
                if (newQText === eqText) {
                    isDuplicate = true;
                    break;
                }
            }
        }

        if (isDuplicate) {
            duplicateCount++;
        } else {
            // Give it an ID if it doesn't have one
            if (!q.id) {
                q.id = `nda-gat-${subj}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
            }
            bank.nda.gat[subj].push(q);
            addCount++;
        }
    }

    fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2), 'utf8');

    console.log(`\nMerge Complete!`);
    console.log(`- New questions added: ${addCount}`);
    console.log(`- Duplicates skipped: ${duplicateCount}`);
    console.log(`- Invalid questions skipped: ${invalidCount}`);
    
    // Print new totals
    console.log(`\nNew NDA GAT Category Totals:`);
    let total = 0;
    for (const key of Object.keys(bank.nda.gat)) {
        let len = 0;
        if (Array.isArray(bank.nda.gat[key])) {
            len = bank.nda.gat[key].length;
        } else if (typeof bank.nda.gat[key] === 'object') {
            for (const subKey of Object.keys(bank.nda.gat[key])) {
                len += bank.nda.gat[key][subKey].length;
            }
        }
        console.log(`- ${key}: ${len}`);
        total += len;
    }
    console.log(`Total NDA GAT Questions: ${total}`);
}

main();
