import json

content = open('notes_data_exam_focused.js', encoding='utf8').read()
idx = content.find('"id": "biology-cell"')
n_idx = content.find('"notes": "', idx)
e_idx = content.find('",', n_idx)

with open('extracted_biology_cell.txt', 'w', encoding='utf8') as f:
    f.write(content[e_idx-1500:e_idx])
