const fs = require('fs');

const bankPath = 'question_banks/structured_bank.json';
let bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));

let fixedCount = 0;

const chapterRules = {
    history: [
        { keywords: ['harappa', 'indus', 'veda', 'buddha', 'mahavira', 'maurya', 'gupta', 'chola', 'ancient'], id: 'ancient-india-tree' },
        { keywords: ['delhi sultanate', 'mughal', 'vijayanagara', 'bhakti', 'sufi', 'shivaji', 'maratha', 'medieval'], id: 'medieval-india-tree' },
        { keywords: ['british', 'east india', 'gandhi', 'revolt', '1857', 'congress', 'freedom', 'independence', 'modern'], id: 'modern-india-tree' },
        { keywords: ['world war', 'renaissance', 'french revolution', 'russian revolution', 'world'], id: 'world-history-tree' },
        { keywords: ['art', 'culture', 'architecture', 'temple', 'dance', 'music'], id: 'art-culture-heritage' },
    ],
    geography: [
        { keywords: ['river', 'mountain', 'soil', 'climate', 'monsoon', 'earthquake', 'volcano', 'atmosphere', 'ocean', 'tide', 'lake', 'rain'], id: 'physical-geography' },
        { keywords: ['population', 'census', 'agriculture', 'crop', 'industry', 'transport', 'highway', 'minerals', 'steel'], id: 'industrics-geopolitics' },
        { keywords: ['map', 'location', 'border', 'strait', 'island', 'continent', 'latitude', 'longitude'], id: 'geography-details' }
    ],
    polity: [
        { keywords: ['fundamental right', 'directive principle', 'dpsp', 'citizenship', 'preamble', 'amendment', 'article', 'constitution'], id: 'constitution-basics' },
        { keywords: ['president', 'prime minister', 'parliament', 'lok sabha', 'rajya sabha', 'governor', 'chief minister', 'speaker'], id: 'union-executive' },
        { keywords: ['supreme court', 'high court', 'judiciary', 'election commission', 'panchayat', 'municipality', 'federal', 'upsc'], id: 'federal-rpa' }
    ],
    economy: [
        { keywords: ['gdp', 'national income', 'inflation', 'poverty', 'unemployment'], id: 'economics-basics' },
        { keywords: ['rbi', 'repo', 'bank', 'monetary', 'fiscal', 'tax', 'budget', 'deficit'], id: 'monetary-fiscal' },
        { keywords: ['trade', 'fdi', 'export', 'import', 'wto', 'imf', 'world bank'], id: 'budget-trade-reforms' },
        { keywords: ['scheme', 'yojana', 'mission', 'niti aayog', 'planning'], id: 'govt-schemes' }
    ],
    physics: [
        { keywords: ['lens', 'mirror', 'light', 'optics', 'reflection', 'refraction', 'eye'], id: 'physics-optics' },
        { keywords: ['force', 'motion', 'newton', 'gravity', 'friction', 'velocity', 'acceleration', 'mass', 'weight'], id: 'physics-mechanics' },
        { keywords: ['work', 'energy', 'power', 'momentum'], id: 'energy-power-mechanics' },
        { keywords: ['wave', 'sound', 'frequency', 'doppler', 'pitch'], id: 'physics-waves' },
        { keywords: ['heat', 'temperature', 'thermodynamics', 'entropy', 'conduction', 'convection'], id: 'physics-thermodynamics' },
        { keywords: ['electric', 'magnetic', 'current', 'voltage', 'resistance', 'circuit', 'ohm', 'battery'], id: 'physics-electromagnetism' },
        { keywords: ['atom', 'nucleus', 'radioactiv', 'x-ray', 'semiconductor', 'diode', 'alpha', 'beta', 'gamma'], id: 'physics-modern' }
    ],
    chemistry: [
        { keywords: ['acid', 'base', 'salt', 'ph', 'mixture', 'solution', 'isotope', 'element', 'compound'], id: 'chemistry-substances' },
        { keywords: ['bond', 'molecule', 'electron', 'proton', 'neutron', 'valenc', 'periodic table'], id: 'chemistry-bonding' },
        { keywords: ['metal', 'alloy', 'ore', 'extraction', 'iron', 'copper', 'aluminium', 'zinc', 'steel'], id: 'chemistry-metallurgy' },
        { keywords: ['carbon', 'organic', 'hydrocarbon', 'polymer', 'plastic', 'mole', 'gas', 'benzene'], id: 'chemistry-carbon-numericals' },
        { keywords: ['fertilizer', 'glass', 'cement', 'soap', 'detergent', 'drug', 'medicine'], id: 'chemistry-everyday-env' }
    ],
    biology: [
        { keywords: ['cell', 'mitochondria', 'nucleus', 'dna', 'rna', 'tissue'], id: 'biology-cell' },
        { keywords: ['blood', 'heart', 'digest', 'respirat', 'nervous', 'brain', 'hormone', 'gland', 'reproduction', 'muscle'], id: 'biology-physiology' },
        { keywords: ['disease', 'virus', 'bacteria', 'fung', 'malaria', 'vaccin', 'vitamin', 'deficiency', 'syndrome'], id: 'biology-diseases' },
        { keywords: ['plant', 'animal', 'kingdom', 'phylum', 'species', 'classification', 'algae'], id: 'biology-kingdoms' },
        { keywords: ['photosynthesis', 'root', 'stem', 'leaf', 'flower', 'xylem', 'phloem'], id: 'biology-botany' },
        { keywords: ['ecosystem', 'food chain', 'pollution', 'environment', 'biodiversity'], id: 'biology-ecology' }
    ],
    mathematics: [
        { keywords: ['sin', 'cos', 'tan', 'sec', 'cosec', 'cot', 'angle', 'triangle', 'height', 'distance', 'trigonometr'], id: 'trigonometry' },
        { keywords: ['complex', 'root', 'equation', 'polynomial', 'matrix', 'determinant', 'vector', 'algebra', 'series', 'progression'], id: 'algebra-complex' },
        { keywords: ['line', 'circle', 'parabola', 'ellipse', 'hyperbola', 'coordinate', 'plane', 'point', 'distance'], id: '2d-geometry' },
        { keywords: ['limit', 'derivative', 'integral', 'function', 'maxima', 'minima', 'continuity', 'differentiab'], id: 'calculus' },
        { keywords: ['probability', 'mean', 'median', 'mode', 'variance', 'standard deviation', 'distribution', 'dice', 'coin'], id: 'probability-stats' },
        { keywords: ['area', 'volume', 'surface', 'cylinder', 'cone', 'sphere', 'cube', 'cuboid', 'mensuration'], id: 'mensuration' },
        { keywords: ['percent', 'profit', 'loss', 'interest', 'ratio', 'proportion', 'time', 'work', 'distance', 'speed', 'average'], id: 'arithmetic' }
    ],
    english: [
        { keywords: ['synonym', 'antonym', 'meaning', 'word', 'vocabulary', 'idiom', 'phrase', 'spell'], id: 'vocabulary' },
        { keywords: ['error', 'grammar', 'tense', 'noun', 'verb', 'adjective', 'adverb', 'preposition', 'conjunction', 'sentence', 'blank'], id: 'grammar-rules' },
        { keywords: ['passage', 'comprehension', 'read', 'author', 'tone', 'title'], id: 'exam-patterns' }
    ]
};

