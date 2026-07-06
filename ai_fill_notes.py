import json
import os
import re
import urllib.request
import urllib.error
from concurrent.futures import ThreadPoolExecutor, as_completed
import time

PORT = 4000
PROXY_URL = f"http://localhost:{PORT}/api/gemini"

SYLLABUS_DATA = {}
if os.path.exists("syllabus_data.json"):
    try:
        with open("syllabus_data.json", "r", encoding="utf-8") as f:
            SYLLABUS_DATA = json.load(f)
        print(f"Loaded official syllabus context for {len(SYLLABUS_DATA)} topics.")
    except Exception as e:
        print(f"Error loading syllabus_data.json: {e}")

PYQ_DATA = {}
if os.path.exists("pyq_trends.json"):
    try:
        with open("pyq_trends.json", "r", encoding="utf-8") as f:
            PYQ_DATA = json.load(f)
        print(f"Loaded official PYQ trends for {len(PYQ_DATA)} topics.")
    except Exception as e:
        print(f"Error loading pyq_trends.json: {e}")

def clean_html(text):
    # Strip markdown wrappers if Gemini returns them
    text = text.strip()
    if text.startswith("```html"):
        text = text[7:]
    if text.startswith("```"):
        text = text[3:]
    if text.endswith("```"):
        text = text[:-3]
    return text.strip()

def get_plain_text_len(html):
    return len(re.sub(r'<[^>]*>', '', html).strip())

def make_gemini_request(prompt, retries=6):
    payload = {
        "model": "gemini-1.5-flash",
        "contents": [{"parts": [{"text": prompt}]}]
    }
    data = json.dumps(payload).encode("utf-8")
    
    time.sleep(2) # Added baseline delay to prevent 429s
    
    for attempt in range(retries):
        try:
            req = urllib.request.Request(
                PROXY_URL,
                data=data,
                headers={"Content-Type": "application/json"}
            )
            with urllib.request.urlopen(req, timeout=45) as response:
                res_data = json.loads(response.read().decode("utf-8"))
                if "candidates" in res_data and res_data["candidates"]:
                    part = res_data["candidates"][0]["content"]["parts"][0]
                    if "text" in part:
                        return clean_html(part["text"])
        except Exception as e:
            print(f"  [Warning] Attempt {attempt+1} failed for request: {e}")
            if attempt < retries - 1:
                time.sleep(10) # Longer delay on failure
    return None

def process_topic(topic):
    topic_id = topic["id"]
    title = topic["title"]
    subject = topic["subject"]
    chapter = topic["chapter"]
    formulas = topic["formulas"]
    notes = topic["notes"]
    
    print(f"[Start] Generating notes for: {title} ({topic_id})")
    
    # Construct the prompt
    syllabus_context = SYLLABUS_DATA.get(topic_id, "")
    syllabus_instruction = ""
    if syllabus_context:
        syllabus_instruction = f'\nMake sure to exhaustively cover the official UPSC/AFCAT syllabus requirements: {syllabus_context}\n'

    pyq_context = PYQ_DATA.get(topic_id, "")
    pyq_instruction = ""
    if pyq_context:
        pyq_instruction = f'\nIncorporate the actual questions, numerical patterns, and conceptual trends from the last 7 years (2020-2026) of UPSC CDS, NDA, and AFCAT exams for this topic: {pyq_context}\n'

    prompt = f"""You are an expert tutor for Indian Defence Examinations (NDA, CDS, AFCAT).
Your goal is to generate study notes that teach the user the topic "{title}" (under the chapter "{chapter}" in the subject "{subject}") so exceptionally well that they clear the exam with great marks.
Structure the notes as a premium, highly comprehensive educational guide. The provided previous year papers (PYQ trends) are there to help you understand the exact depth and level of detail required to answer the exam questions.

The notes must be in raw HTML format, starting with:
<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">
    {title}
  </h3>

And then include:
1. A detailed, step-by-step explanation of the core concepts, definitions, and theory starting from fundamentals with clear, intuitive language and analogies.
2. Key points, subtopics, or lists (use styled lists or tables where appropriate) with thorough breakdowns or mathematical derivations.
3. Strategic tips, mnemonics, or common exam traps/misconceptions.
4. "High-Yield Formulas & Facts" under a styled h4 header:
   <h4 style="border-left: 3px solid var(--info); padding-left: 8px; margin-top: 20px; margin-bottom: 10px; color: var(--text-primary); font-weight: 600;">High-Yield Formulas & Facts</h4>
   Include a list of key equations, formulas, or short facts (e.g., ages, articles, dates). Reuse the existing formulas if provided: "{formulas}".

Make sure the output is:
- Extremely thorough, detailed, and clear (at least 3-4 paragraphs of explanation plus points).
- Beautifully structured with proper CSS/HTML tags.
- Free of any surrounding markdown formatting (no ```html, no ```, no doctype).
- Do NOT use any emojis, icons, or pictorial characters anywhere in the output. Keep it completely emoji-free and professional.
- Valid HTML with all tags closed properly.
"""

    res = make_gemini_request(prompt)
    if res:
        print(f"[Success] Generated {len(res)} chars for: {title}")
        return topic_id, res
    else:
        print(f"[Error] Failed to generate notes for: {title}")
        return topic_id, None

