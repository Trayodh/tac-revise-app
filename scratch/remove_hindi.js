const fs = require('fs');

const files = [
    'cds_pyq_bank.json',
    'capf_pyq_bank.json',
    'upsc_master_bank.json',
    'nda_gs_part1.json',
    'nda_gs_part2.json'
];

const hindiRegex = /[\u0900-\u097F]/;

let totalRemoved = 0;

for (const file of files) {
    let data;
    try {
        data = JSON.parse(fs.readFileSync(`question_banks/${file}`, 'utf8'));
    } catch(e) {
        continue;
    }
    
    let removedInFile = 0;

    function hasHindi(q) {
        if (!q) return false;
        if (hindiRegex.test(q.question)) return true;
        if (q.options && q.options.some(o => hindiRegex.test(o))) return true;
        if (q.explanation && hindiRegex.test(q.explanation)) return true;
        return false;
    }

    if (Array.isArray(data)) {
        const originalLen = data.length;
        const filtered = data.filter(q => !hasHindi(q));
        removedInFile = originalLen - filtered.length;
        fs.writeFileSync(`question_banks/${file}`, JSON.stringify(filtered, null, 2));
    } else {
        const newData = {};
        for (const [bucket, arr] of Object.entries(data)) {
            if (Array.isArray(arr)) {
                const filtered = arr.filter(q => !hasHindi(q));
                removedInFile += (arr.length - filtered.length);
                newData[bucket] = filtered;
            } else {
                newData[bucket] = arr;
            }
        }
        fs.writeFileSync(`question_banks/${file}`, JSON.stringify(newData, null, 2));
    }
    
    if (removedInFile > 0) {
        console.log(`Removed ${removedInFile} Hindi questions from ${file}`);
        totalRemoved += removedInFile;
    }
}

console.log(`\nTotal Hindi questions removed across all banks: ${totalRemoved}`);
