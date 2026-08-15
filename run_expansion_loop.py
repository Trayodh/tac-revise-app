import subprocess
import time

def run_expansion(input_file, output_file):
    while True:
        print(f"Starting expansion run on {input_file}...")
        result = subprocess.run(
            ["python", "expand_notes_1000w.py", "--input", input_file, "--output", output_file],
            capture_output=True,
            text=True
        )
        print(result.stdout)
        
        # Check if there were any failures
        if "Failed to expand" in result.stdout or "API Error" in result.stdout:
            print(f"Detected failures in {input_file}. Sleeping 60s and retrying...")
            time.sleep(60)
        else:
            print(f"Expansion fully complete for {input_file}!")
            break

if __name__ == "__main__":
    run_expansion("notes_extra_history.js", "notes_extra_history.js")
    run_expansion("notes_generated.js", "notes_generated.js")
    
    # Auto-commit and push when completely finished
    print("All expansions complete. Pushing to GitHub...")
    subprocess.run(["git", "add", "notes_extra_history.js", "notes_generated.js"])
    subprocess.run(["git", "commit", "-m", "chore: finalize remaining AI content expansion"])
    subprocess.run(["git", "push"])
