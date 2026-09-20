const fs = require('fs');
let txt = fs.readFileSync('index.html', 'utf8');
const searchString = '<script src="questions_data.js?v=';
const firstIndex = txt.indexOf(searchString);
if (firstIndex !== -1) {
    const secondIndex = txt.indexOf(searchString, firstIndex + 1);
    if (secondIndex !== -1) {
        // found a second block! We just cut off from secondIndex to the end, and then add </body>\n</html>
        const newTxt = txt.substring(0, secondIndex) + '</body>\n</html>\n';
        fs.writeFileSync('index.html', newTxt, 'utf8');
        console.log('Cleaned index.html');
    } else {
        console.log('No duplicate block found');
    }
} else {
    console.log('Not found at all');
}
