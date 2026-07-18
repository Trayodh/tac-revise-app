import os
import subprocess
import sys

links = [
    "1N5tsDRAJ13J79cxrkfkNU0jaS1mtCNEC",
    "1dw8icXgCzqLc4F5Xrn8XA-kyZ-J1gFyg",
    "1HTdbfNduRh_zktpnXqhpjnenHMgb10P0",
    "1YgArhkHY4f8P6aQAe8UyR0Lpg8On2UrJ",
    "1eo4EHpm-GcHErRfthorX1pbXZIDM8F3t",
    "1gBPYkgqRcijgpsjgf3bcNTB4so533w8f",
    "1lnigTlN3peJKBkPyxhjQIw4VEGERO_2k"
]

os.makedirs('temp_images', exist_ok=True)
os.chdir('temp_images')

for file_id in links:
    print(f"Downloading {file_id}...")
    try:
        subprocess.run([sys.executable, "-m", "gdown", f"https://drive.google.com/uc?id={file_id}"], check=True)
    except Exception as e:
        print(f"Error downloading {file_id}: {e}")

print("Done")
