import pypdf
import os

pdf_files = [
    "Ancient history capsule_compressed.pdf",
    "Biology class notes_compressed.pdf",
    "Chemistry class Notes_compressed.pdf",
    "Indian Geography class notes_compressed.pdf",
    "Physical Geography class notes_compressed.pdf",
    "Physics class notes pdf_compressed.pdf"
]

for filename in pdf_files:
    if not os.path.exists(filename):
        continue
    try:
        reader = pypdf.PdfReader(filename)
        total_text = ""
        for i, page in enumerate(reader.pages):
            text = page.extract_text()
            if text and len(text.strip()) > 5:
                total_text += f"\n--- Page {i+1} ---\n{text}\n"
        
        if total_text:
            out_filename = filename.replace(".pdf", "_extracted.txt")
            with open(out_filename, "w", encoding="utf-8") as f:
                f.write(total_text)
            print(f"Extracted {len(total_text)} chars from {filename} to {out_filename}")
        else:
            print(f"No text could be extracted from {filename}")
    except Exception as e:
        print(f"Error processing {filename}: {e}")
