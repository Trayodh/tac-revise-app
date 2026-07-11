import os
import json
import fitz
import time
from dotenv import load_dotenv
from google import genai
from google.genai import types
from pydantic import BaseModel, Field
from tenacity import retry, wait_exponential, stop_after_attempt
from typing import List, Optional, Dict, Literal

load_dotenv()
api_key = os.environ.get("GEMINI_API_KEY")
client = genai.Client(api_key=api_key)

class Options(BaseModel):
    A: str = Field(description="Option A text")
    B: str = Field(description="Option B text")
    C: str = Field(description="Option C text")
    D: str = Field(description="Option D text")

class BaseQuestion(BaseModel):
    question_text: str = Field(description="The text of the question.")
    options: Options = Field(description="The 4 options (A, B, C, D).")
    correct_option: Optional[str] = Field(description="The correct option letter (A, B, C, or D). Leave null if unknown.")
    explanation: Optional[str] = Field(description="A brief explanation for why the answer is correct.")

class StandaloneQuestion(BaseQuestion):
    type: Literal["standalone_question"] = "standalone_question"

class PassageBlock(BaseModel):
    type: Literal["passage_block"] = "passage_block"
    context_text: str = Field(description="The shared passage, table, or directions for the child questions.")
    child_questions: List[BaseQuestion] = Field(description="The list of questions that belong to this passage.")

class QuestionChunk(BaseModel):
    questions: List[StandaloneQuestion | PassageBlock] = Field(description="A mix of standalone questions and passage blocks.")

SYSTEM_PROMPT = """You are an expert educational content parser for UPSC Defence Exams (NDA, CDS, AFCAT).
Your task is to take raw, unformatted text extracted from a PDF question paper and convert it into a strictly structured JSON format.

CRITICAL RULES:
1. Identify if a question is a "standalone_question" or part of a "passage_block". 
2. A "passage_block" is used when multiple questions share the same context (e.g., Reading Comprehension, Data Interpretation, or shared directions). The shared text MUST go in `context_text`, and the related questions MUST go in `child_questions`.
3. NEVER orphan a child question. If it refers to a passage, it must be inside a `passage_block`.
4. Determine the correct answer if you can, and provide a step-by-step explanation. If you cannot determine the answer, leave it null but still try to provide reasoning if possible.
5. Extract the 4 options cleanly without prefixing them with A), B), etc. in the value itself.
"""

@retry(wait=wait_exponential(multiplier=2, min=5, max=60), stop=stop_after_attempt(5))
def parse_chunk_via_llm(raw_text: str) -> list:
    response = client.models.generate_content(
        model='gemini-2.5-flash',
        contents=f"Parse the following exam text:\n\n{raw_text}",
        config=types.GenerateContentConfig(
            system_instruction=SYSTEM_PROMPT,
            temperature=0.1,
            response_mime_type="application/json",
            response_schema=QuestionChunk,
        )
    )
    data = json.loads(response.text)
    return data.get("questions", [])

def extract_raw_text(pdf_path: str) -> str:
    doc = fitz.open(pdf_path)
    text = ""
    for page in doc:
        text += page.get_text("text") + "\n\n"
    return text

def test_run():
    pdf_path = "PYQ Papers/CDS-1-English-Question-Paper-12-April-2026-exam-1.pdf"
    print(f"Reading {pdf_path}...")
    raw_text = extract_raw_text(pdf_path)
    words = raw_text.split()
    
    # Take a chunk from the middle where there might be a passage block
    chunk = " ".join(words[2000:2300]) 
    
    print("Sending chunk to Gemini...")
    parsed_questions = parse_chunk_via_llm(chunk)
    
    with open("output/papers/test_output.json", "w", encoding="utf-8") as f:
        json.dump(parsed_questions, f, indent=2)
    print("Done! Saved to output/papers/test_output.json")

if __name__ == "__main__":
    os.makedirs("output/papers", exist_ok=True)
    test_run()
