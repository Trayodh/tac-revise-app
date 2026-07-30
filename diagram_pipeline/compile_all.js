const fs = require('fs');
const path = require('path');
const { compileMermaid } = require('./mermaid_compiler');

function getAllMmdFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            getAllMmdFiles(filePath, fileList);
        } else if (filePath.endsWith('.mmd')) {
            fileList.push(filePath);
        }
    }
    return fileList;
}

async function main() {
    const diagramsDir = path.join(__dirname, '..', 'diagrams');
    const mmdFiles = getAllMmdFiles(diagramsDir);
    console.log(`Found ${mmdFiles.length} .mmd files. Starting compilation...`);

    let successCount = 0;
    let failCount = 0;

    for (let i = 0; i < mmdFiles.length; i++) {
        const mmdPath = mmdFiles[i];
        const baseName = mmdPath.substring(0, mmdPath.length - 4);
        const svgPath = `${baseName}.svg`;
        const pngPath = `${baseName}.png`;

        if (fs.existsSync(svgPath) && fs.existsSync(pngPath)) {
            console.log(`[${i+1}/${mmdFiles.length}] Skipping (already exists): ${path.basename(mmdPath)}`);
            successCount++;
            continue;
        }

        console.log(`[${i+1}/${mmdFiles.length}] Compiling: ${path.basename(mmdPath)}`);
        const result = await compileMermaid(mmdPath, svgPath, pngPath);
        if (result.success) {
            successCount++;
        } else {
            console.error(`  -> Failed: ${result.error}`);
            failCount++;
        }
    }

    console.log(`\nCompilation complete!`);
    console.log(`Successfully compiled: ${successCount}`);
    console.log(`Failed to compile: ${failCount}`);
}

main();
