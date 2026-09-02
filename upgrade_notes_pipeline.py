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

def parse_database(content: str) -> Dict[str, str]:
    # Robustly parse the JS string bypassing internal backticks
    parts = content.split('window.EXPANDED_NOTES_DATA["')
    topics = {}
    for part in parts[1:]:
        end_quote = part.find('"]')
        topic_id = part[:end_quote]
        
        start_idx = part.find('String.raw`') + len('String.raw`')
        end_idx = part.rfind('`;')
        
        if start_idx != -1 and end_idx != -1:
            html = part[start_idx:end_idx]
            topics[topic_id] = html
    return topics

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
    
    # Always read the original file to parse its structure
    with open(input_file, "r", encoding="utf-8") as f:
        orig_content = f.read()
    orig_topics = parse_database(orig_content)
    
    # If the output file exists, parse it for existing upgrades
    upgraded_topics = {}
    if os.path.exists(output_file):
        print(f"[i] Found {output_file}, parsing for existing upgrades...")
        with open(output_file, "r", encoding="utf-8") as f:
            upg_content = f.read()
        upgraded_topics = parse_database(upg_content)
        # Verify if the bottom block exists
        bottom_block = ""
        if "if (typeof NOTES_DATABASE !==" in upg_content:
            bottom_block = upg_content.split("`;\n\n")[ -1 ]
    else:
        bottom_block = ""
        # Copy the bottom block from the original file if no output file exists
        if "if (typeof NOTES_DATABASE !==" in orig_content:
            bottom_block = orig_content.split("`;\n\n")[ -1 ]

    updated_count = 0
    total_to_process = len(orig_topics)
    
    for i, (topic_id, html) in enumerate(orig_topics.items()):
        # Skip if already upgraded
        if topic_id in upgraded_topics and "<!-- AI UPGRADED FIELDS -->" in upgraded_topics[topic_id]:
            continue
            
        print(f"\n--- Processing: {topic_id} ({i+1}/{total_to_process}) ---")
        
        topic_title = topic_id.split("_", 1)[1].replace("_", " ") if "_" in topic_id else topic_id
        
        web_context = search_the_web(f"{topic_title} upsc latest current affairs news", max_results=2)
        
        upgraded_data = synthesize_with_ai(topic_title, html, web_context)
        
        if upgraded_data:
            upgrade_html = generate_upgrade_html(upgraded_data)
            new_html = html + upgrade_html
            upgraded_topics[topic_id] = new_html
            updated_count += 1
            
            # Rebuild and save the ENTIRE file to ensure no data is lost
            final_content = "window.EXPANDED_NOTES_DATA = window.EXPANDED_NOTES_DATA || {};\n\n"
            
            # Combine all topics from all input files!
            # Since we only iterate orig_topics here, we should actually merge orig_topics and upgraded_topics
            merged_keys = set(list(orig_topics.keys()) + list(upgraded_topics.keys()))
            
            for k in merged_keys:
                raw_html = upgraded_topics.get(k, orig_topics.get(k, ""))
                # Important: Escape backticks so they don't break JS template literals
                clean_html = raw_html.replace('`', '\\`')
                final_content += f'window.EXPANDED_NOTES_DATA["{k}"] = String.raw`{clean_html}`;\n\n'
                
            final_content += bottom_block
            
            with open(output_file, 'w', encoding='utf-8') as f:
                f.write(final_content)
                
            print(f"[+] Successfully generated and saved upgrades for {topic_id}")
            time.sleep(1) # Prevent rate limiting
        
    print(f"\n[<<<] Pipeline finished for {filepath}. Upgraded {updated_count} topics.")


if __name__ == "__main__":
    files_to_process = ["notes_generated.js", "notes_generated_1000w.js", "notes_generated_batch6.js"]
    for file in files_to_process:
        process_database(file)
