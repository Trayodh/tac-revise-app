const fs = require('fs');
let db = fs.readFileSync('diagrams_db.js', 'utf8');

// Replace standard widths
db = db.replace(/<svg width="1200" height="900"/g, '<svg width="100%" height="auto" viewBox="0 0 1200 900"');
db = db.replace(/<svg width="1000" height="800"/g, '<svg width="100%" height="auto" viewBox="0 0 1000 800"');
db = db.replace(/<svg width="1600" height="1200"/g, '<svg width="100%" height="auto" viewBox="0 0 1600 1200"');

// Try a generic regex for any remaining fixed widths
db = db.replace(/<svg width="(\d+)" height="(\d+)"/g, (match, w, h) => {
    return `<svg width="100%" height="auto" viewBox="0 0 ${w} ${h}"`;
});

fs.writeFileSync('diagrams_db.js', db);
console.log('Fixed SVG widths in diagrams_db.js');
