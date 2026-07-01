import json

def find_matching_bracket(text, start_idx):
    count = 0
    in_string = False
    escape = False
    
    for i in range(start_idx, len(text)):
        char = text[i]
        if escape: escape = False; continue
        if char == '\\': escape = True; continue
        if char == '"' and not escape: in_string = not in_string; continue
        
        if not in_string:
            if char == '[': count += 1
            elif char == ']':
                count -= 1
                if count == 0: return i
    return -1

with open('data.js', 'r', encoding='utf-8') as f:
    data_js = f.read()

start_marker = "CBT_EXAMS_DATABASE = "
idx = data_js.find(start_marker)
array_start = data_js.find('[', idx)
array_end = find_matching_bracket(data_js, array_start)
json_str = data_js[array_start:array_end+1]

cbt_db = json.loads(json_str)

cds_mocks = [m for m in cbt_db if m.get('exam') == 'CDS']
print(f"Total CDS mocks: {len(cds_mocks)}")
subjects = set(m.get('subject') for m in cds_mocks)
print(f"CDS subjects found: {subjects}")

# Rename 'Mathematics' to 'Elementary Mathematics'
updated_count = 0
for m in cbt_db:
    if m.get('exam') == 'CDS' and m.get('subject') == 'Mathematics':
        m['subject'] = 'Elementary Mathematics'
        updated_count += 1

print(f"Updated {updated_count} CDS Mathematics mocks to Elementary Mathematics.")

new_json_str = json.dumps(cbt_db, indent=2)
new_data_js = data_js[:array_start] + new_json_str + data_js[array_end+1:]

with open('data.js', 'w', encoding='utf-8') as f:
    f.write(new_data_js)

print("data.js successfully updated!")
