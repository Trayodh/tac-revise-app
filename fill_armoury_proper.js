const fs = require('fs');

console.log('Loading question banks and fixing leakages...');

let gsPool = [];
let englishPool = [];
let mathsNdaPool = [];
let mathsCdsAfcatPool = [];

// Helper to check for comprehension
function isComprehension(q) {
    if ((q.topic || '').toLowerCase() === 'reading_comprehension') return true;
    if ((q.topicId || '').toLowerCase() === 'reading_comprehension') return true;
    const s = (q.question || "").toLowerCase();
    return s.includes('passage') || s.includes('comprehension') || s.includes('read the following') || s.includes('based on the');
}

// Helper to determine subject robustly
function determineSubject(q, origSubject, exam) {
    const s = (q.question || "").toLowerCase();
    
    // Check topics directly
    const mathTopics = ['arithmetic', 'algebra', 'geometry', 'trigonometry', 'statistics', 'numerical_ability', 'mathematics', 'maths'];
    const engTopics = ['grammar', 'vocabulary', 'sentence_structure', 'english', 'idioms', 'synonyms', 'antonyms'];
    const gsTopics = ['physics', 'chemistry', 'biology', 'history', 'geography', 'polity', 'current_affairs', 'general_awareness', 'gs', 'gk', 'gat', 'reasoning'];
    
    let topicMatch = (q.topic || q.topicId || origSubject || "").toLowerCase();
    
    if (mathTopics.includes(topicMatch)) return 'maths';
    if (engTopics.includes(topicMatch)) return 'english';
    if (gsTopics.includes(topicMatch) && topicMatch !== 'mixed') {
        // Even if it claims GS, we must double check for leaked math keywords
        // Fallthrough to leakage checker
    }
    
    // Leakage checker: Look for Math/English patterns in GS or mixed
    const mathWords = ['value of', 'equation', 'matrix', 'determinant', 'triangle', 'ratio of', 'average of', 'simple interest', 'compound interest', 'profit and loss', 'speed of', 'velocity of', 'work and time', 'probability', 'permutation', 'integral', 'derivative', 'sine', 'cosine', 'tan ', 'sec ', 'cosec ', 'cot ', 'logarithm', 'quadratic', 'polynomial', 'circumference', 'algebra', 'what is the sum', 'population of two'];
    for(let w of mathWords) {
        if (s.includes(w)) return 'maths';
    }
    
    // Math symbols check
    if (s.match(/[∫∑√∞θπ]/) || s.match(/dy\/dx/) || s.match(/\d+\s*:\s*\d+/) || s.includes('cm²') || s.includes('m²')) {
        return 'maths';
    }
    
    const engWords = ['synonym', 'antonym', 'closest in meaning', 'opposite in meaning', 'idiom', 'sentence improvement', 'fill in the blank', 'spelling', 'grammatically correct', 'error spotting', 'part of speech', 'adjective', 'adverb', 'noun', 'pronoun', 'preposition', 'conjunction', 'active voice', 'passive voice', 'direct speech', 'indirect speech', 'ordering of words', 'ordering of sentences'];
    for(let w of engWords) {
        if (s.includes(w)) return 'english';
    }
    
    // Default fallback
    if (topicMatch === 'mixed') {
        return 'gs';
    }
    
    if (mathTopics.includes(origSubject)) return 'maths';
    if (engTopics.includes(origSubject)) return 'english';
    return 'gs';
}

function addQuestion(q, origSubject, examStr) {
    if (!q || !q.question || !q.options) return;
    if (isComprehension(q)) return;
    
    let exam = examStr || q.exam || 'ALL';
    let subject = determineSubject(q, origSubject, exam);
    
    let targetPool = null;
    if (subject === 'maths') {
        if (exam.toLowerCase() === 'nda') targetPool = mathsNdaPool;
        else targetPool = mathsCdsAfcatPool;
    } else if (subject === 'english') {
        targetPool = englishPool;
    } else {
        targetPool = gsPool;
    }
    
    targetPool.push({
        question: q.question,
        options: q.options,
        correct: q.correct !== undefined ? q.correct : 0,
        explanation: q.explanation || "Detailed solution is available upon Up-Armouring.",
        topicId: q.topic || q.topicId || origSubject || "mixed",
        exam: exam
    });
}

// 1. Load pathfinder_bank.json
try {
    const pfData = JSON.parse(fs.readFileSync('question_banks/pathfinder_bank.json', 'utf8'));
    if (pfData.gs) pfData.gs.forEach(q => addQuestion(q, 'gs', q.exam));
    if (pfData.english) pfData.english.forEach(q => addQuestion(q, 'english', q.exam));
    if (pfData.maths) pfData.maths.forEach(q => addQuestion(q, 'maths', q.exam));
    console.log('Loaded pathfinder_bank.json');
} catch (e) {
    console.log('Failed to load pathfinder_bank.json', e.message);
}

// 2. Load structured_bank.json
try {
    const stData = JSON.parse(fs.readFileSync('question_banks/structured_bank.json', 'utf8'));
    
    function extractRec(obj, exam, currentSubject) {
        if (Array.isArray(obj)) {
            obj.forEach(q => {
                q.topic = currentSubject;
                addQuestion(q, currentSubject, exam);
            });
        } else if (typeof obj === 'object') {
            for (let k in obj) {
                // Determine more specific subject/topic if we go deeper
                extractRec(obj[k], exam, k);
            }
        }
    }
    
    for (const exam of Object.keys(stData)) {
        extractRec(stData[exam], exam, 'mixed');
    }
    console.log('Loaded structured_bank.json');
} catch (e) {
    console.log('Failed to load structured_bank.json', e.message);
}

// Deduplicate
function dedupe(pool) {
    const seen = new Set();
    const result = [];
    for (const q of pool) {
        const text = (q.question || '').trim().toLowerCase();
        if (!seen.has(text) && text.length > 5) {
            seen.add(text);
            result.push(q);
        }
    }
    return result;
}

gsPool = dedupe(gsPool);
englishPool = dedupe(englishPool);
mathsNdaPool = dedupe(mathsNdaPool);
mathsCdsAfcatPool = dedupe(mathsCdsAfcatPool);

console.log('--- After Fixes & Deduplication ---');
console.log(`Total GS: ${gsPool.length}`);
console.log(`Total English: ${englishPool.length}`);
console.log(`Total Maths (NDA): ${mathsNdaPool.length}`);
console.log(`Total Maths (CDS/AFCAT): ${mathsCdsAfcatPool.length}`);

const finalObj = {
    gs: gsPool,
    english: englishPool,
    maths_nda: mathsNdaPool,
    maths_cds_afcat: mathsCdsAfcatPool
};

const fileContent = `window.EXTRA_QUESTION_BANK = ${JSON.stringify(finalObj, null, 2)};`;

fs.writeFileSync('extra_bank_data.js', fileContent, 'utf8');
console.log('Successfully written rectified extra_bank_data.js');
