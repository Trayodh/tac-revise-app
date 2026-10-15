import json

with open('pipeline_state.json', 'r', encoding='utf-8') as f:
    state = json.load(f)

categories = {
    '1. Core Pathfinder Textbooks': [],
    '2. Master Comprehensive Volumes (NDA & CDS)': [],
    '3. Subject Class Notes & High-Yield Capsules': [],
    '4. AFCAT & Defence Specials': [],
    '5. NDA Previous Year Papers (2020-2026)': [],
    '6. CDS Previous Year Papers (2020-2026)': [],
    '7. AFCAT Previous Year Papers (2022-2025)': [],
    '8. CAPF & Civil Services Prelims (CSP)': [],
    '9. Strategic Geography & Infographics': [],
    '10. Miscellaneous & Extra Uploads': []
}

for name, info in state.items():
    tot = info.get('total_pages', 0)
    done = len(info.get('extracted_pages', []))
    st = info.get('status', 'pending')
    lower = name.lower().replace('\\', '/')
    
    item = {'name': name, 'total': tot, 'done': done, 'status': st}
    
    if any(k in lower for k in ['pathfinder_science', 'pathfinder_mathematics', 'pathfinder_studies', 'pathfinder-cds']):
        categories['1. Core Pathfinder Textbooks'].append(item)
    elif any(k in lower for k in ['nda_material', 'cds_material']):
        categories['2. Master Comprehensive Volumes (NDA & CDS)'].append(item)
    elif any(k in lower for k in ['class notes', 'capsule', 'doc1.', 'doc2.', 'doc3.', 'doc4.', 'doc5.', 'doc6.', 'doc7.', 'doc8.', 'doc9.', 'chunk_']):
        categories['3. Subject Class Notes & High-Yield Capsules'].append(item)
    elif any(k in lower for k in ['ssbcrack', 'defence_pdf', 'afcat_reasoning', 'insight_ssb', 'july_ca', 'current_affairs.pdf']):
        categories['4. AFCAT & Defence Specials'].append(item)
    elif 'nda papers' in lower or 'nda_math' in lower or 'nda_gat' in lower or 'gat_syllabus' in lower or 'test_nda' in lower:
        categories['5. NDA Previous Year Papers (2020-2026)'].append(item)
    elif 'cds' in lower and ('pyq' in lower or 'question-paper' in lower or 'gs-paper' in lower or 'maths-paper' in lower or 'english' in lower):
        categories['6. CDS Previous Year Papers (2020-2026)'].append(item)
    elif 'afcat papers' in lower or ('afcat' in lower and 'paper' in lower):
        categories['7. AFCAT Previous Year Papers (2022-2025)'].append(item)
    elif 'capf' in lower or 'cse' in lower or 'csp' in lower:
        categories['8. CAPF & Civil Services Prelims (CSP)'].append(item)
    elif 'geography' in lower or 'forest_types' in lower or 'petroleum' in lower:
        categories['9. Strategic Geography & Infographics'].append(item)
    else:
        categories['10. Miscellaneous & Extra Uploads'].append(item)

total_all_pdfs = len(state)
print(f'TOTAL ALL DEFENCE PDFS: {total_all_pdfs}\n')

for cat, items in categories.items():
    cat_tot = sum(x['total'] for x in items)
    cat_done = sum(x['done'] for x in items)
    pct = (cat_done / cat_tot * 100) if cat_tot > 0 else 0
    comp_count = sum(1 for x in items if x['done'] >= x['total'] and x['total'] > 0)
    print(f'=== {cat} ({len(items)} PDFs | {cat_done}/{cat_tot} pages - {pct:.1f}% | {comp_count} Completed) ===')
    for it in sorted(items, key=lambda x: (x['status'] != 'completed', -x['done'])):
        status_flag = '[COMPLETED]' if it['done'] >= it['total'] and it['total'] > 0 else f"[{it['done']}/{it['total']}p]"
        print(f"  * {status_flag:12} {it['name']}")
    print()
