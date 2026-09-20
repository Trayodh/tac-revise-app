const fs = require('fs');

if (!fs.existsSync('question_banks/cds_pyq_bank.json')) {
    console.error("cds_pyq_bank.json not found!");
    process.exit(1);
}

const rawBank = JSON.parse(fs.readFileSync('question_banks/cds_pyq_bank.json', 'utf8'));

function normalize(text) {
    if (!text) return "";
    return text.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function cleanArray(arr) {
    const seen = new Set();
    const cleaned = [];

    for (let q of arr) {
        // Validate basics
        if (!q.question || !q.options || !Array.isArray(q.options) || q.options.length !== 4) continue;
        if (typeof q.correct !== 'number' || q.correct < 0 || q.correct > 3) continue;

        // Dedup based on normalized question text
        const norm = normalize(q.question);
        if (seen.has(norm)) continue;
        
        seen.add(norm);
        
        // Clean up explanation
        if (!q.explanation) q.explanation = "Detailed explanation available in official answer key.";
        
        cleaned.push(q);
    }
    return cleaned;
}

const finalBank = {
    gs: cleanArray(rawBank.gs || []),
    english: cleanArray(rawBank.english || [])
};

console.log(`Original GS: ${rawBank.gs?.length || 0}, Cleaned GS: ${finalBank.gs.length}`);
console.log(`Original English: ${rawBank.english?.length || 0}, Cleaned English: ${finalBank.english.length}`);

fs.writeFileSync('question_banks/cds_pyq_bank.json', JSON.stringify(finalBank, null, 2), 'utf8');
console.log("Successfully cleaned and deduplicated cds_pyq_bank.json");
