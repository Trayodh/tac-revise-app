import json
import re

with open('notes_data_exam_focused.js', 'r', encoding='utf-8') as f:
    content = f.read()

db_match = re.search(r'const NOTES_DATABASE = (\{.*?\});\s*$', content, re.DOTALL)
db = json.loads(db_match.group(1))

mappings = []
for subj, subj_data in db.items():
    syl_chapters = [ch for ch in subj_data.get('chapters', []) if ch['id'].startswith('syl-')]
    if syl_chapters:
        mappings.append(f"### {subj.capitalize()}")
        for ch in syl_chapters:
            mappings.append(f"- **{ch['title']}** (`{ch['id']}`) -> To be merged with matching text chapter (e.g. `???`)")
            
with open('merge_mappings.md', 'w') as f:
    f.write('\n'.join(mappings))
