import os
import sys
import json
import base64
import time
import requests
import fitz  # PyMuPDF
from dotenv import load_dotenv

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8', errors='replace')
if hasattr(sys.stderr, 'reconfigure'):
    sys.stderr.reconfigure(encoding='utf-8', errors='replace')

load_dotenv()
GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY")

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

## STEP 8 — EXTRACT TABLES
Convert into markdown format if possible or describe row by row.

## STEP 9 — EXTRACT MAPS
Describe boundaries, important locations, lines of latitude/longitude, directions.

## STEP 10 — EXTRACT MATHEMATICS
Use plain text for formulae, e.g., a^2 + b^2 = c^2, integral(x dx), sum(x_i).

## STEP 11 - OUTPUT FORMAT
You must respond with ONLY a raw JSON object containing two arrays: `notes_database` and `question_database`. Do NOT wrap the JSON in markdown code blocks.

Format for `notes_database`:
[
  {
    "id": "generate-unique-id",
    "subject": "...",
    "chapter": "...",
    "topic": "...",
    "text": "...", // MUST contain rich HTML styling: use <p>, <ul>, <li>, <strong>, <em>. Do NOT use markdown in this field.
    "formulas": ["...", "..."], // Array of LaTeX or plain text math formulas extracted from this topic
    "tables": [ // Array of tables found, formatted strictly as markdown tables
      "| Col 1 | Col 2 |\n|---|---|\n| Data | Data |"
    ],
    "image_descriptions": [ // Highly detailed descriptions of any diagrams, maps, or charts
      "..."
    ],
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
    "question_id": "...",
    "question_number": "...",
    "question_text": "...",
    "options": ["...", "...", "...", "..."],
    "correct_answer": "...",
    "explanation": "...",
    "marks": 1,
    "negative_marks": 0.33,
    "year": "...",
    "exam": "...",
    "paper": "...",
    "shift": "...",
    "subject": "...",
    "chapter": "...",
    "subchapter": "...",
    "topic": "...",
    "difficulty": "...",
    "question_type": "..."
  }
]

