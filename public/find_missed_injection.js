const fs = require('fs');
const exactMap = JSON.parse(fs.readFileSync('perfect_map.json', 'utf8'));
let count = 0;
let missed = [];
for (const [img, id] of Object.entries(exactMap)) {
    let fileWithImg = null;
    ['notes_data.js', 'notes_extra_history.js', 'notes_extra.js'].forEach(f => {
        if(fs.existsSync(f)) {
            let data = fs.readFileSync(f, 'utf8');
            if (data.includes(img.replace('.png','').replace('.jpg','').replace('.jpeg',''))) {
                fileWithImg = f;
            }
        }
    });
    if (!fileWithImg) missed.push(img);
    else count++;
}
console.log('Injected found by checking names:', count);
console.log('Not injected:', missed);
