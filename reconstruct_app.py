import json

log_path = r'C:\Users\Trayodh Khandalkar\.gemini\antigravity-ide\brain\63330b5a-af9a-4284-8f4b-225b7f5a6c88\.system_generated\logs\transcript.jsonl'
app_js_content = ""

def unescape_if_needed(val):
    if isinstance(val, str) and val.startswith('"') and val.endswith('"'):
        val = val[1:-1]
        val = val.encode('utf-8').decode('unicode_escape')
    return val

with open(log_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            step = json.loads(line)
            if 'tool_calls' in step:
                for call in step['tool_calls']:
                    name = call.get('name')
                    args = call.get('args', {})
                    if isinstance(args, str):
                        try: args = json.loads(args)
                        except: pass
                    if not isinstance(args, dict): continue
                    
                    target = args.get('TargetFile', '')
                    if 'app.js' in target and 'recover' not in target and 'fix' not in target and 'update' not in target and 'search' not in target:
                        if name == 'write_to_file':
                            content = args.get('CodeContent', '')
                            app_js_content = unescape_if_needed(content)
                        elif name == 'replace_file_content':
                            target_content = unescape_if_needed(args.get('TargetContent', ''))
                            replacement_content = unescape_if_needed(args.get('ReplacementContent', ''))
                            if target_content in app_js_content:
                                app_js_content = app_js_content.replace(target_content, replacement_content)
                            else:
                                print("Warning: Target content not found in app_js_content for replacement")
                        elif name == 'multi_replace_file_content':
                            chunks = args.get('ReplacementChunks', [])
                            if isinstance(chunks, str):
                                try: chunks = json.loads(chunks)
                                except: pass
                            for chunk in chunks:
                                target_content = unescape_if_needed(chunk.get('TargetContent', ''))
                                replacement_content = unescape_if_needed(chunk.get('ReplacementContent', ''))
                                if target_content in app_js_content:
                                    app_js_content = app_js_content.replace(target_content, replacement_content)
                                else:
                                    print("Warning: Target content not found for multi replacement")
        except: pass

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(app_js_content)
print("Reconstructed app.js from log edits! Length:", len(app_js_content))
