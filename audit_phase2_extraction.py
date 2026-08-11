import json
import os
import fitz
import base64
import requests
import time
from dotenv import load_dotenv

load_dotenv()
GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY")

def get_ocr_text(b64_img):
    if not GEMINI_API_KEY:
        return "[OCR FAILED: NO API KEY]"
        
    url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key={GEMINI_API_KEY}"
    headers = {"Content-Type": "application/json"}
    
    data = {
        "contents": [
            {
                "parts": [
                    {"text": "Extract all text from this image accurately. Do not add any extra information. If there is no text, reply with [NO TEXT]."},
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
            "temperature": 0.1
        }
    }

    try:
        response = requests.post(url, headers=headers, json=data)
        response.raise_for_status()
        res_json = response.json()
        
        if "candidates" in res_json and len(res_json["candidates"]) > 0:
            text = res_json["candidates"][0]["content"]["parts"][0]["text"]
            return text.strip()
        return "[OCR FAILED: EMPTY RESPONSE]"
    except Exception as e:
        return f"[OCR FAILED: {str(e)}]"

def process_pdf(filepath):
    print(f"Processing PDF: {filepath}")
    doc = fitz.open(filepath)
    extracted_data = []
    failed_pages = []
    
    for i in range(len(doc)):
        page = doc.load_page(i)
        text = page.get_text("text").strip()
        
        # If very little text, assume it's image-based and needs OCR
        if len(text) < 50:
            print(f"  Page {i+1}: minimal text ({len(text)} chars). Attempting OCR...")
            pix = page.get_pixmap(dpi=150)
            img_bytes = pix.tobytes("jpeg")
            b64_img = base64.b64encode(img_bytes).decode('utf-8')
            
            ocr_text = get_ocr_text(b64_img)
            
            if "[OCR FAILED" in ocr_text:
                print(f"  Page {i+1}: OCR Failed")
                failed_pages.append(i+1)
            
            text += f"\\n[OCR ADDITION]\\n{ocr_text}"
            time.sleep(1) # Simple rate limit
            
        extracted_data.append({
            "page": i + 1,
            "text": text
        })
        
    doc.close()
    
    # Save extracted text
    base_name = os.path.basename(filepath)
    output_file = f"extracted_{base_name}.json"
    
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(extracted_data, f, indent=2)
        
    return failed_pages

def main():
    if not os.path.exists("document_inventory.json"):
        print("Inventory not found. Run phase 1 first.")
        return
        
    with open("document_inventory.json", "r") as f:
        inventory = json.load(f)
        
    # Process only unique files to save time
    processed_hashes = set()
    all_failed_pages = {}
    
    for item in inventory:
        if item["status"] == "success" and item["hash"] not in processed_hashes:
            processed_hashes.add(item["hash"])
            filepath = item["filename"]
            failed = process_pdf(filepath)
            
            if failed:
                all_failed_pages[filepath] = failed
                
    with open("OCR_Extraction_Failure_Register.json", "w") as f:
        json.dump(all_failed_pages, f, indent=2)
        
    print("Extraction Phase Complete!")

if __name__ == "__main__":
    main()
