import os
import requests
import json
from dotenv import load_dotenv

load_dotenv()
GROQ_API_KEY = os.environ.get("GROQ_API_KEY")

url = "https://api.groq.com/openai/v1/chat/completions"
headers = {
    "Authorization": f"Bearer {GROQ_API_KEY}",
    "Content-Type": "application/json"
}
data = {
    "model": "llama3-70b-8192",
    "messages": [
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Hello, are you there?"}
    ]
}

response = requests.post(url, headers=headers, json=data)
if response.status_code == 200:
    print("GROQ SUCCESS:", response.json()["choices"][0]["message"]["content"])
else:
    print("GROQ ERROR:", response.status_code, response.text)
