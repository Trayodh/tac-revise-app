const marked = require('marked');

function autoLinkConcepts(text) {
  if (!text) return "";
  let parts = text.split(/(<[^>]+>|\[\[.*?\]\]|`[^`]+`)/g);
  return parts.join("");
}

function parseWikiLinks(text) {
  if (!text) return "";
  
  const indentMatches = text.match(/^[ \t]+(?=\S)/gm);
  if (indentMatches) {
    const minIndent = Math.min(...indentMatches.map(s => s.length));
    if (minIndent > 0) {
      const regex = new RegExp(`^[ \\t]{1,${minIndent}}`, 'gm');
      text = text.replace(regex, '');
    }
  }
  
  text = text.replace(/^[ \t]+</gm, '<');

  let processed = text;
  
  if (typeof marked !== 'undefined') {
    processed = marked.parse(processed);
  }
  
  let linkedText = autoLinkConcepts(processed);
  
  let parsed = linkedText.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (match, topicName, displayLabel) => {
    const label = displayLabel || topicName || "";
    const cleanTopic = (topicName || "").trim().replace(/'/g, "\\'");
    return `<a class="wiki-link" onclick="triggerDoubtExplain('${cleanTopic}', this)">${label}</a>`;
  });
  
  return parsed;
}

let rawNotes = `
<div class="expanded-notes">
  <p>The <b>Universe</b> originated from the [[Big Bang Theory]]</p>
</div>
`;
let parsedNotes = typeof marked !== 'undefined' ? marked.parse(rawNotes) : rawNotes;
console.log(parseWikiLinks(parsedNotes));
