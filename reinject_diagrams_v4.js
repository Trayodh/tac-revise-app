const fs = require('fs');
const path = require('path');

const exactMap = JSON.parse(fs.readFileSync('perfect_map.json', 'utf8'));

const diagramsDir = path.join('assets', 'diagrams');
const allImages = [];
function walk(dir) {
    for (const item of fs.readdirSync(dir)) {
        const full = path.join(dir, item);
        if (fs.statSync(full).isDirectory()) walk(full);
        else if (/\.(png|jpg|jpeg)$/i.test(item)) {
            allImages.push({
                name: item,
                path: path.relative('.', full).replace(/\\\\/g, '/')
            });
        }
    }
}
walk(diagramsDir);

const dbFiles = [
    'notes_data.js',
    'notes_extra_history.js',
    'notes_extra_geography.js',
    'notes_extra_polity.js'
];

let totalInjected = 0; let missedInjections = [];

for (let filename of dbFiles) {
    if (!fs.existsSync(filename)) continue;
    
    let data = fs.readFileSync(filename, 'utf8');
    let originalData = data;
    
    for (const img of allImages) {
        const topicId = exactMap[img.name];
        if (!topicId) continue;
        
        // Find the topic object
        let topicIdx = data.indexOf(`"id": "${topicId}"`);
        let isExpanded = false;
        
        if (topicIdx === -1) {
            topicIdx = data.indexOf(`EXPANDED_NOTES_DATA["${topicId}"]`);
            if (topicIdx !== -1) {
                isExpanded = true;
            }
        }
        
        if (topicIdx === -1) { missedInjections.push(img.name); continue; }
        
        // We only want to search within this topic's bounds.
        let nextTopicIdx;
        if (isExpanded) {
            nextTopicIdx = data.indexOf(`EXPANDED_NOTES_DATA["`, topicIdx + 20);
        } else {
            nextTopicIdx = data.indexOf(`"id": "`, topicIdx + 10);
        }
        const endBoundary = nextTopicIdx !== -1 ? nextTopicIdx : data.length;
        
        const topicSlice = data.substring(topicIdx, endBoundary);
        
        // Ensure not already injected
        if (topicSlice.includes(`/${encodeURIComponent(img.name)}'`)) {
            continue;
        }

        const imgPathEncoded = img.path.split('/').map(encodeURIComponent).join('/');
        
        const htmlContent = `\n\n<div style="margin:20px 0;text-align:center;">
<img src="/${imgPathEncoded}" style="max-width:100%;height:auto;border:1px solid #ccc;border-radius:8px;" alt="${img.name.replace('.png','').replace('.jpg','').replace('.jpeg','')}">
<p style="font-size:0.9em;color:#555;margin-top:5px;"><i>Visual Summary Diagram: ${img.name.replace('.png','').replace('.jpg','').replace('.jpeg','')}</i></p>
</div>\n`;
        
        let htmlNotes = htmlContent.replace(/\n/g, '\\n');
        
        // Try to inject at end of EXPANDED_NOTES_DATA
        if (isExpanded) {
            // Find the last backtick in the slice
            const lastBacktick = topicSlice.lastIndexOf('`');
            if (lastBacktick !== -1) {
                // If the content has closing body/html, inject before them
                let insertPoint = lastBacktick;
                const closingBody = topicSlice.lastIndexOf('</body>');
                if (closingBody !== -1 && closingBody < lastBacktick) {
                    insertPoint = closingBody;
                }
                
                const before = data.substring(0, topicIdx + insertPoint);
                const after = data.substring(topicIdx + insertPoint);
                data = before + htmlContent + '\n' + after;
                totalInjected++;
                console.log(`Injected ${img.name} -> ${topicId} (expanded)`);
                continue;
            }
        }
        
        // Try to inject at end of content string
        const contentMatch = /("content"\s*:\s*`)([\s\S]*?)(`)/.exec(topicSlice);
        if (contentMatch) {
            const before = data.substring(0, topicIdx + contentMatch.index + contentMatch[1].length + contentMatch[2].length);
            const after = data.substring(topicIdx + contentMatch.index + contentMatch[1].length + contentMatch[2].length);
            data = before + htmlContent + after;
            totalInjected++;
            console.log(`Injected ${img.name} -> ${topicId} (content)`);
            continue;
        }
        
        // Try to inject at end of notes string
        const notesMatch = /("notes"\s*:\s*")([\s\S]*?)(")/.exec(topicSlice);
        if (notesMatch && !notesMatch[2].includes('expanded in notes_extra')) {
            const before = data.substring(0, topicIdx + notesMatch.index + notesMatch[1].length + notesMatch[2].length);
            const after = data.substring(topicIdx + notesMatch.index + notesMatch[1].length + notesMatch[2].length);
            data = before + htmlNotes + after;
            totalInjected++;
            console.log(`Injected ${img.name} -> ${topicId} (notes)`);
            continue;
        }
    }
    
    if (data !== originalData) {
        fs.writeFileSync(filename, data, 'utf8');
    }
}

console.log(`Total successfully injected: ${totalInjected}`);
