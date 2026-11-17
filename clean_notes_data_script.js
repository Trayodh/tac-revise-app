const fs = require('fs');
let content = fs.readFileSync('notes_data.js', 'utf8');

const vm = require('vm');
const sandbox = {};
try {
    vm.createContext(sandbox);
    vm.runInContext(content, sandbox);
    
    if (sandbox.NOTES_DATABASE && sandbox.NOTES_DATABASE['history']) {
        sandbox.NOTES_DATABASE['history'].chapters.forEach(c => {
            if (c.topics) {
                c.topics.forEach(t => {
                    t.notes = "Detailed notes expanded in notes_extra_history.js";
                });
            }
        });
        
        // Reconstruct the file
        let newContent = `let CURRENT_AFFAIRS_DB = ${JSON.stringify(sandbox.CURRENT_AFFAIRS_DB, null, 2)};\n\nconst NOTES_DATABASE = ${JSON.stringify(sandbox.NOTES_DATABASE, null, 2)};\n`;
        fs.writeFileSync('notes_data.js', newContent);
        console.log('Successfully cleaned notes_data.js');
    } else {
        console.log('No NOTES_DATABASE.history found in sandbox');
    }
} catch (e) {
    console.log('VM Error:', e.message);
}
