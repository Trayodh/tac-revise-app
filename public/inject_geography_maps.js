const fs = require('fs');

console.log('[Phase 2: Geo Maps] Loading notes_data_exam_focused.js...');

let rawData = fs.readFileSync('notes_data_exam_focused.js', 'utf-8');

const evalCode = rawData.replace('const NOTES_DATABASE =', 'global.NOTES_DATABASE =').replace('let CURRENT_AFFAIRS_DB =', 'global.CURRENT_AFFAIRS_DB =');

try {
    eval(evalCode);
} catch (e) {
    console.error("Failed to parse notes_data_exam_focused.js.");
    process.exit(1);
}

const db = global.NOTES_DATABASE;

// Geopolitical conflict zones, shipping straits, and environmental summits
const geoTags = [
    'Strait of Malacca',
    'Strait of Hormuz',
    'Bab-el-Mandeb',
    'Suez Canal',
    'Panama Canal',
    'South China Sea',
    'Golan Heights',
    'Gaza Strip',
    'Crimea',
    'Taiwan Strait',
    'Red Sea',
    'Black Sea',
    'COP28',
    'Earth Summit',
    'Kyoto Protocol',
    'Paris Agreement'
];

let modifiedCount = 0;

const subjectsToScan = ['Geography', 'Environment', 'Current Affairs'];

for (let subject of subjectsToScan) {
    if (db[subject]) {
        console.log(`[Phase 2: Geo Maps] Processing ${subject} topics...`);
        for (let topicId in db[subject]) {
            let notes = db[subject][topicId].notes;
            if (!notes) continue;
            
            let changed = false;
            
            for (const tag of geoTags) {
                // Regex to find the term as a whole phrase, case-insensitive, but only if not already wrapped
                const regex = new RegExp(`(?<!<[^>]*)\\b(${tag})\\b(?![^<]*>)`, 'gi');
                
                if (regex.test(notes)) {
                    notes = notes.replace(regex, `<span class="geo-tag">$&</span>`);
                    changed = true;
                    modifiedCount++;
                }
            }
            
            if (changed) {
                db[subject][topicId].notes = notes;
            }
        }
    }
}

if (modifiedCount > 0) {
    console.log(`[Phase 2: Geo Maps] Injected geo-tags at ${modifiedCount} locations.`);
    const newContent = `let CURRENT_AFFAIRS_DB = ${JSON.stringify(global.CURRENT_AFFAIRS_DB, null, 2)};\n\nconst NOTES_DATABASE = ${JSON.stringify(db, null, 2)};\n`;
    fs.writeFileSync('notes_data_exam_focused.js', newContent, 'utf-8');
    console.log('[Phase 2: Geo Maps] Successfully saved notes_data_exam_focused.js');
} else {
    console.log('[Phase 2: Geo Maps] No locations found to inject.');
}
