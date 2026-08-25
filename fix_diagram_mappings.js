const fs = require('fs');

try {
    // 1. Read notes_data.js and extract mapping from old id to title
    const oldData = fs.readFileSync('notes_data.js', 'utf8');
    const oldIdToTitle = {};
    const oldRegex = /"id":\s*"([^"]+)",\s*"title":\s*"([^"]+)"/g;
    let match;
    while ((match = oldRegex.exec(oldData)) !== null) {
        oldIdToTitle[match[1]] = match[2].trim();
    }

    // 2. Read notes_data_exam_focused.js and extract mapping from title to new id
    const newData = fs.readFileSync('notes_data_exam_focused.js', 'utf8');
    const titleToNewId = {};
    const newRegex = /"id":\s*"([^"]+)",\s*"title":\s*"([^"]+)"/g;
    while ((match = newRegex.exec(newData)) !== null) {
        titleToNewId[match[2].trim()] = match[1];
    }

    // 3. Create mapping from old id to new id
    const oldToNewId = {};
    for (const oldId in oldIdToTitle) {
        const title = oldIdToTitle[oldId];
        if (titleToNewId[title]) {
            oldToNewId[oldId] = titleToNewId[title];
        } else {
            oldToNewId[oldId] = oldId; // fallback
        }
    }
    
    // Add manual overrides just in case regex misses due to formatting
    oldToNewId['cell-structure'] = 'biology-cell';
    oldToNewId['human-systems'] = 'biology-physiology';
    oldToNewId['plant-animal-kingdoms'] = 'biology-kingdoms';
    oldToNewId['plant-reproduction'] = 'biology-botany';
    oldToNewId['ecology-ecosystems'] = 'biology-ecology';

    // 4. Read diagram_index.json
    const diagramIndex = JSON.parse(fs.readFileSync('diagram_index.json', 'utf8'));
    const finalMappings = [];

    function traverse(obj) {
        if (Array.isArray(obj)) {
            for (const item of obj) {
                if (item.file && item.topic_id) {
                    let mappedChapterId = oldToNewId[item.topic_id] || item.topic_id;
                    
                    finalMappings.push({
                        diagram_id: item.file,
                        mapped_chapter_id: mappedChapterId,
                        confidence_score: item.relevance_score ? item.relevance_score / 100 : 0.95,
                        matched_indicators: item.keywords || [],
                        reasoning: item.title,
                        image_path: item.newPath.replace(/^\//, '') // Remove leading slash
                    });
                }
            }
        } else if (typeof obj === 'object' && obj !== null) {
            for (const key in obj) {
                traverse(obj[key]);
            }
        }
    }

    traverse(diagramIndex);

    const jsOutput = "window.DIAGRAM_MAPPINGS = " + JSON.stringify(finalMappings, null, 2) + ";\n";
    fs.writeFileSync('diagram_mappings.js', jsOutput, 'utf8');
    console.log("Successfully created diagram_mappings.js with " + finalMappings.length + " mappings.");
} catch (e) {
    console.error("Error:", e);
}
