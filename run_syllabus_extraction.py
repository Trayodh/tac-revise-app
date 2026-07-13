import fitz
import os

# Source PDFs
PATHFINDER_PDF = "616861773-Pathfinder-CDS-Combined-Defence-2022-23-Arihant-Experts.pdf"
INSIGHT_SSB_PDF = "6f6f4af2-763d-44c4-93af-0dbb0bc0dbca.pdf"
SSBCRACK_PDF = "General-Science-Book-SSBCrack.pdf"

# Physical offset mapping for the core base
PATHFINDER_OFFSET = 286

# Logical to Physical mapping for Pathfinder
# Current Affairs (Logical 1050-1092) is strictly omitted.
PATHFINDER_MAP = {
    "Mathematics": {"start": 3, "end": 384},
    "General_English": {"start": 387, "end": 576},
    "Physics": {"start": 579, "end": 611},
    "Chemistry": {"start": 632, "end": 659},
    "Biology": {"start": 682, "end": 731},
    "History": {"start": 753, "end": 852},
    "Geography": {"start": 853, "end": 946},
    "Indian_Polity": {"start": 947, "end": 1005},
    "Indian_Economy": {"start": 1006, "end": 1049}
}

# Exact physical mapping for Insight SSB Cheat Codes
INSIGHT_MAP = {
    "Physics": {"start": 43, "end": 54},
    "Chemistry": {"start": 55, "end": 66},
    "Biology": {"start": 67, "end": 90},
    "History": {"start": 123, "end": 153},
    "Geography": {"start": 1, "end": 31},
    "Indian_Polity": {"start": 91, "end": 122},
    "Indian_Economy": {"start": 154, "end": 172}
}

def extract_pages(pdf_path, phys_start, phys_end, out_file):
    if not os.path.exists(pdf_path):
        print(f"File not found: {pdf_path}")
        return
        
    print(f"Extracting {pdf_path} (Pages {phys_start} to {phys_end})...")
    try:
        doc = fitz.open(pdf_path)
        text = ""
        # fitz uses 0-based indexing for pages
        for page_num in range(phys_start - 1, phys_end):
            if page_num < len(doc):
                page = doc.load_page(page_num)
                text += f"\n--- Page {page_num + 1} ---\n"
                text += page.get_text("text")
                
        with open(out_file, "w", encoding="utf-8") as f:
            f.write(text)
        print(f"Saved to {out_file}")
    except Exception as e:
        print(f"Extraction failed for {pdf_path}: {e}")

def run_extraction(output_dir):
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
        
    # 1. Extract Pathfinder Core Syllabus
    print("\n--- INGESTING SOURCE 1: PATHFINDER ---")
    for subject, ranges in PATHFINDER_MAP.items():
        phys_start = ranges["start"] + PATHFINDER_OFFSET
        phys_end = ranges["end"] + PATHFINDER_OFFSET
        out_file = os.path.join(output_dir, f"{subject}_pathfinder.txt".lower())
        extract_pages(PATHFINDER_PDF, phys_start, phys_end, out_file)
            
    # 2. Extract Insight SSB High-Yield Callouts
    print("\n--- INGESTING SOURCE 2: INSIGHT SSB ---")
    for subject, ranges in INSIGHT_MAP.items():
        out_file = os.path.join(output_dir, f"{subject}_insight_ssb.txt".lower())
        extract_pages(INSIGHT_SSB_PDF, ranges["start"], ranges["end"], out_file)
        
    # 3. Extract SSBCrack Advanced Science & MCQs
    print("\n--- INGESTING SOURCE 3: SSBCRACK ---")
    ssbcrack_out = os.path.join(output_dir, "general_science_ssbcrack.txt")
    # Extracting the first 100 pages as a proxy for the science core & MCQs for demonstration
    extract_pages(SSBCRACK_PDF, 1, 100, ssbcrack_out)

if __name__ == "__main__":
    run_extraction("pdf_chunks")
