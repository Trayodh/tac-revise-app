const fs = require('fs');
const path = require('path');
const stringSimilarity = require('string-similarity');

const DIAGRAMS_DIR = path.join(__dirname, 'assets', 'diagrams');
const DB_FILES = [
    'notes_data.js',
    ...fs.readdirSync(__dirname).filter(f => f.startsWith('notes_extra_') && f.endsWith('.js') && f !== 'notes_extra.js')
];
const TOPICS_JSON = path.join(__dirname, 'all_topics_mapping.json');

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

const allTopics = JSON.parse(fs.readFileSync(TOPICS_JSON, 'utf8'));
const topicTitles = allTopics.map(t => t.title);

const imageFilesAbsolute = getAllFiles(DIAGRAMS_DIR);
const imageFiles = imageFilesAbsolute.map(p => path.relative(__dirname, p).replace(/\\/g, '/'));

console.log(`Found ${imageFiles.length} images to inject.`);

const dbContents = {};
for (const file of DB_FILES) {
    if (fs.existsSync(file)) {
        dbContents[file] = fs.readFileSync(file, 'utf8');
    }
}

let injectedCount = 0;
let missedImages = [];

function sanitizeForMatch(str) {
    return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}

for (const imgFile of imageFiles) {
    const basename = path.basename(imgFile, path.extname(imgFile));
    
    // First, try to see if basename matches exactly an ID
    let matchedTopic = allTopics.find(t => t.id === basename);
    
    if (!matchedTopic) {
        // Try string similarity against titles
        const matches = stringSimilarity.findBestMatch(basename, topicTitles);
        const bestMatch = matches.bestMatch;
        
        // Also check if basename is a substring of the title (sanitized)
        const sanitizedBase = sanitizeForMatch(basename);
        let substringMatch = allTopics.find(t => sanitizeForMatch(t.title).includes(sanitizedBase) || sanitizeForMatch(t.id).includes(sanitizedBase));
        
        if (bestMatch.rating > 0.4) {
            matchedTopic = allTopics.find(t => t.title === bestMatch.target);
        } else if (substringMatch) {
            matchedTopic = substringMatch;
        }
    }

    if (!matchedTopic) {
        console.log(`[!] Could not confidently map image: ${basename}`);
        missedImages.push(basename);
        continue;
    }

    const topicId = matchedTopic.id;
    console.log(`Mapped [${basename}] -> Topic: ${topicId} (${matchedTopic.title})`);

    const imageHtmlUnescaped = `\\n\\n  <!-- DIAGRAM INJECTED -->\\n  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Visual Summary Diagram</h4>\\n  <div style="text-align: center; margin: 20px 0;">\\n    <img src="${imgFile}" alt="${topicId}" style="max-width: 100%; border-radius: 8px; border: 1px solid var(--border);" />\\n  </div>\\n`;
    const imageHtmlEscaped = imageHtmlUnescaped.replace(/"/g, '\\\\"').replace(/\\n/g, '\\\\n');

    let injected = false;
    for (const [file, content] of Object.entries(dbContents)) {
        // Prevent double injection
        if (content.includes(`src="${imgFile}"`) || content.includes(`src=\\\\"${imgFile}\\\\"`)) {
            console.log(`  -> Already injected in ${file}`);
            injected = true;
            break;
        }

        // Try injecting into window.EXPANDED_NOTES_DATA (template literal)
        const regex1 = new RegExp(`(window\\.EXPANDED_NOTES_DATA\\["${topicId}"\\]\\s*=\\s*\`[\\s\\S]*?)(</div>\\s*)(?=\`;)`, 'g');
        if (regex1.test(content)) {
            dbContents[file] = content.replace(regex1, `$1${imageHtmlUnescaped}$2`);
            console.log(`  -> Injected into ${file} (EXPANDED_NOTES_DATA)`);
            injected = true;
            injectedCount++;
            break;
        }
    }
    
    if (!injected && dbContents['notes_data.js']) {
        if (!dbContents['notes_data.js'].includes(`src="${imgFile}"`) && !dbContents['notes_data.js'].includes(`src=\\\\"${imgFile}\\\\"`)) {
            // Find the node id and inject right before the closing </div>
            const regex2 = new RegExp(`(id:\\s*"${topicId}"[\\s\\S]*?content:\\s*\`[\\s\\S]*?)(</div>\\s*)(?=\`,)`, 'g');
            if (regex2.test(dbContents['notes_data.js'])) {
                dbContents['notes_data.js'] = dbContents['notes_data.js'].replace(regex2, `$1${imageHtmlUnescaped}$2`);
                console.log(`  -> Injected into notes_data.js (content)`);
                injectedCount++;
            } else {
                // Fallback for "notes" field which is a regular string
                const regex3 = new RegExp(`(id:\\s*"${topicId}"[\\s\\S]*?notes:\\s*"\\\\n<div class=\\\\"revision-card\\\\"[\\s\\S]*?)(</div>\\\\n")(?=,)`, 'g');
                if (regex3.test(dbContents['notes_data.js'])) {
                    dbContents['notes_data.js'] = dbContents['notes_data.js'].replace(regex3, `$1${imageHtmlEscaped}$2`);
                    console.log(`  -> Injected into notes_data.js (notes)`);
                    injectedCount++;
                } else {
                    console.log(`  -> [ERROR] Failed to find injection point for ${topicId} in notes_data.js`);
                }
            }
        }
    }
}

for (const [file, content] of Object.entries(dbContents)) {
    fs.writeFileSync(file, content, 'utf8');
}

console.log(`Successfully injected ${injectedCount} diagrams into the app!`);
if (missedImages.length > 0) {
    console.log(`Missed images (${missedImages.length}):`, missedImages);
}
