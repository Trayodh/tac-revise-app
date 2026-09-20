const fs = require('fs');
const path = require('path');

const DIAGRAMS_DIR = path.join(__dirname, 'assets', 'diagrams');
const DB_FILES = [
    'notes_data.js',
    ...fs.readdirSync(__dirname).filter(f => f.startsWith('notes_extra_') && f.endsWith('.js') && f !== 'notes_extra.js')
];

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach(function(file) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else if (fullPath.match(/\.(png|jpg|jpeg)$/i)) {
      arrayOfFiles.push(fullPath);
    }
  });
  return arrayOfFiles;
}

const imageFilesAbsolute = getAllFiles(DIAGRAMS_DIR);

const dbContents = {};
for (const file of DB_FILES) {
    if (fs.existsSync(file)) {
        dbContents[file] = fs.readFileSync(file, 'utf8');
    }
}

// Precise mapping of diagrams to topics
const EXACT_MAP = {
    'Anticyclone.png': 'climatology-clouds',
    'Atmospheric layers.png': 'earth-atmosphere',
    'Cyclone.png': 'climatology-clouds',
    'Indian Monsoon.png': 'syl-geog', // Indian Geography
    'Jet Streams.png': 'climatology-clouds',
    'Planetary winds.png': 'climatology-clouds',
    'Pressure Belts.png': 'climatology-clouds',
    // Let's also include some common fallbacks if there are others
};

// Fallback logic
const FOLDER_MAP = {
    'biology/cell': ['cell-structure'],
    'biology/genetics': ['cell-structure'],
    'biology/human systems': ['human-systems', 'diseases', 'immunity-vaccines'],
    'biology/plant biology': ['plant-kingdom', 'plant-reproduction'],
    'chemistry/acids bases': ['acids-bases'],
    'chemistry/atomic structure': ['syl-numerical'], 
    'chemistry/chemical bonding': ['syl-numerical'],
    'chemistry/electrochemistry': ['reactivity-series', 'chemistry-everyday-fertilisers'],
    'chemistry/industrial chemistry': ['environmental-chemistry', 'chemistry-everyday-fertilisers'],
    'chemistry/mole concept': ['chemistry-numericals'],
    'chemistry/periodic table': ['syl-numerical'],
    'ecology and environment': ['biology-ecology-basics', 'environmental-chemistry'],
    'geography/atmosphere-climatology': ['climatology-clouds', 'earth-atmosphere'],
    'geography/earth basics': ['universe-solar-system', 'earth-atmosphere'],
    'geography/geomorphology': ['geomorphology-rocks'],
    'geography/map (world)': ['mapping-borders-capitals', 'world-geography-mountains', 'world-geography-straits-deserts'],
    'geography/maps (indian)': ['mapping-borders-capitals', 'india-national-parks', 'syl-geog'],
    'geography/oceanography': ['world-geography-straits-deserts'],
    'history/ancient': ['stone-age', 'indus-valley-civilization', 'vedic-age', 'buddhism-jainism', 'mauryan-period', 'gupta-period', 'ancient-indian-culture'],
    'history/medieval': ['early-medieval-india', 'delhi-sultanate', 'vijayanagara-empire', 'mughal-empire', 'marathas'],
    'history/modern': ['european-arrival', 'revolt-1857', 'freedom-movement', 'post-independence-consolidation'],
    'history/world': ['revolutions', 'world-war-i', 'world-war-ii', 'cold-war'],
    'maths/coordinate geometry': ['straight-lines'],
    'maths/geometry': ['lines-angles-triangles', 'circles-polygons'],
    'maths/mensuration': ['area-perimeter', 'surface-area-volume'],
    'maths/probability': ['syl-probability'],
    'maths/statistics': ['central-tendency', 'data-interpretation'],
    'maths/trigonometry': ['trig-identities', 'inverse-trig'],
    'physics/electricity': ['physics-electricity-magnetism'],
    'physics/heat': ['physics-heat'],
    'physics/light': ['reflection-refraction'],
    'physics/magnetism': ['physics-electricity-magnetism'],
    'physics/mechanics': ['newtons-laws', 'syl-exercises', 'physics-units-everyday'],
    'physics/modern physics': ['physics-nuclear-basics'],
    'polity': ['preamble', 'schedules', 'fundamental-rights', 'dpsp', 'president', 'parliament', 'goverment-executives', 'judiciary', 'panchayati-raj', 'constitutional-bodies', 'polity-federal-structure']
};

let injectedCount = 0;

