import re

with open('afcat_reasoning_text.txt', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if re.search(r'CHAPTER', line, re.IGNORECASE) and re.search(r'ANALOGY|CLASSIFICATION|SERIES|CODING|DIRECTION|CLOCK|VENN|SYLLOGISM', line, re.IGNORECASE):
        print(f"Line {i}: {line.strip()}")
