import re, time

s = r'\frac{1}{2}\alpha\beta\sum_{i=1}^n \sqrt{x}' * 500

t0 = time.time()
fixed = re.sub(r'\\(?![/\\\"bfnrtu]|u[0-9a-fA-F]{4})', r'\\\\', s)
print('re1:', time.time() - t0)

t1 = time.time()
fixed2 = re.sub(r'(?<!\\)\\(?!"|\\)', r'\\\\', s)
print('re2:', time.time() - t1)

t2 = time.time()
unescaped_quotes = len(re.findall(r'(?<!\\)"', s))
print('re3:', time.time() - t2)
