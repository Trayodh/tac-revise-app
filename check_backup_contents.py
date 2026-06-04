backup_path = r"C:\Users\Trayodh Khandalkar\.gemini\antigravity-ide\scratch\backup\app.js"
with open(backup_path, "r", encoding="utf-8") as f:
    content = f.read()

target = 'document.getElementById("cbt-btn-save-next").addEventListener("click"'
print("Target exists in backup:", target in content)

replacement = 'if (document.getElementById("cbt-btn-save-next")) {'
print("Replacement exists in backup:", replacement in content)
