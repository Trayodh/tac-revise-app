with open("app.js", "r", encoding="utf-8") as f:
    content = f.read()

# Perform the exact replacement
old_str = "optDiv.className = `cbt-option ${CBTSESSION.answers[currentIdx] === optIdx ? 'selected' : ''}`;"
new_str = "optDiv.className = `cbt-option ${CBT_SESSION.answers[currentIdx] === optIdx ? 'selected' : ''}`;"

if old_str in content:
    content = content.replace(old_str, new_str)
    with open("app.js", "w", encoding="utf-8") as f:
        f.write(content)
    print("Successfully replaced typo!")
else:
    print("Could not find the target string. Let's inspect.")
