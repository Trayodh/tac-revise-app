import json
import re

with open('notes_data_exam_focused.js', 'r', encoding='utf-8') as f:
    content = f.read()

db_match = re.search(r'const NOTES_DATABASE = (\{.*?\});\s*$', content, re.DOTALL)
db = json.loads(db_match.group(1))

print("Lengths by subject:")
for subj_id, subj_data in db.items():
    if 'chapters' in subj_data:
        lens = [sum(len(t.get('notes', '')) for t in c.get('topics', [])) for c in subj_data['chapters']]
        print(f"{subj_id}: Avg {sum(lens)//len(lens) if lens else 0}, Min {min(lens) if lens else 0}, Max {max(lens) if lens else 0}")
