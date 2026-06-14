with open('app.js', 'r', encoding='utf-8', errors='ignore') as f:
    for i, line in enumerate(f, 1):
        if '.pdf' in line.lower() or 'pdfjs' in line.lower():
            print(f"{i}: {line.strip()}")
