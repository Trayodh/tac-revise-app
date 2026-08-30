import json
import re

with open('notes_data_exam_focused.js', 'r', encoding='utf-8') as f:
    content = f.read()

db_match = re.search(r'const NOTES_DATABASE = (\{.*?\});\s*$', content, re.DOTALL)
db = json.loads(db_match.group(1))

# Merge formulas into notes for ALL topics in ALL subjects
for subj_id, subj_data in db.items():
    if 'chapters' in subj_data:
        for chapter in subj_data['chapters']:
            if 'topics' in chapter:
                for topic in chapter['topics']:
                    formulas = topic.get('formulas', '').strip()
                    notes = topic.get('notes', '').strip()
                    
                    if formulas:
                        # Append formulas to notes
                        added_content = "\n\n<hr>\n\n<h3 style=\"color: #4ade80; margin-top: 24px; margin-bottom: 16px;\">High-Yield Formulas & Short Notes</h3>\n\n<div style=\"white-space: pre-line; background: rgba(34,197,94,0.08); padding: 16px; border-radius: 8px; border-left: 4px solid #4ade80;\">\n" + formulas + "\n</div>"
                        
                        if notes:
                            topic['notes'] = notes + added_content
                        else:
                            topic['notes'] = added_content
                            
                        # Delete formulas property
                        del topic['formulas']

# Write back
new_content = content[:db_match.start(1)] + json.dumps(db, indent=2) + content[db_match.end(1):]
with open('notes_data_exam_focused.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Merged all formulas into notes successfully.")
