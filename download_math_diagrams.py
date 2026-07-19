import gdown
import os
import shutil

links = [
    "https://drive.google.com/drive/folders/1H_mqnz-yXq95Nu7u5Ntp2USz9cQcg5MN",
    "https://drive.google.com/drive/folders/1EttePWimNSw-KIPyXQX7G2fAZ7BO--P6",
    "https://drive.google.com/drive/folders/15odie1JUB5slEfpN31sfz2DQFQYiRvjb",
    "https://drive.google.com/drive/folders/1fLd5hIiyqI-VAsA9QHDu486QUZaOsKyr",
    "https://drive.google.com/drive/folders/1S1OUQtl1L05osgQW-ciR3gqNqTuVHozr",
    "https://drive.google.com/drive/folders/1Z5NfYiSUm5vLNJifQyGJfrGCTaMSif9h"
]

if os.path.exists("math_diagrams_download"):
    shutil.rmtree("math_diagrams_download")
os.makedirs("math_diagrams_download", exist_ok=True)
os.chdir("math_diagrams_download")

for i, link in enumerate(links):
    print(f"Downloading {link}")
    try:
        # Not providing output will use the folder name from Google Drive
        gdown.download_folder(url=link, quiet=False, use_cookies=False)
    except Exception as e:
        print(f"Error: {e}")
