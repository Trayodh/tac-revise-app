const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT_DIR = path.join(__dirname, '..');
const NOTES_DATA_DIR = path.join(ROOT_DIR, 'notes-data');

function ensureDirSync(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
}

async function main() {
    console.log("Loading local database files into VM sandbox...");
    const sandbox = {
      window: {},
      global: {},
      console: console,
      fetch: () => new Promise((resolve) => resolve({ text: () => Promise.resolve('') })),
      EXPANDED_NOTES_DATA: {},
      EXPERT_REVISION_DATA: {},
      NOTES_DATABASE: {}
    };
    vm.createContext(sandbox);

    // 1. Load data.js
    const dataJsPath = path.join(ROOT_DIR, 'data.js');
    
    // Backup data.js if not already backed up
    const backupPath = path.join(ROOT_DIR, 'data_original.js');
    if (!fs.existsSync(backupPath)) {
        console.log("Backing up data.js to data_original.js...");
        fs.copyFileSync(dataJsPath, backupPath);
    }
    
    let dataJsContent = fs.readFileSync(backupPath, 'utf8');
    dataJsContent += '\n; window.NOTES_DATABASE = NOTES_DATABASE; window.CURRENT_AFFAIRS_DB = CURRENT_AFFAIRS_DB; window.CBT_EXAMS_DATABASE = CBT_EXAMS_DATABASE;\n';
    vm.runInContext(dataJsContent, sandbox);
    const NOTES_DATABASE = sandbox.window.NOTES_DATABASE;

    // 2. Load all notes_extra files in a sandbox
    const notesFiles = fs.readdirSync(ROOT_DIR).filter(f => f.startsWith('notes_extra') && f.endsWith('.js'));
    notesFiles.forEach(f => {
      const content = fs.readFileSync(path.join(ROOT_DIR, f), 'utf8');
      vm.runInContext(content, sandbox);
    });

    const EXPANDED_NOTES_DATA = sandbox.EXPANDED_NOTES_DATA || {};
    const EXPERT_REVISION_DATA = sandbox.EXPERT_REVISION_DATA || {};
    
    console.log(`Loaded ${Object.keys(EXPANDED_NOTES_DATA).length} expanded notes.`);

    // 3. Create the static files and strip data from the tree
    console.log("Generating static files...");
    ensureDirSync(NOTES_DATA_DIR);
    
    let topicCount = 0;

    for (const subjectId in NOTES_DATABASE) {
        const subject = NOTES_DATABASE[subjectId];
        if (!subject.chapters) continue;
        
        for (const chapter of subject.chapters) {
            if (!chapter.topics) continue;
            
            for (const topic of chapter.topics) {
                const topicDir = path.join(NOTES_DATA_DIR, subjectId, chapter.id, topic.id);
                ensureDirSync(topicDir);
                
                // Save short notes
                if (topic.notes && !topic.notes.includes("Detailed notes expanded")) {
                    fs.writeFileSync(path.join(topicDir, 'notes.html'), topic.notes, 'utf8');
                }
                
                // Save detailed notes (expanded notes)
                if (EXPANDED_NOTES_DATA[topic.id] && !EXPANDED_NOTES_DATA[topic.id].includes("currently undergoing high rate limits")) {
                    fs.writeFileSync(path.join(topicDir, 'detailed_notes.html'), EXPANDED_NOTES_DATA[topic.id], 'utf8');
                } else {
                    // Create an empty file to signify it hasn't been generated yet, or leave it absent.
                    // Leaving it absent is better, but maybe writing a placeholder is fine. We will leave it absent.
                }

                // Save expert notes
                if (EXPERT_REVISION_DATA[topic.id]) {
                    fs.writeFileSync(path.join(topicDir, 'expert_notes.html'), EXPERT_REVISION_DATA[topic.id], 'utf8');
                }
                
                // Save formulas
                if (topic.formulas) {
                    fs.writeFileSync(path.join(topicDir, 'formulas.html'), topic.formulas, 'utf8');
                }
                
                // Save mindmap
                if (topic.mindmap) {
                    fs.writeFileSync(path.join(topicDir, 'mindmap.json'), JSON.stringify(topic.mindmap), 'utf8');
                }
                
                // Set flags for the frontend before stripping
                if (topic.notes && !topic.notes.includes("Detailed notes expanded")) { topic.hasNotes = true; } else { topic.hasNotes = false; }
                if (topic.formulas) topic.hasFormulas = true;
                if (topic.mindmap) topic.hasMindmap = true;
                if (EXPANDED_NOTES_DATA[topic.id] && !EXPANDED_NOTES_DATA[topic.id].includes("currently undergoing high rate limits")) {
                    topic.hasDetailedNotes = true;
                }

                // STRIP THE HEAVY DATA FROM THE OBJECT
                delete topic.notes;
                delete topic.formulas;
                delete topic.mindmap;
                
                topicCount++;
            }
        }
    }

    console.log(`Processed ${topicCount} topics.`);

    // 4. Write the minimized data.js
    console.log("Writing minimized data.js...");
    
    // We can't just JSON.stringify the whole dataJsContent because it has other variables (CURRENT_AFFAIRS_DB, etc).
    // So we need to stringify NOTES_DATABASE and replace it in the file, OR we just overwrite the whole file with JS definitions.
    
    // To preserve everything else, we can read the original file, and inject the JSON.
    let originalDataStr = fs.readFileSync(backupPath, 'utf8');
    
    // The easiest way is to rewrite data.js entirely with the stripped objects.
    // Wait, data.js has:
    // const CURRENT_AFFAIRS_DB = { ... }
    // const CBT_EXAMS_DATABASE = [ ... ]
    // const NOTES_DATABASE = { ... }
    
    const CURRENT_AFFAIRS_DB = sandbox.window.CURRENT_AFFAIRS_DB || sandbox.CURRENT_AFFAIRS_DB || {};
    const CBT_EXAMS_DATABASE = sandbox.window.CBT_EXAMS_DATABASE || sandbox.CBT_EXAMS_DATABASE || [];
    
    let newDataJs = `// GENERATED LIGHTWEIGHT SKELETON
const CURRENT_AFFAIRS_DB = ${JSON.stringify(CURRENT_AFFAIRS_DB, null, 2)};

const CBT_EXAMS_DATABASE = ${JSON.stringify(CBT_EXAMS_DATABASE, null, 2)};

const NOTES_DATABASE = ${JSON.stringify(NOTES_DATABASE, null, 2)};
`;

    fs.writeFileSync(dataJsPath, newDataJs, 'utf8');
    
    const oldSize = fs.statSync(backupPath).size;
    const newSize = fs.statSync(dataJsPath).size;
    
    console.log(`✅ data.js size reduced from ${(oldSize/1024/1024).toFixed(2)}MB to ${(newSize/1024/1024).toFixed(2)}MB`);
    console.log("Migration complete!");
}

main();
