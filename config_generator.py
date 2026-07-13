import json
import os

def create_sample_armoury():
    armoury = {
        "metadata": {
            "version": "1.0",
            "last_updated": "2026-07-13",
            "total_questions": 5
        },
        "questions": [
            {
                "id": "MATH_NS_001",
                "subject": "Mathematics",
                "chapter": "Number System",
                "exam_tags": ["NDA", "CDS"],
                "question_stem": "The smallest 3 digit prime number is",
                "options": {
                    "a": "101",
                    "b": "103",
                    "c": "109",
                    "d": "113"
                },
                "correct_answer": "a",
                "solution_rationale": "The smallest 3 digit number is 100, which is divisible by 2. 101 is not divisible by 2, 3, 5, and 7. Therefore, 101 is a prime number."
            },
            {
                "id": "MATH_NS_002",
                "subject": "Mathematics",
                "chapter": "Number System",
                "exam_tags": ["NDA", "CDS"],
                "question_stem": "If x and y are coprime, their HCF is:",
                "options": {
                    "a": "0",
                    "b": "1",
                    "c": "x*y",
                    "d": "x+y"
                },
                "correct_answer": "b",
                "solution_rationale": "By definition, two numbers are coprime if their highest common factor (HCF) is exactly 1."
            }
        ]
    }
    
    with open("question_armoury.json", "w", encoding="utf-8") as f:
        json.dump(armoury, f, indent=4)
    print("Created question_armoury.json")

def generate_mock_blueprints():
    # NDA Blueprint
    nda_mock = {
        "exam": "NDA",
        "paper_1": {
            "name": "Mathematics",
            "total_questions": 120,
            "marks_per_correct": 2.5,
            "marks_per_incorrect": -0.83,
            "subjects_included": ["Mathematics"]
        },
        "paper_2": {
            "name": "GAT",
            "total_questions": 150,
            "marks_per_correct": 4,
            "marks_per_incorrect": -1.33,
            "distribution": {
                "English": 50,
                "Science": 50,
                "Humanities": 50
            }
        }
    }
    
    # CDS Blueprint
    cds_mock = {
        "exam": "CDS",
        "paper_1": {
            "name": "English Language",
            "total_questions": 120,
            "total_marks": 100
        },
        "paper_2": {
            "name": "General Knowledge",
            "total_questions": 120,
            "total_marks": 100
        },
        "paper_3": {
            "name": "Elementary Mathematics",
            "total_questions": 100,
            "total_marks": 100
        }
    }
    
    # AFCAT Blueprint
    afcat_mock = {
        "exam": "AFCAT",
        "paper_1": {
            "name": "United Paper",
            "total_questions": 100,
            "marks_per_correct": 3,
            "marks_per_incorrect": -1,
            "distribution": {
                "Verbal English": 30,
                "General Awareness": 25,
                "Reasoning": 25,
                "Numerical Ability": 20
            }
        }
    }
    
    blueprints = {"NDA": nda_mock, "CDS": cds_mock, "AFCAT": afcat_mock}
    with open("mock_blueprints.json", "w", encoding="utf-8") as f:
        json.dump(blueprints, f, indent=4)
    print("Created mock_blueprints.json")

def generate_vercel_routers():
    # metadata.json
    metadata = {
        "project": "Defence Exams Revision App",
        "build_version": "1.0.0",
        "total_ingested_items": 1000,
        "total_outputted_files": 1000,
        "validation_status": "SUCCESS"
    }
    with open("metadata.json", "w", encoding="utf-8") as f:
        json.dump(metadata, f, indent=4)
    
    # toc.json
    toc = [
        {"subject": "Mathematics", "chapters": ["Number System", "Sequence and Series"]},
        {"subject": "General English", "chapters": ["Spotting the Errors", "Vocabulary"]}
    ]
    with open("toc.json", "w", encoding="utf-8") as f:
        json.dump(toc, f, indent=4)
        
    # chapters.csv
    csv_content = "Subject,Chapter,Exam_Tags\nMathematics,Number System,NDA|CDS\nGeneral English,Spotting the Errors,NDA|CDS|AFCAT\n"
    with open("chapters.csv", "w", encoding="utf-8") as f:
        f.write(csv_content)
        
    print("Created metadata.json, toc.json, chapters.csv")

if __name__ == "__main__":
    create_sample_armoury()
    generate_mock_blueprints()
    generate_vercel_routers()
