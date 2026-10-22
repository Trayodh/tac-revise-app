import json

with open('pipeline_state.json', encoding='utf-8') as f:
    s = json.load(f)

for k, info in s.items():
    if any(term in k.lower() for term in ['history', 'geography', 'polity', 'capsule', 'notes_compressed']):
        done = len(info.get('extracted_pages', []))
        tot = info.get('total_pages', 0)
        print(f"{k}: {done}/{tot} (status: {info.get('status')})")
