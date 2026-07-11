const fs = require('fs');
const path = require('path');
require('dotenv').config();

const srcDir = __dirname;
const destDir = path.join(__dirname, 'www');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir);
}

const filesToCopy = [
  'index.html',
  'index.css',
  'app.js',
  'elite_frontend.js',
  'notes_generated.js',
  'data.js',
  'english_vocab_db.js',
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
  'sw.js',
  'extra_bank_data.js'
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
      if (item === 'app.js') {
        let appJsContent = fs.readFileSync(itemPath, 'utf8');
        if (process.env.GROQ_API_KEY) {
          appJsContent = appJsContent.replace(/PROCESS_ENV_GROQ_KEY/g, process.env.GROQ_API_KEY);
        }
        if (process.env.GEMINI_API_KEY) {
          appJsContent = appJsContent.replace(/PROCESS_ENV_GEMINI_KEY/g, process.env.GEMINI_API_KEY);
        }
        if (process.env.CEREBRAS_API_KEY) {
          appJsContent = appJsContent.replace(/PROCESS_ENV_CEREBRAS_KEY/g, process.env.CEREBRAS_API_KEY);
        }
        fs.writeFileSync(destPath, appJsContent);
      } else if (item === 'index.html') {
        let htmlContent = fs.readFileSync(itemPath, 'utf8');
        htmlContent = htmlContent.replace(/\?v=\d+/g, '?v=' + Date.now());
        fs.writeFileSync(destPath, htmlContent);
      } else {
        fs.copyFileSync(itemPath, destPath);
      }
      console.log(`Copied ${item}`);
    }
  }
});

// Copy directories recursively (basic implementation)
function copyDirRecursiveSync(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursiveSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

const dirsToCopy = ['images', 'math_notes', 'gs_notes', 'manim_lectures', 'js'];
dirsToCopy.forEach(dir => {
  const sDir = path.join(srcDir, dir);
  const dDir = path.join(destDir, dir);
  if (fs.existsSync(sDir)) {
    copyDirRecursiveSync(sDir, dDir);
    console.log(`Copied dir ${dir}`);
  }
});

if (fs.existsSync(path.join(srcDir, 'Pathfinder_Premium'))) {
  copyDirRecursiveSync(path.join(srcDir, 'Pathfinder_Premium'), path.join(destDir, 'Pathfinder_Premium'));
  console.log('Copied dir Pathfinder_Premium');
}

if (fs.existsSync(path.join(srcDir, 'Pathfinder_Elite'))) {
  copyDirRecursiveSync(path.join(srcDir, 'Pathfinder_Elite'), path.join(destDir, 'Pathfinder_Elite'));
  console.log('Copied dir Pathfinder_Elite');
}

console.log('Done copying to www');
