backup_path = r"C:\Users\Trayodh Khandalkar\.gemini\antigravity-ide\scratch\backup\app.js"
with open(backup_path, "r", encoding="utf-8") as f:
    content = f.read()

import re
matches = list(re.finditer(r"syl-nonverbal-reasoning", content))
print(f"syl-nonverbal-reasoning matches in backup: {len(matches)}")
for m in matches:
    pos = m.start()
    # print line number and surrounding text
    line_num = content.count("\n", 0, pos) + 1
    print(f"  Line {line_num}:")
    print(content[pos-100:pos+300])
