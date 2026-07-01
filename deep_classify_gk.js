/**
 * deep_classify_gk.js
 * 
 * Final deep classification of the general_knowledge bucket based on 
 * user-confirmed rules:
 * 
 * ECONOMY (strict — only if question is ABOUT economics concepts):
 *   MPI, elasticity, fiscal deficit, GDP, monetary policy, inflation, GDP,
 *   repo rate, CRR, SLR, SEBI, RBI (policy context), WPI, CPI, tax policy,
 *   poverty index, unemployment rate, trade balance/deficit/surplus
 * 
 * HISTORY (add more keywords):
 *   + Industrial Revolution, trade ports of ancient India (Arikamedu etc.)
 *   + first woman CM, Bharat Ratna recipients, freedom movement leaders
 * 
 * CHEMISTRY: acid, base, element, compound, periodic table, oxidation,
 *   alloy, molecule, catalyst, polymer, pH, benzene, nitrogen bonding, hardness of water
 * 
 * PHYSICS: force, motion, velocity, acceleration, optics, electricity,
 *   magnetism, heat, sound, nuclear, radiation, semiconductor
 * 
 * BIOLOGY: cell, DNA, gene, photosynthesis, respiration, hormone, enzyme,
 *   disease, virus, bacteria, blood, heart, chromosome, ecosystem, taxonomy
 * 
 * GEOGRAPHY (add): inclination of Earth's axis, solar energy received,
 *   seasons caused by tilt
 * 
 * CURRENT AFFAIRS: remove questions with years 2015-2019 (too old)
 *   Keep only 2020+ if explicitly mentioned
 * 
 * GK pool feeds into: ALL exams (CDS GS, NDA GAT, AFCAT GA)
 * 
 * UPSC-style multi-statement questions: valid for all exams including NDA GAT
 */

const fs = require('fs');
const bank = JSON.parse(fs.readFileSync('question_banks/structured_bank.json', 'utf8'));
const gk = [...bank.cds.gs.general_knowledge];

// Reset GK pool — will rebuild from scratch
bank.cds.gs.general_knowledge = [];

let counts = { history: 0, geography: 0, polity: 0, economy: 0, physics: 0, chemistry: 0, biology: 0, current_affairs: 0, gk: 0, dropped_old_ca: 0 };

// ─── Strict Economy patterns (only about economics CONCEPTS) ──────────────────
const ECONOMY_STRICT = [
    'multidimensional poverty index', 'mpi', 'income elasticity', 'price elasticity',
    'price elasticity of demand', 'fiscal deficit', 'revenue deficit', 'primary deficit',
    'monetary policy', 'inflation rate', 'repo rate', 'reverse repo', 'crr', 'slr',
    'wpi', 'cpi', 'consumer price index', 'wholesale price index',
    'balance of payments', 'trade deficit', 'trade surplus', 'current account deficit',
    'unemployment rate', 'poverty line', 'below poverty line', 'gini coefficient',
    'human development index', 'hdi',
    'national income', 'per capita income', 'gross domestic product',
    'direct tax', 'indirect tax', 'goods and services tax', 'customs duty',
    'disinvestment', 'foreign direct investment', 'fdi limit',
    'open market operations', 'quantitative easing',
    'sebi', 'rbi governor', 'niti aayog',
    'non-fungible token', 'nft', 'cryptocurrency',
    'public sector undertaking', 'psu', 'divestment',
];

// ─── Extended History patterns ────────────────────────────────────────────────
const HISTORY_EXTRA = [
    'industrial revolution', 'arikamedu', 'tamralipti', 'bharukachcha', 'muchiri',
    'maritime trade', 'spice trade', 'silk route',
    'first woman chief minister', 'sucheta kripalani',
    'bharat ratna', 'c. rajagopalachari', 'rajagopalachari',
    'preamble of india', 'constituent assembly',
    'swadeshi', 'khilafat', 'satyagraha', 'dandi march',
    'cabinet mission', 'cripps mission', 'wavell plan',
    'gupta period', 'gupta dynasty', 'gupta administration',
    'ajanta', 'ellora', 'sanchi', 'amaravati',
    'erok sim', 'santhal',
    'lonar lake',
];

