import json
import re

mapping = {
    'syl-matrices': ('mathematics', 'quadratic-eq'),
    'syl-probability': ('mathematics', 'central-tendency'),
    'syl-geog': ('geography', 'india-forests-wetlands'),
    'syl-exercises': ('physics', 'newtons-laws'),
    'syl-numerical': ('chemistry', 'carbon-compounds'),
    'bilateral-exercises': ('military-aptitude', 'defence-organisations-weapons'),
    'syl-verbal-reasoning': ('military-aptitude', 'afcat-r-analogy'),
    'syl-nonverbal-reasoning': ('military-aptitude', 'afcat-r-fig-class-series'),
    'syl-afcat-spatial': ('military-aptitude', 'afcat-r-fig-completion')
}

with open('notes_data_exam_focused.js', 'r', encoding='utf-8') as f:
    content = f.read()

db_match = re.search(r'const NOTES_DATABASE = (\{.*?\});\s*$', content, re.DOTALL)
db = json.loads(db_match.group(1))

merged_count = 0

for source_id, (subj_id, target_id) in mapping.items():
    if subj_id in db and 'chapters' in db[subj_id]:
        for chapter in db[subj_id]['chapters']:
            if chapter['id'] == target_id:
                if len(chapter['topics']) > 1:
                    # Merge topic 1 into topic 0
                    t0 = chapter['topics'][0]
                    t1 = chapter['topics'][1]
                    
                    # AI-generated connective text
                    connective_html = f"""
<div style="margin: 40px 0; border-top: 2px dashed rgba(255,255,255,0.1); padding-top: 30px;">
  <h2 style="color: var(--accent); font-size: 1.8rem; margin-bottom: 20px;">
    Part 2: {t1['title']}
  </h2>
</div>
"""
                    t0['notes'] = t0.get('notes', '') + connective_html + t1.get('notes', '')
                    
                    # Update title of the first topic to reflect both
                    if t1['title'] not in t0['title']:
                        t0['title'] = f"{t0['title']} & {t1['title']}"
                    
                    # Remove the second topic
                    chapter['topics'].pop(1)
                    merged_count += 1
                    print(f"Combined topics in {target_id} -> {t0['title']}")

new_content = content[:db_match.start(1)] + json.dumps(db, indent=2) + content[db_match.end(1):]
with open('notes_data_exam_focused.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Merged {merged_count} chapters into single topics.")
