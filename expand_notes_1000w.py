import os
import re
import json
import time
import requests
from dotenv import load_dotenv

load_dotenv()
GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY")

SYSTEM_PROMPT = """You are an Expert Defence Examination Educator (NDA, CDS, AFCAT).
Your task is to DRASTICALLY EXPAND the existing revision notes into a comprehensive, highly detailed chapter.

OBJECTIVES:
1. EXPAND THE WORD COUNT: The final output MUST be at least 1000 words. Do not be concise. Be exhaustive.
2. USE INTERNAL KNOWLEDGE: If the provided text is too short, use your own internal knowledge base to fill in all the gaps. Add historical background, scientific mechanisms, causes, effects, notable figures, dates, formulas, and modern relevance. 
3. Increase pedagogical depth (explain Mechanisms, WHAT -> WHY -> HOW -> EFFECT -> EXAMPLE).
4. Ensure absolute accuracy for defence exams (UPSC standard).

CRITICAL FORMATTING RULE:
The input you receive is formatted in a specific HTML structure (using tags like <h3>, <p>, <ul>, <li>, and markdown **bold**).
You MUST preserve this exact HTML structure. 
You MUST heavily expand the content by adding massive amounts of new <li> points, expanding <p> descriptions into multi-paragraph explanations, and adding new <h3> sections if necessary.
Do NOT wrap your final output in ```html or ``` blocks. Return ONLY the raw HTML string so it can be injected safely back into a JavaScript file.
"""

def expand_notes_content(raw_html_string):
    if not GEMINI_API_KEY:
        return None
        
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={GEMINI_API_KEY}"
    headers = {"Content-Type": "application/json"}
    
    prompt_text = (
        "Here are the existing notes (in HTML format). They are currently far too short. "
        "Expand their depth and quantity to a MINIMUM of 1000 words for Defence Exams, using your internal knowledge. "
        "Return ONLY the expanded HTML string. DO NOT use markdown code blocks like ```html.\n\n"
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
            "temperature": 0.4,
            "maxOutputTokens": 8192
        }
    }

    max_retries = 3
    for attempt in range(max_retries):
        try:
            response = requests.post(url, headers=headers, json=data)
            
            if response.status_code == 429:
                print(f"   -> Rate limit hit (429). Waiting {15 * (attempt+1)} seconds to retry...")
                time.sleep(15 * (attempt + 1))
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
            print(f"API Error during expansion: {e}")
            if attempt < max_retries - 1:
                time.sleep(5)
            else:
                return None
    return None

def process_js_file(input_file, output_file, limit_topics=None):
    print(f"Reading {input_file}...")
    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()

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
        print(f"  [{i+1}/{len(matches)}] Expanding topic notes...")
        
        prefix_str = match.group(1)
        raw_notes = match.group(2)
        suffix_str = match.group(3)
        
        # Skip if already massively expanded
        text_only = re.sub(r'<[^>]+>', ' ', raw_notes)
        word_count = len(text_only.split())
        if word_count > 800:
            print(f"   -> Already expanded ({word_count} words). Skipping.")
            expanded_notes = raw_notes
        else:
            expanded_notes = expand_notes_content(raw_notes)
            if not expanded_notes:
                print("   -> Failed to expand. Keeping original.")
                expanded_notes = raw_notes
            
        new_content += content[last_end:match.start()]
        new_content += prefix_str + expanded_notes + suffix_str
        last_end = match.end()
        
        # Save incrementally in case it crashes midway
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(new_content + content[last_end:])
            
        time.sleep(4)
        
    print(f"Expansion Complete! Saved to {output_file}.")

if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser(description="In-place 1000-word expansion of JS notes.")
    parser.add_argument("--input", required=True, help="Input JS file")
    parser.add_argument("--output", required=True, help="Output JS file")
    parser.add_argument("--limit", type=int, default=0, help="Limit number of topics to upgrade (0 for all)")
    
    args = parser.parse_args()
    
    limit = args.limit if args.limit > 0 else None
    process_js_file(args.input, args.output, limit_topics=limit)
