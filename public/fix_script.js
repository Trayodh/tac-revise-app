const fs = require('fs');
let code = fs.readFileSync('reinject_diagrams_v4.js', 'utf8');
code = code.replace(
    /if \(topicSlice\.includes\(`\/\$\{encodeURIComponent\(img\.name\)\}'`\)\) \{/,
    "if (topicSlice.includes(`alt=\"${img.name.replace('.png', '').replace('.jpg', '').replace('.jpeg', '')}\"`)) {"
);
fs.writeFileSync('reinject_diagrams_v5.js', code);
console.log('reinject_diagrams_v5.js created');
