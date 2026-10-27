import json
import re

with open('ai_generated_notes.js', 'r', encoding='utf-8') as f:
    text = f.read()
    start = text.find('const AI_GENERATED_NOTES = ') + len('const AI_GENERATED_NOTES = ')
    end = text.rfind(';\nif (typeof window')
    notes = json.loads(text[start:end].strip())

unrendered_tables = 0
for n in notes:
    lines = n['notes'].split('\n')
    for i in range(len(lines) - 1):
        l1 = lines[i].strip()
        l2 = lines[i+1].strip()
        if l1.startswith('|') and l1.endswith('|') and re.match(r'^\|[\s\:\-\|]+\|$', l2):
            unrendered_tables += 1
            print(f"Unrendered table found in {n['id']}: {l1[:50]}")
            break

print(f"Total unrendered markdown tables across all 202 chapters: {unrendered_tables}")
