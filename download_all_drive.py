import os
import subprocess
import re

links_file = "drive_links.txt"
output_dir = "assets/drive_images"
os.makedirs(output_dir, exist_ok=True)

with open(links_file, "r") as f:
    lines = f.readlines()

current_batch = "Misc"
for line in lines:
    line = line.strip()
    if not line:
        continue
    
    # Check if it's a batch header
    if line.startswith("Batch"):
        match = re.search(r'Batch \d+ \((.*?)\)', line)
        if match:
            current_batch = match.group(1).replace(" ", "_").replace("-", "_")
        continue
    
    # It's a link
    if "drive.google.com" in line:
        print(f"Processing {line} in {current_batch}...")
        batch_dir = os.path.join(output_dir, current_batch)
        os.makedirs(batch_dir, exist_ok=True)
        
        # Check if it's a folder or file
        if "/folders/" in line:
            # Folder
            try:
                subprocess.run(["python", "-m", "gdown", "--folder", line], cwd=batch_dir, check=True)
            except Exception as e:
                print(f"Error downloading folder {line}: {e}")
        else:
            # File
            try:
                subprocess.run(["python", "-m", "gdown", line], cwd=batch_dir, check=True)
            except Exception as e:
                print(f"Error downloading file {line}: {e}")

print("All downloads complete.")
