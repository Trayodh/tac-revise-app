import requests, os
from dotenv import load_dotenv
load_dotenv()

print("Cerebras models:")
url2 = "https://api.cerebras.ai/v1/models"
headers2 = {"Authorization": f"Bearer {os.environ.get('CEREBRAS_API_KEY')}"}
res2 = requests.get(url2, headers=headers2)
try:
    print([m['id'] for m in res2.json().get('data', [])])
except:
    print(res2.text)

print("\nGroq models:")
url3 = "https://api.groq.com/openai/v1/models"
headers3 = {"Authorization": f"Bearer {os.environ.get('GROQ_API_KEY')}"}
res3 = requests.get(url3, headers=headers3)
try:
    print([m['id'] for m in res3.json().get('data', [])])
except:
    print(res3.text)

print("\nOpenRouter models:")
url4 = "https://openrouter.ai/api/v1/models"
res4 = requests.get(url4)
try:
    print([m['id'] for m in res4.json().get('data', []) if 'free' in m['id']])
except:
    print(res4.text)
