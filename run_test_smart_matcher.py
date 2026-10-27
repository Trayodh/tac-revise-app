import json
import sys
from collections import defaultdict, Counter
from smart_taxonomy_matcher import smart_match_note

sys.stdout.reconfigure(encoding='utf-8')

with open('canonical_syllabus.json', 'r', encoding='utf-8') as f:
    syllabus = json.load(f)

chapter_map = {}
subject_chapters = defaultdict(list)
for sub_id, sub_data in syllabus.items():
    for c in sub_data['chapters']:
        ch_id = c['id']
        chapter_map[ch_id] = {
            'subject': sub_id,
            'title': c['title'],
            'id': ch_id
        }
        subject_chapters[sub_id].append(ch_id)

with open('notes_database.json', 'r', encoding='utf-8') as f:
    notes = json.load(f)

print(f"Loaded {len(notes)} raw notes.")

chapter_counts = Counter()
subject_counts = Counter()

for n in notes:
    sub, ch_id = smart_match_note(n, chapter_map, subject_chapters)
    chapter_counts[ch_id] += 1
    subject_counts[sub] += 1

print("\n--- RESULTS WITH REFINED REGEX MATCHER ---")
print(f"Total Notes: {len(notes)}")
print(f"Distinct Chapters Filled: {len(chapter_counts)} / 202")

print("\n--- DISTRIBUTION BY SUBJECT ---")
for s in syllabus.keys():
    filled = len([c for c in subject_chapters[s] if chapter_counts[c] > 0])
    total = len(subject_chapters[s])
    print(f"  {s:18}: {subject_counts[s]:5} notes across {filled:2}/{total:2} chapters")

print("\n--- TOP 15 CHAPTERS ---")
for ch_id, count in chapter_counts.most_common(15):
    print(f"  [{chapter_map[ch_id]['subject']:15}] {chapter_map[ch_id]['title']:35} ({ch_id}): {count} notes")
