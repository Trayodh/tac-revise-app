import os
import gdown

files = [
    ("1L7MW50CZCewHebPsiLDyjcMgOrfitkLd", "GENERAL ABILITY AND INTELLIGENCE_0.pdf"),
    ("1JgBxdz7e2OqkElXvn6grOsZrDDHxGeW2", "GENERAL STUDIES PAPER I.pdf"),
    ("1V9dAOsfqyUzY9kb0No236bJPvrZf3FtV", "QP-CAPF-20-Gen_Ability_Intelligence.pdf"),
    ("1BC2dN8c-LdHEdAZysZTG2lsQK35Lxm1V", "QP-CAPF-22-GAI-080822.pdf"),
    ("1n0RHg1lGxkGc5hefad8kJjAN4w3z1AT9", "QP-CAPF-25-GENERAL-ABILITY-INTELLIGENCE-040825.pdf"),
    ("1kEQSTTUi63tO01T9TMhjAfskQIj7JQVb", "QP-CSP-21-GeneralStudiesPaper-I-121021.pdf"),
    ("1JpeclUVI8BDVFWACiRn8TU_03mRsJdz8", "QP-CSP-24-GENERAL-STUDIES-PAPER-I-180624.pdf"),
    ("1GAdzwhMKMW7-N2EuFnzYz2mPXZzJK0aU", "QP-CSP-25-GENERAL-STUDIES-PAPER-I-26052025.pdf"),
    ("1t3GHhhc0G3f0TWG5cEqIF60ORqT-TltM", "QP_CAPF_2023_GAI_07082023.pdf"),
    ("1FLg9gLQ1RKLfumBcOnssmEi1fKD64eGW", "QP_CAPF_2024_GEN-ABILITY-AND-INTELLI_05082024.pdf"),
    ("1T-N_I0yso2omfRepw4nzkFnHAvNZpu_A", "QP_CS_Pre_Exam_2023_280523.pdf"),
    ("10XR_4KRVizypOkuBfieVanoHNY8_SPPX", "QP_CSP_2026_GENERAL_STUDIES_PAPER-I_25052026.pdf")
]

os.makedirs("CAPF_CSE_Papers", exist_ok=True)

for file_id, file_name in files:
    output_path = os.path.join("CAPF_CSE_Papers", file_name)
    if os.path.exists(output_path):
        print(f"Skipping {file_name}, already exists")
        continue
    try:
        print(f"Downloading {file_name}...")
        gdown.download(id=file_id, output=output_path, quiet=False)
    except Exception as e:
        print(f"Failed to download {file_name}: {e}")

print("Download script finished.")
