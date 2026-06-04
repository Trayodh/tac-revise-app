with open("app.js", "r", encoding="utf-8") as f:
    lines = f.readlines()

for idx, line in enumerate(lines):
    if "cbt-btn-save-next" in line:
        print(f"Line {idx+1}: {line.strip()}")
