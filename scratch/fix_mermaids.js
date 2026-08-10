const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

let totalFixed = 0;

walkDir('evolved_notes', function(filePath) {
    if (!filePath.endsWith('.md')) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Replace \mermaid with ```mermaid
    content = content.replace(/^\\+mermaid\r?\n/gm, '```mermaid\n');

    let blocks = content.split('```mermaid\n');
    for (let i = 1; i < blocks.length; i++) {
        blocks[i] = blocks[i].replace(/^\\{1,3}\s*$/m, '```');
    }
    content = blocks.join('```mermaid\n');

    if (content !== original) {
        fs.writeFileSync(filePath, content);
        totalFixed++;
        console.log('Fixed mermaid blocks in ' + filePath);
    }
});

console.log('Total files fixed: ' + totalFixed);
