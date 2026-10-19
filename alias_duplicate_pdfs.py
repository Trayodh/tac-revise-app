import json
import os

DUPLICATE_SETS = [
    # 1. General Science (176p)
    {
        "canonical": "general_science_ssbcrack.pdf",
        "clones": ["6f6f4af2-763d-44c4-93af-0dbb0bc0dbca.pdf"]
    },
    # 2. Current Affairs (212p)
    {
        "canonical": "current_affairs.pdf",
        "clones": ["July_CA_Class.pdf", "temp.pdf"]
    },
    # 3. SSB Crack Science Book (292p)
    {
        "canonical": "General-Science-Book-SSBCrack.pdf",
        "clones": ["insight_ssb_cheat_codes.pdf"]
    },
    # 4. PYQ 32p
    {
        "canonical": "pyq_upload.pdf",
        "clones": ["PYQ Papers\\adcb9734-b6f9-4b4c-9507-916cc105c31a.pdf"]
    },
    # 5. CDS 1 GS 43p
    {
        "canonical": "PYQ Papers\\CDS-1-GS-Question-Paper-12-April-2026-exam-1.pdf",
        "clones": ["pyq_upload_2.pdf"]
    },
    # 6. GAT 2021 (40p)
    {
        "canonical": "scratch\\pdf_downloads\\gat_syllabus\\QP-GAT-NDANA-EXAM-II-2021-161121.pdf",
        "clones": ["scratch\\pdf_downloads\\nda_gat_mock_1.pdf"]
    },
    # 7. Math 2021 (48p)
    {
        "canonical": "NDA Papers\\QP-MATH-NDANA-EXAM-II-2021-161121.pdf",
        "clones": ["scratch\\pdf_downloads\\nda_math_4.pdf"]
    },
    # 8. NDA I 2022 Math (48p)
    {
        "canonical": "NDA Papers\\QP-NDA-I-22-MATHEMATICS-120422.pdf",
        "clones": ["scratch\\pdf_downloads\\nda_math_2.pdf", "scratch\\pdf_downloads\\nda_math_mock_3.pdf"]
    },
    # 9. NDA I 2023 Math (48p)
    {
        "canonical": "NDA Papers\\QP-NDA-I-23-MATHEMATICS-170423.pdf",
        "clones": ["scratch\\pdf_downloads\\nda_math_3.pdf"]
    },
    # 10. NDA II 2022 Math (48p)
    {
        "canonical": "NDA Papers\\QP-NDA-II-MATHEMATICS-050922.pdf",
        "clones": ["scratch\\pdf_downloads\\nda_math_5.pdf"]
    },
    # 11. NDA II 2024 Math (48p)
    {
        "canonical": "NDA Papers\\QP-NDA-NA-II-24-MATHEMATICS-020924.pdf",
        "clones": ["scratch\\pdf_downloads\\nda_math_6.pdf"]
    },
    # 12. NDA II 2023 Math (44p)
    {
        "canonical": "NDA Papers\\QP-NDANA-II-2023-Maths-04092023.pdf",
        "clones": ["scratch\\pdf_downloads\\nda_math_8.pdf"]
    },
    # 13. NDA II 2025 Math (48p)
    {
        "canonical": "NDA Papers\\QP-NDANA-II-25-MATHEMATICS-150925.pdf",
        "clones": ["scratch\\pdf_downloads\\nda_math_7.pdf"]
    },
    # 14. NDA I 2024 Math (48p)
    {
        "canonical": "NDA Papers\\QP_NDANAI2024_MATHEMATICS_22042024.pdf",
        "clones": ["scratch\\pdf_downloads\\nda_math_1.pdf", "scratch\\pdf_downloads\\nda_math_mock_2.pdf"]
    },
    # 15. NDA Math 40p Mock Set
    {
        "canonical": "PYQ Papers\\10406cd1-662d-4ce9-b23a-9481e22dedd9.pdf",
        "clones": ["scratch\\test_nda_math.pdf", "scratch\\pdf_downloads\\nda_math_0.pdf", "scratch\\pdf_downloads\\nda_math_mock_1.pdf"]
    }
]

def sync_duplicate_aliases():
    state_file = "pipeline_state.json"
    if not os.path.exists(state_file):
        return 0, 0
        
    with open(state_file, 'r', encoding='utf-8') as f:
        state = json.load(f)
        
    synced_pages = 0
    synced_books = 0
    
    for s in DUPLICATE_SETS:
        all_keys = [s["canonical"]] + s["clones"]
        existing_keys = [k for k in all_keys if k in state]
        if not existing_keys:
            continue
            
        all_extracted = set()
        for k in existing_keys:
            all_extracted.update(state[k].get("extracted_pages", []))
            
        for k in existing_keys:
            prev_len = len(state[k].get("extracted_pages", []))
            tot = state[k].get("total_pages", 0)
            state[k]["extracted_pages"] = sorted(list(all_extracted))
            new_len = len(state[k]["extracted_pages"])
            
            if new_len > prev_len:
                synced_pages += (new_len - prev_len)
                
            if new_len >= tot and tot > 0:
                if state[k].get("status") != "completed":
                    state[k]["status"] = "completed"
                    synced_books += 1
                    
    temp_file = f"{state_file}.tmp"
    with open(temp_file, 'w', encoding='utf-8') as f:
        json.dump(state, f, indent=2)
    os.replace(temp_file, state_file)
    
    print(f"[ALIAS SYNC] Synchronized {synced_pages} alias pages. Completed {synced_books} clone books.")
    return synced_pages, synced_books

if __name__ == "__main__":
    sync_duplicate_aliases()
