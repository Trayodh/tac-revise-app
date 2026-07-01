import gdown
import os
import shutil

links = {
    "NDA Papers": "https://drive.google.com/drive/folders/1inIJYeAFKYJ-t1TgJ-yTEaa-0tWPna1B",
    "AFCAT Papers": "https://drive.google.com/drive/folders/1MI058zUCEsr95mita-pL4oKH7oFdFEc_"
}

for folder_name, link in links.items():
    print(f"\n--- Downloading {folder_name} ---")
    os.makedirs(folder_name, exist_ok=True)
    
    try:
        # download_folder downloads to the current directory but creates a subfolder matching the Drive folder name
        # We will use quiet=False to see logs
        gdown.download_folder(url=link, output=folder_name, quiet=False, use_cookies=False)
        print(f"Successfully processed {folder_name}.")
    except Exception as e:
        print(f"Error downloading {folder_name}: {e}")

print("\n--- Done ---")
