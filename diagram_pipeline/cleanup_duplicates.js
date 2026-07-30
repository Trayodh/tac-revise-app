const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '../diagrams');
const PROGRESS_FILE = path.join(__dirname, 'progress.json');

// The restart time was 2026-07-30T11:42:35Z
const RESTART_TIME_MS = new Date('2026-07-30T11:40:00Z').getTime();

function scanDir(dir, results) {
    if (!fs.existsSync(dir)) return;
    const items = fs.readdirSync(dir);
    for (const item of items) {
        const fullPath = path.join(dir, item);
        if (fs.statSync(fullPath).isDirectory()) {
            scanDir(fullPath, results);
        } else if (fullPath.endsWith('.json')) {
            try {
                const birthTime = fs.statSync(fullPath).birthtimeMs;
                if (birthTime > RESTART_TIME_MS) {
                    results.push(path.dirname(fullPath)); // The folder containing the diagram files
                }
            } catch (e) {
                console.error("Error reading", fullPath, e);
            }
        }
    }
}

const foldersToDelete = [];
scanDir(OUTPUT_DIR, foldersToDelete);

let deletedCount = 0;
// Delete the duplicate folders
for (const folder of new Set(foldersToDelete)) {
    try {
        fs.rmSync(folder, { recursive: true, force: true });
        console.log(`Deleted duplicate folder: ${folder}`);
        deletedCount++;
    } catch(e) {
        console.error("Failed to delete", folder, e);
    }
}

// Update progress.json to remove these keys
try {
    const progressData = JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf8'));
    // We know exactly what was generated after restart: index 123 onwards.
    // Let's just slice the array back to its original length before restart.
    // The original list had 123 items (from economics_pandemic_impact_timeline to polity_separation_of_judiciary_from_executive)
    const originalLength = 123; 
    const removedCount = progressData.generated.length - originalLength;
    
    if (removedCount > 0) {
        progressData.generated = progressData.generated.slice(0, originalLength);
        progressData.completed = originalLength;
        fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progressData, null, 2), 'utf8');
        console.log(`Updated progress.json. Removed ${removedCount} keys. Total completed reset to ${progressData.completed}`);
    } else {
        console.log("No extra keys found in progress.json.");
    }

} catch(e) {
    console.error("Failed to update progress.json", e);
}

console.log(`Successfully removed ${deletedCount} duplicate diagram folders.`);
