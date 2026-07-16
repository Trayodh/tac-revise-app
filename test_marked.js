const marked = require('marked');
const html = marked.parse('<div class="mermaid">\nA --> B\n</div>');
console.log(html);
