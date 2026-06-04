with open("index.html", "r", encoding="utf-8") as f:
    for line_num, line in enumerate(f, 1):
        if 'id=' in line and 'screen' in line:
            print(f"{line_num}: {line.strip()}")
