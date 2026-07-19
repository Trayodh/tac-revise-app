const fs = require('fs');
const path = require('path');
const vm = require('vm');

const extractedFilePath = process.argv[2];
if (!extractedFilePath) {
    console.error("Please provide the path to the extracted JSON file.");
    process.exit(1);
}

const extractedData = JSON.parse(fs.readFileSync(extractedFilePath, 'utf8'));

// Helper to read, modify, and save a JS file
function updateDBFile(filename, varName, updateFn) {
    const filePath = path.join(__dirname, '..', filename);
    if (!fs.existsSync(filePath)) {
        console.warn(`File ${filename} does not exist. Skipping.`);
        return;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Extract header comments
    let header = "";
    const lines = content.split('\n');
    for (const line of lines) {
        if (line.trim().startsWith('window.')) break;
        header += line + '\n';
    }

    // Evaluate in VM
    const context = { window: {} };
    try {
        vm.createContext(context);
        vm.runInContext(content, context);
    } catch (e) {
        console.error(`Failed to execute ${filename} in VM:`, e);
        return;
    }
    
    let data = context.window[varName];
    if (!data) {
        console.error(`Variable ${varName} not found in ${filename}`);
        return;
    }

    // Call update function
    data = updateFn(data);

    // Write back
    const newContent = `${header}window.${varName} = ${JSON.stringify(data, null, 2)};\n`;
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Successfully updated ${filename}`);
}

// 1. Current Affairs
if (extractedData.current_affairs && extractedData.current_affairs.length > 0) {
    updateDBFile('current_affairs_db.js', 'CURRENT_AFFAIRS_DB', (db) => {
        for (let item of extractedData.current_affairs) {
            let monthYear = item.month_year || "Unknown";
            if (!db[monthYear]) db[monthYear] = [];
            
            // Remove month_year from item to match schema
            delete item.month_year;
            
            // Add ID if missing
            if (!item.id) item.id = 'generated-' + Math.random().toString(36).substr(2, 9);
            
            db[monthYear].push(item);
        }
        return db;
    });
}

// 2. Equipment
if (extractedData.equipment && extractedData.equipment.length > 0) {
    updateDBFile('equipment_db.js', 'ARMED_FORCES_EQUIPMENT', (db) => {
        db.push(...extractedData.equipment);
        return db;
    });
}

// 3. Military Exercises
if (extractedData.military_exercises && extractedData.military_exercises.length > 0) {
    const filename = 'military_exercises_db.js';
    const filePath = path.join(__dirname, '..', filename);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        const regex = /let\s+MILITARY_EXERCISES_LIVE\s*=\s*([\s\S]*?);?\s*$/;
        const match = content.match(regex);
        if (match) {
            try {
                // Parse it manually using eval since it's a simple object
                let db = eval('(' + match[1] + ')');
                for (let ex of extractedData.military_exercises) {
                    let monthYear = ex.month_year || "Unknown 2026";
                    if (!db[monthYear]) db[monthYear] = [];
                    // Ensure schema
                    ex.tier = ex.tier || 2;
                    ex.exercise_name = ex.name || ex.exercise_name;
                    delete ex.name;
                    db[monthYear].push(ex);
                }
                const newContent = content.replace(regex, `let MILITARY_EXERCISES_LIVE = ${JSON.stringify(db, null, 2)};\n`);
                fs.writeFileSync(filePath, newContent, 'utf8');
                console.log(`Successfully updated ${filename}`);
            } catch (e) {
                console.error(`Failed to parse ${filename} manually:`, e);
            }
        }
    }
}

// 4. Notes
if (extractedData.notes && extractedData.notes.length > 0) {
    const notesByCategory = {};
    for (let note of extractedData.notes) {
        const cat = note.category.toLowerCase();
        if (!notesByCategory[cat]) notesByCategory[cat] = [];
        notesByCategory[cat].push({ title: note.title, content: note.content });
    }

    for (const [cat, notes] of Object.entries(notesByCategory)) {
        // Map category to file
        let filename;
        if (cat.includes('history')) filename = 'notes_extra_history.js';
        else if (cat.includes('geog')) filename = 'notes_extra_geography.js';
        else if (cat.includes('polit')) filename = 'notes_extra_polity.js';
        else if (cat.includes('econ')) filename = 'notes_extra_economics.js';
        else if (cat.includes('environ')) filename = 'notes_extra_environment.js';
        else if (cat.includes('sci')) filename = 'notes_extra_physics.js';
        else filename = 'notes_generated.js';

        const filePath = path.join(__dirname, '..', filename);
        if (!fs.existsSync(filePath)) {
            console.warn(`File ${filename} does not exist. Skipping notes for ${cat}.`);
            continue;
        }
        
        let appendContent = '\n';
        for (let note of notes) {
            const slug = note.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            appendContent += `\nwindow.EXPANDED_NOTES_DATA["${slug}"] = \`\n<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px;">\n  <h2 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; font-weight: 600;">${note.title}</h2>\n  ${note.content}\n</div>\n\`;\n`;
        }
        
        fs.appendFileSync(filePath, appendContent, 'utf8');
        console.log(`Successfully appended ${notes.length} notes to ${filename}`);
    }
}
