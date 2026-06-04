import json, re

log_path = r'C:\Users\Trayodh Khandalkar\.gemini\antigravity-ide\brain\63330b5a-af9a-4284-8f4b-225b7f5a6c88\.system_generated\logs\transcript.jsonl'
best_content = None

with open(log_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            step = json.loads(line)
        except Exception:
            continue
            
        if step.get('type') == 'TOOL_RESPONSE':
            content = step.get('content', '')
            # Look for view_file output format
            if 'Showing lines' in content and 'app.js`' in content:
                print(f"Found view_file at step {step.get('step_index')}")
                
                # Parse the lines
                # The format is:
                # <line_number>: <original_line>
                lines = content.split('\n')
                parsed_lines = []
                parsing = False
                for l in lines:
                    if re.match(r'^\d+:', l):
                        parsing = True
                        # strip the "123: " prefix
                        parsed_lines.append(l.split(': ', 1)[1])
                    elif parsing:
                        if l.startswith('The above content shows the entire'):
                            break
                        # in case a line wrapped or didn't match? 
                        # Actually every line starts with \d+:
                        pass
                
                if parsed_lines:
                    best_content = '\n'.join(parsed_lines)

if best_content:
    with open('app.js', 'w', encoding='utf-8') as f:
        f.write(best_content)
    print('Restored app.js from view_file in logs!')
else:
    print('Could not find view_file for app.js in logs.')
