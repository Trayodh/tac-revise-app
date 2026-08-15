import re
with open('notes_extra_history.js', 'r', encoding='utf-8') as f:
    content = f.read()
m = re.search(r'EXPANDED_NOTES_DATA\["what-is-history"\]\s*=\s*`(.*?)`;', content, re.DOTALL)
if m:
    text = m.group(1)
    text = re.sub(r'<[^>]+>', ' ', text)
    print('Length:', len(text.split()))
    print(text[:500])