def backup_file(filename):
    if os.path.exists(filename):
        bak_filename = filename + ".bak"
        if not os.path.exists(bak_filename):
            with open(filename, "r", encoding="utf-8") as src:
                with open(bak_filename, "w", encoding="utf-8") as dst:
                    dst.write(src.read())
            print(f"Backed up {filename} to {bak_filename}")

def update_file_with_notes(filename, key, notes_html):
    if not os.path.exists(filename):
        # Create a new notes_extra file if it does not exist
        with open(filename, "w", encoding="utf-8") as f:
            f.write("window.EXPANDED_NOTES_DATA = window.EXPANDED_NOTES_DATA || {};\n\n")
            
    backup_file(filename)
    
    with open(filename, "r", encoding="utf-8") as f:
        content = f.read()
        
    pattern = r'((?:window\.)?EXPANDED_NOTES_DATA\[["\']' + re.escape(key) + r'["\']\]\s*=\s*`)([\s\S]*?)(`\s*;?)'
    
    # Escape backticks in HTML to prevent JS syntax error
    escaped_html = notes_html.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')
    
    if re.search(pattern, content):
        new_content = re.sub(pattern, r'\g<1>' + escaped_html.replace('\\', '\\\\') + r'\g<3>', content)
        with open(filename, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"  Updated key '{key}' inside {filename}")
    else:
        # Append to the end of the file
        new_entry = f'\nwindow.EXPANDED_NOTES_DATA["{key}"] = `\n{escaped_html}\n`;\n'
        with open(filename, "a", encoding="utf-8") as f:
            f.write(new_entry)
        print(f"  Appended key '{key}' to {filename}")

def main():
    # Load all topics metadata
    if not os.path.exists("all_topics_meta.json"):
        print("all_topics_meta.json does not exist. Please run extract_metadata.js first.")
        return
        
    with open("all_topics_meta.json", "r", encoding="utf-8") as f:
        topics = json.load(f)
        
    # Filter candidates
    candidates = []
    for t in topics:
        # We need to fill if the notes don't have the AI-generated signature
        is_ai_generated = 'class="revision-card"' in t["notes"]
        
        if not is_ai_generated:
            candidates.append(t)
            
    print(f"Found {len(candidates)} topics that need notes expansion.")
    
    if not candidates:
        print("All notes are already populated and detailed!")
        return
        
    # Process topics in parallel (e.g. 2 threads)
    success_count = 0
    with ThreadPoolExecutor(max_workers=2) as executor:
        futures = {executor.submit(process_topic, c): c for c in candidates}
        for future in as_completed(futures):
            topic_id, notes_html = future.result()
            if notes_html:
                success_count += 1
                # Find original candidate to get target file
                c = next(x for x in candidates if x["id"] == topic_id)
                target_file = c.get("originalFile") or "notes_extra_10.js"
                update_file_with_notes(target_file, topic_id, notes_html)
                
    print(f"\nSuccessfully generated and updated {success_count} / {len(candidates)} note expansions.")
        
    print("\nAll files successfully updated!")

if __name__ == "__main__":
    main()
