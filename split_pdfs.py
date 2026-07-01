import pypdf
import os

pdf_files = [
  'PYQ Papers/CDS-20252-GS-paper_14-Sept.-2025.pdf',
  'PYQ Papers/CDS-1-GS-Question-Paper-12-April-2026-exam-1.pdf',
  'PYQ Papers/CDS-2-2025-English-question-paper_14.09.2025.pdf',
  'PYQ Papers/CDS-1-English-Question-Paper-12-April-2026-exam-1.pdf'
]

os.makedirs("pdf_chunks", exist_ok=True)

for filename in pdf_files:
    if not os.path.exists(filename):
        continue
    
    print(f"Processing {filename}...")
    reader = pypdf.PdfReader(filename)
    total_pages = len(reader.pages)
    
    chunk_size = 2
    subject = "gs" if "GS" in filename or "gs" in filename else "english"
    basename = os.path.basename(filename).replace('.pdf', '')
    
    for i in range(0, total_pages, chunk_size):
        writer = pypdf.PdfWriter()
        end_page = min(i + chunk_size, total_pages)
        for j in range(i, end_page):
            writer.add_page(reader.pages[j])
            
        chunk_filename = f"pdf_chunks/{subject}_{basename}_chunk_{i//chunk_size}.pdf"
        with open(chunk_filename, "wb") as f:
            writer.write(f)
            
    print(f"Created {total_pages // chunk_size + 1} chunks for {filename}")
