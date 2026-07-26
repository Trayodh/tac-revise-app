import gdown
import os
import shutil

links = [
    "1G_rhUVCHrFHhtlozfnFYbcvUUSqG7xXt",
    "15SMhhVw4i6iRiTQB2OiZs9Pf-ISUTStD",
    "1Mwk6H55sCxYGEKXdadoUtn-PNUZcJBoA"
]

out_dir = "temp_new_diagrams"
os.makedirs(out_dir, exist_ok=True)
os.chdir(out_dir)

for i, file_id in enumerate(links):
    print(f"\\n--- Downloading file {i+1} ---")
    try:
        url = f"https://drive.google.com/uc?id={file_id}"
        # try to download as a file
        gdown.download(url, quiet=False, use_cookies=False)
    except Exception as e:
        print(f"Error downloading {file_id} as file: {e}")
        try:
            # if it fails, try as folder
            url = f"https://drive.google.com/drive/folders/{file_id}"
            gdown.download_folder(url, quiet=False, use_cookies=False)
        except Exception as e2:
            print(f"Error downloading {file_id} as folder: {e2}")

print("\\n--- Done ---")
