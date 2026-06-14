with open("app.js", "r", encoding="utf-8") as f:
    content = f.read()

import re
lines = content.splitlines()
for idx, line in enumerate(lines):
    if "cbt-mock-list" in line or "renderCbtHub" in line or "cbt-grid" in line:
        print(f"Line {idx+1}: {line.strip()}")
