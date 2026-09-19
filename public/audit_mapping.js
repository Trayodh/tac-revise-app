const fs = require('fs');

const mapping = JSON.parse(fs.readFileSync('image_mapping_draft.json', 'utf8'));

let unmapped = [];
let mapped = 0;
let lowScore = [];

for (const [key, value] of Object.entries(mapping)) {
    if (!value.mappedTopicId) {
        unmapped.push(value.basename);
    } else {
        mapped++;
        if (value.score < 50) {
            lowScore.push(`${value.basename} -> ${value.mappedTopicTitle} (Score: ${value.score.toFixed(1)})`);
        }
    }
}

console.log(`Total images: ${Object.keys(mapping).length}`);
console.log(`Mapped: ${mapped}`);
console.log(`Unmapped: ${unmapped.length}`);

if (unmapped.length > 0) {
    console.log(`\nUnmapped images:`);
    console.log(unmapped.join(', '));
}

if (lowScore.length > 0) {
    console.log(`\nLow score mappings (< 50):`);
    console.log(lowScore.join('\n'));
}
