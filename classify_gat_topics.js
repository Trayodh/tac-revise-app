const fs = require('fs');
const path = require('path');
const vm = require('vm');
const xlsx = require('xlsx');

const DATA_JS_PATH = path.join(__dirname, 'data.js');

const ECONOMY_STRICT = [
    'multidimensional poverty index', 'mpi', 'income elasticity', 'price elasticity',
    'price elasticity of demand', 'fiscal deficit', 'revenue deficit', 'primary deficit',
    'monetary policy', 'inflation', 'repo rate', 'reverse repo', 'crr', 'slr',
    'wpi', 'cpi', 'consumer price index', 'wholesale price index',
    'balance of payments', 'trade deficit', 'trade surplus', 'current account deficit',
    'unemployment', 'poverty line', 'below poverty line', 'gini coefficient',
    'human development index', 'hdi',
    'national income', 'per capita income', 'gross domestic product', 'gdp',
    'direct tax', 'indirect tax', 'goods and services tax', 'customs duty',
    'disinvestment', 'foreign direct investment', 'fdi limit',
    'open market operations', 'quantitative easing',
    'sebi', 'rbi', 'niti aayog', 'currency', 'bank', 'rupee'
];

const HISTORY_EXTRA = [
    'industrial revolution', 'arikamedu', 'tamralipti', 'bharukachcha', 'muchiri',
    'maritime trade', 'spice trade', 'silk route',
    'sucheta kripalani', 'bharat ratna', 'rajagopalachari',
    'swadeshi', 'khilafat', 'satyagraha', 'dandi march', 'gandhi', 'nehru', 'bose',
    'cabinet mission', 'cripps', 'wavell',
    'gupta', 'maurya', 'mughal', 'chola', 'harappa', 'indus valley',
    'ajanta', 'ellora', 'sanchi', 'buddha', 'mahavira',
    'revolt of 1857', 'movement', 'treaty', 'dynasty', 'empire', 'king', 'war of'
];

const CHEMISTRY_STRICT = [
    'benzene', 'hardness of water', 'nitrogen bonding', 'tetravalent', 'isotope', 'diatomic',
    'electron', 'proton', 'neutron', 'nucleus',
    'acid', 'base', 'salt', 'ph value', 'alkali',
    'periodic table', 'atomic number', 'atomic mass', 'element', 'compound',
    'oxidation', 'reduction', 'redox', 'valence',
    'alloy', 'composition', 'polymer', 'plastic', 'glass',
    'catalyst', 'activation energy', 'reaction',
    'carbohydrate', 'protein', 'amino acid',
    'organic', 'inorganic', 'chemical formula',
    'mole', 'avogadro', 'fertilizer', 'urea', 'gas'
];

const PHYSICS_STRICT = [
    'newton', 'force', 'momentum', 'gravity', 'mass', 'weight',
    'kinetic energy', 'potential energy', 'work', 'power',
    'optics', 'refraction', 'reflection', 'snell', 'refractive index', 'lens', 'mirror',
    'critical angle', 'light', 'photon',
    'electric', 'magnetic', 'electromagnetic', 'faraday', 'current', 'voltage',
    'ohm', 'resistance', 'capacitance', 'inductance', 'circuit',
    'heat', 'temperature', 'conduction', 'convection', 'radiation',
    'thermodynamics', 'entropy',
    'sound', 'frequency', 'wavelength', 'doppler', 'wave',
    'nuclear', 'fission', 'fusion', 'radioactiv', 'half-life',
    'semiconductor', 'diode', 'transistor', 'photoelectric',
    'x-ray', 'gamma', 'ultraviolet', 'infrared',
    'bernoulli', 'archimedes', 'pascal', 'pressure', 'density',
    'torque', 'angular', 'speed', 'velocity', 'acceleration'
];

const BIOLOGY_STRICT = [
    'heart', 'atrium', 'ventricle', 'blood', 'vein', 'artery',
    'taxonomy', 'phylum', 'kingdom', 'class', 'order', 'family', 'genus', 'species',
    'photosynthesis', 'chlorophyll', 'stomata', 'plant', 'leaf', 'root',
    'cell', 'mitochondria', 'ribosome', 'nucleus', 'membrane', 'cytoplasm',
    'dna', 'rna', 'gene', 'chromosome', 'mutation',
    'enzyme', 'hormone', 'gland', 'secretion',
    'pathogen', 'vaccine', 'antibody', 'antigen', 'virus', 'bacteria', 'fungi',
    'respiratory', 'digestive', 'nervous', 'excretory', 'reproductive', 'muscle', 'bone',
    'ecosystem', 'biodiversity', 'food chain', 'web',
    'disease', 'cancer', 'aids', 'malaria', 'dengue', 'vitamin', 'deficiency'
];

