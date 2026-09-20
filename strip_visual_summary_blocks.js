const fs = require('fs');

const files = ['notes_data.js', ...fs.readdirSync('.').filter(f => f.startsWith('notes_extra') && f.endsWith('.js'))];
let totalModified = 0;

// This regex targets the exact block seen in the grep output:
// <div style="margin:20px 0;text-align:center;">
// <img src="..." ...>
// <p style="..."><i>Visual Summary Diagram: ...</i></p>
// </div>
const regex1 = /<div style="margin:20px 0;text-align:center;">[\s\S]*?<img src="\/assets\/diagrams\/[^>]*>[\s\S]*?<p[^>]*><i>Visual Summary Diagram:[^<]*<\/i><\/p>[\s\S]*?<\/div>/g;

// Also catch variations without the leading slash or different spacing
const regex2 = /\\n\\n<div style=\\"margin:20px 0;text-align:center;\\">[\s\S]*?<img src=\\"\/assets\/diagrams\/[^>]*>[\s\S]*?<p[^>]*><i>Visual Summary Diagram:[^<]*<\/i><\/p>\\n<\/div>\\n/g;

// A broader regex to catch any div containing an img and "Visual Summary Diagram"
const regex3 = /<div[^>]*>\s*<img[^>]*>\s*<p[^>]*>\s*<i>\s*Visual Summary Diagram:[^<]*<\/i>\s*<\/p>\s*<\/div>/gi;

// Also catch escaped ones like in JS strings
const regex4 = /<div[^>]*>(?:\\n|\s)*<img[^>]*>(?:\\n|\s)*<p[^>]*>(?:\\n|\s)*<i>(?:\\n|\s)*Visual Summary Diagram:[^<]*<\/i>(?:\\n|\s)*<\/p>(?:\\n|\s)*<\/div>/gi;

for (let file of files) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');
  let originalLen = content.length;
  
  content = content.replace(regex1, '');
  content = content.replace(regex2, '');
  content = content.replace(regex3, '');
  content = content.replace(regex4, '');

  // Another specific one for the exact escaped string in notes_data.js:
  // <div style=\"margin:20px 0;text-align:center;\">\n<img src=\"/assets/diagrams/...\"\n<p...><i>Visual Summary Diagram: ...</i></p>\n</div>
  const regex5 = /<div style=\\"margin:20px 0;text-align:center;\\">\\n<img src=\\"\/assets\/diagrams\/[^>]+>\\n<p style=\\"font-size:0\.9em;color:#555;margin-top:5px;\\"><i>Visual Summary Diagram: [^<]+<\/i><\/p>\\n<\/div>\\n\\n/g;
  content = content.replace(regex5, '');
  
  const regex6 = /\\n*<div style=\\"margin:20px 0;text-align:center;\\">\\n<img src=\\"\/assets\/diagrams\/[^>]+>\\n<p style=\\"font-size:0\.9em;color:#555;margin-top:5px;\\"><i>Visual Summary Diagram: [^<]+<\/i><\/p>\\n<\/div>\\n*/g;
  content = content.replace(regex6, '');

  if (content.length !== originalLen) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Stripped diagrams from ${file}. Diff: ${originalLen - content.length} chars removed.`);
    totalModified++;
  }
}
console.log(`Finished stripping. Modified ${totalModified} files.`);
