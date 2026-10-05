import os, requests, json
from dotenv import load_dotenv
load_dotenv()

groq_key = os.environ.get('GROQ_API_KEY')
gemini_key = os.environ.get('GEMINI_API_KEY')
or_key = os.environ.get('OPENROUTER_API_KEY')

# Test Groq
r = requests.post('https://api.groq.com/openai/v1/chat/completions',
    headers={'Authorization': 'Bearer ' + groq_key, 'Content-Type': 'application/json'},
    json={'model': 'openai/gpt-oss-120b', 'messages': [{'role': 'user', 'content': 'Hi'}], 'max_tokens': 5},
    timeout=15)
print('Groq:', r.status_code, 'OK' if r.ok else str(r.json())[:100])

# Test Gemini
r2 = requests.post('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=' + gemini_key,
    json={'contents': [{'parts': [{'text': 'Hi'}]}], 'generationConfig': {'maxOutputTokens': 5}},
    timeout=15)
print('Gemini:', r2.status_code, 'OK' if r2.ok else str(r2.json())[:100])

# Test OpenRouter
r3 = requests.post('https://openrouter.ai/api/v1/chat/completions',
    headers={'Authorization': 'Bearer ' + or_key, 'Content-Type': 'application/json'},
    json={'model': 'poolside/laguna-s-2.1:free', 'messages': [{'role': 'user', 'content': 'Hi'}], 'max_tokens': 5},
    timeout=15)
j3 = r3.json()
print('OpenRouter:', r3.status_code, 'OK' if r3.ok and 'choices' in j3 else str(j3)[:100])

# Progress
p = json.load(open('targeted_notes_progress.json', encoding='utf-8'))
print('\nNotes done:', len(p['done']), '/ 108')
print('Missing:', 108 - len(p['done']), 'topics still to generate')
