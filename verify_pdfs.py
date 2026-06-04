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
        print(f"{filename} does not exist.")
        continue
    
    try:
        reader = pypdf.PdfReader(filename)
        num_pages = len(reader.pages)
        print(f"\nPDF: {filename} ({num_pages} pages)")
        
        # Try extracting text from the first 3 pages
        text_samples = []
        for i in range(min(5, num_pages)):
            text = reader.pages[i].extract_text()
            if text:
                text_samples.append(text[:200].strip().replace('\n', ' '))
            else:
                text_samples.append("[No text extracted]")
        
        print("  Page Samples:")
        for idx, sample in enumerate(text_samples):
            print(f"    Page {idx+1}: {sample[:120]}...")
            
    except Exception as e:
        print(f"Error reading {filename}: {e}")
