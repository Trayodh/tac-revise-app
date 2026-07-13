import os
import json
import time
import fitz  # PyMuPDF
from dotenv import load_dotenv
import google.generativeai as genai
from tenacity import retry, wait_exponential, stop_after_attempt
from prompts import SYSTEM_PROMPT, build_synthesis_prompt

# Ensure output directories exist
MODULES_DIR = "Pathfinder_Elite/modules"
os.makedirs(MODULES_DIR, exist_ok=True)

PDF_PATH = "616861773-Pathfinder-CDS-Combined-Defence-2022-23-Arihant-Experts.pdf"
PAGE_OFFSET = 284  # Printed Page + 284 = PyMuPDF Page

# Initialize Gemini Client
load_dotenv()
api_key = os.environ.get("GEMINI_API_KEY")
if not api_key:
    raise ValueError("GEMINI_API_KEY environment variable not set.")
genai.configure(api_key=api_key)
model = genai.GenerativeModel('gemini-2.5-flash', system_instruction=SYSTEM_PROMPT)

def extract_pdf_pages(doc, start_page, end_page):
    text = ""
    # fitz is 0-indexed, but physical pages perfectly map to printed page + 284 for main content
    for i in range(start_page + PAGE_OFFSET, end_page + PAGE_OFFSET + 1):
        try:
            page = doc.load_page(i)
            text += page.get_text("text") + "\n"
        except Exception as e:
            print(f"Error loading page {i}: {e}")
    return text

def find_enrichment_text(enrichment_dir, hint):
    if not enrichment_dir or not os.path.exists(enrichment_dir):
        return "No specific external notes matched."
    
    combined_text = ""
    keywords = [k.lower() for k in hint.split()] if hint else []
    
    for root, _, files in os.walk(enrichment_dir):
        for file in files:
            file_lower = file.lower()
            if file.endswith((".md", ".txt", ".json", ".csv", ".js", ".py")) and not file.startswith("."):
                if any(kw in file_lower for kw in keywords) or len(keywords) == 0:
                    try:
                        with open(os.path.join(root, file), 'r', encoding='utf-8') as f:
                            combined_text += f"\n--- Source: {file} ---\n"
                            combined_text += f.read()[:5000]
                    except Exception:
                        pass
    return combined_text[:20000] if combined_text else "No specific external notes matched."

@retry(wait=wait_exponential(multiplier=2, min=5, max=60), stop=stop_after_attempt(5))
def call_llm(prompt):
    response = model.generate_content(
        prompt,
        generation_config=genai.types.GenerationConfig(temperature=0.4)
    )
    return response.text

def main():
    # Load taxonomy to get enrichment dirs
    with open('scripts/taxonomy_map.json', 'r') as f:
        taxonomy = json.load(f)
    
    enrichment_map = {}
    for subj, data in taxonomy.get("subjects", {}).items():
        for topic in data.get("topics", []):
            enrichment_map[topic["title"]] = {
                "dir": topic.get("enrichment_dir"),
                "hint": topic.get("enrichment_hint")
            }
            
    # Load metadata.json
    with open('Pathfinder_Elite/metadata.json', 'r') as f:
        metadata = json.load(f)
        
    doc = fitz.open(PDF_PATH)
    
    total = len(metadata)
    for idx, item in enumerate(metadata):
        subject = item["subject"]
        topic_title = item["topic_name"]
        start_page = item["start_page"]
        end_page = item["end_page"]
        filename = item["filename"]
        
        os.makedirs(os.path.join(MODULES_DIR, subject), exist_ok=True)
        file_path = os.path.join(MODULES_DIR, subject, filename)
        
        print(f"Processing [{idx+1}/{total}]: {subject} -> {topic_title} (Pages {start_page}-{end_page})", flush=True)
        
        # We will overwrite because the previous ones are wrong
        
        # 1. Get Core PDF text
        context_text = extract_pdf_pages(doc, start_page, end_page)
        
        # 2. Get Enrichment Text
        enr_info = enrichment_map.get(topic_title, {})
        enr_dir = enr_info.get("dir", "")
        enr_hint = enr_info.get("hint", "")
        enrichment_text = find_enrichment_text(enr_dir, enr_hint)
        
        # 3. Build Prompt
        prompt = build_synthesis_prompt(topic_title, context_text, enrichment_text)
        
        # 4. Generate
        try:
            result = call_llm(prompt)
            # Ensure it is saved with actual newlines
            with open(file_path, "w", encoding="utf-8") as out_f:
                out_f.write(result.replace('\\n', '\n'))
            print(f"  -> Saved {file_path}", flush=True)
        except Exception as e:
            print(f"  -> Failed to generate {topic_title}: {e}", flush=True)

if __name__ == "__main__":
    main()
