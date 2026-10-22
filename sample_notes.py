import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('notes_database.json', 'r', encoding='utf-8') as f:
    notes = json.load(f)

targets = ['Indian Polity', 'History', 'Physics', 'Geography', 'Mathematics', 'Biology', 'Defence', 'English']
printed = set()

print(f"Total notes inspected: {len(notes)}")
for n in notes:
    subj = n.get('subject', '')
    if subj in targets and subj not in printed:
        topic = n.get('topic') or n.get('title') or 'Untitled'
        src = n.get('source_book', 'Unknown')
        pg = n.get('page', '?')
        content = n.get('content') or n.get('notes') or ''
        
        print(f"\n==================================================")
        print(f"SUBJECT: {subj.upper()} | TOPIC: {topic}")
        print(f"SOURCE: {src} (Page {pg})")
        print(f"LENGTH: {len(content.split())} words")
        print(f"--------------------------------------------------")
        print(content.strip()[:600])
        print("==================================================")
        printed.add(subj)

