import json
from collections import Counter

with open('notes_database.json', 'r', encoding='utf-8') as f:
    notes = json.load(f)

print(f"Total notes in notes_database.json: {len(notes)}")

subjects = Counter()
chapters = Counter()
sources = Counter()

for n in notes:
    sub = (n.get('subject') or 'Unknown').strip()
    ch = (n.get('chapter') or n.get('topic') or 'Unknown').strip()
    src = n.get('source_pdf') or n.get('source_book') or 'Unknown'
    subjects[sub] += 1
    chapters[f"{sub} -> {ch}"] += 1
    sources[src] += 1

print("\n--- TOP 25 SUBJECTS IN RAW NOTES ---")
for s, count in subjects.most_common(25):
    print(f"  {s}: {count}")

print(f"\nTotal unique subjects: {len(subjects)}")
print(f"Total unique chapter keys: {len(chapters)}")
