import re

content = open('notes_generated_targeted.js', encoding='utf-8', errors='ignore').read()
count = content.count('window.EXPANDED_NOTES_DATA[')
print('Entries in JS file:', count)
ids = re.findall(r'window\.EXPANDED_NOTES_DATA\["([^"]+)"\]', content)
for nid in ids:
    print(' -', nid)
