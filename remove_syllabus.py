import re

def remove_from_html():
    with open('index.html', 'r', encoding='utf-8') as f:
        html = f.read()
    
    # Remove Nav Item
    nav_item_pattern = r'<a class="nav-item"\s*data-screen="syllabus">[\s\S]*?Syllabus Tracker\s*</a>'
    html = re.sub(nav_item_pattern, '', html, count=1)
    
    # Remove Section
    section_pattern = r'<!-- SCREEN: SYLLABUS TRACKER -->\s*<section id="screen-syllabus" class="screen">[\s\S]*?</section>'
    html = re.sub(section_pattern, '', html, count=1)
    
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(html)
    print("Removed Syllabus Tracker from index.html")

def remove_from_app():
    with open('app.js', 'r', encoding='utf-8') as f:
        app = f.read()
    
    # Remove dispatch case
    dispatch_pattern = r'\} else if \(screenId === "syllabus"\) \{\s*renderSyllabusTracker\(\);'
    app = re.sub(dispatch_pattern, '', app)
    
    # Remove Syllabus Tracker Screen Module logic
    module_pattern = r'// 12\. SYLLABUS TRACKER SCREEN MODULE[\s\S]*?function updateSyllabusTopicStatus.*?\}[\s\S]*?\}'
    # It's safer to just let dead functions be, or we can precisely match the two functions:
    # renderSyllabusTracker and updateSyllabusTopicStatus.
    func1 = r'function renderSyllabusTracker\(\) \{[\s\S]*?\}\n\}' # Wait, braces might be tricky. Let's just find and replace.
    
    # We will just write a simple parsing loop to remove the functions
    pass
    
remove_from_html()
remove_from_app()

print("Done!")