function classifyQuestion(questionText, subjectStr) {
    let inferredSubject = null;
    ['history', 'geography', 'polity', 'economics', 'physics', 'chemistry', 'biology', 'mathematics', 'english', 'math'].forEach(s => {
        if (subjectStr.includes(s)) inferredSubject = s;
    });
    if (subjectStr.includes('economy')) inferredSubject = 'economy';
    if (subjectStr.includes('math')) inferredSubject = 'mathematics';
    
    // For Science exams where it's mixed
    if (subjectStr.includes('science') || subjectStr.includes('general_awareness') || subjectStr.includes('general_knowledge') || subjectStr.includes('gat') || subjectStr.includes('gs')) {
        const txt = questionText.toLowerCase();
        let targetSub = 'biology'; // default
        if (/(physics|force|motion|lens|electric|magnetic|thermodynamics|gravity)/.test(txt)) targetSub = 'physics';
        else if (/(acid|base|metal|chemical|carbon|compound|atom|reaction)/.test(txt)) targetSub = 'chemistry';
        else if (/(river|mountain|climate|monsoon|earthquake)/.test(txt)) targetSub = 'geography';
        else if (/(british|gandhi|revolt|mughal|ancient|medieval)/.test(txt)) targetSub = 'history';
        else if (/(fundamental right|president|parliament|constitution|supreme court)/.test(txt)) targetSub = 'polity';
        else if (/(gdp|rbi|inflation|fdi|tax|budget)/.test(txt)) targetSub = 'economy';
        
        inferredSubject = targetSub;
    }
    
    if (!inferredSubject) return null;

    const rules = chapterRules[inferredSubject];
    if (!rules) return null;
    
    const text = questionText.toLowerCase();
    
    for (const rule of rules) {
        if (rule.keywords.some(kw => text.includes(kw))) {
            return rule.id;
        }
    }
    
    if (rules.length > 0) {
        return rules[0].id;
    }
    return null;
}

function traverseAndProcess(node, path) {
    if (Array.isArray(node)) {
        node.forEach(q => {
            if (q.question) {
                const contextStr = (path + ' ' + (q.topicId || '')).toLowerCase();
                const newChapter = classifyQuestion(q.question, contextStr);
                if (newChapter) {
                    q.topicId = newChapter;
                    fixedCount++;
                }
            }
        });
    } else if (typeof node === 'object' && node !== null) {
        for (const [key, value] of Object.entries(node)) {
            traverseAndProcess(value, path ? path + '.' + key : key);
        }
    }
}

traverseAndProcess(bank, '');

fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2), 'utf8');
console.log(`Separated ${fixedCount} questions into chapters!`);
