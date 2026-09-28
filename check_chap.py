import re
with open('public/notes_data_exam_focused.js', 'r', encoding='utf-8') as f:
    text = f.read()

match = re.search(r'"geography":\s*\{.*?"chapters":\s*\[(.*?)\]\s*\}\s*,?\s*"', text, re.DOTALL)
if match:
    chapters_content = match.group(1)
    titles = re.findall(r'"title":\s*"([^"]+)"', chapters_content)
    print('\n'.join(titles[:20]))
else:
    print('Not found')
