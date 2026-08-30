import json
import re

with open('notes_data_exam_focused.js', 'r', encoding='utf-8') as f:
    content = f.read()

db_match = re.search(r'const NOTES_DATABASE = (\{.*?\});\s*$', content, re.DOTALL)
db = json.loads(db_match.group(1))

mapping = ['quadratic-eq', 'central-tendency', 'india-forests-wetlands', 'newtons-laws', 'carbon-compounds', 'defence-organisations-weapons', 'afcat-r-analogy', 'afcat-r-fig-class-series', 'afcat-r-fig-completion']

for subj in db.values():
    if 'chapters' in subj:
        for chapter in subj['chapters']:
            if chapter['id'] in mapping:
                notes = chapter['topics'][0]['notes']
                idx = notes.find('Part 2:')
                if idx != -1:
                    part2 = notes[idx:]
                    lis = re.findall(r'<li>\*\*(.*?)\*\*(.*?)</li>', part2)
                    print(f"{chapter['id']} has {len(lis)} definitions.")
