import json
import sys
import os

with open('pipeline_state.json', 'r', encoding='utf-8') as f:
    state = json.load(f)

incomplete = []
for k, v in state.items():
    tot = v.get('total_pages', 0)
    done = len(v.get('extracted_pages', []))
    rem = tot - done
    if rem > 0:
        incomplete.append((k, rem, done, tot))

incomplete.sort(key=lambda x: x[1], reverse=True)

print(f"Total incomplete books: {len(incomplete)}")
total_rem = sum(x[1] for x in incomplete)
print(f"Total gross pages remaining: {total_rem}")

# Categories
cds_pages = sum(rem for k, rem, _, _ in incomplete if 'cds_material' in k)
pyq_pages = sum(rem for k, rem, _, _ in incomplete if any(x in k.lower() for x in ['nda', 'cds', 'afcat', 'capf', 'paper', 'qp', '201', '202']) and 'cds_material' not in k and 'afcat_reasoning' not in k)
specialist_books = [
    (k, rem, done, tot) for k, rem, done, tot in incomplete
    if not any(x in k.lower() for x in ['nda', 'cds', 'afcat', 'capf', 'paper', 'qp', '201', '202']) or 'afcat_reasoning' in k or 'ssbcrack' in k.lower() or 'cheat_codes' in k.lower()
]

print(f"\n1. CDS Master Material: {cds_pages} pages left")
print(f"2. Previous Year Exam Papers: {pyq_pages} pages left across {sum(1 for k, _, _, _ in incomplete if any(x in k.lower() for x in ['nda', 'cds', 'afcat', 'capf', 'paper', 'qp', '201', '202']) and 'cds_material' not in k and 'afcat_reasoning' not in k)} papers")
print(f"3. Specialist / Subject Books: {sum(x[1] for x in specialist_books)} pages left:")
for k, rem, done, tot in specialist_books:
    print(f"   - {k}: {rem} pages ({done}/{tot} done)")

import alias_duplicate_pdfs
clone_pages = 0
for dset in alias_duplicate_pdfs.DUPLICATE_SETS:
    for clone in dset.get('clones', []):
        if clone in state:
            c_tot = state[clone].get('total_pages', 0)
            c_done = len(state[clone].get('extracted_pages', []))
            clone_pages += (c_tot - c_done)

print(f"\nDuplicate clone pages among remaining: {clone_pages} pages")
print(f"Net unique unextracted pages remaining: {total_rem - clone_pages} pages")
