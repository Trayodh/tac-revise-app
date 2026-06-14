with open('app.js', 'r', encoding='utf-8', errors='ignore') as f:
    for i, line in enumerate(f, 1):
        if 'chapter.topics.filter' in line:
            print(f"{i}: {line.strip()}")
