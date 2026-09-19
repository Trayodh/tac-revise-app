const fs = require('fs');
let c = fs.readFileSync('notes_data.js', 'utf8');

// Replace let/const with global. to capture them in eval
const modifiedContent = c.replace('let CURRENT_AFFAIRS_DB', 'global.CURRENT_AFFAIRS_DB')
                         .replace('const NOTES_DATABASE', 'global.NOTES_DATABASE');

eval(modifiedContent);

const db = global.NOTES_DATABASE;
let cleaned = 0;

if (db && db['history']) {
    db['history'].chapters.forEach(ch => {
        if (ch.topics) {
            ch.topics.forEach(t => {
                t.notes = "Detailed notes expanded in notes_extra_history.js";
                cleaned++;
            });
        }
    });
    
    // Convert back to string
    const newFileContent = `let CURRENT_AFFAIRS_DB = ${JSON.stringify(global.CURRENT_AFFAIRS_DB, null, 2)};\n\nconst NOTES_DATABASE = ${JSON.stringify(db, null, 2)};\n`;
    fs.writeFileSync('notes_data.js', newFileContent);
    console.log(`Successfully cleaned notes_data.js (reset ${cleaned} topics).`);
} else {
    console.log('History object not found in NOTES_DATABASE.');
}
