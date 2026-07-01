import json
import os
from datasets import load_dataset

# We group MMLU subjects into our 3 main buckets
SUBJECT_MAPPING = {
    'math': ['high_school_mathematics', 'college_mathematics', 'high_school_statistics'],
    'english': ['high_school_english', 'formal_logic', 'logical_fallacies'],
    'gs': [
        'high_school_physics', 'high_school_chemistry', 'high_school_biology',
        'high_school_european_history', 'high_school_us_history', 'high_school_world_history',
        'high_school_geography', 'high_school_government_and_politics', 'high_school_macroeconomics',
        'high_school_microeconomics', 'high_school_psychology', 'high_school_computer_science',
        'astronomy', 'global_facts'
    ]
}

def fetch_questions():
    bank = {'math': [], 'english': [], 'gs': []}
    
    for category, subjects in SUBJECT_MAPPING.items():
        print(f"Fetching {category} questions...")
        for subject in subjects:
            try:
                # Load the test split of the subject
                dataset = load_dataset("cais/mmlu", subject, split="test")
                for item in dataset:
                    # MMLU schema: question, choices (list of 4 strings), answer (int 0-3)
                    if len(item['choices']) == 4:
                        bank[category].append({
                            'question': item['question'],
                            'options': item['choices'],
                            'correct': item['answer'],
                            'explanation': f"Source: MMLU {subject}",
                            'topicId': subject,
                            'difficulty': 'medium'
                        })
            except Exception as e:
                print(f"Failed to load {subject}: {e}")
                
        print(f"Total {category} questions: {len(bank[category])}")

    os.makedirs("question_banks", exist_ok=True)
    with open("question_banks/mmlu_bank.json", "w", encoding="utf-8") as f:
        json.dump(bank, f, indent=2)
    print("Successfully saved mmlu_bank.json")

if __name__ == "__main__":
    fetch_questions()
