import os
import sys

# use gdown as a module to explicitly specify output filenames
import gdown

links = [
    "1N5tsDRAJ13J79cxrkfkNU0jaS1mtCNEC",
    "1dw8icXgCzqLc4F5Xrn8XA-kyZ-J1gFyg",
    "1HTdbfNduRh_zktpnXqhpjnenHMgb10P0",
    "1YgArhkHY4f8P6aQAe8UyR0Lpg8On2UrJ",
    "1eo4EHpm-GcHErRfthorX1pbXZIDM8F3t",
    "1gBPYkgqRcijgpsjgf3bcNTB4so533w8f",
    "1lnigTlN3peJKBkPyxhjQIw4VEGERO_2k"
]

os.makedirs('temp_images_clean', exist_ok=True)
os.chdir('temp_images_clean')

for idx, file_id in enumerate(links):
    output_filename = f"geo_{idx+1}.png"
    print(f"Downloading {file_id} as {output_filename}...")
    try:
        url = f"https://drive.google.com/uc?id={file_id}"
        gdown.download(id=file_id, output=output_filename, quiet=False)
    except Exception as e:
        print(f"Error downloading {file_id}: {e}")

print("Done")
