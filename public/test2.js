const marked = require('./js/marked.min.js');
let text = "<p>The Universe originated from the [[Big Bang Theory]]</p>";
console.log(marked.parse(text));
