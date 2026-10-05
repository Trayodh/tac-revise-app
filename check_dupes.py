import re
from collections import Counter
import json

with open("notes_generated_targeted.js", "r", encoding="utf-8") as f:
    text = f.read()

matches = re.findall(r'window\.EXPANDED_NOTES_DATA\["(.*?)"\]', text)
counts = Counter(matches)
duplicates = {k: v for k, v in counts.items() if v > 1}

print(f"Total matches: {len(matches)}")
print(f"Unique topics: {len(set(matches))}")
print(f"Duplicates: {len(duplicates)}")

try:
    with open('targeted_notes_progress.json') as f:
        p = json.load(f)
        print('Progress JSON done count:', len(p.get('done', [])))
except Exception as e:
    print('Progress JSON Error:', e)
