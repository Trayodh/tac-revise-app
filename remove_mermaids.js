const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.js') || f.endsWith('.json'));

let totalRemoved = 0;

for (const file of files) {
  if (!fs.statSync(file).isFile()) continue;
  
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Remove mermaid blocks completely
  content = content.replace(//gs, '');
  // Remove markdown headers for Visual Summary / Diagrams that are now empty
  content = content.replace(/|\\n){2,})/gs, '');
  content = content.replace(/|\\n){2,})/gs, '');
  // Clean up any stray headers for visual summary
  content = content.replace(/###?\s*Visual Summary.*?\\n/gi, '');
  content = content.replace(/###?\s*Mitosis vs Meiosis.*?\\n/g, '');
  content = content.replace(/###?\s*DNA Structure \(Central Dogma\).*?\\n/g, '');
  
  // also handle the escaped versions in JSON
  content = content.replace(/\\n/g, '');
  content = content.replace(/\\r\\n/g, '');
  
  // some might have just "Visual Summary: Genetics"
  content = content.replace(//g, '');

  if (content !== original) {
     console.log('Removed mermaid diagrams from ' + file);
     fs.writeFileSync(file, content);
     totalRemoved++;
  }
}
console.log('Total files processed for mermaid removal: ' + totalRemoved);
