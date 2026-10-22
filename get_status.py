import json

with open('pipeline_state.json', 'r', encoding='utf-8') as f:
    s = json.load(f)

total_pages = 0
extracted_pages_count = 0
completed_books = 0
total_books = len(s)

remaining = []

for pdf, data in s.items():
    tot = data.get('total_pages', 0)
    done_list = data.get('extracted_pages', [])
    done = len(done_list)
    total_pages += tot
    extracted_pages_count += done
    if tot > 0 and done >= tot:
        completed_books += 1
    else:
        remaining.append((pdf, done, tot, tot - done))

with open('notes_database.json', 'r', encoding='utf-8') as f:
    n = json.load(f)

with open('question_database.json', 'r', encoding='utf-8') as f:
    q = json.load(f)

gs_data = s.get('General-Science-Book-SSBCrack.pdf', {})
gs_done = len(gs_data.get('extracted_pages', []))
gs_tot = gs_data.get('total_pages', 292)

print(f"TOTAL_BOOKS: {total_books}")
print(f"COMPLETED_BOOKS: {completed_books} / {total_books}")
print(f"EXTRACTED_PAGES: {extracted_pages_count} / {total_pages} ({extracted_pages_count/total_pages*100:.2f}%)")
print(f"NOTES_COUNT: {len(n)}")
print(f"QUESTIONS_COUNT: {len(q)}")
print(f"GS_PROGRESS: {gs_done} / {gs_tot} ({gs_done/gs_tot*100:.1f}%)")
print(f"REMAINING_BOOKS_COUNT: {len(remaining)}")

remaining.sort(key=lambda x: (x[1] == 0, -x[1], x[3]))
print("\nActive / Partially Done Books:")
for r in remaining:
    if r[1] > 0:
        print(f"  - {r[0]}: {r[1]}/{r[2]} pages done (remaining: {r[3]})")
