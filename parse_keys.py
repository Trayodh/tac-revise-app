import re
with open('public/notes_data_exam_focused.js', 'r', encoding='utf-8') as f:
    text = f.read()
keys = re.findall(r'^\s*"([a-z_-]+)":\s*\{', text, re.MULTILINE)
print('Keys:', set(keys))
