import os
import json
import time
import subprocess
from google import genai
from google.genai import errors

# Optional Tenacity for robust retries
try:
    from tenacity import retry, stop_after_attempt, wait_exponential, retry_if_exception_type
except ImportError:
    pass

# Load API Key
def load_env():
    env_path = '.env'
    if os.path.exists(env_path):
        with open(env_path, 'r') as f:
            for line in f:
                if line.startswith('GEMINI_API_KEY='):
                    return line.strip().split('=', 1)[1]
    return None

api_key = load_env()
client = genai.Client(api_key=api_key) if api_key else None

def ocr_tier_1_local(image_path):
    """
    Tier 1: Local OCR Engine (e.g., Tesseract).
    Returns (text, success_bool)
    """
    # Placeholder for Tesseract subprocess if installed
    try:
        # result = subprocess.run(['tesseract', image_path, 'stdout'], capture_output=True, text=True, check=True)
        # return result.stdout, True
        return "", False # Fallback to Tier 2 if not installed
    except Exception:
        return "", False

def get_retry_policy():
    """
    Tier 2: Gemini Vision with strict Exponential Backoff for 429 Resource Exhausted
    """
    def is_rate_limit(exception):
        return isinstance(exception, errors.APIError) and exception.code == 429
        
    try:
        return retry(
            stop=stop_after_attempt(5),
            wait=wait_exponential(multiplier=5, min=15, max=120),
            retry=retry_if_exception_type(errors.APIError)
        )
    except NameError:
        # Fallback if tenacity isn't installed
        def fallback_retry(func):
            def wrapper(*args, **kwargs):
                for attempt in range(5):
                    try:
                        return func(*args, **kwargs)
                    except errors.APIError as e:
                        if e.code == 429:
                            time.sleep(15 * (2 ** attempt))
                        else:
                            raise
                raise Exception("Max retries exceeded")
            return wrapper
        return fallback_retry

@get_retry_policy()
def ocr_tier_2_gemini(image):
    prompt = """
    Extract all readable text, tables, and questions from this image exactly as they appear.
    Preserve formatting for Options (A), (B), (C), (D).
    Do NOT invent missing text. Do NOT solve the questions. Return only extracted text.
    """
    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=[prompt, image]
    )
    return response.text

def process_ocr_queue():
    print("Starting OCR Resumable Production Engine...")
    
    with open('document_ledger.json', 'r') as f:
        ledger = json.load(f)
        
    manifest_path = 'ocr_manifest.json'
    manifest = {}
    if os.path.exists(manifest_path):
        with open(manifest_path, 'r') as f:
            manifest = json.load(f)

    # Process pending queue
    # Using a sample representation here for the script structure
    for doc, meta in ledger.items():
        if meta.get('pages_requiring_ocr', 0) > 0:
            for page in range(meta['pages_requiring_ocr']):
                page_key = f"{doc}_page_{page}"
                
                # Check manifest to prevent duplicate processing
                if page_key in manifest and manifest[page_key]['status'] == 'COMPLETE':
                    continue
                    
                print(f"Processing OCR for: {page_key}")
                image = None # Load PIL image here in full script
                
                # Execution Hierarchy
                text, success = ocr_tier_1_local(f"{page_key}.png")
                status = "COMPLETE"
                failure_reason = ""
                
                if not success:
                    try:
                        text = ocr_tier_2_gemini(image)
                    except Exception as e:
                        status = "OCR_FAILED"
                        
                        # Failure Categorization
                        if "429" in str(e):
                            failure_reason = "RATE_LIMIT"
                        elif "Timeout" in str(e):
                            failure_reason = "TIMEOUT"
                        else:
                            failure_reason = "API_FAILURE"
                            
                manifest[page_key] = {
                    'status': status,
                    'text_length': len(text) if text else 0,
                    'failure_reason': failure_reason
                }
                
                # Transactional save
                with open(manifest_path, 'w') as mf:
                    json.dump(manifest, mf)
                    
                if status == "OCR_FAILED" and failure_reason == "RATE_LIMIT":
                    print(f"Page {page_key} hit rate limit despite backoff. Sent to Tier 3 Retry Queue.")

if __name__ == "__main__":
    process_ocr_queue()
