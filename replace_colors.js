const fs = require('fs');

const files = [
  'data.js',
  'notes_data.js',
  'notes_data_exam_focused.js',
  'notes_data_upgraded.js',
  'clean_notes.js'
];

for (const file of files) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace light green background
    content = content.replace(/background:\s*#e8f5e9;?/g, 'background:rgba(76, 175, 80, 0.1);');
    
    // Replace light grey background
    content = content.replace(/background:\s*#f5f5f5;?/g, 'background:var(--surface);');
    
    // Replace table row background
    content = content.replace(/background:\s*#e0e0e0;?/g, 'background:var(--surface);');
    
    // Replace hardcoded dark background
    content = content.replace(/background:\s*#0f1117;?/g, 'background:var(--surface);');

    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}
