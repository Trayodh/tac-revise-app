import json

with open('canonical_syllabus.json', 'r', encoding='utf-8') as f:
    syllabus = json.load(f)

for sub_id, sub_data in syllabus.items():
    chaps = sub_data['chapters']
    print(f"=== {sub_id.upper()} ({len(chaps)} chapters) ===")
    for c in chaps:
        print(f"  [{c['id']}] : {c['title']}")
    print()
