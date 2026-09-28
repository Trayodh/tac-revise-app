import os, requests, base64
from dotenv import load_dotenv
load_dotenv()

# create a dummy 1x1 black pixel image base64
dummy_img = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII="

url = "https://api.groq.com/openai/v1/chat/completions"
headers = {"Authorization": f"Bearer {os.environ.get('GROQ_API_KEY')}", "Content-Type": "application/json"}
models = ['qwen/qwen3.8-27b', 'allam-2-7b', 'openai/gpt-oss-20b']
for m in models:
    print(f"Testing {m}...")
    data = {
        "model": m,
        "messages": [{"role": "user", "content": [
            {"type": "text", "text": "Describe this image."},
            {"type": "image_url", "image_url": {"url": f"data:image/jpeg;base64,{dummy_img}"}}
        ]}],
        "temperature": 0.1
    }
    res = requests.post(url, headers=headers, json=data)
    print(res.status_code, res.text[:200])
