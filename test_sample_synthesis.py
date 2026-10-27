import json
import re
import sys
from collections import defaultdict
from smart_taxonomy_matcher import smart_match_note
from test_table_converter import convert_markdown_tables_to_html

sys.stdout.reconfigure(encoding='utf-8')

# Load syllabus
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

# Load notes
with open('notes_database.json', 'r', encoding='utf-8') as f:
    raw_notes = json.load(f)

# Group by chapter
notes_by_chapter = defaultdict(list)
for n in raw_notes:
    sub, ch_id = smart_match_note(n, chapter_map, subject_chapters)
    notes_by_chapter[ch_id].append(n)

print(f"Loaded {len(raw_notes)} notes. Grouped into {len(notes_by_chapter)} chapters.")

# Let's inspect a sample chapter: 'preamble'
sample_ch_id = 'preamble'
sample_items = notes_by_chapter[sample_ch_id]
print(f"Sample chapter: {sample_ch_id} has {len(sample_items)} raw notes.")
if sample_items:
    print("First item preview:")
    text = sample_items[0].get('text') or sample_items[0].get('content') or ''
    print(text[:300])
