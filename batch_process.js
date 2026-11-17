const { execSync } = require('child_process');
const fs = require('fs');

function runCommand(command) {
    console.log(`Running: ${command}`);
    execSync(command, { stdio: 'inherit' });
}

async function main() {
    const vids = JSON.parse(fs.readFileSync('mega_batch.json', 'utf8'));
    for (let i = 0; i < vids.length; i++) {
        const vid = vids[i];
        console.log(`\n\n=== Processing Video ${i+1}/${vids.length}: ${vid} ===`);
        try {
            runCommand(`node process_live_stream.js ${vid}`);
            runCommand(`node inject_live_content.js`);
        } catch(e) {
            console.error(`Failed to process ${vid}:`, e.message);
        }
        
        if (i < vids.length - 1) {
            console.log("Sleeping 65s to respect Gemini rate limits...");
            await new Promise(r => setTimeout(r, 65000));
        }
    }
    console.log("All done!");
}
main();
