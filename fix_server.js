const fs = require('fs');
let code = fs.readFileSync('server.js', 'utf8');

const startIdx = code.indexOf('          return;\r\n        } else {');
const startIdx2 = code.indexOf('          return;\n        } else {');

const actualStart = startIdx !== -1 ? startIdx : startIdx2;

if (actualStart !== -1) {
    const endStr = 'res.end(JSON.stringify(fallbackData));\r\n        }';
    const endStr2 = 'res.end(JSON.stringify(fallbackData));\n        }';
    
    let endIdx = code.indexOf(endStr, actualStart);
    let usedEnd = endStr;
    
    if (endIdx === -1) {
        endIdx = code.indexOf(endStr2, actualStart);
        usedEnd = endStr2;
    }
    
    if (endIdx !== -1) {
        endIdx += usedEnd.length;
        code = code.substring(0, actualStart) + code.substring(endIdx);
        fs.writeFileSync('server.js', code);
        console.log('Successfully removed bad block!');
    } else {
        console.log('Could not find end of bad block');
    }
} else {
    console.log('Could not find start of bad block');
}
