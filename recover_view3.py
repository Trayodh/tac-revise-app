import json, re

log_path = r'C:\Users\Trayodh Khandalkar\.gemini\antigravity-ide\brain\63330b5a-af9a-4284-8f4b-225b7f5a6c88\.system_generated\logs\transcript.jsonl'

with open(log_path, 'r', encoding='utf-8') as f:
    for line in f:
        if '3717: function getFilteredTopicsList()' in line:
            print('FOUND IT!')
            try:
                step = json.loads(line)
                print(f'Type: {step.get("type")}')
                
                content = step.get('content', '')
                lines = content.split('\n')
                parsed_lines = []
                for l in lines:
                    match = re.match(r'^\d+:\s?(.*)', l)
                    if match:
                        parsed_lines.append(match.group(1))
                if parsed_lines:
                    with open('app.js', 'w', encoding='utf-8') as out:
                        out.write('\n'.join(parsed_lines))
                    print('Wrote app.js successfully!')
                break
            except Exception as e:
                print('Error:', e)
