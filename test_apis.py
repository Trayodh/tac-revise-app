import os
from dotenv import load_dotenv
import requests

load_dotenv()

groq_key = os.environ.get("GROQ_API_KEY")
gemini_key = os.environ.get("GEMINI_API_KEY")
openrouter_key = os.environ.get("OPENROUTER_API_KEY")

print("--- TESTING APIS ---")

# 1. Test Groq
if groq_key:
    try:
        r = requests.post(
            "https://api.groq.com/openai/v1/chat/completions",
            headers={"Authorization": f"Bearer {groq_key}", "Content-Type": "application/json"},
            json={
                "model": "llama-3.3-70b-versatile",
                "messages": [{"role": "user", "content": "Reply with 'GROQ_OK'"}],
                "max_tokens": 10
            },
            timeout=10
        )
        print("Groq status:", r.status_code, r.json().get('choices', [{}])[0].get('message', {}).get('content', ''))
    except Exception as e:
        print("Groq failed:", e)

# 2. Test Gemini
if gemini_key:
    try:
        url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={gemini_key}"
        r = requests.post(
            url,
            headers={"Content-Type": "application/json"},
            json={"contents": [{"parts": [{"text": "Reply with 'GEMINI_OK'"}]}]},
            timeout=10
        )
        print("Gemini status:", r.status_code)
        if r.status_code == 200:
            print("Gemini response:", r.json()['candidates'][0]['content']['parts'][0]['text'].strip())
        else:
            print("Gemini error:", r.text[:200])
    except Exception as e:
        print("Gemini failed:", e)

# 3. Test OpenRouter
if openrouter_key:
    try:
        r = requests.post(
            "https://openrouter.ai/api/v1/chat/completions",
            headers={"Authorization": f"Bearer {openrouter_key}", "Content-Type": "application/json"},
            json={
                "model": "meta-llama/llama-3.3-70b-instruct:free",
                "messages": [{"role": "user", "content": "Reply with 'OPENROUTER_OK'"}],
                "max_tokens": 10
            },
            timeout=10
        )
        print("OpenRouter status:", r.status_code, r.text[:200])
    except Exception as e:
        print("OpenRouter failed:", e)
