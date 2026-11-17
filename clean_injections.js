const fs = require('fs');
const files = [
    'notes_data.js',
    'notes_extra_history.js',
    'notes_extra.js'
];
for (const f of files) {
    if (!fs.existsSync(f)) continue;
    let filedata = fs.readFileSync(f, 'utf8');
    // Remove the injected diagram block
    const regex = /\n\n<div style="margin:20px 0;text-align:center;">\s*<img src="\/assets\/diagrams\/[^>]+>\s*<p style="font-size:0\.9em;color:#555;margin-top:5px;"><i>Visual Summary Diagram: [^<]+<\/i><\/p>\s*<\/div>\n/g;
    const oldLength = filedata.length;
    filedata = filedata.replace(regex, '');
    fs.writeFileSync(f, filedata);
    console.log(f + ' removed ' + (oldLength - filedata.length) + ' characters.');
}
