const fs = require('fs');
const files = ['ai_generated_notes.js', 'notes_data.js', 'notes_data_exam_focused.js', 'notes_data_upgraded.js'];
let found = 0;
for (const file of files) {
    if (!fs.existsSync(file)) continue;
    const data = fs.readFileSync(file, 'utf8');
    const matches = data.match(/"title":\s*"([^"]+)",[\s\S]*?"notes":\s*"([^"]+)"/g);
    if (matches) {
        matches.forEach(m => {
            const t = m.match(/"title":\s*"([^"]+)"/)[1];
            const n = m.match(/"notes":\s*"([^"]+)"/)[1];
            
            const pCount = (n.match(/<p>/g) || []).length;
            const ulCount = (n.match(/<ul>/g) || []).length;
            const hCount = (n.match(/<h[1-6]/g) || []).length;
            const mdHCount = (n.match(/#/g) || []).length;
            const mdUlCount = (n.match(/\*/g) || []).length;
            
            // If it has almost no formatting tags and is very long
            if (pCount === 0 && ulCount === 0 && hCount <= 2 && mdHCount === 0 && mdUlCount === 0 && n.length > 500) {
                console.log(file, '->', t, '(Length:', n.length, ')');
                found++;
            }
        });
    }
}
console.log('Total unformatted found:', found);
