import os
import json
import base64
import time
import sys
import argparse
import fitz  # PyMuPDF
import requests
from dotenv import load_dotenv

load_dotenv()
GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY")

if not GEMINI_API_KEY:
    print("Error: GEMINI_API_KEY not found in .env file.")
    sys.exit(1)

MASTER_PROMPT = """
# MASTER DOCUMENT EXTRACTION PROMPT FOR NDA/CDS/AFCAT KNOWLEDGE BASE

## ROLE
You are an expert Defence Examination Content Engineer responsible for converting raw study material into a structured knowledge base for NDA, CDS, AFCAT, CAPF, Territorial Army, and Intelligence Bureau examinations.

Your objective is to extract information with **100% fidelity** while maintaining the original meaning. Never summarize unless explicitly instructed.

## PRIMARY OBJECTIVES
1. Identify the document type.
2. Separate educational content from questions.
3. Extract notes into a structured Notes Database.
4. Extract questions into a structured Question Database.
5. Never mix these two outputs.
6. Ignore advertisements, page numbers, watermarks, indexes, answer keys, publisher information, blank pages, decorative graphics, and irrelevant metadata.

## STEP 1 — IDENTIFY DOCUMENT TYPE
Classify the document as one of: Pathfinder Theory Book, NCERT, Vision IAS, Newspaper, Current Affairs Magazine, Previous Year Paper, Practice Question Bank, Mock Test, Government Report, Defence Report, Atlas, Other.

## STEP 2 — DOCUMENT ANALYSIS
Identify Subject (Mathematics, English, Physics, Chemistry, Biology, History, Geography, Indian Polity, Economics, Current Affairs, Defence, Science & Technology, Environment, International Relations, Miscellaneous), Chapter, Subchapter, Topic, Subtopic.

## STEP 3 — IF THE PAGE CONTAINS THEORY
Extract ONLY educational content.
Store: Subject, Chapter, Subchapter, Topic, Subtopic, Definitions, Facts, Concepts, Formulae, Dates, Events, Maps, Diagrams (describe in words), Tables, Examples, Exceptions, Important Notes, Memory Tricks, Frequently Asked Exam Facts, Important Persons, Important Places, Treaties, Acts, Committees, Schemes, Scientific Principles, Military Operations, Organizations, Ranks, Equipment, Abbreviations, Vocabulary.
CRITICAL: Do NOT skip, condense, drop, or summarize ANY facts, bullet points, or sections. You must extract and transcribe absolutely everything present in the notes.
Do NOT rewrite. Preserve meaning.

## STEP 4 — IF THE PAGE CONTAINS QUESTIONS
Extract every question separately.
For each question extract: Question ID (generate), Question Number, Question Text, Options (A, B, C, D), Correct Answer (only if provided), Explanation (only if provided), Marks, Negative Marks (if mentioned), Year, Exam, Paper, Shift, Subject, Chapter, Subchapter, Topic, Difficulty, Question Type (MCQ, Numerical, Assertion-Reason, Statement Based, Match the Following, Fill in the Blank, Chronology, Map Based, Image Based, Table Based, Reasoning, Reading Comprehension, Paragraph Based, Mathematics).

IMPORTANT: Ignore completely: Reading comprehension, Paragraph based questions, Passage based questions, Case studies, Long comprehension sets. Do NOT extract these.

## STEP 5 — IDENTIFY QUESTION ORIGIN
Identify: NDA, CDS, AFCAT, CAPF, Territorial Army, IB, UPSC, State PSC, Unknown. Extract year whenever possible.

## STEP 6 — CLASSIFY DIFFICULTY
Very Easy, Easy, Medium, Hard, Very Hard.

## STEP 7 — EXTRACT IMAGES
If images exist: Do NOT ignore. Instead describe: Diagram, Map, Flowchart, Graph, Military Equipment, Historical Figure, Animal, Plant, Geographical Feature, Astronomical Object, Scientific Instrument, Chemical Structure, Circuit Diagram. Label every image with its related chapter.

## STEP 8 — EQUATION EXTRACTION
Never convert equations into plain text. Keep mathematical notation intact. Preserve: Fractions, Roots, Matrices, Vectors, Integrals, Derivatives, Summations, Limits, Trigonometry, Logarithms, Coordinate Geometry, Probability notation, Units, Symbols.

## STEP 9 — TABLE EXTRACTION
Maintain complete table structure. Do not merge rows. Do not remove columns.

## STEP 10 — DUPLICATE DETECTION
If identical theory already exists: Flag Duplicate. If identical question already exists: Flag Duplicate. Do not delete.

## STEP 11 - OUTPUT FORMAT
You must respond with ONLY a raw JSON object containing two arrays: `notes_database` and `question_database`. Do NOT wrap the JSON in markdown code blocks.

Format for `notes_database`:
[
  {
    "id": "generate-unique-id",
    "topic": "...",
    "text": "...", // MUST contain rich HTML styling: use <p>, <ul>, <li>, <strong>, <em>, and inline CSS (e.g. <span style='color: var(--success);'> for correct info, <span style='color: var(--warning);'> for important keywords)
    "details": {
      "summary": "..."
    },
    "mcq": {
      "question": "...",
      "options": ["A", "B", "C", "D"],
      "correct": 0,
      "explanation": "..."
    }
  }
]

Format for `question_database`:
[
  {
     "question_id": "...", "question_number": "...", "question_text": "...", "options": {"A": "...", "B": "...", "C": "...", "D": "..."}, "correct_answer": "...", "explanation": "...", "marks": "...", "negative_marks": "...", "year": "...", "exam": "...", "paper": "...", "shift": "...", "subject": "...", "chapter": "...", "subchapter": "...", "topic": "...", "difficulty": "...", "question_type": "...", "image_description": "..."
  }
]
}

## QUALITY CHECK
Verify: Every page processed, No theory inside question database, No questions inside notes database, No paragraph-based questions extracted, OCR mistakes corrected only when obvious, Mathematical symbols preserved, Tables preserved, Images described, Chapter identified, Topic identified, Metadata extracted, No duplicate pages, No hallucinated content, No invented answers. If unknown, leave as "Unknown".
IMPORTANT: The `notes_database` MUST use exactly the keys specified above (`id`, `topic`, `text`, `details`, `mcq`), and `text` MUST use rich HTML formatting matching a modern UI.
"""

