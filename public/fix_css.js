const fs=require('fs');
let c=fs.readFileSync('js/notes_browser.js','utf8');
c=c.replace('<div id="dynamic-notes-container" class="scroll-y"', '<div id="dynamic-notes-container" class="notes-text scroll-y"');
fs.writeFileSync('js/notes_browser.js', c);
