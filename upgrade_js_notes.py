import os
import re
import json
import time
import requests
from dotenv import load_dotenv

load_dotenv()
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

if not GEMINI_API_KEY:
    print("ERROR: GEMINI_API_KEY not found in .env")
    exit(1)

SYSTEM_PROMPT = """You are an Expert Defence Examination Educator (NDA, CDS, AFCAT).
Your task is to UPGRADE existing revision notes. You will be provided with one-liner notes, and you must expand them into comprehensive, detailed paragraphs.

OBJECTIVES:
1. Increase pedagogical depth (explain Mechanisms, WHAT -> WHY -> HOW -> EFFECT -> EXAMPLE).
2. Add missing facts relevant to defence exams (UPSC standard).
3. Convert brief one-liners into thorough, multi-sentence paragraphs that cover all necessary historical, scientific, or factual depth.

CRITICAL FORMATTING RULE:
You MUST preserve this exact HTML structure (e.g., if it's an <li>, keep it as an <li> but expand the text). Do NOT wrap your final output in ```html or ``` blocks. Return ONLY the raw upgraded HTML string.
"""

def upgrade_notes_content(raw_html_string):
    max_retries = 5
    for attempt in range(max_retries):
        try:
            url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={GEMINI_API_KEY}"
            text_part = {"text": f"System Guidelines:\n{SYSTEM_PROMPT}\n\nTask: Expand the following notes preserving exact HTML structure:\n\n{raw_html_string}"}
            payload = {
                "contents": [{"parts": [text_part]}],
                "tools": [{"googleSearch": {}}],
                "generationConfig": {"temperature": 0.3}
            }
            
            response = requests.post(url, json=payload, headers={'Content-Type': 'application/json'}, timeout=120)
            
            if response.status_code == 429:
                print(f"   -> Rate limit hit (429). Waiting {10 * (attempt + 1)} seconds to retry...")
                time.sleep(10 * (attempt + 1))
                continue
                
            response.raise_for_status()
            resp_json = response.json()
            
            if "candidates" in resp_json and len(resp_json["candidates"]) > 0:
                result_text = resp_json["candidates"][0]["content"]["parts"][0]["text"]
                if result_text.startswith("```html"):
                    result_text = result_text[7:]
                elif result_text.startswith("```"):
                    result_text = result_text[3:]
                if result_text.endswith("```"):
                    result_text = result_text[:-3]
                return result_text.strip()
            else:
                print(f"API Error: No candidates returned.")
                time.sleep(5)
                
        except Exception as e:
            print(f"Network/API Error: {e}")
            time.sleep(10 * (attempt + 1))
            
    return None

def process_js_file():
    input_path = 'notes_data.js'
    output_path = 'notes_data.js'
    
    if not os.path.exists(input_path):
        print(f"ERROR: Cannot find {input_path}")
        return

    with open(input_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find all "text" fields using a safe regex that handles escaped quotes
    pattern = re.compile(r'"text"\s*:\s*"([^"\\]*(?:\\.[^"\\]*)*)"')
    matches = list(pattern.finditer(content))
    print(f"Found {len(matches)} text fields in the file.")
    
    new_content = ""
    last_end = 0
    count = 0
    
    for match in matches:
        full_match = match.group(0)
        text_val = match.group(1)
        
        # Only upgrade if it's a short one-liner (less than 200 chars)
        if 20 < len(text_val) < 200:
            count += 1
            print(f"  [{count}] Upgrading short note: {text_val[:30]}...")
            
            # Adding a small 2 second delay to prevent rapid-fire local firewall blocking
            time.sleep(2)
            
            upgraded_text = upgrade_notes_content(text_val)
            
            if upgraded_text:
                # Safely escape quotes and newlines for JavaScript
                upgraded_text = upgraded_text.replace('"', '\\"').replace('\n', ' ')
                replacement = f'"text": "{upgraded_text}"'
                
                new_content += content[last_end:match.start()] + replacement
                last_end = match.end()
            else:
                print("   -> Failed to upgrade. Keeping original.")
                new_content += content[last_end:match.end()]
                last_end = match.end()
        else:
            # Too long or too short, skip
            new_content += content[last_end:match.end()]
            last_end = match.end()
            
    new_content += content[last_end:]
    
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print(f"\n✅ Upgrade Complete!")

if __name__ == "__main__":
    process_js_file()
