with open('index.css', 'r', encoding='utf-8', errors='ignore') as f:
    for i, line in enumerate(f, 1):
        if 'exam-type' in line or 'badge' in line:
            print(f"{i}: {line.strip()}")
