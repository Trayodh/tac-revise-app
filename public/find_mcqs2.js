const fs = require('fs'); 
const txt = fs.readFileSync('notes_generated.js', 'utf8'); 
const chapters = txt.split('window.EXPANDED_NOTES_DATA['); 
for (let i = 1; i < chapters.length; i++) { 
    const c = chapters[i]; 
    const name = c.substring(c.indexOf('"')+1, c.indexOf('"', c.indexOf('"')+1)); 
    if (c.includes('Multiple Choice Questions') || c.includes('Practice Exercises (MCQs)')) { 
        console.log(name); 
    } 
}
