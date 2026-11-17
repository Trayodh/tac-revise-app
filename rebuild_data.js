const fs = require('fs');
const path = require('path');
const vm = require('vm');

const BACKUP_PATH = path.join(__dirname, 'data.js.pre_regen_backup');
const CURRENT_PATH = path.join(__dirname, 'data.js');

const backupContent = fs.readFileSync(BACKUP_PATH, 'utf8');
const currentContent = fs.readFileSync(CURRENT_PATH, 'utf8');

// Load CURRENT data.js to get the newly fixed CBT_EXAMS_DATABASE
const currentExecutable = currentContent.replace('const CBT_EXAMS_DATABASE', 'var CBT_EXAMS_DATABASE');
const currentSandbox = {};
vm.createContext(currentSandbox);
vm.runInContext(currentExecutable, currentSandbox);
const newCBT = currentSandbox.CBT_EXAMS_DATABASE;

// Load BACKUP data.js to get all OTHER databases
// Convert all const/let to var so they attach to sandbox
const backupExecutable = backupContent.replace(/const /g, 'var ').replace(/let /g, 'var ');
const backupSandbox = {};
vm.createContext(backupSandbox);
try {
    vm.runInContext(backupExecutable, backupSandbox);
} catch(e) {
    console.error("Failed to parse backup:", e);
    process.exit(1);
}

// Rebuild file
let finalString = "";

for (const key in backupSandbox) {
    if (key === 'CBT_EXAMS_DATABASE') {
        // We use the new one!
        finalString += `const ${key} = ${JSON.stringify(newCBT, null, 2)};\n\n`;
    } else {
        // We restore the old one!
        finalString += `const ${key} = ${JSON.stringify(backupSandbox[key], null, 2)};\n\n`;
    }
}

fs.writeFileSync(CURRENT_PATH, finalString, 'utf8');
console.log("Successfully rebuilt data.js using full object serialization!");
