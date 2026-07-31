const fs = require('fs');
const exactMap = JSON.parse(fs.readFileSync('perfect_map.json', 'utf8'));

const dbFiles = [
    'notes_data.js',
    'notes_extra_history.js',
    'notes_extra.js'
];

let missed = [];
for (const [imgName, topicId] of Object.entries(exactMap)) {
    let found = false;
    for (let filename of dbFiles) {
        if (!fs.existsSync(filename)) continue;
        let data = fs.readFileSync(filename, 'utf8');
        
        let topicIdx = data.indexOf(`"id": "${topicId}"`);
        if (topicIdx === -1) {
            topicIdx = data.indexOf(`EXPANDED_NOTES_DATA["${topicId}"]`);
        }
        
        if (topicIdx !== -1) {
            found = true;
            break;
        }
    }
    if (!found) {
        missed.push(imgName + ' -> ' + topicId);
    }
}
fs.writeFileSync('missed_injections.txt', missed.join('\n'));
console.log('Missed count:', missed.length);
