import json

def find_matching_bracket(text, start_idx):
    count = 0
    in_string = False
    escape = False
    
    for i in range(start_idx, len(text)):
        char = text[i]
        
        if escape:
            escape = False
            continue
            
        if char == '\\':
            escape = True
            continue
            
        if char == '"' and not escape:
            in_string = not in_string
            continue
            
        if not in_string:
            if char == '[':
                count += 1
            elif char == ']':
                count -= 1
                if count == 0:
                    return i
    return -1

with open('data.js', 'r', encoding='utf-8') as f:
    data_js = f.read()

start_marker = "CBT_EXAMS_DATABASE = "
idx = data_js.find(start_marker)
if idx == -1:
    print("Could not find CBT_EXAMS_DATABASE")
    exit(1)

array_start = data_js.find('[', idx)
array_end = find_matching_bracket(data_js, array_start)

if array_end == -1:
    print("Could not find end of array")
    exit(1)

json_str = data_js[array_start:array_end+1]

try:
    cbt_db = json.loads(json_str)
except json.JSONDecodeError as e:
    print("Failed to decode JSON:", e)
    exit(1)

original_len = len(cbt_db)
# Remove all AFCAT mocks
cbt_db = [m for m in cbt_db if m.get('exam') != 'AFCAT']
print(f"Removed {original_len - len(cbt_db)} existing AFCAT mocks.")

# Load Question Bank
try:
    with open('question_banks/cds_pyq_bank.json', 'r', encoding='utf-8') as f:
        bank = json.load(f)
except Exception as e:
    print("Failed to load question bank:", e)
    bank = {}

afcat_questions = bank.get('afcat', [])
print(f"Found {len(afcat_questions)} AFCAT questions in bank.")

for i, q in enumerate(afcat_questions):
    if not q.get('id'):
        q['id'] = f"afcat-q-{i}"
    if not q.get('topicId'):
        q['topicId'] = "mixed"

PAPER_SIZE = 100
paper_count = len(afcat_questions) // PAPER_SIZE

if paper_count == 0 and len(afcat_questions) > 0:
    paper_count = 1

for i in range(paper_count):
    start = i * PAPER_SIZE
    end = start + PAPER_SIZE
    slice_q = afcat_questions[start:end]
    if not slice_q:
        break
    
    new_mock = {
        "id": f"afcat-combined-mock-{i + 1}",
        "exam": "AFCAT",
        "subject": "Combined",
        "title": f"AFCAT Full Mock Test {i + 1}",
        "duration": 120,
        "questionsCount": len(slice_q),
        "rules": {
            "correctMarks": 3,
            "incorrectMarks": -1,
            "examType": "AFCAT"
        },
        "questions": slice_q
    }
    cbt_db.append(new_mock)

print(f"Created {paper_count} new Full Combined AFCAT mocks.")

# Rebuild data.js
new_json_str = json.dumps(cbt_db, indent=2)
new_data_js = data_js[:array_start] + new_json_str + data_js[array_end+1:]

with open('data.js', 'w', encoding='utf-8') as f:
    f.write(new_data_js)

print("data.js successfully updated!")
