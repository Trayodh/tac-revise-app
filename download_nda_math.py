import gdown
import os

os.makedirs('scratch/pdf_downloads', exist_ok=True)

file_ids = [
    '1AgO_fk_aT-BTJJWAJAhLjX8ybSQQezG6',
    '1COOThz5EzHQ9xyw4vMto_EVf8NmohgrE',
    '1zC5SGDq_1ImnRDYdhXPTICtB5rz5-gJs'
]

for i, fid in enumerate(file_ids):
    url = f'https://drive.google.com/uc?id={fid}'
    output = f'scratch/pdf_downloads/nda_math_mock_{i+1}.pdf'
    print(f"Downloading {output}...")
    try:
        gdown.download(url, output, quiet=False)
        print(f"Success: {output}")
    except Exception as e:
        print(f"Failed to download {output}: {e}")

print("Done downloading!")
