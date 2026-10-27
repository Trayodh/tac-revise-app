import json

with open('canonical_syllabus.json', 'r', encoding='utf-8') as f:
    syllabus = json.load(f)

for s in ['mathematics', 'english', 'polity']:
    chaps = syllabus[s]['chapters']
    print(f"=== {s.upper()} ({len(chaps)} chapters) ===")
    for c in chaps:
        print(f"  [{c['id']}] : {c['title']}")
    print()
