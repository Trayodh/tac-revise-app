import json

log_path = r"C:\Users\Trayodh Khandalkar\.gemini\antigravity-ide\brain\63330b5a-af9a-4284-8f4b-225b7f5a6c88\.system_generated\logs\transcript.jsonl"
with open(log_path, "r", encoding="utf-8") as f:
    for line in f:
        try:
            step = json.loads(line)
            idx = step.get("step_index")
            if 6360 <= idx <= 6375:
                print(f"--- Step {idx} ({step.get('type')}) ---")
                print("Content:", step.get("content"))
                if "tool_calls" in step:
                    print("Tool Calls:", json.dumps(step["tool_calls"], indent=2))
        except Exception as e:
            pass
