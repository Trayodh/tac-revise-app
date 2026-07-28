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

## STEP 11 — OUTPUT FORMAT
You must respond with ONLY a raw JSON object containing two arrays: `notes_database` and `question_database`. Do NOT wrap the JSON in markdown code blocks.

Format:
{
  "notes_database": [
    {
       "subject": "...", "chapter": "...", "subchapter": "...", "topic": "...", "subtopic": "...", "notes": "..."
    }
  ],
  "question_database": [
    {
       "question_id": "...", "question_number": "...", "question_text": "...", "options": {"A": "...", "B": "...", "C": "...", "D": "..."}, "correct_answer": "...", "explanation": "...", "marks": "...", "negative_marks": "...", "year": "...", "exam": "...", "paper": "...", "shift": "...", "subject": "...", "chapter": "...", "subchapter": "...", "topic": "...", "difficulty": "...", "question_type": "...", "image_description": "..."
    }
  ]
}

## QUALITY CHECK
Verify: Every page processed, No theory inside question database, No questions inside notes database, No paragraph-based questions extracted, OCR mistakes corrected only when obvious, Mathematical symbols preserved, Tables preserved, Images described, Chapter identified, Topic identified, Metadata extracted, No duplicate pages, No hallucinated content, No invented answers. If unknown, leave as "Unknown".
"""

def extract_from_image_gemini(b64_img, prompt):
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key={GEMINI_API_KEY}"
    headers = {"Content-Type": "application/json"}
    
    data = {
        "contents": [
            {
                "parts": [
                    {"text": prompt},
                    {
                        "inline_data": {
                            "mime_type": "image/jpeg",
                            "data": b64_img
                        }
                    }
                ]
            }
        ],
        "generationConfig": {
            "temperature": 0.1,
            "response_mime_type": "application/json"
        }
    }

    try:
        response = requests.post(url, headers=headers, json=data)
        response.raise_for_status()
        res_json = response.json()
        
        if "candidates" in res_json and len(res_json["candidates"]) > 0:
            text = res_json["candidates"][0]["content"]["parts"][0]["text"]
            return json.loads(text)
        else:
            print("No output generated by Gemini.")
            print(res_json)
            return None
    except Exception as e:
        print(f"API Error: {e}")
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

        result = extract_from_image_gemini(b64_img, MASTER_PROMPT)
        
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
