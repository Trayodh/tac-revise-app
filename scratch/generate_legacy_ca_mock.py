import json

months = ["April 2026", "May 2026", "June 2026", "July 2026", "August 2026", "September 2026"]
all_ca = {}

template = """### 📌 What Happened
{happened}

### 🎯 Why It Matters
{matters}

### 🧠 Key Facts
- {fact1}
- {fact2}

### 🔗 Static GK Connection
{static}

### ⚠️ Exam Trap
{trap}

### 🎯 Possible Question Angle
{angle}"""

for i, month in enumerate(months):
    all_ca[month] = []
    for j in range(1, 6):
        topic = "🔴 MUST KNOW | Defence & Security | Operation Test " + month + " " + str(j)
        if j == 2:
            topic = "🟠 IMPORTANT | International Relations | Global Summit " + month
        if j == 3:
            topic = "🟢 GOOD TO KNOW | Economy | Trade Pact " + month
            
        summary = template.format(
            happened=f"In {month}, a major strategic development took place regarding the deployment of new assets.",
            matters="This significantly bolsters India's deterrence capabilities along the Northern borders.",
            fact1="First deployment of the advanced MK-III variant.",
            fact2="Jointly developed by DRDO and international partners.",
            static="DRDO was established in 1958. Its motto is 'Balasya Mulam Vigyanam'.",
            trap="Do not confuse the MK-III variant with the naval MK-II variant which was inducted last year.",
            angle="UPSC may ask to identify the partner country involved in the joint development."
        )
        
        entry = {
            "id": f"ca-{month.lower().replace(' ', '-')}-00{j}",
            "topic": topic,
            "text": f"Rapid revision point {j} for {month}: Major induction and strategic deployment.",
            "details": {
                "summary": summary
            },
            "mcq": None
        }
        all_ca[month].append(entry)

with open("legacy_ca_april_sept_2026.json", "w", encoding="utf-8") as f:
    json.dump(all_ca, f, indent=2)

print("Mock data generated successfully!")
