import subprocess
import os

folder_ids = [
    "1KTtcq0-qYUN3qI7BhU18gTU3MItJ5uQN",
    "1xyzFy2HBzOjNHgRdEA4V-rSx7yKtrOQj",
    "10Z9uUXEQqa53iXTCLXsage77hujVon57",
    "1CTxsE04dlShZk_I5aqNcFyiPQenUaXGi",
    "1LCnPdAN_kxz5SOV884sQ6wEx5wK09xBb",
    "14sfc5o-cNBx7oNikxLnxGsnnQM2tIO-W",
    "1MX16UylaDwnuqIIaNm_U2WTlz4cfM0ts"
]

output_dir = "assets/drive_images"
os.makedirs(output_dir, exist_ok=True)

for fid in folder_ids:
    print(f"Downloading folder {fid}...")
    try:
        subprocess.run(["python", "-m", "gdown", "--folder", f"https://drive.google.com/drive/folders/{fid}"], cwd=output_dir, check=True)
    except Exception as e:
        print(f"Error downloading {fid}: {e}")

print("Download complete.")
