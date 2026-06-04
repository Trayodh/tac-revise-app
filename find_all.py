import json, os, glob

log_dirs = glob.glob(r'C:\Users\Trayodh Khandalkar\.gemini\antigravity-ide\brain\*\.system_generated\logs\transcript.jsonl')
best_content = None

for log_path in log_dirs:
    print('Checking', log_path)
    try:
        with open(log_path, 'r', encoding='utf-8') as f:
            for line in f:
                try:
                    step = json.loads(line)
                    if 'tool_calls' in step:
                        for call in step['tool_calls']:
                            if call.get('name') == 'write_to_file':
                                args = call.get('args', {})
                                if isinstance(args, str):
                                    try: args = json.loads(args)
                                    except: pass
                                if not isinstance(args, dict): continue
                                target = args.get('TargetFile', '')
                                if 'app.js' in target and 'recover' not in target and 'search' not in target and 'fix' not in target and 'update' not in target and 'decode' not in target and 'unescape' not in target and 'strip' not in target:
                                    content = args.get('CodeContent', '')
                                    if len(content) > 10000:
                                        print(f'Found large app.js in {log_path}!')
                                        best_content = content
                except: pass
    except Exception as e:
        print("Error reading log:", e)

if best_content:
    if best_content.startswith('"') and best_content.endswith('"'):
        best_content = best_content[1:-1]
    
    with open('app_recovered.txt', 'w', encoding='utf-8') as f:
        f.write(best_content)
    print('Wrote app_recovered.txt!')
else:
    print('No large app.js found.')
