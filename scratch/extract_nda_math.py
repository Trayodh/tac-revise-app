import os
import json
import time
import google.generativeai as genai
from dotenv import load_dotenv
import fitz  # PyMuPDF
import glob
import subprocess

load_dotenv()
api_key = os.getenv("GEMINI_API_KEY")
if not api_key:
    raise ValueError("GEMINI_API_KEY not found in .env")

genai.configure(api_key=api_key)
# Using flash for speed/cost, Pro would be better but rate limits are stricter
model = genai.GenerativeModel("gemini-1.5-flash")

file_ids = [
    "1AgO_fk_aT-BTJJWAJAhLjX8ybSQQezG6",
    "1COOThz5EzHQ9xyw4vMto_EVf8NmohgrE",
    "1zC5SGDq_1ImnRDYdhXPTICtB5rz5-gJs",
    "10hCZeWBJqlMDcFdkLWcllWL51mhFhgoB",
    "1r-zjrDBQHOTYsaPwBWfcxMNN0QB4OePw",
    "1cmf19qgfdEdv6vqXb9tyHJoDpkvyPSMs",
    "1Oj_C0Gwe777BCpdhtBSwCrjQkQQYmgYN",
    "1X6sbOw3hBCgjO8AP3gk5GLAT9OgMZswE",
    "1aSHWOjSZfvcKH6M-OQgp48_5pukgdSx_"
]

os.makedirs('scratch/pdf_downloads', exist_ok=True)
os.makedirs('scratch/parsed_pages', exist_ok=True)

# Helper for parsing
def process_page(pdf_path, page_num, image_path):
    output_json = f"scratch/parsed_pages/{os.path.basename(pdf_path)}_page_{page_num}.json"
    if os.path.exists(output_json):
        return  # already processed
        
    print(f"Processing {pdf_path} page {page_num}...")
    
    # Upload image to Gemini
    try:
        sample_file = genai.upload_file(path=image_path)
        
        prompt = """
        You are an expert OCR system for Indian competitive exams. Extract all the mathematical questions from this image.
        The image contains questions in both Hindi and English. Only extract the ENGLISH version of the questions.
        Output MUST be a raw JSON array (do not wrap in markdown blocks).
        The JSON must match this structure:
        [
          {
            "question": "The english question text, formatting math with LaTeX if complex",
            "options": ["A. option1", "B. option2", "C. option3", "D. option4"],
            "explanation": "",
            "topicId": "MATHS_Misc"
          }
        ]
        If the page has no questions, return an empty array [].
        """
        response = model.generate_content([sample_file, prompt])
        
        text = response.text
        if text.startswith('```json'):
            text = text[7:]
        if text.endswith('```'):
            text = text[:-3]
        if text.endswith('```\n'):
            text = text[:-4]
            
        data = json.loads(text.strip())
        
        with open(output_json, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2)
            
        genai.delete_file(sample_file.name)
        time.sleep(1) # avoid rate limits
    except Exception as e:
        print(f"Failed on {pdf_path} page {page_num}: {e}")

# 1. Download
for i, fid in enumerate(file_ids):
    pdf_path = f"scratch/pdf_downloads/nda_math_{i}.pdf"
    if not os.path.exists(pdf_path):
        print(f"Downloading {pdf_path}...")
        try:
            subprocess.run(["python", "-m", "gdown", fid, "-O", pdf_path], check=True)
        except subprocess.CalledProcessError:
            print(f"Failed to download {fid}")
        
# 2. Process
for pdf_path in glob.glob("scratch/pdf_downloads/*.pdf"):
    doc = fitz.open(pdf_path)
    # Skip first 2 pages (usually instructions)
    start_page = 2 if len(doc) > 4 else 0
    for page_num in range(start_page, len(doc)):
        page = doc[page_num]
        pix = page.get_pixmap(dpi=150)
        img_path = f"scratch/temp_page.png"
        pix.save(img_path)
        process_page(pdf_path, page_num, img_path)

# 3. Combine
all_questions = []
for json_file in glob.glob("scratch/parsed_pages/*.json"):
    try:
        with open(json_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
            if isinstance(data, list):
                all_questions.extend(data)
    except:
        pass

with open('question_banks/nda_math_bank.json', 'w', encoding='utf-8') as f:
    json.dump(all_questions, f, indent=2)
print(f"Successfully compiled {len(all_questions)} NDA math questions!")
