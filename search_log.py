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
                try:
                    args = call.get('function', {}).get('arguments', '')
                    if 'function getFilteredTopicsList()' in args:
                        print(f"Found getFilteredTopicsList in step {step.get('step_index')}")
                        arg_dict = json.loads(args)
                        # it could be CodeContent or ReplacementContent or maybe part of a larger file
                        content = arg_dict.get('CodeContent', arg_dict.get('ReplacementContent', ''))
                        if content:
                            best_content = content
                except Exception:
                    pass

if best_content:
    with open('restored_app.js', 'w', encoding='utf-8') as out:
        out.write(best_content)
    print('Saved restored_app.js!')
else:
    print('Could not find it.')
