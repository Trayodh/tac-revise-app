import json
import re

with open('notes_data_exam_focused.js', 'r', encoding='utf-8') as f:
    content = f.read()
db = json.loads(re.search(r'const NOTES_DATABASE = (\{.*?\});\s*$', content, re.DOTALL).group(1))

for c in db['military-aptitude']['chapters']:
    if c['id'] == 'afcat-r-analogy':
        for i, t in enumerate(c.get('topics', [])):
            print(f"Topic {i}: {t['title']} - Length: {len(t.get('notes', ''))}")
