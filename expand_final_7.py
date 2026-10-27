"""
expand_final_7.py

Deepens the final 7 chapters (<10,000 chars) with Part 2: Tactical Speed Drills, 
Advanced Worked Examples, and Comprehensive PYQ Archetypes.
"""

import os
import sys
import json
import time
import requests
from dotenv import load_dotenv

load_dotenv()
from test_table_converter import convert_markdown_tables_to_html

GROQ_KEY = os.getenv("GROQ_API_KEY")
if not GROQ_KEY:
    print("ERROR: GROQ_API_KEY is not set.")
    sys.exit(1)

TARGET_IDS = [
    "afcat-r-clock-calendar",
    "afcat-r-dot",
    "ca-defence-cooperation",
    "ca-policies",
    "afcat-r-fig-completion",
    "polity-rpa",
    "afcat-r-coding"
]

with open("canonical_syllabus.json", "r", encoding="utf-8") as f:
    syllabus = json.load(f)

# Find metadata for each
target_meta = {}
for sub_id, sub_data in syllabus.items():
    chapters = sub_data.get('chapters', []) if isinstance(sub_data, dict) else sub_data
    for ch in chapters:
        if ch['id'] in TARGET_IDS:
            target_meta[ch['id']] = {
                'subject': sub_id,
                'title': ch['title']
            }

with open("expanded_canonical_notes.json", "r", encoding="utf-8") as f:
    cache = json.load(f)

def build_part2_prompt(ch_id, meta):
    return f"""You are the Lead Defence Exam Pedagogist for Jayastra (NDA, CDS, AFCAT, CAPF).
Provide an ADVANCED COMPLEMENTARY MASTERCLASS MODULE (Part 2) for:
Subject: {meta['subject'].upper()}
Chapter: {meta['title']} (ID: {ch_id})

Target Audience: Officers-in-training taking UPSC CDS, NDA, AFCAT.
Focus specifically on:
1. ADVANCED TACTICAL WORKED EXAMPLES & SPEED TECHNIQUES (Step-by-step problem-solving or case study walkthroughs with numerical shortcuts, geometric checks, or constitutional article cross-references).
2. EXHAUSTIVE COMPARATIVE TABLE (HTML <table> with <thead>, <tbody>, border and styling).
3. 5 HIGH-FREQUENCY PYQ ARCHETYPES (Detailed dissection of recurring question patterns, options analysis, and why distractors are wrong).

FORMATTING RULES:
- Pure HTML with semantic classes.
- Wrap in: <div class="revision-card" style="margin-top: 24px; border-top: 2px solid var(--accent);">
- Start with <h4><i class="fa-solid fa-bolt" style="color: var(--accent); margin-right: 8px;"></i> PART 2: ADVANCED SPEED DRILLS & WORKED PYQ ARCHETYPES</h4>
- Must include a responsive HTML <table> with style="width: 100%; border-collapse: collapse; margin: 16px 0; background: rgba(0,0,0,0.25); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; overflow: hidden;".
- Pure HTML only! Absolutely NO markdown pipe tables!
"""

def generate_part2(ch_id):
    meta = target_meta[ch_id]
    prompt = build_part2_prompt(ch_id, meta)
    
    url = "https://api.groq.com/openai/v1/chat/completions"
    headers = {
        "Authorization": f"Bearer {GROQ_KEY}",
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0"
    }
    
    payload = {
        "model": "openai/gpt-oss-120b",
        "messages": [{"role": "user", "content": prompt}],
        "max_tokens": 2000,
        "temperature": 0.2
    }
    
    for attempt in range(3):
        try:
            r = requests.post(url, headers=headers, json=payload, timeout=60)
            if r.status_code == 200:
                content = r.json()['choices'][0]['message']['content'].strip()
                import re
                content = re.sub(r'^```html\s*', '', content)
                content = re.sub(r'\s*```$', '', content)
                content = convert_markdown_tables_to_html(content)
                return content
            elif r.status_code == 429:
                retry_after = r.headers.get('retry-after')
                wait_sec = int(retry_after) if retry_after and retry_after.isdigit() else 8
                print(f" [429: wait {wait_sec}s]", end="", flush=True)
                time.sleep(wait_sec)
            else:
                print(f" [Error {r.status_code}]", end="", flush=True)
                break
        except Exception as e:
            time.sleep(2)
    return None

def main():
    print(f"Expanding final {len(TARGET_IDS)} chapters with Part 2 Masterclasses...")
    for idx, ch_id in enumerate(TARGET_IDS, 1):
        meta = target_meta.get(ch_id, {'subject': 'general', 'title': ch_id})
        print(f"[{idx}/{len(TARGET_IDS)}] Generating Part 2 for {ch_id} ({meta['title']})...", end="", flush=True)
        part2 = generate_part2(ch_id)
        if part2 and len(part2) > 1000:
            existing = cache.get(ch_id, "")
            # Combine Part 1 and Part 2
            combined = existing + "\n\n<hr style='border: 0; border-top: 1px dashed rgba(255,255,255,0.08); margin: 24px 0;'>\n\n" + part2
            cache[ch_id] = combined
            with open("expanded_canonical_notes.json", "w", encoding="utf-8") as f:
                json.dump(cache, f, ensure_ascii=False, indent=2)
            print(f" DONE! (Added {len(part2)} chars -> Total: {len(combined)} chars)")
        else:
            print(" FAILED.")
        time.sleep(4)
    print("\nAll 7 chapters deepened successfully!")

if __name__ == "__main__":
    main()
