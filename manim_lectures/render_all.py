import os
import sys
import subprocess
import json
import time

def main():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    topics_dir = os.path.join(script_dir, "topics")
    log_file = os.path.join(script_dir, "render_log.txt")
    template = os.path.join(script_dir, "universal_lecture.py")
    python_exe = r"C:\Python313\python.exe"

    if not os.path.exists(topics_dir):
        print(f"Error: topics directory not found at {topics_dir}")
        sys.exit(1)

    # Find all json files in topics directory
    files = [f for f in os.listdir(topics_dir) if f.endswith(".json")]
    files.sort()
    total = len(files)
    done = 0
    failed = 0
    start_time = time.time()

    with open(log_file, "a", encoding="utf-8") as log:
        log.write(f"\n=== Python Batch Render Started: {time.strftime('%Y-%m-%d %H:%M:%S')} ===\n")
        log.write(f"Total topics: {total} | Quality: l\n\n")

    print(f"Total topics: {total}")

    for idx, filename in enumerate(files):
        done += 1
        topic_name = os.path.splitext(filename)[0]
        elapsed = time.time() - start_time
        per_topic = elapsed / (done - 1) if done > 1 else 30.0
        remaining_min = round(((total - done) * per_topic) / 60.0, 1)

        print(f"\n[{done}/{total}] Rendering: {topic_name} (est. {remaining_min}m left)")

        # Path check
        out_file = os.path.join(topics_dir, "media", "videos", "480p15", f"{topic_name}.mp4")
        if os.path.exists(out_file):
            print(f"  [SKIP] Already exists, skipping.")
            with open(log_file, "a", encoding="utf-8") as log:
                log.write(f"[{done}/{total}] SKIP (exists): {topic_name}\n")
            continue

        topic_path = os.path.join(topics_dir, filename)

        # Run process
        cmd = [python_exe, template, "--topic", topic_path, "--quality", "l"]
        try:
            # We run synchronously and capture stdout/stderr
            res = subprocess.run(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True, check=False)
            rendered = os.path.exists(out_file)
            if rendered:
                print(f"  [OK] Done: {topic_name}")
                with open(log_file, "a", encoding="utf-8") as log:
                    log.write(f"[{done}/{total}] OK: {topic_name}\n")
            else:
                failed += 1
                print(f"  [FAIL] Failed: {topic_name}")
                with open(log_file, "a", encoding="utf-8") as log:
                    log.write(f"[{done}/{total}] FAIL: {topic_name}\n")
                    log.write(f"--- Command Output ---\n{res.stdout}\n{res.stderr}\n----------------------\n")
        except Exception as e:
            failed += 1
            print(f"  [FAIL] Exception running {topic_name}: {e}")
            with open(log_file, "a", encoding="utf-8") as log:
                log.write(f"[{done}/{total}] FAIL (Exception): {topic_name} - {e}\n")

    duration_min = round((time.time() - start_time) / 60.0, 1)
    summary_str = f"=== Done: {time.strftime('%Y-%m-%d %H:%M:%S')} | Success: {total - failed}/{total} | Time: {duration_min}min ==="
    print(f"\n{summary_str}")
    with open(log_file, "a", encoding="utf-8") as log:
        log.write(f"\n{summary_str}\n")

if __name__ == "__main__":
    main()
