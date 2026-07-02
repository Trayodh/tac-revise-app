const fs = require('fs');
const src = fs.readFileSync('data.js', 'utf8');
const m = [...src.matchAll(/id:\s*["']([^"']*industri[^"']*|[^"']*geopolit[^"']*)['"]/g)];
m.forEach(x => console.log(x[1]));
