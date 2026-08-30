import json
import re

with open('notes_data_exam_focused.js', 'r', encoding='utf-8') as f:
    content = f.read()

db = json.loads(re.search(r'const NOTES_DATABASE = (\{.*?\});\s*$', content, re.DOTALL).group(1))

c = 0
for subj_id, subj_data in db.items():
    if 'chapters' in subj_data:
        for chapter in subj_data['chapters']:
            for topic in chapter.get('topics', []):
                notes = topic.get('notes', '')
                if 'High-Yield Formulas & Short Notes' in notes:
                    start = notes.find('<div style="white-space: pre-line;')
                    end = notes.find('</div>', start)
                    print(f'--- {chapter["id"]} ---')
                    print(notes[start:end+6])
                    c += 1
                    if c > 4: exit()
