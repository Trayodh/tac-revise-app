import re
import sys
sys.stdout.reconfigure(encoding='utf-8')

with open("data.js", "r", encoding="utf-8") as f:
    content = f.read()

start_idx = content.find("const CBT_EXAMS_DATABASE =")
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

# Let's split by major mock test boundaries
# An easy way is to find each mock test title
titles = re.findall(r'"title":\s*"([^"]+)"', db_text)
print(f"Parsed {len(titles)} test titles.")

# Let's count occurrences of "question": in the segments between the titles
segments = re.split(r'"title":\s*"[^"]+"', db_text)
# The first segment is before the first title, so we skip it
for i, title in enumerate(titles):
    seg = segments[i+1]
    # Count how many question keys are in this segment
    q_count = len(re.findall(r'"question":', seg))
    print(f"Mock {i+1}: '{title}' has {q_count} questions.")
