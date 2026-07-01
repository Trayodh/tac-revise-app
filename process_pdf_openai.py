import os
import json
import base64
import time
import fitz  # PyMuPDF
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

# Initialize OpenAI client with the provided API key
client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))
CHUNKS_DIR = 'pdf_chunks'

def extract_from_chunk_with_retry(file_path, subject, chunk_name, retries=3):
    prompt = f"""You are an expert UPSC CDS exam content creator.
I have provided images of an official scanned CDS Question Paper.
Your task is to use your vision capabilities to read the text in these images and extract all complete multiple-choice questions.

Output MUST be a raw JSON array of objects with this exact structure:
[
  {{
    "question": "The full question text.",
    "options": ["Option A text", "Option B text", "Option C text", "Option D text"],
    "correct": 0, // index of correct option (0-3). Guess based on your knowledge if unknown.
    "explanation": "Detailed explanation of why this option is correct.",
    "topicId": "{'general_knowledge' if subject == 'gs' else 'english'}"
  }}
]
Output ONLY raw JSON. Do not use markdown backticks.
Do not extract incomplete questions that are cut off at the page boundaries.
"""

    print(f"\nRendering {chunk_name} to images...")
    # Render PDF pages to base64 images
    base64_images = []
    try:
        doc = fitz.open(file_path)
        for page_num in range(len(doc)):
            page = doc.load_page(page_num)
            pix = page.get_pixmap(dpi=150)  # 150 DPI is usually enough for OCR
            img_bytes = pix.tobytes("jpeg")
            base64_images.append(base64.b64encode(img_bytes).decode('utf-8'))
        doc.close()
    except Exception as e:
        print(f"Failed to render {chunk_name}: {e}")
        return []

    content = [{"type": "text", "text": prompt}]
    for b64_img in base64_images:
        content.append({
            "type": "image_url",
            "image_url": {
                "url": f"data:image/jpeg;base64,{b64_img}",
                "detail": "high"
            }
        })

    for attempt in range(1, retries + 1):
        print(f"Uploading {chunk_name} to OpenAI (Attempt {attempt}/{retries})...")
        try:
            response = client.chat.completions.create(
                model="gpt-4o",
                messages=[
                    {
                        "role": "user",
                        "content": content
                    }
                ],
                temperature=0.1
            )
            
            raw_text = response.choices[0].message.content.strip()
            if raw_text.startswith('```json'):
                raw_text = raw_text[7:]
            if raw_text.startswith('```'):
                raw_text = raw_text[3:]
            if raw_text.endswith('```'):
                raw_text = raw_text[:-3]
            raw_text = raw_text.strip()
            
            try:
                parsed = json.loads(raw_text)
                print(f"Success: Extracted {len(parsed)} questions from {chunk_name}")
                return parsed
            except json.JSONDecodeError as e:
                print(f"JSON Parse Error on {chunk_name}: {e}")
                if attempt == retries:
                    return []
        except Exception as err:
            print(f"API Error on {chunk_name}: {err}")
            if attempt == retries:
                return []
            time.sleep(5)
            
    return []

def main():
    bank_file = 'question_banks/cds_pyq_bank.json'
    all_questions = {'gs': [], 'english': []}
    
    if os.path.exists(bank_file):
        try:
            with open(bank_file, 'r', encoding='utf-8') as f:
                all_questions = json.load(f)
            if 'gs' not in all_questions: all_questions['gs'] = []
            if 'english' not in all_questions: all_questions['english'] = []
        except Exception:
            pass
            
    if not os.path.exists(CHUNKS_DIR):
        print(f"Directory {CHUNKS_DIR} does not exist.")
        return
        
    files = [f for f in os.listdir(CHUNKS_DIR) if f.endswith('.pdf')]
    print(f"Found {len(files)} chunks to process. Using OpenAI GPT-4o.")
    
    for i, file in enumerate(files):
        file_path = os.path.join(CHUNKS_DIR, file)
        subject = 'gs' if file.startswith('gs_') else 'english'
        
        parsed_qs = extract_from_chunk_with_retry(file_path, subject, file)
        if parsed_qs and len(parsed_qs) > 0:
            all_questions[subject].extend(parsed_qs)
            
            os.makedirs('question_banks', exist_ok=True)
            with open(bank_file, 'w', encoding='utf-8') as f:
                json.dump(all_questions, f, indent=2)
                
        # Optional: unlink processed files
        # try:
        #     os.unlink(file_path)
        # except:
        #     pass

    print(f"\nAll done! Total GS: {len(all_questions['gs'])}, Total English: {len(all_questions['english'])}")

if __name__ == '__main__':
    main()
