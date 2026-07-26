import gdown
import os
import shutil

links = [
    "https://drive.google.com/drive/folders/1MVLCTZ8B32BwHTsRkBWhthfj-fSuzchO",
    "https://drive.google.com/drive/folders/18ppiinxTDI8DT1UNOfLC9BwnDHoezq5Q",
    "https://drive.google.com/drive/folders/1AqUHtODwd6phMHEzkgQkOyEgapdnCZrU",
    "https://drive.google.com/drive/folders/1H2vcMAQ6KTx0NekmzvS3erng_dx5dZNB",
    "https://drive.google.com/drive/folders/1VFac7vdaXFCoaECJ72Z1tKQSA9QeaO2t",
    "https://drive.google.com/drive/folders/1o0OIFV3HEve7u2gNoFLo6cgGIXpMSCWr"
]

out_dir = "temp_physics_diagrams"
os.makedirs(out_dir, exist_ok=True)
os.chdir(out_dir)

for i, link in enumerate(links):
    print(f"\n--- Downloading link {i+1} ---")
    try:
        gdown.download_folder(url=link, quiet=False, use_cookies=False)
        print(f"Successfully processed link {i+1}.")
    except Exception as e:
        print(f"Error downloading link {i+1}: {e}")

print("\n--- Done ---")
