const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '../diagrams');
const PROGRESS_FILE = path.join(__dirname, 'progress.json');

const progress = {
    completed: 0,
    failed: 52, // from last known
    duplicatesSkipped: 0,
    retried: 228, // from last known peak
    generated: []
};

function scanDir(dir) {
    if (!fs.existsSync(dir)) return;
    const items = fs.readdirSync(dir);
    for (const item of items) {
        const fullPath = path.join(dir, item);
        if (fs.statSync(fullPath).isDirectory()) {
            scanDir(fullPath);
        } else if (fullPath.endsWith('.json')) {
            try {
                const metadata = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
                if (metadata.subject && metadata.title) {
                    const key = `${metadata.subject}_${metadata.title}`.toLowerCase().replace(/[^a-z0-9]/gi, '_');
                    progress.generated.push(key);
                }
            } catch (e) {
                console.error("Error reading", fullPath, e);
            }
        }
    }
}

scanDir(OUTPUT_DIR);
progress.completed = progress.generated.length;

fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));
console.log(`Rebuilt progress.json with ${progress.completed} completed items.`);
