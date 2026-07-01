const fs = require('fs');
const path = require('path');

const BACKUP_PATH = path.join(__dirname, 'data.js.pre_regen_backup');
const CURRENT_PATH = path.join(__dirname, 'data.js');

const backupContent = fs.readFileSync(BACKUP_PATH, 'utf8');
const currentContent = fs.readFileSync(CURRENT_PATH, 'utf8'); // Has only CBT_EXAMS_DATABASE

// In backupContent, we need to strip out the old CBT_EXAMS_DATABASE.
// It might look like `const CBT_EXAMS_DATABASE = [ ... ];`
// Let's just find `const CBT_EXAMS_DATABASE =` and remove everything from there up to the end of the array, or just append all the other DBs to the top of the currentContent!
// Let's extract everything EXCEPT CBT_EXAMS_DATABASE from the backup.

const matchCBT = backupContent.indexOf('const CBT_EXAMS_DATABASE');
if (matchCBT !== -1) {
    let preCBT = backupContent.substring(0, matchCBT);
    
    // Now we need to find where CBT_EXAMS_DATABASE ends.
    // Assuming it's at the end of the file or followed by another `const` or `let`.
    // Actually, in previous versions, `CBT_EXAMS_DATABASE` might have been at the end.
    let postCBT = "";
    const nextConst = backupContent.indexOf('\nconst ', matchCBT + 20);
    const nextLet = backupContent.indexOf('\nlet ', matchCBT + 20);
    const nextVar = backupContent.indexOf('\nvar ', matchCBT + 20);
    
    let nextDecl = -1;
    if (nextConst !== -1) nextDecl = nextConst;
    if (nextLet !== -1 && (nextDecl === -1 || nextLet < nextDecl)) nextDecl = nextLet;
    if (nextVar !== -1 && (nextDecl === -1 || nextVar < nextDecl)) nextDecl = nextVar;
    
    if (nextDecl !== -1) {
        postCBT = backupContent.substring(nextDecl);
    }
    
    const finalContent = preCBT + "\n" + currentContent + "\n" + postCBT;
    fs.writeFileSync(CURRENT_PATH, finalContent, 'utf8');
    console.log("Successfully restored missing databases to data.js!");
} else {
    console.log("Could not find CBT_EXAMS_DATABASE in backup.");
}
