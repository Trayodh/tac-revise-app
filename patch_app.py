import re

with open('app.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Define the new rendering block
new_block = """          ${topicId === 'all-equipment' ? '<div id="armed-forces-equipment-container"></div>' : (() => {
            let content = '';
            let visualInjection = '';
            if (topic.notes && topic.notes.includes('visual-summary')) {
               const match = topic.notes.match(/(<div class="visual-summary[^>]*>[\\s\\S]*?<\\/div>)/i);
               if (match) {
                 visualInjection = match[1] + '\\n\\n';
               }
            }
  
            const expandedHtml = (typeof window.EXPANDED_NOTES_DATA !== 'undefined' && window.EXPANDED_NOTES_DATA[topic.id]) ? window.EXPANDED_NOTES_DATA[topic.id] : null;
  
            if (expandedHtml) {
              const bodyMatch = expandedHtml.match(/<body[^>]*>([\\s\\S]*?)<\\/body>/i);
              content = bodyMatch ? bodyMatch[1] : expandedHtml;
              // Remove any corrupted or unstyled h1/h2 at the beginning
              content = content.replace(/^\\s*<h[1-2][^>]*>.*?<\\/h[1-2]>/i, '').trim();
            } else {
              let rawNotes = topic.notes || '';
              if (visualInjection) {
                rawNotes = rawNotes.replace(/(<!-- VISUAL INJECTION -->\\s*)?<div class="visual-summary[^>]*>[\\s\\S]*?<\\/div>/i, '').trim();
              }
              const isHtmlNotes = rawNotes.trim().startsWith('<') || /<(h[1-6]|ul|ol|li|p|div|table|section)\\b/.test(rawNotes);
              content = isHtmlNotes ? rawNotes : (typeof marked !== 'undefined' ? marked.parse(rawNotes) : rawNotes);
            }
  
            content = `<h2 style="color: var(--accent); margin-bottom: 20px; padding-bottom: 10px; border-bottom: 1px solid var(--border);">${topic.title}</h2>\\n` + visualInjection + content;
  
            return `<div class="expanded-notes-content">${parseWikiLinks(content)}</div>`;
          })()}"""

# We need to replace the existing block in app.js
# The existing block starts with `${topicId === 'all-equipment'` and ends with `})()}`
pattern = r"\$\{topicId === 'all-equipment' \? '<div id=\"armed-forces-equipment-container\"></div>' : \(\(\) => \{[\s\S]*?return `<div class=\"expanded-notes-content\">\$\{parseWikiLinks\(content\)\}<\/div>`;\s*\}\)\(\)\}"

if re.search(pattern, content):
    new_content = re.sub(pattern, new_block.replace('\\', '\\\\'), content)
    with open('app.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Successfully patched app.js")
else:
    print("Could not find the target block in app.js")
