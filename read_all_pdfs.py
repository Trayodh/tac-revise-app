import os
import json
import fitz
import glob
from google import genai
from dotenv import load_dotenv

load_dotenv()
client = genai.Client(api_key=os.environ.get("GEMINI_API_KEY"))

def get_pdf_toc_or_summary(pdf_path):
    print(f"Reading {pdf_path}...")
    try:
        doc = fitz.open(pdf_path)
        toc = doc.get_toc()
        
        if toc:
            print(f"  Found native TOC with {len(toc)} items.")
            # Format native TOC (level, title, page)
            return {"type": "native_toc", "content": [{"level": item[0], "title": item[1], "page": item[2]} for item in toc]}
        
        print("  No native TOC found. Extracting text from first 15 pages for AI parsing...")
        # Get text from first 15 pages (usually contains index/contents)
        text = ""
        for i in range(min(15, len(doc))):
            text += doc.load_page(i).get_text()
            
        if not text.strip():
            return {"type": "error", "content": "Could not extract text."}
            
        # Use AI to extract syllabus
        prompt = f"""
Analyze the following text extracted from the beginning of a textbook. 
Extract the Table of Contents or Syllabus.
Return a list of chapters and main topics mentioned. Do not output anything else.

TEXT:
{text[:30000]} # Limit to 30k chars to be safe
"""
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt,
        )
        return {"type": "ai_summary", "content": response.text.strip()}
        
    except Exception as e:
        print(f"  Error reading {pdf_path}: {e}")
        return {"type": "error", "content": str(e)}

def main():
    pdfs = glob.glob("*.pdf")
    results = {}
    
    for pdf in pdfs:
        results[pdf] = get_pdf_toc_or_summary(pdf)
        
    with open("pdf_contents_summary.json", "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2)
        
    print("Done! Summary saved to pdf_contents_summary.json")

if __name__ == "__main__":
    main()
