/**
 * restructure_bank.js
 * 
 * Restructures cds_pyq_bank.json into a clean, hierarchical format:
 * 
 * {
 *   "cds": {
 *     "english": { "grammar": [], "vocabulary": [], "reading_comprehension": [], "sentence_structure": [] },
 *     "maths":   { "arithmetic": [], "algebra": [], "geometry": [], "trigonometry": [], "statistics": [] },
 *     "gs":      { "history": [], "geography": [], "polity": [], "economy": [], "physics": [], "chemistry": [], "biology": [], "current_affairs": [], "general_knowledge": [] }
 *   },
 *   "nda": {
 *     "maths": { ... same as cds maths ... },
 *     "gat": {
 *       "english": { ... },
 *       "physics": [], "chemistry": [], "biology": [],
 *       "history": [], "geography": [], "polity": [], "current_affairs": []
 *     }
 *   },
 *   "afcat": {
 *     "english": { ... },
 *     "reasoning": [],
 *     "general_awareness": { "current_affairs": [], "defence": [], "science": [], "history": [], "geography": [], "polity": [], "sports": [] },
 *     "numerical_ability": { "arithmetic": [], "algebra": [] }
 *   }
 * }
 * 
 * This makes extraction trivially simple:
 *   bank.cds.gs.history  → all CDS history questions
 *   bank.afcat.english.grammar → all AFCAT grammar questions
 */

const fs = require('fs');
const bank = JSON.parse(fs.readFileSync('question_banks/cds_pyq_bank.json', 'utf8'));

// ─── English sub-classifiers ──────────────────────────────────────────────────

function classifyEnglish(q) {
    const txt = (q.question + ' ' + q.options.join(' ')).toLowerCase();
    
    // Reading Comprehension
    if (txt.includes('according to the passage') || txt.includes('the author') || 
        txt.includes('the passage') || txt.includes('the writer') ||
        txt.includes('inference') || txt.includes('tone of')) return 'reading_comprehension';
    
    // Sentence Structure (Para Jumbles, Cloze, Fill in the Blanks)
    if (txt.includes('s1 :') || txt.includes('s1:') || txt.includes('s6:') ||
        txt.includes('proper sequence') || txt.includes('rearrange') ||
        txt.includes('fill in the blank') || txt.includes('cloze') ||
        txt.includes('sentence completion') ||
        /\bp\s*:\s*\w/.test(txt) ||           // P : word...
        /^\d+\.\s/.test(q.question) ||         // Numbered fill-in cloze
        txt.includes('para jumble')) return 'sentence_structure';
    
    // Vocabulary (idioms, word meanings, confused words, match lists of word meanings)
    if (txt.includes('meaning of') || txt.includes('what does') || txt.includes('what is the meaning') ||
        txt.includes('idiom') || txt.includes('phrase') ||
        txt.includes('match list') || txt.includes('match the following') ||
        txt.includes('confused') || txt.includes('underlined word') ||
        txt.includes('one word substitution') || txt.includes('closest in meaning') ||
        txt.includes('opposite in meaning') || txt.includes('synonym') || txt.includes('antonym') ||
        txt.includes('phrasal verb') ||
        // Idiom/phrase questions start with "Hold the fort", "It's all Greek" etc
        // They have short question text and meaning options
        (q.question.length < 60 && q.options.some(o => o.toLowerCase().includes('to ') || o.toLowerCase().includes('means')))) {
        return 'vocabulary';
    }
    
    // Grammar (error spotting, correction, voice, narration, etc.)
    return 'grammar';
}

// ─── GS sub-classifiers ───────────────────────────────────────────────────────

