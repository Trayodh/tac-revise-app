import re
with open('test_expanded_history.js', 'r', encoding='utf-8') as f:
    content = f.read()
m = re.search(r'EXPANDED_NOTES_DATA\[.*?\]\s*=\s*`(.*?)`', content, re.DOTALL)
if m:
    text = m.group(1)
    text = re.sub(r'<[^>]+>', ' ', text)
    print("Words:", len(text.split()))
