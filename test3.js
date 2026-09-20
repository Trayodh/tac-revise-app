const marked = require('marked');
let rawNotes = `
<div class="expanded-notes">
  <p>The <b>Universe</b> originated from the [[Big Bang Theory]]</p>
</div>
`;
let parsedNotes = marked.parse(rawNotes);
console.log(parsedNotes);
