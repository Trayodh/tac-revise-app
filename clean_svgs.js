const fs = require('fs');
const path = require('path');

const jsFiles = fs.readdirSync(__dirname).filter(f => f.startsWith('notes_extra') && f.endsWith('.js'));
jsFiles.push('notes_data.js');

let totalCleaned = 0;

for (const file of jsFiles) {
    if (!fs.existsSync(file)) continue;
    let content = fs.readFileSync(file, 'utf8');
    
    const originalLength = content.length;
    
    // Look for <img src="assets/diagrams/...svg" ... /> inside Visual Summary Diagram
    // Wait, the Visual Summary Diagram could be anything containing .svg
    // The previous injected blocks looked like:
    // <!-- DIAGRAM INJECTED -->
    // <h4 style="...">Visual Summary Diagram</h4>
    // <div style="...">
    //   <img src="...svg" />
    // </div>
    
    // Simplest approach: just remove everything from <!-- DIAGRAM INJECTED --> to </div>\n
    // IF it contains .svg
    const regex1 = /\\n\\n\s*<!-- DIAGRAM INJECTED -->[\s\S]*?<img src=[^\>]*\.svg[^\>]*>[\s\S]*?<\/div>\\n/g;
    content = content.replace(regex1, '');
    
    // Or if they were injected in previous runs with unescaped newlines:
    const regex2 = /\n\n\s*<!-- DIAGRAM INJECTED -->[\s\S]*?<img src=[^\>]*\.svg[^\>]*>[\s\S]*?<\/div>\n/g;
    content = content.replace(regex2, '');
    
    // Try to catch the Visual Summary Diagram blocks injected by old scripts:
    const regex3 = /<h[34][^>]*>Visual Summary Diagram<\/h[34]>\s*<div[^>]*>\s*<img[^>]*src="[^"]*\.svg"[^>]*>\s*<\/div>/g;
    content = content.replace(regex3, '');
    
    const regex4 = /\\n\\n<h3>Visual Summary Diagram<\/h3>\\n<div style=\\"text-align: center; margin: 20px 0;\\">\\n\s*<img[^>]*src=\\"[^"]*\.svg\\"[^>]*>\\n<\/div>\\n/g;
    content = content.replace(regex4, '');

    const remainingSvgs = (content.match(/\.svg/g) || []).length;
    if (remainingSvgs > 0) {
        console.log(`Warning: ${file} still has ${remainingSvgs} SVGs left! (Might not be Visual Summary Diagrams)`);
    }

    if (content.length !== originalLength) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Cleaned SVGs from ${file}`);
        totalCleaned++;
    }
}

console.log(`Finished cleaning! Modified ${totalCleaned} files.`);
