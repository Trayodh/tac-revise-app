import os, requests, fitz, json
from dotenv import load_dotenv

load_dotenv()
doc = fitz.open('nda_material.pdf')
page_text = doc[564].get_text()
or_key = os.environ.get('OPENROUTER_API_KEY')
prompt = "Extract educational facts from this text in valid JSON format: {\"notes\": [\"fact1\"]}\nTEXT:\n" + page_text[:1000]
r = requests.post(
    'https://openrouter.ai/api/v1/chat/completions',
    headers={'Authorization': f'Bearer {or_key}', 'Content-Type': 'application/json'},
    json={'model': 'minimax/minimax-m3.1-flash:free', 'messages': [{'role': 'user', 'content': prompt}], 'max_tokens': 600}
)
print('status:', r.status_code)
choice = r.json().get('choices', [{}])[0]
print('choice finish_reason:', choice.get('finish_reason'))
print('choice message:', choice.get('message'))
