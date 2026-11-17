const fs = require('fs');

const DB_FILES = [
    'notes_data.js',
    ...fs.readdirSync('.').filter(f => f.startsWith('notes_extra_') && f.endsWith('.js') && f !== 'notes_extra.js')
];

let allTopics = [];

for (const file of DB_FILES) {
    if (!fs.existsSync(file)) continue;
    let txt = fs.readFileSync(file, 'utf8');
    
    const regex = /"id"\s*:\s*"([^"]+)"[\s\S]*?"title"\s*:\s*"([^"]+)"/g;
    let match;
    while ((match = regex.exec(txt)) !== null) {
        allTopics.push({ id: match[1], title: match[2], file: file });
    }
}

fs.writeFileSync('all_topics_list.json', JSON.stringify(allTopics, null, 2));
console.log(`Extracted ${allTopics.length} topics to all_topics_list.json`);
