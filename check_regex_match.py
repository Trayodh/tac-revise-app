import re

backup_path = r"C:\Users\Trayodh Khandalkar\.gemini\antigravity-ide\scratch\backup\app.js"
with open(backup_path, "r", encoding="utf-8") as f:
    content = f.read()

matches = list(re.finditer(r"</ul>\s*`\s*}", content))
print(f"Number of matches in backup: {len(matches)}")
for idx, match in enumerate(matches):
    start = max(0, match.start() - 200)
    end = min(len(content), match.end() + 200)
    print(f"--- Match {idx + 1} at position {match.start()} ---")
    print(content[start:end])
