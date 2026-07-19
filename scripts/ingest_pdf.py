import fitz
import os
import json
import time
from google import genai
from google.genai import types

# Target databases mapping
DB_FILES = {
    "current_affairs": "current_affairs_db.js",
    "equipment": "equipment_db.js",
    "military_exercises": "military_exercises_db.js",
    "history": "notes_extra_history.js",
    "geography": "notes_extra_geography.js",
    "polity": "notes_extra_polity.js",
    "economics": "notes_extra_economics.js",
    "environment": "notes_extra_environment.js",
    "science": "notes_extra_physics.js", # Defaulting science to physics/chemistry/biology based on subtopics
    "general": "notes_generated.js"
}

PROMPT = """
You are an expert military data analyst and exam content creator for NDA, CDS, AFCAT, and CAPF.
I have uploaded a chunk of a defense exam preparation PDF.
Read every page carefully. Do not miss ANY useful fact, table, map, exercise, or current affair.
Ignore coaching watermarks like 'cds.journey 9198151228', page numbers, and ads.

Extract the information and structure it into a JSON object matching the databases below.
Only include fields for databases where you found relevant information in this chunk.

Structure:
{
    "current_affairs": [
        { "month_year": "January 2026", "id": "generated-id", "topic": "...", "text": "...", "details": {}, "mcq": {"question": "", "options": [], "answer": "", "explanation": ""} }
    ],
    "equipment": [
        { "name": "...", "branch": "Army/Navy/Air Force", "origin": "...", "type": "...", "quantity": "...", "wikiLink": "..." }
    ],
    "military_exercises": [
        { "name": "...", "countries": "...", "type": "...", "location": "...", "year": "..." }
    ],
    "notes": [
        { "category": "history/geography/polity/economics/environment/science", "title": "...", "content": "HTML formatted content with <h2>, <p>, <ul>, and <strong> tags. Include PYQs and Memory Tricks if available." }
    ]
}

Ensure all extracted text is grammatically correct and OCR errors are fixed.
Return ONLY valid JSON. No markdown wrappers.
"""

def process_chunk(client, pdf_path, start_page, end_page):
    chunk_filename = f"chunk_{start_page}_{end_page}.pdf"
    
    # Create a new PDF with just these pages
    doc = fitz.open(pdf_path)
    doc2 = fitz.open()
    doc2.insert_pdf(doc, from_page=start_page, to_page=end_page)
    doc2.save(chunk_filename)
    doc.close()
    doc2.close()
    
    print(f"Uploading {chunk_filename}...")
    uploaded_file = client.files.upload(file=chunk_filename)
    
    print(f"Waiting for {chunk_filename} to be processed...")
    time.sleep(5) # Wait for processing
    
    print(f"Generating content for {chunk_filename}...")
    response = client.models.generate_content(
        model='gemini-2.5-flash',
        contents=[uploaded_file, PROMPT],
        config=types.GenerateContentConfig(
            response_mime_type="application/json",
            temperature=0.2
        )
    )
    
    try:
        import re
        raw_text = response.text
        match = re.search(r'```json(.*?)```', raw_text, re.DOTALL)
        if match:
            raw_text = match.group(1).strip()
        data = json.loads(raw_text)
        with open(f"extracted_{start_page}_{end_page}.json", "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2)
        print(f"Saved extracted_{start_page}_{end_page}.json")
    except Exception as e:
        print("Failed to parse JSON:", e)
        print("Raw response:", response.text)
        
    # Cleanup
    client.files.delete(name=uploaded_file.name)
    os.remove(chunk_filename)

def main():
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("GEMINI_API_KEY is not set.")
        return
        
    client = genai.Client(api_key=api_key)
    pdf_path = "defence_pdf.pdf"
    doc = fitz.open(pdf_path)
    total_pages = doc.page_count
    doc.close()
    
    chunk_size = 40
    for i in range(0, total_pages, chunk_size):
        start_page = i
        end_page = min(i + chunk_size - 1, total_pages - 1)
        if os.path.exists(f"extracted_{start_page}_{end_page}.json"):
            print(f"Skipping {start_page} to {end_page} as it already exists.")
            continue
            
        print(f"--- Processing Pages {start_page} to {end_page} ---")
        try:
            process_chunk(client, pdf_path, start_page, end_page)
            # Invoke node to merge immediately
            os.system(f"node scripts/merge_json.js extracted_{start_page}_{end_page}.json")
            time.sleep(20) # Rate limit pacing
        except Exception as e:
            print("Failed processing chunk:", e)
            time.sleep(30)

if __name__ == "__main__":
    main()