from openai import OpenAI

client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=os.environ.get("OPENROUTER_API_KEY"),
)

def extract_from_image(b64_img, prompt):
    max_retries = 3
    base_delay = 30

    models = [
        {"provider": "openrouter", "model": "openai/gpt-4o"},
        {"provider": "openrouter", "model": "anthropic/claude-3.5-sonnet"},
        {"provider": "openrouter", "model": "google/gemini-1.5-pro"},
        {"provider": "native_gemini", "model": "gemini-1.5-flash"}
    ]

    content = [
        {"type": "text", "text": prompt},
        {
            "type": "image_url",
            "image_url": {
                "url": f"data:image/jpeg;base64,{b64_img}",
                "detail": "high"
            }
        }
    ]

    for model_config in models:
        provider = model_config["provider"]
        model_name = model_config["model"]
        print(f"Attempting extraction with {provider} - {model_name}...")
        
        for attempt in range(max_retries):
            try:
                if provider == "openrouter":
                    response = client.chat.completions.create(
                        model=model_name,
                        messages=[{"role": "user", "content": content}],
                        temperature=0.1
                    )
                    raw_text = response.choices[0].message.content.strip()
                elif provider == "native_gemini":
                    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key={GEMINI_API_KEY}"
                    headers = {"Content-Type": "application/json"}
                    data = {
                        "contents": [{"parts": [{"text": prompt}, {"inline_data": {"mime_type": "image/jpeg", "data": b64_img}}]}],
                        "generationConfig": {"temperature": 0.1, "response_mime_type": "application/json"}
                    }
                    response = requests.post(url, headers=headers, json=data)
                    response.raise_for_status()
                    res_json = response.json()
                    raw_text = res_json["candidates"][0]["content"]["parts"][0]["text"]
                
                # Clean markdown JSON formatting if present
                if raw_text.startswith('```json'):
                    raw_text = raw_text[7:]
                if raw_text.startswith('```'):
                    raw_text = raw_text[3:]
                if raw_text.endswith('```'):
                    raw_text = raw_text[:-3]
                    
                return json.loads(raw_text.strip())
                
            except Exception as e:
                error_msg = str(e).lower()
                print(f"API Error ({model_name}): {e}")
                
                # If out of credits or context length exceeded, don't retry same model
                if "402" in error_msg or "insufficient_quota" in error_msg:
                    print(f"Out of credits for {model_name}, switching model...")
                    break
                    
                if "429" in error_msg or "too many requests" in error_msg:
                    print(f"Rate limited on {model_name}. Retrying in {base_delay * (2 ** attempt)} seconds...")
                    time.sleep(base_delay * (2 ** attempt))
                    continue
                
                # For other errors, switch model immediately
                break
                
    print("All models exhausted for this page.")
    return None

