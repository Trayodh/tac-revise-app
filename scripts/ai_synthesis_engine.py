import os
import json
import csv
import time
import subprocess
import fitz  # PyMuPDF
from dotenv import load_dotenv
from groq import Groq
from tenacity import retry, wait_exponential, stop_after_attempt, retry_if_exception_type
from prompts import SYSTEM_PROMPT, build_synthesis_prompt

# Ensure output directories exist
OUTPUT_DIR = "output"
MODULES_DIR = os.path.join(OUTPUT_DIR, "modules")
os.makedirs(MODULES_DIR, exist_ok=True)

PDF_PATH = "pathfinder-cds-combined-defence-expertsarihant-90f15b25.pdf"

# Initialize Gemini Client
load_dotenv()
api_key = os.environ.get("GROQ_API_KEY")
if not api_key:
    raise ValueError("GROQ_API_KEY environment variable not set.")
client = Groq(api_key=api_key)

def extract_pdf_pages(doc, start_page, end_page):
    """Extracts text from a 1-based page range."""
    text = ""
    # fitz is 0-indexed, so we subtract 1
    for i in range(start_page - 1, end_page):
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
def call_groq(prompt):
    response = client.chat.completions.create(
        model='llama-3.3-70b-versatile',
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": prompt}
        ],
        temperature=0.4,
    )
    return response.choices[0].message.content

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
            
            prompt = build_synthesis_prompt(title, textbook_text, enrichment_text)
            
            try:
                # 3. AI Generation with Retry
                output_text = call_groq(prompt)
                
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
                
                # Push to Git / Vercel
                try:
                    subprocess.run(["git", "add", file_path, os.path.join(OUTPUT_DIR, "metadata.json"), os.path.join(OUTPUT_DIR, "toc.json"), os.path.join(OUTPUT_DIR, "chapters.csv")], check=True)
                    subprocess.run(["git", "commit", "-m", f"Auto-generated module: {title}"], check=True)
                    subprocess.run(["git", "push"], check=True)
                    print(f"Pushed {title} to Vercel!")
                except Exception as e:
                    print(f"Git push failed for {title}: {e}")
                
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

    print("\nSynthesis complete.")

if __name__ == "__main__":
    main()
