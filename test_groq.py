import requests
import os
from dotenv import load_dotenv

load_dotenv()
GROQ_KEY = os.getenv("GROQ_API_KEY")

models_to_test = [
    "llama3-8b-8192", 
    "llama-3.1-70b-versatile", 
    "llama-3.1-8b-instant",
    "llama3-70b-8192",
    "gemma2-9b-it",
    "mixtral-8x7b-32768"
]

for model in models_to_test:
    res = requests.post(
        "https://api.groq.com/openai/v1/chat/completions",
        headers={"Authorization": f"Bearer {GROQ_KEY}"},
        json={"model": model, "messages": [{"role": "user", "content": "hello"}], "max_tokens": 10}
    )
    if res.status_code == 200:
        print(f"[SUCCESS] {model} is working!")
    else:
        print(f"[FAILED] {model} returned: {res.json()}")
