const fs = require('fs');
const path = require('path');

const DIAGRAMS_DIR = path.join(__dirname, 'diagrams');
// Find DB files manually since we cannot use glob
const DB_FILES = [
    'notes_data.js',
    ...fs.readdirSync(__dirname).filter(f => f.startsWith('notes_extra_') && f.endsWith('.js'))
];

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach(function(file) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else if (fullPath.endsWith('.svg')) {
      arrayOfFiles.push(fullPath);
    }
  });
  return arrayOfFiles;
}

// Helper to calculate similarity between two strings
function similarity(s1, s2) {
    let longer = s1;
    let shorter = s2;
    if (s1.length < s2.length) {
        longer = s2;
        shorter = s1;
    }
    const longerLength = longer.length;
    if (longerLength === 0) {
        return 1.0;
    }
    return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}

function editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    const costs = new Array();
    for (let i = 0; i <= s1.length; i++) {
        let lastValue = i;
        for (let j = 0; j <= s2.length; j++) {
            if (i == 0)
                costs[j] = j;
            else {
                if (j > 0) {
                    let newValue = costs[j - 1];
                    if (s1.charAt(i - 1) != s2.charAt(j - 1))
                        newValue = Math.min(Math.min(newValue, lastValue),
                            costs[j]) + 1;
                    costs[j - 1] = lastValue;
                    lastValue = newValue;
                }
            }
        }
        if (i > 0)
            costs[s2.length] = lastValue;
    }
    return costs[s2.length];
}

async function injectDiagrams() {
    console.log('[Injector] Scanning diagrams directory...');
    let svgFilesAbsolute = [];
    if (fs.existsSync(DIAGRAMS_DIR)) {
        svgFilesAbsolute = getAllFiles(DIAGRAMS_DIR);
    }
    // Convert absolute paths to relative to DIAGRAMS_DIR
    const svgFiles = svgFilesAbsolute.map(p => path.relative(DIAGRAMS_DIR, p).replace(/\\/g, '/'));
    console.log(`[Injector] Found ${svgFiles.length} SVG diagrams.`);

    // Load DB files into memory
    const dbContents = {};
    for (const file of DB_FILES) {
        if (fs.existsSync(file)) {
            dbContents[file] = fs.readFileSync(file, 'utf8');
        }
    }

    // Extract all topic IDs from db contents
    // Assuming format: window.EXPANDED_NOTES_DATA["topic-id"] = `...`
    // Or in notes_data.js: id: "topic-id"
    let allTopicIds = [];
    for (const [file, content] of Object.entries(dbContents)) {
        const regex1 = /window\.EXPANDED_NOTES_DATA\(["[^"]+)"\]/g;
        let match;
        while ((match = regex1.exec(content)) !== null) {
            allTopicIds.push(match[1]);
        }
        
        const regex2 = /id:\s*"([^"]+)"/g;
        while ((match = regex2.exec(content)) !== null) {
            allTopicIds.push(match[1]);
        }
    }
    
    // Deduplicate
    allTopicIds = [...new Set(allTopicIds)];
    console.log(`[Injector] Found ${allTopicIds.length} unique topic IDs in database.`);

    let injectedCount = 0;
    
    for (const svgFile of svgFiles) {
        // e.g. "biology/biology-cell/cell-structure.svg"
        const parts = svgFile.split('/'); // Windows glob still uses /
        if (parts.length < 3) continue;
        
        const subject = parts[0];
        const chapter = parts[1];
        const topicName = parts[parts.length - 1].replace('.svg', '');
        
        // Find best matching topic ID
        let bestMatch = null;
        let highestScore = 0;
        
        const searchTerms = `${chapter} ${topicName}`.replace(/-/g, ' ');
        
        for (const topicId of allTopicIds) {
            const cleanTopicId = topicId.replace(/-/g, ' ');
            // Check if topicId contains subject/chapter keywords
            const score = similarity(searchTerms, cleanTopicId);
            
            // Boost score if it contains the topic name exactly
            let finalScore = score;
            if (cleanTopicId.includes(topicName.replace(/-/g, ' '))) {
                finalScore += 0.5;
            }
            if (cleanTopicId.includes(chapter.replace(/-/g, ' '))) {
                finalScore += 0.2;
            }

            if (finalScore > highestScore) {
                highestScore = finalScore;
                bestMatch = topicId;
            }
        }

        if (bestMatch && highestScore > 0.6) {
            console.log(`[Injector] Matched diagram ${topicName} -> ${bestMatch} (score: ${highestScore.toFixed(2)})`);
            
            const imageHtml = `\n\n<h3>Visual Summary Diagram</h3>\n<div style="text-align: center; margin: 20px 0;">\n    <img src="assets/diagrams/${svgFile}" alt="${topicName}" style="max-width: 100%; border-radius: 8px; border: 1px solid var(--border);" />\n</div>\n`;
            
            // Try injecting into window.EXPANDED_NOTES_DATA
            let injected = false;
            for (const [file, content] of Object.entries(dbContents)) {
                // Check if already injected
                if (content.includes(`assets/diagrams/${svgFile}`)) {
                    console.log(`[Injector] Already injected ${svgFile}, skipping.`);
                    injected = true;
                    break;
                }

                // Find where the topic ends
                const regex = new RegExp(`(window\\.EXPANDED_NOTES_DATA\\["${bestMatch}"\\]\\s*=\\s*\`[\\s\\S]*?)(?=\`;)`, 'g');
                if (regex.test(content)) {
                    dbContents[file] = content.replace(regex, `$1${imageHtml}`);
                    injected = true;
                    injectedCount++;
                    break;
                }
            }
            
            // Fallback: If not in EXPANDED_NOTES_DATA, try window.NOTES_DATABASE in notes_data.js
            if (!injected && dbContents['notes_data.js']) {
                if (!dbContents['notes_data.js'].includes(`assets/diagrams/${svgFile}`)) {
                    const regex = new RegExp(`(id:\\s*"${bestMatch}"[\\s\\S]*?content:\\s*\`[\\s\\S]*?)(?=\`,)`, 'g');
                    if (regex.test(dbContents['notes_data.js'])) {
                        dbContents['notes_data.js'] = dbContents['notes_data.js'].replace(regex, `$1${imageHtml}`);
                        injectedCount++;
                    }
                }
            }
        } else {
            console.warn(`[Injector] Could not find good match for ${svgFile}`);
        }
    }
    
    // Save modified files
    for (const [file, content] of Object.entries(dbContents)) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`[Injector] Saved modifications to ${file}`);
    }
    
    console.log(`[Injector] Successfully injected ${injectedCount} diagrams into the app!`);
}

injectDiagrams();
