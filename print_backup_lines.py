backup_path = r"C:\Users\Trayodh Khandalkar\.gemini\antigravity-ide\scratch\backup\app.js"
with open(backup_path, "r", encoding="utf-8") as f:
    lines = f.readlines()

for i in range(3610, 3640):
    if i < len(lines):
        print(f"{i+1}: {lines[i]}", end="")
