import json
import re

with open('notes_data_exam_focused.js', 'r', encoding='utf-8') as f:
    content = f.read()

db = json.loads(re.search(r'const NOTES_DATABASE = (\{.*?\});\s*$', content, re.DOTALL).group(1))

mapping = ['quadratic-eq', 'central-tendency', 'india-forests-wetlands', 'newtons-laws', 'carbon-compounds', 'defence-organisations-weapons', 'afcat-r-analogy', 'afcat-r-fig-class-series', 'afcat-r-fig-completion']

results = []

for subj in db.values():
    if 'chapters' in subj:
        for chapter in subj['chapters']:
            if chapter['id'] in mapping:
                notes = chapter['topics'][0]['notes']
                idx = notes.find('Part 2:')
                if idx != -1:
                    part2 = notes[idx:]
                    lis = re.findall(r'<li>\*\*(.*?)\*\*(.*?)</li>', part2)
                    for term, desc in lis:
                        results.append({
                            'chapter': chapter['id'],
                            'term': term,
                            'desc': desc
                        })

with open('defs_to_expand.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, indent=2)
