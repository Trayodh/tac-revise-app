import json

with open('canonical_syllabus.json', 'r', encoding='utf-8') as f:
    syl = json.load(f)

with open('ai_generated_notes.js', 'r', encoding='utf-8') as f:
    js_text = f.read()

prefix = 'window.EXPANDED_NOTES_DATA = Object.assign(window.EXPANDED_NOTES_DATA || {}, '
if js_text.startswith(prefix):
    js_text = js_text[len(prefix):]
if js_text.endswith(');'):
    js_text = js_text[:-2]

data = json.loads(js_text)

short_chapters = []
for sub, ch_list in syl.items():
    for ch in ch_list:
        ch_id = ch['id']
        content = data.get(ch_id, '')
        l = len(content)
        if l < 10000:
            short_chapters.append({'subject': sub, 'id': ch_id, 'title': ch['title'], 'len': l})

print(f'Total chapters under 10,000 chars: {len(short_chapters)}')
for c in short_chapters:
    print(f'[{c["subject"]}] {c["id"]}: {c["len"]} chars ({c["title"]})')
