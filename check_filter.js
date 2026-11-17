const fs = require('fs');
let content = fs.readFileSync('app.js', 'utf8');
let filterLogic = content.match(/data-exam-filter[\s\S]{0,300}/g);
console.log(filterLogic);
