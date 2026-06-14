import re
import sys
sys.stdout.reconfigure(encoding='utf-8')

with open("data.js", "r", encoding="utf-8") as f:
    content = f.read()

# Locate CBT_EXAMS_DATABASE
start_idx = content.find("const CBT_EXAMS_DATABASE =")
# Let's extract the array block (from the first [ to the matching ])
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

# Find titles, subjects, exams inside this array block
titles = re.findall(r'"title":\s*"([^"]+)"', db_text)
subjects = re.findall(r'"subject":\s*"([^"]+)"', db_text)
exams = re.findall(r'"exam":\s*"([^"]+)"', db_text)
ids = re.findall(r'"id":\s*"([^"]+)"', db_text)

print(f"Total CBT Mock Tests found: {len(titles)}")
for i, (tid, t, s, e) in enumerate(zip(ids, titles, subjects, exams)):
    print(f"{i+1}. ID: {tid} | Exam: {e} | Subject: {s} | Title: {t}")
