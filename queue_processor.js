const { execSync } = require('child_process');

async function main() {
    const vid = "RyDUUvxVkqY";
    console.log(`Queued video ${vid}. Waiting for existing batch to finish...`);

    let isBatchRunning = true;
    while (isBatchRunning) {
        try {
            // tasklist /FI "IMAGENAME eq node.exe" /V
            // But simpler: just check if batch_process.js is in wmic process
            const out = execSync('wmic process where "name=\'node.exe\'" get commandline', { encoding: 'utf8' });
            if (!out.includes('batch_process.js')) {
                isBatchRunning = false;
            } else {
                console.log("Batch is still running. Sleeping 60s...");
                await new Promise(r => setTimeout(r, 60000));
            }
        } catch (e) {
            isBatchRunning = false;
        }
    }

    console.log(`Batch finished! Now processing ${vid}...`);
    try {
        execSync(`node process_live_stream.js ${vid}`, { stdio: 'inherit' });
        execSync(`node inject_live_content.js`, { stdio: 'inherit' });
        console.log(`Successfully processed ${vid}`);
    } catch(e) {
        console.error(`Failed to process ${vid}:`, e.message);
    }
}
main();
