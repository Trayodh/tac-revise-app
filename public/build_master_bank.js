/**
 * build_master_bank.js
 * 
 * STEP 1: Consolidates ALL question bank files into structured_bank.json
 * 
 * Sources:
 *  - cds_pyq_bank.json       (existing master)
 *  - cds_english_pyq.json    (240 English PYQs)
 *  - cds_gs_pyq.json         (240 GS PYQs)
 *  - cds_math_pyq.json       (125 Maths PYQs)
 *  - afcat_combined_pyq.json (100 AFCAT PYQs)
 *  - capf_pyq_bank.json      (276 GS — good for CDS GS)
 *  - english_bank.json       (300 English)
 *  - history_bank.json       (225 History)
 *  - ca_bank.json            (75 Current Affairs)
 *  - nda_gs_part1.json       (105 NDA GS)
 *  - nda_gs_part2.json       (95 NDA GS)
 *  - pathfinder_bank.json    (6415 GS, 322 English, 720 Maths — MAIN SOURCE)
 *  - hq_bank.json            (10 GS)
 *  - trending_bank.json      (150 GS)
 *  - upsc_master_bank.json   (23 GS)
 *  - replica_bank.json       (9 GS)
 *  - polity_bank.json        (5 GS)
 */

const fs = require('fs');

console.log('=== BUILDING MASTER STRUCTURED BANK ===\n');

