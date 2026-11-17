const fs = require('fs');
const path = require('path');

const DIAGRAMS_DIR = path.join(__dirname, 'diagrams');
const ARTIFACT_PATH = 'C:\\Users\\Trayodh Khandalkar\\.gemini\\antigravity-ide\\brain\\40775e62-ac16-44ca-b442-e860045b5422\\generated_diagrams.md';

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach(function(file) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else if (fullPath.endsWith('.svg')) {
      arrayOfFiles.push(fullPath);
    }
  });
  return arrayOfFiles;
}

let svgFilesAbsolute = [];
if (fs.existsSync(DIAGRAMS_DIR)) {
    svgFilesAbsolute = getAllFiles(DIAGRAMS_DIR);
}

// Group by subject and chapter
const grouped = {};
for (const svgPath of svgFilesAbsolute) {
    const relPath = path.relative(DIAGRAMS_DIR, svgPath).replace(/\\/g, '/');
    const parts = relPath.split('/');
    if (parts.length < 3) continue;
    const subject = parts[0];
    const chapter = parts[1];
    const file = parts[parts.length - 1];
    
    if (!grouped[subject]) grouped[subject] = {};
    if (!grouped[subject][chapter]) grouped[subject][chapter] = [];
    grouped[subject][chapter].push(file);
}

let mdContent = `# Generated Diagrams List\n\nHere is a list of all diagrams compiled so far (${svgFilesAbsolute.length} total):\n\n`;
for (const subject of Object.keys(grouped).sort()) {
    mdContent += `## ${subject.toUpperCase()}\n`;
    for (const chapter of Object.keys(grouped[subject]).sort()) {
        mdContent += `### ${chapter}\n`;
        for (const file of grouped[subject][chapter].sort()) {
            mdContent += `- \`${file}\`\n`;
        }
        mdContent += '\n';
    }
}

fs.writeFileSync(ARTIFACT_PATH, mdContent, 'utf8');
console.log('List generated successfully.');
