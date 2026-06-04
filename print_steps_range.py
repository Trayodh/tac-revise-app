import json

log_path = r"C:\Users\Trayodh Khandalkar\.gemini\antigravity-ide\brain\63330b5a-af9a-4284-8f4b-225b7f5a6c88\.system_generated\logs\transcript.jsonl"
with open(log_path, "r", encoding="utf-8") as f:
    for line in f:
        try:
            step = json.loads(line)
            idx = step.get("step_index")
            if 6340 <= idx <= 6380:
                print(f"Step {idx} ({step.get('source')} - {step.get('type')}):")
                if "tool_calls" in step:
                    for call in step["tool_calls"]:
                        print("  Call:", call.get("name"), call.get("toolSummary"))
                if step.get("type") == "TOOL_RESPONSE":
                    content = step.get("content", "")
                    if len(content) > 200:
                        print("  Response (truncated):", content[:200] + "...")
                    else:
                        print("  Response:", content)
        except Exception as e:
            pass
