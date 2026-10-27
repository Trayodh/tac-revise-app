import json
import re

with open('ai_generated_notes.js', 'r', encoding='utf-8') as f:
    # Read the JSON portion
    text = f.read()
    start = text.find('const AI_GENERATED_NOTES = ') + len('const AI_GENERATED_NOTES = ')
    end = text.rfind(';\nif (typeof window')
    json_str = text[start:end].strip()
    ai_notes = json.loads(json_str)

notes_by_id = {n['id']: n['notes'] for n in ai_notes}
print(f"Loaded {len(notes_by_id)} synthesized notes.")

# Verify all canonical chapters exist
with open('canonical_syllabus.json', 'r', encoding='utf-8') as f:
    syllabus = json.load(f)

missing = []
for sub, sdata in syllabus.items():
    for c in sdata['chapters']:
        if c['id'] not in notes_by_id:
            missing.append(c['id'])

print(f"Missing from synthesized notes: {len(missing)}")
if missing:
    print(missing)
else:
    print("ALL 202 CANONICAL CHAPTERS HAVE SYNTHESIZED NOTES!")
