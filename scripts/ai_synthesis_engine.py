import os
import json
import csv
import time
import subprocess
import fitz  # PyMuPDF
from dotenv import load_dotenv
import google.generativeai as genai
from tenacity import retry, wait_exponential, stop_after_attempt, retry_if_exception_type
from prompts import SYSTEM_PROMPT, build_synthesis_prompt

# Ensure output directories exist
OUTPUT_DIR = "output"
MODULES_DIR = os.path.join(OUTPUT_DIR, "modules")
os.makedirs(MODULES_DIR, exist_ok=True)

PDF_PATH = "616861773-Pathfinder-CDS-Combined-Defence-2022-23-Arihant-Experts.pdf"
PAGE_OFFSET = 286

# Initialize Gemini Client
load_dotenv()
api_key = os.environ.get("GEMINI_API_KEY")
if not api_key:
    raise ValueError("GEMINI_API_KEY environment variable not set.")
genai.configure(api_key=api_key)
model = genai.GenerativeModel('gemini-2.5-flash', system_instruction=SYSTEM_PROMPT)

def extract_pdf_pages(doc, start_page, end_page):
    """Extracts text from a 1-based page range."""
    text = ""
    # fitz is 0-indexed, so we subtract 1. Plus the physical page offset of 286.
    for i in range(start_page - 1 + PAGE_OFFSET, end_page + PAGE_OFFSET):
        try:
            page = doc.load_page(i)
            text += page.get_text("text") + "\n"
        except Exception as e:
            print(f"Error loading page {i}: {e}")
    return text

def find_enrichment_text(enrichment_dir, hint):
    """Simple keyword scan to find matching files and extract their text."""
    if not os.path.exists(enrichment_dir):
        return "No enrichment directory found."
    
    combined_text = ""
    keywords = [k.lower() for k in hint.split()]
    
    for root, _, files in os.walk(enrichment_dir):
        for file in files:
            file_lower = file.lower()
            if file.endswith((".md", ".txt", ".json", ".csv", ".js", ".py")) and not file.startswith("."):
                # If any keyword matches the filename or hint is broadly applicable
                if any(kw in file_lower for kw in keywords) or len(keywords) == 0:
                    try:
                        with open(os.path.join(root, file), 'r', encoding='utf-8') as f:
                            # Read first 5000 chars to avoid blowing up context window
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
    with open('scripts/taxonomy_map.json', 'r') as f:
        taxonomy = json.load(f)
        
    doc = fitz.open(PDF_PATH)
    
    metadata = []
    toc = {}
    csv_rows = [["Subject", "Topic", "Start Page", "End Page", "File Name", "Total Pages", "Contains Answers", "AI Enrichment Flag"]]
    
    for subject, data in taxonomy.get("subjects", {}).items():
        toc[subject] = []
        os.makedirs(os.path.join(MODULES_DIR, subject), exist_ok=True)
        
        for topic in data.get("topics", []):
            topic_id = topic["id"]
            title = topic["title"]
            start_page = topic["start_page"]
            end_page = topic["end_page"]
            enrichment_dir = topic["enrichment_dir"]
            hint = topic["enrichment_hint"]
            
            # Skip if already exists
            file_name = f"{topic_id}.md"
            file_path = os.path.join(MODULES_DIR, subject, file_name)
            if os.path.exists(file_path):
                print(f"Skipping {file_path}, already exists.")
                continue

            print(f"Processing: [{subject}] {title} (Pages {start_page}-{end_page})...")
            
            # 1. Parse Source
            textbook_text = extract_pdf_pages(doc, start_page, end_page)
            if "practice_start" in topic:
                textbook_text += "\n\n=== PRACTICE QUESTIONS ===\n"
                textbook_text += extract_pdf_pages(doc, topic["practice_start"], topic["practice_end"])
                
            # 2. Context Enrichment
            enrichment_text = find_enrichment_text(enrichment_dir, hint)
            
            # TRUNCATE to avoid Groq 8k context limit and TPM rate limits
            textbook_text = textbook_text[:12000]
            enrichment_text = enrichment_text[:8000]
            
            prompt = build_synthesis_prompt(title, textbook_text, enrichment_text)
            
            try:
                # 3. AI Generation with Retry
                output_text = call_llm(prompt)
                
                # Write output markdown
                with open(file_path, "w", encoding="utf-8") as out_f:
                    out_f.write(output_text)
                    
                # 4. Data Logging
                derived_total_pages = 5
                metadata.append({
                    "subject": subject,
                    "topic": title,
                    "file_path": file_path,
                    "start_page": start_page,
                    "end_page": end_page,
                    "derived_total_pages": derived_total_pages,
                    "source_notes_ingested": [enrichment_dir],
                    "has_mcqs": True,
                    "has_answers": True
                })
                
                toc[subject].append(file_path)
                
                csv_rows.append([
                    subject, title, start_page, end_page, file_name, 
                    derived_total_pages, "TRUE", "TRUE"
                ])
                
                # Save Routers immediately
                with open(os.path.join(OUTPUT_DIR, "metadata.json"), "w", encoding="utf-8") as f:
                    json.dump(metadata, f, indent=2)
                with open(os.path.join(OUTPUT_DIR, "toc.json"), "w", encoding="utf-8") as f:
                    json.dump(toc, f, indent=2)
                with open(os.path.join(OUTPUT_DIR, "chapters.csv"), "w", encoding="utf-8", newline="") as f:
                    writer = csv.writer(f)
                    writer.writerows(csv_rows)

                print(f"Successfully generated {file_path}")
                time.sleep(5) # Respect Gemini 15 RPM limit
                
            except Exception as e:
                print(f"Failed to generate {title} after retries: {e}")
                
            # Rate limiting delay
            time.sleep(5)
            
            # FOR TESTING: Stop after processing the first topic
            if os.environ.get("TEST_RUN", "False") == "True":
                print("Test run completed. Exiting loop.")
                break
        
        # FOR TESTING
        if os.environ.get("TEST_RUN", "False") == "True":
            break

    print("\nSynthesis complete. Compiling notes...")
    try:
        subprocess.run(["python", "scripts/compile_notes.py"], check=True)
        print("Committing and pushing to Vercel...")
        subprocess.run(["git", "add", "output/modules", "output/metadata.json", "output/toc.json", "output/chapters.csv", "www/notes_generated.js"], check=True)
        subprocess.run(["git", "commit", "-m", "Auto-generated modules and compiled notes"], check=False) # Check=False in case there are no changes
        subprocess.run(["git", "push"], check=True)
        print("Successfully deployed to Vercel!")
    except Exception as e:
        print(f"Compile or Deployment failed: {e}")

if __name__ == "__main__":
    main()
