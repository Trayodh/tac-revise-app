import requests, os
from dotenv import load_dotenv
load_dotenv()
url = 'https://api.groq.com/openai/v1/chat/completions'
headers = {'Authorization': f'Bearer {os.environ.get("GROQ_API_KEY")}', 'Content-Type': 'application/json'}
res = requests.post(url, headers=headers, json={'model': 'llama-3.3-70b-versatile', 'messages': [{'role': 'user', 'content': 'hi'}]})
print(res.status_code, res.text)
