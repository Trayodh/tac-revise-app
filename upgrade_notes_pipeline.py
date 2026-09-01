import os
import json
import time
import re
import glob
from typing import Dict, Optional
from openai import OpenAI
from duckduckgo_search import DDGS
from dotenv import load_dotenv

# ==========================================
# CONFIGURATION
# ==========================================
load_dotenv()

GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY")
client = OpenAI(
  base_url="https://generativelanguage.googleapis.com/v1beta/openai/",
  api_key=GEMINI_API_KEY,
)

ddgs = DDGS()

# ==========================================
# FUNCTIONS
# ==========================================
def search_the_web(query: str, max_results: int = 3) -> str:
    print(f"[*] Executing Web Search: '{query}'")
    try:
        results = ddgs.text(query, max_results=max_results)
        context = ""
        for res in results:
            context += f"Source: {res.get('href', 'N/A')}\nSnippet: {res.get('body', '')}\n\n"
        return context
    except Exception as e:
        print(f"[!] DuckDuckGo Search failed: {e}")
        return ""

def synthesize_with_ai(topic_title: str, original_notes: str, web_context: str) -> Optional[Dict]:
    print(f"[*] Synthesizing data with AI for topic: {topic_title}")
    
    system_prompt = "You are an elite faculty member for UPSC, NDA, and CDS exams. Output ONLY a strict JSON object (NO markdown backticks) representing the upgraded notes."
    
    user_prompt = f"""
    Your task is to upgrade the study notes for the topic: "{topic_title}".
    
    ORIGINAL NOTES:
    {original_notes[:2000]}
    
    LATEST WEB CONTEXT (Recent Developments/Facts):
    {web_context}
    
    CRITICAL INSTRUCTION ON RELEVANCE:
    You MUST ensure all upgrades are highly relevant to the ORIGINAL NOTES.
    - If the topic is static (like Mathematics, Basic Physics, Grammar), IGNORE the LATEST WEB CONTEXT if it provides irrelevant news articles. 
    - Do NOT invent "recent developments" for static subjects like Math (e.g. "Ratio and Proportion").
    - Only use the WEB CONTEXT if it directly enriches the academic or examination value of the topic.
    
    INSTRUCTIONS:
    Synthesize the above information and output a STRICT JSON object containing exactly these keys:
    - "quickSummary": Array of 2-3 short bullet points summarizing the core concept.
    - "upscHighlights": Array of 2-3 points highlighting common trick questions or key focus areas for UPSC/NDA.
    - "backgroundContext": Array of 1-2 points explaining the historical origin or fundamental basis (if applicable, else empty array).
    - "recentDevelopments": Array of 1-2 points about the latest news, supreme court rulings, or modern applications based on the Web Context (if NOT applicable or irrelevant, return an empty array []).
    - "examRelevance": A short string explaining how important this topic is for the exam.
    
    Return ONLY the raw JSON object.
    """
    
    for attempt in range(5):
        try:
            completion = client.chat.completions.create(
              model="gemini-3.5-flash",
              messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_prompt}
              ],
              temperature=0.3,
              timeout=30
            )
            response_text = completion.choices[0].message.content.strip()
            
            # Clean up potential markdown blocks if they still appear
            if response_text.startswith("```json"):
                response_text = response_text.strip("```json").strip("```").strip()
            elif response_text.startswith("```"):
                response_text = response_text.strip("```").strip()
                
            upgraded_data = json.loads(response_text)
            return upgraded_data
        except Exception as e:
            error_msg = str(e).lower()
            if "429" in error_msg or "rate limit" in error_msg:
                print(f"[!] Gemini Rate Limit Exceeded for {topic_title}. Sleeping for 30 seconds...")
                time.sleep(30)
            else:
                print(f"[!] AI Synthesis attempt {attempt + 1} failed for {topic_title}: {e}")
                time.sleep(3)
            
    return None

def generate_upgrade_html(upgraded_data: Dict) -> str:
    html = "\n\n<!-- AI UPGRADED FIELDS -->\n"
    for field, content in upgraded_data.items():
        if content:
            title = "dY\"s " + re.sub(r'([A-Z])', r' \1', field).title()
            html += f'<div class="msc-checkpoint" style="margin-top: 24px;">\n'
            html += f'  <div class="msc-title">{title}</div>\n'
            
            if isinstance(content, list):
                html += '  <ul style="padding-left: 20px; font-size: 0.95rem; color: var(--text-secondary);">\n'
                for item in content:
                    html += f'    <li style="margin-bottom: 8px;">{item}</li>\n'
                html += '  </ul>\n'
            else:
                html += f'  <div style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6;">{content}</div>\n'
            
            html += '</div>\n'
    return html

def process_database(filepath: str):
    print(f"\n[>>>] Starting upgrade pipeline on {filepath}")
    
    input_file = filepath
    output_file = "notes_generated_upgraded.js"
    
    if os.path.exists(output_file):
        print(f"[i] Found {output_file}, resuming progress...")
        with open(output_file, "r", encoding="utf-8") as f:
            js_content = f.read()
    elif os.path.exists(input_file):
        with open(input_file, "r", encoding="utf-8") as f:
            js_content = f.read()
    else:
        print(f"[!] File not found: {input_file}")
        return

    pattern = r'window\.EXPANDED_NOTES_DATA\["([^"]+)"\]\s*=\s*String\.raw`([\s\S]*?)`;'
    
    matches = list(re.finditer(pattern, js_content))
    if not matches:
        print(f"[!] Could not find any topics in {js_content[:100]}...")
        return

    updated_count = 0
    
    for match in matches:
        topic_id = match.group(1)
        original_html = match.group(2)
        
        if "<!-- AI UPGRADED FIELDS -->" in original_html:
            continue
            
        print(f"\n--- Processing: {topic_id} ---")
        search_query = f"{topic_id.replace('-', ' ')} key concepts recent developments UPSC"
        web_data = search_the_web(search_query)
        
        upgrades = synthesize_with_ai(topic_id, original_html, web_data)
        
        if upgrades:
            upgrade_html = generate_upgrade_html(upgrades)
            new_html = original_html + upgrade_html
            
            # Replace the specific block in the current file content
            new_line = f'window.EXPANDED_NOTES_DATA["{topic_id}"] = String.raw`{new_html}`;'
            js_content = js_content.replace(match.group(0), new_line)
            
            with open(output_file, 'w', encoding='utf-8') as f:
                f.write(js_content)
                
            print(f"[+] Successfully generated and saved upgrades for {topic_id}")
            updated_count += 1
            time.sleep(3)
            
    print(f"\n[<<<] Pipeline finished for {filepath}. Upgraded {updated_count} topics.")

def write_db_to_file(filepath: str, db: Dict):
    js_content = "window.EXPANDED_NOTES_DATA = window.EXPANDED_NOTES_DATA || {};\n\n"
    
    for topic_id, html_content in db.items():
        js_content += f'window.EXPANDED_NOTES_DATA["{topic_id}"] = String.raw`{html_content}`;\n\n'
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(js_content)

if __name__ == "__main__":
    print("Dronacharya AI Research & Web-Scraping Pipeline")
    files_to_process = glob.glob("notes_generated*.js")
    
    for file in files_to_process:
        process_database(file)
        
    print("\nALL FILES PROCESSED SUCCESSFULLY.")

