const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '../diagrams');

function scanDir(dir, results) {
    if (!fs.existsSync(dir)) return;
    const items = fs.readdirSync(dir);
    for (const item of items) {
        const fullPath = path.join(dir, item);
        if (fs.statSync(fullPath).isDirectory()) {
            scanDir(fullPath, results);
        } else if (fullPath.endsWith('.json')) {
            try {
                const metadata = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
                results.push({
                    path: fullPath.replace(/\.json$/, ''),
                    title: metadata.title,
                    subject: metadata.subject,
                    created: fs.statSync(fullPath).birthtimeMs
                });
            } catch (e) {
                console.error("Error reading", fullPath, e);
            }
        }
    }
}

const results = [];
scanDir(OUTPUT_DIR, results);

// Sort by creation time so older ones are first
results.sort((a, b) => a.created - b.created);

const lines = results.map(r => `${r.subject} | ${r.title} | ${r.path}`);
fs.writeFileSync('diagram_list.txt', lines.join('\n'), 'utf8');
console.log(`Saved ${results.length} diagrams to diagram_list.txt`);
