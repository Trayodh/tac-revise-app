import json
import os
import time
import requests
from dotenv import load_dotenv

load_dotenv()
GROQ_KEY = os.environ.get("GROQ_API_KEY")

def call_groq_paced(prompt):
    url = "https://api.groq.com/openai/v1/chat/completions"
    headers = {"Authorization": f"Bearer {GROQ_KEY}", "Content-Type": "application/json"}
    payload = {
        "model": "qwen/qwen3.8-27b",
        "messages": [{"role": "user", "content": prompt}],
        "max_tokens": 4096,
        "temperature": 0.2
    }
    for attempt in range(5):
        try:
            r = requests.post(url, headers=headers, json=payload, timeout=60)
            if r.status_code == 200:
                return r.json()['choices'][0]['message']['content'].strip()
            elif r.status_code == 429:
                wait_sec = 4 * (attempt + 1)
                print(f"  [429 Rate Limit] Pacing for {wait_sec}s...")
                time.sleep(wait_sec)
            else:
                print(f"  [Groq {r.status_code}]")
                time.sleep(2)
        except Exception as e:
            print(f"  [Exception: {e}]")
            time.sleep(2)
    return None

test_chapters = [
    ("mathematics", "complex-numbers", "Complex Numbers"),
    ("mathematics", "straight-lines", "Straight Lines"),
    ("mathematics", "central-tendency", "Measures of Central Tendency")
]

from optimized_ai_expander import build_prompt

for sub, cid, title in test_chapters:
    print(f"Testing {title} ({cid})...")
    p = build_prompt(sub, cid, title, "")
    t0 = time.time()
    res = call_groq_paced(p)
    dt = time.time() - t0
    print(f"  Result: {len(res) if res else 0} chars in {dt:.1f}s")
    time.sleep(2.5)
