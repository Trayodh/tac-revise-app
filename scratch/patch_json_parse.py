import re

with open('scratch/generate_unique_pyqs.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the JSON parsing block
p = r"""            let text = parsed\.candidates\[0\]\.content\.parts\[0\]\.text;
            resolve\(JSON\.parse\(text\)\);"""

r = r"""            let text = parsed.candidates[0].content.parts[0].text;
            // Clean up common MathJax unescaped backslashes
            // If the model writes \frac instead of \\frac inside a JSON string, JSON.parse crashes.
            // We'll try to parse directly first, if it fails, we'll try a regex cleanup.
            try {
              resolve(JSON.parse(text));
            } catch (e1) {
              try {
                // Regex to escape unescaped backslashes that are not already escaped or part of standard JSON escapes (\n, \t, \", \\)
                let cleanedText = text.replace(/\\([^"\\\/bfnrt])/g, '\\\\$1');
                resolve(JSON.parse(cleanedText));
              } catch (e2) {
                reject(new Error("Failed to parse Gemini response: " + e1.message + " | " + e2.message));
              }
            }"""

content = re.sub(p, r, content)

with open('scratch/generate_unique_pyqs.js', 'w', encoding='utf-8') as f:
    f.write(content)

print('Done patching generate_unique_pyqs.js to handle bad JSON escapes.')
