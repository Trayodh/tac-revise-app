import urllib.request
import re
import json

urls = [
    "https://youtube.com/playlist?list=PLR3Wtc18_va58ILzopy-Q7l3dnRIXKc-z",
    "https://youtube.com/playlist?list=PLR3Wtc18_va5mvuJFRHw-V90qsAU5_Vhe",
    "https://www.youtube.com/live/nTxhflhWUIc",
    "https://youtu.be/xOWpVnALG3E"
]

all_ids = []

for url in urls:
    if "playlist?list=" in url:
        print(f"Fetching playlist: {url}")
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        try:
            html = urllib.request.urlopen(req).read().decode('utf-8')
            # Extract video IDs from ytInitialData
            matches = re.findall(r'"videoId":"([^"]{11})"', html)
            # Remove duplicates while preserving order
            seen = set()
            ids = []
            for m in matches:
                if m not in seen:
                    seen.add(m)
                    ids.append(m)
            print(f"Found {len(ids)} videos.")
            all_ids.extend(ids)
        except Exception as e:
            print(f"Error: {e}")
    else:
        vid_id = ""
        if "live/" in url:
            vid_id = url.split("live/")[1].split("?")[0]
        elif "youtu.be/" in url:
            vid_id = url.split("youtu.be/")[1].split("?")[0]
        if vid_id:
            all_ids.append(vid_id)

print(f"Total videos to process: {len(all_ids)}")

with open('mega_batch.json', 'w') as f:
    json.dump(all_ids, f, indent=2)