const GEOGRAPHY_EXTRA = [
    'earth', 'axis', 'solar', 'season', 'equator', 'latitude', 'longitude', 'tropic',
    'arctic', 'antarctic', 'polar', 'climate', 'weather', 'monsoon', 'wind', 'cyclone',
    'industry', 'mining', 'agriculture', 'soil', 'crop',
    'reserve', 'park', 'sanctuary', 'forest', 'vegetation',
    'valley', 'mountain', 'river', 'lake', 'ocean', 'sea', 'plateau', 'plain', 'desert',
    'rock', 'mineral', 'earthquake', 'volcano', 'tsunami'
];

const POLITY = [
    'article', 'fundamental right', 'directive principle', 'constitution', 'amendment',
    'parliament', 'lok sabha', 'rajya sabha', 'legislat',
    'supreme court', 'high court', 'judiciar', 'judge',
    'election commission', 'president', 'governor', 'prime minister', 'chief minister',
    'panchayat', 'municipality', 'bill', 'act', 'schedule'
];

function classify(qText) {
    const txt = qText.toLowerCase();
    
    if (ECONOMY_STRICT.some(p => txt.includes(p))) return 'Economics';
    if (CHEMISTRY_STRICT.some(p => txt.includes(p))) return 'Chemistry';
    if (PHYSICS_STRICT.some(p => txt.includes(p))) return 'Physics';
    if (BIOLOGY_STRICT.some(p => txt.includes(p))) return 'Biology';
    if (GEOGRAPHY_EXTRA.some(p => txt.includes(p))) return 'Geography';
    if (HISTORY_EXTRA.some(p => txt.includes(p))) return 'History';
    if (POLITY.some(p => txt.includes(p))) return 'Polity';
    
    // If it mentions specific years like 2020, 2021 etc it might be current affairs
    if (txt.match(/202[0-9]/)) return 'Current Affairs';
    
    return 'General Knowledge'; // default fallback
}

function loadDB() {
    const content = fs.readFileSync(DATA_JS_PATH, 'utf8');
    const executableContent = content.replace('const CBT_EXAMS_DATABASE', 'var CBT_EXAMS_DATABASE');
    const sandbox = {};
    vm.createContext(sandbox);
    
    try {
        vm.runInContext(executableContent, sandbox);
    } catch(e) {
        console.error("Error evaluating data.js:", e);
    }
    
    return sandbox.CBT_EXAMS_DATABASE;
}

function classifyAndExport() {
    const db = loadDB();
    if (!db) {
        console.error("Failed to load db");
        return;
    }

    let changedCounts = {};
    let totalQs = 0;

    db.forEach(exam => {
        if (exam.id.startsWith('nda-gat-new-')) {
            exam.questions.forEach(q => {
                totalQs++;
                
                // If it's already English (any case), ensure capitalization
                if (q.topicId && q.topicId.toLowerCase() === 'english') {
                    q.topicId = 'English';
                    changedCounts['English'] = (changedCounts['English'] || 0) + 1;
                } else {
                    // It's a GK/GS question, run classification again
                    const qText = q.question + " " + (q.options ? q.options.join(" ") : "");
                    const newTopic = classify(qText);
                    q.topicId = newTopic;
                    changedCounts[newTopic] = (changedCounts[newTopic] || 0) + 1;
                }
            });
        }
    });

    console.log("Classification Results:");
    console.table(changedCounts);
    console.log(`Total questions processed: ${totalQs}`);

    // Overwrite data.js with flat JSON to make it completely standalone and clean
    const jsonStr = JSON.stringify(db, null, 2);
    // Include CURRENT_AFFAIRS_DB if we want to preserve it, though it's optional for the app
    // We'll just write CBT_EXAMS_DATABASE
    const newContent = `const CBT_EXAMS_DATABASE = ${jsonStr};\n`;
    fs.writeFileSync(DATA_JS_PATH, newContent, 'utf8');
    console.log("Overwrote data.js with deeply classified flat JSON.");

    // Export to Excel
    const wb = xlsx.utils.book_new();
    const allQuestions = [];

    db.forEach(exam => {
        exam.questions.forEach((q, idx) => {
            let optionsStr = '';
            if (q.options && q.options.length > 0) {
                optionsStr = q.options.map((o, i) => `${String.fromCharCode(65+i)}. ${o}`).join('   |   ');
            }
            
            allQuestions.push({
                Exam_ID: exam.id,
                Title: exam.title,
                Question_Num: idx + 1,
                Topic: q.topicId,
                Question: q.question,
                Options: optionsStr,
                Correct_Index: q.correct,
                Explanation: q.explanation || ''
            });
        });
    });

    const ws = xlsx.utils.json_to_sheet(allQuestions);
    const colWidths = [
        { wch: 15 }, { wch: 35 }, { wch: 15 }, { wch: 15 },
        { wch: 80 }, { wch: 60 }, { wch: 15 }, { wch: 60 }
    ];
    ws['!cols'] = colWidths;
    
    xlsx.utils.book_append_sheet(wb, ws, "Classified_GAT_Mocks");
    
    const excelPath = path.join(__dirname, 'scratch', 'NDA_GAT_Papers_V3.xlsx');
    xlsx.writeFile(wb, excelPath);
    console.log(`Successfully generated ${excelPath}`);
}

classifyAndExport();
