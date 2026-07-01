const fs = require('fs');
const path = require('path');

const srcDir = __dirname;
const destDir = path.join(__dirname, 'www');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir);
}

// Copy simple files
const filesToCopy = [
  'index.html',
  'index.css',
  'app.js',
  'supabase_client.js',
  'ca_data.js',
  'syllabus_data.js',
  'syllabus_data.json',
  'pyq_trends.js',
  'pyq_trends.json',
  'sarvamai.bundle.js',
  'sarvam_browser.js',
  'wiki_links.js',
  'system_config.js',
  'auth_logic.js',
  'notifications_bundle.js',
  'lecture_mode.js',
  'sw.js'
];

const patternsToCopy = [
  /^notes_extra.*\.js$/,
  /^.*\.pdf$/
];

const items = fs.readdirSync(srcDir);

items.forEach(item => {
  const itemPath = path.join(srcDir, item);
  const destPath = path.join(destDir, item);
  
  if (fs.statSync(itemPath).isFile()) {
    // Exclude our massive textbook source PDFs from Vercel deployment
    if (item === 'pathfinder-cds-combined-defence-expertsarihant-90f15b25.pdf' || item === 'nda_material.pdf' || item === 'cds_material.pdf') {
      return; 
    }
    
    if (filesToCopy.includes(item) || patternsToCopy.some(regex => regex.test(item))) {
      fs.copyFileSync(itemPath, destPath);
      console.log(`Copied ${item}`);
    }
  }
});

// Copy directories
const dirsToCopy = ['images', 'math_notes', 'gs_notes', 'manim_lectures', 'js'];
dirsToCopy.forEach(dir => {
  const sDir = path.join(srcDir, dir);
  const dDir = path.join(destDir, dir);
  if (fs.existsSync(sDir)) {
    if (!fs.existsSync(dDir)) fs.mkdirSync(dDir);
    const subItems = fs.readdirSync(sDir);
    subItems.forEach(sub => {
      const subS = path.join(sDir, sub);
      const subD = path.join(dDir, sub);
      if (fs.statSync(subS).isFile()) {
        fs.copyFileSync(subS, subD);
      }
    });
    console.log(`Copied dir ${dir}`);
  }
});

console.log('Done copying to www');
