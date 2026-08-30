import json
import re

with open('notes_data_exam_focused.js', 'r', encoding='utf-8') as f:
    content = f.read()

db_match = re.search(r'const NOTES_DATABASE = (\{.*?\});\s*$', content, re.DOTALL)
db = json.loads(db_match.group(1))

subjects = ['mathematics', 'geography', 'physics', 'chemistry', 'military-aptitude']
for subj in subjects:
    print(f'=== {subj} ===')
    if subj in db and 'chapters' in db[subj]:
        for ch in db[subj]['chapters']:
            print(f"{ch['id']} : {ch['title']}")
