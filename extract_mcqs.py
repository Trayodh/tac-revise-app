import fitz
import re
import json
import os

pdf_path = r"C:\Users\Trayodh Khandalkar\.gemini\antigravity-ide\brain\b4437a40-c0d2-4f79-b5e2-56a07cf452bc\media__1784007996102.pdf"

# Open the PDF
doc = fitz.open(pdf_path)

# The section "Multiple Choice Questions With Answer And Explanation" is roughly pages 41-150 (1-indexed)
# Let's extract all text from these pages
full_text = ""
for i in range(40, 150): # Pages 41 to 150
    if i < len(doc):
        text = doc[i].get_text()
        # Clean headers and footers
        text = re.sub(r'shop\.ssbcrack\.com\n', '', text)
        text = re.sub(r'\n\d+\s*\|\s*P\s*a\s*g\s*e\n', '\n', text)
        text = re.sub(r'shop\.ssbcrack\.com', '', text)
        full_text += text + "\n"

# Clean up multiple newlines
full_text = re.sub(r'\n{3,}', '\n\n', full_text)

# Regex to find questions. 
# Format:
# 1. Question text...
# [A] Option
# [B] Option
# [C] Option
# [D] Option
# Answer: B [Option] - Explanation...
# Or Answer: B. Option - Explanation...

# A general pattern that catches a number followed by a dot, up to the word "Answer:"
pattern = r'(?P<num>\d+)\.\s+(?P<question>.*?)(?P<options>(?:(?:\[[A-D]\]|[A-D]\.|[a-d]\))\s*.*?\n)+)Answer:\s*(?P<ans_letter>[A-D])[\.\s\[\]]*(?P<ans_text>.*?)(?=\n\d+\.|\Z)'

matches = re.finditer(pattern, full_text, re.IGNORECASE | re.DOTALL)

questions = []
for match in matches:
    q_num = match.group('num')
    q_text = match.group('question').strip().replace('\n', ' ')
    
    # Extract options
    options_raw = match.group('options')
    # find all lines starting with [A], A., (a) etc.
    opt_pattern = r'(?:\[([A-D])\]|([A-D])\.|([a-d])\))\s*(.*)'
    opts = re.findall(opt_pattern, options_raw, re.IGNORECASE)
    
    parsed_options = []
    for o in opts:
        # o is a tuple like ('A', '', '', 'Text')
        text = o[3].strip()
        parsed_options.append(text)
        
    ans_letter = match.group('ans_letter').upper()
    ans_text = match.group('ans_text').strip().replace('\n', ' ')
    
    # Convert letter to index
    if ans_letter == 'A': correct_idx = 0
    elif ans_letter == 'B': correct_idx = 1
    elif ans_letter == 'C': correct_idx = 2
    elif ans_letter == 'D': correct_idx = 3
    else: continue
    
    # If we didn't find exactly 4 options, skip or log
    if len(parsed_options) < 2:
        continue
        
    questions.append({
        "question": q_text,
        "options": parsed_options,
        "correct": correct_idx,
        "explanation": ans_text,
        "topicId": "mixed_science_pdf"
    })

print(f"Extracted {len(questions)} questions.")

# Now we need to append these to extra_bank_data.js
js_file = r"C:\Users\Trayodh Khandalkar\.gemini\antigravity-ide\scratch\defence-exams-revision\extra_bank_data.js"
with open(js_file, 'r', encoding='utf-8') as f:
    js_content = f.read()

# js_content is like `window.EXTRA_QUESTION_BANK = { "gs": [ ... ] };`
# We can find the "gs": [ array and inject these items.
# To be safe, we'll parse the JSON part, update it, and write it back.

json_str = js_content.replace('window.EXTRA_QUESTION_BANK = ', '').strip()
if json_str.endswith(';'):
    json_str = json_str[:-1]

try:
    bank_data = json.loads(json_str)
    if 'gs' not in bank_data:
        bank_data['gs'] = []
    
    bank_data['gs'].extend(questions)
    
    new_js_content = f"window.EXTRA_QUESTION_BANK = {json.dumps(bank_data, indent=2)};\n"
    with open(js_file, 'w', encoding='utf-8') as f:
        f.write(new_js_content)
    print("Successfully appended questions to extra_bank_data.js")
except Exception as e:
    print(f"Failed to parse or write JSON: {e}")
