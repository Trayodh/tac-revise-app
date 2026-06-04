lines = open('index.html', 'r', encoding='utf-8').readlines()
good_lines = lines[:661]
good_lines.extend([
    '  <script src="sarvam_browser.js"></script>\n',
    '  <script src="lecture_mode.js"></script>\n',
    '  <script src="notes_extra_10.js"></script>\n',
    '  <script src="notes_extra_economics.js"></script>\n',
    '  <script src="notes_extra_polity.js"></script>\n',
    '  <script src="data.js?v=5"></script>\n',
    '  <script src="app.js?v=5"></script>\n',
    '</body>\n',
    '</html>\n'
])
open('index.html', 'w', encoding='utf-8').writelines(good_lines)
