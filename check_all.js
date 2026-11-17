const fs = require('fs');
const files = ['ai_generated_notes.js', 'notes_data.js', 'notes_data_exam_focused.js', 'notes_data_upgraded.js'];
let c = 0;
for (const file of files) {
    if (!fs.existsSync(file)) continue;
    const data = fs.readFileSync(file, 'utf8');
    const matches = data.match(/"title":\s*"([^"]+)",[\s\S]*?"notes":\s*"([^"]+)"/g);
    if (matches) {
        matches.forEach(m => {
            const t = m.match(/"title":\s*"([^"]+)"/)[1];
            const n = m.match(/"notes":\s*"([^"]+)"/)[1];
            if (!n.includes('<h') && !n.includes('#') && n.length > 500) {
                console.log(file, t, n.length);
                c++;
            }
        });
    }
}
console.log('Total:', c);
