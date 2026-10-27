import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

# Load canonical syllabus
with open('canonical_syllabus.json', 'r', encoding='utf-8') as f:
    syllabus = json.load(f)

# Build quick lookup of all 202 chapters
all_chapters = []
for sub_id, sub in syllabus.items():
    for ch in sub['chapters']:
        all_chapters.append({
            'subject': sub_id,
            'chapter_id': ch['id'],
            'title': ch['title'],
            'title_lower': ch['title'].lower(),
            'tokens': set(re.findall(r'\b[a-z]{3,}\b', ch['title'].lower() + ' ' + ch['id'].replace('-', ' ')))
        })

print(f"Loaded {len(all_chapters)} canonical chapters across {len(syllabus)} subjects.")

# Load raw notes
with open('notes_database.json', 'r', encoding='utf-8') as f:
    notes = json.load(f)

print(f"Loaded {len(notes)} raw notes.")
