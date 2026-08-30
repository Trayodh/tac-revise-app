import os
import re
import json
import time
import requests
import urllib.request
import urllib.parse
from dotenv import load_dotenv
from duckduckgo_search import DDGS

load_dotenv()
GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY")

SYSTEM_PROMPT = """You are an Expert Defence Examination Educator (NDA, CDS, AFCAT).
Your task is to DRASTICALLY EXPAND the existing revision notes into a comprehensive, highly detailed chapter.

OBJECTIVES:
1. EXPAND THE WORD COUNT: The final output MUST be at least 1000 words. Be extremely thorough, exhaustive, and detailed.
2. USE THE PROVIDED CONTEXT: I will provide you with Wikipedia context and existing notes. Integrate this seamlessly.
3. USE INTERNAL KNOWLEDGE: Fill in all gaps. Add historical background, scientific mechanisms, causes, effects, notable figures, dates, formulas, and modern relevance. 
4. Increase pedagogical depth (explain Mechanisms, WHAT -> WHY -> HOW -> EFFECT -> EXAMPLE).
5. Ensure absolute accuracy for defence exams (UPSC standard).

CRITICAL FORMATTING RULE:
The input you receive is formatted in a specific HTML structure (using tags like <h3>, <p>, <ul>, <li>, and markdown **bold**).
You MUST preserve this exact HTML structure if it exists, or create a similar well-formatted structure. 
You MUST heavily expand the content by adding massive amounts of new <li> points, expanding <p> descriptions into multi-paragraph explanations, and adding new <h3> sections if necessary.
Do NOT wrap your final output in ```html or ``` blocks. Return ONLY the raw HTML string so it can be injected safely back into a JavaScript file.
"""

def get_wiki_summary(term):
    try:
        clean_term = term.replace('_', ' ').strip()
        search_url = f'https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch={urllib.parse.quote(clean_term)}&utf8=&format=json'
        req1 = urllib.request.Request(search_url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req1) as response:
            search_data = json.loads(response.read().decode('utf-8'))
            if not search_data['query']['search']: return ""
            title = search_data['query']['search'][0]['title']
        
        extract_url = f'https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro=1&explaintext=1&titles={urllib.parse.quote(title)}&format=json'
        req2 = urllib.request.Request(extract_url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req2) as response:
            extract_data = json.loads(response.read().decode('utf-8'))
            pages = extract_data['query']['pages']
            for page_id in pages:
                return pages[page_id].get('extract', "")
    except Exception:
        return ""
    return ""

def get_web_summary(term):
    """Scour the internet using DuckDuckGo to get broader context from various open sources."""
    try:
        results_text = []
        # Search explicitly for defense exams context if possible, or just the term
        query = f"{term} (NDA OR CDS OR AFCAT OR UPSC)"
        with DDGS() as ddgs:
            results = list(ddgs.text(query, max_results=3))
            for r in results:
                results_text.append(f"Source: {r.get('title', '')} - {r.get('body', '')}")
                
        # If no results with defense keywords, search just the term
        if not results_text:
            with DDGS() as ddgs:
                results = list(ddgs.text(term, max_results=3))
                for r in results:
                    results_text.append(f"Source: {r.get('title', '')} - {r.get('body', '')}")
                    
        return "\n".join(results_text)
    except Exception as e:
        print(f"DDG Search error: {e}")
        return ""

def expand_notes_content(topic_title, raw_html_string):
    if not GEMINI_API_KEY:
        return None
        
    # Scour the internet (Wikipedia)
    wiki_context = get_wiki_summary(topic_title)
    
    # Scour the internet (Other open sources / Defense Portals)
    web_context = get_web_summary(topic_title)
    
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={GEMINI_API_KEY}"
    headers = {"Content-Type": "application/json"}
    
    prompt_text = (
        f"TOPIC: {topic_title}\n\n"
        "Here are the existing notes (in HTML format). They are currently far too short:\n"
        f"{raw_html_string}\n\n"
        "Here is additional context scoured from Wikipedia:\n"
        f"{wiki_context}\n\n"
        "Here is additional context scoured from the internet (Open source, Defence sites, etc.):\n"
        f"{web_context}\n\n"
        "Expand their depth and quantity to a MINIMUM of 1000 words for Defence Exams (NDA, CDS, AFCAT). "
        "Return ONLY the expanded HTML string. DO NOT use markdown code blocks like ```html."
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
            print(f"API Error during expansion: {e}")
            if attempt < max_retries - 1:
                time.sleep(5)
            else:
                return None
    return None

def main():
    data_file = 'data.js'
    generated_file = 'notes_generated.js'

    print("Loading data.js...")
    with open(data_file, 'r', encoding='utf-8') as f:
        content = f.read()

    match = re.search(r'const NOTES_DATABASE = (\{[\s\S]*?\});\s*$', content, re.MULTILINE)
    if not match:
        match = re.search(r'const NOTES_DATABASE = (\{[\s\S]*?\});', content, re.MULTILINE)
    
    if not match:
        print("Could not find NOTES_DATABASE in data.js")
        return

    db = json.loads(match.group(1))

    print("Loading notes_generated.js...")
    try:
        with open(generated_file, 'r', encoding='utf-8') as f:
            generated_content = f.read()
    except:
        generated_content = "window.EXPANDED_NOTES_DATA = window.EXPANDED_NOTES_DATA || {};\n"

    expanded_ids = set(re.findall(r'window\.EXPANDED_NOTES_DATA\["(.*?)"\]', generated_content))
    print(f"Found {len(expanded_ids)} already expanded topics.")

    topics_to_process = []
    
    for subj_id, subj_data in db.items():
        if 'chapters' in subj_data:
            for chapter in subj_data['chapters']:
                if 'topics' in chapter:
                    for topic in chapter['topics']:
                        if 'notes' in topic and topic['notes'].strip():
                            topic_id = topic.get('id', '')
                            if not topic_id: continue
                            if topic_id in expanded_ids: continue
                            
                            text_only = re.sub(r'<[^>]+>', ' ', topic['notes'])
                            if len(text_only.split()) < 400:
                                topics_to_process.append(topic)

    print(f"Total topics needing SUPER expansion: {len(topics_to_process)}")

    if not topics_to_process:
        print("All topics are fully expanded!")
        return

    out_f = open(generated_file, 'a', encoding='utf-8')
    count = 0
    
    for i, topic in enumerate(topics_to_process):
        topic_id = topic['id']
        topic_title = topic.get('title', topic_id)
        print(f"[{i+1}/{len(topics_to_process)}] SUPER Expanding {topic_id} (Fetching internet context & AI)...")
        
        expanded_notes = expand_notes_content(topic_title, topic['notes'])
        if expanded_notes:
            out_f.write(f'\nwindow.EXPANDED_NOTES_DATA["{topic_id}"] = String.raw`\n{expanded_notes}\n`;\n')
            out_f.flush()
            print(f"   -> Success. Saved to {generated_file}.")
        else:
            print("   -> Failed to expand.")
            
        time.sleep(4.5)
        count += 1
        
        if count % 5 == 0:
            print(f"Processed {count} topics so far... Auto-committing.")
            os.system('git add notes_generated.js')
            os.system('git commit -m "feat: super-expand 5 more notes with internet context"')
            os.system('git push origin main')

    out_f.close()
    print("Expansion Complete!")

if __name__ == "__main__":
    main()
