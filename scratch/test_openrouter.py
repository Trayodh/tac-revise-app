import os, requests
from dotenv import load_dotenv

load_dotenv()
key = os.environ.get("OPENROUTER_API_KEY")
print("OpenRouter key present:", bool(key))
if key:
    try:
        res = requests.get(
            "https://openrouter.ai/api/v1/models",
            headers={"Authorization": f"Bearer {key}"},
            timeout=15
        )
        print("Status code:", res.status_code)
        data = res.json().get("data", [])
        free_models = [m['id'] for m in data if ':free' in m.get('id', '')]
        print(f"Total free models: {len(free_models)}")
        print("Sample free models:", free_models[:15])
    except Exception as e:
        print("Error:", e)
