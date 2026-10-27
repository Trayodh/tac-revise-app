import json
import sys
from collections import defaultdict
from classifier_rules import classify_note

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

chapter_notes = defaultdict(list)
for n in notes:
    sub, ch_id = classify_note(n, chapter_map, subject_chapters)
    chapter_notes[ch_id].append(n)

print(f"Total canonical chapters: {len(chapter_map)}")
print(f"Chapters with notes: {len(chapter_notes)}")

# Show distribution statistics
counts = [len(v) for v in chapter_notes.values()]
print(f"Max notes in a chapter: {max(counts)}")
print(f"Min notes in filled chapter: {min(counts)}")
print(f"Average notes per filled chapter: {sum(counts)/len(counts):.1f}")

# Top 15 chapters by note count
sorted_chaps = sorted(chapter_notes.items(), key=lambda x: len(x[1]), reverse=True)
print("\n--- TOP 15 CHAPTERS BY EXTRACTED NOTE COUNT ---")
for ch_id, ch_list in sorted_chaps[:15]:
    ch_info = chapter_map[ch_id]
    print(f"  [{ch_info['subject']}] {ch_info['title']} ({ch_id}): {len(ch_list)} notes")
