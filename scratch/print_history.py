import json
import os

log_path = r"C:\Users\Trayodh Khandalkar\.gemini\antigravity-ide\brain\63330b5a-af9a-4284-8f4b-225b7f5a6c88\.system_generated\logs\transcript.jsonl"
if os.path.exists(log_path):
    with open(log_path, "r", encoding="utf-8") as f:
        for line in f:
            try:
                step = json.loads(line)
                if step.get("type") == "USER_INPUT":
                    print(f"=== Step {step.get('step_index')}: ===")
                    print(step.get("content"))
                    print()
            except Exception as e:
                pass
else:
    print("Log file not found at:", log_path)
