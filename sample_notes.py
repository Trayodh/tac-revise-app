import json

with open('notes_database.json', 'r', encoding='utf-8') as f:
    notes = json.load(f)

for i in [0, 100, 500, 1000, 2000, 5000, 10000, 15000]:
    if i < len(notes):
        n = notes[i]
        print(f"--- Note #{i} ---")
        print(f"Subject: {n.get('subject')} | Chapter: {n.get('chapter')} | Topic: {n.get('topic')}")
        print(f"Source: {n.get('source_pdf') or n.get('source_book')} | Page: {n.get('source_page') or n.get('page')}")
        text = n.get('text') or n.get('content') or ''
        print(f"Text preview (120 chars): {text[:120].replace(chr(10), ' ')}")
        print()
