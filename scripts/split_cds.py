import os
from pypdf import PdfReader, PdfWriter

def split_pdf(filepath):
    if not os.path.exists(filepath):
        print(f"File not found: {filepath}")
        return

    reader = PdfReader(filepath)
    total_pages = len(reader.pages)
    print(f"Loaded {filepath} with {total_pages} pages.")

    if total_pages <= 990:
        print("No need to split.")
        return

    half = total_pages // 2
    
    writer1 = PdfWriter()
    for i in range(half):
        writer1.add_page(reader.pages[i])
    out1 = filepath.replace('.pdf', '_part1.pdf')
    with open(out1, "wb") as f:
        writer1.write(f)
    print(f"Saved {out1} with {half} pages.")

    writer2 = PdfWriter()
    for i in range(half, total_pages):
        writer2.add_page(reader.pages[i])
    out2 = filepath.replace('.pdf', '_part2.pdf')
    with open(out2, "wb") as f:
        writer2.write(f)
    print(f"Saved {out2} with {total_pages - half} pages.")

if __name__ == "__main__":
    split_pdf('cds_material.pdf')
