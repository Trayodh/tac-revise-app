import os, glob

for md_file in glob.glob('Pathfinder_Elite/modules/**/*.md', recursive=True):
    with open(md_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace literal backslash+n with an actual newline character
    new_content = content.replace('\\n', '\n')
    
    with open(md_file, 'w', encoding='utf-8') as f:
        f.write(new_content)
        
print("Successfully replaced literal newlines.")
