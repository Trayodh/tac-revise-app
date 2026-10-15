import os, requests, time
from dotenv import load_dotenv

load_dotenv()
key = os.environ.get("GROQ_API_KEY")
print("Groq test:")
for m in ["openai/gpt-oss-120b", "openai/gpt-oss-20b"]:
    try:
        res = requests.post(
            "https://api.groq.com/openai/v1/chat/completions",
            headers={"Authorization": f"Bearer {key}", "Content-Type": "application/json"},
            json={
                "model": m,
                "messages": [{"role": "user", "content": "Return valid JSON only: {\"status\": \"ok\"}"}],
                "response_format": {"type": "json_object"}
            },
            timeout=20
        )
        print(f"Groq {m}: {res.status_code}")
        if res.status_code == 200:
            print("  Response:", res.json()["choices"][0]["message"]["content"])
        else:
            print("  Error:", res.text[:200])
    except Exception as e:
        print("  Exception:", e)
    time.sleep(2)
