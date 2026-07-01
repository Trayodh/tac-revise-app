import gdown
import os

folder_id = "1kD0KoGKXK1jCqzXa447KW9KRwg2Gbtsv"
url = f'https://drive.google.com/drive/folders/{folder_id}'
output_dir = 'scratch/pdf_downloads/gat_syllabus'

os.makedirs(output_dir, exist_ok=True)
print(f"Downloading folder {folder_id}...")

try:
    gdown.download_folder(url=url, output=output_dir, quiet=False, use_cookies=False)
    print("Download completed successfully.")
except Exception as e:
    print(f"Failed to download folder: {e}")
