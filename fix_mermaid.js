const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.js'));
let totalFixed = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  // Replace: ([\"  with  ([\"
  content = content.split('[\\\"(').join('([\\"');
  
  // Replace: \"])  with  \"])
  content = content.split('\\\"])').join('\\"])');
  
  // Wait, \\\"]) actually is already the correct shape for the right side of a stadium node if we are using (["Text"])
  // So:
  // if text has `Cell([\"Eukaryotic Cell\"])`, replacing `([\"` with `([\"` gives `Cell([\"Eukaryotic Cell\"])` which is perfect for Mermaid!
  // It gives: Cell(["Eukaryotic Cell"])

  // Also replace for normal mindmap things if they use (["
  content = content.split('(["').join('(["');
  
  if (content !== original) {
     console.log('Fixed syntax in ' + file);
     fs.writeFileSync(file, content);
     totalFixed++;
  }
}
console.log('Total files fixed: ' + totalFixed);
