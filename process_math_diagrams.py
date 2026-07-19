import os
import shutil
import re

base_dir = r"C:\Users\Trayodh Khandalkar\.gemini\antigravity-ide\scratch\defence-exams-revision"
download_dir = os.path.join(base_dir, "math_diagrams_download")
diagrams_dir = os.path.join(base_dir, "diagrams", "mathematics")
modules_dir = os.path.join(base_dir, "Pathfinder_Elite", "modules", "Mathematics")

mapping = {
    "Trigonometry": "Measurements_of_Angles_and_Trigonometric_Ratios.md",
    "Statistics": "Statistics.md",
    "Geometry": "Lines_and_Angles.md",
    "Probability": "Probability.md",
    "Mensuration": "Surface_Area_and_Volume_of_Solids.md",
    "Coordinate geometry": "Coordinate_Geometry.md"
}

os.makedirs(diagrams_dir, exist_ok=True)
os.makedirs(modules_dir, exist_ok=True)

for folder in os.listdir(download_dir):
    folder_path = os.path.join(download_dir, folder)
    if not os.path.isdir(folder_path):
        continue
        
    slug = folder.lower().replace(' ', '-')
    target_img_dir = os.path.join(diagrams_dir, slug)
    os.makedirs(target_img_dir, exist_ok=True)
    
    target_md = mapping.get(folder)
    if not target_md:
        print(f"Skipping {folder}, no mapping found")
        continue
        
    md_path = os.path.join(modules_dir, target_md)
    
    # Read or create md file
    if os.path.exists(md_path):
        with open(md_path, 'r', encoding='utf-8') as f:
            content = f.read()
    else:
        title = folder.replace('_', ' ').title()
        content = f'<div class="revision-card" style="background: rgba(20,20,30,0.4); border: 1px solid var(--border); border-radius: 8px; padding: 20px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">\n  <h3 style="color: var(--accent); margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 8px; display: flex; align-items: center; gap: 8px; font-weight: 600;">{title.upper()}</h3>\n\n'

    img_tags = "\n\n## Visual Summary & Diagrams\n\n"
    has_new_images = False
    
    for img in os.listdir(folder_path):
        if img.endswith('.part'): continue
        src_img = os.path.join(folder_path, img)
        dst_img = os.path.join(target_img_dir, img)
        shutil.copy2(src_img, dst_img)
        
        rel_path = f"/diagrams/mathematics/{slug}/{img}"
        img_tags += f'<img src="{rel_path}" alt="{folder} Diagram" style="width:100%; max-width:600px; border-radius:12px; margin: 20px 0; border: 1px solid var(--border);" />\n'
        has_new_images = True
        
    if has_new_images:
        if "</div>" in content and "Probability" not in target_md and "Coordinate" not in target_md:
            # insert before the closing div
            content = content.replace("</div>", img_tags + "\n</div>")
        else:
            if "Probability" in target_md or "Coordinate" in target_md:
                content += img_tags + "\n</div>\n"
            else:
                content += img_tags
                
        with open(md_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {target_md} with images from {folder}")
