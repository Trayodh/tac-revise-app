import re

content = open('data.js', encoding='utf-8').read()
start_idx = content.find('let CURRENT_AFFAIRS_DB =')
end_idx = content.find('let CBT_EXAMS_DATABASE =')
db_str = content[start_idx:end_idx].strip()

may_idx = db_str.find('"May 2026":')
june_idx = db_str.find('"June 2026":')

if may_idx != -1:
    print("=== MAY 2026 CONTENT ===")
    print(db_str[may_idx:may_idx+1200])

if june_idx != -1:
    print("=== JUNE 2026 CONTENT ===")
    print(db_str[june_idx:june_idx+1200])
