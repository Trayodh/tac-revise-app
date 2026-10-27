import json
import re
import sys
from collections import defaultdict, Counter

sys.stdout.reconfigure(encoding='utf-8')

with open('canonical_syllabus.json', 'r', encoding='utf-8') as f:
    syllabus = json.load(f)

# Chapter lookup
chapter_info = {}
subject_chapters = defaultdict(list)
for sub_id, sub_data in syllabus.items():
    for c in sub_data['chapters']:
        ch_id = c['id']
        chapter_info[ch_id] = {
            'subject': sub_id,
            'title': c['title'],
            'id': ch_id
        }
        subject_chapters[sub_id].append(ch_id)

print(f"Loaded {len(chapter_info)} canonical chapters across {len(syllabus)} subjects.")
