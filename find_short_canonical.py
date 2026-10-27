import re, json

with open('ai_generated_notes.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Match the array
m = re.search(r'const AI_GENERATED_NOTES = (\[[\s\S]*?\]);\s*if \(typeof window', text)
if m:
    notes = json.loads(m.group(1))
    print(f'Total canonical chapters in AI_GENERATED_NOTES: {len(notes)}')
    
    short_notes = [n for n in notes if len(n.get('notes', '')) < 10000]
    print(f'Chapters with < 10,000 characters: {len(short_notes)}')
    short_notes.sort(key=lambda x: len(x.get('notes', '')))
    for n in short_notes:
        print(f"[{n['subject']}] {n['id']} ({n['title']}): {len(n.get('notes', ''))} chars")
else:
    print('Could not find AI_GENERATED_NOTES array')
