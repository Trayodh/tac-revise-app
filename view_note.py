import re

with open('notes_generated_targeted.js', 'r', encoding='utf-8') as f:
    text = f.read()

match = re.search(r'window\.EXPANDED_NOTES_DATA\["ai-gen-history-mughal-empire-babur-to-aurangzeb-administration-art-culture"\] = `\n(.*?)\n`;', text, re.DOTALL)
if match:
    print(match.group(1))
