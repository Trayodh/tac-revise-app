import re
content = open('notes_generated.js', 'r', encoding='utf-8').read()
keys = re.findall(r'window\.EXPANDED_NOTES_DATA\["(.*?)"\]', content)
print(keys)
