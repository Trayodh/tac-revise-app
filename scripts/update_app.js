const fs = require('fs');
const text = fs.readFileSync('app.js', 'utf8');

const startMatch = '  // Tab content selection';
const endMatch = '          ${chapterDiagramHtml}';

const startIndex = text.indexOf(startMatch);
const endIndex = text.indexOf(endMatch, startIndex);

if (startIndex !== -1 && endIndex !== -1) {
    const chunk = text.substring(startIndex, endIndex);
    const replacement = `  // Tab content selection
  let tabContentHtml = '';
  if (activeNotesTab === 'notes') {
    tabContentHtml = \`
      <div class="tab-pane-content fade-in" style="height: 100%;">
        <div class="notes-text scroll-y" style="height: 100%; padding-bottom: 30px; box-sizing: border-box; overflow-y: auto;">
          \${topicId === 'all-equipment' ? '<div id="armed-forces-equipment-container"></div>' : parseWikiLinks(topic.notes || '')}
`;
    
    const newText = text.replace(chunk, replacement);
    fs.writeFileSync('app.js', newText, 'utf8');
    console.log('Successfully updated app.js!');
} else {
    console.log('Could not find matches in app.js');
}
