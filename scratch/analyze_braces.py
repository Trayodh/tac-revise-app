content = open('app.js', encoding='utf-8').read()

stack = []
pairs = {
    '}': '{',
    ')': '(',
    ']': '['
}

line_num = 1
col_num = 1

for char in content:
    if char == '\n':
        line_num += 1
        col_num = 1
        continue
    
    if char in '{[(':
        stack.append((char, line_num, col_num))
    elif char in '}])':
        if not stack:
            print(f"Error: unmatched closing {char} at line {line_num}, col {col_num}")
        else:
            top_char, top_line, top_col = stack.pop()
            if pairs[char] != top_char:
                print(f"Mismatch: {top_char} opened at line {top_line}, col {top_col} closed by {char} at line {line_num}, col {col_num}")
    col_num += 1

if stack:
    print("Unclosed structures:")
    for char, line, col in stack:
        print(f"  Unclosed {char} opened at line {line}, col {col}")
else:
    print("All braces match perfectly!")
