
import sys
from youtube_transcript_api import YouTubeTranscriptApi
try:
    transcript = YouTubeTranscriptApi.get_transcript('ovf9tK2CM-c', languages=['hi', 'en', 'hi-IN'])
    print(" ".join([t['text'] for t in transcript]))
except Exception as e:
    print(f"Error: {e}", file=sys.stderr)
    sys.exit(1)
