import fitz
import re
import json

pdf_path = r"C:\Users\Trayodh Khandalkar\.gemini\antigravity-ide\brain\b4437a40-c0d2-4f79-b5e2-56a07cf452bc\media__1784007996102.pdf"
doc = fitz.open(pdf_path)

def get_text(start_page, end_page):
    text = ""
    for i in range(start_page, end_page + 1):
        if i < len(doc):
            t = doc[i].get_text()
            t = re.sub(r'shop\.ssbcrack\.com\n', '', t)
            t = re.sub(r'\n\d+\s*\|\s*P\s*a\s*g\s*e\n', '\n', t)
            t = re.sub(r'shop\.ssbcrack\.com', '', t)
            text += t + "\n"
    return re.sub(r'\n{3,}', '\n\n', text)

def parse_pyqs(q_start, q_end, sol_start, sol_end, exam_tag):
    q_text = get_text(q_start, q_end)
    sol_text = get_text(sol_start, sol_end)
    
    # parse solutions
    # format: "1. (b) The nature of the lens..."
    sol_text = "\n" + sol_text
    sol_parts = re.split(r'\n(\d+)\.\s*\(([a-d])\)', sol_text, flags=re.IGNORECASE)
    
    solutions = dict()
    # sol_parts will be: [0] = pre-text, [1] = "1", [2] = "b", [3] = " The nature of..."
    for i in range(1, len(sol_parts), 3):
        try:
            num = int(sol_parts[i])
            ans = sol_parts[i+1].upper()
            expl = sol_parts[i+2].strip().replace('\n', ' ')
            
            if ans == 'A': idx = 0
            elif ans == 'B': idx = 1
            elif ans == 'C': idx = 2
            elif ans == 'D': idx = 3
            else: continue
            
            solutions[num] = {"idx": idx, "expl": expl}
        except:
            pass
            
    # parse questions
    q_text = "\n" + q_text
    parts = re.split(r'\n(\d+)\.\s*', q_text)
    
    parsed = []
    
    for i in range(1, len(parts), 2):
        num = int(parts[i])
        block = parts[i+1]
        
        # Remove exam tags like [2016-II] from the block
        block = re.sub(r'\[20\d\d(?:-[IV]+|-[12])?\]', '', block)
        
        # Options usually start with (a), (b), (c), (d)
        opt_start_match = re.search(r'(?m)^\([a-d]\)\s+', block, re.IGNORECASE)
        if not opt_start_match:
            continue
            
        question = block[:opt_start_match.start()].strip().replace('\n', ' ')
        options_raw = block[opt_start_match.start():]
        
        opt_pattern = r'(?m)^\([a-d]\)\s*(.*)'
        opts = re.findall(opt_pattern, options_raw, re.IGNORECASE)
        parsed_opts = [o.strip() for o in opts if o.strip()]
        
        if num in solutions and len(parsed_opts) >= 2:
            parsed.append({
                "question": question,
                "options": parsed_opts[:4],
                "correct": solutions[num]["idx"],
                "explanation": solutions[num]["expl"],
                "topicId": f"pyq_{exam_tag}"
            })
    return parsed

# The actual pages (1-indexed) in the PDF:
# NDA: Qs 238-250 (0-idx: 237-249), Sols 251-261 (0-idx: 250-260)
# CDS: Qs 262-266 (0-idx: 261-265), Sols 267-282 (0-idx: 266-281)
# AFCAT: Qs 283-287 (0-idx: 282-286), Sols 288-291 (0-idx: 287-290)

nda_qs = parse_pyqs(237, 249, 250, 260, "nda")
cds_qs = parse_pyqs(261, 265, 266, 281, "cds")
afcat_qs = parse_pyqs(282, 286, 287, 290, "afcat")

all_qs = nda_qs + cds_qs + afcat_qs
print(f"Extracted {len(nda_qs)} NDA, {len(cds_qs)} CDS, {len(afcat_qs)} AFCAT MCQs.")

js_file = r"C:\Users\Trayodh Khandalkar\.gemini\antigravity-ide\scratch\defence-exams-revision\extra_bank_data.js"
with open(js_file, 'r', encoding='utf-8') as f:
    js_content = f.read()

json_str = js_content.replace('window.EXTRA_QUESTION_BANK = ', '').strip()
if json_str.endswith(';'):
    json_str = json_str[:-1]

try:
    bank_data = json.loads(json_str)
    if 'gs' not in bank_data:
        bank_data['gs'] = []
    
    # Remove older pyq runs if any
    bank_data['gs'] = [q for q in bank_data['gs'] if not str(q.get('topicId', '')).startswith('pyq_')]
    
    bank_data['gs'].extend(all_qs)
    
    new_js_content = f"window.EXTRA_QUESTION_BANK = {json.dumps(bank_data, indent=2)};\n"
    with open(js_file, 'w', encoding='utf-8') as f:
        f.write(new_js_content)
    print("Successfully appended PYQ questions to extra_bank_data.js")
except Exception as e:
    print(f"Failed to parse or write JSON: {e}")
