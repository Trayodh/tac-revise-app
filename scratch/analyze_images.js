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
        images.push(filePath);
    }
});

const mdFiles = [];
walkDir('evolved_notes', function(filePath) {
    if (filePath.endsWith('.md')) {
        mdFiles.push(filePath);
    }
});

console.log("Found " + images.length + " images");
console.log("Found " + mdFiles.length + " MD files");

// Let's print out a few image names
console.log("\nSample Images:");
console.log(images.slice(0, 20).join('\n'));

// Let's print out a few MD file names
console.log("\nSample MD Files:");
console.log(mdFiles.slice(0, 20).join('\n'));
