import os
import json
import fitz  # PyMuPDF
from dotenv import load_dotenv
from google import genai
from google.genai import types
from tenacity import retry, wait_exponential, stop_after_attempt
from prompts import SYSTEM_PROMPT, build_synthesis_prompt
import traceback
import time

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
client = genai.Client(api_key=api_key)

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

@retry(wait=wait_exponential(multiplier=2, min=5, max=60), stop=stop_after_attempt(5))
def call_llm(prompt):
    # Use JSON schema response format with Gemini
    response = client.models.generate_content(
        model='gemini-2.5-flash',
        contents=[
            types.Content(role="user", parts=[types.Part.from_text(text=SYSTEM_PROMPT + "\n\n" + prompt)])
        ],
        config=types.GenerateContentConfig(
            response_mime_type="application/json",
            temperature=0.2,
        ),
    )
    return response.text

def json_to_markdown(data):
    md = f"# {data.get('subject', 'Subject')} - {data.get('topic', 'Topic')}\n\n"
    
    content = data.get('content', {})
    
    if 'notes' in content:
        md += f"## Core Notes\n{content['notes']}\n\n"
        
    if 'important_facts' in content and content['important_facts']:
        md += "## Important Facts\n"
        for fact in content['important_facts']:
            md += f"- {fact}\n"
        md += "\n"
        
    if 'formulas' in content and content['formulas']:
        md += "## Formulas\n"
        for formula in content['formulas']:
            md += f"- {formula}\n"
        md += "\n"
        
    if 'flashcards' in content and content['flashcards']:
        md += "## Flashcards\n"
        for fc in content['flashcards']:
            md += f"**Q:** {fc.get('front', '')}\n**A:** {fc.get('back', '')}\n\n"
            
    if 'practice_questions' in content and content['practice_questions']:
        md += "## Practice Questions\n"
        for i, q in enumerate(content['practice_questions']):
            md += f"**Q{i+1}: {q.get('question', '')}**\n"
            for opt in q.get('options', []):
                md += f"- {opt}\n"
            md += f"*Answer: {q.get('answer', '')}*\n"
            md += f"*Explanation: {q.get('explanation', '')}*\n\n"
            
    return md

def main():
    # Load metadata.json
    try:
        with open('Pathfinder_Elite/metadata.json', 'r') as f:
            metadata = json.load(f)
    except Exception as e:
        print(f"Failed to load metadata.json: {e}")
        return
        
    try:
        doc = fitz.open(PDF_PATH)
    except Exception as e:
        print(f"Failed to open PDF {PDF_PATH}: {e}")
        return
    
    total = len(metadata)
    for idx, item in enumerate(metadata):
        subject = item["subject"]
        topic_title = item["topic_name"]
        start_page = item["start_page"]
        end_page = item["end_page"]
        filename = item["filename"]
        
        os.makedirs(os.path.join(MODULES_DIR, subject), exist_ok=True)
        file_path = os.path.join(MODULES_DIR, subject, filename)
        
        if os.path.exists(file_path):
            print(f"Skipping [{idx+1}/{total}]: {subject} -> {topic_title} (Already exists)", flush=True)
            continue
            
        print(f"Processing [{idx+1}/{total}]: {subject} -> {topic_title} (Pages {start_page}-{end_page})", flush=True)
        time.sleep(5) # Respect 15 RPM limits
        
        # 1. Get Core PDF text
        context_text = extract_pdf_pages(doc, start_page, end_page)
        
        if not context_text.strip():
            print(f"  -> Skipping: No text extracted from pages {start_page}-{end_page}")
            continue
            
        # 2. Build Prompt
        prompt = build_synthesis_prompt(subject, topic_title, context_text)
        
        # 3. Generate JSON
        try:
            result_json_str = call_llm(prompt)
            data = json.loads(result_json_str, strict=False)
            
            # 4. Convert to Markdown and save
            markdown_output = json_to_markdown(data)
            
            with open(file_path, "w", encoding="utf-8") as out_f:
                out_f.write(markdown_output)
            print(f"  -> Saved {file_path}", flush=True)
            
            # Also save the raw JSON for the other systems (Flashcards, Quizzes, Semantic Search)
            json_file_path = file_path.replace(".md", ".json")
            with open(json_file_path, "w", encoding="utf-8") as out_f:
                json.dump(data, out_f, indent=2)
                
        except Exception as e:
            print(f"  -> Failed to generate {topic_title}: {e}")
            traceback.print_exc()

if __name__ == "__main__":
    main()
