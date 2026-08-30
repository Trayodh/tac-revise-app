import json
import re

with open('notes_data_exam_focused.js', 'r', encoding='utf-8') as f:
    content = f.read()

db = json.loads(re.search(r'const NOTES_DATABASE = (\{.*?\});\s*$', content, re.DOTALL).group(1))

short_topics = []
for subj_id, subj_data in db.items():
    if 'chapters' in subj_data:
        for chapter in subj_data['chapters']:
            for topic in chapter.get('topics', []):
                if subj_id != 'history' and len(topic.get('notes', '')) < 2000:
                    short_topics.append((subj_id, chapter['title'], topic['title'], len(topic.get('notes', ''))))

print(f"Found {len(short_topics)} short topics.")
for s in short_topics:
    print(f"{s[0]} | {s[1]} | {s[2]} | {s[3]}")
