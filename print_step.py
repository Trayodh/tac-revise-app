import json

log_path = r"C:\Users\Trayodh Khandalkar\.gemini\antigravity-ide\brain\63330b5a-af9a-4284-8f4b-225b7f5a6c88\.system_generated\logs\transcript.jsonl"
with open(log_path, "r", encoding="utf-8") as f:
    for line in f:
        try:
            step = json.loads(line)
            if step.get("step_index") in [6190, 6196, 6349, 6359, 6365]:
                print(f"--- STEP {step.get('step_index')} ({step.get('type')}) ---")
                if "tool_calls" in step:
                    for call in step["tool_calls"]:
                        print("Tool Call Name:", call.get("name"))
                        print("Args:", call.get("args"))
                elif step.get("type") == "TOOL_RESPONSE":
                    print("Status:", step.get("status"))
                    # limit print
                    content = step.get("content", "")
                    if len(content) > 1000:
                        print("Content:", content[:1000] + "... (truncated)")
                    else:
                        print("Content:", content)
        except Exception as e:
            pass
