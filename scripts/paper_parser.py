import os
import json
import fitz
import time
from dotenv import load_dotenv
import google.generativeai as genai
from pydantic import BaseModel, Field
from tenacity import retry, wait_exponential, stop_after_attempt
from typing import List, Optional, Literal

# Load Environment Variables
load_dotenv()
api_key = os.environ.get("GEMINI_API_KEY")
if not api_key:
    raise ValueError("GEMINI_API_KEY environment variable not set.")
genai.configure(api_key=api_key)
model = genai.GenerativeModel('gemini-2.5-flash')

# ---------------------------------------------------------------------------
# SCHEMA DEFINITION
# ---------------------------------------------------------------------------

class Options(BaseModel):
    A: str = Field(description="Option A text")
    B: str = Field(description="Option B text")
    C: str = Field(description="Option C text")
    D: str = Field(description="Option D text")

class BaseQuestion(BaseModel):
    question_text: str = Field(description="The text of the question.")
    options: Options = Field(description="The 4 options (A, B, C, D).")
    correct_option: Optional[str] = Field(description="The correct option letter (A, B, C, or D). Leave null if unknown.")
    explanation: Optional[str] = Field(description="A detailed step-by-step explanation for why the answer is correct. Explain the mathematical or logical reasoning clearly.")

class StandaloneQuestion(BaseQuestion):
    type: Literal["standalone_question"] = "standalone_question"

class PassageBlock(BaseModel):
    type: Literal["passage_block"] = "passage_block"
    context_text: str = Field(description="The shared passage, table, or directions for the child questions.")
    child_questions: List[BaseQuestion] = Field(description="The list of questions that belong to this passage.")

class QuestionChunk(BaseModel):
    questions: List[StandaloneQuestion | PassageBlock] = Field(description="A mix of standalone questions and passage blocks.")

# ---------------------------------------------------------------------------
# PARSING LOGIC
# ---------------------------------------------------------------------------

SYSTEM_PROMPT = """You are an expert educational content parser for UPSC Defence Exams (NDA, CDS, AFCAT).
Your task is to take raw, unformatted text extracted from a PDF question paper and convert it into a strictly structured JSON format.

CRITICAL RULES:
1. Identify if a question is a "standalone_question" or part of a "passage_block". 
2. A "passage_block" is used when multiple questions share the same context (e.g., Reading Comprehension, Data Interpretation, or shared directions). The shared text MUST go in `context_text`, and the related questions MUST go in `child_questions`.
3. NEVER orphan a child question. If it refers to a passage, it must be inside a `passage_block`.
4. Determine the correct answer if you can, and provide a detailed step-by-step explanation. If you cannot, leave it null.
5. Extract the 4 options cleanly without prefixing them with A), B), etc. in the value itself.
"""

@retry(wait=wait_exponential(multiplier=2, min=5, max=60), stop=stop_after_attempt(5))
def parse_chunk_via_llm(raw_text: str) -> list:
    """Passes raw text to Gemini and enforces the Pydantic schema."""
    
    schema_str = json.dumps(QuestionChunk.model_json_schema(), indent=2)
    sys_prompt = f"{SYSTEM_PROMPT}\n\nOUTPUT FORMAT:\nYou must output valid JSON matching exactly this schema:\n{schema_str}"
    
    prompt = f"{sys_prompt}\n\nParse the following exam text into JSON:\n\n{raw_text}"
    
    response = model.generate_content(
        prompt,
        generation_config=genai.types.GenerationConfig(
            temperature=0.1,
            response_mime_type="application/json",
        )
    )
    
    # Parse the returned JSON text into a dict
    data = json.loads(response.text)
    return data.get("questions", [])

def extract_raw_text(pdf_path: str) -> str:
    """Extracts text from a PDF file using PyMuPDF."""
    doc = fitz.open(pdf_path)
    text = ""
    for page in doc:
        text += page.get_text("text") + "\n\n"
    return text

def chunk_paper_by_sections(raw_text: str, chunk_size=1000) -> list:
    """
    Naively chunks the text into smaller pieces (by words) to avoid blowing up the LLM context 
    and to keep JSON extraction reliable. We use a bit of overlap.
    """
    words = raw_text.split()
    chunks = []
    overlap = 100
    
    for i in range(0, len(words), chunk_size - overlap):
        chunk = " ".join(words[i:i + chunk_size])
        chunks.append(chunk)
    return chunks

# ---------------------------------------------------------------------------
# ROUTING AND EXECUTION
# ---------------------------------------------------------------------------

def determine_output_file(pdf_name: str) -> str:
    """Routes the PDF to the correct JSON file based on its name."""
    pdf_lower = pdf_name.lower()
    
    if "nda" in pdf_lower:
        if "math" in pdf_lower: return "nda_maths.json"
        else: return "nda_gat.json"
        
    elif "cds" in pdf_lower:
        if "math" in pdf_lower: return "cds_maths.json"
        elif "english" in pdf_lower: return "cds_english.json"
        else: return "cds_gs.json"
        
    elif "afcat" in pdf_lower:
        return "afcat.json"
        
    else:
        return "misc_papers.json"

def process_root_pdfs():
    output_dir = "output/papers"
    os.makedirs(output_dir, exist_ok=True)
    
    pdf_files = [f for f in os.listdir('.') if f.lower().endswith('.pdf')]
    
    for pdf_file in pdf_files:
        out_filename = determine_output_file(pdf_file)
        out_filepath = os.path.join(output_dir, out_filename)
        
        print(f"Processing {pdf_file} -> {out_filepath}")
        
        # Load existing data to prevent cross-contamination / overwrites
        existing_data = {"exam_type": out_filename.split('_')[0].upper(), "questions": []}
        if os.path.exists(out_filepath):
            with open(out_filepath, 'r', encoding='utf-8') as f:
                try:
                    existing_data = json.load(f)
                except json.JSONDecodeError:
                    pass
        
        raw_text = extract_raw_text(pdf_file)
        chunks = chunk_paper_by_sections(raw_text)
        
        for idx, chunk in enumerate(chunks):
            print(f"  Parsing chunk {idx+1}/{len(chunks)} for {pdf_file}...")
            try:
                parsed_questions = parse_chunk_via_llm(chunk)
                existing_data["questions"].extend(parsed_questions)
                time.sleep(5) # Respect Gemini 15 RPM limit
            except Exception as e:
                print(f"  Error parsing chunk {idx+1}: {e}")
                
        # Save back to specific file
        with open(out_filepath, 'w', encoding='utf-8') as f:
            json.dump(existing_data, f, indent=2)
            
        print(f"Completed {pdf_file}. Saved to {out_filepath}")

if __name__ == "__main__":
    process_root_pdfs()
