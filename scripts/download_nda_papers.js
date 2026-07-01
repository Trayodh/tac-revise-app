const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const DRIVE_FOLDER_URL = 'https://drive.google.com/drive/folders/1zklUB6A2lp4dVE8gHRyXiLKEdvvb6CYA?usp=drive_link';
const OUTPUT_DIR = path.join(__dirname, '..', 'pdf_uploads', 'nda_math');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

console.log('Downloading NDA Math papers from Google Drive...');
console.log('Ensure you have Python installed and run: `pip install gdown` before executing this script.');

try {
    // We use python -m gdown to ensure it finds the module even if the gdown binary isn't in PATH
    execSync(`python -m gdown --folder "${DRIVE_FOLDER_URL}" -O "${OUTPUT_DIR}"`, { stdio: 'inherit' });
    console.log('✅ Successfully downloaded NDA Math papers!');
} catch (error) {
    console.error('❌ Failed to download files. Make sure Python and gdown are installed.');
    console.error('You can install gdown by running: pip install gdown');
    process.exit(1);
}
