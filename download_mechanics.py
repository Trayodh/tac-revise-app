import gdown
import os
import shutil

links = [
    "168vi58iafCYyUsJiovMuA9B6xvBwSfwi",
    "1ZnCDUnLwAiLJYZnCixFO_irdy63TVKhe",
    "1S7pdyuE-pW7E9ECDlumAwn6cyiBYYF5I",
    "1nelqscuTs8bOIPNYncNAptnwu-DZO8Hv",
    "1Dze5dFyzwU7bbc2W83x3XJmusiXEH7ms",
    "1HLiR8_7OF_FwkalQj57NRKifKE47cxVz",
    "1NcxHgswqsixmQqwyOlmH197UiOEXKYaF",
    "1MBbkMr57DGBh1nTugT4fBgZU05XgAyLT",
    "1Fmpa59GIl2pKX6rzEBKnhiGMk-c3iYPX",
    "1CDrnTm74rHbNriuNQs8Zg_512xECzABA"
]

out_dir = "temp_mechanics_diagrams"
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

print("\\n--- Done ---")
