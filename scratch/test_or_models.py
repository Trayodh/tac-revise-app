import os, requests
from dotenv import load_dotenv

load_dotenv()
or_key = os.environ.get("OPENROUTER_API_KEY")
test_models = [
    "nvidia/nemotron-3.5-lightning:free",
    "nvidia/nemotron-3-super-120b-a12b:free",
    "google/gemma-4-31b-it:free"
]
for m in test_models:
    try:
        res = requests.post(
            "https://openrouter.ai/api/v1/chat/completions",
            headers={"Authorization": f"Bearer {or_key}", "Content-Type": "application/json"},
            json={
                "model": m,
                "messages": [{"role": "user", "content": "Respond ONLY with valid JSON: {\"status\": \"ok\"}"}],
                "temperature": 0.1
            },
            timeout=20
        )
        print(f"OpenRouter {m}: {res.status_code}")
        if res.status_code == 200:
            print("  Response:", res.json()["choices"][0]["message"]["content"][:100])
        else:
            print("  Error:", res.text[:120])
    except Exception as e:
        print("  Exception:", e)
