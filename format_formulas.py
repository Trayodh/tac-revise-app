import json
import re

with open('notes_data_exam_focused.js', 'r', encoding='utf-8') as f:
    content = f.read()

db_match = re.search(r'const NOTES_DATABASE = (\{.*?\});\s*$', content, re.DOTALL)
db = json.loads(db_match.group(1))

# Let's define the exact string we used previously to inject the raw formula dump
raw_injection_start = '<hr>\n\n<h3 style="color: #4ade80; margin-top: 24px; margin-bottom: 16px;">High-Yield Formulas & Short Notes</h3>\n\n<div style="white-space: pre-line; background: rgba(34,197,94,0.08); padding: 16px; border-radius: 8px; border-left: 4px solid #4ade80;">\n'

count = 0
for subj_id, subj_data in db.items():
    if 'chapters' in subj_data:
        for chapter in subj_data['chapters']:
            for topic in chapter.get('topics', []):
                notes = topic.get('notes', '')
                
                if raw_injection_start in notes:
                    # Find the raw formulas
                    start_idx = notes.find(raw_injection_start)
                    raw_block_end = notes.find('\n</div>', start_idx + len(raw_injection_start))
                    
                    if start_idx != -1 and raw_block_end != -1:
                        raw_formulas = notes[start_idx + len(raw_injection_start):raw_block_end]
                        
                        # Re-format raw formulas into a beautiful HTML list
                        lines = raw_formulas.strip().split('\n')
                        formatted_list = '<ul style="margin-top: 8px; margin-left: 20px; list-style-type: disc;">\n'
                        for line in lines:
                            line = line.strip()
                            if not line: continue
                            
                            # Bold the left side of colon or equals sign for better readability
                            if ':' in line:
                                parts = line.split(':', 1)
                                line = f'<strong>{parts[0]}:</strong> {parts[1]}'
                            elif '=' in line:
                                parts = line.split('=', 1)
                                line = f'<code>{parts[0].strip()}</code> = {parts[1]}'
                                
                            formatted_list += f'  <li style="margin-bottom: 8px;">{line}</li>\n'
                        formatted_list += '</ul>'
                        
                        # New injection block
                        new_injection = f'''
<div class="exam-tip" style="background: rgba(34,197,94,0.08); border-left: 3px solid #4ade80; padding: 16px; margin-top: 32px; border-radius: 0 8px 8px 0;">
  <div style="display: flex; align-items: center; margin-bottom: 12px;">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4ade80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 8px;">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <h3 style="color: #4ade80; margin: 0; font-size: 1.1rem;">AI-Generated Summary & Formulas</h3>
  </div>
  {formatted_list}
</div>
'''
                        # Replace old injection with new one
                        topic['notes'] = notes[:start_idx] + new_injection + notes[raw_block_end + 7:]
                        count += 1

# Write back
new_content = content[:db_match.start(1)] + json.dumps(db, indent=2) + content[db_match.end(1):]
with open('notes_data_exam_focused.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Reformatted {count} topics to have a beautiful AI-generated summary block.")
