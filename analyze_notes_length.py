import json

data = json.load(open('notes_database.json', encoding='utf-8'))
target_subjects = ['History', 'Geography', 'Physics', 'Chemistry', 'Biology']

short_notes = []
all_notes_by_subject = {}
for n in data:
    s = n.get('subject', '')
    if s not in target_subjects:
        continue
    t = n.get('text', '')
    text_len = len(str(t))
    if s not in all_notes_by_subject:
        all_notes_by_subject[s] = {'total': 0, 'short': 0, 'total_chars': 0}
    all_notes_by_subject[s]['total'] += 1
    all_notes_by_subject[s]['total_chars'] += text_len
    if text_len < 300:
        all_notes_by_subject[s]['short'] += 1
        short_notes.append({
            'id': n.get('id', ''),
            'subject': s,
            'chapter': n.get('chapter', ''),
            'topic': n.get('topic', '')[:80],
            'text_len': text_len
        })

print('=== SUBJECT STATS ===')
for s in target_subjects:
    stats = all_notes_by_subject.get(s, {})
    total = stats.get('total', 0)
    short = stats.get('short', 0)
    avg = stats.get('total_chars', 0) // max(total, 1)
    print(f'{s}: {total} notes, {short} short (<300 chars), avg {avg} chars/note')

print(f'\n=== SHORT NOTES ===')
for n in short_notes[:30]:
    print(f"[{n['subject']}] {n['chapter']} > {n['topic']} ({n['text_len']})")
