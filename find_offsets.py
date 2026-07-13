import fitz
doc = fitz.open("616861773-Pathfinder-CDS-Combined-Defence-2022-23-Arihant-Experts.pdf")
with open("toc.txt", "w", encoding="utf-8") as f:
    for i in range(3, 10):
        f.write(f"--- PAGE {i} ---\n")
        f.write(doc.load_page(i).get_text("text"))
        f.write("\n")
