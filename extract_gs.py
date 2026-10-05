import re
content = open('ai_generated_notes.js', encoding='utf-8', errors='ignore').read()
matches = re.findall(r'"title":\s*"([^"]+)",\s*"subject":\s*"([^"]+)"', content)
for m in matches:
    if m[1] == 'General Studies':
        print(m[0])