// ─── Chemistry patterns ───────────────────────────────────────────────────────
const CHEMISTRY_STRICT = [
    'benzene', 'hardness of water', 'temporary hardness', 'permanent hardness',
    'nitrogen bonding', 'carbon tetravalent', 'chlorine isotope', 'helium diatomic',
    'unpaired electrons', 'delocalized electrons',
    'acid', 'base', 'salt solution', 'ph of', 'ph value',
    'periodic table', 'atomic number', 'atomic mass',
    'oxidation state', 'reduction', 'redox', 'valence',
    'alloy of', 'composition of', 'polymer of',
    'catalyst', 'activation energy',
    'carbohydrate', 'protein structure', 'amino acid',
    'organic chemistry', 'inorganic', 'chemical formula',
    'mole concept', 'avogadro',
    'fertilizer composition', 'urea', 'nitrogen fixation',
];

// ─── Physics patterns ─────────────────────────────────────────────────────────
const PHYSICS_STRICT = [
    'newton\'s law', 'force of', 'momentum', 'acceleration due to gravity',
    'kinetic energy', 'potential energy', 'work done',
    'optics', 'refraction', 'reflection', 'snell\'s law', 'refractive index',
    'total internal reflection', 'critical angle',
    'electric field', 'magnetic field', 'electromagnetic', 'faraday',
    'ohm\'s law', 'resistance', 'capacitance', 'inductance',
    'heat transfer', 'conduction', 'convection', 'radiation heat',
    'thermodynamics', 'entropy',
    'sound wave', 'frequency of sound', 'wavelength of sound', 'doppler',
    'nuclear fission', 'nuclear fusion', 'radioactivity', 'half-life',
    'semiconductor', 'diode', 'transistor', 'photoelectric effect',
    'x-ray', 'gamma ray', 'ultraviolet',
    'bernoulli', 'archimedes', 'pascal\'s law',
    'torque', 'angular momentum',
    'speedometer', 'instantaneous speed',
];

// ─── Biology patterns ─────────────────────────────────────────────────────────
const BIOLOGY_STRICT = [
    'heart chamber', 'left atrium', 'right atrium', 'left ventricle', 'right ventricle',
    'oxygen-rich blood', 'deoxygenated blood',
    'taxonomy', 'classification of animals', 'phylum', 'kingdom', 'class order family',
    'photosynthesis', 'chlorophyll', 'stomata',
    'cell membrane', 'mitochondria', 'ribosome', 'nucleus of cell',
    'dna replication', 'rna', 'mrna',
    'enzyme activity', 'hormone secreted by',
    'pathogen', 'vaccine for', 'antibody', 'antigen',
    'respiratory system', 'digestive system', 'nervous system',
    'blood group', 'rh factor',
    'ecosystem', 'food web', 'biodiversity',
    'endangered species', 'flora and fauna',
    'leukemia', 'cancer', 'aids', 'malaria', 'dengue',
];

// ─── Extended Geography ───────────────────────────────────────────────────────
const GEOGRAPHY_EXTRA = [
    'inclination of the earth', 'tilt of the earth', 'earth\'s axis',
    'solar energy received', 'seasonal variation', 'cause of seasons',
    'arctic', 'antarctic', 'polar region',
    'cotton textile industry in india', 'coal mining',
    'tiger reserve', 'national park', 'wildlife sanctuary',
    'biosphere reserve', 'ramsar',
    'rift valley', 'hanging valley', 'u-shaped valley', 'v-shaped valley',
];

// ─── Old CA detection ─────────────────────────────────────────────────────────
const OLD_CA_YEARS = ['2015', '2016', '2017', '2018', '2019'];
const NEW_CA_EXPLICIT = ['2020', '2021', '2022', '2023', '2024', 'recently'];

