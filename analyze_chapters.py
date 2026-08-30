import json
import re

with open('notes_data_exam_focused.js', 'r', encoding='utf-8') as f:
    content = f.read()

db_match = re.search(r'const NOTES_DATABASE = (\{.*?\});\s*$', content, re.DOTALL)
db = json.loads(db_match.group(1))

for subj, subj_data in db.items():
    chapters = subj_data.get('chapters', [])
    for ch in chapters:
        notes_len = sum(len(t.get('notes', '').strip()) for t in ch.get('topics', []))
        form_len = sum(len(t.get('formulas', '').strip()) for t in ch.get('topics', []))
        
        kind = 'Mixed'
        if notes_len > 100 and form_len < 100:
            kind = 'Text-Only'
        elif form_len > 100 and notes_len < 100:
            kind = 'Short-Notes-Only'
        
        if kind != 'Mixed':
            print(f"{subj} | {ch['id']} | {kind} | N:{notes_len} F:{form_len} | {ch['title']}")
