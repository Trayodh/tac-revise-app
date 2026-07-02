const fs = require('fs');

const images = fs.readdirSync('images').filter(f => f.endsWith('.png'));
console.log('Total images in images/ folder:', images.length);
console.log('Images list:');
images.forEach(img => console.log(' -', img));
