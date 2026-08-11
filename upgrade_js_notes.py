import os
import re
import json
import time
import requests
from dotenv import load_dotenv

load_dotenv()
GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY")

SYSTEM_PROMPT = """You are an Expert Defence Examination Educator (NDA, CDS, AFCAT).
Your task is to UPGRADE existing revision notes.

OBJECTIVES:
1. Increase pedagogical depth (explain Mechanisms, WHAT -> WHY -> HOW -> EFFECT -> EXAMPLE).
2. Add missing facts relevant to defence exams (UPSC standard).
3. Ensure absolute accuracy.

CRITICAL FORMATTING RULE:
The input you receive is formatted in a specific HTML structure (using tags like <h3>, <p>, <ul>, <li>, and markdown **bold**).
You MUST preserve this exact structure. 
You can ADD new <li> points, expand <p> descriptions, or even add new <h3> sections, but you CANNOT break the overarching structure or switch to pure markdown. 
Do NOT wrap your final output in ```html or ``` blocks. Return ONLY the raw upgraded HTML string so it can be injected safely back into a JavaScript file.
"""

def upgrade_notes_content(raw_html_string):
    if not GEMINI_API_KEY:
        return None
        
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={GEMINI_API_KEY}"
    headers = {"Content-Type": "application/json"}
    
    prompt_text = (
        "Here are the existing notes (in HTML format). Upgrade their depth and quality for Defence Exams, "
        "but return ONLY the upgraded HTML string. DO NOT use markdown code blocks like ```html.\n\n"
        f"{raw_html_string}"
    )
    
    data = {
        "contents": [
            {
                "parts": [
                    {"text": SYSTEM_PROMPT},
                    {"text": prompt_text}
                ]
            }
        ],
        "generationConfig": {
            "temperature": 0.2
        }
    }

    max_retries = 3
    for attempt in range(max_retries):
        try:
            response = requests.post(url, headers=headers, json=data)
            
            if response.status_code == 429:
                print(f"   -> Rate limit hit (429). Waiting {10 * (attempt+1)} seconds to retry...")
                time.sleep(10 * (attempt + 1))
                continue
                
            response.raise_for_status()
            res_json = response.json()
            
            if "candidates" in res_json and len(res_json["candidates"]) > 0:
                text = res_json["candidates"][0]["content"]["parts"][0].get("text", "")
                if text.startswith("```html"):
                    text = text[7:]
                if text.startswith("```"):
                    text = text[3:]
                if text.endswith("```"):
                    text = text[:-3]
                return text.strip()
            return None
        except Exception as e:
            print(f"API Error during upgrade: {e}")
            if attempt < max_retries - 1:
                time.sleep(5)
            else:
                return None
    return None

def process_js_file(input_file, output_file, limit_topics=None):
    print(f"Reading {input_file}...")
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Support multiple formats in the user's repo
    patterns = [
        re.compile(r"(notes:\s*`)(.*?)(`)", re.DOTALL),
        re.compile(r'(EXPANDED_NOTES_DATA\[.*?\]\s*=\s*`)(.*?)(`;)', re.DOTALL),
        re.compile(r'(window\.EXPANDED_NOTES_DATA\[.*?\]\s*=\s*`)(.*?)(`;)', re.DOTALL),
        re.compile(r'(window\.EXPANDED_NOTES_DATA\[.*?\]\s*=\s*String\.raw`)(.*?)(`;)', re.DOTALL)
    ]
    
    matches = []
    active_pattern = None
    for p in patterns:
        m = list(p.finditer(content))
        if len(m) > 0:
            matches = m
            active_pattern = p
            break

    total = len(matches)
    print(f"Found {total} topics with notes.")
    
    if total == 0:
        print("No matching structure found. Exiting.")
        return

    if limit_topics:
        matches = matches[:limit_topics]
        print(f"Limiting to first {limit_topics} topics for testing.")
        
    new_content = ""
    last_end = 0
    
    for i, match in enumerate(matches):
        print(f"  [{i+1}/{len(matches)}] Upgrading topic notes...")
        
        prefix_str = match.group(1)
        raw_notes = match.group(2)
        suffix_str = match.group(3)
        
        upgraded_notes = upgrade_notes_content(raw_notes)
        if not upgraded_notes:
            print("   -> Failed to upgrade. Keeping original.")
            upgraded_notes = raw_notes
            
        new_content += content[last_end:match.start()]
        new_content += prefix_str + upgraded_notes + suffix_str
        last_end = match.end()
        
        time.sleep(4)
        
    new_content += content[last_end:]
    
    print(f"Saving to {output_file}...")
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print("Upgrade Complete!")

if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser(description="In-place upgrade of JS notes.")
    parser.add_argument("--input", default="data.js", help="Input JS file")
    parser.add_argument("--output", default="data_upgraded.js", help="Output JS file")
    parser.add_argument("--limit", type=int, default=5, help="Limit number of topics to upgrade (0 for all)")
    
    args = parser.parse_args()
    
    limit = args.limit if args.limit > 0 else None
    process_js_file(args.input, args.output, limit_topics=limit)
