import json
import re

with open('notes_data_exam_focused.js', 'r', encoding='utf-8') as f:
    content = f.read()

db_match = re.search(r'const NOTES_DATABASE = (\{.*?\});\s*$', content, re.DOTALL)
db = json.loads(db_match.group(1))

syl_chapters = []
for subj_id, subj_data in db.items():
    if 'chapters' in subj_data:
        for chapter in subj_data['chapters']:
            if 'syl-' in chapter['id'] or 'Formulas' in chapter['title'] or 'Short Note' in chapter['title'] or 'OIR' in chapter['title'] or 'Exercises' in chapter['title'] or 'Numerical' in chapter['title']:
                syl_chapters.append(f"{subj_id} -> {chapter['id']} : {chapter['title']}")

for ch in syl_chapters:
    print(ch)
