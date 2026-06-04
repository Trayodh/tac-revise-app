import re

backup_path = r"C:\Users\Trayodh Khandalkar\.gemini\antigravity-ide\scratch\backup\app.js"
with open(backup_path, "r", encoding="utf-8") as f:
    content = f.read()

# Let's count line numbers
def get_line_num(pos):
    return content.count("\n", 0, pos) + 1

# Try a few regex patterns
patterns = [
    r"</ul>\s*`\s*}",
    r"</ul>\s*`\s*,",
    r"</ul>\s*`\s*;",
    r"</ul>\s*`"
]

for pat in patterns:
    matches = list(re.finditer(pat, content))
    print(f"Pattern {pat}: {len(matches)} matches")
    for m in matches:
        print(f"  Line {get_line_num(m.start())}")
