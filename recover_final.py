import json

log_path = r'C:\Users\Trayodh Khandalkar\.gemini\antigravity-ide\brain\63330b5a-af9a-4284-8f4b-225b7f5a6c88\.system_generated\logs\transcript.jsonl'
best_content = None

with open(log_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            step = json.loads(line)
            if 'tool_calls' in step:
                for call in step['tool_calls']:
                    if call.get('name') == 'write_to_file':
                        args = call.get('args', {})
                        if isinstance(args, str):
                            args = json.loads(args)
                        target = args.get('TargetFile', '')
                        if 'app.js' in target and 'recover' not in target and 'search' not in target and 'fix' not in target and 'update' not in target and 'decode' not in target and 'unescape' not in target:
                            best_content = args.get('CodeContent', '')
        except: pass

if best_content:
    if best_content.startswith('"') and best_content.endswith('"'):
        best_content = best_content[1:-1]
    
    # We write it properly
    # Need to convert escaped backslashes (\\n) into actual \n if it was double-encoded
    # But since it has actual \n, maybe it's just raw string?
    # Let's write it as is first.
    with open('app.js', 'w', encoding='utf-8') as f:
        f.write(best_content)
    print('Restored app.js successfully!')
