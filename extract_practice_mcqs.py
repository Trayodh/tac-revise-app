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

def parse_questions_and_key(q_start, q_end, key_start, key_end):
    q_text = get_text(q_start, q_end)
    key_text = get_text(key_start, key_end)
    
    # parse keys
    key_pattern = r'(\d+)\.\s*([A-D])'
    keys = dict()
    for m in re.finditer(key_pattern, key_text, re.IGNORECASE):
        num = int(m.group(1))
        ans = m.group(2).upper()
        if ans == 'A': idx = 0
        elif ans == 'B': idx = 1
        elif ans == 'C': idx = 2
        elif ans == 'D': idx = 3
        else: continue
        keys[num] = idx
        
    # split by question numbers: "\n1. ", "\n2. "
    # We can pad q_text with a leading newline
    q_text = "\n" + q_text
    
    # Use re.split to split by newline followed by a number and a dot
    parts = re.split(r'\n(\d+)\.\s*', q_text)
    
    parsed = []
    
    # parts[0] is everything before the first "1. "
    # parts[1] is "1", parts[2] is the text for Q1
    # parts[3] is "2", parts[4] is the text for Q2...
    
    for i in range(1, len(parts), 2):
        num = int(parts[i])
        block = parts[i+1]
        
        # Now block contains question + options.
        # Find where options start. Options usually start with (A), A., (a), a.
        opt_start_match = re.search(r'(?m)^(?:\([A-D]\)|[A-D]\.)\s+', block, re.IGNORECASE)
        if not opt_start_match:
            continue
            
        question = block[:opt_start_match.start()].strip().replace('\n', ' ')
        options_raw = block[opt_start_match.start():]
        
        # split options_raw into exactly the lines starting with options
        opt_pattern = r'(?m)^(?:\([A-D]\)|[A-D]\.)\s*(.*)'
        opts = re.findall(opt_pattern, options_raw, re.IGNORECASE)
        parsed_opts = [o.strip() for o in opts if o.strip()]
        
        if num in keys and len(parsed_opts) >= 2:
            parsed.append({
                "question": question,
                "options": parsed_opts[:4],
                "correct": keys[num],
                "explanation": "",
                "topicId": "mixed_practice"
            })
    return parsed

physics_qs = parse_questions_and_key(152, 179, 180, 180)
chem_qs = parse_questions_and_key(181, 206, 207, 207)
bio_qs = parse_questions_and_key(208, 235, 236, 236)

all_qs = physics_qs + chem_qs + bio_qs
print(f"Extracted {len(physics_qs)} Physics, {len(chem_qs)} Chemistry, {len(bio_qs)} Biology MCQs.")

# Note: Since I previously ran this, it added 3 questions. I'll just clear those 3 or just append the new 600.
js_file = r"C:\Users\Trayodh Khandalkar\.gemini\antigravity-ide\scratch\defence-exams-revision\extra_bank_data.js"
with open(js_file, 'r', encoding='utf-8') as f:
    js_content = f.read()

json_str = js_content.replace('window.EXTRA_QUESTION_BANK = ', '').strip()
if json_str.endswith(';'):
    json_str = json_str[:-1]

try:
    bank_data = json.loads(json_str)
    
    # Optional: we can remove the 3 bad questions from earlier to be pristine.
    # But for now let's just append.
    if 'gs' not in bank_data:
        bank_data['gs'] = []
    
    # Actually let's remove questions with "topicId": "mixed_practice" since we are replacing them
    bank_data['gs'] = [q for q in bank_data['gs'] if q.get('topicId') != 'mixed_practice']
    
    bank_data['gs'].extend(all_qs)
    
    new_js_content = f"window.EXTRA_QUESTION_BANK = {json.dumps(bank_data, indent=2)};\n"
    with open(js_file, 'w', encoding='utf-8') as f:
        f.write(new_js_content)
    print("Successfully appended questions to extra_bank_data.js")
except Exception as e:
    print(f"Failed to parse or write JSON: {e}")
