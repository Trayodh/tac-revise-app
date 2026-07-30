const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const util = require('util');
const execPromise = util.promisify(exec);

async function compileMermaid(mmdPath, outputSvgPath, outputPngPath) {
    try {
        console.log(`[Compiler] Compiling: ${mmdPath}`);
        const configPath = path.join(__dirname, 'puppeteer-config.json');
        // Compile to SVG
        await execPromise(`npx mmdc -i "${mmdPath}" -o "${outputSvgPath}" -b transparent -p "${configPath}"`);
        // Compile to PNG
        await execPromise(`npx mmdc -i "${mmdPath}" -o "${outputPngPath}" -b transparent -s 3 -p "${configPath}"`);
        
        return { success: true };
    } catch (e) {
        console.error(`[Compiler] Compilation failed:`, e.message);
        return { success: false, error: e.message };
    }
}

module.exports = { compileMermaid };
