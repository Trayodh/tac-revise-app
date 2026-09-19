const fs = require('fs');

function cleanJson(filename, checkKey, errorStr) {
    if (!fs.existsSync(filename)) return;
    const data = JSON.parse(fs.readFileSync(filename, 'utf8'));
    let cleanedCount = 0;

    for (const subject in data) {
        for (const chapter in data[subject]) {
            for (const topic in data[subject][chapter]) {
                if (checkKey === 'content') {
                    const entry = data[subject][chapter][topic];
                    if (entry && entry[checkKey] && entry[checkKey].includes(errorStr)) {
                        delete data[subject][chapter][topic];
                        cleanedCount++;
                    }
                } else {
                    for (const gap in data[subject][chapter][topic]) {
                        const entry = data[subject][chapter][topic][gap];
                        if (entry && entry[checkKey] && entry[checkKey].includes(errorStr)) {
                            delete data[subject][chapter][topic][gap];
                            cleanedCount++;
                        }
                    }
                }
            }
        }
    }
    
    fs.writeFileSync(filename, JSON.stringify(data, null, 2));
    console.log(`Cleaned ${cleanedCount} failed entries from ${filename}`);
}

cleanJson('researched_facts_phase3.json', 'structured_content', 'Failed to generate');
