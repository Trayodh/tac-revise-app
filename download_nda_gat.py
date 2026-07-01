import gdown
import os

os.makedirs('scratch/pdf_downloads', exist_ok=True)

file_ids = [
    '1TbzxzDGjF6763WvN4S4DT6mCJ3w4VlIL',
    '1a2hQm4hBGOferGX5fu87gs7t-kj0eQmO',
    '14UznuvXhgg7HYITdNOTfGNgtPRTWL50e'
]

for i, fid in enumerate(file_ids):
    url = f'https://drive.google.com/uc?id={fid}'
    output = f'scratch/pdf_downloads/nda_gat_mock_{i+1}.pdf'
    print(f"Downloading {output}...")
    try:
        gdown.download(url, output, quiet=False)
        print(f"Success: {output}")
    except Exception as e:
        print(f"Failed to download {output}: {e}")

print("Done downloading!")
