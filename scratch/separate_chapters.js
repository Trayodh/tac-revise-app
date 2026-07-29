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
        { keywords: ['river', 'mountain', 'soil', 'climate', 'monsoon', 'earthquake', 'volcano', 'atmosphere', 'ocean', 'tide'], id: 'physical-geography' },
        { keywords: ['population', 'census', 'agriculture', 'crop', 'industry', 'transport', 'highway'], id: 'industrics-geopolitics' },
        { keywords: ['map', 'location', 'border', 'strait', 'island', 'continent'], id: 'geography-details' }
    ],
    polity: [
        { keywords: ['fundamental right', 'directive principle', 'dpsp', 'citizenship', 'preamble', 'amendment', 'article'], id: 'constitution-basics' },
        { keywords: ['president', 'prime minister', 'parliament', 'lok sabha', 'rajya sabha', 'governor', 'chief minister'], id: 'union-executive' },
        { keywords: ['supreme court', 'high court', 'judiciary', 'election commission', 'panchayat', 'municipality', 'federal'], id: 'federal-rpa' }
    ],
    economy: [
        { keywords: ['gdp', 'national income', 'inflation', 'poverty', 'unemployment'], id: 'economics-basics' },
        { keywords: ['rbi', 'repo', 'bank', 'monetary', 'fiscal', 'tax', 'budget', 'deficit'], id: 'monetary-fiscal' },
        { keywords: ['trade', 'fdi', 'export', 'import', 'wto', 'imf', 'world bank'], id: 'budget-trade-reforms' },
        { keywords: ['scheme', 'yojana', 'mission', 'niti aayog', 'planning'], id: 'govt-schemes' }
    ],
    physics: [
        { keywords: ['lens', 'mirror', 'light', 'optics', 'reflection', 'refraction', 'eye'], id: 'physics-optics' },
        { keywords: ['force', 'motion', 'newton', 'gravity', 'friction', 'velocity', 'acceleration'], id: 'physics-mechanics' },
        { keywords: ['work', 'energy', 'power', 'momentum'], id: 'energy-power-mechanics' },
        { keywords: ['wave', 'sound', 'frequency', 'doppler', 'pitch'], id: 'physics-waves' },
        { keywords: ['heat', 'temperature', 'thermodynamics', 'entropy', 'conduction', 'convection'], id: 'physics-thermodynamics' },
        { keywords: ['electric', 'magnetic', 'current', 'voltage', 'resistance', 'circuit', 'ohm'], id: 'physics-electromagnetism' },
        { keywords: ['atom', 'nucleus', 'radioactiv', 'x-ray', 'semiconductor', 'diode'], id: 'physics-modern' }
    ],
    chemistry: [
        { keywords: ['acid', 'base', 'salt', 'ph', 'mixture', 'solution', 'isotope', 'element', 'compound'], id: 'chemistry-substances' },
        { keywords: ['bond', 'molecule', 'electron', 'proton', 'neutron', 'valenc', 'periodic table'], id: 'chemistry-bonding' },
        { keywords: ['metal', 'alloy', 'ore', 'extraction', 'iron', 'copper', 'aluminium'], id: 'chemistry-metallurgy' },
        { keywords: ['carbon', 'organic', 'hydrocarbon', 'polymer', 'plastic', 'mole', 'gas'], id: 'chemistry-carbon-numericals' },
        { keywords: ['fertilizer', 'glass', 'cement', 'soap', 'detergent', 'drug'], id: 'chemistry-everyday-env' }
    ],
    biology: [
        { keywords: ['cell', 'mitochondria', 'nucleus', 'dna', 'rna', 'tissue'], id: 'biology-cell' },
        { keywords: ['blood', 'heart', 'digest', 'respirat', 'nervous', 'brain', 'hormone', 'gland', 'reproduction'], id: 'biology-physiology' },
        { keywords: ['disease', 'virus', 'bacteria', 'fung', 'malaria', 'vaccin', 'vitamin', 'deficiency'], id: 'biology-diseases' },
        { keywords: ['plant', 'animal', 'kingdom', 'phylum', 'species', 'classification'], id: 'biology-kingdoms' },
        { keywords: ['photosynthesis', 'root', 'stem', 'leaf', 'flower', 'xylem', 'phloem'], id: 'biology-botany' },
        { keywords: ['ecosystem', 'food chain', 'pollution', 'environment', 'biodiversity'], id: 'biology-ecology' }
    ]
};

function classifyQuestion(questionText, subject) {
    const rules = chapterRules[subject];
    if (!rules) return null;
    
    const text = questionText.toLowerCase();
    
    for (const rule of rules) {
        if (rule.keywords.some(kw => text.includes(kw))) {
            return rule.id;
        }
    }
    
    // Default fallback chapter if nothing matches
    if (rules.length > 0) {
        return rules[0].id;
    }
    return null;
}

function processBucket(bucket, subject) {
    if (!Array.isArray(bucket)) return;
    
    bucket.forEach(q => {
        if (q.question) {
            const newChapter = classifyQuestion(q.question, subject);
            if (newChapter && (q.topicId === 'general_knowledge' || q.topicId === subject || q.topicId === 'Unknown')) {
                q.topicId = newChapter;
                fixedCount++;
            }
        }
    });
}

function traverseAndProcess(node, path) {
    if (Array.isArray(node)) {
        let subjectStr = path.toLowerCase();
        
        // Try to infer subject from path or topicId if it exists
        let inferredSubject = null;
        ['history', 'geography', 'polity', 'economics', 'physics', 'chemistry', 'biology'].forEach(s => {
            if (subjectStr.includes(s) || (node.length > 0 && node[0].topicId && node[0].topicId.includes(s))) {
                inferredSubject = s;
            }
        });
        
        // Also handle 'economy' as 'economics'
        if (subjectStr.includes('economy')) inferredSubject = 'economy';
        if (subjectStr.includes('science')) {
            // Science requires us to check the question text to decide if physics/chem/bio
            node.forEach(q => {
                if (q.question) {
                    const txt = q.question.toLowerCase();
                    let targetSub = 'biology';
                    if (/(physics|force|motion|lens|electric|magnetic|thermodynamics)/.test(txt)) targetSub = 'physics';
                    else if (/(acid|base|metal|chemical|carbon|compound|atom)/.test(txt)) targetSub = 'chemistry';
                    
                    const newChapter = classifyQuestion(q.question, targetSub);
                    if (newChapter) {
                        q.topicId = newChapter;
                        fixedCount++;
                    }
                }
            });
            return;
        }

        if (inferredSubject) {
            node.forEach(q => {
                if (q.question) {
                    const newChapter = classifyQuestion(q.question, inferredSubject);
                    if (newChapter) {
                        q.topicId = newChapter;
                        fixedCount++;
                    }
                }
            });
        }
    } else if (typeof node === 'object' && node !== null) {
        for (const [key, value] of Object.entries(node)) {
            traverseAndProcess(value, path ? path + '.' + key : key);
        }
    }
}

traverseAndProcess(bank, '');

fs.writeFileSync(bankPath, JSON.stringify(bank, null, 2), 'utf8');
console.log(`Separated ${fixedCount} questions into chapters!`);