Do not include any other text, explanations, or conversational filler. Return ONLY the raw JSON format described above.
"""

def robust_json_loads(raw_text):
    if not raw_text:
        raise ValueError("Empty response text")
    clean = raw_text.strip()
    
    import re
    code_match = re.search(r'```(?:json)?\s*(\{[\s\S]*?\})\s*```', clean)
    if code_match:
        clean = code_match.group(1).strip()
    else:
        if clean.startswith('```json'):
            clean = clean[7:]
        if clean.startswith('```'):
            clean = clean[3:]
        if clean.endswith('```'):
            clean = clean[:-3]
        clean = clean.strip()
        
        target_idx = clean.find('"notes_database"')
        if target_idx != -1:
            s_idx = clean.rfind('{', 0, target_idx)
            e_idx = clean.rfind('}')
            if s_idx != -1 and e_idx > s_idx:
                clean = clean[s_idx:e_idx+1]
        elif '{' in clean:
            s_idx = clean.find('{')
            e_idx = clean.rfind('}')
            if e_idx > s_idx:
                clean = clean[s_idx:e_idx+1]
            
    try:
        return json.loads(clean, strict=False)
    except Exception:
        pass
        
    import ast
    try:
        import re
        clean_py = re.sub(r'\bnull\b', 'None', clean)
        clean_py = re.sub(r'\btrue\b', 'True', clean_py)
        clean_py = re.sub(r'\bfalse\b', 'False', clean_py)
        parsed = ast.literal_eval(clean_py)
        if isinstance(parsed, (dict, list)):
            return parsed
    except Exception:
        pass
        
    import re
    # Fix single-quoted keys: {'key': ...} -> {"key": ...}
    try:
        clean_dq = re.sub(r"([{,]\s*)'([^']+)'(\s*:)", r'\1"\2"\3', clean)
        return json.loads(clean_dq, strict=False)
    except Exception:
        pass

    # Fix unquoted keys: {key: ...} -> {"key": ...}
    try:
        clean_uq = re.sub(r'([{,]\s*)([a-zA-Z_][a-zA-Z0-9_]*)(\s*:)', r'\1"\2"\3', clean)
        return json.loads(clean_uq, strict=False)
    except Exception:
        pass
        
    import re
    # Fix invalid backslashes (e.g. LaTeX \alpha, \sqrt, etc.)
    fixed = re.sub(r'\\(?![/\\\"bfnrtu]|u[0-9a-fA-F]{4})', r'\\\\', clean)
    try:
        return json.loads(fixed, strict=False)
    except Exception:
        pass
        
    # Double backslashes that do not escape a quote
    fixed_all = re.sub(r'(?<!\\)\\(?!"|\\)', r'\\\\', clean)
    try:
        return json.loads(fixed_all, strict=False)
    except Exception:
        pass
        
    # Unterminated string repair
    unescaped_quotes = len(re.findall(r'(?<!\\)"', clean))
    quote_fix = '"' if unescaped_quotes % 2 != 0 else ''
    
    for fix in [quote_fix + '}]}', quote_fix + '"}', quote_fix + ']}', quote_fix + '}', quote_fix + ']', '}]}', '"}', ']}', '}', ']']:
        for base in [fixed, fixed_all, clean]:
            try:
                return json.loads(base + fix, strict=False)
            except Exception:
                pass
            
    for base in [fixed, fixed_all, clean]:
        last_brace = base.rfind('}')
        if last_brace > 0:
            for suffix in ['', ']}', ']', '}}', '}]}', '}]']:
                try:
                    return json.loads(base[:last_brace+1] + suffix, strict=False)
                except Exception:
                    pass
                
    return json.loads(clean, strict=False)

def extract_content(b64_img, page_text, prompt):
    max_retries = 3
    base_delay = 15

    # Use the modern google.genai SDK for native Gemini
    from google import genai
    from google.genai import types
    
    client = genai.Client(api_key=GEMINI_API_KEY)

    gemini_models = ["gemini-3.1-flash-lite", "gemini-2.5-flash-lite", "gemini-2.5-flash", "gemini-3.8-flash"]

    for model_name in gemini_models:
        print(f"Attempting extraction with native_gemini - {model_name}...")
        
        for attempt in range(max_retries):
            try:
                image_bytes = base64.b64decode(b64_img)
                
                response = client.models.generate_content(
                    model=model_name,
                    contents=[
                        types.Content(
                            parts=[
                                types.Part.from_text(text=prompt),
                                types.Part.from_bytes(data=image_bytes, mime_type="image/jpeg"),
                            ]
                        )
                    ],
                    config=types.GenerateContentConfig(
                        response_mime_type="application/json",
                        temperature=0.1,
                    ),
                )
                
                raw_text = response.text
                if not raw_text:
                    raise ValueError(f"Empty response text from {model_name}")
                    
                return robust_json_loads(raw_text)
                
            except Exception as e:
                error_msg = str(e).lower()
                print(f"API Error ({model_name}): {e}")
                
                # Daily quota exhaustion - switch model
                if "quota exceeded" in error_msg or "resource_exhausted" in error_msg or "generatecontentfree" in error_msg.replace("_", ""):
                    print(f"Daily quota reached on {model_name}. Switching to next model...")
                    break
                    
                # Transient 503 high demand or temporary rate limit - retry with delay
                if any(k in error_msg for k in ["503", "unavailable", "high demand", "rate", "429"]):
                    if attempt < max_retries - 1:
                        delay = 6 * (attempt + 1)
                        print(f"Transient spike ({e}) on {model_name}. Retrying in {delay}s (attempt {attempt+1}/{max_retries})...")
                        time.sleep(delay)
                        continue
                    else:
                        print(f"Spike persists on {model_name} after {max_retries} attempts. Switching...")
                        break
                
                if "404" in error_msg or "not found" in error_msg:
                    print(f"Model {model_name} not available, switching...")
                    break
                    
                # For other errors, retry
                if attempt < max_retries - 1:
                    time.sleep(5)
                    continue
                break

    # Fallback: Groq or OpenRouter with text
    safe_page_text = (page_text or "")[:1800]
    fallback_prompt = (
        "You are an expert exam content extractor for NDA/CDS/AFCAT.\n"
        "Extract all educational facts and practice questions from the following page text.\n"
        "Directly output the final valid JSON format without reasoning or commentary.\n"
        "Output valid JSON format with keys:\n"
        "1. 'notes_database': list of objects with keys: 'subject', 'chapter', 'subchapter', 'topic', 'content' (detailed markdown notes, facts, definitions, formulas).\n"
        "2. 'question_database': list of MCQ objects with keys: 'question_text', 'options' (dict A,B,C,D), 'correct_answer', 'explanation', 'subject', 'chapter', 'topic'.\n"
        "Return valid JSON only.\n\n"
        "PAGE CONTENT:\n" + safe_page_text
    )

    print("Gemini models exhausted. Trying Groq fallback with text...")
    groq_key = os.environ.get("GROQ_API_KEY")
    if groq_key and page_text and len(page_text.strip()) > 30:
        groq_models = ["openai/gpt-oss-120b", "openai/gpt-oss-20b", "qwen/qwen3.8-27b"]
        url = "https://api.groq.com/openai/v1/chat/completions"
        headers = {"Authorization": f"Bearer {groq_key}", "Content-Type": "application/json"}
        
        for g_model in groq_models:
            print(f"Attempting Groq model: {g_model}...")
            for attempt in range(2):
                try:
                    data = {
                        "model": g_model,
                        "messages": [{"role": "user", "content": fallback_prompt}],
                        "temperature": 0.1,
                        "max_tokens": 3000
                    }
                    response = requests.post(url, headers=headers, json=data, timeout=45)
                    if response.status_code == 200:
                        res_json = response.json()
                        msg = res_json.get("choices", [{}])[0].get("message", {})
                        raw_text = (msg.get("content") or msg.get("reasoning") or "").strip()
                        if raw_text:
                            return robust_json_loads(raw_text)
                    elif response.status_code == 429 and attempt == 0:
                        wait_sec = 25
                        try:
                            import re
                            m_wait = re.search(r'try again in (\d+(?:\.\d+)?)s', response.text)
                            if m_wait:
                                wait_sec = min(int(float(m_wait.group(1)) + 2), 65)
                        except Exception:
                            pass
                        print(f"Groq {g_model} hit rate limit. Waiting {wait_sec}s before retry...")
                        time.sleep(wait_sec)
                        continue
                    else:
                        print(f"Groq {g_model} failed with code {response.status_code}: {response.text[:120]}")
                        break
                except Exception as e:
                    print(f"Groq {g_model} error: {e}")
                    break

    print("Groq exhausted. Trying OpenRouter fallback with text...")
    or_key = os.environ.get("OPENROUTER_API_KEY")
    if or_key and page_text and len(page_text.strip()) > 30:
        or_models = [
            "minimax/minimax-m3.1-flash:free",
            "google/gemma-4-26b-a4b-it:free",
            "nvidia/nemotron-3.5-super-vl:free",
            "nvidia/nemotron-3.5-lightning:free",
            "liquid/lfm-2.5-2.6b:free"
        ]
        url = "https://openrouter.ai/api/v1/chat/completions"
        headers = {"Authorization": f"Bearer {or_key}", "Content-Type": "application/json"}
        
        for model in or_models:
            print(f"Attempting OpenRouter model: {model}...")
            try:
                data = {
                    "model": model,
                    "messages": [{"role": "user", "content": fallback_prompt}],
                    "temperature": 0.1,
                    "max_tokens": 1200
                }
                response = requests.post(url, headers=headers, json=data, timeout=(10, 30))
                if response.status_code == 200:
                    res_json = response.json()
                    msg = res_json.get("choices", [{}])[0].get("message", {})
                    raw_text = (msg.get("content") or msg.get("reasoning") or "").strip()
                    if raw_text:
                        return robust_json_loads(raw_text)
                else:
                    print(f"OpenRouter {model} status {response.status_code}: {response.text[:80]}")
            except Exception as e:
                print(f"OpenRouter model {model} failed: {e}")
                continue
                
    print("All models exhausted for this page.")
    return None

def extract_page(pdf_path, page_num):
    """
    Extracts data from a single page of a PDF using vision models.
    page_num is 1-indexed.
    """
    try:
        doc = fitz.open(pdf_path)
        if page_num < 1 or page_num > len(doc):
            print(f"Invalid page number {page_num} for {pdf_path}")
            return None
            
        page = doc.load_page(page_num - 1)
        pix = page.get_pixmap(dpi=150)
        img_bytes = pix.tobytes("jpeg")
        b64_img = base64.b64encode(img_bytes).decode('utf-8')
        page_text = page.get_text()
        doc.close()
        
        result = extract_content(b64_img, page_text, MASTER_PROMPT)
        
        if result:
            if isinstance(result, list):
                notes = [x for x in result if isinstance(x, dict)]
                questions = []
            elif isinstance(result, dict):
                raw_n = result.get("notes_database", [])
                raw_q = result.get("question_database", [])
                notes = [x for x in raw_n if isinstance(x, dict)] if isinstance(raw_n, list) else []
                questions = [x for x in raw_q if isinstance(x, dict)] if isinstance(raw_q, list) else []
            else:
                return None
            return {"notes": notes, "questions": questions}
        return None
    except Exception as e:
        print(f"Error extracting page {page_num} from {pdf_path}: {e}")
        return None
