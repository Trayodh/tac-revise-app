import json
import re

mapping = {
    'syl-matrices': ('mathematics', 'quadratic-eq', 'Quadratic Equations & Matrices'),
    'syl-probability': ('mathematics', 'central-tendency', 'Measures of Central Tendency & Probability'),
    'syl-geog': ('geography', 'india-forests-wetlands', 'Indian Geography: Rivers, Forests & Wetlands'),
    'syl-exercises': ('physics', 'newtons-laws', 'Newton\'s Laws, Work, Power & Energy'),
    'syl-numerical': ('chemistry', 'carbon-compounds', 'Carbon Compounds, Bonding & Periodic Table'),
    'bilateral-exercises': ('military-aptitude', 'defence-organisations-weapons', 'Defence Orgs, Weapons & Exercises'),
    'syl-verbal-reasoning': ('military-aptitude', 'afcat-r-analogy', 'Ch.1 – Analogy & Verbal Reasoning OIR'),
    'syl-nonverbal-reasoning': ('military-aptitude', 'afcat-r-fig-class-series', 'Ch.12&13 – Fig Class/Series & Non-Verbal OIR'),
    'syl-afcat-spatial': ('military-aptitude', 'afcat-r-fig-completion', 'Ch.14 – Pattern Completion & Spatial Reasoning')
}

with open('notes_data_exam_focused.js', 'r', encoding='utf-8') as f:
    content = f.read()

db_match = re.search(r'const NOTES_DATABASE = (\{.*?\});\s*$', content, re.DOTALL)
db = json.loads(db_match.group(1))

# First, extract the source chapters and remove them from their subjects
source_chapters = {}
for subj_id, subj_data in db.items():
    if 'chapters' in subj_data:
        kept_chapters = []
        for chapter in subj_data['chapters']:
            if chapter['id'] in mapping:
                source_chapters[chapter['id']] = chapter
            else:
                kept_chapters.append(chapter)
        subj_data['chapters'] = kept_chapters

# Then, find the target chapters and merge topics
for source_id, (subj_id, target_id, new_title) in mapping.items():
    if source_id in source_chapters:
        source_chapter = source_chapters[source_id]
        
        # Find target
        target_found = False
        if subj_id in db and 'chapters' in db[subj_id]:
            for target_chapter in db[subj_id]['chapters']:
                if target_chapter['id'] == target_id:
                    target_chapter['title'] = new_title
                    target_chapter['topics'].extend(source_chapter['topics'])
                    target_found = True
                    print(f"Merged {source_id} into {target_id}")
                    break
        if not target_found:
            print(f"WARNING: Target {target_id} not found for {source_id}")

new_content = content[:db_match.start(1)] + json.dumps(db, indent=2) + content[db_match.end(1):]
with open('notes_data_exam_focused.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Chapter merging complete.")
