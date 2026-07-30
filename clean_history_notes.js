const fs = require('fs');
const vm = require('vm');

function runInSandbox(code, sandbox) {
    vm.createContext(sandbox);
    vm.runInContext(code, sandbox);
    return sandbox;
}

// 1. Load notes_data.js
let notesCode = fs.readFileSync('notes_data.js', 'utf8');
const startNotes = notesCode.indexOf('const NOTES_DATABASE = {');
let notesDbCode = 'const NOTES_DATABASE = ' + notesCode.slice(startNotes + 'const NOTES_DATABASE = '.length);
notesDbCode += '\nwindow.NOTES_DATABASE = NOTES_DATABASE;';
let notesSandbox = runInSandbox(notesDbCode, { window: {} });
let notesDb = notesSandbox.window.NOTES_DATABASE;

// 2. Load ai_generated_notes.js
let aiCode = fs.readFileSync('ai_generated_notes.js', 'utf8');
const startAi = aiCode.indexOf('const AI_GENERATED_NOTES = [');
let aiNotesCode = 'const AI_GENERATED_NOTES = ' + aiCode.slice(startAi + 'const AI_GENERATED_NOTES = '.length);
aiNotesCode += '\nwindow.AI_GENERATED_NOTES = AI_GENERATED_NOTES;';
let aiSandbox = runInSandbox(aiNotesCode, { window: {} });
let aiNotes = aiSandbox.window.AI_GENERATED_NOTES;

// 3. Extract all History content from AI_GENERATED_NOTES
let historyAiNotes = aiNotes.filter(n => n.subject === 'History');
let nonHistoryAiNotes = aiNotes.filter(n => n.subject !== 'History');

// 4. Extract all History content from NOTES_DATABASE
let histObj = notesDb['history'];
let mergedNotes = {
    'Ancient India': '',
    'Medieval India': '',
    'Modern India': '',
    'World History': ''
};

// Map AI content to these 4 buckets
historyAiNotes.forEach(aiNote => {
    let key = '';
    if (aiNote.id.includes('ancient')) key = 'Ancient India';
    else if (aiNote.id.includes('medieval')) key = 'Medieval India';
    else if (aiNote.id.includes('modern')) key = 'Modern India';
    else if (aiNote.id.includes('world')) key = 'World History';
    
    if (key) {
        mergedNotes[key] += '\n' + aiNote.notes;
    }
});

// Map existing notes_data.js topics to these 4 buckets as well, preserving old structure
histObj.chapters.forEach(chap => {
    chap.topics.forEach(t => {
        if (!t.notes) return;
        let key = '';
        if (chap.title.includes('Ancient') || chap.title.includes('Prehistoric') || chap.title.includes('Historiography')) key = 'Ancient India';
        else if (chap.title.includes('Medieval')) key = 'Medieval India';
        else if (chap.title.includes('Modern')) key = 'Modern India';
        else if (chap.title.includes('World') || chap.title.includes('Art')) key = 'World History';
        else key = 'World History'; // Fallback
        
        mergedNotes[key] += '\n\n' + t.notes;
    });
});

// 5. Rebuild NOTES_DATABASE['history']
notesDb['history'] = {
    title: "History",
    icon: "📜",
    chapters: [
        {
            id: "hist-ancient",
            title: "Ancient India",
            topics: [{
                id: "ancient-india-complete",
                title: "Complete Ancient India",
                notes: mergedNotes['Ancient India'],
                formulas: ""
            }]
        },
        {
            id: "hist-medieval",
            title: "Medieval India",
            topics: [{
                id: "medieval-india-complete",
                title: "Complete Medieval India",
                notes: mergedNotes['Medieval India'],
                formulas: ""
            }]
        },
        {
            id: "hist-modern",
            title: "Modern India",
            topics: [{
                id: "modern-india-complete",
                title: "Complete Modern India",
                notes: mergedNotes['Modern India'],
                formulas: ""
            }]
        },
        {
            id: "hist-world",
            title: "World History & Culture",
            topics: [{
                id: "world-history-complete",
                title: "Complete World History & Culture",
                notes: mergedNotes['World History'],
                formulas: ""
            }]
        },
        {
            id: "hist-pyq",
            title: "PYQ Trend Analysis",
            topics: [{
                id: "history-pyq-trends",
                title: "History PYQ Trends (NDA/CDS)",
                notes: histObj.chapters.find(c => c.title.includes('PYQ'))?.topics?.[0]?.notes || "",
                formulas: ""
            }]
        }
    ]
};

// 6. Write back to files
const preNotesCode = notesCode.slice(0, startNotes);
fs.writeFileSync('notes_data.js', preNotesCode + 'const NOTES_DATABASE = ' + JSON.stringify(notesDb, null, 2) + ';\n');

const preAiCode = aiCode.slice(0, startAi);
fs.writeFileSync('ai_generated_notes.js', preAiCode + 'const AI_GENERATED_NOTES = ' + JSON.stringify(nonHistoryAiNotes, null, 2) + ';\n');

console.log("History notes refactored successfully! Ancient India is now a single unified chapter and topic.");