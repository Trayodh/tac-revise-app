import re

# 1. Parse notes_generated.js
with open('notes_generated.js', 'r', encoding='utf-8') as f:
    orig_content = f.read()

pattern = r'(window\.EXPANDED_NOTES_DATA\["([^"]+)"\]\s*=\s*String\.raw`)([\s\S]*?)(`;)'

orig_topics = {}
for match in re.finditer(pattern, orig_content):
    topic_id = match.group(2)
    orig_topics[topic_id] = match

# 2. Parse notes_generated_upgraded.js
with open('notes_generated_upgraded.js', 'r', encoding='utf-8') as f:
    upgraded_content = f.read()

upgraded_topics = {}
for match in re.finditer(pattern, upgraded_content):
    topic_id = match.group(2)
    html = match.group(3)
    if "<!-- AI UPGRADED FIELDS -->" in html:
        upgraded_topics[topic_id] = html

# 3. Merge
final_content = "window.EXPANDED_NOTES_DATA = window.EXPANDED_NOTES_DATA || {};\n\n"
for topic_id, match in orig_topics.items():
    prefix = match.group(1)
    suffix = match.group(4)
    if topic_id in upgraded_topics:
        html = upgraded_topics[topic_id]
        final_content += f"{prefix}{html}{suffix}\n\n"
    else:
        html = match.group(3)
        final_content += f"{prefix}{html}{suffix}\n\n"

# Add the final block from notes_generated_upgraded.js (if it exists)
if "if (typeof NOTES_DATABASE !==" in upgraded_content:
    bottom_block = upgraded_content.split("`;\n\n")[ -1 ]
    final_content += bottom_block

with open('notes_generated_merged.js', 'w', encoding='utf-8') as f:
    f.write(final_content)

print(f"Merged successfully. Found {len(orig_topics)} original topics, applied {len(upgraded_topics)} upgrades.")
