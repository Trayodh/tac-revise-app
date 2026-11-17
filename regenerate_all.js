const { execSync } = require('child_process');
const fs = require('fs');

console.log("=== Starting Gemini SVG Regeneration Pipeline ===");

if (fs.existsSync('notes_svgs_generated.js')) {
    console.log("Archiving old Cerebras SVGs...");
    fs.renameSync('notes_svgs_generated.js', 'notes_svgs_generated.bak.js');
}

console.log("1/4: Generating 123 new SVGs using Gemini API...");
try {
    // This will take ~10 minutes to respect rate limits
    execSync('node generate_svgs.js', { stdio: 'inherit' });
} catch (e) {
    console.error("Failed to generate SVGs", e);
    process.exit(1);
}

console.log("2/4: Extracting SVGs to assets folder...");
try {
    execSync('node extract_svgs_to_files.js', { stdio: 'inherit' });
} catch (e) {
    console.error("Failed to extract SVGs", e);
    process.exit(1);
}

console.log("3/4: Fixing folder cases...");
try {
    execSync('node fix_case.js', { stdio: 'inherit' });
} catch (e) {
    console.error("Failed to fix case", e);
    process.exit(1);
}

console.log("4/4: Running Render pre-flight verification...");
try {
    execSync('npm run test:render', { stdio: 'inherit' });
    console.log("Pre-flight passed. Commit and push to main to trigger Render auto-deploy.");
} catch (e) {
    console.error("Render pre-flight verification failed", e);
    process.exit(1);
}

console.log("=== Pipeline Finished successfully! ===");
