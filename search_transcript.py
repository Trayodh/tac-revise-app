import json

log_path = r"C:\Users\Trayodh Khandalkar\.gemini\antigravity-ide\brain\63330b5a-af9a-4284-8f4b-225b7f5a6c88\.system_generated\logs\transcript.jsonl"
with open(log_path, "r", encoding="utf-8") as f:
    for line in f:
        try:
            step = json.loads(line)
            if "tool_calls" in step:
                for call in step["tool_calls"]:
                    name = call.get("name")
                    args = call.get("args", {})
                    if isinstance(args, str):
                        try:
                            args = json.loads(args)
                        except:
                            pass
                    if not isinstance(args, dict):
                        continue
                    target = args.get("TargetFile", "")
                    if "app.js" in target:
                        print(f"Step {step.get('step_index')}: {name} targeting {target}")
        except Exception as e:
            pass
