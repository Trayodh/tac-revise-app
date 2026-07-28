const fs = require('fs');
const vm = require('vm');
const path = require('path');

const projectDir = path.join(__dirname, '..');
const dataJsPath = path.join(projectDir, 'data.js');
const extraBankPath = path.join(projectDir, 'extra_bank_data.js');

// Load NOTES_DATABASE from data.js
let dataContent = fs.readFileSync(dataJsPath, 'utf8');
const dataJsonStrMatch = dataContent.match(/const NOTES_DATABASE\s*=\s*(\{[\s\S]*?\n\});/);
let NOTES_DATABASE = {};
if (dataJsonStrMatch) {
    NOTES_DATABASE = eval('(' + dataJsonStrMatch[1] + ')');
} else {
    console.error("Could not find NOTES_DATABASE in data.js");
    process.exit(1);
}

// Map from the raw keys in NOTES_DATABASE to the nicely formatted Subject names
const subjectDisplayNames = {
    "mathematics": "Mathematics",
    "english": "English",
    "polity": "Indian Polity",
    "history": "History",
    "geography": "Geography",
    "economics": "Economics",
    "physics": "Physics",
    "chemistry": "Chemistry",
    "biology": "Biology",
    "military-aptitude": "Military Aptitude",
    "current-affairs": "Current Affairs",
    "environment": "Environment"
};

// Build structure
const structure = {};
for (let key in NOTES_DATABASE) {
    let dispName = subjectDisplayNames[key] || key;
    structure[dispName] = {};
    NOTES_DATABASE[key].chapters.forEach(chap => {
        structure[dispName][chap.title] = [];
    });
}

// Load EXTRA_QUESTION_BANK
let extraContent = fs.readFileSync(extraBankPath, 'utf8');
const extraSandbox = { window: {} };
vm.createContext(extraSandbox);
vm.runInContext(extraContent, extraSandbox);
let EXTRA_QUESTION_BANK = extraSandbox.window.EXTRA_QUESTION_BANK;

// Flatten all questions
let allQuestions = [];
for (let sub in EXTRA_QUESTION_BANK) {
    for (let chap in EXTRA_QUESTION_BANK[sub]) {
        EXTRA_QUESTION_BANK[sub][chap].forEach(q => {
            q._originalSub = sub;
            q._originalChap = chap;
            allQuestions.push(q);
        });
    }
}
console.log(`Total questions extracted: ${allQuestions.length}`);

// Keyword definitions
const subjectKeywords = {
    "Geography": ["river", "mountain", "climate", "soil", "industry", "industries", "agriculture", "monsoon", "mineral", "map", "population", "natural resource", "earth", "ocean", "atmosphere", "latitude", "longitude"],
    "Indian Polity": ["constitution", "president", "parliament", "supreme court", "fundamental right", "election", "governance", "panchayati", "amendment", "article", "lok sabha", "rajya sabha", "minister"],
    "History": ["freedom fighter", "war", "dynast", "empire", "civilization", "gandhi", "mughal", "british", "maratha", "revolt", "congress", "sultanate", "vedic", "buddha", "jain", "ancient", "medieval", "modern", "mauryan"],
    "Economics": ["gdp", "inflation", "rbi", "tax", "money", "banking", "fiscal", "unemployment", "budget", "economy", "market", "currency", "poverty", "trade", "wto", "imf"],
    "Biology": ["living", "organism", "plant", "animal", "human body", "disease", "genetic", "ecology", "cell", "blood", "vitamin", "bacteria", "virus", "reproduction", "respiration"],
    "Physics": ["motion", "force", "electricity", "energy", "light", "sound", "magnet", "atom", "nuclear", "velocity", "acceleration", "gravity", "wave", "optics", "thermodynamics", "lens", "mirror"],
    "Chemistry": ["element", "compound", "reaction", "acid", "base", "salt", "organic", "periodic table", "metal", "alloy", "gas", "polymer", "isotope", "carbon", "oxygen"],
    "English": ["grammar", "vocabulary", "sentence", "comprehension", "idiom", "synonym", "antonym", "noun", "verb", "adjective", "adverb", "preposition", "cloze", "spelling", "phrase"],
    "Current Affairs": ["recent", "award", "defence exercise", "scheme", "international organization", "sports", "space mission", "summit", "conference", "minister", "g20", "isro", "nasa"],
    "Mathematics": ["math", "trigonometry", "algebra", "geometry", "probability", "statistics", "calculus", "matrix", "matrices", "arithmetic", "differential", "integral", "equation", "circle", "triangle"],
    "Military Aptitude": ["afcat", "ssb", "reasoning", "oir", "verbal reasoning", "non-verbal", "series", "coding", "decoding", "blood relation", "direction", "figure", "pattern", "missile", "aircraft", "rank"],
    "Environment": ["biodiversity", "wildlife", "conservation", "pollution", "greenhouse", "renewable", "ozone", "national park", "sanctuary", "biosphere"]
};

