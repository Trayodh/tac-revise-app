with open('afcat_reasoning_text.txt', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if 'analogy' in line.lower():
        print(f"Line {i}: {line.strip()}")
