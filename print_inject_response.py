import json

log_path = r"C:\Users\Trayodh Khandalkar\.gemini\antigravity-ide\brain\63330b5a-af9a-4284-8f4b-225b7f5a6c88\.system_generated\logs\transcript.jsonl"
with open(log_path, "r", encoding="utf-8") as f:
    for line in f:
        try:
            step = json.loads(line)
            if step.get("type") == "TOOL_RESPONSE" and "inject_afcat.js" in step.get("content", ""):
                print(f"--- STEP {step.get('step_index')} (TOOL_RESPONSE) ---")
                print("Content:", step.get("content"))
        except Exception as e:
            pass
