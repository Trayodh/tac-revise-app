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
            const hCount = (n.match(/#+\s/g) || []).length;
            const htmlHCount = (n.match(/<h[1-6]/g) || []).length;
            
            // Exclude small ones
            if (hCount === 0 && htmlHCount <= 2 && n.length > 800) {
                console.log(file, '->', t, '(Length:', n.length, 'HTML Headers:', htmlHCount, ')');
                found++;
            }
        });
    }
}
console.log('Total unformatted found:', found);
