with open('server.js', 'r', encoding='utf-8', errors='ignore') as f:
    for i, line in enumerate(f, 1):
        if 'static' in line or 'fs.' in line or 'res.send' in line or 'res.file' in line or 'mime' in line or 'pdf' in line:
            print(f"{i}: {line.strip()}")
