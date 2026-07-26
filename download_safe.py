import gdown
import os
import time

links = {
    "Mechanics": "https://drive.google.com/drive/folders/1MVLCTZ8B32BwHTsRkBWhthfj-fSuzchO",
    "Electricity": "https://drive.google.com/drive/folders/18ppiinxTDI8DT1UNOfLC9BwnDHoezq5Q",
    "Magnetism": "https://drive.google.com/drive/folders/1AqUHtODwd6phMHEzkgQkOyEgapdnCZrU",
    "Light": "https://drive.google.com/drive/folders/1H2vcMAQ6KTx0NekmzvS3erng_dx5dZNB",
    "Heat": "https://drive.google.com/drive/folders/1VFac7vdaXFCoaECJ72Z1tKQSA9QeaO2t",
    "Modern physics": "https://drive.google.com/drive/folders/1o0OIFV3HEve7u2gNoFLo6cgGIXpMSCWr"
}

out_dir = "temp_physics_diagrams"
os.makedirs(out_dir, exist_ok=True)
os.chdir(out_dir)

for folder_name, link in links.items():
    print(f"\\n--- Downloading {folder_name} ---")
    try:
        # Get the list of files first, then download sequentially to avoid WinError 32
        # gdown doesn't have a direct method to just list without downloading easily in the public API,
        # but we can try to download with a retry loop or just use quiet=True, which might disable tqdm and avoid threading issues
        gdown.download_folder(url=link, quiet=True, use_cookies=False)
        print(f"Successfully processed {folder_name}.")
    except Exception as e:
        print(f"Error downloading {folder_name}: {e}")
        # Retry once
        time.sleep(2)
        try:
            gdown.download_folder(url=link, quiet=True, use_cookies=False)
            print(f"Successfully processed {folder_name} on retry.")
        except Exception as e2:
            print(f"Error downloading {folder_name} on retry: {e2}")

print("\\n--- Done ---")
