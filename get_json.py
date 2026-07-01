import sys
import json
from youtube_transcript_api import YouTubeTranscriptApi

video_id = sys.argv[1]

try:
    transcript_list = YouTubeTranscriptApi.list_transcripts(video_id)
    # Find hindi transcript
    transcript = transcript_list.find_transcript(['hi'])
    
    # Fetch it
    fetched = transcript.fetch()
    
    # Concatenate text
    text = " ".join([t['text'] for t in fetched])
    
    with open('transcript_hi.json', 'w', encoding='utf-8') as f:
        json.dump({"text": text}, f, ensure_ascii=False)
        
    print("SUCCESS")
except Exception as e:
    print(f"FAILED: {e}")
    sys.exit(1)
