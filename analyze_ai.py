import json
import re

with open('ai_generated_notes.js', 'r', encoding='utf-8') as f:
    text = f.read()

json_text = text.replace('const AI_GENERATED_NOTES = ', '').strip()
if json_text.endswith(';'):
    json_text = json_text[:-1]

try:
    data = json.loads(json_text)
    print(f'Total topics: {len(data)}')
    short = 0
    for item in data:
        notes = item.get('notes', '')
        text_only = re.sub(r'<[^>]+>', ' ', notes)
        words = len(text_only.split())
        if words < 800:
            short += 1
            if short < 5:
                print(f'Short: {item.get("id")} ({words} words)')
    print(f'Total short (<800 words): {short}')
except Exception as e:
    print('Error:', e)
