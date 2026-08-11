import os
import glob
import fitz
import json
import io
import time
from PIL import Image
from google import genai

# Load Gemini API Key
def load_env():
    env_path = '.env'
    if os.path.exists(env_path):
        with open(env_path, 'r') as f:
            for line in f:
                if line.startswith('GEMINI_API_KEY='):
                    return line.strip().split('=', 1)[1]
    return None

api_key = load_env()
client = genai.Client(api_key=api_key) if api_key else None

def ocr_page_with_gemini(image):
    prompt = """
    Extract all readable text, tables, and questions from this image exactly as they appear.
    If it's a multiple choice question, preserve the formatting for Options (A), (B), (C), (D).
    Do NOT invent missing text. Do NOT solve the questions. Return only the extracted text.
    """
    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=[prompt, image]
        )
        return response.text
    except Exception as e:
        print(f"OCR Error: {e}")
        return None

def test_ocr_batch(sample_size=10):
    print("Initializing OCR Recovery on Sample Batch...")
    all_pdfs = glob.glob('**/*.pdf', recursive=True)
    
    manifest = {}
    if os.path.exists('ocr_manifest.json'):
        with open('ocr_manifest.json', 'r') as f:
            manifest = json.load(f)
            
    processed = 0
    results = []
    
    for pdf_path in all_pdfs:
        if processed >= sample_size:
            break
            
        try:
            doc = fitz.open(pdf_path)
        except Exception:
            continue
            
        for page_num in range(doc.page_count):
            if processed >= sample_size:
                break
                
            page_id = f"{os.path.basename(pdf_path)}_page_{page_num}"
            if page_id in manifest and manifest[page_id]['status'] in ['COMPLETE', 'FAILED']:
                continue
                
            page = doc[page_num]
            text = page.get_text("text").strip()
            
            # If page yields no meaningful text, it requires OCR
            if len(text) < 50:
                print(f"OCR needed for: {page_id}")
                manifest[page_id] = {"status": "PROCESSING"}
                
                # Render to image
                pix = page.get_pixmap(dpi=150)
                img = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
                
                # OCR Call
                extracted_ocr = ocr_page_with_gemini(img)
                
                if extracted_ocr:
                    manifest[page_id] = {
                        "status": "COMPLETE",
                        "method": "GEMINI_VISION",
                        "timestamp": time.time(),
                        "text": extracted_ocr
                    }
                    results.append({
                        "page_id": page_id,
                        "text": extracted_ocr
                    })
                else:
                    manifest[page_id] = {
                        "status": "OCR_FAILED",
                        "error": "Gemini API error or unrecognizable"
                    }
                
                processed += 1
                time.sleep(4) # rate limit prevention
                
                # Save manifest
                with open('ocr_manifest.json', 'w') as f:
                    json.dump(manifest, f, indent=4)
                    
        doc.close()

    print(f"Processed {processed} pages in sample batch.")
    
    # Dump review report
    with open('ocr_sample_report.md', 'w', encoding='utf-8') as f:
        f.write("# OCR Sample Recovery Review\n\n")
        for res in results:
            f.write(f"### {res['page_id']}\n")
            f.write("```text\n")
            f.write(res['text'] + "\n")
            f.write("```\n\n")

if __name__ == "__main__":
    test_ocr_batch(10)
