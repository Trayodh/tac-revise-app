/**
 * update_nov7_ca_items.js
 * Appends 15 comprehensive, exam-calibrated Current Affairs items (nov-2026-006 to nov-2026-020)
 * covering November 3–7, 2026 to current_affairs_db.js, and synchronizes all databases.
 */
const fs = require('fs');
const vm = require('vm');

const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync('current_affairs_db.js', 'utf8'), ctx);
const caDb = ctx.window.CURRENT_AFFAIRS_DB;

const NOV_3_TO_7_ITEMS = [
  {
    "id": "nov-2026-006",
    "topic": "Military Exercises & Act East Policy",
    "publicationDate": "2026-11-04",
    "originalSource": "PIB / Ministry of Defence",
    "relatedOfficialDocuments": "5th Edition of Vietnam-India Bilateral Army Exercise VINBAX 2026",
    "text": "The **5th edition** of the Vietnam–India Bilateral Military Exercise **VINBAX 2026** commenced on November 4, 2026 at **Ambala and Chandimandir (Haryana)**, marking the **first time** the exercise was expanded into a **Bi-Service format** featuring both **Army and Air Force** personnel from India and Vietnam.",
    "details": {
      "winner": "Indian Army (Corps of Engineers) & IAF + Vietnam People's Army & Air Force",
      "award": "Exercise VINBAX 2026 (5th Edition — Ambala)",
      "nationality": "India & Vietnam",
      "summary": "Conducted from November 4 to 23 at Ambala and Chandimandir, focusing on deploying an Engineer Company and Medical Team under Chapter VII of the UN Charter for Peacekeeping Operations."
    },
    "upscHighlights": [
      "Bi-Service Expansion: For the first time since its inception in 2018, Exercise VINBAX (5th edition, Nov 4–23 at Ambala & Chandimandir) included Indian Air Force and Vietnam People's Air Force personnel alongside Army contingents.",
      "Participating Units: The Indian Army contingent of 47 personnel was represented by a Regiment of the Corps of Engineers along with logistics and medical specialists.",
      "Tactical Aim: Employment and deployment of an Engineer Company and a Medical Team as part of a United Nations Contingent for Peacekeeping Operations under Chapter VII of the UN Charter, including Humanitarian Assistance and Disaster Relief (HADR) and heliborne operations.",
      "Evolution: Instituted in 2018 in Jabalpur (MP) as a Table-Top Exercise, upgraded to a full Field Training Exercise in 2022 at Chandimandir, and hosted in Hanoi (Vietnam) in 2023 (4th edition)."
    ],
    "institutionalContext": "Anchors the India–Vietnam Comprehensive Strategic Partnership (elevated in 2016) and the Joint Vision Statement for India–Vietnam Defence Partnership towards 2030.",
    "strategicImportance": "High-probability Defence Exercise question for CDS 1 2027, NDA 1 2027, and AFCAT 1 2027.",
    "quickSummary": "The 5th edition of Exercise <mark class=\"exam-target\">VINBAX 2026</mark> between <mark class=\"exam-target\">India and Vietnam</mark> commenced at <mark class=\"exam-target\">Ambala</mark> (Nov 4–23), featuring a first-ever <mark class=\"exam-target\">Bi-Service (Army + Air Force)</mark> participation by India's <mark class=\"exam-target\">Corps of Engineers</mark>.",
    "detailedAnalysis": "Vietnam is a cornerstone of India's Act East Policy and Indo-Pacific strategy. Beyond Exercise VINBAX, India has extended a $500 million Defence Line of Credit to Vietnam (under which L&T built 12 High-Speed Guard Boats) and gifted the indigenously built Khukri-class missile corvette INS Kirpan to the Vietnam People's Navy in July 2023.",
    "backgroundContext": "A 48-hour validation exercise including Humanitarian Mine Action (HMA) and UN Peacekeeping engineering tasks concludes the drill at Chandimandir.",
    "stakeholders": [
      "Indian Army (Corps of Engineers)",
      "Indian Air Force",
      "Vietnam People's Army & Air Force"
    ],
    "relatedTopics": [
      "Exercise VINBAX 2026",
      "INS Kirpan Handover to Vietnam",
      "Chapter VII of the UN Charter"
    ],
    "examRelevanceMatrix": {
      "NDA": "High",
      "CDS": "High",
      "AFCAT": "High",
      "CAPF": "High",
      "UPSC": "Medium"
    },
    "mcq": {
      "question": "Consider the following statements regarding the 5th edition of Exercise \"VINBAX 2026\" (November 2026):\n1. It is a bilateral military exercise conducted between India and Vietnam at Ambala and Chandimandir in Haryana.\n2. For the first time, the 2026 edition was expanded into a bi-service exercise featuring personnel from both the Army and the Air Force of both nations.\n3. Its primary tactical focus is the employment of an Engineer Company and Medical Team in UN Peacekeeping Operations under Chapter VII of the UN Charter.\nWhich of the statements given above are correct?",
      "options": [
        "1 and 2 only",
        "2 and 3 only",
        "1 and 3 only",
        "1, 2 and 3"
      ],
      "correct": 3,
      "explanation": "All three statements are correct. The 5th edition of Exercise VINBAX 2026 was held at Ambala & Chandimandir, expanded for the first time to a bi-service (Army + Air Force) format, and focused on UN Peacekeeping engineering and medical tasks under Chapter VII."
    }
  },
  {
    "id": "nov-2026-007",
    "topic": "Military Exercises & QUAD Defence Cooperation",
    "publicationDate": "2026-11-05",
    "originalSource": "PIB / Ministry of Defence",
    "relatedOfficialDocuments": "3rd Edition of India-Australia Joint Military Exercise AUSTRAHIND 2026",
    "text": "The **3rd edition** of the India–Australia Joint Military Exercise **AUSTRAHIND** was conducted in November 2026 at the **Foreign Training Node in Aundh (Pune), Maharashtra**, featuring the Indian Army's **DOGRA Regiment**, **Indian Air Force**, and the **Australian Army's 1st Combat Engineer Regiment**.",
    "details": {
      "winner": "Indian Army (DOGRA Regiment) & IAF + Australian Army (1st Brigade)",
      "award": "Exercise AUSTRAHIND 2026 (3rd Edition — Pune)",
      "nationality": "India & Australia",
      "summary": "Joint sub-conventional and counter-terrorism training in semi-urban and semi-desert terrain at Aundh (Pune) under Chapter VII of the UN Mandate."
    },
    "upscHighlights": [
      "Venue & Edition: 3rd edition held at the Foreign Training Node, Aundh (Pune), Maharashtra. Instituted in 2022 in Mahajan Field Firing Ranges (Rajasthan), with the 2nd edition held in Perth, Australia (2023).",
      "Participating Contingents: Indian contingent of 140 personnel mainly from a battalion of the DOGRA Regiment and 14 personnel from the Indian Air Force; Australian contingent of 120 personnel from the 1st Combat Engineer Regiment of the 1st Brigade, 2nd Division.",
      "India–Australia Exercise Matrix: AUSTRAHIND (Army + Air Force), AUSINDEX (Bilateral Navy), Pitch Black (Multilateral Air Force hosted by RAAF in Darwin), Malabar (Quad Naval), and Sea Dragon (Anti-Submarine Warfare)."
    ],
    "institutionalContext": "Operates under the India–Australia Comprehensive Strategic Partnership (2020) and Mutual Logistics Support Agreement (MLSA).",
    "strategicImportance": "High-yield question on QUAD bilateral exercises and participating regiments for CDS and NDA.",
    "quickSummary": "The 3rd edition of the India–Australia Joint Military Exercise <mark class=\"exam-target\">AUSTRAHIND</mark> took place at <mark class=\"exam-target\">Aundh (Pune), Maharashtra</mark>, involving the <mark class=\"exam-target\">DOGRA Regiment</mark>, IAF, and the Australian Army's 1st Combat Engineer Regiment.",
    "detailedAnalysis": "Exercise AUSTRAHIND is conducted in two phases: a combat conditioning and tactical training phase (including special heliborne operations, sniper fire, counter-drone drills, and raid operations), followed by a 48-hour joint validation phase simulating neutralization of terrorist hideouts in semi-urban environments.",
    "backgroundContext": "India and Australia also recently signed an Implementing Arrangement on Hydrography and Air-to-Air Refuelling between the Royal Australian Air Force (KC-30A MRTT) and the IAF.",
    "stakeholders": [
      "Indian Army (DOGRA Regiment)",
      "Indian Air Force",
      "Australian Army (1st Brigade)"
    ],
    "relatedTopics": [
      "Exercise AUSTRAHIND vs AUSINDEX",
      "Exercise Pitch Black",
      "India-Australia MLSA"
    ],
    "examRelevanceMatrix": {
      "NDA": "High",
      "CDS": "High",
      "AFCAT": "High",
      "CAPF": "Medium",
      "UPSC": "Medium"
    },
    "mcq": {
      "question": "Where was the 3rd edition of the India–Australia Joint Military Exercise \"AUSTRAHIND\" conducted in November 2026?",
      "options": [
        "Mahajan Field Firing Ranges, Rajasthan",
        "Foreign Training Node, Aundh (Pune), Maharashtra",
        "Chaubattia, Uttarakhand",
        "Babina Cantonment, Uttar Pradesh"
      ],
      "correct": 1,
      "explanation": "The 3rd edition of Exercise AUSTRAHIND was conducted at the Foreign Training Node in Aundh (Pune), Maharashtra, featuring the Indian Army's DOGRA Regiment, IAF, and the Australian Army."
    }
  },
  {
    "id": "nov-2026-008",
    "topic": "Naval Diplomacy & Indian Ocean Security",
    "publicationDate": "2026-11-05",
    "originalSource": "PIB / Indian Navy",
    "relatedOfficialDocuments": "3rd Edition of MAHASAGAR High-Level Virtual Interaction",
    "text": "Chief of the Naval Staff **Admiral Dinesh K. Tripathi** hosted the **3rd edition** of **'MAHASAGAR'** (*Maritime Heads for Active Security And Growth for All in the Region*) on November 5, 2026, engaging Naval Chiefs and Maritime Agency Heads of **10 Indian Ocean Region (IOR) littoral nations**.",
    "details": {
      "winner": "Indian Navy (CNS Admiral Dinesh K. Tripathi) & 10 IOR Littoral Nations",
      "award": "3rd Edition of MAHASAGAR Naval Interaction",
      "nationality": "India & 10 IOR Nations",
      "summary": "High-level maritime interaction under the theme 'Training Cooperation to Mitigate Common Maritime Security Challenges in the IOR'."
    },
    "upscHighlights": [
      "Full Form of MAHASAGAR: \"Maritime Heads for Active Security And Growth for All in the Region\" (Hindi word meaning 'Vast Ocean'), launched by the Indian Navy in November 2023 as a bi-annual outreach expansion of PM Modi's 2015 SAGAR (Security and Growth for All in the Region) vision.",
      "10 Participating IOR Littoral Countries: Bangladesh, Comoros, Kenya, Madagascar, Maldives, Mauritius, Mozambique, Seychelles, Sri Lanka, and Tanzania.",
      "Theme of 3rd Edition (Nov 5, 2026): \"Training Cooperation to Mitigate Common Maritime Security Challenges in the IOR\".",
      "Strategic Context: Addresses non-traditional maritime threats including piracy, IUU (Illegal, Unreported, and Unregulated) fishing, narcotics trafficking, and HADR through the Information Fusion Centre – Indian Ocean Region (IFC-IOR, Gurugram)."
    ],
    "institutionalContext": "Positions the Indian Navy as the 'First Responder and Preferred Security Partner' across the Western and Eastern Indian Ocean.",
    "strategicImportance": "Very high-yield question for CDS, NDA, and UPSC Prelims on MAHASAGAR full form and participating IOR countries.",
    "quickSummary": "Chief of the Naval Staff <mark class=\"exam-target\">Admiral Dinesh K. Tripathi</mark> hosted the 3rd edition of <mark class=\"exam-target\">MAHASAGAR</mark> (*Maritime Heads for Active Security And Growth for All in the Region*) with 10 IOR nations on the theme of training cooperation.",
    "detailedAnalysis": "While SAGAR (launched in Mauritius in March 2015) provides the overarching national maritime doctrine, MAHASAGAR serves as the operational Navy-to-Navy Chiefs' forum connecting East African island/littoral states (Comoros, Kenya, Madagascar, Mauritius, Mozambique, Seychelles, Tanzania) and South Asian neighbours (Bangladesh, Maldives, Sri Lanka).",
    "backgroundContext": "Complemented by the Goa Maritime Conclave (GMC), Indian Ocean Naval Symposium (IONS, launched in 2008), and Exercise AIKEYME (Africa-India Key Maritime Engagement).",
    "stakeholders": [
      "Indian Navy (CNS Admiral Dinesh K. Tripathi)",
      "10 IOR Littoral Navies & Coast Guards",
      "IFC-IOR Gurugram"
    ],
    "relatedTopics": [
      "MAHASAGAR vs SAGAR Doctrine",
      "Indian Ocean Naval Symposium (IONS)",
      "IFC-IOR (Gurugram)"
    ],
    "examRelevanceMatrix": {
      "NDA": "High",
      "CDS": "High",
      "AFCAT": "High",
      "CAPF": "High",
      "UPSC": "High"
    },
    "mcq": {
      "question": "Consider the following statements regarding the Indian Navy's \"MAHASAGAR\" initiative, whose 3rd edition was held in November 2026:\n1. The acronym MAHASAGAR stands for \"Maritime Heads for Active Security And Growth for All in the Region\".\n2. The 3rd edition was hosted by Chief of the Naval Staff Admiral Dinesh K. Tripathi with the Maritime Heads of 10 Indian Ocean Region (IOR) littoral nations, including Comoros, Madagascar, Mozambique, and Seychelles.\n3. The theme of the 3rd edition was \"Training Cooperation to Mitigate Common Maritime Security Challenges in the IOR\".\nWhich of the statements given above are correct?",
      "options": [
        "1 and 2 only",
        "2 and 3 only",
        "1 and 3 only",
        "1, 2 and 3"
      ],
      "correct": 3,
      "explanation": "All three statements are correct. MAHASAGAR (Maritime Heads for Active Security And Growth for All in the Region) brought together India and 10 IOR littoral states (Bangladesh, Comoros, Kenya, Madagascar, Maldives, Mauritius, Mozambique, Seychelles, Sri Lanka, Tanzania) under the theme of Training Cooperation."
    }
  },
  {
    "id": "nov-2026-009",
    "topic": "Defence Indigenisation & Small Arms",
    "publicationDate": "2026-11-05",
    "originalSource": "Indian Army / DRDO",
    "relatedOfficialDocuments": "Induction of Indigenous 9x19mm 'Asmi' Machine Pistol into Northern Command",
    "text": "The Indian Army's **Northern Command** inducted the first batch of **550 indigenously designed and manufactured 'ASMI' (9×19mm) Machine Pistols**, co-developed by **DRDO's Armament Research and Development Establishment (ARDE, Pune)** and **Lt Col Prasad Bansod**, and manufactured by **Lokesh Machines Limited (Hyderabad)**.",
    "details": {
      "winner": "DRDO (ARDE Pune), Lt Col Prasad Bansod & Lokesh Machines (Hyderabad)",
      "award": "Induction of 550 Indigenous 'Asmi' 9x19mm Machine Pistols",
      "nationality": "India",
      "summary": "India's first completely indigenous 9x19mm submachine gun inducted into the Indian Army's Northern Command to replace the vintage 9mm Sterling carbine and reduce reliance on Israeli Uzi/MP9 imports."
    },
    "upscHighlights": [
      "Meaning & Design: \"Asmi\" in Sanskrit means \"Pride, Self-Respect, and Hard Work\". Designed in a record 4 months by Indian Army officer Lt Col Prasad Bansod in collaboration with DRDO's ARDE, Pune.",
      "Manufacturing Partner: Produced by private-sector MSME Lokesh Machines Limited in Hyderabad under the 'Atmanirbhar Bharat' Transfer of Technology (ToT) framework.",
      "Technical Specifications: Fires the in-service 9×19mm Parabellum ammunition; features an 8-inch barrel, monolithic aluminium upper receiver, carbon-fibre lower receiver, weighs under 2 kg (empty), and has an effective range of 100 meters with a 33-round magazine.",
      "Operational Role: Ideal close-quarter battle (CQB) personal defence weapon for special forces, tank/aircraft crews, counter-insurgency squads in J&K (Northern Command), and VIP protection."
    ],
    "institutionalContext": "First major small-arm designed jointly by a serving Indian Army officer and DRDO to enter operational service via a private Indian manufacturer.",
    "strategicImportance": "High-probability Defence Technology question for CDS, NDA, AFCAT, and CAPF.",
    "quickSummary": "The Indian Army's <mark class=\"exam-target\">Northern Command</mark> inducted 550 indigenous <mark class=\"exam-target\">9×19mm 'Asmi' Machine Pistols</mark>, designed by <mark class=\"exam-target\">DRDO's ARDE (Pune)</mark> and <mark class=\"exam-target\">Lt Col Prasad Bansod</mark> and built by <mark class=\"exam-target\">Lokesh Machines (Hyderabad)</mark>.",
    "detailedAnalysis": "For decades, Indian troops relied on the 1940s-era British 9mm Sterling submachine carbine (1A1) or expensive imported weapons like the Israeli Micro-Uzi and Swiss Brügger & Thomet MP9. Priced under ₹50,000 per unit (nearly one-third the cost of imported equivalents) and utilizing 3D-printed components and aerospace-grade aluminium/carbon fibre, Asmi represents a major leap in indigenous infantry weaponry alongside the AK-203 (Korwa) and Ugram (7.62×51mm assault rifle).",
    "backgroundContext": "DRDO and ARDE Pune also recently unveiled 'Ugram' ('Ferocious'), an indigenous 7.62×51mm assault rifle developed with Dvipa Armour India (Hyderabad).",
    "stakeholders": [
      "Indian Army (Northern Command)",
      "DRDO (ARDE Pune)",
      "Lokesh Machines Limited (Hyderabad)"
    ],
    "relatedTopics": [
      "Asmi 9x19mm Machine Pistol",
      "Ugram 7.62x51mm Assault Rifle",
      "AK-203 Rifles (Korwa, Amethi)"
    ],
    "examRelevanceMatrix": {
      "NDA": "High",
      "CDS": "High",
      "AFCAT": "High",
      "CAPF": "High",
      "UPSC": "Medium"
    },
    "mcq": {
      "question": "Consider the following statements regarding the indigenous weapon \"Asmi\" recently inducted into the Indian Army's Northern Command:\n1. It is India's first indigenously designed and manufactured 9×19mm machine pistol (submachine gun).\n2. It was co-developed by DRDO's Armament Research and Development Establishment (ARDE), Pune and Indian Army officer Lt Col Prasad Bansod, and manufactured by Lokesh Machines Limited in Hyderabad.\n3. The word \"Asmi\" in Sanskrit translates to \"Pride, Self-Respect, and Hard Work\".\nWhich of the statements given above are correct?",
      "options": [
        "1 and 2 only",
        "2 and 3 only",
        "1 and 3 only",
        "1, 2 and 3"
      ],
      "correct": 3,
      "explanation": "All three statements are correct. Asmi is an indigenous 9×19mm machine pistol designed by ARDE (Pune) and Lt Col Prasad Bansod, manufactured by Lokesh Machines (Hyderabad), and inducted into the Northern Command."
    }
  },
  {
    "id": "nov-2026-010",
    "topic": "International Relations & Global Geopolitics",
    "publicationDate": "2026-11-06",
    "originalSource": "International Diplomatic Desk / MEA",
    "relatedOfficialDocuments": "47th Presidential Election of the United States & India-US Strategic Partnership",
    "text": "**Donald J. Trump** was elected the **47th President of the United States** on November 5–6, becoming only the **second President in US history** to serve **two non-consecutive terms** (45th and 47th President) after **Grover Cleveland** (22nd and 24th President), with **J.D. Vance** elected as the **50th Vice President**.",
    "details": {
      "winner": "Donald J. Trump (47th US President) & J.D. Vance (50th Vice President)",
      "award": "US Presidential Election Victory (312 Electoral College Votes)",
      "nationality": "United States",
      "summary": "Swept all seven battleground swing states (312 Electoral College votes vs 226) and the national popular vote; Usha Chilukuri Vance becomes the first Indian-American and Hindu Second Lady of the US."
    },
    "upscHighlights": [
      "Historical Precedent: Donald Trump (45th President, 2017–2021; and 47th President) is only the second US leader in history to win non-consecutive presidential terms, joining Democrat Grover Cleveland (22nd President in 1885–1889 and 24th President in 1893–1897).",
      "Constitutional Framework: Under the 22nd Amendment to the US Constitution (ratified in 1951), no person may be elected to the office of the President more than twice. The US Electoral College consists of 538 electors, requiring a majority of 270 votes to win.",
      "India–US Strategic Architecture: Key pillars include the 'Comprehensive Global Strategic Partnership', the 4 foundational defence pacts — GSOMIA (2002), LEMOA (2016), COMCASA (2018), and BECA (2020) — alongside iCET (Initiative on Critical and Emerging Technology), INDUS-X, and the QUAD Leaders' Summit (scheduled to be hosted by India)."
    ],
    "institutionalContext": "Shapes Indo-Pacific security under the QUAD (revived at the ministerial level in 2017 during Trump's first term), I2U2 (India, Israel, UAE, USA), and IMEC (India-Middle East-Europe Economic Corridor).",
    "strategicImportance": "High-yield International Relations & Comparative Constitutional Polity question for CDS, NDA, AFCAT, and CAPF.",
    "quickSummary": "<mark class=\"exam-target\">Donald J. Trump</mark> was elected the <mark class=\"exam-target\">47th US President</mark> (with <mark class=\"exam-target\">J.D. Vance</mark> as 50th VP), becoming only the second US President after <mark class=\"exam-target\">Grover Cleveland</mark> to win two non-consecutive terms.",
    "detailedAnalysis": "From an Indian defence exam perspective, questions frequently link major global elections with bilateral defence agreements. India and the US have signed all four foundational military agreements: (1) GSOMIA (General Security of Military Information Agreement, 2002); (2) LEMOA (Logistics Exchange Memorandum of Agreement, 2016); (3) COMCASA (Communications Compatibility and Security Agreement, 2018); and (4) BECA (Basic Exchange and Cooperation Agreement for Geospatial Cooperation, 2020), followed by the Security of Supply Arrangement (SOSA) and Reciprocal Defense Procurement (RDP) negotiations.",
    "backgroundContext": "Indian-American attorney Usha Chilukuri Vance (wife of Vice President-elect J.D. Vance, with ancestral roots in Andhra Pradesh) becomes the first Indian-American and Hindu Second Lady in US history.",
    "stakeholders": [
      "United States Government",
      "Government of India (MEA / MoD)",
      "QUAD & iCET Frameworks"
    ],
    "relatedTopics": [
      "Four Foundational Agreements (GSOMIA, LEMOA, COMCASA, BECA)",
      "Initiative on Critical and Emerging Technology (iCET)",
      "QUAD & I2U2 Groupings"
    ],
    "examRelevanceMatrix": {
      "NDA": "High",
      "CDS": "High",
      "AFCAT": "High",
      "CAPF": "Medium",
      "UPSC": "Medium"
    },
    "mcq": {
      "question": "Consider the following statements regarding the United States Presidency and India–US Strategic Relations (November 2026):\n1. By winning election as the 47th President of the United States, Donald J. Trump became only the second President in US history after Grover Cleveland to serve two non-consecutive terms.\n2. The four foundational defence agreements signed between India and the United States in chronological order are GSOMIA (2002), LEMOA (2016), COMCASA (2018), and BECA (2020).\n3. In 2026, India and the United States also signed a Security of Supply Arrangement (SOSA) to prioritize bilateral defence industrial supply chains.\nWhich of the statements given above are correct?",
      "options": [
        "1 and 2 only",
        "2 and 3 only",
        "1 and 3 only",
        "1, 2 and 3"
      ],
      "correct": 3,
      "explanation": "All three statements are correct. Grover Cleveland (22nd & 24th) and Donald Trump (45th & 47th) are the only two US Presidents to win non-consecutive terms; the 4 foundational pacts in chronological order are GSOMIA, LEMOA, COMCASA, and BECA; and SOSA was signed in August 2026."
    }
  },
  {
    "id": "nov-2026-011",
    "topic": "Indian Polity & Constitutional Law",
    "publicationDate": "2026-11-05",
    "originalSource": "Supreme Court of India",
    "relatedOfficialDocuments": "9-Judge Constitution Bench Judgment in Property Owners Association vs State of Maharashtra (Article 39(b) & Article 31C)",
    "text": "In a landmark **8:1 majority verdict** on November 5, 2026, a **9-Judge Constitution Bench** of the **Supreme Court of India** headed by CJI D.Y. Chandrachud ruled that **not every privately owned property** can be treated as a **\"material resource of the community\"** for acquisition and redistribution by the State under **Article 39(b)** of the Directive Principles of State Policy (DPSP).",
    "details": {
      "winner": "9-Judge Constitution Bench of the Supreme Court (8:1 Majority)",
      "award": "Landmark Constitutional Verdict on Article 39(b) & Private Property",
      "nationality": "India",
      "summary": "Overruled Justice V.R. Krishna Iyer's sweeping socialist interpretation in Ranganatha Reddy (1977) and Sanjeev Coke (1983), holding that private property falls under Article 39(b) only if it satisfies the Public Trust & Scarcity criteria."
    },
    "upscHighlights": [
      "What is Article 39(b)?: A Socialist Directive Principle (Part IV) directing the State to ensure \"that the ownership and control of the material resources of the community are so distributed as best to subserve the common good\".",
      "Core Ruling (8:1 Majority): Authored by CJI D.Y. Chandrachud (with Justice B.V. Nagarathna partially concurring and Justice Sudhanshu Dhulia dissenting). Held that while some privately owned resources (e.g., scarce natural resources, critical minerals, spectrum, forests) CAN fall within \"material resources of the community\", NOT ALL private property (such as personal homes or ordinary private businesses) automatically qualifies.",
      "Factors Test: Whether a private resource qualifies under Article 39(b) depends on: (1) Nature and characteristics of the resource; (2) Its impact on community well-being; (3) Its scarcity; and (4) Consequences of its concentration in the hands of a few, guided by the **Public Trust Doctrine**.",
      "Revival of Unamended Article 31C: The Court also clarified that after the *Minerva Mills (1980)* judgment struck down the 42nd Amendment's expansion of Article 31C, the original unamended Article 31C (inserted by the 25th Amendment Act, 1971—protecting laws giving effect to Articles 39(b) and 39(c) from Articles 14 and 19 challenges, as upheld in *Kesavananda Bharati, 1973*) remains alive and operative in the Constitution."
    ],
    "institutionalContext": "A 9-Judge Bench was required to reconsider the earlier 5-Judge Bench ruling in *Sanjeev Coke Manufacturing Co. v. Bharat Coking Coal Ltd. (1983)* and the minority view of Justice Krishna Iyer in *State of Karnataka v. Ranganatha Reddy (1977)*.",
    "strategicImportance": "Guaranteed top-tier Indian Polity question for UPSC Prelims, CDS, NDA, and CAPF.",
    "quickSummary": "A <mark class=\"exam-target\">9-Judge Constitution Bench</mark> of the Supreme Court ruled (8:1) that <mark class=\"exam-target\">not all private property</mark> constitutes a \"material resource of the community\" under <mark class=\"exam-target\">Article 39(b)</mark>, overruling the sweeping socialist doctrine of *Sanjeev Coke (1983)* while upholding the survival of original <mark class=\"exam-target\">Article 31C</mark>.",
    "detailedAnalysis": "Furthermore, the 9-Judge Bench observed that the Constitution of India does not bind elected governments to any single rigid economic dogma (such as state socialism), enabling India's transition from post-independence state control to the 1991 Liberalisation, Privatisation, and Globalisation (LPG) reforms. Remember also that the Right to Property was removed as a Fundamental Right (Articles 19(1)(f) and 31) and made a Constitutional/Legal Right under **Article 300A** (Part XII) by the **44th Constitutional Amendment Act, 1978**.",
    "backgroundContext": "The case arose from a 1992 challenge to Chapter VIII-A of the Maharashtra Housing and Area Development Act (MHADA), 1976, which allowed acquisition of cessed private buildings in Mumbai citing Article 39(b).",
    "stakeholders": [
      "Supreme Court of India (9-Judge Constitution Bench)",
      "Union and State Legislatures"
    ],
    "relatedTopics": [
      "Article 39(b) & Article 39(c) (DPSP)",
      "Article 31C (25th & 42nd Amendments; Minerva Mills Case)",
      "Right to Property (Article 300A — 44th Amendment 1978)"
    ],
    "examRelevanceMatrix": {
      "NDA": "High",
      "CDS": "High",
      "AFCAT": "Medium",
      "CAPF": "High",
      "UPSC": "High"
    },
    "mcq": {
      "question": "With reference to the landmark 9-Judge Constitution Bench judgment of the Supreme Court on Article 39(b) of the Constitution (November 2026), consider the following statements:\n1. Article 39(b) in Part IV of the Constitution directs the State to ensure that the ownership and control of the material resources of the community are distributed to best subserve the common good.\n2. The Supreme Court held by an 8:1 majority that every privately owned property automatically constitutes a \"material resource of the community\" available for acquisition by the State.\n3. The Court affirmed that the original unamended Article 31C (inserted by the 25th Constitutional Amendment Act, 1971, protecting laws giving effect to Articles 39(b) and 39(c)) remains valid and operative.\nWhich of the statements given above are correct?",
      "options": [
        "1 and 2 only",
        "2 and 3 only",
        "1 and 3 only",
        "1, 2 and 3"
      ],
      "correct": 2,
      "explanation": "Statements 1 and 3 are correct. Statement 2 is incorrect because the 9-Judge Bench ruled by an 8:1 majority that NOT every privately owned property can be treated as a 'material resource of the community' under Article 39(b); it depends on scarcity, nature of the resource, community impact, and the Public Trust Doctrine."
    }
  },
  {
    "id": "nov-2026-012",
    "topic": "Environment, Renewable Energy & International Summits",
    "publicationDate": "2026-11-05",
    "originalSource": "PIB / Ministry of New and Renewable Energy (MNRE)",
    "relatedOfficialDocuments": "7th Session of the International Solar Alliance (ISA) Assembly (New Delhi)",
    "text": "The **7th Session of the International Solar Alliance (ISA) Assembly** was held at **Bharat Mandapam, New Delhi** from November 3 to 6, 2026 under the **Presidency of India** and **Co-Presidency of France**, where **Ashish Khanna** was elected as the **3rd Director General of the ISA**.",
    "details": {
      "winner": "International Solar Alliance (Presidency: India; Co-Presidency: France)",
      "award": "7th ISA Assembly (New Delhi) & Election of 3rd DG Ashish Khanna",
      "nationality": "International (HQ: Gurugram, India)",
      "summary": "Deliberated on the Global Solar Facility (GSF), solar supply chain resilience, and the 'Towards 1000' strategy; Ashish Khanna elected to succeed Dr. Ajay Mathur as the 3rd Director General."
    },
    "upscHighlights": [
      "Leadership & Venue: Hosted at Bharat Mandapam, New Delhi (Nov 3–6). Presided over by Union Minister for New and Renewable Energy Pralhad Joshi (India) and Co-Presided by France. India's Ashish Khanna was elected as the 3rd Director General of ISA (succeeding Dr. Ajay Mathur and founding DG Upendra Tripathy).",
      "About ISA: Jointly launched by PM Narendra Modi and then French President François Hollande on 30 November 2015 at UNFCCC COP21 in Paris. It is the **first treaty-based international intergovernmental organization headquartered in India** (National Institute of Solar Energy campus, **Gurugram, Haryana**).",
      "Membership Milestone: Originally conceived for \"Suryaputra\" countries lying between the Tropic of Cancer and Tropic of Capricorn, a 2020 Framework Amendment opened ISA membership to **all UN Member States**. **Paraguay** recently became the **100th full member**, followed by **Armenia** and **Moldova** (120+ signatory countries total).",
      "Towards 1000 Strategy: Aims to mobilize **$1,000 billion ($1 trillion)** in solar investments by **2030**, deliver clean energy access to **1,000 million (1 billion) people**, and install **1,000 GW** of solar energy capacity."
    ],
    "institutionalContext": "The ISA Assembly is the apex decision-making body of the International Solar Alliance, meeting annually at the ministerial level.",
    "strategicImportance": "Staple UPSC Prelims, CDS, NDA, and CAPF topic on India-headquartered global institutions and climate initiatives.",
    "quickSummary": "The <mark class=\"exam-target\">7th ISA Assembly</mark> met at <mark class=\"exam-target\">Bharat Mandapam, New Delhi</mark> under <mark class=\"exam-target\">India's Presidency and France's Co-Presidency</mark>, electing <mark class=\"exam-target\">Ashish Khanna</mark> as the 3rd Director General of the Gurugram-headquartered alliance.",
    "detailedAnalysis": "During the 7th Assembly, ISA released the 3rd edition of its flagship **World Solar Reports** series (World Solar Technology Report, World Solar Market Report, World Solar Investment Report, and Green Hydrogen Readiness Assessment) and operationalized the **Global Solar Facility (GSF)**—a payment guarantee and insurance fund starting in Africa to de-risk private solar investments in Least Developed Countries (LDCs) and Small Island Developing States (SIDS). Remember also **OSOWOG** (*One Sun, One World, One Grid*), launched by India and the UK at COP26 (Glasgow).",
    "backgroundContext": "India is the world's first country where an international treaty organization (ISA) and the Global Biofuels Alliance (GBA) and Coalition for Disaster Resilient Infrastructure (CDRI) are anchored.",
    "stakeholders": [
      "International Solar Alliance (HQ: Gurugram)",
      "Ministry of New and Renewable Energy (India)",
      "Government of France"
    ],
    "relatedTopics": [
      "International Solar Alliance (Towards 1000 Strategy)",
      "One Sun, One World, One Grid (OSOWOG)",
      "CDRI & Global Biofuels Alliance (GBA)"
    ],
    "examRelevanceMatrix": {
      "NDA": "High",
      "CDS": "High",
      "AFCAT": "High",
      "CAPF": "High",
      "UPSC": "High"
    },
    "mcq": {
      "question": "Consider the following statements regarding the International Solar Alliance (ISA) and its 7th Assembly held in November 2026:\n1. The 7th Session of the ISA Assembly was hosted in New Delhi under the Presidency of India and Co-Presidency of France, where Ashish Khanna was elected as the 3rd Director General.\n2. Headquartered in Gurugram (Haryana), the ISA restricts its membership strictly to tropical countries located entirely between the Tropic of Cancer and the Tropic of Capricorn.\n3. The ISA's \"Towards 1000\" strategy aims to mobilize $1,000 billion in solar investments by 2030 and install 1,000 GW of solar energy capacity.\nWhich of the statements given above are correct?",
      "options": [
        "1 and 2 only",
        "2 and 3 only",
        "1 and 3 only",
        "1, 2 and 3"
      ],
      "correct": 2,
      "explanation": "Statements 1 and 3 are correct. Statement 2 is incorrect because following the 2020 Framework Agreement Amendment, membership in the ISA is open to ALL member states of the United Nations (including countries outside the Tropics)."
    }
  },
  {
    "id": "nov-2026-013",
    "topic": "Government Schemes & Social Sector",
    "publicationDate": "2026-11-06",
    "originalSource": "PIB / Union Cabinet & Ministry of Education",
    "relatedOfficialDocuments": "PM-Vidyalaxmi Scheme for Higher Education Loans (2024–25 to 2030–31)",
    "text": "On November 6, 2026, the **Union Cabinet** chaired by PM Narendra Modi approved the **'PM-Vidyalaxmi' Scheme** with a total outlay of **₹3,600 crore** (up to FY 2030–31) to provide **collateral-free and guarantor-free education loans** with interest subvention to meritorious students admitted to India's top **860 Quality Higher Educational Institutions (QHEIs)**.",
    "details": {
      "winner": "Union Cabinet / Ministry of Education (Department of Higher Education)",
      "award": "PM-Vidyalaxmi Scheme Approved (₹3,600 Crore Outlay)",
      "nationality": "India",
      "summary": "Provides collateral-free, guarantor-free higher education loans with 75% sovereign credit guarantee (up to ₹7.5 lakh) and 3% interest subvention (up to ₹10 lakh loan for family income ≤ ₹8 lakh)."
    },
    "upscHighlights": [
      "Target Institutions (860 QHEIs): Applicable to any student securing admission on merit in the top 860 Quality Higher Educational Institutions (QHEIs)—defined as all institutions (government and private) ranked in the **top 100 in NIRF** (Overall, Category-specific, or Domain-specific rankings) plus **top 200 State/Central Government institutions** in NIRF.",
      "100% Collateral-Free & Guarantor-Free: Every student admitted to these 860 QHEIs is eligible for a collateral-free, guarantor-free loan from scheduled banks to cover the full tuition fee and course-related expenses.",
      "Three-Tier Financial Support Architecture:\n  • (1) **Loans up to ₹7.5 Lakh**: Receive a **75% Credit Guarantee** from the Government of India (irrespective of family income) to encourage banks to lend without collateral.\n  • (2) **Family Income up to ₹8 Lakh/year**: Students (not covered under existing 100% Central Sector Interest Subsidy) receive a **3% Interest Subvention** on loans up to **₹10 Lakh** during the moratorium period (for 1 lakh students annually).\n  • (3) **Family Income up to ₹4.5 Lakh/year**: Continue to receive **full (100%) interest subvention** under the PM-USP Central Sector Interest Subsidy (CSIS) scheme for technical/professional courses.",
      "Digital Delivery: Administered entirely through the unified **PM-Vidyalaxmi Digital Portal**, with interest subvention disbursed via **E-Vouchers and CBDC (Central Bank Digital Currency / Digital Rupee) wallets**."
    ],
    "institutionalContext": "A Central Sector Scheme implemented by the Department of Higher Education (Ministry of Education) directly realizing the vision of the **National Education Policy (NEP) 2020**.",
    "strategicImportance": "Extremely high-yield Government Scheme question for UPSC Prelims, CDS, CAPF, and NDA (Examiners love testing the exact income thresholds: ₹4.5L vs ₹8L, loan caps: ₹7.5L vs ₹10L, and 75% credit guarantee).",
    "quickSummary": "The Union Cabinet approved the <mark class=\"exam-target\">₹3,600 crore PM-Vidyalaxmi Scheme</mark> offering <mark class=\"exam-target\">collateral-free, guarantor-free</mark> loans for students in the top <mark class=\"exam-target\">860 NIRF QHEIs</mark>, featuring a <mark class=\"exam-target\">75% credit guarantee up to ₹7.5 lakh</mark> and <mark class=\"exam-target\">3% interest subvention on loans up to ₹10 lakh</mark> (for family income ≤ ₹8 lakh).",
    "detailedAnalysis": "Pay close attention to the numeric UPSC traps in PM-Vidyalaxmi: (1) Number of institutions = 860 QHEIs (updated annually via NIRF); (2) Credit Guarantee = 75% for loan amounts up to ₹7.5 lakh; (3) Interest Subvention = 3% during the moratorium period for loans up to ₹10 lakh for students with annual family income up to ₹8 lakh (preferential treatment given to students from government institutions and technical/professional courses).",
    "backgroundContext": "Announced in the Union Budget 2024–25 to complement the PM-USP (Pradhan Mantri Uchchatar Shiksha Protsahan) scheme.",
    "stakeholders": [
      "Ministry of Education (Department of Higher Education)",
      "Scheduled Commercial Banks",
      "Reserve Bank of India (CBDC E-Vouchers)"
    ],
    "relatedTopics": [
      "PM-Vidyalaxmi Scheme",
      "National Institutional Ranking Framework (NIRF)",
      "National Education Policy (NEP) 2020"
    ],
    "examRelevanceMatrix": {
      "NDA": "High",
      "CDS": "High",
      "AFCAT": "Medium",
      "CAPF": "High",
      "UPSC": "High"
    },
    "mcq": {
      "question": "Consider the following statements regarding the \"PM-Vidyalaxmi\" Scheme approved by the Union Cabinet in November 2026:\n1. It provides collateral-free and guarantor-free education loans to meritorious students admitted to the top 860 Quality Higher Educational Institutions (QHEIs) determined by NIRF rankings.\n2. For loan amounts up to ₹7.5 lakh, the scheme provides a 75% credit guarantee by the Government of India to lending banks.\n3. Students having an annual family income of up to ₹8 lakh are eligible for a 3% interest subvention on education loans up to ₹10 lakh during the moratorium period.\nWhich of the statements given above are correct?",
      "options": [
        "1 and 2 only",
        "2 and 3 only",
        "1 and 3 only",
        "1, 2 and 3"
      ],
      "correct": 3,
      "explanation": "All three statements are correct. PM-Vidyalaxmi (outlay ₹3,600 crore) covers 860 QHEIs, offering collateral-free/guarantor-free loans with a 75% sovereign credit guarantee up to ₹7.5 lakh and 3% interest subvention on loans up to ₹10 lakh for students with annual family income ≤ ₹8 lakh."
    }
  },
  {
    "id": "nov-2026-014",
    "topic": "Space Technology & ISRO-ESA Cooperation",
    "publicationDate": "2026-11-05",
    "originalSource": "ISRO / European Space Agency (ESA)",
    "relatedOfficialDocuments": "Arrival of ESA's Proba-3 Twin Solar Coronagraph Spacecraft at SDSC-SHAR Sriharikota (PSLV-C59)",
    "text": "The European Space Agency's (**ESA**) twin spacecraft for the pioneering **'Proba-3' (Project for On-Board Autonomy-3)** solar mission arrived at the **Satish Dhawan Space Centre (SDSC-SHAR), Sriharikota** in early November 2026 for commercial launch aboard ISRO's **PSLV-XL (PSLV-C59)** rocket under **NewSpace India Limited (NSIL)**.",
    "details": {
      "winner": "ISRO / NSIL & European Space Agency (ESA)",
      "award": "Proba-3 Twin Formation-Flying Solar Coronagraph Mission",
      "nationality": "India & European Space Agency (ESA)",
      "summary": "World's first precision formation-flying mission where two satellites (Coronagraph & Occulter) fly 150 meters apart with millimeter accuracy to create an artificial solar eclipse in space."
    },
    "upscHighlights": [
      "What is Proba-3?: The **world's first precision formation-flying satellite mission**, developed by a consortium of 14 European countries led by the **European Space Agency (ESA)**.",
      "Twin Spacecraft Architecture (~550 kg total): Consists of two independent satellites launched together by ISRO's **PSLV-C59 (PSLV-XL configuration)**:\n  • (1) **Occulter Spacecraft (OSC, ~200 kg)**: Blocks the blinding disk of the Sun.\n  • (2) **Coronagraph Spacecraft (CSC, ~340 kg)**: Carries the **ASPIICS** (*Association of Spacecraft for Polarimetric and Imaging Investigation of the Corona of the Sun*) instrument to observe the Sun's faint inner **corona**.",
      "Artificial Solar Eclipse in Orbit: The two spacecraft fly exactly **150 meters apart** in a highly elliptical High Earth Orbit (600 km × 60,530 km), maintaining millimeter and arc-second alignment autonomously for 6 hours at apogee to cast a precise shadow without terrestrial atmospheric distortion.",
      "Scientific Goal: Solving why the Sun's outer atmosphere (**Corona**, >1 million °C) is hundreds of times hotter than its visible surface (**Photosphere**, ~5,500 °C) and studying **Coronal Mass Ejections (CMEs)** that drive space weather."
    ],
    "institutionalContext": "Contracted through **NewSpace India Limited (NSIL)**, the commercial arm of ISRO; marks the first ESA mission launched from India since **Proba-1** (launched aboard PSLV-C3 in October 2001).",
    "strategicImportance": "Top-tier UPSC Prelims, CDS, NDA, and AFCAT Space Science question—complements India's own **Aditya-L1** solar observatory at Lagrange Point L1.",
    "quickSummary": "ESA's <mark class=\"exam-target\">Proba-3</mark> twin spacecraft (**Occulter** and **Coronagraph**) arrived at <mark class=\"exam-target\">Sriharikota</mark> for launch aboard ISRO's <mark class=\"exam-target\">PSLV-C59 (PSLV-XL)</mark>—the world's first <mark class=\"exam-target\">precision formation-flying</mark> mission flying 150m apart to create an artificial solar eclipse and study the Sun's <mark class=\"exam-target\">corona</mark>.",
    "detailedAnalysis": "Compare **Proba-3** with **Aditya-L1** for exam questions: (1) **Aditya-L1** (launched on PSLV-C57 in Sept 2023) is a single Indian spacecraft placed in a **Halo Orbit around the Sun-Earth Lagrange Point 1 (L1)** (1.5 million km from Earth) carrying the **VELC** internal coronagraph; whereas (2) **Proba-3** is an **ESA** twin-satellite mission placed in a **Highly Elliptical Earth Orbit (HEO)** where one satellite acts as an external occulter 150 meters ahead of the other, allowing observation much closer to the solar limb (down to 1.1 solar radii).",
    "backgroundContext": "ESA chose ISRO's PSLV-XL because it delivers the exact 550 kg payload mass into a 60,530 km apogee orbit at a fraction of the cost of heavy European launchers.",
    "stakeholders": [
      "ISRO & NewSpace India Limited (NSIL)",
      "European Space Agency (ESA)"
    ],
    "relatedTopics": [
      "Proba-3 Mission vs Aditya-L1 Mission",
      "Solar Corona & Coronal Mass Ejections (CMEs)",
      "PSLV-XL & NewSpace India Limited (NSIL)"
    ],
    "examRelevanceMatrix": {
      "NDA": "High",
      "CDS": "High",
      "AFCAT": "High",
      "CAPF": "High",
      "UPSC": "High"
    },
    "mcq": {
      "question": "Consider the following statements regarding the \"Proba-3\" space mission, which arrived at Sriharikota in November 2026 for launch aboard ISRO's PSLV-XL:\n1. Developed by the European Space Agency (ESA), it is the world's first precision formation-flying mission consisting of two spacecraft—the Occulter Spacecraft (OSC) and the Coronagraph Spacecraft (CSC).\n2. The two satellites will fly 150 meters apart in a highly elliptical orbit to cast a controlled shadow and create an artificial solar eclipse in space to study the Sun's faint corona.\n3. Like ISRO's Aditya-L1 mission, Proba-3 will be stationed permanently at the Sun–Earth Lagrange Point 2 (L2).\nWhich of the statements given above are correct?",
      "options": [
        "1 and 2 only",
        "2 and 3 only",
        "1 and 3 only",
        "1, 2 and 3"
      ],
      "correct": 0,
      "explanation": "Statements 1 and 2 are correct. Statement 3 is incorrect because Proba-3 operates in a Highly Elliptical Earth Orbit (600 km × 60,530 km), whereas Aditya-L1 is stationed in a Halo Orbit around Lagrange Point 1 (L1) (and James Webb Space Telescope is at L2)."
    }
  },
  {
    "id": "nov-2026-015",
    "topic": "Space Technology & Sustainable Aerospace",
    "publicationDate": "2026-11-05",
    "originalSource": "JAXA / Kyoto University & NASA",
    "relatedOfficialDocuments": "Launch of LignoSat — World's First Wooden Satellite",
    "text": "On November 5, 2026, researchers from **Kyoto University** and **Sumitomo Forestry (Japan)** launched **'LignoSat'**, the **world's first wooden artificial satellite**, to the International Space Station (ISS) aboard a SpaceX CRS-31 Dragon spacecraft to test sustainable timber materials against orbital space debris and atmospheric re-entry pollution.",
    "details": {
      "winner": "Kyoto University & Sumitomo Forestry (Japan)",
      "award": "LignoSat — World's First Wooden Satellite Launched",
      "nationality": "Japan",
      "summary": "A 10-cm CubeSat built from Japanese Honoki magnolia wood without screws or glue, designed to burn up cleanly on re-entry without releasing ozone-damaging aluminium oxide particles."
    },
    "upscHighlights": [
      "Developers & Material: Jointly developed by **Kyoto University** (led by astronaut Takao Doi) and **Sumitomo Forestry** in Japan. Constructed from **Honoki** (a species of Japanese magnolia tree traditionally used for sword sheaths) after 10 months of exposure testing aboard the ISS Japanese Experiment Module (*Kibo*).",
      "Traditional Craftsmanship: The 10-cm cube (weighing ~900 grams) was assembled using a traditional Japanese carpentry joinery technique called ***Nuki***—using **zero screws and zero glue** (which could outgas or fail in space).",
      "Why Wood works in Space: Because space is a vacuum devoid of oxygen and moisture/living organisms, **wood neither burns nor rots in orbit**, while naturally allowing electromagnetic waves (antennas) to pass through the hull.",
      "Environmental Advantage on Re-entry: Conventional metal satellites release microscopic **aluminium oxide (alumina) particles** when they burn up upon atmospheric re-entry, which deplete the stratospheric **ozone layer** and alter Earth's albedo; wooden satellites vaporize cleanly into water vapour and biodegradable ash."
    ],
    "institutionalContext": "Deployed into a 400 km Low Earth Orbit (LEO) from the ISS Kibo module by the Japan Aerospace Exploration Agency (JAXA).",
    "strategicImportance": "Classic UPSC Prelims, CDS, NDA, and AFCAT Science & Environment question combining Space Technology, Ozone Depletion (Aluminium Oxide aerosols), and Material Science.",
    "quickSummary": "Japan's <mark class=\"exam-target\">Kyoto University</mark> and <mark class=\"exam-target\">Sumitomo Forestry</mark> launched <mark class=\"exam-target\">LignoSat</mark>, the world's first <mark class=\"exam-target\">wooden satellite</mark> (made from *Honoki* magnolia wood), to prevent stratospheric <mark class=\"exam-target\">aluminium oxide pollution</mark> upon satellite re-entry.",
    "detailedAnalysis": "With mega-constellations like Starlink deploying thousands of Low Earth Orbit (LEO) satellites that de-orbit every 5 years, atmospheric scientists have warned that metallic re-entry ablation increases stratospheric alumina aerosols by over 600%, threatening the post-Montreal Protocol recovery of the ozone layer. LignoSat (from the Latin *lignum* meaning wood) pioneers eco-friendly orbital design.",
    "backgroundContext": "Previously, the European Space Agency (ESA) had conceptualised 'WISA Woodsat', but Japan's LignoSat became the first wooden satellite to actually reach space.",
    "stakeholders": [
      "Kyoto University & Sumitomo Forestry (Japan)",
      "JAXA & NASA (ISS)"
    ],
    "relatedTopics": [
      "LignoSat (Honoki Magnolia CubeSat)",
      "Space Debris & Kessler Syndrome",
      "Aluminium Oxide Aerosols & Stratospheric Ozone Depletion"
    ],
    "examRelevanceMatrix": {
      "NDA": "High",
      "CDS": "High",
      "AFCAT": "High",
      "CAPF": "High",
      "UPSC": "High"
    },
    "mcq": {
      "question": "\"LignoSat\", which was launched to the International Space Station in November 2026, was in the news because it is:",
      "options": [
        "NASA's first nuclear-powered probe designed to drill beneath the icy crust of Jupiter's moon Europa",
        "The world's first wooden satellite, developed by Kyoto University and Sumitomo Forestry of Japan using Honoki magnolia wood to eliminate metallic re-entry pollution",
        "ISRO's dedicated satellite for monitoring forest carbon stocks across the Western Ghats",
        "The European Space Agency's laser-communication relay satellite for lunar south pole missions"
      ],
      "correct": 1,
      "explanation": "LignoSat is the world's first wooden satellite, developed in Japan by Kyoto University and Sumitomo Forestry using Honoki magnolia wood (assembled without screws or glue) so that it burns up cleanly on atmospheric re-entry without releasing ozone-depleting aluminium oxide particles."
    }
  },
  {
    "id": "nov-2026-016",
    "topic": "Art, Culture & Soft Power Diplomacy",
    "publicationDate": "2026-11-05",
    "originalSource": "PIB / Ministry of Culture",
    "relatedOfficialDocuments": "1st Asian Buddhist Summit (New Delhi) — 'Role of Buddha Dhamma in Strengthening Asia'",
    "text": "The **Ministry of Culture**, Government of India, in collaboration with the **International Buddhist Confederation (IBC)**, hosted the **1st Asian Buddhist Summit (ABS)** in **New Delhi** on November 5–6, 2026 under the theme **\"Role of Buddha Dhamma in Strengthening Asia\"**, inaugurated by **President Droupadi Murmu**.",
    "details": {
      "winner": "Ministry of Culture & International Buddhist Confederation (IBC)",
      "award": "1st Asian Buddhist Summit (New Delhi)",
      "nationality": "India & 32 Asian Nations",
      "summary": "Brought together over 160 Sangha leaders and scholars from 32 Asian countries across Theravada, Mahayana, and Vajrayana traditions, adopting the 'Delhi Declaration'."
    },
    "upscHighlights": [
      "Organizer & Theme: Organized by the **Ministry of Culture** and the **International Buddhist Confederation (IBC, HQ New Delhi)** on Nov 5–6, 2026. Theme: **\"Role of Buddha Dhamma in Strengthening Asia\"**; Chief Guest: **President Droupadi Murmu**.",
      "Pali as a Classical Language: Highlighted the Union Cabinet's landmark October 2026 decision granting **Classical Language status to Pali** (the liturgical language of the *Tipitaka* / Theravada Buddhist canon, alongside Prakrit, Marathi, Assamese, and Bengali).",
      "Three Major Yanas (Vehicles) Represented:\n  • (1) **Theravada (Hinayana / School of Elders)**: Pali Canon (*Sutta, Vinaya, Abhidhamma Pitaka*); prevalent in Sri Lanka, Myanmar, Thailand, Cambodia, Laos.\n  • (2) **Mahayana (Great Vehicle)**: Sanskrit texts, *Bodhisattva* ideal (*Karuna* & *Prajna*); prevalent in China, Japan, Korea, Vietnam.\n  • (3) **Vajrayana (Tantric / Diamond Vehicle)**: Esoteric practices; prevalent in Tibet, Bhutan, Mongolia, and Indian Himalayan belt (Ladakh, Sikkim, Tawang).",
      "Static History Link — Four Buddhist Councils: 1st at **Rajagriha** (483 BCE, Patron: Ajatashatru, Presided by Mahakassapa); 2nd at **Vaishali** (383 BCE, Kalasoka, Sabakami); 3rd at **Pataliputra** (250 BCE, Ashoka, Moggaliputta Tissa); 4th at **Kundalvana, Kashmir** (72 CE, Kanishka, Vasumitra & Ashvaghosha — division into Mahayana and Hinayana)."
    ],
    "institutionalContext": "The International Buddhist Confederation (IBC), headquartered in New Delhi, is the biggest global religious Buddhist umbrella organization representing over 320 monastic and lay bodies worldwide.",
    "strategicImportance": "Bridges Current Affairs (1st Asian Buddhist Summit & Pali Classical Language) with Ancient Indian History (Buddhist Councils, Tipitakas, Bodhisattvas)—a classic UPSC CDS/NDA/CAPF combination.",
    "quickSummary": "**President Droupadi Murmu** inaugurated the <mark class=\"exam-target\">1st Asian Buddhist Summit</mark> in <mark class=\"exam-target\">New Delhi</mark> (organized by the Ministry of Culture & <mark class=\"exam-target\">IBC</mark>) on the theme *\"Role of Buddha Dhamma in Strengthening Asia\"*, celebrating <mark class=\"exam-target\">Pali</mark>'s newly granted Classical Language status.",
    "detailedAnalysis": "Under India's 'Act East' and 'Neighbourhood First' policies, Buddhist heritage serves as a vital diplomatic bridge across Asia. India is developing the **Buddhist Circuit** under the Swadesh Darshan Scheme (connecting Lumbini, Bodh Gaya, Sarnath, Kushinagar, Rajgir, Vaishali, Sravasti, and Sankisa) and the **India International Centre for Buddhist Culture and Heritage** at Lumbini, Nepal.",
    "backgroundContext": "Earlier in April 2023, New Delhi had also hosted the 1st Global Buddhist Summit.",
    "stakeholders": [
      "Ministry of Culture (Government of India)",
      "International Buddhist Confederation (IBC)",
      "Sangha Leaders from 32 Asian Nations"
    ],
    "relatedTopics": [
      "1st Asian Buddhist Summit (New Delhi)",
      "Pali Canon (Tipitaka) & Classical Languages",
      "Four Buddhist Councils (Ancient History)"
    ],
    "examRelevanceMatrix": {
      "NDA": "High",
      "CDS": "High",
      "AFCAT": "High",
      "CAPF": "High",
      "UPSC": "High"
    },
    "mcq": {
      "question": "Consider the following statements regarding the 1st Asian Buddhist Summit held in November 2026 and Buddhist heritage:\n1. It was organized in New Delhi by the Ministry of Culture in collaboration with the International Buddhist Confederation (IBC) under the theme \"Role of Buddha Dhamma in Strengthening Asia\".\n2. Pali, the liturgical language of the Theravada Buddhist Tipitaka (Sutta, Vinaya, and Abhidhamma Pitaka), was recently granted Classical Language status by the Government of India in October 2026.\n3. Historically, the Fourth Buddhist Council, which led to the formal division of Buddhism into Mahayana and Hinayana sects, was convened at Pataliputra under the patronage of Emperor Ashoka.\nWhich of the statements given above are correct?",
      "options": [
        "1 and 2 only",
        "2 and 3 only",
        "1 and 3 only",
        "1, 2 and 3"
      ],
      "correct": 0,
      "explanation": "Statements 1 and 2 are correct. Statement 3 is incorrect because the Fourth Buddhist Council (which saw the formal division into Mahayana and Hinayana) was convened at Kundalvana in Kashmir under the patronage of Kushan Emperor Kanishka (presided over by Vasumitra), whereas the Third Council was held at Pataliputra under Ashoka."
    }
  },
  {
    "id": "nov-2026-017",
    "topic": "Indian Polity, Judiciary & Education Law",
    "publicationDate": "2026-11-06",
    "originalSource": "Supreme Court of India",
    "relatedOfficialDocuments": "Supreme Court Rulings on UP Board of Madarsa Education Act, 2004 & LMV Driving Licence (5-Judge Constitution Bench)",
    "text": "On November 5–6, 2026, the **Supreme Court of India** delivered two major judgments: (1) Upholding the constitutional validity of the **UP Board of Madarsa Education Act, 2004** (except for higher *Kamil* and *Fazil* degrees which violate the **UGC Act, 1956**); and (2) A **5-Judge Constitution Bench** unanimously ruling that a **Light Motor Vehicle (LMV)** driving licence holder can legally drive a **transport vehicle** with an unladen weight **up to 7,500 kg**.",
    "details": {
      "winner": "Supreme Court of India (Constitution Bench Rulings)",
      "award": "Landmark Judgments on Education Regulation (Entry 66 Union List) & Motor Vehicles Act",
      "nationality": "India",
      "summary": "Clarified secularism, Article 21A vs Article 30, Entry 66 of Union List (UGC exclusive power over degrees), and LMV transport vehicle weight limits (7,500 kg)."
    },
    "upscHighlights": [
      "1. UP Madarsa Education Act Judgment (3-Judge Bench headed by CJI Chandrachud):\n  • Set aside the Allahabad High Court order that had struck down the entire 2004 Act for violating secularism.\n  • Held that a statute can be struck down ONLY on two grounds: (a) **Lack of legislative competence**, or (b) **Violation of Fundamental Rights (Part III) or other specific constitutional provisions** (not merely an abstract concept without tracing it to a constitutional provision).\n  • **Severability & UGC Act (Entry 66, List I)**: Struck down the Act's provisions regulating **'Kamil'** (undergraduate) and **'Fazil'** (postgraduate) degrees because under **Entry 66 of the Union List** and Section 22 of the **University Grants Commission (UGC) Act, 1956**, only universities established by a Central/State Act or UGC-recognized institutions can confer higher degrees.\n  • **Article 21A vs Article 30**: Noted that the Right to Education Act (RTE), 2009 exempts minority institutions (per *Pramati Educational & Cultural Trust, 2014*) to protect their character under **Article 30**.",
      "2. LMV Driving Licence Constitution Bench (5-Judge Bench — *M/s Bajaj Alliance General Insurance Co. v. Rambha Devi*):\n  • Unanimously upheld the 2017 *Mukund Dewangan* verdict.\n  • Ruled that under Section 2(21) and Section 10(2)(d) of the **Motor Vehicles Act, 1988**, a holder of a **Light Motor Vehicle (LMV)** licence is entitled to drive a **transport/commercial vehicle** (excluding hazardous goods vehicles) whose **gross/unladen weight does not exceed 7,500 kg**, without needing a separate transport endorsement."
    ],
    "institutionalContext": "Reinforces constitutional federalism (Seventh Schedule: Entry 66 of List I vs Entry 25 of List III—Education moved from State List to Concurrent List by the 42nd Amendment Act, 1976).",
    "strategicImportance": "High-yield Polity & Constitutional Law questions on grounds for judicial review of statutes, Seventh Schedule entries, and Article 28/30.",
    "quickSummary": "The Supreme Court upheld the **UP Madarsa Act, 2004** while striking down *Kamil/Fazil* degree provisions as conflicting with the <mark class=\"exam-target\">UGC Act, 1956 (Entry 66, Union List)</mark>, and a <mark class=\"exam-target\">5-Judge Constitution Bench</mark> ruled that an <mark class=\"exam-target\">LMV licence holder</mark> can drive transport vehicles up to <mark class=\"exam-target\">7,500 kg</mark>.",
    "detailedAnalysis": "For UPSC CDS/NDA/CAPF Polity, remember the Seventh Schedule legislative entries on Education: **Entry 25 of List III (Concurrent List)** covers technical, medical, and general education (transferred from State List by the **42nd Amendment Act, 1976**), SUBJECT to **Entries 63, 64, 65, and 66 of List I (Union List)**. Specifically, **Entry 66 of the Union List** grants Parliament exclusive power over *\"Co-ordination and determination of standards in institutions for higher education or research\"*—under which the **UGC Act, 1956** was enacted.",
    "backgroundContext": "The LMV Constitution Bench ruling directly benefits millions of commercial delivery drivers, auto/cab operators, and road accident insurance claimants across India.",
    "stakeholders": [
      "Supreme Court of India",
      "University Grants Commission (UGC)",
      "Ministry of Road Transport and Highways (MoRTH)"
    ],
    "relatedTopics": [
      "Entry 66 of Union List vs Entry 25 of Concurrent List (42nd Amendment)",
      "Articles 21A, 28, 29 and 30 of the Constitution",
      "Motor Vehicles Act, 1988 (LMV 7,500 kg Rule)"
    ],
    "examRelevanceMatrix": {
      "NDA": "Medium",
      "CDS": "High",
      "AFCAT": "Medium",
      "CAPF": "High",
      "UPSC": "High"
    },
    "mcq": {
      "question": "Consider the following statements regarding constitutional provisions and recent Supreme Court rulings (November 2026):\n1. Education was transferred from the State List (List II) to the Concurrent List (Entry 25 of List III) by the 42nd Constitutional Amendment Act, 1976.\n2. While upholding the UP Board of Madarsa Education Act, 2004 for school-level education, the Supreme Court held that its provisions granting 'Kamil' and 'Fazil' higher education degrees are unconstitutional as they conflict with the UGC Act, 1956 enacted under Entry 66 of the Union List.\n3. A 5-Judge Constitution Bench of the Supreme Court ruled that a person holding a Light Motor Vehicle (LMV) licence is legally permitted to drive a transport vehicle whose unladen weight does not exceed 7,500 kg.\nWhich of the statements given above are correct?",
      "options": [
        "1 and 2 only",
        "2 and 3 only",
        "1 and 3 only",
        "1, 2 and 3"
      ],
      "correct": 3,
      "explanation": "All three statements are correct. Education was moved to the Concurrent List by the 42nd Amendment (1976); Kamil/Fazil higher degrees infringed the UGC Act under Entry 66 of the Union List; and the 5-Judge Bench upheld LMV licence validity for transport vehicles up to 7,500 kg."
    }
  },
  {
    "id": "nov-2026-018",
    "topic": "Personalities, Art & Culture",
    "publicationDate": "2026-11-05",
    "originalSource": "PIB / Ministry of Culture",
    "relatedOfficialDocuments": "Demise of Padma Bhushan Folk Singer Dr. Sharda Sinha ('Bihar Kokila')",
    "text": "Legendary Indian folk singer and **Padma Bhushan** awardee **Dr. Sharda Sinha** (1952–2026), revered across India and the global diaspora as **'Bihar Kokila'** (*Nightingale of Bihar*) for her iconic **Maithili, Bhojpuri, and Magahi** folk songs—especially devotional songs of **Chhath Puja**—passed away in New Delhi on November 5, 2026 at the age of 72.",
    "details": {
      "winner": "Dr. Sharda Sinha (1952–2026) — 'Bihar Kokila'",
      "award": "Padma Bhushan (2018), Sangeet Natak Akademi Award (2000) & Padma Shri (1991)",
      "nationality": "India (Supaul / Samastipur, Bihar)",
      "summary": "Immortalized Maithili, Bhojpuri, and Magahi folk music and Chhath Puja devotional songs ('Kelwa Ke Paat Par', 'Ho Dinanath'); passed away on the first day (Nahay Khay) of Chhath Puja."
    },
    "upscHighlights": [
      "Cultural Legacy: Born on October 1, 1952 in Hulas village, Supaul district (Mithila region, Bihar). Immortalized traditional folk genres including **Chhath Geet** (*Kelwa Ke Paat Par*, *Pahile Pahil Chhathi Maiya*, *Ho Dinanath*), **Vivah Geet** (wedding songs), **Sohar** (childbirth songs), and **Kajri**.",
      "Languages: Sang predominantly in **Maithili** (an Eighth Schedule language added by the **92nd Constitutional Amendment Act, 2003** along with Bodo, Dogri, and Santhali), **Bhojpuri**, and **Magahi**.",
      "National Honours: Conferred the **Padma Shri** in **1991**, the **Sangeet Natak Akademi Award** in **2000**, and India's third-highest civilian honour, the **Padma Bhushan**, in **2018**.",
      "Cultural Ambassador: Played a pivotal role in preserving oral folk traditions among the girmitiya diaspora in Mauritius, Fiji, Suriname, and Trinidad."
    ],
    "institutionalContext": "Honoured with full State Honours by the Government of Bihar; remembered alongside Dr. Bibek Debroy among November 2026 eminent national personalities.",
    "strategicImportance": "High-yield 'Persons in News' and Art & Culture question for AFCAT, CDS, NDA, and CAPF.",
    "quickSummary": "Padma Bhushan folk singer <mark class=\"exam-target\">Dr. Sharda Sinha</mark>, popularly known as <mark class=\"exam-target\">'Bihar Kokila'</mark> and celebrated for her **Maithili and Bhojpuri Chhath Puja** devotional songs, passed away on November 5.",
    "detailedAnalysis": "In UPSC and Defence exams, questions on cultural personalities often connect to the languages and traditions they championed. Note that **Maithili** is the only regional language of Bihar currently included in the **Eighth Schedule** of the Constitution (inserted by the **92nd Amendment Act, 2003**), and **Chhath Puja** is an ancient Vedic solar festival dedicated to **Surya (the Sun God)** and **Chhathi Maiya (Usha)** observed over four days (*Nahay-Khay, Kharna, Sandhya Arghya, and Usha Arghya*).",
    "backgroundContext": "She also lent her voice to popular Hindi cinema classics such as 'Kahe Toh Se Sajna' (Maine Pyar Kiya) and 'Taar Bijli Se Patle' (Gangs of Wasseypur).",
    "stakeholders": [
      "Ministry of Culture",
      "Sangeet Natak Akademi",
      "Government of Bihar"
    ],
    "relatedTopics": [
      "Dr. Sharda Sinha (Bihar Kokila)",
      "Maithili Language (92nd Constitutional Amendment, 2003)",
      "Chhath Puja Cultural Heritage"
    ],
    "examRelevanceMatrix": {
      "NDA": "High",
      "CDS": "High",
      "AFCAT": "High",
      "CAPF": "High",
      "UPSC": "Medium"
    },
    "mcq": {
      "question": "Padma Bhushan awardee Dr. Sharda Sinha, who passed away in November 2026 and was popularly known as \"Bihar Kokila\", was renowned for her contributions to which of the following fields?",
      "options": [
        "Mithila (Madhubani) wall and canvas painting",
        "Maithili, Bhojpuri, and Magahi folk music and Chhath Puja devotional songs",
        "Kathak classical dance of the Benaras Gharana",
        "Dhrupad vocal music of the Darbhanga Gharana"
      ],
      "correct": 1,
      "explanation": "Dr. Sharda Sinha ('Bihar Kokila') was an iconic folk vocalist celebrated for her Maithili, Bhojpuri, and Magahi folk songs, particularly Chhath Puja devotional music. She was awarded the Padma Shri (1991) and Padma Bhushan (2018)."
    }
  },
  {
    "id": "nov-2026-019",
    "topic": "Sports & Olympic Movement",
    "publicationDate": "2026-11-05",
    "originalSource": "Indian Olympic Association (IOA) / Ministry of Youth Affairs & Sports",
    "relatedOfficialDocuments": "India's Formal 'Letter of Intent' to IOC for Hosting the 2036 Summer Olympics & U-19 World Boxing Championships",
    "text": "In November 2026, the **Indian Olympic Association (IOA)** formally submitted its **'Letter of Intent'** to the **International Olympic Committee (IOC) Future Host Commission** in Lausanne, Switzerland to host the **2036 Summer Olympic and Paralympic Games** in India, while India's youth boxers clinched **17 medals (including 4 Gold)** at the inaugural **U-19 World Boxing Championships** in Pueblo, Colorado (USA).",
    "details": {
      "winner": "Indian Olympic Association (IOA) & Indian U-19 Boxing Contingent",
      "award": "2036 Olympic Bid Letter of Intent & 17 Medals at U-19 World Boxing Championships",
      "nationality": "India",
      "summary": "IOA transitioned India into the 'Continuous Dialogue' phase with IOC for the 2036 Olympics (proposing Yoga, Kho-Kho, Kabaddi, Chess, Cricket, Squash); Indian boxers won 4 Gold, 8 Silver, and 5 Bronze in USA."
    },
    "upscHighlights": [
      "India's 2036 Olympic Bid: First announced by PM Modi at the **141st IOC Session in Mumbai (October 2023)**, the formal **Letter of Intent** submitted by the **Indian Olympic Association (IOA, President: Dr. P.T. Usha)** advances India from 'Informal Dialogue' to the **'Continuous Dialogue'** stage with the IOC Future Host Commission.",
      "6 Indigenous/Regional Sports Proposed by India for 2036: **Yoga, Kho-Kho, Kabaddi, Chess, T20 Cricket, and Squash**.",
      "Upcoming Summer Olympics Timeline: **2024 — Paris (France)**; **2028 — Los Angeles (USA)** (where T20 Cricket, Squash, Lacrosse, Baseball/Softball, and Flag Football return/debut); **2032 — Brisbane (Australia)**; **2036 — Contested (India, Indonesia, Turkey, Chile, Qatar)**.",
      "U-19 World Boxing Championships (Pueblo, Colorado, USA — Nov 2026): Organized by the newly formed global body **'World Boxing'**; India finished **3rd overall with 17 medals (4 Gold, 8 Silver, 5 Bronze)**—Gold won by **Parthavi Grewal (60 kg), Vanshika Goswami (+80 kg), Krisha Verma (75 kg), and Hemant Sangwan (90 kg)**."
    ],
    "institutionalContext": "The International Olympic Committee (IOC), founded in 1894 by Pierre de Coubertin, is headquartered in **Lausanne, Switzerland**.",
    "strategicImportance": "High-probability Sports & International Events question for AFCAT, NDA, and CDS.",
    "quickSummary": "The <mark class=\"exam-target\">Indian Olympic Association (IOA)</mark> formally submitted India's **Letter of Intent** to the <mark class=\"exam-target\">IOC (Lausanne)</mark> to host the <mark class=\"exam-target\">2036 Summer Olympics</mark> (proposing Yoga, Kho-Kho, Kabaddi, Chess, Cricket & Squash), while India won **17 medals (4 Gold)** at the <mark class=\"exam-target\">U-19 World Boxing Championships</mark> in Colorado, USA.",
    "detailedAnalysis": "Along with the 2036 Summer Olympics bid (with Ahmedabad/Gandhinagar's Sardar Vallabhbhai Patel Sports Enclave as a primary proposed hub), India has also expressed intent to host the **2030 Youth Olympic Games**. Meanwhile, the newly formed international federation **'World Boxing'** (which India's Boxing Federation of India joined in 2024 to ensure boxing remains in the 2028 Los Angeles Olympics) staged its inaugural U-19 World Championships in Colorado, USA.",
    "backgroundContext": "India previously hosted the 1951 (1st) and 1982 (9th) Asian Games and the 2010 Commonwealth Games in New Delhi.",
    "stakeholders": [
      "Indian Olympic Association (IOA)",
      "International Olympic Committee (IOC, Lausanne)",
      "Boxing Federation of India (BFI) & World Boxing"
    ],
    "relatedTopics": [
      "2028 Los Angeles & 2032 Brisbane Olympics",
      "141st IOC Session (Mumbai)",
      "U-19 World Boxing Championships 2026"
    ],
    "examRelevanceMatrix": {
      "NDA": "High",
      "CDS": "High",
      "AFCAT": "High",
      "CAPF": "Medium",
      "UPSC": "Medium"
    },
    "mcq": {
      "question": "Consider the following statements regarding the Olympic Games and India's bid submitted in November 2026:\n1. The Indian Olympic Association (IOA) formally submitted a Letter of Intent to the International Olympic Committee's (IOC) Future Host Commission to host the 2036 Summer Olympic and Paralympic Games.\n2. The 2028 Summer Olympics are scheduled to be hosted in Brisbane, Australia, while the 2032 Summer Olympics will be hosted in Los Angeles, USA.\n3. At the inaugural U-19 World Boxing Championships held in Pueblo, Colorado (USA) in November 2026, India secured 17 medals including 4 Gold medals.\nWhich of the statements given above are correct?",
      "options": [
        "1 and 2 only",
        "2 and 3 only",
        "1 and 3 only",
        "1, 2 and 3"
      ],
      "correct": 2,
      "explanation": "Statements 1 and 3 are correct. Statement 2 is incorrect (reversed) because the 2028 Summer Olympics will be hosted in Los Angeles (USA), while the 2032 Summer Olympics will be hosted in Brisbane (Australia)."
    }
  },
  {
    "id": "nov-2026-020",
    "topic": "Science, Health & Important Days",
    "publicationDate": "2026-11-07",
    "originalSource": "PIB / Ministry of Health & Family Welfare / DST",
    "relatedOfficialDocuments": "National Cancer Awareness Day (Nov 7), Sir C.V. Raman's Birth Anniversary & World Tsunami Awareness Day (Nov 5)",
    "text": "On **November 7, 2026**, India observed **National Cancer Awareness Day** (marking the birth anniversary of Nobel Laureate **Madame Marie Curie**, born Nov 7, 1867) and the **138th Birth Anniversary of Bharat Ratna Sir C.V. Raman** (born Nov 7, 1888), following **World Tsunami Awareness Day** on **November 5**.",
    "details": {
      "winner": "Sir C.V. Raman (1888–1970) & Marie Curie (1867–1934)",
      "award": "National Cancer Awareness Day (Nov 7) & World Tsunami Awareness Day (Nov 5)",
      "nationality": "India / International",
      "summary": "Highlights India's indigenous CAR-T Cell Therapy ('NexCAR19'), the Raman Effect (inelastic scattering of light), and INCOIS Hyderabad's Tsunami Early Warning System."
    },
    "upscHighlights": [
      "National Cancer Awareness Day (November 7): Instituted in India in September 2014 to coincide with the birth anniversary of **Marie Skłodowska-Curie** (born 7 Nov 1867)—the **only person in history to win Nobel Prizes in two different scientific fields**: **Physics (1903**, for radioactivity with Pierre Curie & Henri Becquerel) and **Chemistry (1911**, for discovering **Radium and Polonium**).",
      "Indigenous Cancer Breakthrough — 'NexCAR19': India's first indigenously developed **CAR-T (Chimeric Antigen Receptor T-cell) Therapy** named **'NexCAR19'** (Actalycabtagene autoleucel), developed jointly by **IIT Bombay**, **Tata Memorial Centre**, and **ImmunoAct**, treats B-cell lymphomas and leukaemia at ~1/10th the global cost.",
      "Sir C.V. Raman (Born November 7, 1888 in Tiruchirappalli, Tamil Nadu): Won the **1930 Nobel Prize in Physics** (first Asian to win a Nobel Prize in any branch of science) for discovering the **Raman Effect** on **28 February 1928** (celebrated as **National Science Day**)—the **inelastic scattering of photons** by matter, where scattered light changes wavelength/frequency due to molecular vibrational energy transitions. Awarded the **Bharat Ratna in 1954** (inaugural batch along with C. Rajagopalachari and Dr. S. Radhakrishnan).",
      "World Tsunami Awareness Day (November 5): Instituted by the UN General Assembly in December 2015, inspired by the Japanese story of ***'Inamura-no-Hi'*** (*burning of the rice sheaves* during the 1854 earthquake). In India, the **Indian Tsunami Early Warning Centre (ITEWC)** operates under **INCOIS (Indian National Centre for Ocean Information Services)** in **Hyderabad**."
    ],
    "institutionalContext": "Integrates Physics (Raman Scattering, Radioactivity), Biotechnology (CAR-T Cell Therapy, Cervical Cancer HPV Vaccine 'Cervavac'), and Disaster Management (INCOIS Tsunami Warning).",
    "strategicImportance": "High-yield Science + GK crossover question for NDA, CDS, AFCAT, and CAPF.",
    "quickSummary": "**November 7** marks <mark class=\"exam-target\">National Cancer Awareness Day</mark> (**Marie Curie**'s birth anniversary) and <mark class=\"exam-target\">Sir C.V. Raman</mark>'s birth anniversary (discoverer of the **Raman Effect** — inelastic scattering of photons), while **November 5** marks <mark class=\"exam-target\">World Tsunami Awareness Day</mark> (inspired by Japan's *Inamura-no-Hi*).",
    "detailedAnalysis": "Remember two key indigenous Indian medical milestones against cancer frequently asked in UPSC/CDS: (1) **'NexCAR19'** — India's first indigenous **CAR-T Cell gene therapy** (IIT Bombay + Tata Memorial Hospital + ImmunoAct) approved by CDSCO; and (2) **'CERVAVAC'** — India's first indigenous quadrivalent **Human Papillomavirus (qHPV) vaccine** against cervical cancer, developed by the **Serum Institute of India (SII, Pune)** and the Department of Biotechnology (DBT).",
    "backgroundContext": "Note the important distinction: **November 7** is **National Cancer Awareness Day** (India), whereas **February 4** is **World Cancer Day** (observed globally by UICC).",
    "stakeholders": [
      "Ministry of Health and Family Welfare",
      "IIT Bombay & Tata Memorial Centre (NexCAR19)",
      "INCOIS Hyderabad (ITEWC)"
    ],
    "relatedTopics": [
      "Raman Effect (Inelastic Scattering of Light) vs Rayleigh Scattering",
      "NexCAR19 (CAR-T Cell Therapy) & Cervavac (HPV Vaccine)",
      "National Cancer Awareness Day (Nov 7) vs World Cancer Day (Feb 4)"
    ],
    "examRelevanceMatrix": {
      "NDA": "High",
      "CDS": "High",
      "AFCAT": "High",
      "CAPF": "High",
      "UPSC": "High"
    },
    "mcq": {
      "question": "Consider the following statements regarding scientific milestones associated with National Cancer Awareness Day (November 7) and Sir C.V. Raman:\n1. National Cancer Awareness Day is observed in India on November 7 to mark the birth anniversary of Marie Curie, who won Nobel Prizes in both Physics (1903) and Chemistry (1911).\n2. \"NexCAR19\" is India's first indigenously developed Chimeric Antigen Receptor T-cell (CAR-T) therapy for cancer treatment, developed collaboratively by IIT Bombay, Tata Memorial Centre, and ImmunoAct.\n3. The \"Raman Effect\", discovered by Bharat Ratna Sir C.V. Raman (born November 7, 1888), refers to the inelastic scattering of photons by molecules resulting in a shift in the wavelength of scattered light.\nWhich of the statements given above are correct?",
      "options": [
        "1 and 2 only",
        "2 and 3 only",
        "1 and 3 only",
        "1, 2 and 3"
      ],
      "correct": 3,
      "explanation": "All three statements are correct. November 7 marks both Marie Curie's birth anniversary (National Cancer Awareness Day) and Sir C.V. Raman's birth anniversary; NexCAR19 is India's indigenous CAR-T cell therapy; and the Raman Effect is the inelastic scattering of light."
    }
  }
];

// Keep nov-2026-001 through nov-2026-005 and append nov-2026-006 through nov-2026-020
const baseNov = (caDb['November 2026'] || []).filter(item => {
  const num = parseInt((item.id || '').split('-').pop(), 10);
  return num >= 1 && num <= 5;
});
caDb['November 2026'] = [...baseNov, ...NOV_3_TO_7_ITEMS];

const outStr = `window.CURRENT_AFFAIRS_DB = ${JSON.stringify(caDb, null, 2)};\n`;
fs.writeFileSync('current_affairs_db.js', outStr, 'utf8');
console.log('Updated current_affairs_db.js — November 2026 now has', caDb['November 2026'].length, 'items.');

