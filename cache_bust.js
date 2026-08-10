const fs = require('fs');
const newVersion = Date.now().toString();

// Safely update index.html
let indexHtml = fs.readFileSync('index.html', 'utf8');

// List of script tags that need to be updated.
// We replace ?v=d+ with the new version.
indexHtml = indexHtml.replace(/\?v=\d+/g, '?v=' + newVersion);

fs.writeFileSync('index.html', indexHtml, 'utf8');
console.log('Cache-busting complete in index.html with version:', newVersion);
