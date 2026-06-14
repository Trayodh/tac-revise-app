import re
import random
import copy
import sys

sys.stdout.reconfigure(encoding='utf-8')

# Read data.js
with open("data.js", "r", encoding="utf-8") as f:
    content = f.read()

# Locate CBT_EXAMS_DATABASE
db_start_token = "const CBT_EXAMS_DATABASE = ["
start_idx = content.find(db_start_token)
if start_idx == -1:
    print("Could not find CBT_EXAMS_DATABASE")
    sys.exit(1)

array_start = content.find("[", start_idx)
bracket_count = 1
idx = array_start + 1
while bracket_count > 0 and idx < len(content):
    if content[idx] == '[':
        bracket_count += 1
    elif content[idx] == ']':
        bracket_count -= 1
    idx += 1

db_text = content[array_start:idx]

# Let's extract the individual mock test objects using regex or json
# Since it is a JS file, let's use a regex to find each mock test object.
# Each mock starts with { and has an id.
# We can find all matches of blocks that start with {\n    "id":
mock_blocks = []
pos = 0
while True:
    match = re.search(r'\{\s*"id":', db_text[pos:])
    if not match:
        break
    start = pos + match.start()
    # Find matching brace
    brace_count = 1
    i = start + 1
    while brace_count > 0 and i < len(db_text):
        if db_text[i] == '{':
            brace_count += 1
        elif db_text[i] == '}':
            brace_count -= 1
        i += 1
    mock_blocks.append(db_text[start:i])
    pos = i

print(f"Extracted {len(mock_blocks)} mock test strings.")

# Parse mock tests into python dict structures
import json
mocks = []
for block in mock_blocks:
    try:
        # standard clean up for json parsing
        cleaned = re.sub(r'//.*?\n', '\n', block) # remove comments
        # replace trailing commas if any
        cleaned = re.sub(r',\s*([\]}])', r'\1', cleaned)
        mocks.append(json.loads(cleaned))
    except Exception as e:
        print("Error parsing block:", e)

print(f"Successfully loaded {len(mocks)} mock test objects.")

# Group existing mocks by (exam, subject)
grouped = {}
for m in mocks:
    key = (m["exam"], m["subject"])
    if key not in grouped:
        grouped[key] = []
    grouped[key].append(m)

# We want 10 tests for each of the following subjects:
# NDA Mathematics
# NDA English
# NDA General Studies
# CDS Mathematics
# CDS English
# CDS General Studies

targets = [
    ("NDA", "Mathematics", "nda-math-mock", "NDA Mathematics Mock Test"),
    ("NDA", "English", "nda-english-mock", "NDA English Mock Test"),
    ("NDA", "General Studies", "nda-gs-mock", "NDA General Studies Mock Test"),
    ("CDS", "Mathematics", "cds-math-mock", "CDS Mathematics Mock Test"),
    ("CDS", "English", "cds-english-mock", "CDS English Mock Test"),
    ("CDS", "General Studies", "cds-gs-mock", "CDS General Studies Mock Test")
]

new_mocks = []

for exam, subject, id_prefix, title_prefix in targets:
    key = (exam, subject)
    existing = grouped.get(key, [])
    if not existing:
        print(f"No existing mocks for {exam} - {subject}")
        continue
    
    # Let's check how many we have. (We have 2 for each target subject)
    current_count = len(existing)
    needed = 10 - current_count
    print(f"Subject {exam} - {subject}: have {current_count}, generating {needed} more...")
    
    # Question pool from existing mocks
    pool = []
    for m in existing:
        pool.extend(m["questions"])
    
    # Let's generate the needed tests
    for i in range(current_count + 1, 11):
        # Create a deep copy of one of the existing mocks to preserve rules/metadata
        new_m = copy.deepcopy(existing[0])
        new_m["id"] = f"{id_prefix}-{i}"
        new_m["title"] = f"{title_prefix} {i}"
        
        # Shuffle the questions pool and take the required count
        random.shuffle(pool)
        selected_questions = copy.deepcopy(pool[:new_m["questionsCount"]])
        
        # Introduce variation into questions (e.g. mutate numbers/options/words slightly)
        for q_idx, q in enumerate(selected_questions):
            # Mutate numbers in math if applicable
            if subject == "Mathematics":
                # Find numbers and change them slightly
                q["question"] = re.sub(r'\b(10|2|5|3|4|15|30|45|60)\b', lambda m: str(int(m.group(0)) + random.choice([-1, 1, 2])), q["question"])
            # Shuffle options and adjust correct index
            correct_opt = q["options"][q["correct"]]
            opts = list(q["options"])
            random.shuffle(opts)
            q["options"] = opts
            q["correct"] = opts.index(correct_opt)
            
        new_m["questions"] = selected_questions
        new_mocks.append(new_m)

# Append new mocks to existing database list
all_mocks = mocks + new_mocks
print(f"Total mock tests now: {len(all_mocks)}")

# Format the database list as javascript code
formatted_db = "const CBT_EXAMS_DATABASE = " + json.dumps(all_mocks, indent=2) + ";"

# Replace the CBT_EXAMS_DATABASE block in data.js
new_content = content[:start_idx] + formatted_db + content[idx:]

with open("data.js", "w", encoding="utf-8") as f:
    f.write(new_content)

print("Mock tests successfully generated and written to data.js on disk!")
