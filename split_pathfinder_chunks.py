import pypdf
import os

def split_pdf_by_subjects(pdf_path, chunk_size=5):
    # Based on TOC extraction:
    # - Mathematics (Page 205 to 588)
    # - General English (Page 589 to 780)
    # - General Science (Page 781 to 954)
    # - General Studies (Page 955 to 1297)
    # Note: pypdf is 0-indexed, but TOC is usually 0-indexed if it's the raw page index.
    # The printed TOC said:
    # Mathematics (Page 205)
    # General English (Page 589)
    # General Science (Page 781)
    # General Studies (Page 955)
    # Total Pages: 1297

    subjects = [
        {"name": "Mathematics", "start": 205, "end": 588},
        {"name": "General_English", "start": 589, "end": 780},
        {"name": "General_Science", "start": 781, "end": 954},
        {"name": "General_Studies", "start": 955, "end": 1297}
    ]

    print(f"Loading {pdf_path}...")
    reader = pypdf.PdfReader(pdf_path)
    total_pages = len(reader.pages)

    for subject in subjects:
        subject_name = subject["name"]
        start_page = subject["start"]
        end_page = min(subject["end"], total_pages)
        
        out_dir = os.path.join("pathfinder_chunks", subject_name)
        os.makedirs(out_dir, exist_ok=True)
        
        print(f"Processing {subject_name} (Pages {start_page} to {end_page})...")
        
        chunk_idx = 0
        for i in range(start_page, end_page, chunk_size):
            writer = pypdf.PdfWriter()
            chunk_end = min(i + chunk_size, end_page)
            
            for j in range(i, chunk_end):
                writer.add_page(reader.pages[j])
                
            chunk_filename = os.path.join(out_dir, f"chunk_{chunk_idx:03d}.pdf")
            with open(chunk_filename, "wb") as f:
                writer.write(f)
            
            chunk_idx += 1
            
        print(f"  -> Created {chunk_idx} chunks for {subject_name}")

if __name__ == "__main__":
    pdf_file = 'pathfinder-cds-combined-defence-expertsarihant-90f15b25.pdf'
    if os.path.exists(pdf_file):
        split_pdf_by_subjects(pdf_file, chunk_size=5)
    else:
        print(f"PDF file not found: {pdf_file}")
