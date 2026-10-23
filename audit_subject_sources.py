import json
import os
import sys
from collections import defaultdict, Counter

sys.stdout.reconfigure(encoding='utf-8')

with open('notes_database.json', 'r', encoding='utf-8') as f:
    notes = json.load(f)

print(f"Total notes inspected: {len(notes)}")

subject_sources = defaultdict(Counter)
subject_chapters = defaultdict(Counter)

for n in notes:
    subj = n.get('subject') or 'General Studies'
    subj = subj.strip().title()
    # Normalize subject aliases
    if subj in ['Polity', 'Indian Constitution']:
        subj = 'Indian Polity'
    elif subj in ['Bio']:
        subj = 'Biology'
    elif subj in ['Chem']:
        subj = 'Chemistry'
    elif subj in ['Phy']:
        subj = 'Physics'
    elif subj in ['Math', 'Maths']:
        subj = 'Mathematics'
    elif subj in ['Reasoning & Military Aptitude', 'Military Aptitude']:
        subj = 'Reasoning'

    src = n.get('source_pdf') or n.get('source_book') or 'Core Repository / Class Capsules'
    src = os.path.basename(src) if src else 'Unknown'
    subject_sources[subj][src] += 1
    
    ch = n.get('chapter') or n.get('topic') or 'General'
    subject_chapters[subj][ch] += 1

top_subjects = sorted(subject_sources.keys(), key=lambda s: sum(subject_sources[s].values()), reverse=True)

for subj in top_subjects[:10]:
    total_notes_subj = sum(subject_sources[subj].values())
    print(f"\n========================================================")
    print(f"SUBJECT: {subj.upper()} (Total Notes: {total_notes_subj})")
    print(f"--------------------------------------------------------")
    print(f"Top Source Documents:")
    for src, count in subject_sources[subj].most_common(5):
        pct = (count / total_notes_subj) * 100
        print(f"  • {src}: {count} notes ({pct:.1f}%)")
    print(f"\nSample Key Chapters/Topics Extracted:")
    for ch, count in subject_chapters[subj].most_common(6):
        print(f"  - {ch} ({count} notes)")