def main():
    parser = argparse.ArgumentParser(description="Extract PDF to Notes & Question Databases using Gemini 1.5 Pro")
    parser.add_argument("pdf_path", help="Path to the PDF file")
    parser.add_argument("--start", type=int, default=1, help="Start page (1-indexed)")
    parser.add_argument("--end", type=int, default=None, help="End page (1-indexed, inclusive)")
    args = parser.parse_args()

    if not os.path.exists(args.pdf_path):
        print(f"File not found: {args.pdf_path}")
        return

    doc = fitz.open(args.pdf_path)
    total_pages = len(doc)
    start_page = max(1, args.start)
    end_page = min(total_pages, args.end) if args.end else total_pages

    print(f"Processing {args.pdf_path} from page {start_page} to {end_page} (Total pages: {total_pages})")

    notes_db_file = "notes_database.json"
    questions_db_file = "question_database.json"

    # Initialize DBs if they don't exist
    for db_file in [notes_db_file, questions_db_file]:
        if not os.path.exists(db_file):
            with open(db_file, "w", encoding="utf-8") as f:
                json.dump([], f)

    for i in range(start_page - 1, end_page):
        page_num = i + 1
        print(f"\n--- Processing Page {page_num}/{total_pages} ---")
        
        page = doc.load_page(i)
        pix = page.get_pixmap(dpi=150)
        img_bytes = pix.tobytes("jpeg")
        b64_img = base64.b64encode(img_bytes).decode('utf-8')

        result = extract_from_image(b64_img, MASTER_PROMPT)
        
        if result:
            notes = result.get("notes_database", [])
            questions = result.get("question_database", [])
            
            print(f"Extracted {len(notes)} notes and {len(questions)} questions.")

            # Load, append, save
            if notes:
                with open(notes_db_file, "r", encoding="utf-8") as f:
                    db = json.load(f)
                db.extend(notes)
                with open(notes_db_file, "w", encoding="utf-8") as f:
                    json.dump(db, f, indent=2)
            
            if questions:
                with open(questions_db_file, "r", encoding="utf-8") as f:
                    db = json.load(f)
                db.extend(questions)
                with open(questions_db_file, "w", encoding="utf-8") as f:
                    json.dump(db, f, indent=2)
            
            print(f"Successfully saved to databases.")
        else:
            print("Failed to process page or parse JSON.")
        
        # Simple rate limiting protection
        time.sleep(4)

    doc.close()
    print("\nExtraction complete.")

if __name__ == "__main__":
    main()
