import re

def fix_backticks_and_parse(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # The file is a sequence of: window.EXPANDED_NOTES_DATA["topic_id"] = String.raw`...`;
    # We can split by 'window.EXPANDED_NOTES_DATA["'
    parts = content.split('window.EXPANDED_NOTES_DATA["')
    
    topics = {}
    for part in parts[1:]: # Skip the first part which is just the init
        # Extract topic_id
        end_quote = part.find('"]')
        topic_id = part[:end_quote]
        
        # Extract the content between String.raw` and `;
        start_idx = part.find('String.raw`') + len('String.raw`')
        end_idx = part.rfind('`;')
        
        if start_idx != -1 and end_idx != -1:
            html = part[start_idx:end_idx]
            topics[topic_id] = html
            
    return topics

orig_topics = fix_backticks_and_parse('notes_generated.js')
upgraded_topics = fix_backticks_and_parse('notes_generated_upgraded.js')

final_content = "window.EXPANDED_NOTES_DATA = window.EXPANDED_NOTES_DATA || {};\n\n"

for topic_id, html in orig_topics.items():
    if topic_id in upgraded_topics and "<!-- AI UPGRADED FIELDS -->" in upgraded_topics[topic_id]:
        # The upgraded topic might have had its `=` corrupted to `= String.raw` inside the AI block!
        # Let's clean the upgraded HTML
        clean_html = upgraded_topics[topic_id].replace("= String.raw", "=")
        final_content += f'window.EXPANDED_NOTES_DATA["{topic_id}"] = String.raw`{clean_html}`;\n\n'
    else:
        # Original HTML might have unescaped backticks.
        # Wait, if we just use String.raw, we CANNOT have unescaped backticks.
        # We must replace ` with \`
        clean_html = html.replace('`', '\\`')
        final_content += f'window.EXPANDED_NOTES_DATA["{topic_id}"] = String.raw`{clean_html}`;\n\n'

# Add the final block from notes_generated_upgraded.js
with open('notes_generated_upgraded.js', 'r', encoding='utf-8') as f:
    upgraded_content = f.read()
if "if (typeof NOTES_DATABASE !==" in upgraded_content.replace("= String.raw", "="):
    clean_upgraded = upgraded_content.replace("= String.raw", "=")
    bottom_block = clean_upgraded.split("`;\n\n")[ -1 ]
    final_content += bottom_block

with open('notes_generated_merged.js', 'w', encoding='utf-8') as f:
    f.write(final_content)

print(f"Merged successfully. Found {len(orig_topics)} original topics, applied upgrades.")
