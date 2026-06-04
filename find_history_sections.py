with open("notes_extra_history.js", "r", encoding="utf-8") as f:
    content = f.read()

import re
keywords = ["Mauryan", "Gupta", "1857"]
out_lines = []
for kw in keywords:
    matches = list(re.finditer(kw, content))
    out_lines.append(f"Keyword '{kw}': {len(matches)} matches")
    for m in matches[:10]:
        pos = m.start()
        line_num = content.count("\n", 0, pos) + 1
        out_lines.append(f"  Line {line_num}: {content[pos-50:pos+150].strip().replace('\n', ' ')}")

with open("history_matches.txt", "w", encoding="utf-8") as out:
    out.write("\n".join(out_lines))
print("Wrote matches to history_matches.txt")
