import re
import os

for f in ['notes_generated_polity.js', 'notes_extra_polity.js', 'public/notes_generated_polity.js', 'public/notes_extra_polity.js']:
    if os.path.exists(f):
        with open(f, 'r', encoding='utf-8') as file:
            content = file.read()
            topics = re.findall(r'topic:\s*"(.*?)"', content)
            print(f'--- {f} --- ({len(topics)} topics)')
            print(', '.join(topics[:20]) + '...')
