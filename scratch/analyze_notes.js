const fs = require('fs');
const content = fs.readFileSync('notes_data_upgraded.js', 'utf8');

const regexes = [
    /notes:\s*`([\s\S]*?)`/g,
    /EXPANDED_NOTES_DATA\[.*?\]\s*=\s*`([\s\S]*?)`;/g,
    /window\.EXPANDED_NOTES_DATA\[.*?\]\s*=\s*`([\s\S]*?)`;/g,
    /window\.EXPANDED_NOTES_DATA\[.*?\]\s*=\s*String\.raw`([\s\S]*?)`;/g
];

let totalTopics = 0;
let totalWords = 0;
let minWords = Infinity;
let maxWords = 0;

for (let regex of regexes) {
    let match;
    while ((match = regex.exec(content)) !== null) {
        totalTopics++;
        const text = match[1].replace(/<[^>]+>/g, ' ');
        const words = text.split(/\s+/).filter(w => w.length > 0).length;
        totalWords += words;
        if (words < minWords) minWords = words;
        if (words > maxWords) maxWords = words;
    }
}

console.log('Total Topics:', totalTopics);
console.log('Avg Words:', totalTopics > 0 ? (totalWords / totalTopics).toFixed(2) : 0);
console.log('Min Words:', minWords === Infinity ? 0 : minWords);
console.log('Max Words:', maxWords);
