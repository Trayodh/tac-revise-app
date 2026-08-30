import json
import re
with open('notes_data_exam_focused.js', 'r', encoding='utf-8') as f:
    content = f.read()
db = json.loads(re.search(r'const NOTES_DATABASE = (\{.*?\});\s*$', content, re.DOTALL).group(1))

pattern = re.compile(r'<(h[1-6]|ul|ol|li|p|div|table|section)\b')

for subj_id, subj_data in db.items():
    if 'chapters' in subj_data:
        for chapter in subj_data['chapters']:
            for topic in chapter.get('topics', []):
                notes = topic.get('notes', '').strip()
                if not (notes.startswith('<') or pattern.search(notes)):
                    print(f"{subj_id} -> {chapter['id']} -> {topic['title']} has no HTML!")
                    print(notes[:100])
                    print('---')
