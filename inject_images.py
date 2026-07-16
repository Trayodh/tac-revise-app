import os

biology_file = r"C:\Users\Trayodh Khandalkar\.gemini\antigravity-ide\scratch\defence-exams-revision\Pathfinder_Elite\modules\Biology\Cell_The_Unit_of_Life.md"

if os.path.exists(biology_file):
    with open(biology_file, 'r', encoding='utf-8') as f:
        content = f.read()
        
    image_markdown = "\n\n### 3D Visualization of a Cell\n![3D Cell Structure](../../images/biology_cell_3d_1784006931927.png)\n"
    
    if "biology_cell_3d" not in content:
        # insert at the top after the first heading
        parts = content.split('\n', 1)
        if len(parts) > 1:
            new_content = parts[0] + '\n' + image_markdown + parts[1]
        else:
            new_content = image_markdown + content
            
        with open(biology_file, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print("Injected Biology cell 3D image.")
    else:
        print("Biology image already injected.")
