const fs = require('fs');

console.log('[Phase 2: History Tooltips] Loading notes_data_exam_focused.js...');

// We need to read the JS file, extract the NOTES_DATABASE object, modify it, and write it back
let rawData = fs.readFileSync('notes_data_exam_focused.js', 'utf-8');

// A simple way to evaluate the data is to create a fake environment
// Since the file has `let CURRENT_AFFAIRS_DB = ...; const NOTES_DATABASE = ...;`
// We will replace `const NOTES_DATABASE` with `global.NOTES_DATABASE` just to extract it
const evalCode = rawData.replace('const NOTES_DATABASE =', 'global.NOTES_DATABASE =').replace('let CURRENT_AFFAIRS_DB =', 'global.CURRENT_AFFAIRS_DB =');

try {
    eval(evalCode);
} catch (e) {
    console.error("Failed to parse notes_data_exam_focused.js. Run Phase 1 first.");
    process.exit(1);
}

const db = global.NOTES_DATABASE;

// Dictionary of obscure terms (Class 11/12 NCERTs)
const historyTerms = {
    'Iqta': 'A land grant given to military commanders in the Delhi Sultanate in lieu of salary.',
    'Mansabdar': 'A military rank holder in the Mughal Empire who had to maintain cavalry.',
    'Jizya': 'A tax levied on non-Muslim subjects by Islamic rulers.',
    'Diwan-i-Arz': 'The Ministry of Military Affairs in the Delhi Sultanate.',
    'Zat': 'A personal rank in the Mansabdari system indicating salary and status.',
    'Sawar': 'A rank indicating the number of cavalrymen a Mansabdar had to maintain.',
    'Chauth': 'A tax (25% of revenue) levied by the Maratha Empire on nominally independent territories.',
    'Sardeshmukhi': 'An additional 10% tax levied by Marathas as the supreme head of the country.',
    'Dastur': 'A rule or custom, often referring to administrative regulations.',
    'Muqaddam': 'A village headman in medieval India.',
    'Khalsa': 'Crown lands under direct administration of the central authority.',
    'Jagir': 'A piece of land assigned to a state official in lieu of salary (Mughal period).',
    'Amir': 'A noble or commander.'
};

let modifiedCount = 0;

if (db['History']) {
    console.log('[Phase 2: History Tooltips] Processing History topics...');
    for (let topicId in db['History']) {
        let notes = db['History'][topicId].notes;
        if (!notes) continue;
        
        let changed = false;
        
        for (const [term, definition] of Object.entries(historyTerms)) {
            // Regex to find the term as a whole word, case-insensitive, but only if not already wrapped
            // This is a naive regex, we avoid matching if it's already inside a tag
            const regex = new RegExp(`(?<!<[^>]*)\\b(${term})\\b(?![^<]*>)`, 'gi');
            
            if (regex.test(notes)) {
                notes = notes.replace(regex, `<span class="history-term" data-definition="${definition}">$1</span>`);
                changed = true;
                modifiedCount++;
            }
        }
        
        if (changed) {
            db['History'][topicId].notes = notes;
        }
    }
}

if (modifiedCount > 0) {
    console.log(`[Phase 2: History Tooltips] Injected tooltips at ${modifiedCount} locations.`);
    // Serialize back to file
    const newContent = `let CURRENT_AFFAIRS_DB = ${JSON.stringify(global.CURRENT_AFFAIRS_DB, null, 2)};\n\nconst NOTES_DATABASE = ${JSON.stringify(db, null, 2)};\n`;
    fs.writeFileSync('notes_data_exam_focused.js', newContent, 'utf-8');
    console.log('[Phase 2: History Tooltips] Successfully saved notes_data_exam_focused.js');
} else {
    console.log('[Phase 2: History Tooltips] No terms found to inject or DB missing.');
}
