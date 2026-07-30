const fs = require('fs');
const path = require('path');

// 1. Load the SVGs from notes_svgs_generated.js
let svgDataTxt = fs.readFileSync('notes_svgs_generated.js', 'utf8');
global.window = {};
eval(svgDataTxt);
const svgs = global.window.TOPIC_SVGS;

console.log(`Loaded ${Object.keys(svgs).length} SVGs from notes_svgs_generated.js`);

// 2. Scan all JS files for img tags pointing to these SVGs
const jsFiles = fs.readdirSync('.').filter(f => f.startsWith('notes_') && f.endsWith('.js'));
const allContent = jsFiles.map(f => fs.readFileSync(f, 'utf8')).join('\n');

let writtenCount = 0;

for (const [id, svgString] of Object.entries(svgs)) {
    // Look for <img src="something/id.svg"
    const regex = new RegExp(`src="([^"]+/${id}\\.svg)"`);
    const match = allContent.match(regex);
    
    let targetPath;
    if (match) {
        targetPath = match[1]; // e.g. "assets/diagrams/geography/physical-geography/climatology-clouds.svg"
    } else {
        // Fallback if not found in img tag but we want to output it anyway
        targetPath = `assets/diagrams/legacy/${id}.svg`;
    }
    
    // Ensure directories exist
    const fullPath = path.join(__dirname, targetPath);
    const dir = path.dirname(fullPath);
    
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    
    // Write the SVG file
    fs.writeFileSync(fullPath, svgString, 'utf8');
    writtenCount++;
}

console.log(`Successfully wrote ${writtenCount} physical SVG files to the assets directory!`);
