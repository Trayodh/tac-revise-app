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

// Pre-cache topic texts and extract all headings/list items
const topicData = {};
for (const topic of allTopics) {
    const rawText = findTopicText(topic.id);
    const textLower = rawText.toLowerCase();
    
    // Extract keywords from headings, bold tags, and list items
    const matches = [...rawText.matchAll(/<(h[1-6]|li|strong|b)[^>]*>(.*?)<\/\1>/gi)];
    let keywords = matches.map(m => m[2].replace(/<[^>]+>/g, '').trim()).filter(t => t.length > 3);
    keywords.push(topic.title);
    keywords.push(topic.id);
    
    // Remove duplicates
    keywords = [...new Set(keywords)];
    
    topicData[topic.id] = {
        raw: rawText,
        lower: textLower,
        keywords: keywords,
        subject: (topic.subject || "").toLowerCase()
    };
}

let injectedCount = 0;
let missedImages = [];

for (const imgPath of imageFilesAbsolute) {
    const relativePath = path.relative(__dirname, imgPath).replace(/\\/g, '/');
    const basename = path.basename(imgPath, path.extname(imgPath));
    
    const parts = relativePath.split('/');
    const subjectFolder = parts[2].toLowerCase(); // e.g., "geography"
    
    let bestTopic = null;
    let bestScore = -1;
    let exactMatch = allTopics.find(t => t.id === basename);
    
    if (exactMatch) {
        bestTopic = exactMatch;
    } else {
        const searchStr = basename.toLowerCase().trim();
        
        for (const topic of allTopics) {
            const data = topicData[topic.id];
            
            // Limit to topics in the same subject folder roughly
            if (!data.subject.includes(subjectFolder) && !subjectFolder.includes(data.subject)) {
                // If there's no subject match, skip to avoid mis-mapping
                // BUT for Reasoning AFCAT, subject might be "reasoning"
                // Let's not strictly skip, but give heavy penalty if we do
            }
            
            let score = 0;
            
            if (data.lower.includes(searchStr)) {
                score += 10;
            }
            if (topic.title.toLowerCase().includes(searchStr)) {
                score += 20;
            }
            
            // Try string similarity against the extracted keywords
            if (data.keywords.length > 0) {
                const match = stringSimilarity.findBestMatch(searchStr, data.keywords);
                if (match.bestMatch.rating > 0.6) {
                    score += match.bestMatch.rating * 15; // up to 15 points
                }
            }
            
            if (score > 0) {
                // Bonus for matching subject
                if (data.subject.includes(subjectFolder) || subjectFolder.includes(data.subject)) {
                    score += 10;
                }
                
                if (score > bestScore) {
                    bestScore = score;
                    bestTopic = topic;
                }
            }
        }
    }
    
    if (!bestTopic) {
        missedImages.push(basename);
        continue;
    }
    
    const topicId = bestTopic.id;
    console.log(`Mapped [${basename}] -> Topic: ${topicId} (Score: ${bestScore})`);
    
    const imgHtmlUnescaped = `\\n\\n  <!-- DIAGRAM INJECTED -->\\n  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Visual Summary Diagram: ${basename}</h4>\\n  <div style="text-align: center; margin: 20px 0;">\\n    <img src="${relativePath}" alt="${basename}" style="max-width: 100%; border-radius: 8px; border: 1px solid var(--border);" />\\n  </div>\\n`;
    const imgHtmlEscaped = imgHtmlUnescaped.replace(/"/g, '\\\\"').replace(/\\n/g, '\\\\n');
    
    const r = topicRegexes[topicId];
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
    console.log(`Missed images (${missedImages.length}):`, missedImages);
}
