from pypdf import PdfReader, PdfWriter
import os

source_pdf = 'pathfinder-cds-combined-defence-expertsarihant-90f15b25.pdf'
reader = PdfReader(source_pdf)

def extract_section(start_page, end_page, output_name):
    print(f"Extracting {output_name} from pages {start_page} to {end_page}...")
    writer = PdfWriter()
    for i in range(start_page, end_page + 1):
        writer.add_page(reader.pages[i])
    with open(output_name, 'wb') as f:
        writer.write(f)
    print(f"Saved {output_name}!")

# Mathematics: 205-588
extract_section(205, 588, 'pathfinder_mathematics.pdf')

# General Science: 781-954
extract_section(781, 954, 'pathfinder_science.pdf')

# General Studies: 955-1296
extract_section(955, 1296, 'pathfinder_studies.pdf')

print("All sections extracted successfully!")