for (const imgPath of imageFilesAbsolute) {
    let relativePath = path.relative(__dirname, imgPath).replace(/\\/g, '/');
    const basename = path.basename(imgPath);
    const basenameWithoutExt = path.basename(imgPath, path.extname(imgPath));
    
    // Encode the path to handle spaces (e.g. Atmospheric%20layers.png)
    relativePath = relativePath.split('/').map(p => encodeURIComponent(p)).join('/');
    
    let topicId = EXACT_MAP[basename];
    
    if (!topicId) {
        // Fallback to FOLDER_MAP
        const parts = relativePath.toLowerCase().split('/');
        let targetTopics = null;
        for (const [folderKey, topicsList] of Object.entries(FOLDER_MAP)) {
            const folderParts = folderKey.split('/');
            if (folderParts.length === 1 && parts.includes(folderParts[0])) {
                targetTopics = topicsList; break;
            } else if (folderParts.length === 2 && parts.includes(folderParts[0]) && parts.includes(folderParts[1])) {
                targetTopics = topicsList; break;
            }
        }
        if (parts.includes('polity')) targetTopics = FOLDER_MAP['polity'];
        
        if (targetTopics && targetTopics.length > 0) {
            topicId = targetTopics[0]; // just pick the first for now if no exact match
        }
    }
    
    if (!topicId) {
        console.log(`Missed: ${basename}`);
        continue;
    }
    
    // NO LEADING SLASH in src!
    const imgHtmlUnescaped = `\n\n  <!-- DIAGRAM INJECTED -->\n  <h4 style='border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;'>Visual Summary Diagram: ${basenameWithoutExt}</h4>\n  <div style='text-align: center; margin: 20px 0;'>\n    <img src='${relativePath}' alt='${basenameWithoutExt}' style='max-width: 100%; border-radius: 8px; border: 1px solid var(--border);' />\n  </div>\n`;
    const imgHtmlEscaped = imgHtmlUnescaped.replace(/\n/g, '\\n');
    
    const regexContent = new RegExp(`("\\s*id\\s*":\\s*"${topicId}"[\\s\\S]*?"\\s*content\\s*":\\s*\`[\\s\\S]*?)(</div>\\s*)(?=\`,)`, 'g');
    const regexNotes = new RegExp(`("\\s*id\\s*":\\s*"${topicId}"[\\s\\S]*?"\\s*notes\\s*":\\s*"\\\\n<div class=\\\\"revision-card\\\\"[\\s\\S]*?)(</div>\\\\n")(?=,)`, 'g');
    const regexExtra = new RegExp(`(window\\.EXPANDED_NOTES_DATA\\["${topicId}"\\]\\s*=\\s*\`[\\s\\S]*?)(</div>\\s*)(?=\`;)`, 'g');
    const regexContentNoQ = new RegExp(`(id:\\s*"${topicId}"[\\s\\S]*?content:\\s*\`[\\s\\S]*?)(</div>\\s*)(?=\`,)`, 'g');
    const regexNotesNoQ = new RegExp(`(id:\\s*"${topicId}"[\\s\\S]*?notes:\\s*"\\\\n<div class=\\\\"revision-card\\\\"[\\s\\S]*?)(</div>\\\\n")(?=,)`, 'g');
    
    let injected = false;
    for (const [file, content] of Object.entries(dbContents)) {
        if (content.includes(`src='${relativePath}'`) || content.includes(`src="${relativePath}"`)) {
            injected = true;
            break;
        }
        
        const tryReplace = (regex, replacement) => {
            if (regex.test(dbContents[file])) {
                dbContents[file] = dbContents[file].replace(regex, `$1${replacement}$2`);
                return true;
            }
            return false;
        };
        
        if (tryReplace(regexContent, imgHtmlUnescaped) ||
            tryReplace(regexNotes, imgHtmlEscaped) ||
            tryReplace(regexExtra, imgHtmlUnescaped) ||
            tryReplace(regexContentNoQ, imgHtmlUnescaped) ||
            tryReplace(regexNotesNoQ, imgHtmlEscaped)) {
            injected = true;
            injectedCount++;
            break;
        }
    }
    
    if (!injected) {
        console.log(`Failed to find injection point for ${topicId} (${basename})`);
    } else {
        console.log(`Injected ${basename} -> ${topicId}`);
    }
}

for (const [file, content] of Object.entries(dbContents)) {
    fs.writeFileSync(file, content, 'utf8');
}
console.log(`Successfully injected ${injectedCount} diagrams.`);
