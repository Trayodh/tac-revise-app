import os
import json
import time
import requests
import re
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
        print("MISSING API KEY!")
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

def get_word_count(html_str):
    text_only = re.sub(r'<[^>]+>', ' ', html_str)
    return len(text_only.split())

def process_ai_generated_notes():
    filename = "ai_generated_notes.js"
    print(f"Processing {filename}...")
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    prefix = "const AI_GENERATED_NOTES = "
    json_text = content.replace(prefix, "").strip()
    if json_text.endswith(";"):
        json_text = json_text[:-1]
        
    data = json.loads(json_text)
    
    for i, item in enumerate(data):
        notes = item.get("notes", "")
        wc = get_word_count(notes)
        if wc < 800:
            print(f"  [{i+1}/{len(data)}] Expanding '{item.get('id')}' ({wc} words)...")
            expanded = expand_notes_content(notes)
            if expanded:
                item["notes"] = expanded
                with open(filename, 'w', encoding='utf-8') as f:
                    f.write(prefix + json.dumps(data, indent=2) + ";\n")
                time.sleep(4)
            else:
                print("   -> Failed to expand.")
        else:
            print(f"  [{i+1}/{len(data)}] Skipping '{item.get('id')}' (already {wc} words)")

def process_notes_data_upgraded():
    filename = "notes_data_upgraded.js"
    print(f"Processing {filename}...")
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # notes_data_upgraded.js has let CURRENT_AFFAIRS_DB = {...}; and const NOTES_DATABASE = {...};
    # We need to split them, parse NOTES_DATABASE, expand, and write back.
    split_str = "const NOTES_DATABASE = "
    parts = content.split(split_str)
    if len(parts) != 2:
        print("Could not parse notes_data_upgraded.js")
        return
        
    ca_db = parts[0]
    nd_json_str = parts[1].strip()
    if nd_json_str.endswith(";"):
        nd_json_str = nd_json_str[:-1]
        
    data = json.loads(nd_json_str)
    
    total = 0
    expanded_count = 0
    
    for subject_key, subject in data.items():
        for chapter in subject.get("chapters", []):
            for topic in chapter.get("topics", []):
                total += 1
                notes = topic.get("notes", "")
                wc = get_word_count(notes)
                if wc < 800:
                    print(f"  [{total}] Expanding '{topic.get('id')}' ({wc} words)...")
                    expanded = expand_notes_content(notes)
                    if expanded:
                        topic["notes"] = expanded
                        expanded_count += 1
                        
                        # Save periodically or after every expansion
                        with open(filename, 'w', encoding='utf-8') as f:
                            f.write(ca_db + split_str + json.dumps(data, indent=2) + ";\n")
                        time.sleep(4)
                    else:
                        print("   -> Failed to expand.")
                else:
                    print(f"  [{total}] Skipping '{topic.get('id')}' (already {wc} words)")

if __name__ == "__main__":
    process_ai_generated_notes()
    process_notes_data_upgraded()
    print("All done!")
