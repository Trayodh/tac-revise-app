import sys
from youtube_transcript_api import YouTubeTranscriptApi

video_id = sys.argv[1]
try:
    transcript = YouTubeTranscriptApi.get_transcript(video_id, languages=['hi', 'en', 'hi-IN'])
    text = " ".join([t['text'] for t in transcript])
    with open("transcript_output.txt", "w", encoding="utf-8") as f:
        f.write(text)
    print("SUCCESS")
except Exception as e:
    try:
        # Fallback to list_transcripts
        transcript_list = YouTubeTranscriptApi.list_transcripts(video_id)
        transcript = transcript_list.find_generated_transcript(['hi']).fetch()
        text = " ".join([t['text'] for t in transcript])
        with open("transcript_output.txt", "w", encoding="utf-8") as f:
            f.write(text)
        print("SUCCESS")
    except Exception as e2:
        print(f"Error: {e2}")
        sys.exit(1)
