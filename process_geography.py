import os
import re
import json

base_dir = r"C:\Users\Trayodh Khandalkar\.gemini\antigravity-ide\scratch\defence-exams-revision\Pathfinder_Elite\modules\Geography"

files = [
    "Environmental_Geography_and_MCQs.md",
    "Indian_Geography_Resources_and_MCQs.md",
    "World_Geography_Cosmology_and_MCQs.md"
]

all_mcqs = []

def parse_mcq_block(text):
    # Split text by numbers followed by dot and space
    parts = re.split(r'(?<!\d)(\d+)\.\s+', text)
    if len(parts) < 3: return []
    
    mcqs = []
    for i in range(1, len(parts), 2):
        num = parts[i]
        block = parts[i+1]
        
        opt_match = re.search(r'\([aA]\)', block)
        if not opt_match:
            continue
            
        question_text = block[:opt_match.start()].strip()
        options_text = block[opt_match.start():]
        
        opts = []
        for opt_char in ['a', 'b', 'c', 'd']:
            pattern = rf'\({opt_char}\)\s*(.*?)(?=\([a-d]\)|\Z)'
            m = re.search(pattern, options_text, re.IGNORECASE | re.DOTALL)
            if m:
                opts.append(m.group(1).strip())
            else:
                opts.append(f"Option {opt_char}")
                
        if len(opts) == 4:
            mcqs.append({
                "question": question_text.replace('\n', ' '),
                "options": opts,
                "correct": 0, 
                "explanation": "",
                "topicId": "geography"
            })
    return mcqs


for f in files:
    file_path = os.path.join(base_dir, f)
    if not os.path.exists(file_path):
        print(f"File not found: {f}")
        continue
        
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
        
    split_index = content.find("PRACTICE EXERCISE")
    if split_index == -1:
        split_index = content.find("QUESTIONS FROM CDS EXAM")
        
    if split_index != -1:
        notes = content[:split_index].strip()
        mcqs_text = content[split_index:]
        
        new_filename = f.replace("_and_MCQs", "")
        new_path = os.path.join(base_dir, new_filename)
        
        with open(new_path, 'w', encoding='utf-8') as new_file:
            new_file.write(notes)
            
        print(f"Created {new_filename} with {len(notes)} bytes.")
        
        extracted = parse_mcq_block(mcqs_text)
        all_mcqs.extend(extracted)
        print(f"Extracted {len(extracted)} MCQs from {f}")
        
        os.remove(file_path)
    else:
        print(f"Could not find split point in {f}")

js_file = r"C:\Users\Trayodh Khandalkar\.gemini\antigravity-ide\scratch\defence-exams-revision\extra_bank_data.js"
if os.path.exists(js_file):
    with open(js_file, 'r', encoding='utf-8') as f:
        js_content = f.read()

    json_str = js_content.replace('window.EXTRA_QUESTION_BANK = ', '').strip()
    if json_str.endswith(';'):
        json_str = json_str[:-1]
        
    try:
        bank_data = json.loads(json_str)
        if 'gs' not in bank_data:
            bank_data['gs'] = []
            
        bank_data['gs'].extend(all_mcqs)
        
        new_js = f"window.EXTRA_QUESTION_BANK = {json.dumps(bank_data, indent=2)};\n"
        with open(js_file, 'w', encoding='utf-8') as f:
            f.write(new_js)
        print(f"Added {len(all_mcqs)} questions to extra_bank_data.js")
    except Exception as e:
        print(f"Error parsing JSON: {e}")
