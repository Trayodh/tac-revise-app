import os
import sys
import json
import time

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')
if hasattr(sys.stderr, 'reconfigure'):
    sys.stderr.reconfigure(encoding='utf-8', errors='replace')

from extractor_core import extract_page
import generate_frontend_notes
import alias_duplicate_pdfs

STATE_FILE = "pipeline_state.json"
NOTES_DB = "notes_database.json"
QUESTIONS_DB = "question_database.json"

def load_state():
    if os.path.exists(STATE_FILE):
        with open(STATE_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    return {}

def robust_replace(src, dst, retries=8, delay=0.3):
    for i in range(retries):
        try:
            os.replace(src, dst)
            return
        except PermissionError:
            time.sleep(delay)
    os.replace(src, dst)

def save_state(state):
    temp_file = f"{STATE_FILE}.tmp"
    with open(temp_file, 'w', encoding='utf-8') as f:
        json.dump(state, f, indent=2)
    robust_replace(temp_file, STATE_FILE)

def append_to_db(filename, new_data):
    if not new_data:
        return
        
    db_data = []
    if os.path.exists(filename):
        with open(filename, 'r', encoding='utf-8') as f:
            try:
                db_data = json.load(f)
            except json.JSONDecodeError:
                db_data = []
                
    db_data.extend(new_data)
    
    temp_file = f"{filename}.tmp"
    with open(temp_file, 'w', encoding='utf-8') as f:
        json.dump(db_data, f, indent=2, ensure_ascii=False)
    robust_replace(temp_file, filename)

def get_book_priority(pdf_name):
    """
    Ranks books for focused, chapter-by-chapter extraction:
    Tier 1: Arihant Pathfinder Core Subject Books (Science, Maths, Studies, CDS Pathfinder)
    Tier 2: Master Comprehensive Materials (NDA & CDS)
    Tier 3: High-Yield Revision Capsules & Class Notes
    Tier 4: Defence / General Science Specials
    Tier 5: Previous Year Exam Papers (NDA, CDS, AFCAT, CAPF)
    """
    lower = pdf_name.lower().replace('\\', '/')
    
    # TIER 1: ARIHANT PATHFINDER CORE SUBJECT BOOKS
    if 'pathfinder_science.pdf' in lower:
        return (1, 10)
    if 'pathfinder_mathematics.pdf' in lower:
        return (1, 20)
    if 'pathfinder_studies.pdf' in lower:
        return (1, 30)
    if 'pathfinder-cds-combined-defence-expertsarihant' in lower:
        return (1, 40)
    if 'pathfinder' in lower:
        return (1, 50)
        
    # TIER 2: MASTER REVISION & HIGH-YIELD CAPSULES (User Prioritized)
    if any(f'doc{i}.pdf' in lower for i in range(1, 10)):
        return (2, 5)
    if 'physics class notes' in lower:
        return (2, 6)
    if 'physical geography class notes' in lower:
        return (2, 7)
    if 'nda_material.pdf' in lower:
        return (2, 10)
    if 'cds_material.pdf' in lower:
        return (2, 15)
    if 'capsule' in lower or 'class notes' in lower:
        return (2, 50)
        
    # TIER 4: DEFENCE & SPECIALS
    if 'defence_pdf.pdf' in lower:
        return (4, 10)
    if 'general-science-book-ssbcrack.pdf' in lower:
        return (4, 20)
    if 'afcat_reasoning_notes.pdf' in lower:
        return (4, 30)
    if 'general_science_ssbcrack.pdf' in lower:
        return (4, 40)

    # TIER 5: PREVIOUS YEAR PAPERS
    if any(k in lower for k in ['pyq', 'qp', 'paper', 'solved', '202', '201']):
        return (5, 10)
        
    return (6, 99)

FAILED_ATTEMPTS = {}

def get_next_task_priority(state):
    """
    Priority-First Book Scheduler:
    Picks the highest priority incomplete book and extracts its pages
    consecutively until that book is 100% complete.
    """
    incomplete = [name for name in state if len(state[name].get('extracted_pages', [])) < state[name].get('total_pages', 0)]
    if not incomplete:
        return None, None
        
    # Sort incomplete books by priority tier, then by remaining pages
    incomplete.sort(key=lambda name: (
        get_book_priority(name),
        state[name]['total_pages'] - len(state[name]['extracted_pages'])
    ))
    
    for pdf_name in incomplete:
        info = state[pdf_name]
        total = info['total_pages']
        extracted = set(info['extracted_pages'])
        
        for page in range(1, total + 1):
            if page not in extracted:
                fail_key = f"{pdf_name}:{page}"
                # If a single page failed > 3 times, temporarily skip to next page of same book
                if FAILED_ATTEMPTS.get(fail_key, 0) >= 3:
                    continue
                return pdf_name, page
                
        # Only mark completed if 100% of pages are truly in extracted_pages
        if len(info['extracted_pages']) >= total:
            info['status'] = 'completed'
            save_state(state)
        
    return None, None

def run_pipeline():
    print("=" * 60)
    print("Starting Extraction Pipeline: PRIORITY-FIRST BOOK COMPLETION (Option 2)")
    print("Focus: Pathfinder Books -> NDA & CDS Master Volumes -> Class Notes -> PYQs")
    print("=" * 60)
    
    success_count = 0
    current_book = None
    
    while True:
        state = load_state()
        pdf_name, page_num = get_next_task_priority(state)
        
        if not pdf_name:
            print("[PIPELINE COMPLETE] All priority books and documents extracted!")
            break
            
        if pdf_name != current_book:
            current_book = pdf_name
            prio = get_book_priority(pdf_name)
            total = state[pdf_name]['total_pages']
            done = len(state[pdf_name]['extracted_pages'])
            print(f"\n>>> ACTIVE BOOK FOCUS: {pdf_name} (Priority {prio}) [{done}/{total} done]")
            
        total = state[pdf_name]['total_pages']
        done = len(state[pdf_name]['extracted_pages'])
        print(f"[{pdf_name}] Extracting page {page_num}/{total} (completed: {done}/{total})...")
        
        if state[pdf_name]['status'] == 'pending':
            state[pdf_name]['status'] = 'in_progress'
            save_state(state)
            
        result = extract_page(pdf_name, page_num)
        
        if result:
            notes = result.get('notes', [])
            questions = result.get('questions', [])
            
            for n in notes:
                n['source_pdf'] = pdf_name
                n['source_page'] = page_num
                
            for q in questions:
                q['source_pdf'] = pdf_name
                q['source_page'] = page_num
                
            append_to_db(NOTES_DB, notes)
            append_to_db(QUESTIONS_DB, questions)
            
            state = load_state()
            if page_num not in state[pdf_name]['extracted_pages']:
                state[pdf_name]['extracted_pages'].append(page_num)
                
            if len(state[pdf_name]['extracted_pages']) >= state[pdf_name]['total_pages']:
                state[pdf_name]['status'] = 'completed'
                print(f"\n*** [BOOK COMPLETED] 100% finished extracting {pdf_name}! ***")
                try:
                    alias_duplicate_pdfs.sync_duplicate_aliases()
                except Exception as alias_err:
                    print(f"[ALIAS SYNC ERROR] {alias_err}")
                
            save_state(state)
            print(f"Successfully processed {pdf_name} page {page_num}. Added {len(notes)} notes and {len(questions)} questions.")
            
            success_count += 1
            if success_count % 5 == 0:
                print(f"[AUTO-SYNC] Synchronizing latest notes into ai_generated_notes.js...")
                try:
                    generate_frontend_notes.run()
                except Exception as sync_err:
                    print(f"[AUTO-SYNC] Error updating frontend notes: {sync_err}")
                    
            time.sleep(3)
        else:
            fail_key = f"{pdf_name}:{page_num}"
            FAILED_ATTEMPTS[fail_key] = FAILED_ATTEMPTS.get(fail_key, 0) + 1
            print(f"Failed to process {pdf_name} page {page_num} (attempt {FAILED_ATTEMPTS[fail_key]}).")
            time.sleep(20)

if __name__ == "__main__":
    run_pipeline()
