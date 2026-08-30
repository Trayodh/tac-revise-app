import json
import re

with open('notes_data_exam_focused.js', 'r', encoding='utf-8') as f:
    content = f.read()

db_match = re.search(r'const NOTES_DATABASE = (\{.*?\});\s*$', content, re.DOTALL)
db = json.loads(db_match.group(1))

with open('chapters_dump.txt', 'w', encoding='utf-8') as out:
    for s in db:
        for ch in db[s].get('chapters', []):
            out.write(f"{s}: {ch['title']}\n")
