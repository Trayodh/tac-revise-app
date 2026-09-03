import os
import json
import requests
from dotenv import load_dotenv

load_dotenv()
GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY")

url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={GEMINI_API_KEY}"
headers = {"Content-Type": "application/json"}

data = {
    "contents": [{"parts": [{"text": "Hello, how are you? Return a 10 word response."}]}],
}

print("Testing Gemini API...")
response = requests.post(url, headers=headers, json=data)
print("Status:", response.status_code)
print("Response:", response.text)
