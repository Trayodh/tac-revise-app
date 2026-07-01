import pypdf
import os

pdf_files = [
  'PYQ Papers/CDS-20252-GS-paper_14-Sept.-2025.pdf',
  'PYQ Papers/CDS-1-GS-Question-Paper-12-April-2026-exam-1.pdf',
  'PYQ Papers/CDS-2-2025-English-question-paper_14.09.2025.pdf',
  'PYQ Papers/CDS-1-English-Question-Paper-12-April-2026-exam-1.pdf'
]

for filename in pdf_files:
    if not os.path.exists(filename):
        print(f"Not found: {filename}")
        continue
    try:
        reader = pypdf.PdfReader(filename)
        total_text = ""
        for i, page in enumerate(reader.pages):
            text = page.extract_text()
            if text and len(text.strip()) > 5:
                total_text += f"\n--- Page {i+1} ---\n{text}\n"
        
        if total_text:
            out_filename = filename + ".txt"
            with open(out_filename, "w", encoding="utf-8") as f:
                f.write(total_text)
            print(f"Extracted {len(total_text)} chars from {filename} to {out_filename}")
        else:
            print(f"No text could be extracted from {filename}")
    except Exception as e:
        print(f"Error processing {filename}: {e}")
