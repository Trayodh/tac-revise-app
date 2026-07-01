import json
import os

path = r"c:\Users\Trayodh Khandalkar\.gemini\antigravity-ide\brain\ff407405-7e0a-49b6-b2e5-1c6b7d922169\.system_generated\logs\transcript.jsonl"
with open(path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.loads(line)
            if 'content' in data:
                content = data['content']
                if ('Phase 1' in content or 'Phase 2' in content) and len(content) > 500 and ('USER_EXPLICIT' in data.get('source', '') or 'USER_INPUT' in data.get('type', '')):
                    print("\n--- USER REQUEST ---")
                    print(content[:2000])
        except:
            pass