function isOldCA(q) {
    const txt = q.question.toLowerCase();
    // Has an old year mentioned explicitly
    if (OLD_CA_YEARS.some(y => txt.includes(y))) {
        // But NOT a newer year (question could mention both)
        if (!NEW_CA_EXPLICIT.some(y => txt.includes(y))) return true;
    }
    return false;
}

function isNewCA(q) {
    const txt = q.question.toLowerCase();
    return NEW_CA_EXPLICIT.some(y => txt.includes(y));
}

function addToBucket(q, bucket) {
    bank.cds.gs[bucket].push(q);
    if (['history', 'geography', 'polity', 'current_affairs'].includes(bucket)) {
        if (bank.nda.gat[bucket]) bank.nda.gat[bucket].push(q);
    }
    if (['physics', 'chemistry', 'biology'].includes(bucket)) {
        bank.nda.gat[bucket].push(q);
    }
    const afcatMap = { history: 'history', geography: 'geography', polity: 'polity', current_affairs: 'current_affairs', physics: 'science', chemistry: 'science', biology: 'science' };
    if (afcatMap[bucket]) bank.afcat.general_awareness[afcatMap[bucket]].push(q);
    counts[bucket]++;
}

// ─── Process each GK question ─────────────────────────────────────────────────

gk.forEach(q => {
    if (!q || !q.question) return;
    const txt = (q.question + ' ' + (q.options||[]).join(' ')).toLowerCase();

    // DROP: old CA questions (2015-2019 era)
    if (isOldCA(q)) {
        counts.dropped_old_ca++;
        return;
    }

    // CURRENT AFFAIRS: explicit 2020+
    if (isNewCA(q)) {
        addToBucket(q, 'current_affairs');
        return;
    }

    // ECONOMY (strict)
    if (ECONOMY_STRICT.some(p => txt.includes(p))) {
        addToBucket(q, 'economy');
        return;
    }

    // CHEMISTRY
    if (CHEMISTRY_STRICT.some(p => txt.includes(p))) {
        addToBucket(q, 'chemistry');
        return;
    }

    // PHYSICS
    if (PHYSICS_STRICT.some(p => txt.includes(p))) {
        addToBucket(q, 'physics');
        return;
    }

    // BIOLOGY
    if (BIOLOGY_STRICT.some(p => txt.includes(p))) {
        addToBucket(q, 'biology');
        return;
    }

    // GEOGRAPHY (extended)
    if (GEOGRAPHY_EXTRA.some(p => txt.includes(p))) {
        addToBucket(q, 'geography');
        return;
    }

    // HISTORY (extended)
    if (HISTORY_EXTRA.some(p => txt.includes(p))) {
        addToBucket(q, 'history');
        return;
    }

    // POLITY (already handled in main classifier, but catch stragglers)
    if (txt.includes('article ') || txt.includes('fundamental right') || txt.includes('directive principle') ||
        txt.includes('parliament') || txt.includes('lok sabha') || txt.includes('rajya sabha') ||
        txt.includes('supreme court') || txt.includes('high court') || txt.includes('election commission') ||
        txt.includes('amendment') || txt.includes('governor of') || txt.includes('president of india')) {
        addToBucket(q, 'polity');
        return;
    }

    // Default: stays in GK (valid for all exams)
    bank.cds.gs.general_knowledge.push(q);
    counts.gk++;
});

// ─── Summary ──────────────────────────────────────────────────────────────────
console.log('\n=== DEEP CLASSIFICATION RESULTS ===');
console.log('From GK bucket:');
Object.entries(counts).forEach(([k, v]) => console.log('  → ' + k + ': ' + v));
console.log('\nFinal CDS GS bucket sizes:');
Object.entries(bank.cds.gs).forEach(([k, v]) => console.log('  ' + k + ': ' + v.length));

fs.writeFileSync('question_banks/structured_bank.json', JSON.stringify(bank, null, 2));
console.log('\nSaved. Regenerating all papers...');
require('child_process').execSync('node generate_all_papers.js', { stdio: 'inherit' });
