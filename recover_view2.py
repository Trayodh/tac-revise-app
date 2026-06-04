import json, re

log_path = r'C:\Users\Trayodh Khandalkar\.gemini\antigravity-ide\brain\63330b5a-af9a-4284-8f4b-225b7f5a6c88\.system_generated\logs\transcript.jsonl'
best_content = None

with open(log_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            step = json.loads(line)
        except:
            continue
            
        if step.get('type') == 'TOOL_RESPONSE':
            content = step.get('content', '')
            if '3717: function getFilteredTopicsList() {' in content:
                print(f"Found it at step {step.get('step_index')}!")
                
                # Reconstruct
                lines = content.split('\n')
                parsed_lines = []
                for l in lines:
                    match = re.match(r'^\d+:\s?(.*)', l)
                    if match:
                        parsed_lines.append(match.group(1))
                
                if parsed_lines:
                    best_content = '\n'.join(parsed_lines)

if best_content:
    with open('app.js', 'w', encoding='utf-8') as f:
        f.write(best_content)
    print('Restored app.js!')
else:
    print('Failed to restore.')
