with open("index.html", "r", encoding="utf-8") as f:
    content = f.read()

import re
lines = content.splitlines()
for idx, line in enumerate(lines):
    if "cbt-mock-hub" in line:
        print(f"Line {idx+1}: {line.strip()}")
