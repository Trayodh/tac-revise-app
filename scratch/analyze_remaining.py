import json, sys, os
sys.path.insert(0, os.path.abspath('.'))
from pipeline_manager import get_book_priority
import alias_duplicate_pdfs

with open('pipeline_state.json', 'r', encoding='utf-8') as f:
    state = json.load(f)

# Build clone map
clone_to_canonical = {}
for dset in alias_duplicate_pdfs.DUPLICATE_SETS:
    for c in dset['clones']:
        clone_to_canonical[c] = dset['canonical']

incomplete = []
for name, info in state.items():
    if info['status'] != 'completed':
        tot = info['total_pages']
        done = len(info['extracted_pages'])
        rem = tot - done
        prio = get_book_priority(name)
        is_clone = name in clone_to_canonical
        incomplete.append({
            'name': name,
            'total': tot,
            'done': done,
            'rem': rem,
            'prio': prio,
            'is_clone': is_clone,
            'canonical': clone_to_canonical.get(name)
        })

incomplete.sort(key=lambda x: (x['prio'], x['rem']))

total_rem = sum(x['rem'] for x in incomplete)
clone_rem = sum(x['rem'] for x in incomplete if x['is_clone'])
actual_unique_rem = total_rem - clone_rem

print(f"Total incomplete books: {len(incomplete)}")
print(f"Total pages remaining gross: {total_rem}")
print(f"Duplicate clones to auto-alias: {sum(1 for x in incomplete if x['is_clone'])} books ({clone_rem} pages)")
print(f"NET unique pages requiring extraction: {actual_unique_rem}")

print("\n--- GROUPED REMAINING WORKLOAD ---")

# 1. Active Focus
active = [x for x in incomplete if x['name'] == 'nda_material.pdf']
if active:
    print(f"1. Current Focus (nda_material.pdf): {active[0]['rem']} pages left ({active[0]['done']}/{active[0]['total']} done)")

# 2. Tier-3 Capsules & Class Notes (priority (2, 20) to (2, 50))
capsules = [x for x in incomplete if (2, 20) <= x['prio'] <= (2, 50)]
print(f"\n2. Tier-3 Capsules & Short Class Notes: {len(capsules)} books, {sum(x['rem'] for x in capsules)} pages total")
for c in capsules:
    print(f"   - {c['name']} ({c['rem']} pages)")

# 3. CDS Master Volume
cds = [x for x in incomplete if x['name'] == 'cds_material.pdf']
if cds:
    print(f"\n3. CDS Master Revision Volume (cds_material.pdf): {cds[0]['rem']} pages ({cds[0]['done']}/{cds[0]['total']} done)")

# 4. Clones to be auto-aliased
clone_books = [x for x in incomplete if x['is_clone']]
print(f"\n4. SHA-256 Duplicate Clones (Auto-Aliased, 0 API calls): {len(clone_books)} books, {clone_rem} pages")
for cl in clone_books:
    print(f"   - {cl['name']} ({cl['total']}p) -> mirrors {cl['canonical']}")

# 5. Other Special & Subject Volumes (Tier 3/4)
others = [x for x in incomplete if x['name'] not in ['nda_material.pdf', 'cds_material.pdf'] and not ((2, 20) <= x['prio'] <= (2, 50)) and not x['is_clone']]
print(f"\n5. Subject Specials, Question Banks & PYQs: {len(others)} books, {sum(x['rem'] for x in others)} pages")
for o in others[:15]:
    print(f"   - {o['name']} ({o['rem']}p left)")
if len(others) > 15:
    print(f"   ... and {len(others) - 15} more books")
