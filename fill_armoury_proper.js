const fs = require('fs');

console.log('Loading question banks and fixing leakages (Hierarchical)...');

const hierarchicalBank = {};

// Helper to check for comprehension and Data Interpretation (DI)
function isComprehension(q) {
    if ((q.topic || '').toLowerCase() === 'reading_comprehension') return true;
    if ((q.topicId || '').toLowerCase() === 'reading_comprehension') return true;
    const s = (q.question || "").toLowerCase();
    
    // Standard comprehension
    if (s.includes('passage') || s.includes('comprehension') || s.includes('read the following') || s.includes('based on the given') || s.includes('based on the above')) return true;
    
    // Data interpretation
    if (s.includes('table shows') || s.includes('given table') || s.includes('following table') || s.includes('pie chart') || s.includes('bar graph') || s.includes('line graph') || s.includes('study the table')) return true;
    
    // AFCAT DI Specific Leakage Catchers
    if (s.includes('jails with highest') || s.includes('trained convicts') || s.includes('placement rate') || s.includes('percentage of trained') || s.includes('more than half of the')) return true;
    
    // Too long (often missing paragraph context)
    if (s.length > 500) return true;

    return false;
}

// Helper to determine core domain robustly
function determineDomain(q, origSubject, exam) {
    const s = (q.question || "").toLowerCase();
    
    const mathTopics = ['arithmetic', 'algebra', 'geometry', 'trigonometry', 'statistics', 'numerical_ability', 'mathematics', 'maths'];
    const engTopics = ['grammar', 'vocabulary', 'sentence_structure', 'english', 'idioms', 'synonyms', 'antonyms'];
    const gsTopics = ['physics', 'chemistry', 'biology', 'history', 'geography', 'polity', 'current_affairs', 'general_awareness', 'gs', 'gk', 'gat', 'reasoning'];
    
    let topicMatch = (q.topic || q.topicId || origSubject || "").toLowerCase();
    
    if (mathTopics.includes(topicMatch)) return 'maths';
    if (engTopics.includes(topicMatch)) return 'english';
    
    // Leakage checker: Look for Math/English patterns in GS or mixed
    const mathWords = [
        'value of', 'equation', 'matrix', 'determinant', 'triangle', 'ratio of', 'average of', 
        'simple interest', 'compound interest', 'profit and loss', 'speed of', 'velocity of', 
        'work and time', 'probability', 'permutation', 'integral', 'derivative', 'sine', 'cosine', 
        'tan ', 'sec ', 'cosec ', 'cot ', 'logarithm', 'quadratic', 'polynomial', 'circumference', 
        'algebra', 'what is the sum', 'population of two', 'digit number', 'cost price', 'selling price',
        'discount of', 'circle of radius', 'area of', 'perimeter of', 'volume of', 'cylinder', 'sphere',
        'cone', 'cuboid', 'cube', 'diagonal', 'vertex', 'polygon', 'arithmetic progression', 'geometric progression'
    ];
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
    
    if (topicMatch === 'mixed') return 'gs';
    if (mathTopics.includes(origSubject)) return 'maths';
    if (engTopics.includes(origSubject)) return 'english';
    return 'gs';
}

function getHierarchy(domain, q, origSubject) {
    let subject = "Mixed";
    let chapter = "General Questions";
    
    let tid = (q.topicId || '').trim();
    if (tid === 'mixed' || tid === 'unknown') tid = '';

    if (domain === "General Studies") {
        const gsSubjects = ['history', 'geography', 'polity', 'economics', 'physics', 'chemistry', 'biology', 'current_affairs', 'general_knowledge'];
        if (gsSubjects.includes(origSubject)) {
            if (origSubject === 'current_affairs') subject = 'Current Affairs';
            else if (origSubject === 'general_knowledge') subject = 'General Knowledge';
            else if (origSubject === 'economics') subject = 'Economics';
            else subject = origSubject.charAt(0).toUpperCase() + origSubject.slice(1).replace(/_/g, ' ');
            chapter = (tid && tid !== origSubject) ? tid : "Mixed " + subject;
        } else {
            subject = "Mixed GS";
            chapter = tid ? tid : "Mixed Questions";
        }
    } else if (domain === "English") {
        const engSubjects = ['grammar', 'vocabulary', 'sentence_structure'];
        if (engSubjects.includes(origSubject)) {
            subject = origSubject.charAt(0).toUpperCase() + origSubject.slice(1).replace(/_/g, ' ');
            chapter = (tid && tid !== origSubject) ? tid : "Mixed " + subject;
        } else {
            subject = "English";
            chapter = tid ? tid : "Mixed Questions";
        }
    } else {
        // Maths
        subject = "Mathematics";
        chapter = tid ? tid : "Mixed Questions";
    }
    
    // Clean up chapter name formatting (e.g. "Ancient_India_Core_and_MCQs" -> "Ancient India")
    chapter = chapter.replace(/_/g, ' ').replace(/Core and MCQs/gi, '').trim();
    if (!chapter) chapter = "General Questions";
    
    return { subject, chapter };
}

function addQuestion(q, origSubject, examStr) {
    if (!q || !q.question || !q.options) return;
    if (isComprehension(q)) return;
    
    let exam = examStr || q.exam || 'ALL';
    let domainKey = determineDomain(q, origSubject, exam);
    
    let domain = "";
    if (domainKey === 'maths') {
        domain = (exam.toLowerCase() === 'nda') ? "Mathematics (NDA)" : "Mathematics (CDS/AFCAT)";
    } else if (domainKey === 'english') {
        domain = "English";
    } else {
        domain = "General Studies";
    }
    
    const { subject, chapter } = getHierarchy(domain, q, origSubject);
    
    if (!hierarchicalBank[subject]) {
        hierarchicalBank[subject] = {};
    }
    if (!hierarchicalBank[subject][chapter]) {
        hierarchicalBank[subject][chapter] = [];
    }
    
    hierarchicalBank[subject][chapter].push({
        question: q.question,
        options: q.options,
        correct: q.correct !== undefined ? q.correct : 0,
        explanation: q.explanation || "Detailed solution is available upon Up-Armouring.",
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

// Deduplicate inside hierarchy
let totalCount = 0;
for (const subject in hierarchicalBank) {
    for (const chapter in hierarchicalBank[subject]) {
        const pool = hierarchicalBank[subject][chapter];
        const seen = new Set();
        const deduplicated = [];
        
        for (const q of pool) {
            const text = (q.question || '').trim().toLowerCase();
            if (!seen.has(text) && text.length > 5) {
                seen.add(text);
                deduplicated.push(q);
            }
        }
        hierarchicalBank[subject][chapter] = deduplicated;
        totalCount += deduplicated.length;
    }
}

console.log('--- After Hierarchical Fixes & Deduplication ---');
console.log(`Total Questions: ${totalCount}`);

const fileContent = `window.EXTRA_QUESTION_BANK = ${JSON.stringify(hierarchicalBank, null, 2)};`;

fs.writeFileSync('extra_bank_data.js', fileContent, 'utf8');
console.log('Successfully written rectified hierarchical extra_bank_data.js');
