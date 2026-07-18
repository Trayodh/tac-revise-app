const fs = require('fs');

global.window = {};
eval(fs.readFileSync('extra_bank_data.js', 'utf8'));
const bank = window.EXTRA_QUESTION_BANK;

// Define keywords for moving chapters out of General Studies -> Mixed GS
const mathsChapters = ['algebra', 'coordinate geometry', '3d geometry', 'vectors', 'statistics', 'trigonometry', 'calculus', 'functions', 'set theory', 'matrices', 'circles'];
const englishChapters = ['english vocabulary', 'english antonyms', 'english prepositions', 'english idioms', 'grammar', 'vocabulary', 'english grammar', 'antonyms', 'cloze test', 'sentence completion', 'idioms and phrases', 'word classes'];
const physicsChapters = ['physics', 'physics optics', 'physics electricity', 'physics magnetism', 'physics gravitation', 'physics mechanics', 'physics waves', 'physics energy'];
const chemistryChapters = ['chemistry', 'chemistry metals', 'chemistry alloys', 'chemistry carbon', 'chemistry reactions'];
const biologyChapters = ['biology', 'biology reproduction', 'biology cell', 'biology health', 'biology genetics'];
const historyChapters = ['history medieval', 'history world'];
const geographyChapters = ['geography physical', 'geography india'];
const otherGSChapters = ['reasoning', 'afcat', 'science', 'environment', 'sports', 'economics', 'international relations'];

function isComprehension(qText) {
    if (!qText) return false;
    const lower = qText.toLowerCase();
    if (lower.includes('direction:') || lower.includes('directions:') || lower.includes('directions (q.')) return true;
    if (lower.includes('read the following passage') || lower.includes('read the following')) return true;
    if (qText.length > 500) return true; // Very long questions are usually comprehensions
    return false;
}

// 1. Move subjects and chapters out of "Mixed GS"
const mixedGs = bank['General Studies']['Mixed GS'];
if (mixedGs) {
    for (let chapter in mixedGs) {
        if (chapter === 'Mixed Questions') continue;
        
        let targetDomain = 'General Studies';
        let targetSubject = 'Mixed GS'; // Default
        
        let cleanChapter = chapter.toLowerCase().trim();
        
        if (mathsChapters.includes(cleanChapter)) {
            targetDomain = 'Mathematics (NDA)'; // Could also be CDS/AFCAT, but let's put in NDA for now
            targetSubject = 'Mathematics';
        } else if (englishChapters.includes(cleanChapter)) {
            targetDomain = 'English';
            targetSubject = 'English';
        } else if (physicsChapters.includes(cleanChapter)) {
            targetSubject = 'Physics';
        } else if (chemistryChapters.includes(cleanChapter)) {
            targetSubject = 'Chemistry';
        } else if (biologyChapters.includes(cleanChapter)) {
            targetSubject = 'Biology';
        } else if (historyChapters.includes(cleanChapter)) {
            targetSubject = 'History';
        } else if (geographyChapters.includes(cleanChapter)) {
            targetSubject = 'Geography';
        } else if (otherGSChapters.includes(cleanChapter)) {
            if (cleanChapter === 'economics') targetSubject = 'Economy';
            else if (cleanChapter === 'reasoning' || cleanChapter === 'afcat') targetSubject = 'Mixed GS';
            else targetSubject = 'General knowledge';
        }
        
        // Ensure structure exists
        if (!bank[targetDomain]) bank[targetDomain] = {};
        if (!bank[targetDomain][targetSubject]) bank[targetDomain][targetSubject] = {};
        
        // Move the chapter
        bank[targetDomain][targetSubject][chapter] = mixedGs[chapter];
        
        // Remove from Mixed GS
        delete mixedGs[chapter];
    }
}

// 2. Scan all questions to filter out comprehensions and maths leakage
let removedCount = 0;
for (let domain in bank) {
    for (let subject in bank[domain]) {
        for (let chapter in bank[domain][subject]) {
            let qs = bank[domain][subject][chapter];
            let newQs = [];
            for (let q of qs) {
                // Remove comprehension
                if (isComprehension(q.question)) {
                    removedCount++;
                    continue;
                }
                
                // If it's Mixed GS -> Mixed Questions, try to detect maths and move it
                if (domain === 'General Studies' && chapter === 'Mixed Questions') {
                    let qLower = q.question.toLowerCase();
                    if (qLower.includes('divisible by') || qLower.includes('harmonic mean') || qLower.includes('two outlets') || qLower.includes('algebraic') || qLower.includes('sin theta') || qLower.includes('cos theta')) {
                        // Move to Maths
                        if (!bank['Mathematics (NDA)']) bank['Mathematics (NDA)'] = {};
                        if (!bank['Mathematics (NDA)']['Mathematics']) bank['Mathematics (NDA)']['Mathematics'] = {};
                        if (!bank['Mathematics (NDA)']['Mathematics']['Mixed Questions']) bank['Mathematics (NDA)']['Mathematics']['Mixed Questions'] = [];
                        bank['Mathematics (NDA)']['Mathematics']['Mixed Questions'].push(q);
                        continue;
                    }
                }
                
                newQs.push(q);
            }
            bank[domain][subject][chapter] = newQs;
            
            // Delete chapter if empty
            if (newQs.length === 0) {
                delete bank[domain][subject][chapter];
            }
        }
        // Delete subject if empty
        if (Object.keys(bank[domain][subject]).length === 0) {
            delete bank[domain][subject];
        }
    }
}

console.log("Removed comprehension questions:", removedCount);

const outStr = "window.EXTRA_QUESTION_BANK = " + JSON.stringify(bank, null, 2) + ";";
fs.writeFileSync('extra_bank_data.js', outStr);
console.log("Successfully rebuilt extra_bank_data.js");