// Fallback categorization based on topicId if regex matching fails
function categorize(q) {
    let text = (q.question + " " + (q.explanation || "")).toLowerCase();
    
    // First check old topicId for strong signals
    let t = (q.topicId || "").toLowerCase();
    let oSub = (q._originalSub || "").toLowerCase();
    let oChap = (q._originalChap || "").toLowerCase();
    let combinedContext = `${text} ${t} ${oSub} ${oChap}`;

    let bestSubject = "Mathematics"; // default
    let maxMatches = 0;

    for (let sub in subjectKeywords) {
        let matches = 0;
        subjectKeywords[sub].forEach(kw => {
            if (combinedContext.includes(kw.toLowerCase())) matches++;
        });
        
        // Give heavy weight to topicId/original category
        if (t.includes(sub.toLowerCase())) matches += 10;
        if (oSub.includes(sub.toLowerCase())) matches += 10;
        if (oChap.includes(sub.toLowerCase())) matches += 5;

        if (matches > maxMatches) {
            maxMatches = matches;
            bestSubject = sub;
        }
    }

    // Attempt to map to a chapter within the chosen subject
    let bestChapter = null;
    let chapters = Object.keys(structure[bestSubject]);
    if (chapters.length > 0) {
        bestChapter = chapters[0]; // fallback to first chapter
        let maxChapMatches = 0;
        chapters.forEach(chap => {
            let chapMatches = 0;
            let chapWords = chap.toLowerCase().split(/[\s,&()]+/);
            chapWords.forEach(w => {
                if (w.length > 3 && combinedContext.includes(w)) chapMatches++;
            });
            if (t.includes(chap.toLowerCase()) || oChap.includes(chap.toLowerCase())) chapMatches += 10;
            
            if (chapMatches > maxChapMatches) {
                maxChapMatches = chapMatches;
                bestChapter = chap;
            }
        });
    }

    return { subject: bestSubject, chapter: bestChapter };
}

let unclassifiedCount = 0;

allQuestions.forEach(q => {
    let cat = categorize(q);
    
    // Clean up temporary fields
    delete q._originalSub;
    delete q._originalChap;

    if (cat.subject && cat.chapter) {
        structure[cat.subject][cat.chapter].push(q);
    } else {
        unclassifiedCount++;
        // push to first available
        let firstSub = Object.keys(structure)[0];
        let firstChap = Object.keys(structure[firstSub])[0];
        structure[firstSub][firstChap].push(q);
    }
});

console.log(`Reclassification complete. Unclassified/fallback: ${unclassifiedCount}`);

// Clean empty chapters
for (let sub in structure) {
    for (let chap in structure[sub]) {
        if (structure[sub][chap].length === 0) {
            // keep it to maintain structure
        }
    }
}

// Write back
const finalStr = 'window.EXTRA_QUESTION_BANK = ' + JSON.stringify(structure, null, 2) + ';';
fs.writeFileSync(extraBankPath, finalStr, 'utf8');

console.log('Successfully updated extra_bank_data.js');
