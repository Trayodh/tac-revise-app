const fs = require('fs');

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
    'sebi', 'rbi', 'niti aayog', 'currency', 'bank', 'rupee', 'economy'
];

const HISTORY_EXTRA = [
    'industrial revolution', 'arikamedu', 'tamralipti', 'bharukachcha', 'muchiri',
    'maritime trade', 'spice trade', 'silk route',
    'sucheta kripalani', 'bharat ratna', 'rajagopalachari',
    'swadeshi', 'khilafat', 'satyagraha', 'dandi march', 'gandhi', 'nehru', 'bose',
    'cabinet mission', 'cripps', 'wavell',
    'gupta', 'maurya', 'mughal', 'chola', 'harappa', 'indus valley',
    'ajanta', 'ellora', 'sanchi', 'buddha', 'mahavira',
    'revolt of 1857', 'movement', 'treaty', 'dynasty', 'empire', 'king', 'war of',
    'chittagong', 'maratha', 'sikh', 'east india company'
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
    'respiratory', 'digestive', 'nervous', 'excretory', 'reproductive', 'muscle', 'bone', 'vertebrae',
    'ecosystem', 'biodiversity', 'food chain', 'web',
    'disease', 'cancer', 'aids', 'malaria', 'dengue', 'vitamin', 'deficiency'
];

const GEOGRAPHY_EXTRA = [
    'earth', 'axis', 'solar', 'season', 'equator', 'latitude', 'longitude', 'tropic',
    'arctic', 'antarctic', 'polar', 'climate', 'weather', 'monsoon', 'wind', 'cyclone',
    'industry', 'mining', 'agriculture', 'soil', 'crop',
    'reserve', 'park', 'sanctuary', 'forest', 'vegetation',
    'valley', 'mountain', 'river', 'lake', 'ocean', 'sea', 'plateau', 'plain', 'desert',
    'rock', 'mineral', 'earthquake', 'volcano', 'tsunami', 'river', 'delta'
];

const POLITY = [
    'article', 'fundamental right', 'directive principle', 'constitution', 'amendment',
    'parliament', 'lok sabha', 'rajya sabha', 'legislat',
    'supreme court', 'high court', 'judiciar', 'judge',
    'election commission', 'president', 'governor', 'prime minister', 'chief minister',
    'panchayat', 'municipality', 'bill', 'act', 'schedule', 'first past the post'
];

const MATHS_STRICT = [
    'mean of frequency', 'mode of frequency', 'mode of the frequency', 'median of the distribution',
    'probability', 'sin ', 'cos ', 'tan ', 'cot ', 'sec ', 'cosec ', 'sin(', 'cos(', 'triangle', 'quadrilateral',
    'radius', 'angle', 'elevation', 'transversal', 'intersect', 'frequency distribution',
    'lcm', 'hcf', 'cistern', 'product of the two numbers', 'digits are reversed',
    'mathematics and statistics', 'average number', 'age difference'
];

function classify(qText) {
    const txt = qText.toLowerCase();
    
    if (MATHS_STRICT.some(p => txt.includes(p.toLowerCase()))) return 'Mathematics';
    if (ECONOMY_STRICT.some(p => txt.includes(p.toLowerCase()))) return 'Economics';
    if (CHEMISTRY_STRICT.some(p => txt.includes(p.toLowerCase()))) return 'Chemistry';
    if (PHYSICS_STRICT.some(p => txt.includes(p.toLowerCase()))) return 'Physics';
    if (BIOLOGY_STRICT.some(p => txt.includes(p.toLowerCase()))) return 'Biology';
    if (GEOGRAPHY_EXTRA.some(p => txt.includes(p.toLowerCase()))) return 'Geography';
    if (HISTORY_EXTRA.some(p => txt.includes(p.toLowerCase()))) return 'History';
    if (POLITY.some(p => txt.includes(p.toLowerCase()))) return 'Polity';
    
    if (txt.match(/201[0-9]|202[0-9]/)) return 'Current Affairs';
    
    return 'General Knowledge';
}

function run() {
    const code = fs.readFileSync('extra_bank_data.js', 'utf8');
    const window = {};
    eval(code);
    const data = window.EXTRA_QUESTION_BANK;

    if (!data['General Knowledge'] || !data['General Knowledge']['Science']) {
        console.log("No Science chapter found under General Knowledge.");
        return;
    }

    const scienceQs = data['General Knowledge']['Science'];
    console.log(`Processing ${scienceQs.length} questions in General Knowledge > Science...`);

    const stats = {};

    scienceQs.forEach(q => {
        const text = q.question + " " + (q.options ? q.options.join(" ") : "");
        const subject = classify(text);
        
        let targetChapter = 'General ' + subject;
        if (subject === 'Polity') targetChapter = 'Indian Polity';
        if (subject === 'Economics') targetChapter = 'Indian Economy';
        if (subject === 'General Knowledge') targetChapter = 'General';

        if (!data[subject]) data[subject] = {};
        if (!data[subject][targetChapter]) data[subject][targetChapter] = [];
        
        data[subject][targetChapter].push(q);
        
        stats[subject] = (stats[subject] || 0) + 1;
    });

    // Remove the old Science chapter
    delete data['General Knowledge']['Science'];

    const newCode = 'window.EXTRA_QUESTION_BANK = ' + JSON.stringify(data, null, 2) + ';';
    fs.writeFileSync('extra_bank_data.js', newCode);

    console.log("Reclassification complete. Stats:", stats);
}

run();
