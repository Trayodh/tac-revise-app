import json
import re
import sys
from collections import defaultdict, Counter

sys.stdout.reconfigure(encoding='utf-8')

# Load canonical syllabus
with open('canonical_syllabus.json', 'r', encoding='utf-8') as f:
    syllabus = json.load(f)

# Canonical map
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

# Load notes
with open('notes_database.json', 'r', encoding='utf-8') as f:
    notes = json.load(f)

print(f"Loaded {len(notes)} raw notes.")

# Build rules
from classifier_rules import classify_note

mapped_counts = Counter()
subject_counts = Counter()
unmapped = []

for idx, n in enumerate(notes):
    sub, ch_id = classify_note(n, chapter_map, subject_chapters)
    if ch_id and ch_id in chapter_map:
        mapped_counts[ch_id] += 1
        subject_counts[sub] += 1
    else:
        unmapped.append((idx, n.get('subject'), n.get('chapter'), n.get('topic')))

print(f"\n--- MAPPING RESULTS ---")
print(f"Total Notes: {len(notes)}")
print(f"Mapped: {sum(mapped_counts.values())} ({(sum(mapped_counts.values())/len(notes))*100:.2f}%)")
print(f"Unmapped: {len(unmapped)}")
print(f"Distinct Chapters Filled: {len(mapped_counts)} / 202")

print("\n--- DISTRIBUTION ACROSS 12 SUBJECTS ---")
for s in syllabus.keys():
    print(f"  {s}: {subject_counts[s]} notes across {len([c for c in subject_chapters[s] if mapped_counts[c] > 0])}/{len(subject_chapters[s])} chapters")

if unmapped:
    print(f"\nSample 10 Unmapped:")
    for u in unmapped[:10]:
        print(f"  Note #{u[0]} | Sub: {u[1]} | Ch: {u[2]} | Top: {u[3]}")
