const fs = require('fs');
const path = require('path');

const DIAGRAMS_DIR = path.join(__dirname, 'assets', 'diagrams');
const DB_FILES = [
    'notes_data.js',
    ...fs.readdirSync(__dirname).filter(f => f.startsWith('notes_extra_') && f.endsWith('.js') && f !== 'notes_extra.js')
];

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach(function(file) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else if (fullPath.match(/\.(png|jpg|jpeg)$/i)) {
      arrayOfFiles.push(fullPath);
    }
  });
  return arrayOfFiles;
}

const imageFilesAbsolute = getAllFiles(DIAGRAMS_DIR);
const imageFiles = imageFilesAbsolute.map(p => path.relative(__dirname, p).replace(/\\/g, '/'));

console.log(`Found ${imageFiles.length} images to inject.`);

const dbContents = {};
for (const file of DB_FILES) {
    if (fs.existsSync(file)) {
        dbContents[file] = fs.readFileSync(file, 'utf8');
    }
}

let injectedCount = 0;

for (const imgFile of imageFiles) {
    const topicId = path.basename(imgFile, path.extname(imgFile));
    const imageHtml = `\n\n  <!-- DIAGRAM INJECTED -->\n  <h4 style="border-left: 3px solid var(--accent); padding-left: 8px; margin-top: 24px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">Visual Summary Diagram</h4>\n  <div style="text-align: center; margin: 20px 0;">\n    <img src="${imgFile}" alt="${topicId}" style="max-width: 100%; border-radius: 8px; border: 1px solid var(--border);" />\n  </div>\n`;

    let injected = false;
    for (const [file, content] of Object.entries(dbContents)) {
        // If it's already in the file, skip
        if (content.includes(`src="${imgFile}"`)) {
            console.log(`Already injected ${imgFile}`);
            injected = true;
            break;
        }

        // Try injecting into window.EXPANDED_NOTES_DATA before the last </div>
        const regex = new RegExp(`(window\\.EXPANDED_NOTES_DATA\\["${topicId}"\\]\\s*=\\s*\`[\\s\\S]*?)(</div>\\s*)(?=\`;)`, 'g');
        if (regex.test(content)) {
            dbContents[file] = content.replace(regex, `$1${imageHtml}$2`);
            console.log(`Injected ${imgFile} into ${file}`);
            injected = true;
            injectedCount++;
            break;
        }
    }
    
    if (!injected && dbContents['notes_data.js']) {
        if (!dbContents['notes_data.js'].includes(`src="${imgFile}"`)) {
            const regex = new RegExp(`(id:\\s*"${topicId}"[\\s\\S]*?content:\\s*\`[\\s\\S]*?)(?=\`,)`, 'g');
            if (regex.test(dbContents['notes_data.js'])) {
                dbContents['notes_data.js'] = dbContents['notes_data.js'].replace(regex, `$1${imageHtml}`);
                console.log(`Injected ${imgFile} into notes_data.js`);
                injectedCount++;
            }
        }
    }
}

for (const [file, content] of Object.entries(dbContents)) {
    fs.writeFileSync(file, content, 'utf8');
}

console.log(`Successfully injected ${injectedCount} diagrams into the app!`);