function classifyGS(q) {
    if (q.topicId && q.topicId !== 'none' && q.topicId !== 'general_knowledge') {
        // Map existing topicIds to canonical names
        const map = {
            'history': 'history',
            'geography': 'geography',
            'economy': 'economy',
            'current_affairs': 'current_affairs',
            'sports': 'general_knowledge',
            'science': 'science_general',
        };
        if (map[q.topicId]) return map[q.topicId];
    }

    const txt = (q.question + ' ' + q.options.join(' ')).toLowerCase();

    if (txt.includes('battle of') || txt.includes('revolt of') || txt.includes('mughal') ||
        txt.includes('british') || txt.includes('freedom movement') || txt.includes('gandhi') ||
        txt.includes('emperor') || txt.includes('dynasty') || txt.includes('treaty of') ||
        txt.includes('independence') || txt.includes('partition') || txt.includes('ancient') ||
        txt.includes('medieval') || txt.includes('colonial')) return 'history';
    
    if (txt.includes('latitude') || txt.includes('longitude') || txt.includes('river') ||
        txt.includes('mountain') || txt.includes('ocean') || txt.includes('continent') ||
        txt.includes('climate') || txt.includes('monsoon') || txt.includes('desert') ||
        txt.includes('soil type') || txt.includes('rainfall') || txt.includes('earthquake') ||
        txt.includes('volcano') || txt.includes('plateau') || txt.includes('peninsula') ||
        txt.includes('tectonic')) return 'geography';
    
    if (txt.includes('article ') || txt.includes('constitution') || txt.includes('parliament') ||
        txt.includes('lok sabha') || txt.includes('rajya sabha') || txt.includes('president of india') ||
        txt.includes('prime minister') || txt.includes('judiciary') || txt.includes('fundamental rights') ||
        txt.includes('directive principles') || txt.includes('amendment') || txt.includes('governor') ||
        txt.includes('supreme court') || txt.includes('high court')) return 'polity';
    
    if (txt.includes('gdp') || txt.includes('inflation') || txt.includes('rbi') ||
        txt.includes('budget') || txt.includes('fiscal') || txt.includes('monetary') ||
        txt.includes('five year plan') || txt.includes('niti aayog') || txt.includes('gst') ||
        txt.includes('bank rate') || txt.includes('repo rate') || txt.includes('trade deficit')) return 'economy';
    
    if (txt.includes('velocity') || txt.includes('acceleration') || txt.includes('newton') ||
        txt.includes('ohm') || txt.includes('electric') || txt.includes('magnetic') ||
        txt.includes('light') || txt.includes('sound') || txt.includes('refraction') ||
        txt.includes('reflection') || txt.includes('lens') || txt.includes('mirror') ||
        txt.includes('nuclear') || txt.includes('radiation') || txt.includes('pressure cooker') ||
        txt.includes('heat') || txt.includes('thermodynamics')) return 'physics';
    
    if (txt.includes('acid') || txt.includes('base') || txt.includes('salt') ||
        txt.includes('element') || txt.includes('compound') || txt.includes('periodic table') ||
        txt.includes('oxidation') || txt.includes('reduction') || txt.includes('alloy') ||
        txt.includes('chemical') || txt.includes('ph ') || txt.includes('molecule') ||
        txt.includes('catalyst') || txt.includes('polymer') || txt.includes('fertilizer')) return 'chemistry';
    
    if (txt.includes('cell') || txt.includes('dna') || txt.includes('gene') ||
        txt.includes('photosynthesis') || txt.includes('respiration') || txt.includes('hormone') ||
        txt.includes('enzyme') || txt.includes('disease') || txt.includes('virus') ||
        txt.includes('bacteria') || txt.includes('immunity') || txt.includes('nutrition') ||
        txt.includes('blood group') || txt.includes('chromosome') || txt.includes('ecosystem') ||
        txt.includes('food chain') || txt.includes('animal') || txt.includes('plant')) return 'biology';
    
    return 'general_knowledge';
}

// ─── Maths sub-classifiers ────────────────────────────────────────────────────

