import json

with open('pipeline_state.json', 'r', encoding='utf-8') as f:
    state = json.load(f)

with open('notes_database.json', 'r', encoding='utf-8') as f:
    notes = json.load(f)

with open('question_database.json', 'r', encoding='utf-8') as f:
    questions = json.load(f)

total_books = len(state)
completed_books = [k for k, v in state.items() if v.get('status') == 'completed']
in_progress_books = [k for k, v in state.items() if v.get('status') != 'completed']

total_pages = sum(v.get('total_pages', 0) for v in state.values())
done_pages = sum(len(v.get('extracted_pages', [])) for v in state.values())
remaining_pages = total_pages - done_pages

print(f"Total Books: {total_books}")
print(f"Completed Books: {len(completed_books)}")
print(f"In-Progress / Pending Books: {len(in_progress_books)}")
print(f"Total Gross Pages: {total_pages}")
print(f"Done Pages: {done_pages} ({done_pages/total_pages*100:.2f}%)")
print(f"Remaining Pages: {remaining_pages} ({remaining_pages/total_pages*100:.2f}%)")
print(f"Total Notes: {len(notes)}")
print(f"Total Questions: {len(questions)}")

# Top remaining books by pages left
remaining_by_book = []
for k, v in state.items():
    tot = v.get('total_pages', 0)
    done = len(v.get('extracted_pages', []))
    rem = tot - done
    if rem > 0:
        remaining_by_book.append((k, rem, done, tot, v.get('status', 'pending')))

remaining_by_book.sort(key=lambda x: x[1], reverse=True)
print("\nTop 15 Remaining Books:")
for k, rem, done, tot, status in remaining_by_book[:15]:
    print(f" - {k}: {rem} pages left ({done}/{tot} done, status: {status})")

# Check cds_material.pdf specifically
cds = state.get('cds_material.pdf', {})
cds_tot = cds.get('total_pages', 0)
cds_done = len(cds.get('extracted_pages', []))
print(f"\nCDS Material Specifics: {cds_done}/{cds_tot} pages extracted ({cds_tot - cds_done} remaining)")

# Check scanned capsules (doc1 - doc9)
print("\nCapsules (doc1-doc9):")
for i in range(1, 10):
    name = f"doc{i}.pdf"
    if name in state:
        info = state[name]
        d = len(info.get('extracted_pages', []))
        t = info.get('total_pages', 0)
        print(f" - {name}: {d}/{t} pages (status: {info.get('status')})")
