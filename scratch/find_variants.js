const fs = require('fs');

const code = fs.readFileSync('data.js', 'utf8') + '\nmodule.exports = { CBT_EXAMS_DATABASE };';
const m = new module.constructor();
m._compile(code, 'data.js');
const exams = m.exports.CBT_EXAMS_DATABASE;

let matches = [];

function search(obj, path = '') {
    if (!obj) return;
    if (typeof obj === 'string') {
        if (obj.toLowerCase().includes('variant')) {
            matches.push({ path, val: obj });
        }
    } else if (Array.isArray(obj)) {
        obj.forEach((item, idx) => search(item, `${path}[${idx}]`));
    } else if (typeof obj === 'object') {
        for (const key in obj) {
            search(obj[key], `${path}.${key}`);
        }
    }
}

search(exams);

console.log(`Found ${matches.length} matches:`);
matches.slice(0, 20).forEach(m => {
    console.log(`Path: ${m.path}`);
    console.log(`Val: ${m.val}`);
    console.log('---');
});
if (matches.length > 20) {
    console.log(`... and ${matches.length - 20} more`);
}
