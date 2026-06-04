import json

log_path = r'C:\Users\Trayodh Khandalkar\.gemini\antigravity-ide\brain\63330b5a-af9a-4284-8f4b-225b7f5a6c88\.system_generated\logs\transcript.jsonl'
best_content = None

with open(log_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            step = json.loads(line)
        except Exception:
            continue
            
        if 'tool_calls' in step:
            for call in step['tool_calls']:
                name = call.get('function', {}).get('name')
                if name == 'write_to_file':
                    try:
                        args = json.loads(call['function']['arguments'])
                        if 'app.js' in args.get('TargetFile', ''):
                            best_content = args.get('CodeContent', '')
                    except Exception:
                        pass
                
        if step.get('type') == 'TOOL_RESPONSE':
            content = step.get('content', '')
            if 'Showing lines' in content and 'app.js`' in content:
                # We could parse view_file output, but write_to_file is more exact
                pass

if best_content:
    with open('app.js', 'w', encoding='utf-8') as f:
        f.write(best_content)
    print('Restored app.js from write_to_file in logs!')
else:
    print('Could not find write_to_file for app.js in logs.')
