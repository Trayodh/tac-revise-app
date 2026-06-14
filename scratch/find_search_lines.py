with open('app.js', 'r', encoding='utf-8', errors='ignore') as f:
    for i, line in enumerate(f, 1):
        if 'notes-search-input' in line or 'search-input' in line:
            print(f"{i}: {line.strip()}")
