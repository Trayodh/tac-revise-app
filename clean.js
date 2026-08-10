const fs = require('fs');

const files = fs.readdirSync(__dirname).filter(f => f.endsWith('.js') && (f.startsWith('notes_') || f === 'ai_generated_notes.js'));

let totalCleaned = 0;

for (const file of files) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    const initialLen = content.length;
    
    // Replace unescaped versions
    content = content.replace(/(?:\\n|\n)?(?:\\n|\n)?\s*<!-- DIAGRAM INJECTED -->[\s\S]*?<\/div>(?:\\n|\n)?/g, '');
    // Also remove the standalone title in case it was injected separately
    content = content.replace(/(?:\\n|\n)?\s*<h4 style="border-left[^>]+>Visual Summary Diagram:.*?<\/h4>(?:\\n|\n)?/g, '');
    
    if (content.length !== initialLen) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Cleaned ${initialLen - content.length} chars from ${file}`);
      totalCleaned++;
    } else {
      // console.log(`${file} was already clean`);
    }
  }
}
console.log(`Done cleaning ${totalCleaned} files.`);
