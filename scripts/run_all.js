const { spawn } = require('child_process');

const subjects = [
    'geography',
    'biology',
    'physics',
    'chemistry',
    'history',
    'polity',
    'mathematics'
];

async function runSubject(subject) {
    return new Promise((resolve, reject) => {
        console.log(`\n\n======================================================`);
        console.log(`🚀 STARTING MASTER BATCH FOR: ${subject.toUpperCase()}`);
        console.log(`======================================================\n`);

        const child = spawn('node', ['scripts/evolution_engine.js', '--subject', subject], {
            stdio: 'inherit'
        });

        child.on('close', (code) => {
            if (code === 0) {
                console.log(`\n✅ Finished ${subject.toUpperCase()} successfully.`);
                resolve();
            } else {
                console.error(`\n❌ Error: ${subject.toUpperCase()} exited with code ${code}. Continuing anyway...`);
                resolve(); // resolve anyway to keep pipeline going
            }
        });
    });
}

async function runAll() {
    for (const subject of subjects) {
        await runSubject(subject);
        console.log('\n[PIPELINE] Sleeping for 30 seconds before starting next subject to clear out token limits...\n');
        await new Promise(r => setTimeout(r, 30000));
    }
    console.log('\n🎉🎉🎉 ALL SUBJECTS GENERATED COMPLETELY! 🎉🎉🎉');
}

runAll();
