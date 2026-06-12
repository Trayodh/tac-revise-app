content = open('data.js', encoding='utf-8').read()
months = ['January 2026', 'February 2026', 'March 2026', 'April 2026', 'May 2026', 'June 2026', 'July 2026', 'August 2026', 'September 2026', 'October 2026', 'November 2026', 'December 2026']
for m in months:
    idx = content.find(f'"{m}":')
    if idx == -1:
         idx = content.find(f"'{m}':")
    if idx != -1:
         # Find line number
         line_no = content.count('\n', 0, idx) + 1
         print(f"{m} starts at line {line_no}")
