import json
import sys
from collections import defaultdict
from smart_taxonomy_matcher import smart_match_note

sys.stdout.reconfigure(encoding='utf-8')

with open('canonical_syllabus.json', 'r', encoding='utf-8') as f:
    syllabus = json.load(f)

chapter_map = {}
subject_chapters = defaultdict(list)
for sub_id, sub_data in syllabus.items():
    for c in sub_data['chapters']:
        chapter_map[c['id']] = {'subject': sub_id, 'id': c['id'], 'title': c['title']}
        subject_chapters[sub_id].append(c['id'])

with open('notes_database.json', 'r', encoding='utf-8') as f:
    raw_notes = json.load(f)

snippets_by_chapter = defaultdict(list)
for n in raw_notes:
    sub, ch_id = smart_match_note(n, chapter_map, subject_chapters)
    txt = n.get('text') or n.get('content') or ''
    if txt and len(snippets_by_chapter[ch_id]) < 8:
        # Keep high-yield summary snippet
        snippets_by_chapter[ch_id].append(txt[:400].strip())

with open('chapter_snippets.json', 'w', encoding='utf-8') as f:
    json.dump(snippets_by_chapter, f, ensure_ascii=False, indent=2)

print(f"Precomputed snippets for {len(snippets_by_chapter)} chapters. Saved to chapter_snippets.json.")
