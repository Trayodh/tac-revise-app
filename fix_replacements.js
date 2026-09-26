const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

const filesToProcess = [];
walkDir('public', function(filePath) {
  if (filePath.endsWith('.js')) {
    filesToProcess.push(filePath);
  }
});
['app.js', 'live_app.js', 'app_before_0edf5a5.js'].forEach(f => {
  if (fs.existsSync(f)) {
    filesToProcess.push(f);
  }
});

filesToProcess.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Regex to match the chain of replaces from \*\* to \n
  const regex = /\.replace\(\/\\\*\\\*\(\.\*\?\)\\\*\\\*\/g[\s\S]*?\.replace\(\/\\n\/g,\s*'<br\/>'\)/g;
  
  let newContent = content.replace(regex, '');
  
  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log('Updated ' + file);
  }
});