function classifyMaths(q) {
    const txt = (q.question + ' ' + q.options.join(' ')).toLowerCase();
    
    if (txt.includes('sin') || txt.includes('cos') || txt.includes('tan') ||
        txt.includes('angle') || txt.includes('height and distance') ||
        txt.includes('trigonometric')) return 'trigonometry';
    
    if (txt.includes('triangle') || txt.includes('circle') || txt.includes('polygon') ||
        txt.includes('sphere') || txt.includes('cone') || txt.includes('cylinder') ||
        txt.includes('cube') || txt.includes('cuboid') || txt.includes('area') ||
        txt.includes('perimeter') || txt.includes('volume') || txt.includes('surface area') ||
        txt.includes('rhombus') || txt.includes('parallelogram') || txt.includes('trapezium')) return 'geometry';
    
    if (txt.includes('polynomial') || txt.includes('quadratic') || txt.includes('roots') ||
        txt.includes('arithmetic progression') || txt.includes('geometric progression') ||
        txt.includes('sequence') || txt.includes('series') || txt.includes('matrix') ||
        txt.includes('determinant') || txt.includes('value of x') || txt.includes('value of n') ||
        txt.includes('log') || txt.includes('set ') || txt.includes('function')) return 'algebra';
    
    if (txt.includes('mean') || txt.includes('median') || txt.includes('mode') ||
        txt.includes('standard deviation') || txt.includes('variance') || 
        txt.includes('probability') || txt.includes('permutation') || txt.includes('combination') ||
        txt.includes('frequency') || txt.includes('histogram')) return 'statistics';
    
    // Default: arithmetic (LCM, HCF, percentage, ratio, profit/loss, SI/CI, time-work)
    return 'arithmetic';
}

// ─── Build structured bank ────────────────────────────────────────────────────

const structured = {
    cds: {
        english: { grammar: [], vocabulary: [], reading_comprehension: [], sentence_structure: [] },
        maths:   { arithmetic: [], algebra: [], geometry: [], trigonometry: [], statistics: [] },
        gs:      { history: [], geography: [], polity: [], economy: [], physics: [], chemistry: [], biology: [], current_affairs: [], general_knowledge: [] }
    },
    nda: {
        maths: { arithmetic: [], algebra: [], geometry: [], trigonometry: [], statistics: [] },
        gat: {
            english: { grammar: [], vocabulary: [], reading_comprehension: [], sentence_structure: [] },
            physics: [], chemistry: [], biology: [],
            history: [], geography: [], polity: [], current_affairs: []
        }
    },
    afcat: {
        english: { grammar: [], vocabulary: [], reading_comprehension: [], sentence_structure: [] },
        reasoning: [],
        general_awareness: { current_affairs: [], defence: [], science: [], history: [], geography: [], polity: [], sports: [] },
        numerical_ability: { arithmetic: [], algebra: [], geometry: [] }
    }
};

let totalClassified = 0;

// Process English → CDS English + NDA GAT English + AFCAT English
const allEnglish = [...(bank.english || [])];
allEnglish.forEach(q => {
    if (!q || !q.question || !q.options || q.options.length !== 4) return;
    const subType = classifyEnglish(q);
    structured.cds.english[subType].push(q);
    structured.nda.gat.english[subType].push(q);
    structured.afcat.english[subType].push(q);
    totalClassified++;
});

// Process Maths → CDS Maths + NDA Maths
const allMaths = [...(bank.maths || [])];
allMaths.forEach(q => {
    if (!q || !q.question || !q.options || q.options.length !== 4) return;
    const subType = classifyMaths(q);
    structured.cds.maths[subType].push(q);
    structured.nda.maths[subType].push(q);
    totalClassified++;
});

// Process GS → CDS GS + NDA GAT GS
const allGS = [
    ...(bank.gs || []),
    ...(bank.geography || []).map(q => ({...q, topicId: 'geography'})),
    ...(bank.biology || []).map(q => ({...q, topicId: 'biology_force'})),
    ...(bank.physics || []).map(q => ({...q, topicId: 'physics_force'})),
    ...(bank.chemistry || []).map(q => ({...q, topicId: 'chemistry_force'})),
    ...(bank.history || []).map(q => ({...q, topicId: 'history'})),
    ...(bank.economics || []).map(q => ({...q, topicId: 'economy'})),
    ...(bank.indian_polity || []).map(q => ({...q, topicId: 'polity_force'})),
    ...(bank['indian polity'] || []).map(q => ({...q, topicId: 'polity_force'})),
    ...(bank['general knowledge'] || []).map(q => ({...q, topicId: 'general_knowledge'})),
];

