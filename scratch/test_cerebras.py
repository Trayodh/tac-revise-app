import os, requests
from dotenv import load_dotenv

load_dotenv()
key = os.environ.get("CEREBRAS_API_KEY")
print("Cerebras key present:", bool(key))
if key:
    try:
        res = requests.post(
            "https://api.cerebras.ai/v1/chat/completions",
            headers={"Authorization": f"Bearer {key}", "Content-Type": "application/json"},
            json={
                "model": "gpt-oss-120b",
                "messages": [{"role": "user", "content": "Return JSON: {\"message\": \"hello\"}"}],
                "response_format": {"type": "json_object"}
            },
            timeout=15
        )
        print("Status code:", res.status_code)
        print("Response:", res.text[:200])
    except Exception as e:
        print("Error:", e)
