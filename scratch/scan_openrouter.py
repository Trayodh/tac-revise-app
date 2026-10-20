import os, requests, json
from dotenv import load_dotenv

load_dotenv()
or_key = os.environ.get('OPENROUTER_API_KEY')
r = requests.get('https://openrouter.ai/api/v1/models', headers={'Authorization': f'Bearer {or_key}'})
all_free = [m['id'] for m in r.json().get('data', []) if ':free' in m['id']]
print(f'Total free models on OpenRouter: {len(all_free)}')

working = []
for m in all_free:
    try:
        res = requests.post(
            'https://openrouter.ai/api/v1/chat/completions',
            headers={'Authorization': f'Bearer {or_key}', 'Content-Type': 'application/json'},
            json={'model': m, 'messages': [{'role': 'user', 'content': 'Output valid JSON: {"status": "ready"}'}], 'max_tokens': 50},
            timeout=8
        )
        if res.status_code == 200:
            content = (res.json().get('choices', [{}])[0].get('message', {}).get('content') or '').strip()
            print(f'WORKING: {m} -> {repr(content[:60])}')
            working.append(m)
        elif res.status_code != 429:
            print(f'Status {res.status_code}: {m}')
    except Exception as e:
        pass

print('All working free models:', working)
