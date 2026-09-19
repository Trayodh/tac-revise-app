import os
import fitz
import pytesseract
from PIL import Image
import glob
import io

pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

def extract_text_from_pdf(pdf_path):
    doc = fitz.open(pdf_path)
    full_text = ""
    for i in range(len(doc)):
        page = doc.load_page(i)
        pix = page.get_pixmap(dpi=300)
        img = Image.open(io.BytesIO(pix.tobytes("png")))
        text = pytesseract.image_to_string(img)
        full_text += f"\n--- Page {i+1} ---\n" + text
    return full_text

for pdf_file in glob.glob('doc*.pdf'):
    print(f"Extracting {pdf_file}...")
    try:
        text = extract_text_from_pdf(pdf_file)
        with open(f"{pdf_file}.txt", "w", encoding="utf-8") as f:
            f.write(text)
        print(f"Saved {pdf_file}.txt (Length: {len(text)})")
    except Exception as e:
        print(f"Error extracting {pdf_file}: {e}")
