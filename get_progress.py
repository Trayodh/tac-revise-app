import json
import os
import glob
import fitz

def get_stats():
    ps_file = "pipeline_state.json"
    notes_file = "notes_database.json"
    questions_file = "question_database.json"

    ps = json.load(open(ps_file, encoding='utf-8')) if os.path.exists(ps_file) else {}
    notes = json.load(open(notes_file, encoding='utf-8')) if os.path.exists(notes_file) else []
    questions = json.load(open(questions_file, encoding='utf-8')) if os.path.exists(questions_file) else []

    gross_pages = sum(v.get('total_pages', 0) for v in ps.values())
    total_extracted = sum(len(v.get('extracted_pages', [])) for v in ps.values())
    
    completed_books = []
    in_progress_books = []
    unstarted_books = []

    for k, v in ps.items():
        done = len(v.get('extracted_pages', []))
        total = v.get('total_pages', 0)
        if total > 0 and done >= total:
            completed_books.append((k, done, total))
        elif done > 0:
            in_progress_books.append((k, done, total))
        else:
            unstarted_books.append((k, done, total))

    # Calculate total words in notes
    total_words = 0
    for n in notes:
        content = n.get('content', '')
        if isinstance(content, str):
            total_words += len(content.split())
        elif isinstance(content, dict):
            total_words += len(str(content).split())

    pct = (total_extracted / gross_pages * 100) if gross_pages > 0 else 0

    print("==================================================")
    print("      JAYASTRA DEFENCE REVISION PROGRESS          ")
    print("==================================================")
    print(f"Gross Library Pages:     {total_extracted} / {gross_pages} ({pct:.2f}%)")
    print(f"100% Completed Books:    {len(completed_books)} / {len(ps)}")
    print(f"In-Progress Books:       {len(in_progress_books)}")
    print(f"Unstarted Books:         {len(unstarted_books)}")
    print(f"Total Theory Notes:      {len(notes):,} notes (~{total_words:,} words)")
    print(f"Total Practice MCQs:     {len(questions):,} questions")
    print("==================================================")

if __name__ == '__main__':
    get_stats()
