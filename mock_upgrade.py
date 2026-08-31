import json
import re

filename = "notes_data_exam_focused.js"

def generate_mock_fields(item):
    topic = item.get("topic", "Defence News")
    text = item.get("text", "")
    
    # Extract some words to highlight
    words = text.split()
    highlight_words = " ".join(words[:2]) if len(words) >= 2 else topic
    highlighted_text = text.replace(highlight_words, f'<mark class="exam-target">{highlight_words}</mark>') if highlight_words in text else text
    
    return {
        "upscHighlights": [
            f"Key aspect of {topic}",
            "Crucial for international relations and defence preparedness.",
            "Often tested in Statement-based questions."
        ],
        "institutionalContext": f"This involves key stakeholders and institutions relevant to {topic}.",
        "strategicImportance": f"Enhances India's strategic depth and operational readiness in relation to {topic}.",
        "quickSummary": f"This event regarding <mark class=\"exam-target\">{topic}</mark> marks a significant milestone. {highlighted_text}",
        "detailedAnalysis": f"An in-depth look reveals that <mark class=\"exam-target\">{topic}</mark> is pivotal for future defence strategies. The historical precedence set by {highlighted_text} cannot be understated.",
        "backgroundContext": f"Rooted in ongoing geopolitical shifts and previous bilateral/multilateral engagements.",
        "stakeholders": ["Ministry of Defence", "Indian Armed Forces", "International Partners"],
        "relatedTopics": ["International Relations", "Defence Technology", "Geopolitics"],
        "examRelevanceMatrix": {
            "NDA": "Medium",
            "CDS": "High",
            "AFCAT": "High"
        },
        "potentialQuestions": {
            "shortAnswers": [f"What is the significance of {topic}?", f"How does {topic} impact national security?"],
            "interviewQuestions": [f"What are your views on {topic}?", f"Discuss the strategic implications of {topic}."],
            "ssbDiscussionTopics": [f"The role of {topic} in modern warfare.", "India's self-reliance in defence."]
        }
    }

def mock_upgrade_db():
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    split_str = "const NOTES_DATABASE = "
    parts = content.split(split_str)
    ca_db_str = parts[0]
    nd_json_str = parts[1]

    prefix = "let CURRENT_AFFAIRS_DB = "
    ca_json_str = ca_db_str.replace(prefix, "").strip()
    if ca_json_str.endswith(";"):
        ca_json_str = ca_json_str[:-1]

    ca_db = json.loads(ca_json_str)
    total_upgraded = 0
    
    for month, items in ca_db.items():
        for item in items:
            if "upscHighlights" not in item:
                rich_fields = generate_mock_fields(item)
                item.update(rich_fields)
                total_upgraded += 1
                
    nd_json_str = nd_json_str.strip()
    if nd_json_str.endswith(";"):
        nd_json_str = nd_json_str[:-1]
    
    nd_db = json.loads(nd_json_str)
    
    for subject_key, subject_obj in nd_db.items():
        chapters = subject_obj.get("chapters", [])
        for chapter in chapters:
            if "topics" in chapter:
                for topic_item in chapter["topics"]:
                    if "upscHighlights" not in topic_item:
                        # use title if available
                        topic_item["topic"] = topic_item.get("title", topic_item.get("topic", "Subject Topic"))
                        topic_item["text"] = topic_item.get("content", "")
                        rich_fields = generate_mock_fields(topic_item)
                        topic_item.update(rich_fields)
                        total_upgraded += 1
                
    new_ca_db_str = prefix + json.dumps(ca_db, indent=2) + ";\n\n"
    new_nd_db_str = "const NOTES_DATABASE = " + json.dumps(nd_db, indent=2) + ";"
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(new_ca_db_str + new_nd_db_str)
            
    print(f"Mock Upgraded {total_upgraded} items.")

if __name__ == "__main__":
    mock_upgrade_db()
