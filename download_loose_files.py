import subprocess
import os

file_urls = [
    # Batch 5
    "https://drive.google.com/file/d/14GXHgA6O0RNQYPfQu41LO14fOQyHZgqc/view?usp=drive_link",
    "https://drive.google.com/file/d/1b4Fd4gOCwxkQvcaOpjvJNA65IAWXJPP0/view?usp=drive_link",
    "https://drive.google.com/file/d/1n_BlAHuUCScTwb0kDeKhmb66M0AJGdFn/view?usp=drive_link",
    "https://drive.google.com/file/d/1_Wpvi05fGVGdSf2D8UcliZhY6KOlAqSA/view?usp=drive_link",
    "https://drive.google.com/file/d/1pAg718s5rAKSNZZd69g3gv39EQ7GCZGm/view?usp=drive_link",
    "https://drive.google.com/file/d/13nJ28TUZ20wcIJHy9M3uTiIGfp8jjqWy/view?usp=drive_link",
    "https://drive.google.com/file/d/1m38zIop-Z21JMDG-kN6rcST4LkMqOkmB/view?usp=drive_link",
    "https://drive.google.com/file/d/18lMxyFwFjf-3Ol-ZjZr2T-cjDY-fxkfW/view?usp=drive_link",
    "https://drive.google.com/file/d/1BzkmtbDnLTJf_KDRH7HBBnhgCEx3OlBR/view?usp=drive_link",
    "https://drive.google.com/file/d/1GPVI67JEW970l6CWgQ1hdqQndhTldRf2/view?usp=drive_link",
    # Batch 6
    "https://drive.google.com/file/d/16ww8jDs5ovL7b4IjJCUjUbg8ZIZkLYLJ/view?usp=drive_link",
    "https://drive.google.com/file/d/1GRqZmEd78Wa1rWPmQrtxHB5G059CCIKv/view?usp=drive_link",
    "https://drive.google.com/file/d/1GhB7v5vcRtk7pa4m0DuxlwBjxBAmKqs1/view?usp=drive_link",
    "https://drive.google.com/file/d/1M7ormAWtccH8UhFzOV9iSuWPgX11wcwP/view?usp=drive_link",
    "https://drive.google.com/file/d/1MdL6AnlijJVFo3L9E0IxWgKa31JCSSSm/view?usp=drive_link",
    "https://drive.google.com/file/d/12v3cFaT9KH7DRoyaeVGsIagzeIgwdiCJ/view?usp=drive_link",
    "https://drive.google.com/file/d/1a-i_Y-pkeAHgATt1We7fDDE-z8Mql2B1/view?usp=drive_link",
    "https://drive.google.com/file/d/1jAYlQCrpitGJ7LSbBLataaRaD5GrrcjD/view?usp=drive_link",
    "https://drive.google.com/file/d/1mvgkWgt05qj_t0WiCJM1g13Az3UWZMFm/view?usp=drive_link",
    "https://drive.google.com/file/d/1zs1lyloZHyJH0-tKKpIZooe9NbzRjft6/view?usp=drive_link",
    "https://drive.google.com/file/d/1xk59lJB8wFbY2-nDb07SocWo09qZ5eyr/view?usp=drive_link",
    "https://drive.google.com/file/d/1Ik0nxQyoLwSDKo36ciiHDPPBoUH4cxpl/view?usp=drive_link",
    "https://drive.google.com/file/d/1j4vWQVy3Dag4dowZsVM6tyjP6HYBQB3S/view?usp=drive_link",
    "https://drive.google.com/file/d/1PdAiJbSBP6KjjcI3FSVpBmZWNHKnUk5l/view?usp=drive_link"
]

output_dir = "assets/drive_images/Misc"
os.makedirs(output_dir, exist_ok=True)

for url in file_urls:
    print(f"Downloading file: {url}")
    try:
        subprocess.run(["python", "-m", "gdown", url, "-O", output_dir + "/"], check=True)
    except subprocess.CalledProcessError as e:
        print(f"Error downloading {url}: {e}")

print("Download complete.")
