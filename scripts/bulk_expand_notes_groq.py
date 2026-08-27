import os
import re
import json
import time
import requests
from dotenv import load_dotenv

load_dotenv()
GROQ_API_KEY = os.environ.get("GROQ_API_KEY")

SYSTEM_PROMPT = """You are an Expert Defence Examination Educator (NDA, CDS, AFCAT).
Your task is to DRASTICALLY EXPAND the existing revision notes into a comprehensive, highly detailed chapter.

OBJECTIVES:
1. EXPAND THE WORD COUNT: The final output MUST be at least 800 words. Do not be concise. Be exhaustive.
2. USE INTERNAL KNOWLEDGE: If the provided text is too short, use your own internal knowledge base to fill in all the gaps. Add historical background, scientific mechanisms, causes, effects, notable figures, dates, formulas, and modern relevance. 
3. Increase pedagogical depth (explain Mechanisms, WHAT -> WHY -> HOW -> EFFECT -> EXAMPLE).
4. Ensure absolute accuracy for defence exams (UPSC standard).

CRITICAL FORMATTING RULE:
The input you receive is formatted in a specific HTML structure (using tags like <h3>, <p>, <ul>, <li>, and markdown **bold**).
You MUST preserve this exact HTML structure if it exists, or create a similar well-formatted structure. 
You MUST heavily expand the content by adding massive amounts of new <li> points, expanding <p> descriptions into multi-paragraph explanations, and adding new <h3> sections if necessary.
Do NOT wrap your final output in ```html or ``` blocks. Return ONLY the raw HTML string so it can be injected safely back into a JavaScript file.
"""

def expand_notes_content(raw_html_string):
    if not GROQ_API_KEY:
        return None
        
    url = "https://api.groq.com/openai/v1/chat/completions"
    headers = {
        "Authorization": f"Bearer {GROQ_API_KEY}",
        "Content-Type": "application/json"
    }
    
    prompt_text = (
        "Here are the existing notes (in HTML format). They are currently far too short. "
        "Expand their depth and quantity to a MINIMUM of 800 words for Defence Exams, using your internal knowledge. "
        "Return ONLY the expanded HTML string. DO NOT use markdown code blocks like ```html.\n\n"
        f"{raw_html_string}"
    )
    
    data = {
        "model": "llama-3.1-70b-versatile",
        "messages": [
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": prompt_text}
        ],
        "temperature": 0.4,
        "max_tokens": 8000
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
            
            if "choices" in res_json and len(res_json["choices"]) > 0:
                text = res_json["choices"][0]["message"]["content"]
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
            if hasattr(e, 'response') and e.response is not None:
                print(e.response.text)
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

    # Find already expanded topic IDs
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
                            
                            # check if it needs expansion
                            if topic_id in expanded_ids:
                                continue
                            
                            text_only = re.sub(r'<[^>]+>', ' ', topic['notes'])
                            word_count = len(text_only.split())
                            
                            if word_count < 400:
                                topics_to_process.append(topic)

    print(f"Total topics needing expansion: {len(topics_to_process)}")

    if not topics_to_process:
        print("All topics are fully expanded!")
        return

    out_f = open(generated_file, 'a', encoding='utf-8')

    for i, topic in enumerate(topics_to_process):
        topic_id = topic['id']
        print(f"[{i+1}/{len(topics_to_process)}] Expanding {topic_id} (Current words: {len(topic['notes'].split())})...")
        
        expanded_notes = expand_notes_content(topic['notes'])
        if expanded_notes:
            out_f.write(f'\nwindow.EXPANDED_NOTES_DATA["{topic_id}"] = String.raw`\n{expanded_notes}\n`;\n')
            out_f.flush()
            print(f"   -> Success. Saved to {generated_file}.")
        else:
            print("   -> Failed to expand.")
            
        time.sleep(1.5) # Avoid aggressive rate limits

    out_f.close()
    print("Expansion Complete!")

if __name__ == "__main__":
    main()
