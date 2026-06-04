import os
import re
import json
import argparse
from datetime import datetime
try:
    from google import genai
    from google.genai import types
except ImportError:
    print("Error: google-genai package is not installed. Run 'pip install google-genai'.")
    exit(1)

# File paths
CA_DATA_PATH = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'ca_data.js')

def get_gemini_client():
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("Error: GEMINI_API_KEY environment variable not set.")
        exit(1)
    return genai.Client(api_key=api_key)

def generate_visits_data(client, coverage_period):
    print(f"Fetching PM Visits and Bilaterals for {coverage_period}...")
    prompt = f"""
    You are an expert on Indian Current Affairs for defence exams like CDS/NDA/AFCAT.
    Provide a list of major Prime Ministerial visits and bilateral agreements involving India during the period: {coverage_period}.
    Return the result strictly as a JSON array of objects. Do not include markdown code blocks like ```json.
    Each object must have the following keys:
    - "visit": string (e.g., "PM Modi to France")
    - "period": string (e.g., "July 2026")
    - "purpose": string (short description)
    - "deals": string (key agreements, especially defence, trade, or tech)
    """
    response = client.models.generate_content(
        model='gemini-2.5-flash',
        contents=prompt,
        config=types.GenerateContentConfig(
            response_mime_type="application/json",
        ),
    )
    return json.loads(response.text)

def generate_fta_data(client, coverage_period):
    print(f"Fetching Free Trade Agreements status for {coverage_period}...")
    prompt = f"""
    You are an expert on Indian Current Affairs for defence exams.
    Provide a list of the latest status of major Indian Free Trade Agreements (FTAs/CEPAs) as of the period: {coverage_period}.
    Return the result strictly as a JSON array of objects. Do not include markdown code blocks.
    Each object must have the following keys:
    - "deal": string (e.g., "India-EU Free Trade Agreement")
    - "status": string (e.g., "Under Negotiation" or "Concluded")
    - "scope": string (short description of what it covers)
    - "significance": string (why it is important for India)
    """
    response = client.models.generate_content(
        model='gemini-2.5-flash',
        contents=prompt,
        config=types.GenerateContentConfig(
            response_mime_type="application/json",
        ),
    )
    return json.loads(response.text)

def generate_dates_themes(client, current_dates_json, year):
    print(f"Fetching Themes for Important Dates for the year {year}...")
    prompt = f"""
    You are an expert on Current Affairs.
    I will provide a JSON array of important national and international dates.
    Update the "theme" field for each date with the official theme for the year {year}.
    If the theme for {year} is not yet announced or unknown, set it to null.
    Do not change the "date", "name", or "significance" fields.
    Return the strictly updated JSON array. Do not include markdown blocks.

    Original Data:
    {json.dumps(current_dates_json)}
    """
    response = client.models.generate_content(
        model='gemini-2.5-flash',
        contents=prompt,
        config=types.GenerateContentConfig(
            response_mime_type="application/json",
        ),
    )
    return json.loads(response.text)

def update_ca_data_js(exam_cycle, coverage_from, coverage_to, visits_data, fta_data, dates_data):
    if not os.path.exists(CA_DATA_PATH):
        print(f"Error: {CA_DATA_PATH} not found.")
        return

    with open(CA_DATA_PATH, 'r', encoding='utf-8') as f:
        content = f.read()

    # Update CA_META
    last_refreshed = datetime.now().strftime("%B %Y")
    meta_pattern = r'window\.CA_META = \{.*?\};'
    new_meta = f"""window.CA_META = {{
  examCycle: "{exam_cycle}",
  lastRefreshed: "{last_refreshed}",
  coverageFrom: "{coverage_from}",
  coverageTo: "{coverage_to}",
}};"""
    content = re.sub(meta_pattern, new_meta, content, flags=re.DOTALL)

    # Update VISITS
    visits_pattern = r'window\.CA_VISITS_DATA = \[.*?\];'
    new_visits = f"window.CA_VISITS_DATA = {json.dumps(visits_data, indent=2)};"
    content = re.sub(visits_pattern, new_visits, content, flags=re.DOTALL)

    # Update FTA
    fta_pattern = r'window\.CA_FTA_DATA = \[.*?\];'
    new_fta = f"window.CA_FTA_DATA = {json.dumps(fta_data, indent=2)};"
    content = re.sub(fta_pattern, new_fta, content, flags=re.DOTALL)

    # Update DATES
    dates_pattern = r'window\.CA_DATES_DATA = \[.*?\];'
    new_dates = f"window.CA_DATES_DATA = {json.dumps(dates_data, indent=2)};"
    content = re.sub(dates_pattern, new_dates, content, flags=re.DOTALL)

    with open(CA_DATA_PATH, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Successfully updated {CA_DATA_PATH}!")

def extract_current_dates():
    if not os.path.exists(CA_DATA_PATH):
        return []
    with open(CA_DATA_PATH, 'r', encoding='utf-8') as f:
        content = f.read()
    
    match = re.search(r'window\.CA_DATES_DATA = (\[.*?\]);', content, flags=re.DOTALL)
    if match:
        try:
            # Need to handle potential trailing commas or JS-specific formatting if json.loads fails
            # Since the original file is JS, not strict JSON, we might need a workaround.
            # But let's assume it's close enough or we can extract it cleanly.
            # For a safer approach, we can just hardcode the base dates or clean it up.
            json_str = match.group(1)
            # Remove comments
            json_str = re.sub(r'//.*?\n', '\n', json_str)
            # Remove trailing commas
            json_str = re.sub(r',\s*]', ']', json_str)
            json_str = re.sub(r',\s*}', '}', json_str)
            
            # The keys in JS might not have quotes. This regex adds quotes to keys.
            json_str = re.sub(r'([{,]\s*)([a-zA-Z0-9_]+)\s*:', r'\1"\2":', json_str)
            
            return json.loads(json_str)
        except Exception as e:
            print("Could not parse existing CA_DATES_DATA as JSON. Error:", e)
            return []
    return []

def main():
    parser = argparse.ArgumentParser(description="Automated Current Affairs Lifecycle Manager")
    parser.add_argument("--cycle", type=str, help="Upcoming Exam Cycle (e.g., 'CDS I 2027')", required=True)
    parser.add_argument("--from_date", type=str, help="Coverage start (e.g., 'July 2026')", required=True)
    parser.add_argument("--to_date", type=str, help="Coverage end (e.g., 'December 2026')", required=True)
    parser.add_argument("--year", type=str, help="Year for themes (e.g., '2026')", required=True)

    args = parser.parse_args()

    client = get_gemini_client()
    coverage_period = f"{args.from_date} to {args.to_date}"

    visits_data = generate_visits_data(client, coverage_period)
    fta_data = generate_fta_data(client, coverage_period)
    
    current_dates = extract_current_dates()
    if current_dates:
        dates_data = generate_dates_themes(client, current_dates, args.year)
    else:
        dates_data = [] # Fallback

    update_ca_data_js(args.cycle, args.from_date, args.to_date, visits_data, fta_data, dates_data)

if __name__ == "__main__":
    main()
