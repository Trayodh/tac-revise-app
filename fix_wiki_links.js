const fs = require('fs');
let code = fs.readFileSync('public/wiki_links.js', 'utf8');

const targetStr = `    if (resText.includes("(UPSC Local Engine)") || resText.includes("(Local Mode)")) {
      throw new Error("Offline mode active. Primary cloud model is rate limited.");
    }`;

code = code.replace(targetStr, '');
fs.writeFileSync('public/wiki_links.js', code);
console.log('Removed hardcoded error throw from wiki_links.js');
