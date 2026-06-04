import os
import re

def verify():
    print("--- Starting Asset Verification ---")
    files_to_check = []
    
    # Check index.html for basic structural closing tags
    with open('index.html', 'r', encoding='utf-8') as f:
        html = f.read()
        divs_open = len(re.findall(r'<div\b', html))
        divs_close = len(re.findall(r'</div>', html))
        print(f"HTML Structure Check: {divs_open} open divs, {divs_close} close divs")
        if divs_open != divs_close:
            print(f"WARNING: Potential unclosed div tags (Difference: {divs_open - divs_close})")

        # Find img tags
        imgs = re.findall(r'<img[^>]+src=["\'](.*?)["\']', html)
        for img in imgs:
            if not img.startswith('http') and not img.startswith('data:'):
                files_to_check.append(img)
                
    # Check CSS for background images / fonts
    with open('index.css', 'r', encoding='utf-8') as f:
        css = f.read()
        urls = re.findall(r'url\(["\']?(.*?)["\']?\)', css)
        for url in urls:
            if not url.startswith('http') and not url.startswith('data:'):
                files_to_check.append(url)
                
    print(f"\nFound {len(files_to_check)} local asset references:")
    for f in set(files_to_check):
        # clean query params if any
        f_path = f.split('?')[0]
        f_path = f_path.split('#')[0]
        if os.path.exists(f_path):
            print(f"[OK] {f_path}")
        else:
            print(f"[MISSING] {f_path} (referenced as {f})")

if __name__ == '__main__':
    verify()
