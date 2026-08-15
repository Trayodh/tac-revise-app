const fs = require('fs');
const path = require('path');

const mappingsFile = path.join(__dirname, '../diagram_mappings.json');
const outputFile = path.join(__dirname, '../diagram_mappings.js');
const diagramsDir = path.join(__dirname, '../assets/diagrams');

if (!fs.existsSync(mappingsFile)) {
    console.error("diagram_mappings.json not found!");
    process.exit(1);
}

const mappings = JSON.parse(fs.readFileSync(mappingsFile, 'utf8'));

// Helper to find image path recursively
function findImagePath(dir, filename) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            const found = findImagePath(fullPath, filename);
            if (found) return found;
        } else if (file === filename) {
            return fullPath;
        }
    }
    return null;
}

const enrichedMappings = mappings.map(mapping => {
    const fullPath = findImagePath(diagramsDir, mapping.diagram_id);
    if (fullPath) {
        // Create relative path like assets/diagrams/...
        const relativePath = path.relative(path.join(__dirname, '..'), fullPath).replace(/\\/g, '/');
        return {
            ...mapping,
            image_path: relativePath
        };
    }
    return mapping;
});

const jsContent = `const DIAGRAM_MAPPINGS = ${JSON.stringify(enrichedMappings, null, 2)};\n`;

fs.writeFileSync(outputFile, jsContent, 'utf8');
console.log(`Successfully generated diagram_mappings.js with ${enrichedMappings.length} mappings!`);
