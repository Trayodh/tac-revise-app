import os
import json
import time
from extractor_core import extract_page

STATE_FILE = "pipeline_state.json"
NOTES_DB = "notes_database.json"
QUESTIONS_DB = "question_database.json"

def load_state():
    if os.path.exists(STATE_FILE):
        with open(STATE_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    return {}

def save_state(state):
    with open(STATE_FILE, 'w', encoding='utf-8') as f:
        json.dump(state, f, indent=2)

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
    
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(db_data, f, indent=2, ensure_ascii=False)

LAST_PDF_INDEX_FILE = "pipeline_last_index.txt"

def get_last_pdf_index():
    if os.path.exists(LAST_PDF_INDEX_FILE):
        with open(LAST_PDF_INDEX_FILE, 'r') as f:
            try:
                return int(f.read().strip())
            except ValueError:
                return 0
    return 0

def save_last_pdf_index(idx):
    with open(LAST_PDF_INDEX_FILE, 'w') as f:
        f.write(str(idx))

def get_next_task_round_robin(state):
    """
    Round-robin scheduler: gives every PDF equal weightage.
    Instead of finishing one PDF before starting the next,
    it rotates through all incomplete PDFs one page at a time.
    """
    pdf_names = list(state.keys())
    incomplete = [name for name in pdf_names if state[name]['status'] != 'completed']
    
    if not incomplete:
        return None, None
    
    last_index = get_last_pdf_index()
    
    # Try each incomplete PDF starting from after the last one we processed
    for offset in range(len(incomplete)):
        idx = (last_index + offset) % len(incomplete)
        pdf_name = incomplete[idx]
        info = state[pdf_name]
        total = info['total_pages']
        extracted = set(info['extracted_pages'])
        
        for page in range(1, total + 1):
            if page not in extracted:
                # Move the pointer to the NEXT pdf for the next call
                save_last_pdf_index((idx + 1) % len(incomplete))
                return pdf_name, page
        
        # All pages done, mark completed
        info['status'] = 'completed'
        save_state(state)
    
    return None, None

def run_pipeline():
    print("Starting Extraction Pipeline (Round-Robin - Equal Weightage)...")
    while True:
        state = load_state()
        pdf_name, page_num = get_next_task_round_robin(state)
        
        if not pdf_name:
            print("All PDFs processed. Pipeline finished.")
            break
            
        total = state[pdf_name]['total_pages']
        done = len(state[pdf_name]['extracted_pages'])
        print(f"[{pdf_name}] Extracting page {page_num}/{total} (done: {done})...")
        
        if state[pdf_name]['status'] == 'pending':
            state[pdf_name]['status'] = 'in_progress'
            save_state(state)
            
        # Try to extract
        result = extract_page(pdf_name, page_num)
        
        if result:
            notes = result.get('notes', [])
            questions = result.get('questions', [])
            
            # Tag the source
            for n in notes:
                n['source_pdf'] = pdf_name
                n['source_page'] = page_num
                
            for q in questions:
                q['source_pdf'] = pdf_name
                q['source_page'] = page_num
                
            append_to_db(NOTES_DB, notes)
            append_to_db(QUESTIONS_DB, questions)
            
            # Mark page as done
            state = load_state()  # Reload just in case
            state[pdf_name]['extracted_pages'].append(page_num)
            
            # Check if finished
            if len(state[pdf_name]['extracted_pages']) >= state[pdf_name]['total_pages']:
                state[pdf_name]['status'] = 'completed'
                
            save_state(state)
            print(f"Successfully processed {pdf_name} page {page_num}. Added {len(notes)} notes and {len(questions)} questions.")
            
            # Small sleep to be nice to API
            time.sleep(2)
        else:
            print(f"Failed to process {pdf_name} page {page_num}. Likely rate limited or API error.")
            print("Sleeping for 60 seconds before retrying...")
            time.sleep(60)

if __name__ == "__main__":
    run_pipeline()

