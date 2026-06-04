import json

log_path = r"C:\Users\Trayodh Khandalkar\.gemini\antigravity-ide\brain\63330b5a-af9a-4284-8f4b-225b7f5a6c88\.system_generated\logs\transcript.jsonl"
with open(log_path, "r", encoding="utf-8") as f:
    for line in f:
        try:
            step = json.loads(line)
            if step.get("type") == "TOOL_RESPONSE":
                content = step.get("content", "")
                if "app.js" in content and "Showing lines" in content:
                    lines = content.split("\n")
                    showing_line = [l for l in lines if "Showing lines" in l]
                    print(f"Step {step.get('step_index')}: {showing_line}")
        except Exception as e:
            pass
