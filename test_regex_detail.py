with open("C:\\Users\\Trayodh Khandalkar\\.gemini\\antigravity-ide\\scratch\\backup\\app.js", "r", encoding="utf-8") as f:
    content = f.read()

import re
matches = list(re.finditer(r"</ul>", content))
print(f"Total </ul> matches: {len(matches)}")
for idx, match in enumerate(matches):
    start = match.start()
    end = min(len(content), match.end() + 100)
    print(f"Match {idx+1} at {start}: {repr(content[start:end])}")
