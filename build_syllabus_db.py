import re
import json

syllabus_text = open('raw_syllabus.txt', 'r', encoding='utf-8').read().strip().split('\n')

subjects_map = {
    "A. Mathematics": "mathematics",
    "B. English": "english",
    "C. Physics": "physics",
    "D. Chemistry": "chemistry",
    "E. General Science": "science",
    "F. History": "history",
    "G. Geography": "geography",
    "H. Current Events": "current_affairs"
}

current_subject = None
subject_titles = {
    "mathematics": "Mathematics (NDA)",
    "english": "English (GAT)",
    "physics": "Physics (GAT)",
    "chemistry": "Chemistry (GAT)",
    "science": "General Science (GAT)",
    "history": "History (GAT)",
    "geography": "Geography (GAT)",
    "current_affairs": "Current Events (GAT)"
}

new_db = {}

def slugify(text):
    return re.sub(r'[^a-z0-9]+', '-', text.lower()).strip('-')

for line in syllabus_text:
    line = line.strip()
    if not line or line.startswith('1. NDA') or line.startswith('NDA has'):
        continue
    
    if line in subjects_map:
        current_subject = subjects_map[line]
        new_db[current_subject] = {
            "title": subject_titles[current_subject],
            "chapters": []
        }
    elif current_subject:
        # It's a topic, therefore it becomes a chapter with 1 topic inside
        slug = slugify(line)
        # Ensure slug uniqueness within the subject
        existing_slugs = [c['id'] for c in new_db[current_subject]['chapters']]
        if slug in existing_slugs:
            slug = slug + "-" + str(len(existing_slugs))
            
        new_db[current_subject]["chapters"].append({
            "id": slug,
            "title": line,
            "icon": "fa-solid fa-book-open",
            "topics": [
                {
                    "id": slug,
                    "title": line,
                    "notes": "<p>Content for " + line + " is being generated...</p>"
                }
            ]
        })

print(json.dumps(new_db, indent=2)[:500])
with open('new_syllabus_db.json', 'w', encoding='utf-8') as f:
    json.dump(new_db, f, indent=2)

