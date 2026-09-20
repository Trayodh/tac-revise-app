const fs = require('fs');
const path = require('path');

const logFile = 'C:\\Users\\Trayodh Khandalkar\\.gemini\\antigravity-ide\\brain\\40775e62-ac16-44ca-b442-e860045b5422\\.system_generated\\tasks\\task-4702.log';
const log = fs.readFileSync(logFile, 'utf8');

const driveImagesDir = path.join(__dirname, 'assets', 'drive_images');

function getFilesRecursively(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFilesRecursively(file));
    } else {
      if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
        results.push(file);
      }
    }
  });
  return results;
}

const allFiles = getFilesRecursively(driveImagesDir);
let deletedCount = 0;

const lines = log.split('\n');
let currentProcessingFile = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const processMatch = line.match(/^Processing (.*)\.\.\./);
  if (processMatch) {
    currentProcessingFile = processMatch[1];
  }
  
  if (line.includes('-> Copied to') && currentProcessingFile) {
    // We successfully processed currentProcessingFile
    // Find it in allFiles
    const fileToDelete = allFiles.find(f => path.basename(f) === currentProcessingFile);
    if (fileToDelete && fs.existsSync(fileToDelete)) {
      fs.unlinkSync(fileToDelete);
      console.log(`Deleted already processed file: ${fileToDelete}`);
      deletedCount++;
    }
    currentProcessingFile = null;
  }
}

console.log(`Deleted ${deletedCount} already processed images.`);
