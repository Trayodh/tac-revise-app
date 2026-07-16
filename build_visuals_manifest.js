const fs = require('fs');
const path = require('path');

const ASSETS_DIR = path.join(__dirname, 'www', 'assets', 'geography');
const DB_FILE = path.join(ASSETS_DIR, 'visuals_db.js');

function scanDirectory(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(scanDirectory(filePath));
        } else if (filePath.endsWith('.json')) {
            try {
                const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
                data.relPath = filePath.replace(ASSETS_DIR, '').replace(/\\/g, '/');
                
                if (data.format === 'Mermaid') {
                    const mmdPath = filePath.replace('.json', '.mmd');
                    if (fs.existsSync(mmdPath)) {
                        data.mmdPath = mmdPath.replace(ASSETS_DIR, '').replace(/\\/g, '/');
                    }
                } else if (data.format === 'RealMap') {
                    const exts = ['.png', '.jpg', '.jpeg', '.svg'];
                    for (const ext of exts) {
                        const imgPath = filePath.replace('.json', ext);
                        if (fs.existsSync(imgPath)) {
                            data.imgPath = imgPath.replace(ASSETS_DIR, '').replace(/\\/g, '/');
                            break;
                        }
                    }
                }
                results.push(data);
            } catch(e) {}
        }
    });
    return results;
}

if (!fs.existsSync(ASSETS_DIR)) {
    console.error("No geography assets directory found.");
    process.exit(0);
}

const allVisuals = scanDirectory(ASSETS_DIR);
console.log(`Found ${allVisuals.length} visuals. Writing to DB...`);

const dbContent = `// Auto-generated Visuals Database
window.GEOGRAPHY_VISUALS_DB = ${JSON.stringify(allVisuals, null, 2)};
`;

fs.writeFileSync(DB_FILE, dbContent);
console.log(`Successfully wrote ${DB_FILE}`);
