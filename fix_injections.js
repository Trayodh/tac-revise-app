const fs = require('fs');
const files = ['notes_data.js', 'notes_extra.js', 'notes_extra_history.js'];

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let txt = fs.readFileSync(file, 'utf8');
    
    // In the file, it is written as `\\n\\n  <!-- DIAGRAM INJECTED -->\\n`
    let parts = txt.split('\\\\n\\\\n  <!-- DIAGRAM INJECTED -->\\\\n');
    if (parts.length > 1) {
        let newTxt = parts[0];
        for (let i = 1; i < parts.length; i++) {
            let part = parts[i];
            
            let endIdx = part.indexOf("</div>\\\\n");
            
            if (endIdx !== -1) {
                let block = part.substring(0, endIdx + 9);
                let rest = part.substring(endIdx + 9);
                
                block = block.split('\\\\n').join('\\n');
                
                block = block.replace(/src='(.*?)'/g, (m, srcPath) => {
                    let encoded = '/' + srcPath.split('/').map(p => encodeURIComponent(p)).join('/');
                    return `src='${encoded}'`;
                });
                
                newTxt += '\\n\\n  <!-- DIAGRAM INJECTED -->\\n' + block + rest;
            } else {
                newTxt += '\\\\n\\\\n  <!-- DIAGRAM INJECTED -->\\\\n' + part;
            }
        }
        
        fs.writeFileSync(file, newTxt, 'utf8');
        console.log(`Fixed injections in ${file}`);
    }
});
