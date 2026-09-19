const fs = require('fs');

const files = ['ai_generated_notes.js', 'notes_data.js', 'notes_data_exam_focused.js'];
const targetTopics = [
    "Classification of Plants and Animals",
    "Preamble Order",
    "Organisations",
    "Mathematics (NDA/CDS)",
    "Complex Numbers",
    "Measures of Central Tendency",
    "Methods",
    "Indefinite",
    "Time & Distance",
    "Conversions"
];

let extracted = {};

for (const file of files) {
    if (!fs.existsSync(file)) continue;
    const data = fs.readFileSync(file, 'utf8');
    
    // Find each topic
    targetTopics.forEach(topic => {
        if (extracted[topic]) return; // already got it
        
        // Regex to extract title and notes
        const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`"title":\\s*"${escapeRegex(topic)}",[\\s\\S]*?"notes":\\s*"([^"]+)"`, 'i');
        const match = data.match(regex);
        if (match) {
            extracted[topic] = match[1];
        }
    });
}

// Dump to a JSON file for the AI to read
fs.writeFileSync('scratch/raw_poor_notes.json', JSON.stringify(extracted, null, 2));
console.log('Extracted raw notes to scratch/raw_poor_notes.json');
