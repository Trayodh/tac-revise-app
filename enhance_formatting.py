import os
import time
import glob
from dotenv import load_dotenv
from google import genai
from google.genai import types
from tenacity import retry, wait_exponential, stop_after_attempt

# Initialize Gemini Client
load_dotenv()
api_key = os.environ.get("GEMINI_API_KEY")
if not api_key:
    raise ValueError("GEMINI_API_KEY environment variable not set.")
client = genai.Client(api_key=api_key)

SYSTEM_PROMPT = """You are an expert textbook formatter and Markdown wizard. I will provide raw text extracted from a textbook chapter. 
Your task is to make it SUPER BEAUTIFUL and PERFECTLY FORMATTED in Markdown, while STRICTLY retaining 100% of the original theory text length.

CRITICAL RULES:
1. DO NOT SUMMARIZE OR DELETE THEORY TEXT. Keep all paragraphs and explanations intact. The text must remain very long (1-2 pages of content).
2. Add 1 or 2 highly relevant, detailed Mermaid.js diagrams (```mermaid ... ```) to visually explain the core concepts.
3. Use bullet points and bolding to break up massive walls of text for readability.
4. For mathematical formulas, variables, or equations, wrap them exactly in: <span style="color: var(--warning);">formula</span>. Do not use Markdown $ or $$ for math.
5. The raw text starts with a specific HTML wrapper (e.g. <div class="revision-card"...>...<h4>DEEP CONCEPTUAL EXPLANATION</h4>). You MUST start your response with this exact HTML wrapper and end your response with the closing </div>. Do not output anything outside of this div.
"""

@retry(wait=wait_exponential(multiplier=2, min=5, max=60), stop=stop_after_attempt(5))
def call_llm(prompt):
    response = client.models.generate_content(
        model='gemini-2.5-flash',
        contents=prompt,
        config=types.GenerateContentConfig(
            system_instruction=SYSTEM_PROMPT,
            temperature=0.3
        )
    )
    return response.text

def process_file(filepath):
    print(f"Enhancing formatting for: {filepath}")
    with open(filepath, 'r', encoding='utf-8') as f:
        raw_text = f.read()
    
    # Prompt the LLM
    prompt = f"Please format the following text according to the system rules:\n\n{raw_text}"
    try:
        formatted_text = call_llm(prompt)
        
        # Clean up any potential markdown code blocks wrapped around the response by the LLM
        if formatted_text.startswith("```html") or formatted_text.startswith("```markdown") or formatted_text.startswith("```\n"):
            formatted_text = "\n".join(formatted_text.split("\n")[1:-1])
            
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(formatted_text)
    except Exception as e:
        print(f"Failed to process {filepath}: {e}")

def main():
    modules_dir = "Pathfinder_Elite/modules"
    md_files = glob.glob(f"{modules_dir}/**/*.md", recursive=True)
    
    total = len(md_files)
    for i, filepath in enumerate(md_files):
        print(f"[{i+1}/{total}] ", end="", flush=True)
        process_file(filepath)
        
        # Rate limiting to stay well below 15 RPM (1 request every 5 seconds is 12 RPM)
        if i < total - 1:
            time.sleep(5)
            
if __name__ == "__main__":
    main()
