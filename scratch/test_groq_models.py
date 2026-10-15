import os, requests
from dotenv import load_dotenv

load_dotenv()
key = os.environ.get("GROQ_API_KEY")
print("Groq key present:", bool(key))
if key:
    try:
        res = requests.get(
            "https://api.groq.com/openai/v1/models",
            headers={"Authorization": f"Bearer {key}"},
            timeout=15
        )
        print("Status code:", res.status_code)
        models = [m['id'] for m in res.json().get('data', [])]
        print("Supported Groq Models:", models)
    except Exception as e:
        print("Error:", e)
