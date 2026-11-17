const fs = require('fs');
const path = require('path');
const stringSimilarity = require('string-similarity');

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

const allTopics = JSON.parse(fs.readFileSync('all_topics_mapping.json', 'utf8'));
const imageFilesAbsolute = getAllFiles(DIAGRAMS_DIR);

const dbContents = {};
for (const file of DB_FILES) {
    if (fs.existsSync(file)) {
        dbContents[file] = fs.readFileSync(file, 'utf8');
    }
}

const topicRegexes = {};
for (const topic of allTopics) {
    topicRegexes[topic.id] = {
        regexContent: new RegExp(`("\\s*id\\s*":\\s*"${topic.id}"[\\s\\S]*?"\\s*content\\s*":\\s*\`[\\s\\S]*?)(</div>\\s*)(?=\`,)`, 'g'),
        regexNotes: new RegExp(`("\\s*id\\s*":\\s*"${topic.id}"[\\s\\S]*?"\\s*notes\\s*":\\s*"\\\\n<div class=\\\\"revision-card\\\\"[\\s\\S]*?)(</div>\\\\n")(?=,)`, 'g'),
        regexExtra: new RegExp(`(window\\.EXPANDED_NOTES_DATA\\["${topic.id}"\\]\\s*=\\s*\`[\\s\\S]*?)(</div>\\s*)(?=\`;)`, 'g'),
        regexContentNoQ: new RegExp(`(id:\\s*"${topic.id}"[\\s\\S]*?content:\\s*\`[\\s\\S]*?)(</div>\\s*)(?=\`,)`, 'g'),
        regexNotesNoQ: new RegExp(`(id:\\s*"${topic.id}"[\\s\\S]*?notes:\\s*"\\\\n<div class=\\\\"revision-card\\\\"[\\s\\S]*?)(</div>\\\\n")(?=,)`, 'g')
    };
}

function findTopicText(topicId) {
    const r = topicRegexes[topicId];
    for (const [file, content] of Object.entries(dbContents)) {
        let m = [...content.matchAll(r.regexContent)];
        if (m.length > 0) return m[0][0];
        m = [...content.matchAll(r.regexNotes)];
        if (m.length > 0) return m[0][0];
        m = [...content.matchAll(r.regexExtra)];
        if (m.length > 0) return m[0][0];
        m = [...content.matchAll(r.regexContentNoQ)];
        if (m.length > 0) return m[0][0];
        m = [...content.matchAll(r.regexNotesNoQ)];
        if (m.length > 0) return m[0][0];
    }
    return "";
}

const topicData = {};
for (const topic of allTopics) {
    const rawText = findTopicText(topic.id);
    const textLower = rawText.toLowerCase();
    
    const matches = [...rawText.matchAll(/<(h[1-6]|li|strong|b)[^>]*>(.*?)<\/\1>/gi)];
    let keywords = matches.map(m => m[2].replace(/<[^>]+>/g, '').trim()).filter(t => t.length > 3);
    keywords.push(topic.title);
    keywords.push(topic.id);
    
    keywords = [...new Set(keywords)];
    
    topicData[topic.id] = {
        title: topic.title,
        raw: rawText,
        lower: textLower,
        keywords: keywords
    };
}

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
let missedImages = [];

for (const imgPath of imageFilesAbsolute) {
    const relativePath = path.relative(__dirname, imgPath).replace(/\\/g, '/');
    const basename = path.basename(imgPath, path.extname(imgPath));
    
    const parts = relativePath.toLowerCase().split('/');
    let targetTopics = null;
    
    // Find matching folder map
    for (const [folderKey, topicsList] of Object.entries(FOLDER_MAP)) {
        const folderParts = folderKey.split('/');
        // Check if the relativePath contains these parts in sequence
        if (folderParts.length === 1 && parts.includes(folderParts[0])) {
            targetTopics = topicsList;
            break;
        } else if (folderParts.length === 2 && parts.includes(folderParts[0]) && parts.includes(folderParts[1])) {
            targetTopics = topicsList;
            break;
        }
    }
    
    if (parts.includes('polity')) {
        targetTopics = FOLDER_MAP['polity'];
    }
    
    if (!targetTopics) {
        missedImages.push(`${basename} (No matching folder category)`);
        continue;
    }
    
    let bestTopicId = targetTopics[0]; // Default to first if similarity fails
    let bestScore = -1;
    const searchStr = basename.toLowerCase().trim();
    
    if (targetTopics.length > 1) {
        for (const tid of targetTopics) {
            const data = topicData[tid];
            if (!data) continue;
            
            let score = 0;
            if (data.lower.includes(searchStr)) score += 20;
            if (data.title.toLowerCase().includes(searchStr)) score += 30;
            
            if (data.keywords.length > 0) {
                const match = stringSimilarity.findBestMatch(searchStr, data.keywords);
                score += match.bestMatch.rating * 50;
            }
            
            if (score > bestScore) {
                bestScore = score;
                bestTopicId = tid;
            }
        }
    }
    
    const topicId = bestTopicId;
    console.log(`Mapped [${basename}] -> Topic: ${topicId}`);
    
    const imgHtmlUnescaped = `\\n\\n  <!-- DIAGRAM INJECTED -->\\n  <h4 style='border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;'>Visual Summary Diagram: ${basename}</h4>\\n  <div style='text-align: center; margin: 20px 0;'>\\n    <img src='${relativePath}' alt='${basename}' style='max-width: 100%; border-radius: 8px; border: 1px solid var(--border);' />\\n  </div>\\n`;
    const imgHtmlEscaped = imgHtmlUnescaped.replace(/\\n/g, '\\\\n');
    
    const r = topicRegexes[topicId];
    if (!r) {
        console.log(`[ERROR] Regex not found for ${topicId}`);
        continue;
    }
    
    let injected = false;
    for (const [file, content] of Object.entries(dbContents)) {
        if (content.includes(`src="${relativePath}"`) || content.includes(`src=\\\\"${relativePath}\\\\"`)) {
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
        
        if (tryReplace(r.regexContent, imgHtmlUnescaped) ||
            tryReplace(r.regexNotes, imgHtmlEscaped) ||
            tryReplace(r.regexExtra, imgHtmlUnescaped) ||
            tryReplace(r.regexContentNoQ, imgHtmlUnescaped) ||
            tryReplace(r.regexNotesNoQ, imgHtmlEscaped)) {
            injected = true;
            injectedCount++;
            break;
        }
    }
    
    if (!injected) {
        console.log(`  -> [ERROR] Failed to find injection point for ${topicId}`);
    }
}

for (const [file, content] of Object.entries(dbContents)) {
    fs.writeFileSync(file, content, 'utf8');
}

console.log(`Successfully injected ${injectedCount} diagrams into the app!`);
if (missedImages.length > 0) {
    console.log(`Missed images (${missedImages.length}):`, missedImages.slice(0, 10).join(', ') + '...');
}
