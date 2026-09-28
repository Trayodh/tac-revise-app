import glob
import re

for file in glob.glob('public/notes_extra_*.js'):
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    keys = re.findall(r'window\.EXPANDED_NOTES_DATA\[\"(.*?)\"\]', content)
    if keys:
        print(file, keys)
