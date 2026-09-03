const fs = require('fs');

let dbText = fs.readFileSync('current_affairs_db.js', 'utf8');

const prefix = 'window.CURRENT_AFFAIRS_DB = ';
let jsonString = dbText.substring(prefix.length).trim();
if (jsonString.endsWith(';')) {
    jsonString = jsonString.slice(0, -1);
}

try {
    const dbObj = JSON.parse(jsonString);
    for (const month in dbObj) {
        for (const item of dbObj[month]) {
            if (item.mcq !== undefined) {
                delete item.mcq;
            }
        }
    }
    
    const newDbText = prefix + JSON.stringify(dbObj, null, 2) + ';\n';
    fs.writeFileSync('current_affairs_db.js', newDbText, 'utf8');
    console.log("Successfully stripped all MCQs from the DB.");
} catch(e) {
    console.error("Failed to parse DB JSON: ", e.message);
}
