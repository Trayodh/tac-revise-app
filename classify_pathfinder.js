const fs = require('fs');

const inPath = 'question_banks/pathfinder_bank.json';

if (!fs.existsSync(inPath)) {
    console.error("pathfinder_bank.json not found!");
    process.exit(1);
}

const rawData = JSON.parse(fs.readFileSync(inPath, 'utf8'));
const rawQuestions = rawData.gs || []; // The python script dumps everything into 'gs'

const classified = {
    gs: [],
    english: [],
    maths: []
};

// Advanced Heuristic
rawQuestions.forEach(q => {
    const text = (q.question + " " + q.options.join(" ")).toLowerCase();
    
    // Maths detection: Look for heavy math keywords or pure numbers
    const mathKeywords = ['sin ', 'cos ', 'tan ', 'triangle', 'radius', 'polygon', 'polynomial', 'algebra', 'lcm ', 'hcf ', 'cm²', 'area of', 'volume of'];
    let mathScore = mathKeywords.filter(k => text.includes(k)).length;
    let numOpts = q.options.filter(o => /^[0-9\.\-\+\/x]+$/.test(o.trim())).length;
    if (numOpts >= 3) mathScore += 2;
    
    if (mathScore >= 2) {
        classified.maths.push(q);
        return;
    }
    
    // English detection: Length check for paragraphs, or grammar keywords
    const engKeywords = ['synonym', 'antonym', 'idiom', 'phrase', 'verb', 'adjective', 'sentence', 'passage', 'comprehension', 'choose the word', 'closest in meaning', 'opposite in meaning', 'fill in the blank', 'spelling'];
    
    // If the question is exceptionally long (reading comprehension passage)
    const isLongParagraph = q.question.length > 500;
    
    // If the options are extremely short and look like vocabulary words
    const areShortVocabOpts = q.options.every(o => o.length < 15 && o.split(' ').length <= 2) && q.question.length < 150;

    if (engKeywords.some(k => text.includes(k)) || isLongParagraph) {
        classified.english.push(q);
        return;
    }
    
    // Default to GS
    classified.gs.push(q);
});

console.log(`Original total: ${rawQuestions.length}`);
console.log(`Classified as GS: ${classified.gs.length}`);
console.log(`Classified as English: ${classified.english.length}`);
console.log(`Classified as Maths: ${classified.maths.length}`);

// Save back
fs.writeFileSync(inPath, JSON.stringify(classified, null, 2), 'utf8');
console.log("Successfully saved classified questions.");
