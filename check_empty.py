import json
import re

with open('notes_data_exam_focused.js', 'r', encoding='utf-8') as f:
    content = f.read()

db = json.loads(re.search(r'const NOTES_DATABASE = (\{.*?\});\s*$', content, re.DOTALL).group(1))

empty_chapters = []
for subj_id, subj_data in db.items():
    if 'chapters' in subj_data:
        for chapter in subj_data['chapters']:
            if not chapter.get('topics'):
                empty_chapters.append(chapter['title'])
            else:
                total_len = sum(len(t.get('notes', '')) for t in chapter['topics'])
                if subj_id != 'history' and total_len < 500:
                    empty_chapters.append(f"{chapter['title']} (length {total_len})")

print('Empty/Short Chapters:', empty_chapters)
