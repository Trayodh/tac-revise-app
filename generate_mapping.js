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
        keywords: keywords,
        subject: (topic.subject || "").toLowerCase()
    };
}

const mappingResult = {};

for (const imgPath of imageFilesAbsolute) {
    const relativePath = path.relative(__dirname, imgPath).replace(/\\/g, '/');
    const basename = path.basename(imgPath, path.extname(imgPath));
    
    const parts = relativePath.split('/');
    const subjectFolder = parts[2].toLowerCase();
    
    let bestTopic = null;
    let bestScore = -1;
    let exactMatch = allTopics.find(t => t.id === basename);
    
    if (exactMatch) {
        bestTopic = exactMatch;
    } else {
        const searchStr = basename.toLowerCase().trim();
        
        for (const topic of allTopics) {
            const data = topicData[topic.id];
            
            let isSubjectMatch = data.subject.includes(subjectFolder) || subjectFolder.includes(data.subject);
            // Relax subject match for reasoning/maths since folder might be 'Reasoning AFCAT' but topic is 'math' or 'reasoning'
            if (subjectFolder.includes("reasoning") && data.subject.includes("reasoning")) isSubjectMatch = true;
            if (subjectFolder.includes("maths") && data.subject.includes("math")) isSubjectMatch = true;
            if (subjectFolder.includes("polity") && data.subject.includes("polity")) isSubjectMatch = true;
            
            let score = 0;
            
            if (data.lower.includes(searchStr)) {
                score += 15;
            }
            if (topic.title.toLowerCase().includes(searchStr)) {
                score += 30;
            }
            
            if (data.keywords.length > 0) {
                const match = stringSimilarity.findBestMatch(searchStr, data.keywords);
                if (match.bestMatch.rating > 0.5) {
                    score += match.bestMatch.rating * 20;
                }
            }
            
            // Only score if there is SOME content match
            if (score > 0) {
                if (isSubjectMatch) {
                    score += 50; // HUGE bonus for matching subject, to prevent cross-subject bleeding!
                }
                
                if (score > bestScore) {
                    bestScore = score;
                    bestTopic = topic;
                }
            }
        }
    }
    
    mappingResult[relativePath] = {
        basename: basename,
        mappedTopicId: bestTopic ? bestTopic.id : null,
        mappedTopicTitle: bestTopic ? bestTopic.title : null,
        score: bestScore
    };
}

fs.writeFileSync('image_mapping_draft.json', JSON.stringify(mappingResult, null, 2), 'utf8');
console.log(`Generated mapping draft in image_mapping_draft.json`);
