const fs = require('fs');
const path = require('path');

function lowercaseRecursive(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const oldPath = path.join(dir, file);
        const isDir = fs.statSync(oldPath).isDirectory();
        
        const newName = file.toLowerCase();
        
        let targetPath = oldPath;
        if (file !== newName) {
            const tempPath = path.join(dir, file + '_temp_rename');
            const newPath = path.join(dir, newName);
            
            // Rename to temp first to bypass Windows case-insensitivity
            fs.renameSync(oldPath, tempPath);
            fs.renameSync(tempPath, newPath);
            console.log(`Renamed: ${file} -> ${newName}`);
            targetPath = newPath;
        }
        
        if (isDir) {
            lowercaseRecursive(targetPath);
        }
    }
}

lowercaseRecursive(path.join(__dirname, 'assets', 'diagrams'));
console.log('Finished lowercasing all files and directories in assets/diagrams/');
