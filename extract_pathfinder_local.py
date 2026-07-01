import fitz
import json
import re
import os

def extract_questions_from_pdf(pdf_path):
    print(f"Opening {pdf_path}...")
    try:
        doc = fitz.open(pdf_path)
    except Exception as e:
        print(f"Error opening PDF: {e}")
        return []

    questions = []
    
    # A simple regex to find lines starting with "1. " or "2. " followed by text, and (a) (b) (c) (d) options.
    # Since the text is highly disjointed, we will just accumulate text until we find 4 options.
    # This is a highly heuristic parser.
    
    current_q = None
    
    # Let's read all text into a single string for easier regex scanning, 
    # but we might hit memory issues if it's too big, so we'll do it page by page.
    for i in range(50, len(doc)): # skip early intro pages
        text = doc[i].get_text()
        
        # very basic heuristic for Q num
        matches = re.finditer(r'(?m)^(\d{1,3})\.\s+(.*?)(?=\n\d{1,3}\.\s+|\Z)', text, re.DOTALL)
        
        for match in matches:
            block = match.group(0)
            
            # Look for options (a), (b), (c), (d)
            opt_a = re.search(r'\(a\)\s+(.*?)(?=\(b\)|$)', block, re.DOTALL)
            opt_b = re.search(r'\(b\)\s+(.*?)(?=\(c\)|$)', block, re.DOTALL)
            opt_c = re.search(r'\(c\)\s+(.*?)(?=\(d\)|$)', block, re.DOTALL)
            opt_d = re.search(r'\(d\)\s+(.*?)(?=\n_|\Z)', block, re.DOTALL)
            
            if opt_a and opt_b and opt_c and opt_d:
                q_text = block[:opt_a.start()].strip()
                q_text = re.sub(r'^\d{1,3}\.\s+', '', q_text).replace('\n', ' ').strip()
                
                a_str = opt_a.group(1).replace('\n', ' ').strip()
                b_str = opt_b.group(1).replace('\n', ' ').strip()
                c_str = opt_c.group(1).replace('\n', ' ').strip()
                d_str = opt_d.group(1).replace('\n', ' ').strip()
                
                # Check for answer key in the text (often marked with _ (a) or similar in pathfinder)
                ans_match = re.search(r'\n_\s*\(([a-d])\)', block)
                correct = 0
                if ans_match:
                    ans = ans_match.group(1).lower()
                    correct = ord(ans) - ord('a')
                    
                if len(q_text) > 10 and len(a_str) > 0 and len(b_str) > 0:
                    questions.append({
                        "question": q_text,
                        "options": [a_str, b_str, c_str, d_str],
                        "correct": correct,
                        "explanation": "Extracted from Pathfinder.",
                        "topicId": "mixed" # We'll just throw them in GS/Mixed
                    })

    doc.close()
    print(f"Extracted {len(questions)} questions from Pathfinder.")
    return questions

def main():
    pdf_path = "pathfinder-cds-combined-defence-expertsarihant-90f15b25.pdf"
    if not os.path.exists(pdf_path):
        print(f"File {pdf_path} not found.")
        return
        
    qs = extract_questions_from_pdf(pdf_path)
    
    if qs:
        os.makedirs("question_banks", exist_ok=True)
        with open("question_banks/pathfinder_bank.json", "w", encoding="utf-8") as f:
            json.dump({"gs": qs}, f, indent=2)
            
        print("Saved to question_banks/pathfinder_bank.json")

if __name__ == '__main__':
    main()
