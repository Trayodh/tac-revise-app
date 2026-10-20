import os, requests, fitz, json
from dotenv import load_dotenv

load_dotenv()
or_key = os.environ.get('OPENROUTER_API_KEY')
r = requests.post(
    'https://openrouter.ai/api/v1/chat/completions',
    headers={'Authorization': f'Bearer {or_key}', 'Content-Type': 'application/json'},
    json={'model': 'minimax/minimax-m3.1-flash:free', 'messages': [{'role': 'user', 'content': 'Hello, reply with JSON: {"status": "ok"}'}], 'max_tokens': 100}
)
print('status:', r.status_code)
print('json:', json.dumps(r.json(), indent=2))
