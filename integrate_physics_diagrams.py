import os
import shutil
import re

base_dir = r"c:\Users\Trayodh Khandalkar\.gemini\antigravity-ide\scratch\defence-exams-revision"
temp_dir = os.path.join(base_dir, "temp_physics_diagrams")
assets_dir = os.path.join(base_dir, "assets", "images", "physics")
modules_dir = os.path.join(base_dir, "Pathfinder_Elite", "modules", "Physics")

os.makedirs(assets_dir, exist_ok=True)

mapping = {
    "Electricity": ("Electric_Current.md", "## Visual Summary: Electricity & Magnetism"),
    "Magnetism": ("Electric_Current.md", "## Visual Summary: Electricity & Magnetism"),
    "Heat": ("Heat_and_Thermodynamics.md", "## Visual Summary: Heat"),
    "Light": ("Optics.md", "## Visual Summary: Light & Optics"),
    "Mechanics": ("Measurement_Motion_Work_Energy_and_Power.md", "## Visual Summary & Diagrams"),
    "Modern physics": ("Modern_Physics.md", "## Visual Summary: Modern Physics")
}

for folder, (md_file, visual_header) in mapping.items():
    folder_path = os.path.join(temp_dir, folder)
    if not os.path.exists(folder_path):
        continue
    
    md_path = os.path.join(modules_dir, md_file)
    if not os.path.exists(md_path):
        print(f"MD file {md_path} not found.")
        continue
        
    with open(md_path, 'r', encoding='utf-8') as f:
        md_content = f.read()
    
    images_to_add = []
    
    for filename in sorted(os.listdir(folder_path)):
        if filename.endswith(".part") or not (filename.endswith(".png") or filename.endswith(".jpg") or filename.endswith(".jpeg")):
            continue
            
        src_path = os.path.join(folder_path, filename)
        dest_filename = f"{folder.replace(' ', '_').lower()}_{filename}"
        dest_path = os.path.join(assets_dir, dest_filename)
        
        shutil.copy2(src_path, dest_path)
        
        # relative path for web
        rel_img_path = f"/assets/images/physics/{dest_filename}"
        
        img_tag = f'\n<img src="{rel_img_path}" alt="{folder} Diagram" style="width:100%; max-width:600px; border-radius:12px; margin: 20px 0; border: 1px solid var(--border);" />\n'
        images_to_add.append(img_tag)
        print(f"Added {dest_filename} to {md_file}")
        
    if images_to_add:
        # Check if visual header exists
        if visual_header in md_content:
            # append after header
            header_idx = md_content.find(visual_header) + len(visual_header)
            new_content = md_content[:header_idx] + "\n" + "".join(images_to_add) + md_content[header_idx:]
        else:
            # append at the end
            new_content = md_content + f"\n\n{visual_header}\n" + "".join(images_to_add)
            
        with open(md_path, 'w', encoding='utf-8') as f:
            f.write(new_content)

print("\n--- Integration Done ---")
