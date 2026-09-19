const fs = require('fs');
const exactMap = JSON.parse(fs.readFileSync('perfect_map.json'));
const files = [
    'notes_data.js',
    'notes_extra_history.js',
    'notes_extra.js'
];
const allContent = files.map(f => fs.existsSync(f) ? fs.readFileSync(f, 'utf8') : '').join('\n');
let missing = [];
for (const [img, id] of Object.entries(exactMap)) {
    const encodedPath = img.split('/').map(encodeURIComponent).join('/');
    if (!allContent.includes(`/${encodedPath}"`) && !allContent.includes(`/${img}"`)) {
        missing.push(img);
    }
}
console.log('Missing from files (' + missing.length + '):', missing);
