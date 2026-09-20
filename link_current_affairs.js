const fs = require('fs');

console.log('[Phase 2: CA Links] Loading notes_data_exam_focused.js...');

let rawData = fs.readFileSync('notes_data_exam_focused.js', 'utf-8');

const evalCode = rawData.replace('const NOTES_DATABASE =', 'global.NOTES_DATABASE =').replace('let CURRENT_AFFAIRS_DB =', 'global.CURRENT_AFFAIRS_DB =');

try {
    eval(evalCode);
} catch (e) {
    console.error("Failed to parse notes_data_exam_focused.js.");
    process.exit(1);
}

const db = global.NOTES_DATABASE;
const ca_db = global.CURRENT_AFFAIRS_DB;

const staticLinksMap = {
    'Constitutional Bench': 'Polity',
    'Basic Structure Doctrine': 'Polity',
    'Fundamental Rights': 'Polity',
    'Anti-Defection': 'Polity',
    'El Nino': 'Geography',
    'La Nina': 'Geography',
    'Monsoon': 'Geography',
    'Western Disturbances': 'Geography',
    'Wildlife Protection Act': 'Environment',
    'National Park': 'Environment',
    'Tiger Reserve': 'Environment',
    'Repo Rate': 'Economics',
    'Inflation': 'Economics'
};

let modifiedCount = 0;

if (ca_db) {
    console.log('[Phase 2: CA Links] Processing Current Affairs DB...');
    for (let month in ca_db) {
        for (let category in ca_db[month]) {
            for (let i = 0; i < ca_db[month][category].length; i++) {
                let item = ca_db[month][category][i];
                let content = item.content;
                if (!content) continue;
                
                let changed = false;
                
                for (const [term, subject] of Object.entries(staticLinksMap)) {
                    // Regex to find term
                    const regex = new RegExp(`(?<!<[^>]*)\\b(${term})\\b(?![^<]*>)`, 'gi');
                    if (regex.test(content)) {
                        content = content.replace(regex, `<span class="ca-static-link" style="color: #45aaf2; text-decoration: underline; cursor: pointer;" onclick="alert('Jumping to Static Chapter in ${subject}')">$&</span>`);
                        changed = true;
                        modifiedCount++;
                    }
                }
                
                if (changed) {
                    ca_db[month][category][i].content = content;
                }
            }
        }
    }
}

if (modifiedCount > 0) {
    console.log(`[Phase 2: CA Links] Injected static links at ${modifiedCount} locations in CA DB.`);
    const newContent = `let CURRENT_AFFAIRS_DB = ${JSON.stringify(ca_db, null, 2)};\n\nconst NOTES_DATABASE = ${JSON.stringify(db, null, 2)};\n`;
    fs.writeFileSync('notes_data_exam_focused.js', newContent, 'utf-8');
    console.log('[Phase 2: CA Links] Successfully saved notes_data_exam_focused.js');
} else {
    console.log('[Phase 2: CA Links] No static terms found in CA DB.');
}