allGS.forEach(q => {
    if (!q || !q.question || !q.options || q.options.length !== 4) return;
    // Skip questions that are actually maths or english
    const txt = (q.question + ' ' + q.options.join(' ')).toLowerCase();
    if (q.topicId === 'maths' || q.topicId === 'english') return;
    
    let subType;
    if (q.topicId === 'biology_force') subType = 'biology';
    else if (q.topicId === 'physics_force') subType = 'physics';
    else if (q.topicId === 'chemistry_force') subType = 'chemistry';
    else if (q.topicId === 'polity_force') subType = 'polity';
    else subType = classifyGS(q);
    
    if (structured.cds.gs[subType]) {
        structured.cds.gs[subType].push(q);
    } else {
        structured.cds.gs.general_knowledge.push(q);
    }
    
    // Also add to NDA GAT GS sections
    const ndaGSMap = { history: 'history', geography: 'geography', polity: 'polity', current_affairs: 'current_affairs' };
    if (ndaGSMap[subType]) structured.nda.gat[ndaGSMap[subType]].push(q);
    const ndaSciMap = { physics: 'physics', chemistry: 'chemistry', biology: 'biology' };
    if (ndaSciMap[subType]) structured.nda.gat[ndaSciMap[subType]].push(q);
    
    totalClassified++;
});

// Process AFCAT → reasoning + general_awareness
const allAFCAT = [...(bank.afcat || [])];
allAFCAT.forEach(q => {
    if (!q || !q.question || !q.options || q.options.length !== 4) return;
    const txt = (q.question + ' ' + q.options.join(' ')).toLowerCase();
    if (txt.includes('series') || txt.includes('analogy') || txt.includes('pattern') ||
        txt.includes('spatial') || txt.includes('matrix') || txt.includes('coding') ||
        txt.includes('decoding') || txt.includes('direction') || txt.includes('rank') ||
        txt.includes('figure') || txt.includes('odd one out') || txt.includes('syllogism')) {
        structured.afcat.reasoning.push(q);
    } else if (txt.includes('defence') || txt.includes('army') || txt.includes('navy') ||
               txt.includes('air force') || txt.includes('missile') || txt.includes('iaf') ||
               txt.includes('military')) {
        structured.afcat.general_awareness.defence.push(q);
    } else if (txt.includes('current') || txt.includes('recently') || txt.includes('2024') || txt.includes('2023')) {
        structured.afcat.general_awareness.current_affairs.push(q);
    } else {
        structured.afcat.general_awareness.science.push(q);
    }
    totalClassified++;
});

// ─── Print summary ────────────────────────────────────────────────────────────

console.log('\n=== STRUCTURED BANK SUMMARY ===');
console.log('\nCDS English:');
Object.entries(structured.cds.english).forEach(([k,v]) => console.log('  '+k+': '+v.length+' questions'));
console.log('\nCDS Maths:');
Object.entries(structured.cds.maths).forEach(([k,v]) => console.log('  '+k+': '+v.length+' questions'));
console.log('\nCDS GS:');
Object.entries(structured.cds.gs).forEach(([k,v]) => console.log('  '+k+': '+v.length+' questions'));
console.log('\nNDA Maths:');
Object.entries(structured.nda.maths).forEach(([k,v]) => console.log('  '+k+': '+v.length+' questions'));
console.log('\nNDA GAT English:');
Object.entries(structured.nda.gat.english).forEach(([k,v]) => console.log('  '+k+': '+v.length+' questions'));
console.log('\nNDA GAT Science:');
['physics','chemistry','biology'].forEach(k => console.log('  '+k+': '+structured.nda.gat[k].length+' questions'));
console.log('\nAFCAT Reasoning:', structured.afcat.reasoning.length);
console.log('AFCAT English:');
Object.entries(structured.afcat.english).forEach(([k,v]) => console.log('  '+k+': '+v.length+' questions'));
console.log('\nTotal classified:', totalClassified);

// ─── Save ─────────────────────────────────────────────────────────────────────
fs.writeFileSync('question_banks/structured_bank.json', JSON.stringify(structured, null, 2));
console.log('\nSaved to question_banks/structured_bank.json');
