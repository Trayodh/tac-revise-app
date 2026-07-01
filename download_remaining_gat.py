import os
import requests
import re
import json
import subprocess

folder_url = 'https://drive.google.com/drive/folders/1kD0KoGKXK1jCqzXa447KW9KRwg2Gbtsv'

print("Using python -m gdown to download the folder directly...")
try:
    subprocess.run(["python", "-m", "gdown", "--folder", folder_url, "-O", "scratch/pdf_downloads/gat_syllabus"], check=True)
except Exception as e:
    print(f"Failed: {e}")

files = [f for f in os.listdir('scratch/pdf_downloads/gat_syllabus') if f.endswith('.pdf')]
print(f"Total PDF files in directory: {len(files)}")