// ─── Structured bank template ─────────────────────────────────────────────────
const bank = {
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

const globalSeen = new Set();

function normKey(q) {
    return (q.question || '').replace(/[^a-z0-9]/gi, '').toLowerCase().substring(0, 50);
}

function isValid(q) {
    if (!q || !q.question || !q.options || q.options.length !== 4) return false;
    if (typeof q.question !== 'string') return false;
    
    const text = q.question.trim();
    if (text.length < 15) return false;
    
    // Strict filtering of garbled / broken questions
    if (/Codes\s+A\s+B\s+C\s+D\s+A\s+B\s+C\s+D/i.test(text)) return false;
    if (text.toLowerCase().includes('match the following') && !text.includes('1.') && !text.includes('I.')) return false;
    if (text.toLowerCase().includes('consider the following statements') && !text.includes('1.') && !text.includes('I.')) return false;
    
    // Reject questions containing variant suffixes like "(Variant 5/1)" because they are incomplete
    if (/Variant\s+\d+/i.test(text)) return false;
    
    // Reject specific MMLU-like/irrelevant questions the user complained about
    if (text.includes("Whether we admit it to ourselves") || text.includes("The American cotton textile industry moved")) return false;
    
    // Rule 5: Drop questions where statement body is not visible (stem length < 120 chars)
    const isStatementFormat = /consider the following|which of the following statements/i.test(text);
    if (isStatementFormat && text.length < 120) return false;
    
    // Check options are valid strings
    for (const opt of q.options) {
        if (typeof opt !== 'string' || opt.trim().length === 0) return false;
    }
    
    return true;
}

// ─── English classifiers ──────────────────────────────────────────────────────

function classifyEnglish(q) {
    const txt = (q.question + ' ' + q.options.join(' ')).toLowerCase();

    if (txt.includes('according to the passage') || txt.includes('the author') ||
        txt.includes('the writer') || txt.includes('tone of') ||
        txt.includes('inference from') || txt.includes('the passage states')) return 'reading_comprehension';

    if (txt.includes('s1 :') || txt.includes('s1:') || txt.includes('s6:') || txt.includes('s6 :') ||
        txt.includes('proper sequence') || txt.includes('fill in the blank') ||
        txt.includes('cloze') || txt.includes('para jumble') ||
        /^\d+\.\s/.test(q.question) ||
        /\bp\s*:\s*\w/.test(txt)) return 'sentence_structure';

    if (txt.includes('meaning of') || txt.includes('what does') || txt.includes('what is the meaning') ||
        txt.includes('idiom') || txt.includes('match list') || txt.includes('match the following') ||
        txt.includes('confused') || txt.includes('one word substitution') ||
        txt.includes('closest in meaning') || txt.includes('opposite in meaning') ||
        txt.includes('synonym') || txt.includes('antonym') || txt.includes('phrasal verb') ||
        (q.question.length < 70 && q.options.some(o => o.toLowerCase().includes('to ') || o.toLowerCase().includes('means')))) {
        return 'vocabulary';
    }

    return 'grammar';
}

// ─── Maths classifiers ────────────────────────────────────────────────────────

function classifyMaths(q) {
    const txt = (q.question + ' ' + q.options.join(' ')).toLowerCase();
    if (txt.includes('sin') || txt.includes('cos') || txt.includes('tan') || txt.includes('angle of elevation') || txt.includes('angle of depression')) return 'trigonometry';
    if (txt.includes('triangle') || txt.includes('circle') || txt.includes('polygon') || txt.includes('sphere') || txt.includes('cone') || txt.includes('cylinder') || txt.includes('cube') || txt.includes('cuboid') || txt.includes('area') || txt.includes('perimeter') || txt.includes('volume') || txt.includes('rhombus') || txt.includes('parallelogram') || txt.includes('trapezium')) return 'geometry';
    if (txt.includes('polynomial') || txt.includes('quadratic') || txt.includes('arithmetic progression') || txt.includes('geometric progression') || txt.includes('matrix') || txt.includes('determinant') || txt.includes('value of x') || txt.includes('log') || txt.includes('function')) return 'algebra';
    if (txt.includes('mean') || txt.includes('median') || txt.includes('mode') || txt.includes('standard deviation') || txt.includes('variance') || txt.includes('probability') || txt.includes('permutation') || txt.includes('combination') || txt.includes('histogram')) return 'statistics';
    return 'arithmetic';
}

// ─── GS classifiers ───────────────────────────────────────────────────────────

const MATHS_PATTERNS = [
    'sphere','cube','cuboid','cone','cylinder','prism',
    'surface area','total surface area','curved surface area',
    'volume of','radius of','diameter of','circumference',
    'perimeter of','area of the','area of a',
    'right-angled triangle','isosceles triangle','equilateral triangle',
    'rhombus','parallelogram','trapezium','hexagon',
    'lcm of','hcf of','lcm and hcf',
    'polynomial','quadratic','arithmetic progression','geometric progression',
    'simple interest','compound interest',
    // Trig — singular AND plural forms
    'sin θ','cos θ','tan θ','sin(','cos(','tan(',
    'sinθ','cosθ','tanθ',
    'angle of elevation','angles of elevation',
    'angle of depression','angles of depression',
    'angle subtended',
    // Stats
    'standard deviation','variance of','arithmetic mean',
    'mean of','median of','mode of',
    'probability that','permutation','combination',
    // Algebra
    'value of x','value of n','find the value',
    'roots of the equation','the equation x',
    'log ','logarithm',
];

function hasMathsOptions(q) {
    if (!q.options || q.options.length !== 4) return false;
    let mathOptCount = 0;
    for (const opt of q.options) {
        const o = opt.trim();
        // Pure number or simple ratio
        if (/^[\d\s\.:π√±\-\/]+$/.test(o)) mathOptCount++;
        if (o.includes('π') || o.includes('√')) mathOptCount++;
        // Variable expressions like pq, p²q, pq², √pq — common in trig/algebra answers
        if (/^[√]?[a-z]{1,3}[\d²³]?[a-z]?[\d²³]?$/.test(o.replace(/\s/g,''))) mathOptCount++;
    }
    return mathOptCount >= 3;
}

const ENGLISH_PATTERNS = ['no improvement','no error','spot the error','sentence improvement','active voice','passive voice','direct speech','indirect speech','reported speech','synonym of','antonym of','closest in meaning','one word substitution','phrasal verb','meaning of the idiom','meaning of the phrase','according to the passage','proper sequence should be','s1 :','s1:','fill in the blank','fill in the blanks','cloze test','grammatically correct','error in the sentence','choose the correct sentence','correct form of','correct spelling'];
// Rule 25: Proverbs treated same as idioms → English vocabulary
// Rule 26: Block Sanskrit/historical terms from being misrouted to English via 'what does X mean'
const SANSKRIT_GS_TERMS = ['ahimsa','swaraj','satyagraha','dharma','karma','moksha','artha','kama','veda','upanishad','mahabharata','ramayana','panchayat','zamindar','ryotwari','mahalwari','diwan','subah','mansab','jagir','sarkar','sultanate'];
// Common English idioms/proverbs — go to English vocabulary, NOT GS (Rule 11, 25)
const ENGLISH_IDIOMS = ['bite the bullet','beat around the bush','break the ice','burn bridges','barking up the wrong tree','blessing in disguise','costs an arm','hit the nail','kick the bucket','let the cat','once in a blue moon','piece of cake','sit on the fence','spill the beans','under the weather','up in the air','wrapped around','stitch in time','raining cats','apple of discord','burning the midnight','every cloud has'];
// Analogy/Odd-one-out patterns — route to reasoning bucket (Rule 13)
const REASONING_PATTERNS = ['is to', 'as :: ', 'odd one out', 'odd man out', 'find the odd', 'which does not belong', 'analogy', ': : :'];



// Rule 39: Human body biology keywords — these must NOT be routed to Maths even with numeric options
const BIOLOGY_COUNT_PATTERNS = ['bones in', 'number of bones', 'cranial nerves', 'pairs of ribs', 'chambers of the heart', 'chambers in the heart', 'teeth in', 'number of teeth', 'muscles in', 'vertebrae', 'pairs of chromosomes', 'number of chromosomes'];

function isMathsQ(q) {
    if (!q || !q.question) return false;
    if (q.topicId === 'maths') return true;
    const txt = (q.question + ' ' + (q.options||[]).join(' ')).toLowerCase();
    // Block match-the-following style questions (which have numeric match code options) from being routed to Maths
    if (txt.includes('match list') || txt.includes('match the following') || txt.includes('match table') || (txt.includes('codes') && /codes\s+[a-e\s]+/.test(txt))) return false;
    // Doubt 10: Comprehension with text-based options → NOT Maths
    const numericOpts = (q.options||[]).filter(o => /^[\d\s\.:\u03c0\u221a\u00b1\-\/\(\)%]+$/.test(o.trim()) || o.includes('\u03c0') || o.includes('\u221a'));
    const hasNumericOpts = numericOpts.length >= 3;
    if (!hasNumericOpts && (txt.includes('according to the passage') || txt.includes('the author') || txt.includes('based on the passage'))) return false;
    // Rule 23: Time zone / standard time → Geography, NOT Maths
    if (txt.includes('standard time') || txt.includes('time zone') || txt.includes('ist') || txt.includes('longitude') && txt.includes('time')) return false;
    // Rule 39: Biology body-count questions must NOT be Maths even with numeric options
    if (BIOLOGY_COUNT_PATTERNS.some(p => txt.includes(p))) return false;
    // Rule 41: Percentage-of-earth/water/forest questions → Geography/Economy, NOT Maths
    if (txt.includes('percentage of') && (txt.includes('earth') || txt.includes('ocean') || txt.includes('forest') || txt.includes('land') || txt.includes('population') || txt.includes('india') || txt.includes('rural') || txt.includes('urban'))) return false;
    // Rule 28: Mathematical formula options (containing π, √, superscripts, or formula expressions) → Maths
    const hasFormulaOpts = (q.options||[]).filter(o => /[\u03c0\u221a\u00b2\u00b3\u2074\u00b9]/.test(o) || /\d+[a-z]\d*/.test(o.toLowerCase().trim())).length >= 2;
    if (hasFormulaOpts) return true;
    const stem = q.question.toLowerCase();
    for (const p of MATHS_PATTERNS) if (stem.includes(p)) return true;
    // Rule 28: Maths concept questions (theorems, formulas, geometry properties)
    if (stem.includes('formula for') || stem.includes('area of') || stem.includes('volume of') || stem.includes('perimeter of') || stem.includes('sum of angles') || stem.includes('pythagoras') || stem.includes('theorem')) return true;
    return hasNumericOpts;
}

function isEnglishQ(q) {
    if (!q || !q.question) return false;
    // Rule 4 (hard block): topicId english or reading_comprehension ALWAYS goes to English, never GS
    if (q.topicId === 'english' || q.topicId === 'reading_comprehension') return true;
    const txt = (q.question + ' ' + (q.options||[]).join(' ')).toLowerCase();
    const questionText = q.question;
    // Rule 26: Block Sanskrit/GS terms from being misrouted to English via 'what does X mean'
    const hasSanskritTerm = SANSKRIT_GS_TERMS.some(t => txt.includes(t));
    if (hasSanskritTerm) return false;
    for (const p of ENGLISH_PATTERNS) if (txt.includes(p)) return true;
    // Rule 25: Proverbs → English vocabulary (same as idioms)
    if (txt.includes('proverb') || txt.includes('meaning of the proverb') || txt.includes('what does the proverb')) return true;
    // Rule 26: Idioms (explicit) → English
    for (const idiom of ENGLISH_IDIOMS) if (txt.includes(idiom)) return true;
    // Doubt 6: Sentence ordering — PQRS permutation options always English
    const isPQRS = (o) => { const x=o.trim().toUpperCase().replace(/[^PQRS]/g,''); return x.length===4&&x.includes('P')&&x.includes('Q')&&x.includes('R')&&x.includes('S'); };
    if ((q.options||[]).filter(o => isPQRS(o)).length >= 2) return true;
    // Also detect ABCD letter-permutation ordering (e.g. ABDC, BACD) — always English sentence ordering
    const isLetterPerm = (o) => /^[A-D]{4}$/.test(o.trim().toUpperCase());
    if ((q.options||[]).filter(o => isLetterPerm(o)).length >= 3) return true;
    // Detect reading comprehension: "given above is/are correct" with Only 1/Only 2 options
    const opts = (q.options||[]).map(o => o.trim().toLowerCase());
    const hasOnly1Only2 = opts.some(o => o === 'only 1' || o === 'only 2') && opts.some(o => o === 'both 1 and 2' || o === 'neither 1 nor 2');
    if (hasOnly1Only2 && (txt.includes('given above') || txt.includes('stated above') || txt.includes('mentioned above'))) return true;
    // Doubt 9: Roman numeral / statement questions → English only if 'according to passage' or 'author'
    if (txt.includes('according to the passage') || txt.includes('the author says') || txt.includes('the author argues') || txt.includes('the author suggests') || txt.includes('based on the passage') || txt.includes('the writer') || txt.includes('according to the author') || txt.includes('the author advocate') || txt.includes('true according to the author')) return true;
    // Doubt 5: Assertion-Reason → English only if A and R have NO named science/history subject
    if (txt.includes('assertion') && txt.includes('reason')) {
        const hasNamedSubject = /\b(newton|einstein|gandhi|nehru|shivaji|akbar|aurangzeb|photosynthesis|mitosis|osmosis|evolution|ohm|faraday|doppler|archimedes|pythagoras|mendel)\b/i.test(questionText);
        if (!hasNamedSubject) return true;
    }
    // Context identifier: pronoun as subject with NO named proper noun → Reading Comprehension
    const startsWithPronoun = /^(he|she|they|his|her|their|it)\b/i.test(questionText.trim());
    if (startsWithPronoun) {
        const properNouns = questionText.match(/(?<!\.[\s]{0,5})\b[A-Z][a-z]{2,}\b/g) || [];
        const stopWords = new Set(['The','A','An','Which','What','Who','When','Where','How','Why','In','On','At','By','From','If','And','But','Or','This','That','These','Those','It','He','She','They','His','Her','Their']);
        const realProperNouns = properNouns.filter(w => !stopWords.has(w));
        if (realProperNouns.length === 0) return true;
    }
    return false;
}


function classifyGS(q) {
    const tid = (q.topicId || '').toLowerCase();
    if (tid === 'history') return 'history';
    if (tid === 'geography') return 'geography';
    if (tid === 'economy') return 'economy';
    if (tid === 'current_affairs') return 'current_affairs';
    if (tid === 'polity') return 'polity';

    const txt = (q.question + ' ' + (q.options||[]).join(' ')).toLowerCase();

    const USER_HISTORY_PATTERNS = [
        'ajanta', 'ellora', 'gupta', 'maurya', 'delhi sultanate',
        'maratha', 'vijayanagara', 'chola', 'pallava', 'rashtrakuta',
        'harappan', 'indus valley', 'vedic', 'ashoka', 'chandragupta',
        'akbar', 'aurangzeb', 'humayun', 'babur', 'shershah',
        'sepoy mutiny', 'non-cooperation', 'civil disobedience', 'khilafat',
        'cabinet mission', 'simon commission', 'bhagat singh', 'subhas chandra bose',
        'bal gangadhar tilak', 'swadeshi movement', 'rowlatt act', 'montague chelmsford',
        'socialist tendency', 'growth of socialist'
    ];

    const USER_GEO_PATTERNS = [
        'glacial trough', 'glacial', 'metamorphic rock', 'igneous rock', 'sedimentary rock',
        'alpine glacier', 'continental glacier', 'cotton textile industry', 'river basin', 'watershed',
        'monsoon', 'westerlies', 'trade winds', 'jet stream', 'soil erosion', 'deforestation', 'desertification',
        'earthquake zone', 'tectonic plate', 'volcanic', 'tsunami', 'saar', 'ruhr', 'nile', 'amazon', 'yangtze',
        'ganges', 'brahmaputra', 'himalayan', 'deccan plateau', 'western ghats', 'eastern ghats',
        'bay of bengal', 'arabian sea', 'indian ocean'
    ];

    if (['recently', 'in 2023', 'in 2024', '2023-24', '2024-25'].some(p => txt.includes(p))) return 'current_affairs';
    if (USER_HISTORY_PATTERNS.some(p => txt.includes(p))) return 'history';
    if (USER_GEO_PATTERNS.some(p => txt.includes(p))) return 'geography';

    // Rule 17: Sports → current_affairs (time-sensitive results)
    if (txt.includes('world cup') || txt.includes('olympics') || txt.includes('wimbledon') || txt.includes('grand slam') || txt.includes('commonwealth games') || txt.includes('asian games') || txt.includes('ipl') || txt.includes('cricket world cup') || txt.includes('football world cup') || txt.includes('arjuna award') || txt.includes('khel ratna') || txt.includes('dronacharya award') || txt.includes('rajiv gandhi khel ratna')) return 'current_affairs';

    // Rule 21: Awards and honours → current_affairs
    if (txt.includes('bharat ratna') || txt.includes('padma vibhushan') || txt.includes('padma bhushan') || txt.includes('padma shri') || txt.includes('param vir chakra') || txt.includes('nobel prize') || txt.includes('oscar award') || txt.includes('booker prize') || txt.includes('pulitzer') || txt.includes('man booker') || txt.includes('awardee') || txt.includes('recipient of')) return 'current_affairs';

    // History keywords — also covers Rule 40 (battle named in question → History even if asking for location)
    if (txt.includes('battle of') || txt.includes('revolt of') || txt.includes('mughal') || txt.includes('freedom movement') || txt.includes('gandhi') || txt.includes('emperor') || txt.includes('dynasty') || txt.includes('treaty of') || txt.includes('independence') || txt.includes('partition') || txt.includes('ancient') || txt.includes('medieval') || txt.includes('colonial') || txt.includes('british india') || txt.includes('viceroy') || txt.includes('1857') || txt.includes('jallianwala') || txt.includes('quit india') || txt.includes('annex') || txt.includes('annexation') || txt.includes('ceded to')) return 'history';

    // Rule 43: Indian classical music — specific artist → GK; origin/era of a form → History
    if (txt.includes('classical music') || txt.includes('carnatic') || txt.includes('hindustani music') || txt.includes('origin of') && (txt.includes('raga') || txt.includes('music'))) return 'history';
    // specific musician/instrument → GK (falls through to general_knowledge)

    // Rule 44: Climate and weather phenomena → Geography
    if (txt.includes('el nino') || txt.includes('el niño') || txt.includes('la nina') || txt.includes('greenhouse effect') || txt.includes('greenhouse gas') || txt.includes('global warming') || txt.includes('ozone layer') || txt.includes('cfc') || txt.includes('monsoon') && txt.includes('cause') || txt.includes('jet stream') || txt.includes('trade winds') || txt.includes('cyclone') || txt.includes('hurricane') || txt.includes('typhoon')) return 'geography';

    // Rule 19: Art & culture — origin/patron → History; which state/form → GK
    if (txt.includes('patron of') || txt.includes('patronage') || txt.includes('origin of') || txt.includes('founded by') || txt.includes('established by') || txt.includes('built by') || txt.includes('constructed by')) {
        if (txt.includes('dance') || txt.includes('painting') || txt.includes('music') || txt.includes('temple') || txt.includes('fort') || txt.includes('architecture')) return 'history';
    }

    // Rule 27: Space/astronomy → Geography (solar system, planets, satellites, stars)
    if (txt.includes('solar system') || txt.includes('planet') || txt.includes('satellite') || txt.includes('moon') || txt.includes('sun') || txt.includes('star') || txt.includes('galaxy') || txt.includes('orbit') || txt.includes('asteroid') || txt.includes('comet') || txt.includes('telescope') || txt.includes('nasa') || txt.includes('isro') || txt.includes('space station')) return 'geography';

    // Rule 29: Rivers — cultural/religious focus → GK; physical/location focus → Geography
    if ((txt.includes('river') || txt.includes('ganga') || txt.includes('yamuna') || txt.includes('brahmaputra') || txt.includes('indus')) && (txt.includes('sacred') || txt.includes('holy') || txt.includes('pilgrimage') || txt.includes('religious') || txt.includes('worshipped') || txt.includes('considered sacred'))) return 'general_knowledge';

    // Rule 30: 'First in India/World' questions — with year → History; without → GK
    if (txt.includes('first') && (txt.includes('in india') || txt.includes('in the world') || txt.includes('of india'))) {
        if (/\b(1[0-9]{3}|20[0-2][0-9])\b/.test(txt)) return 'history';
        return 'general_knowledge';
    }

    // Rule 23: Time zone / standard time → Geography
    if (txt.includes('standard time') || txt.includes('time zone') || (txt.includes('longitude') && txt.includes('time'))) return 'geography';


    // Rule 14: Geography routing (rivers/mountains/coastlines → Geography)
    if (txt.includes('latitude') || txt.includes('longitude') || txt.includes('river') || txt.includes('mountain') || txt.includes('ocean') || txt.includes('continent') || txt.includes('climate') || txt.includes('monsoon') || txt.includes('desert') || txt.includes('earthquake') || txt.includes('volcano') || txt.includes('plateau') || txt.includes('peninsula') || txt.includes('tectonic') || txt.includes('soil type') || txt.includes('rainfall') || txt.includes('tropics') || txt.includes('equator') || txt.includes('coastline') || txt.includes('tributary')) return 'geography';

    // Rule 42: State bifurcation/reorganisation → Polity
    if (txt.includes('bifurcated') || txt.includes('carved out of') || txt.includes('reorganisation act') || txt.includes('states reorganisation') || txt.includes('formed from') || txt.includes('renamed to')) return 'polity';

    // Rule 53: All writ types → Polity
    if (txt.includes('habeas corpus') || txt.includes('mandamus') || txt.includes('certiorari') || txt.includes('quo warranto') || txt.includes('prohibition') || txt.includes('writ') || txt.includes('article ') || txt.includes('constitution') || txt.includes('parliament') || txt.includes('lok sabha') || txt.includes('rajya sabha') || txt.includes('president of india') || txt.includes('prime minister') || txt.includes('fundamental rights') || txt.includes('directive principles') || txt.includes('amendment') || txt.includes('governor') || txt.includes('supreme court') || txt.includes('high court') || txt.includes('judiciary') || txt.includes('election commission') || txt.includes('preamble')) return 'polity';

    // Rule 49: Political parties → History (founding) — recent election winners → Current Affairs
    if (txt.includes('national congress') || txt.includes('founded') && (txt.includes('party') || txt.includes('congress') || txt.includes('league') || txt.includes('bjp') || txt.includes('rss'))) return 'history';
    if ((txt.includes('election') || txt.includes('general election')) && /\b20(1[0-9]|2[0-9])\b/.test(txt)) return 'current_affairs';


    // Rule 41: Percentage-of-earth/water/forest → Geography; population/poverty → Economy
    if (txt.includes('percentage of') || txt.includes('% of') || txt.includes('percent of')) {
        if (txt.includes('earth') || txt.includes('ocean') || txt.includes('water') || txt.includes('forest') || txt.includes('land area') || txt.includes('covered by')) return 'geography';
        if (txt.includes('population') || txt.includes('poverty') || txt.includes('rural') || txt.includes('urban') || txt.includes('literacy')) return 'economy';
    }

    // Rule 45: GDP/economic data conceptual → Economy; year-specific → Current Affairs
    if (txt.includes('gdp') || txt.includes('inflation') || txt.includes('rbi') || txt.includes('budget') || txt.includes('fiscal') || txt.includes('monetary') || txt.includes('five year plan') || txt.includes('niti aayog') || txt.includes('gst') || txt.includes('bank rate') || txt.includes('repo rate') || txt.includes('trade deficit') || txt.includes('foreign exchange') || txt.includes('sebi') || txt.includes('manchester of india') || txt.includes('textile') || txt.includes('industrial hub')) {
        // If question contains a specific year with economic data → Current Affairs
        if (/\b20(1[0-9]|2[0-9])\b/.test(txt) && (txt.includes('growth rate') || txt.includes('gdp') || txt.includes('inflation') || txt.includes('deficit'))) return 'current_affairs';
        return 'economy';
    }

    // Rules 1, 15, 16: Physics/Chemistry keywords (only if no specific topicId)
    const hasSpecificTopicId = ['history','geography','polity','economy','current_affairs'].includes(tid);
    if (!hasSpecificTopicId) {
        // Rule 15: Unit-of-measurement → Physics
        if (txt.includes('si unit') || txt.includes('unit of') || txt.includes('measured in') || txt.includes('unit is') || txt.includes('unit for')) return 'physics';
        // Rule 16: Physical law calculations → Physics
        if (txt.includes('rotation') || txt.includes('rotational speed') || txt.includes('centripetal') || txt.includes('gravitational') || txt.includes('force of gravity')) return 'physics';
        // Rule 20: Scientific inventions → relevant science bucket (Rule 36: 'who invented' → GK, handled by falling through)
        if (txt.includes('invented') || txt.includes('invention of') || txt.includes('discovered') || txt.includes('discovery of')) {
            if (!txt.includes('who invented') && (txt.includes('telephone') || txt.includes('radio') || txt.includes('electricity') || txt.includes('bulb') || txt.includes('x-ray') || txt.includes('laser') || txt.includes('transistor') || txt.includes('radar'))) return 'physics';
            if (txt.includes('penicillin') || txt.includes('vaccine') && txt.includes('discovered') || txt.includes('dna structure') || txt.includes('blood group') && txt.includes('discovered')) return 'biology';
            if (txt.includes('periodic table') && txt.includes('discovered') || txt.includes('oxygen') && txt.includes('discovered') || txt.includes('nitrogen') && txt.includes('discovered')) return 'chemistry';
        }
        // Rule 46: Weather/atmospheric instruments → Geography; electrical/lab instruments → Physics
        if (txt.includes('barometer') || txt.includes('hygrometer') || txt.includes('anemometer') || txt.includes('rain gauge') || txt.includes('seismograph') || txt.includes('seismometer')) return 'geography';
        if (txt.includes('thermometer') || txt.includes('ammeter') || txt.includes('voltmeter') || txt.includes('galvanometer') || txt.includes('spectrometer') || txt.includes('manometer')) return 'physics';
        // Rule 47: Technology/computing → general_knowledge
        if (txt.includes('world wide web') || txt.includes('tim berners') || txt.includes('stands for') && (txt.includes('cpu') || txt.includes('www') || txt.includes('lan') || txt.includes('wan') || txt.includes('atm') || txt.includes('gps') || txt.includes('email') || txt.includes('ram') || txt.includes('rom'))) return 'general_knowledge';
        // Rule 48: Indian nuclear tests and space missions → Current Affairs
        if (txt.includes('pokhran') || txt.includes('operation shakti') || txt.includes('nuclear test') || txt.includes('chandrayaan') || txt.includes('mangalyaan') || txt.includes('gaganyaan') || txt.includes('aryabhata') && txt.includes('satellite')) return 'current_affairs';
        // Rule 52: Sound/acoustics → Physics
        if (txt.includes('speed of sound') || txt.includes('ultrasonic') || txt.includes('infrasonic') || txt.includes('audible range') || txt.includes('acoustic')) return 'physics';
        // Rule 51: Animal taxonomy → Biology
        if (txt.includes('which order') && (txt.includes('bat') || txt.includes('belong')) || txt.includes('which family does') || txt.includes('which class does') || txt.includes('taxonomy') || txt.includes('phylum') || txt.includes('genus') || txt.includes('mammal') || txt.includes('reptile') || txt.includes('amphibian') || txt.includes('primate')) return 'biology';

        if (txt.includes('velocity') || txt.includes('acceleration') || txt.includes('newton') || txt.includes('ohm') || txt.includes('electric current') || txt.includes('magnetic field') || txt.includes('speed of light') || txt.includes('refraction') || txt.includes('reflection') || txt.includes('nuclear') || txt.includes('radiation') || txt.includes('pressure cooker') || txt.includes('thermodynamics') || txt.includes('semiconductor') || txt.includes('decibel') || txt.includes('wavelength') || txt.includes('frequency')) return 'physics';

        if (txt.includes('acid') || txt.includes('base') || txt.includes('periodic table') || txt.includes('oxidation') || txt.includes('reduction') || txt.includes('alloy') || txt.includes('chemical formula') || txt.includes('molecule') || txt.includes('catalyst') || txt.includes('polymer') || txt.includes('fertilizer') || txt.includes('ph ') || txt.includes('valency') || txt.includes('atomic number')) return 'chemistry';
    }


    if (txt.includes('cell') || txt.includes('dna') || txt.includes('gene') || txt.includes('photosynthesis') || txt.includes('respiration') || txt.includes('hormone') || txt.includes('enzyme') || txt.includes('disease') || txt.includes('virus') || txt.includes('bacteria') || txt.includes('immunity') || txt.includes('blood group') || txt.includes('chromosome') || txt.includes('ecosystem') || txt.includes('food chain') || txt.includes('vaccine')) return 'biology';

    // Rule 12: Defence/military → general_knowledge
    if (txt.includes('operation ') || txt.includes('regiment') || txt.includes('exercise ') || txt.includes('squadron') || txt.includes('brigade') || txt.includes('battalion') || txt.includes('missile') || txt.includes('aircraft carrier') || txt.includes('warship') || txt.includes('military base') || txt.includes('armed forces')) return 'general_knowledge';

    // Rule 18: National symbols → general_knowledge
    if (txt.includes('national bird') || txt.includes('national animal') || txt.includes('national flower') || txt.includes('national tree') || txt.includes('national emblem') || txt.includes('national anthem') || txt.includes('national song') || txt.includes('national fruit') || txt.includes('national sport')) return 'general_knowledge';

    // Rule 22: International organization HQs and memberships → general_knowledge
    if (txt.includes('headquarters') || txt.includes('hq of') || txt.includes('founded in') && (txt.includes('who') || txt.includes('wto') || txt.includes('nato') || txt.includes('asean') || txt.includes('brics') || txt.includes('g20') || txt.includes('imf') || txt.includes('world bank') || txt.includes('un ') || txt.includes('unicef'))) return 'general_knowledge';

    if (txt.includes('current affairs') || txt.includes('recently') || /20(2[0-9])/.test(txt)) return 'current_affairs';

    return 'general_knowledge';
}

// Rule 13: Analogy/Odd-one-out detector → AFCAT reasoning bucket
function isReasoningQ(q) {
    if (!q || !q.question) return false;
    const txt = (q.question + ' ' + (q.options||[]).join(' ')).toLowerCase();
    for (const p of REASONING_PATTERNS) if (txt.includes(p)) return true;
    return false;
}

// ─── Ingestion helpers ────────────────────────────────────────────────────────

function addEnglish(q) {
    if (!isValid(q)) return;
    const k = normKey(q);
    if (globalSeen.has(k)) return;
    globalSeen.add(k);
    const sub = classifyEnglish(q);
    
    let examTarget = (q.exam || 'ALL').toUpperCase();
    if (examTarget === 'CSE') examTarget = 'CDS';

    if (examTarget === 'ALL' || examTarget === 'CDS') bank.cds.english[sub].push(q);
    if (examTarget === 'ALL' || examTarget === 'NDA') bank.nda.gat.english[sub].push(q);
    if (examTarget === 'ALL' || examTarget === 'AFCAT') bank.afcat.english[sub].push(q);
}

function addMaths(q) {
    if (!isValid(q)) return;
    if (isEnglishQ(q)) return;
    if (!isMathsQ(q)) {
        addGS(q);
        return;
    }
    const k = normKey(q);
    if (globalSeen.has(k)) return;
    globalSeen.add(k);
    const sub = classifyMaths(q);
    
    let examTarget = (q.exam || 'ALL').toUpperCase();
    if (examTarget === 'CSE') examTarget = 'CDS';

    if (examTarget === 'ALL' || examTarget === 'CDS') bank.cds.maths[sub].push(q);
    if (examTarget === 'ALL' || examTarget === 'NDA') bank.nda.maths[sub].push(q);
    if (examTarget === 'ALL' || examTarget === 'AFCAT') {
        bank.afcat.numerical_ability[sub] ? bank.afcat.numerical_ability[sub].push(q) : bank.afcat.numerical_ability.arithmetic.push(q);
    }
}

function addGS(q, forceSubType) {
    if (!isValid(q)) return;
    if (isEnglishQ(q)) { addEnglish(q); return; }
    if (isMathsQ(q)) { addMaths(q); return; }
    // Rule 13: Analogy/Odd-one-out → AFCAT reasoning only (not CDS/NDA)
    if (isReasoningQ(q)) {
        const k = normKey(q);
        if (globalSeen.has(k)) return;
        globalSeen.add(k);
        bank.afcat.reasoning.push(q);
        return;
    }
    const k = normKey(q);
    if (globalSeen.has(k)) return;
    globalSeen.add(k);
    const sub = forceSubType || classifyGS(q);
    
    let examTarget = (q.exam || 'ALL').toUpperCase();
    if (examTarget === 'CSE') examTarget = 'CDS'; // Default CSE to CDS for now

    if (examTarget === 'ALL' || examTarget === 'CDS') {
        if (bank.cds.gs[sub]) bank.cds.gs[sub].push(q);
        else bank.cds.gs.general_knowledge.push(q);
    }
    
    if (examTarget === 'ALL' || examTarget === 'NDA') {
        if (bank.nda.gat[sub]) bank.nda.gat[sub].push(q);
        else if (['physics','chemistry','biology'].includes(sub)) bank.nda.gat[sub].push(q);
    }
    
    if (examTarget === 'ALL' || examTarget === 'AFCAT') {
        const afcatMap = { history:'history', geography:'geography', polity:'polity', economy:'polity', current_affairs:'current_affairs', physics:'science', chemistry:'science', biology:'science', general_knowledge:'science' };
        const afcatSub = afcatMap[sub] || 'science';
        if (bank.afcat.general_awareness[afcatSub]) bank.afcat.general_awareness[afcatSub].push(q);
    }
}

function addAFCAT(q) {
    if (!isValid(q)) return;
    const k = normKey(q);
    if (globalSeen.has(k)) return;
    globalSeen.add(k);
    const txt = (q.question + ' ' + q.options.join(' ')).toLowerCase();
    if (txt.includes('series') || txt.includes('analogy') || txt.includes('pattern') || txt.includes('spatial') || txt.includes('coding') || txt.includes('decoding') || txt.includes('direction') || txt.includes('rank') || txt.includes('figure') || txt.includes('odd one out') || txt.includes('syllogism') || txt.includes('sequence') || txt.includes('matrix') || txt.includes('clock')) {
        bank.afcat.reasoning.push(q);
    } else if (txt.includes('english') || txt.includes('synonym') || txt.includes('antonym') || txt.includes('grammar')) {
        addEnglish(q);
    } else {
        addGS(q);
    }
}

// ─── Load and ingest all sources ──────────────────────────────────────────────

function loadJSON(file) {
    try {
        return JSON.parse(fs.readFileSync('question_banks/' + file, 'utf8'));
    } catch(e) {
        console.log('  SKIP (error): ' + file);
        return null;
    }
}

const sources = [
    // CDS-specific PYQs (highest quality, ingest first)
    { file: 'cds_english_pyq.json', type: 'english_array' },
    { file: 'cds_math_pyq.json',    type: 'maths_array' },
    { file: 'cds_gs_pyq.json',      type: 'gs_array' },

    // Dedicated subject banks
    { file: 'english_bank.json',    type: 'obj', key: 'english', fn: addEnglish },
    { file: 'history_bank.json',    type: 'obj', key: 'history', fn: (q) => addGS(q, 'history') },
    { file: 'polity_bank.json',     type: 'obj', key: 'gs',      fn: (q) => addGS(q, 'polity') },
    { file: 'ca_bank.json',         type: 'obj', key: 'ca',      fn: (q) => addGS(q, 'current_affairs') },

    // CDS PYQ master bank
    { file: 'cds_pyq_bank.json',    type: 'cds_master' },

    // CAPF and NDA GS
    { file: 'capf_pyq_bank.json',   type: 'obj', key: 'gs', fn: addGS },
    { file: 'nda_gs_part1.json',    type: 'gs_array' },
    { file: 'nda_gs_part2.json',    type: 'gs_array' },

    // AFCAT PYQs
    { file: 'afcat_combined_pyq.json', type: 'afcat_array' },

    // Pathfinder (largest source — 7000+ questions)
    { file: 'pathfinder_bank.json', type: 'pathfinder' },

    // Trending and misc
    { file: 'trending_bank.json',   type: 'obj', key: 'gs', fn: addGS },
    { file: 'hq_bank.json',         type: 'obj', key: 'gs', fn: addGS },
    { file: 'upsc_master_bank.json',type: 'obj', key: 'gs', fn: addGS },
    { file: 'replica_bank.json',    type: 'obj', key: 'gs', fn: addGS },
];

for (const src of sources) {
    const d = loadJSON(src.file);
    if (!d) continue;
    let count = 0;

    if (src.type === 'english_array') {
        const arr = Array.isArray(d) ? d : [];
        arr.forEach(q => { addEnglish(q); count++; });
    } else if (src.type === 'maths_array') {
        const arr = Array.isArray(d) ? d : [];
        arr.forEach(q => { addMaths(q); count++; });
    } else if (src.type === 'gs_array') {
        const arr = Array.isArray(d) ? d : [];
        arr.forEach(q => { addGS(q); count++; });
    } else if (src.type === 'afcat_array') {
        const arr = Array.isArray(d) ? d : [];
        arr.forEach(q => { addAFCAT(q); count++; });
    } else if (src.type === 'obj') {
        const arr = Array.isArray(d[src.key]) ? d[src.key] : [];
        arr.forEach(q => { src.fn(q); count++; });
    } else if (src.type === 'cds_master') {
        (d.gs || []).forEach(q => { addGS(q); count++; });
        (d.english || []).forEach(q => { addEnglish(q); count++; });
        (d.maths || []).forEach(q => { addMaths(q); count++; });
        (d.afcat || []).forEach(q => { addAFCAT(q); count++; });
        Object.entries(d).forEach(([k, arr]) => {
            if (['gs','english','maths','afcat'].includes(k)) return;
            if (Array.isArray(arr)) arr.forEach(q => { addGS(q); count++; });
        });
    } else if (src.type === 'pathfinder') {
        (d.gs || []).forEach(q => { addGS(q); count++; });
        (d.english || []).forEach(q => { addEnglish(q); count++; });
        (d.maths || []).forEach(q => { addMaths(q); count++; });
    }

    console.log('  Processed ' + src.file + ' (' + count + ' entries)');
}

// ─── Summary ──────────────────────────────────────────────────────────────────

console.log('\n=== MASTER BANK SUMMARY ===\n');
console.log('CDS English:');
let engTotal = 0; Object.entries(bank.cds.english).forEach(([k,v]) => { console.log('  '+k+': '+v.length); engTotal+=v.length; });
console.log('  TOTAL: '+engTotal);
console.log('\nCDS Maths:');
let mathTotal = 0; Object.entries(bank.cds.maths).forEach(([k,v]) => { console.log('  '+k+': '+v.length); mathTotal+=v.length; });
console.log('  TOTAL: '+mathTotal);
console.log('\nCDS GS:');
let gsTotal = 0; Object.entries(bank.cds.gs).forEach(([k,v]) => { console.log('  '+k+': '+v.length); gsTotal+=v.length; });
console.log('  TOTAL: '+gsTotal);
console.log('\nNDA Maths TOTAL: '+ Object.values(bank.nda.maths).flat().length);
console.log('NDA GAT English TOTAL: '+ Object.values(bank.nda.gat.english).flat().length);
console.log('NDA GAT Science - physics:', bank.nda.gat.physics.length, 'chemistry:', bank.nda.gat.chemistry.length, 'biology:', bank.nda.gat.biology.length);
console.log('AFCAT Reasoning:', bank.afcat.reasoning.length);
console.log('AFCAT English TOTAL:', Object.values(bank.afcat.english).flat().length);
console.log('AFCAT General Awareness:', JSON.stringify(Object.fromEntries(Object.entries(bank.afcat.general_awareness).map(([k,v])=>[k,v.length]))));

// ─── Save ─────────────────────────────────────────────────────────────────────
fs.writeFileSync('question_banks/structured_bank.json', JSON.stringify(bank, null, 2));
console.log('\n✅ Saved to question_banks/structured_bank.json');
console.log('Total unique questions: ' + globalSeen.size);
