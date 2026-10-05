import json
import re

content = open('ai_generated_notes.js', encoding='utf-8', errors='ignore').read()
start = content.find('const NEW_NOTES = ') + len('const NEW_NOTES = ')
end = content.rfind('];') + 1

try:
    data = json.loads(content[start:end])
except Exception as e:
    print('Failed to parse json:', e)
    import sys
    sys.exit(1)

multi_topic_count = 0
for n in data:
    html = n.get('notes', '')
    if '<hr' in html and '<h5' in html:
        multi_topic_count += 1
        print(f"Chapter: {n['title']} has multiple topics")
        # Let's count how many h5 tags
        h5s = re.findall(r'<h5[^>]*>(.*?)</h5>', html)
        print(f"  Found {len(h5s)} topics: {h5s[:3]}")
    elif '<h5' in html:
        print(f"Chapter: {n['title']} has h5 but no hr")
        h5s = re.findall(r'<h5[^>]*>(.*?)</h5>', html)
        print(f"  Found {len(h5s)} topics: {h5s[:3]}")

print(f"Total multi-topic chapters: {multi_topic_count}")
