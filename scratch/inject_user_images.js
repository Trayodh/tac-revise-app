const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

const images = [];
walkDir('assets', function(filePath) {
    if (filePath.match(/\.(png|jpe?g|gif|svg)$/i)) {
        // Convert to posix path for markdown
        images.push(filePath.replace(/\\/g, '/'));
    }
});

const mdFiles = [];
walkDir('evolved_notes', function(filePath) {
    if (filePath.endsWith('.md')) {
        mdFiles.push(filePath.replace(/\\/g, '/'));
    }
});

let modifiedCount = 0;

mdFiles.forEach(mdPath => {
    let content = fs.readFileSync(mdPath, 'utf8');
    let original = content;

    const chapterName = path.basename(mdPath, '.md');
    
    // Find matching image(s) where the filename is exactly {chapterName}.png/jpg/etc
    // OR where the filename contains {chapterName}
    let matchedImages = images.filter(img => {
        let imgName = path.basename(img, path.extname(img));
        return imgName.toLowerCase() === chapterName.toLowerCase();
    });

    // Replace mermaid blocks
    const mermaidRegex = /```mermaid\r?\n[\s\S]*?```/g;
    
    let imageInjected = false;
    
    if (mermaidRegex.test(content)) {
        content = content.replace(mermaidRegex, (match, offset) => {
            if (!imageInjected && matchedImages.length > 0) {
                imageInjected = true;
                // Use the first matched image
                let imgPath = matchedImages[0];
                return `\n\n![${chapterName}](${imgPath})\n*Diagram for ${chapterName}*\n\n`;
            }
            return ''; // Remove other mermaid blocks or if no image found
        });
    } else {
        // If there's no mermaid block but we found an image, where to put it?
        // Usually right after the main title (# ...)
        if (matchedImages.length > 0) {
            content = content.replace(/^(#\s.*?\r?\n\r?\n)/m, `$1![${chapterName}](${matchedImages[0]})\n*Diagram for ${chapterName}*\n\n`);
        }
    }
    
    // Some files might have `\mermaid` syntax still lingering (though we fixed most)
    // Wait, we just fixed them all to ````mermaid
    
    if (content !== original) {
        fs.writeFileSync(mdPath, content, 'utf8');
        modifiedCount++;
        console.log(`Updated ${mdPath} with ${matchedImages.length > 0 ? matchedImages[0] : 'no image'}`);
    }
});

console.log(`Total files modified: ${modifiedCount}`);
