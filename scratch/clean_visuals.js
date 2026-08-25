const fs = require('fs');
const files = [
  'notes_data.js',
  'notes_data_upgraded.js',
  'notes_data_exam_focused.js'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf-8');
    let original = content;

    // Pattern 1: unescaped quotes
    const r1 = /<!-- VISUAL INJECTION -->\s*<div class="visual-summary text-center my-6">\s*<img src="images\/indian_constitution_structure\.png"[^>]*>\s*<\/div>\s*/g;
    const r2 = /<!-- VISUAL INJECTION -->\s*<div class="visual-summary text-center my-6">\s*<img src="images\/atomic_structure_periodic_table\.png"[^>]*>\s*<\/div>\s*/g;

    // Pattern 2: escaped quotes
    const r3 = /<!-- VISUAL INJECTION -->\\n<div class=\\"visual-summary text-center my-6\\">\\n?<img src=\\"images\/indian_constitution_structure\.png\\"[^>]*>\\n?<\/div>\\n?/g;
    const r4 = /<!-- VISUAL INJECTION -->\\n<div class=\\"visual-summary text-center my-6\\">\\n?<img src=\\"images\/atomic_structure_periodic_table\.png\\"[^>]*>\\n?<\/div>\\n?/g;

    content = content.replace(r1, '');
    content = content.replace(r2, '');
    content = content.replace(r3, '');
    content = content.replace(r4, '');

    // Another generic pattern to match any spacing/escaping around indian_constitution_structure and atomic_structure
    content = content.replace(/<!-- VISUAL INJECTION -->[\s\S]*?images\/indian_constitution_structure\.png[\s\S]*?<\/div>\s*/g, '');
    content = content.replace(/<!-- VISUAL INJECTION -->[\s\S]*?images\/atomic_structure_periodic_table\.png[\s\S]*?<\/div>\s*/g, '');

    if (original !== content) {
      fs.writeFileSync(file, content, 'utf-8');
      console.log('Cleaned', file);
    } else {
      console.log('No match found in', file);
    }
  }
});
