const fs = require('fs');
const path = require('path');

const topics = JSON.parse(fs.readFileSync('all_topics_list.json', 'utf8'));
const diagramsDir = path.join('assets', 'diagrams');

const allImages = [];
function walk(dir) {
    for (const item of fs.readdirSync(dir)) {
        const full = path.join(dir, item);
        if (fs.statSync(full).isDirectory()) walk(full);
        else if (/\.(png|jpg|jpeg)$/i.test(item)) {
            allImages.push({
                name: item,
                path: path.relative(diagramsDir, full).split(path.sep).join('/')
            });
        }
    }
}
walk(diagramsDir);

const FOLDER_MAP = {
    'biology/cell': ['cell-structure'],
    'biology/genetics': ['genetics'], 
    'biology/human systems': ['human-systems'],
    'biology/plant biology': ['plant-kingdom'],
    'chemistry/acids bases': ['acids-bases'],
    'chemistry/atomic structure': ['syl-numerical'], 
    'chemistry/chemical bonding': ['chemistry-bonding'],
    'chemistry/electrochemistry': ['reactivity-series'],
    'chemistry/industrial chemistry': ['environmental-chemistry'],
    'chemistry/mole concept': ['chemistry-numericals'],
    'chemistry/periodic table': ['chemistry-bonding'],
    'ecology and environment': ['biology-ecology-basics'],
    'geography/atmosphere-climatology': ['earth-atmosphere'],
    'geography/earth basics': ['universe-solar-system'],
    'geography/geomorphology': ['geomorphology-rocks'],
    'geography/map (world)': ['mapping-borders-capitals'],
    'geography/maps (indian)': ['mapping-borders-capitals'],
    'geography/oceanography': ['world-geography-straits-deserts'],
    'history/ancient': ['stone-age'], // Fallback
    'history/medieval': ['early-medieval-india'], // Fallback
    'history/modern': ['european-arrival'], // Fallback
    'history/world': ['revolutions'], // Fallback
    'maths/coordinate geometry': ['straight-lines'],
    'maths/geometry': ['lines-angles-triangles'],
    'maths/mensuration': ['area-perimeter'],
    'maths/probability': ['syl-probability'],
    'maths/statistics': ['central-tendency'],
    'maths/trigonometry': ['trig-identities'],
    'physics/electricity': ['physics-electricity-magnetism'],
    'physics/heat': ['physics-heat'],
    'physics/light': ['reflection-refraction'],
    'physics/magnetism': ['physics-electricity-magnetism'],
    'physics/mechanics': ['newtons-laws'],
    'physics/modern physics': ['physics-nuclear-basics'],
    'polity': ['preamble'],
    'economics': ['economics-basics'],
    'reasoning afcat': ['afcat-verbal-reasoning']
};

const KEYWORD_MAP = {
    'ashokan': 'mauryan-period',
    'buddhism': 'buddhism-jainism',
    'gupta': 'gupta-period',
    'indus': 'indus-valley-civilization',
    'mauryan': 'mauryan-period',
    'vedic': 'vedic-age',
    'battle formations': 'early-medieval-india',
    'delhi sultanate': 'delhi-sultanate',
    'mansabdari': 'mughal-empire',
    'marathas': 'marathas',
    'mughal': 'mughal-empire',
    'gandhian': 'freedom-movement',
    'governor': 'european-arrival',
    'congress': 'freedom-movement',
    '1857': 'revolt-1857',
    'french': 'revolutions',
    'industrial': 'revolutions',
    'league': 'revolutions',
    'russian': 'revolutions',
    'united nations': 'revolutions', 
    'world war 1': 'world-war-i',
    'world war 2': 'world-war-ii',
    'blood circulation': 'human-systems',
    'central nervous': 'human-systems',
    'digestive': 'human-systems',
    'endocrine': 'human-systems',
    'eye': 'human-systems',
    'ear': 'human-systems',
    'respiratory': 'human-systems',
    'sexual': 'human-systems',
    'urinary': 'human-systems',
    'flower': 'plant-reproduction',
    'leaf': 'plant-kingdom',
    'photosynthesis': 'plant-kingdom',
    'root': 'plant-kingdom',
    'seed': 'plant-reproduction',
    'stem modifications': 'plant-kingdom',
    'xylem': 'plant-kingdom',
    'cell reproduction': 'cell-structure',
    'dna': 'cell-structure',
    'prokaryotic': 'cell-structure',
    'anticyclone': 'climatology-clouds',
    'cyclone': 'climatology-clouds',
    'indian monsoon': 'syl-geog',
    'jet streams': 'climatology-clouds',
    'planetary winds': 'climatology-clouds',
    'pressure belts': 'climatology-clouds',
    'atmospheric layers': 'earth-atmosphere',
    "earth's rotation": 'universe-solar-system',
    'internal structure': 'universe-solar-system',
    'date line': 'universe-solar-system',
    'longitude': 'universe-solar-system',
    'geographic lines': 'universe-solar-system',
    'time zones': 'universe-solar-system',
    'constitution': 'preamble',
    'cag': 'constitutional-bodies',
    'courts hierarchy': 'judiciary',
    'finance commission': 'constitutional-bodies',
    'fundamental duties': 'dpsp',
    'legislative': 'parliament',
    'panchayati': 'panchayati-raj',
    'parliament': 'parliament',
    'preamble': 'preamble',
    'union executive': 'president',
    'elections': 'constitutional-bodies',
    'upsc': 'constitutional-bodies',
    'vice president': 'president',
    'area': 'area-perimeter',
    'cone': 'surface-area-volume',
    'cube': 'surface-area-volume',
    'cylinder': 'surface-area-volume',
    'mensuration': 'surface-area-volume',
    'pyramid': 'surface-area-volume',
    'blood relations': 'syl-verbal-reasoning',
    'calendar': 'syl-verbal-reasoning',
    'clock': 'syl-verbal-reasoning',
    'dice': 'afcat-nonverbal-reasoning',
    'directions': 'syl-verbal-reasoning',
    'image patterns': 'afcat-nonverbal-reasoning',
    'seating': 'syl-verbal-reasoning',
    'venn': 'syl-verbal-reasoning'
};

const exactMap = {};
let missed = [];

for (const img of allImages) {
    const name = img.name;
    const pathLower = img.path.toLowerCase();
    
    let matchedId = null;
    
    // 1. Keyword check
    for (const [kw, tid] of Object.entries(KEYWORD_MAP)) {
        const regex = new RegExp('\\b' + kw + '\\b', 'i');
        if (regex.test(name)) {
            matchedId = tid;
            break;
        }
    }
    
    // 2. Folder fallback
    if (!matchedId) {
        for (const [folder, tids] of Object.entries(FOLDER_MAP)) {
            if (pathLower.includes(folder)) {
                matchedId = tids[0];
                break;
            }
        }
    }
    
    if (!matchedId) {
        missed.push(img.path);
    }
    exactMap[img.name] = matchedId;
}

fs.writeFileSync('perfect_map.json', JSON.stringify(exactMap, null, 2));
console.log('perfect_map.json created with ' + Object.keys(exactMap).length + ' images.');
console.log('Missed:', missed.length);
