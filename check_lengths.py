import json
import re

with open('notes_data_exam_focused.js', 'r', encoding='utf-8') as f:
    content = f.read()

db_match = re.search(r'const NOTES_DATABASE = (\{.*?\});\s*$', content, re.DOTALL)
db = json.loads(db_match.group(1))

print("military-aptitude lengths:")
for c in db['military-aptitude']['chapters']:
    total_len = sum(len(t.get('notes', '')) for t in c.get('topics', []))
    print(f"{c['id']} : {total_len}")

print("\nAll chapters with len < 2000:")
for subj_id, subj_data in db.items():
    if 'chapters' in subj_data:
        for chapter in subj_data['chapters']:
            total_len = sum(len(t.get('notes', '')) for t in chapter.get('topics', []))
            if total_len < 2000:
                print(f"{subj_id} -> {chapter['id']} : {total_len}")
