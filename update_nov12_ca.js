/**
 * update_nov12_ca.js
 * Comprehensive Current Affairs update through November 12, 2026:
 * 1. Appends 10 high-yield items (nov-2026-021 to nov-2026-030) to current_affairs_db.js (total 30 items for Nov 2026).
 * 2. Updates ca_data.js (CA_META, CA_VISITS_DATA, CA_AWARDS_DATA including 2026 Booker Prize 'Orbital', CA_DATES_DATA, CA_SPORTS_DATA).
 * 3. Updates military_exercises_db.js (Exercise Poorvi Prahar, Exercise Antariksha Abhyas 2026, DRDO LRLACM Maiden Flight Test).
 * 4. Updates update_ca_notes_and_tests.js capsules, syllabus_data.js, notes_extra_current-affairs.js, notes_data.js, ai_generated_notes.js, questions_data.js, data.js, ca_db_extracted.json, and syncs to public/ and www/.
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

// ============================================================================
// 1. UPDATE current_affairs_db.js (nov-2026-021 to nov-2026-030)
// ============================================================================
const caCtx = { window: {} };
vm.createContext(caCtx);
vm.runInContext(fs.readFileSync('current_affairs_db.js', 'utf8'), caCtx);
const caDb = caCtx.window.CURRENT_AFFAIRS_DB;

const NOV_8_TO_12_ITEMS = [
  {
    "id": "nov-2026-021",
    "topic": "Defence Technology & Missile Systems",
    "publicationDate": "2026-11-12",
    "originalSource": "PIB / Ministry of Defence & DRDO",
    "relatedOfficialDocuments": "Maiden Flight-Test of DRDO's Long Range Land Attack Cruise Missile (LRLACM) from ITR Chandipur",
    "text": "On **November 12, 2026**, the **Defence Research and Development Organisation (DRDO)** conducted the successful **maiden flight-test** of its indigenously developed **Long Range Land Attack Cruise Missile (LRLACM)** from a mobile articulated launcher at the **Integrated Test Range (ITR), Chandipur, Odisha**.",
    "details": {
      "winner": "DRDO (ADE Bengaluru), BDL (Hyderabad) & BEL (Bengaluru)",
      "award": "Maiden Flight-Test of Long Range Land Attack Cruise Missile (LRLACM — 1,000+ km)",
      "nationality": "India",
      "summary": "A 1,000+ km range subsonic deep-strike cruise missile configured to launch from both mobile ground launchers (Army/IAF) and frontline naval warships via Universal Vertical Launch Modules (UVLM)."
    },
    "upscHighlights": [
      "Lead Lab & Production Partners: Designed and developed by DRDO's **Aeronautical Development Establishment (ADE), Bengaluru**, with **Bharat Dynamics Limited (BDL), Hyderabad** and **Bharat Electronics Limited (BEL), Bengaluru** serving as the Development-cum-Production Partners (DcPP).",
      "Dual-Platform Launch Capability: Configured to be launched from **mobile articulated ground launchers** (for the Indian Army and Indian Air Force) as well as from frontline **Indian Navy warships** using the **Universal Vertical Launch Module (UVLM)** system patented by BrahMos Aerospace.",
      "Technical & Tactical Profile: A **1,000+ km range** subsonic, aerodynamic cruise missile powered by a solid rocket booster for initial launch and an indigenous **turbofan engine** (Manik / STFE) for sustained cruise flight. During the Nov 12 trial, it performed complex waypoint navigation and flew at various altitudes and speeds while sea-skimming/terrain-hugging to evade enemy radar.",
      "Strategic Role: Sanctioned by the Defence Acquisition Council (DAC) as an AoN Mission Mode Project to provide the Indian Armed Forces with a stand-off precision conventional strike capability comparable to the US Tomahawk and Russian Kalibr."
    ],
    "institutionalContext": "Evolved from the indigenous Nirbhay technology demonstrator programme into an operational tri-service weapon system.",
    "strategicImportance": "Guaranteed top-tier Defence Technology question for CDS 1 2027, NDA 1 2027, and AFCAT 1 2027.",
    "quickSummary": "DRDO conducted the <mark class=\"exam-target\">maiden flight-test</mark> of the <mark class=\"exam-target\">1,000+ km range Long Range Land Attack Cruise Missile (LRLACM)</mark> from <mark class=\"exam-target\">ITR Chandipur (Odisha)</mark>, developed by <mark class=\"exam-target\">ADE Bengaluru</mark> with BDL and BEL for both ground mobile launchers and naval <mark class=\"exam-target\">UVLM</mark> cells.",
    "detailedAnalysis": "Distinguish India's two main cruise missile families for UPSC Defence exams: (1) **BrahMos** is a **supersonic** cruise missile (Mach 2.8–3.0, range 290 km extended to 450–800 km) powered by a liquid **ramjet** engine; whereas (2) **LRLACM** is a **long-range subsonic** cruise missile (~Mach 0.7–0.8, range **1,000+ km**) powered by a **turbofan** engine with fold-out wings, flying at ultra-low tree-top/sea-skimming altitudes for stealthy deep-penetration strikes.",
    "backgroundContext": "Tracked end-to-end by radar, Electro-Optical Tracking Systems (EOTS), and telemetry stations deployed by ITR Chandipur along the Odisha coast.",
    "stakeholders": [
      "DRDO (ADE Bengaluru & ITR Chandipur)",
      "Bharat Dynamics Limited (BDL) & Bharat Electronics Limited (BEL)",
      "Indian Navy, Indian Air Force & Indian Army"
    ],
    "relatedTopics": [
      "Long Range Land Attack Cruise Missile (LRLACM)",
      "Nirbhay Cruise Missile & Manik Turbofan Engine",
      "BrahMos Supersonic Cruise Missile & Pralay Quasi-Ballistic Missile"
    ],
    "examRelevanceMatrix": {
      "NDA": "High",
      "CDS": "High",
      "AFCAT": "High",
      "CAPF": "High",
      "UPSC": "High"
    },
    "mcq": {
      "question": "Consider the following statements regarding the Long Range Land Attack Cruise Missile (LRLACM), which underwent its maiden flight-test from ITR Chandipur in November 2026:\n1. It is an indigenously developed missile designed by DRDO's Aeronautical Development Establishment (ADE), Bengaluru, with BDL and BEL as Development-cum-Production Partners.\n2. It is configured to be launched only from land-based mobile articulated launchers and cannot be fired from naval warships.\n3. During its maiden test, the missile demonstrated waypoint navigation and the ability to fly at varying altitudes and speeds to engage deep-land targets over a range exceeding 1,000 km.\nWhich of the statements given above are correct?",
      "options": [
        "1 and 2 only",
        "2 and 3 only",
        "1 and 3 only",
        "1, 2 and 3"
      ],
      "correct": 2,
      "explanation": "Statements 1 and 3 are correct. Statement 2 is incorrect because LRLACM is specifically designed for dual launch—both from mobile articulated ground launchers and from frontline Indian Navy warships using the Universal Vertical Launch Module (UVLM) system."
    }
  },
  {
    "id": "nov-2026-022",
    "topic": "Tri-Service Exercises & Space Warfare",
    "publicationDate": "2026-11-11",
    "originalSource": "PIB / HQ Integrated Defence Staff (HQ IDS) & Eastern Command",
    "relatedOfficialDocuments": "Exercise 'POORVI PRAHAR' (Eastern Theatre) & 1st Military Space Exercise 'ANTARIKSHA ABHYAS – 2026' (New Delhi)",
    "text": "Between November 10 and 18, 2026, the Indian Armed Forces launched two landmark **Tri-Service exercises**: (1) **Exercise 'POORVI PRAHAR'**, a high-altitude integrated theatre exercise conducted by the **Eastern Command** along the LAC in **Arunachal Pradesh**; and (2) **'ANTARIKSHA ABHYAS – 2026'** (Nov 11–13), India's **first-ever dedicated Tri-Service Military Space Exercise** hosted by the **Defence Space Agency (DSA)** in **New Delhi**.",
    "details": {
      "winner": "HQ Integrated Defence Staff (Defence Space Agency) & Eastern Command",
      "award": "Exercise Poorvi Prahar (Arunachal LAC) & Exercise Antariksha Abhyas 2026 (New Delhi)",
      "nationality": "India (Tri-Service: Army, Navy, Air Force)",
      "summary": "Poorvi Prahar validated joint Army-Navy-IAF mountain strike operations (including Naval P-8I & IAF Prachand/Rafale), while Antariksha Abhyas 2026 war-gamed space domain awareness and satellite asset protection."
    },
    "upscHighlights": [
      "1. Exercise POORVI PRAHAR (Nov 10–18, 2026 — Eastern Theatre, Arunachal Pradesh):\n  • A 9-day Tri-Service high-altitude integrated combat exercise spearheaded by the Indian Army's **Eastern Command (HQ: Fort William, Kolkata)** across the forward mountainous sectors of Arunachal Pradesh.\n  • **Cross-Domain Asset Integration**: Uniquely deployed the **Indian Navy's P-8I Poseidon** long-range maritime reconnaissance aircraft for high-altitude overland radar surveillance and ISR in the Himalayas, alongside IAF **Rafale, Su-30MKI, Chinook, Apaches**, indigenous **LCH 'Prachand'**, **Swarm Drones**, **First-Person View (FPV) drones**, and **loitering munitions**.\n  • Operated under a unified **Joint Control Structure** connected via satellite communication and AI-driven situational awareness.",
      "2. Exercise ANTARIKSHA ABHYAS – 2026 (Nov 11–13, 2026 — New Delhi):\n  • **India's first dedicated Tri-Service Military Space table-top and war-gaming exercise**, conducted by the **Defence Space Agency (DSA)** of **HQ Integrated Defence Staff (HQ IDS)** and inaugurated by **CDS General Anil Chauhan**.\n  • Focused on **Space Situational Awareness (SSA)**, protection of Indian military communication/reconnaissance satellites (*GSAT-7 Rukmini, GSAT-7A Angry Bird, EMISAT*), and countering anti-satellite (ASAT), cyber, and electronic jamming threats in collaboration with **ISRO** and **DRDO**."
    ],
    "institutionalContext": "The Defence Space Agency (DSA, HQ Bengaluru) was established in 2019 alongside the Defence Cyber Agency (DCA) and Armed Forces Special Operations Division (AFSOD) to lay the foundation for Tri-Service Theaterisation.",
    "strategicImportance": "Extremely high-probability question for CDS, NDA, and AFCAT on India's newest Tri-Service exercises.",
    "quickSummary": "India conducted <mark class=\"exam-target\">Exercise Poorvi Prahar</mark> (Tri-Service high-altitude drill in <mark class=\"exam-target\">Arunachal Pradesh</mark> featuring Navy <mark class=\"exam-target\">P-8I</mark> and IAF <mark class=\"exam-target\">Prachand</mark>) and <mark class=\"exam-target\">Antariksha Abhyas 2026</mark> (India's 1st Tri-Service <mark class=\"exam-target\">Military Space Exercise</mark> by the <mark class=\"exam-target\">Defence Space Agency</mark> in New Delhi).",
    "detailedAnalysis": "Remember the three specialized Tri-Service agencies created under HQ IDS in 2019: (1) **Defence Space Agency (DSA)** — merges the Defence Imagery Processing and Analysis Centre (DIPAC, Delhi) and Defence Satellite Control Centre (DSCC, Bhopal); (2) **Defence Cyber Agency (DCA)**; and (3) **Armed Forces Special Operations Division (AFSOD)** (comprising Army Para SF, Navy MARCOS, and IAF Garud Commandos).",
    "backgroundContext": "Previously in March 2019, DRDO conducted 'Mission Shakti'—an Anti-Satellite (ASAT) missile test destroying a target satellite in a 300 km Low Earth Orbit (LEO).",
    "stakeholders": [
      "HQ Integrated Defence Staff (Defence Space Agency)",
      "Eastern Command (Indian Army, IAF, Indian Navy)",
      "ISRO & DRDO"
    ],
    "relatedTopics": [
      "Exercise Poorvi Prahar & Exercise Bharat Shakti",
      "Antariksha Abhyas 2026 & Mission Shakti (ASAT)",
      "DSA, DCA & AFSOD (Tri-Service Agencies)"
    ],
    "examRelevanceMatrix": {
      "NDA": "High",
      "CDS": "High",
      "AFCAT": "High",
      "CAPF": "High",
      "UPSC": "High"
    },
    "mcq": {
      "question": "Consider the following statements regarding the Tri-Service exercises conducted by the Indian Armed Forces in November 2026:\n1. Exercise \"Antariksha Abhyas – 2026\", inaugurated in New Delhi by Chief of Defence Staff General Anil Chauhan, is India's first dedicated Tri-Service military space exercise conducted by the Defence Space Agency (DSA).\n2. Exercise \"Poorvi Prahar\" is an integrated Tri-Service combat exercise conducted in the high-altitude mountainous terrain of the Eastern Theatre (Arunachal Pradesh), which included the deployment of the Indian Navy's P-8I reconnaissance aircraft alongside Army and IAF assets.\nWhich of the statements given above is/are correct?",
      "options": [
        "1 only",
        "2 only",
        "Both 1 and 2",
        "Neither 1 nor 2"
      ],
      "correct": 2,
      "explanation": "Both statements 1 and 2 are correct. Antariksha Abhyas – 2026 (Nov 11–13) is India's maiden Tri-Service space war-game conducted by the Defence Space Agency under HQ IDS, while Poorvi Prahar (Nov 10–18) validated Tri-Service air-land-maritime sensor integration across the Eastern Theatre."
    }
  },
  {
    "id": "nov-2026-023",
    "topic": "Indian Polity, Judiciary & Constitutional Appointments",
    "publicationDate": "2026-11-11",
    "originalSource": "PIB / Rashtrapati Bhavan & Supreme Court of India",
    "relatedOfficialDocuments": "Oath-Taking of Justice Sanjiv Khanna as the 51st Chief Justice of India (Article 124) & National Legal Services Day (Nov 9)",
    "text": "On **November 11, 2026**, **President Droupadi Murmu** administered the oath of office to **Justice Sanjiv Khanna** as the **51st Chief Justice of India (CJI)** at Rashtrapati Bhavan under **Article 124(2)** of the Constitution, succeeding the 50th CJI **Justice D.Y. Chandrachud**.",
    "details": {
      "winner": "Justice Sanjiv Khanna (51st Chief Justice of India)",
      "award": "Sworn in as 51st CJI at Rashtrapati Bhavan (Article 124)",
      "nationality": "India",
      "summary": "Elevated from the Delhi High Court to the Supreme Court in January 2019; nephew of legendary jurist Justice Hans Raj Khanna; previously served as Executive Chairman of NALSA."
    },
    "upscHighlights": [
      "Constitutional Provisions for CJI: Appointed by the President by warrant under her hand and seal under **Article 124(2)** (following the **Seniority Convention** and Memorandum of Procedure, where the outgoing CJI recommends the senior-most Supreme Court judge). Subscribes to the oath before the President under **Article 124(6)** (form set out in the **Third Schedule**).",
      "Tenure & Retirement Age: Holds office until attaining the age of **65 years** (May 13, 2025/2027) — note that the Constitution does **not** fix a minimum tenure for the CJI (High Court judges retire at **62 years** under Article 217, raised from 60 by the 15th Amendment, 1963).",
      "Historical Lineage: Justice Sanjiv Khanna is the nephew of iconic Supreme Court Judge **Justice Hans Raj (H.R.) Khanna**, who propounded the **Basic Structure Doctrine** in *Kesavananda Bharati (1973)* and wrote the courageous **lone dissenting opinion** upholding the Right to Life (Article 21) during the Emergency in the ***ADM Jabalpur v. Shivkant Shukla (Habeas Corpus) case, 1976*** (after which he was superseded for CJI in 1977).",
      "Key Judgments & NALSA Link: Authored/co-authored landmark verdicts bringing the **Office of the CJI under the Right to Information (RTI) Act, 2005** (2019), upholding the **abrogation of Article 370**, striking down the **Electoral Bonds Scheme**, rejecting 100% **EVM-VVPAT** cross-verification, and exercising power under **Article 142** to grant divorce directly on 'irretrievable breakdown of marriage'. Prior to becoming CJI, he served as Executive Chairman of **NALSA (National Legal Services Authority)**—celebrated on **National Legal Services Day (November 9)** under the Legal Services Authorities Act, 1987 and **Article 39A**."
    ],
    "institutionalContext": "Under the Legal Services Authorities Act, 1987, the **Chief Justice of India** is the **Patron-in-Chief** of NALSA, while the **second senior-most Supreme Court Judge** serves as its **Executive Chairman**.",
    "strategicImportance": "Guaranteed Polity & Appointments question for AFCAT, CDS, NDA, and CAPF.",
    "quickSummary": "<mark class=\"exam-target\">Justice Sanjiv Khanna</mark> was sworn in by President Droupadi Murmu on November 11 as the <mark class=\"exam-target\">51st Chief Justice of India</mark> under <mark class=\"exam-target\">Article 124(2)</mark>, succeeding 50th CJI Justice D.Y. Chandrachud.",
    "detailedAnalysis": "For UPSC CDS/NDA Polity, review the grounds and procedure for removal of a Supreme Court Judge under **Article 124(4)** and the **Judges (Inquiry) Act, 1968**: Only on two grounds — **'Proved Misbehaviour' or 'Incapacity'** — requiring a motion signed by **100 Lok Sabha MPs or 50 Rajya Sabha MPs**, investigated by a 3-member judicial committee, and passed by each House of Parliament in the same session by a **Special Majority** (majority of total membership of that House + majority of not less than two-thirds of members present and voting).",
    "backgroundContext": "November 9 was observed nationwide as National Legal Services Day (commemorating the enforcement of the Legal Services Authorities Act, 1987 on 9 Nov 1995 to fulfill Article 39A — Free Legal Aid).",
    "stakeholders": [
      "Supreme Court of India (51st CJI Justice Sanjiv Khanna)",
      "President of India (Article 124)",
      "National Legal Services Authority (NALSA — Article 39A)"
    ],
    "relatedTopics": [
      "Article 124 (Appointment, Oath & Removal of SC Judges)",
      "Justice H.R. Khanna (Kesavananda Bharati & ADM Jabalpur Dissent)",
      "Article 39A & NALSA (National Legal Services Day — Nov 9)"
    ],
    "examRelevanceMatrix": {
      "NDA": "High",
      "CDS": "High",
      "AFCAT": "High",
      "CAPF": "High",
      "UPSC": "High"
    },
    "mcq": {
      "question": "Consider the following statements regarding the Office of the Chief Justice of India (CJI), following the swearing-in of Justice Sanjiv Khanna as the 51st CJI in November 2026:\n1. The Chief Justice of India and other Judges of the Supreme Court are appointed by the President under Clause (2) of Article 124 of the Constitution.\n2. The Constitution of India prescribes a fixed minimum tenure of two years for the Chief Justice of India, subject to an upper retirement age of 65 years.\n3. Under the Legal Services Authorities Act, 1987 (enacted to give effect to Article 39A of the Constitution), the Chief Justice of India serves as the Patron-in-Chief of the National Legal Services Authority (NALSA).\nWhich of the statements given above are correct?",
      "options": [
        "1 and 2 only",
        "2 and 3 only",
        "1 and 3 only",
        "1, 2 and 3"
      ],
      "correct": 2,
      "explanation": "Statements 1 and 3 are correct. Statement 2 is incorrect because the Constitution does NOT prescribe any fixed minimum tenure for the Chief Justice of India or Supreme Court judges; it only specifies that a judge holds office until attaining the age of 65 years under Article 124(2)."
    }
  },
  {
    "id": "nov-2026-024",
    "topic": "Indian Polity & Fundamental Rights (Article 30)",
    "publicationDate": "2026-11-08",
    "originalSource": "Supreme Court of India",
    "relatedOfficialDocuments": "7-Judge Constitution Bench Judgment in Aligarh Muslim University v. Naresh Agarwal (Article 30 Minority Educational Institutions)",
    "text": "In a historic **4:3 majority judgment** on **November 8, 2026**, a **7-Judge Constitution Bench** of the **Supreme Court** headed by CJI D.Y. Chandrachud **overruled the 1967 5-Judge Bench ruling in *S. Azeez Basha v. Union of India***, holding that an educational institution is **not barred from claiming Minority Status under Article 30(1)** merely because it was created or incorporated by a statute (such as the **Aligarh Muslim University Act, 1920**).",
    "details": {
      "winner": "7-Judge Constitution Bench of the Supreme Court (4:3 Majority)",
      "award": "Overruling of S. Azeez Basha (1967) & 'Genesis / Brainchild Test' under Article 30(1)",
      "nationality": "India",
      "summary": "Clarified the meaning of 'establish and administer' under Article 30(1) for religious and linguistic minorities; referred the factual determination of AMU's minority status to a regular 3-Judge Bench."
    },
    "upscHighlights": [
      "What is Article 30(1)?: Grants all minorities, whether based on **religion or language**, the Fundamental Right to **\"establish and administer\"** educational institutions of their choice.",
      "Why *S. Azeez Basha (1967)* was Overruled: In 1967, a 5-Judge Bench held that since AMU was incorporated by a Central Legislature statute (the AMU Act, 1920), it was \"established\" by Parliament and not by the Muslim minority. The 2026 **7-Judge Bench (4:3 majority)** overruled this formalistic view, holding that statutory incorporation (then required for a university's degrees to be recognized) does **not** extinguish the minority character of an institution's founding.",
      "The 'Genesis / Brainchild Test' Laid Down by the Court: To determine whether an institution was \"established\" by a minority under Article 30(1), courts must pierce the statutory veil and examine:\n  • (1) **Ideation / Brainchild**: Who conceived the idea of establishing the institution?\n  • (2) **Purpose**: Was it founded predominantly for the benefit/advancement of the minority community?\n  • (3) **Funding & Land**: Who contributed the funds, endowments, and land (e.g., the Muhammadan Anglo-Oriental College founded by **Sir Syed Ahmad Khan in 1875/1877**, which became AMU in 1920)?\n  • (4) **Initial Administration**: Did members of the minority community spearhead the foundational steps?",
      "Pre-Constitution Institutions Included: The Bench also held that educational institutions founded **before 26 January 1950** are equally entitled to the protection of Article 30(1)."
    ],
    "institutionalContext": "The 4:3 majority comprised CJI D.Y. Chandrachud and Justices Sanjiv Khanna, J.B. Pardiwala, and Manoj Misra (with Justices Surya Kant, Dipankar Datta, and Satish Chandra Sharma dissenting); the factual application of these criteria to AMU will now be decided by a regular Bench.",
    "strategicImportance": "High-yield crossover topic combining **Indian Polity (Articles 29 & 30)** and **Modern Indian History (Sir Syed Ahmad Khan & the Aligarh Movement, 1875)**.",
    "quickSummary": "A <mark class=\"exam-target\">7-Judge Constitution Bench</mark> ruled (<mark class=\"exam-target\">4:3</mark>) to overrule <mark class=\"exam-target\">S. Azeez Basha (1967)</mark>, holding that an educational institution incorporated by a statute can still claim <mark class=\"exam-target\">Minority Status under Article 30(1)</mark> if its founding satisfies the <mark class=\"exam-target\">'Genesis / Brainchild Test'</mark>.",
    "detailedAnalysis": "Connect this judgment to **Modern Indian History** for CDS & NDA: **Sir Syed Ahmad Khan** founded the **Scientific Society (1864)**, launched the journal ***Tahzib-ul-Akhlaq*** (*Social Reformer*), and established the **Muhammadan Anglo-Oriental (MAO) College at Aligarh in 1875/1877** (on land donated for modern Western scientific education alongside Islamic studies), which was elevated to **Aligarh Muslim University (AMU) in 1920**. Also note the constitutional distinction between **Article 29** (protects the distinct language, script, or culture of *'any section of citizens'*—including both majorities and minorities) and **Article 30** (applies exclusively to *religious and linguistic minorities*; the term 'minority' is **not defined** anywhere in the Constitution).",
    "backgroundContext": "Under Entry 63 of the Union List (Seventh Schedule), Banaras Hindu University (BHU), Aligarh Muslim University (AMU), and Delhi University are expressly listed as Institutions of National Importance.",
    "stakeholders": [
      "Supreme Court of India (7-Judge Constitution Bench)",
      "Aligarh Muslim University & Ministry of Education"
    ],
    "relatedTopics": [
      "Article 29 vs Article 30 of the Constitution",
      "Sir Syed Ahmad Khan & Aligarh Movement (1875)",
      "Entry 63 of Union List (Seventh Schedule)"
    ],
    "examRelevanceMatrix": {
      "NDA": "High",
      "CDS": "High",
      "AFCAT": "Medium",
      "CAPF": "High",
      "UPSC": "High"
    },
    "mcq": {
      "question": "With reference to the 7-Judge Constitution Bench judgment of the Supreme Court on Article 30(1) in the Aligarh Muslim University case (November 2026), consider the following statements:\n1. By a 4:3 majority, the Supreme Court overruled its 1967 judgment in 'S. Azeez Basha v. Union of India' and held that an educational institution is not barred from claiming minority status merely because it was incorporated through a statute.\n2. To determine whether an institution was \"established\" by a minority under Article 30(1), the Court laid down tests examining the genesis/brainchild of the institution, the source of funds and land, and the community for whose benefit it was founded.\n3. Article 30(1) of the Constitution defines the exact numerical threshold for recognizing religious, linguistic, and ethnic minorities in India.\nWhich of the statements given above are correct?",
      "options": [
        "1 and 2 only",
        "2 and 3 only",
        "1 and 3 only",
        "1, 2 and 3"
      ],
      "correct": 0,
      "explanation": "Statements 1 and 2 are correct. Statement 3 is incorrect because the Constitution of India recognizes ONLY religious and linguistic minorities under Article 30(1) (not ethnic minorities) and does NOT define the term 'minority' or any numerical threshold."
    }
  },
  {
    "id": "nov-2026-025",
    "topic": "Environment, Climate Finance & Global Summits",
    "publicationDate": "2026-11-11",
    "originalSource": "UNFCCC / Ministry of Environment, Forest and Climate Change (MoEFCC)",
    "relatedOfficialDocuments": "29th UNFCCC Climate Summit (COP29) in Baku, Azerbaijan — New Collective Quantified Goal (NCQG) & Article 6 Carbon Markets",
    "text": "The **29th Conference of the Parties (COP29)** to the **UN Framework Convention on Climate Change (UNFCCC)** commenced on **November 11, 2026** in **Baku, Azerbaijan** (Nov 11–22) under the theme **\"In Solidarity for a Green World\"**, focusing on the **New Collective Quantified Goal (NCQG)** on climate finance and operationalizing global carbon markets under **Article 6 of the Paris Agreement**.",
    "details": {
      "winner": "UNFCCC COP29 Presidency (Baku, Azerbaijan — President Mukhtar Babayev)",
      "award": "'Finance COP' — NCQG Climate Finance & Article 6 Carbon Trading Rules",
      "nationality": "International (Host: Baku, Azerbaijan)",
      "summary": "Approved rules for a UN-backed global carbon credit market under Article 6.4 of the Paris Agreement on Day 1 and negotiated the post-2025 New Collective Quantified Goal (NCQG) replacing the 2009 $100B pledge."
    },
    "upscHighlights": [
      "Venue & Presidency: Hosted in **Baku, Azerbaijan** (located on the western shore of the **Caspian Sea**) from Nov 11–22, 2026, presided over by **Mukhtar Babayev**. Succeeds **COP28 (Dubai, UAE)** and precedes **COP30 (Belém, Brazil — in the Amazon region)**.",
      "Why COP29 is called the 'Finance COP': Mandated under the 2015 Paris Agreement to finalize the **New Collective Quantified Goal (NCQG)** on climate finance before 2025/2026, replacing the 2009 Copenhagen (COP15) pledge by developed countries to provide **$100 billion per year** to developing nations. India and the Like-Minded Developing Countries (LMDC) demanded **$1 to $1.3 trillion per year** largely in grants and concessional public finance under the principle of **CBDR–RC** (*Common But Differentiated Responsibilities and Respective Capabilities*).",
      "Breakthrough on Article 6 (Global Carbon Markets): On its opening day (Nov 11), COP29 approved the standards for **Article 6.4** of the Paris Agreement (**Paris Agreement Crediting Mechanism — PACM**, replacing the Kyoto Protocol's Clean Development Mechanism): \n  • **Article 6.2**: Bilateral country-to-country trading of **ITMOs** (*Internationally Transferred Mitigation Outcomes*).\n  • **Article 6.4**: Centralized UN-supervised global carbon market open to nations and private companies.",
      "Map-Work Link — Caspian Sea Bordering Nations (TARIK): Azerbaijan's capital Baku sits on the **Caspian Sea**, the world's largest inland body of water, bordered by **5 countries** (Mnemonic **TARIK**: **T**urkmenistan, **A**zerbaijan, **R**ussia, **I**ran, **K**azakhstan)."
    ],
    "institutionalContext": "Completes the 2026 'Rio Trio' of COP summits deriving from the 1992 Rio Earth Summit: **CBD COP16 (Cali, Colombia)**, **UNFCCC COP29 (Baku, Azerbaijan)**, and **UNCCD COP16 (Riyadh, Saudi Arabia)**.",
    "strategicImportance": "Guaranteed Environment + World Geography question for UPSC Prelims, CDS, NDA, and CAPF.",
    "quickSummary": "<mark class=\"exam-target\">UNFCCC COP29</mark> ('Finance COP') opened in <mark class=\"exam-target\">Baku, Azerbaijan</mark> (on the <mark class=\"exam-target\">Caspian Sea</mark>) to negotiate the <mark class=\"exam-target\">New Collective Quantified Goal (NCQG)</mark> on climate finance and operationalize <mark class=\"exam-target\">Article 6.4</mark> UN global carbon markets.",
    "detailedAnalysis": "Memorize the **'Rio Trio' COP Host Cities** and key mechanisms for CDS/NDA/CAPF: (1) **UNCBD COP16** — **Cali, Colombia** (*Cali Fund* for Digital Sequence Information); (2) **UNFCCC COP29** — **Baku, Azerbaijan** (*NCQG Climate Finance* & *Article 6 Carbon Markets*; after Dubai COP28 launched the *Loss and Damage Fund* hosted by the World Bank); and (3) **UNCCD COP16** — **Riyadh, Saudi Arabia** (Combating Desertification & Drought Resilience).",
    "backgroundContext": "India is simultaneously operationalizing its domestic **Carbon Credit Trading Scheme (CCTS)** notified by the Ministry of Power and Bureau of Energy Efficiency (BEE) under the Energy Conservation (Amendment) Act, 2022.",
    "stakeholders": [
      "UNFCCC Secretariat (Bonn, Germany) & COP29 Presidency (Baku)",
      "Ministry of Environment, Forest and Climate Change (India)",
      "Bureau of Energy Efficiency (CCTS India)"
    ],
    "relatedTopics": [
      "UNFCCC COP29 (Baku) — NCQG & Article 6 Carbon Markets",
      "Caspian Sea Bordering Countries (Mnemonic: TARIK)",
      "Rio Trio Summits (Cali, Baku, Riyadh)"
    ],
    "examRelevanceMatrix": {
      "NDA": "High",
      "CDS": "High",
      "AFCAT": "High",
      "CAPF": "High",
      "UPSC": "High"
    },
    "mcq": {
      "question": "Consider the following statements regarding the 29th UNFCCC Climate Change Conference (COP29) held in November 2026:\n1. It was hosted in Baku, Azerbaijan, a city located on the western coast of the Caspian Sea.\n2. Dubbed the \"Finance COP\", its central agenda was establishing the New Collective Quantified Goal (NCQG) on climate finance to replace the earlier $100 billion-a-year pledge by developed nations.\n3. Article 6 of the Paris Agreement, whose centralized crediting rules were approved at COP29, deals with international carbon market mechanisms and the trading of carbon credits.\nWhich of the statements given above are correct?",
      "options": [
        "1 and 2 only",
        "2 and 3 only",
        "1 and 3 only",
        "1, 2 and 3"
      ],
      "correct": 3,
      "explanation": "All three statements are correct. COP29 was hosted in Baku, Azerbaijan (on the Caspian Sea), centered on the New Collective Quantified Goal (NCQG) on climate finance, and operationalized global carbon market rules under Article 6 (6.2 and 6.4) of the Paris Agreement."
    }
  },
  {
    "id": "nov-2026-026",
    "topic": "International Relations & Strategic Trade Corridors",
    "publicationDate": "2026-11-12",
    "originalSource": "Ministry of External Affairs (MEA)",
    "relatedOfficialDocuments": "25th India–Russia IRIGC-TEC Session (New Delhi) & Opening of India's 4th Consulate in Brisbane, Australia",
    "text": "On **November 11–12, 2026**, External Affairs Minister **Dr. S. Jaishankar** and Russian First Deputy Prime Minister **Denis Manturov** co-chaired the **25th Session of the India–Russia Intergovernmental Commission on Trade, Economic, Scientific, Technological and Cultural Cooperation (IRIGC-TEC)** in **New Delhi**, shortly after India inaugurated its **4th Consulate General in Australia at Brisbane**.",
    "details": {
      "winner": "Ministry of External Affairs (EAM Dr. S. Jaishankar)",
      "award": "25th India–Russia IRIGC-TEC (New Delhi) & 4th Indian Consulate in Australia (Brisbane)",
      "nationality": "India / Russia / Australia",
      "summary": "Advanced the $100 billion India-Russia bilateral trade target by 2030 and 3 strategic connectivity corridors (INSTC, Chennai-Vladivostok, Northern Sea Route), following the 15th India-Australia FMFD."
    },
    "upscHighlights": [
      "1. 25th India–Russia IRIGC-TEC (New Delhi & Mumbai, Nov 11–12, 2026):\n  • Co-chaired by EAM **Dr. S. Jaishankar** and Russian First Deputy PM **Denis Manturov**.\n  • Set a bilateral trade target of **$100 billion by 2030** (bilateral trade already crossed **$65+ billion**, driven by energy, fertilizers, diamonds, and pharmaceuticals) and pushed for a **Bilateral Investment Treaty (BIT)** and **India–Eurasian Economic Union (EAEU) Free Trade Agreement**.\n  • **Three Strategic Connectivity Corridors**: (a) **INSTC** (*International North–South Transport Corridor* — 7,200 km multimodal route connecting Mumbai to St. Petersburg via **Chabahar/Bandar Abbas** in Iran and the Caspian Sea); (b) **Chennai–Vladivostok Eastern Maritime Corridor (EMC)** (5,600 nautical miles via the Sea of Japan and South China Sea, cutting transit time from 40 days to 24 days); and (c) the **Northern Sea Route (NSR)** across the Arctic.",
      "2. India–Australia Diplomatic Expansion (Nov 4–8, 2026):\n  • EAM Jaishankar inaugurated **India's 4th Consulate General in Australia at Brisbane (Queensland)** (joining Sydney, Melbourne, and Perth; Canberra houses the High Commission).\n  • Co-chaired the **15th Foreign Ministers' Framework Dialogue (FMFD)** with Penny Wong in Canberra and addressed the **1st 'Raisina Down Under'** dialogue in Sydney."
    ],
    "institutionalContext": "Illustrates India's multi-aligned strategic autonomy ('Vishwabandhu')—deepening Eurasian connectivity and defence ties with Russia (IRIGC-TEC & BRICS) while simultaneously strengthening Indo-Pacific security with QUAD partner Australia.",
    "strategicImportance": "High-yield question on India's maritime/land trade corridors (INSTC vs Chennai-Vladivostok vs IMEC) and diplomatic milestones for CDS, NDA, and CAPF.",
    "quickSummary": "EAM <mark class=\"exam-target\">Dr. S. Jaishankar</mark> and Russian First Deputy PM <mark class=\"exam-target\">Denis Manturov</mark> co-chaired the <mark class=\"exam-target\">25th India–Russia IRIGC-TEC</mark> in New Delhi targeting **$100B trade by 2030** via the **INSTC** and **Chennai–Vladivostok Corridor**, while India opened its **4th Australian Consulate in** <mark class=\"exam-target\">Brisbane</mark>.",
    "detailedAnalysis": "Compare India's three flagship international trade corridors for UPSC exams: (1) **INSTC** (2000) — connects **Mumbai &rarr; Bandar Abbas/Chabahar (Iran) &rarr; Bandar Anzali (Caspian Sea) &rarr; Astrakhan/Moscow/St. Petersburg (Russia)**; (2) **Chennai–Vladivostok Eastern Maritime Corridor** — passes through the **Andaman Sea, Strait of Malacca, South China Sea, and Sea of Japan**; and (3) **IMEC** (*India–Middle East–Europe Economic Corridor*, launched at New Delhi G20 Summit 2023) — connects **India &rarr; UAE &rarr; Saudi Arabia &rarr; Jordan &rarr; Israel (Haifa) &rarr; Greece (Piraeus)/Europe**.",
    "backgroundContext": "The Eurasian Economic Union (EAEU) comprises five member states: **Russia, Belarus, Kazakhstan, Kyrgyzstan, and Armenia**.",
    "stakeholders": [
      "Ministry of External Affairs (India)",
      "Government of the Russian Federation (IRIGC-TEC)",
      "Department of Foreign Affairs and Trade (Australia)"
    ],
    "relatedTopics": [
      "INSTC vs Chennai–Vladivostok Corridor vs IMEC",
      "Eurasian Economic Union (EAEU — 5 Members)",
      "15th India–Australia FMFD & Raisina Down Under"
    ],
    "examRelevanceMatrix": {
      "NDA": "High",
      "CDS": "High",
      "AFCAT": "High",
      "CAPF": "High",
      "UPSC": "High"
    },
    "mcq": {
      "question": "Consider the following statements regarding India's strategic diplomacy and trade corridors discussed in November 2026:\n1. The 25th Session of the India–Russia Intergovernmental Commission (IRIGC-TEC) in New Delhi prioritized three connectivity routes: the International North–South Transport Corridor (INSTC), the Chennai–Vladivostok Eastern Maritime Corridor, and the Northern Sea Route.\n2. In November 2026, India inaugurated its fourth Consulate General in Australia at Brisbane (Queensland) alongside the first edition of the 'Raisina Down Under' dialogue.\n3. The Chennai–Vladivostok Maritime Corridor connects India's eastern coast to Russia's Far East by passing through the Suez Canal and the Mediterranean Sea.\nWhich of the statements given above are correct?",
      "options": [
        "1 and 2 only",
        "2 and 3 only",
        "1 and 3 only",
        "1, 2 and 3"
      ],
      "correct": 0,
      "explanation": "Statements 1 and 2 are correct. Statement 3 is incorrect because the Chennai–Vladivostok Eastern Maritime Corridor (EMC) sails eastwards through the Bay of Bengal, Strait of Malacca, South China Sea, and Sea of Japan to Russia's Pacific port of Vladivostok (bypassing the Suez/Mediterranean route)."
    }
  },
  {
    "id": "nov-2026-027",
    "topic": "Armed Forces Institutional Structure & AFCAT 1 2027",
    "publicationDate": "2026-11-12",
    "originalSource": "Indian Air Force (IAF) / CDAC",
    "relatedOfficialDocuments": "Release of AFCAT 01/2027 Official Notification & Indian Air Force Operational Commands Architecture",
    "text": "The **Indian Air Force (IAF)** officially released the **AFCAT 01/2027 Notification** in November 2026 inviting applications from men and women cadets for **Flying Branch** and **Ground Duty (Technical & Non-Technical) Branches**—including the newly operationalized **Weapon Systems (WS) Branch**—shifting operational readiness for **AFCAT 1 2027 to DEFCON 2 (Application Phase)**.",
    "details": {
      "winner": "Indian Air Force (Bharatiya Vayu Sena)",
      "award": "AFCAT 01/2027 Notification Out — DEFCON 2 Application Phase Active",
      "nationality": "India",
      "summary": "Covers Short Service Commission (Flying) and Permanent/Short Service Commission in Ground Duty Technical (AE-L, AE-M) and Non-Technical (Weapon Systems, Admin, Logistics, Accounts, Education, Meteorology) plus NCC Special Entry."
    },
    "upscHighlights": [
      "Motto & Origin of the IAF: Established on **8 October 1932** (under the Indian Air Force Act, 1932; No. 1 Squadron formed on 1 April 1933 at Drigh Road, Karachi with Westland Wapiti biplanes led by **Subroto Mukerjee**, the first Indian Chief of the Air Staff). Motto: ***\"Nabha Sparsham Deeptam\"*** (*Touch the Sky with Glory*), taken from **Chapter 11, Verse 24 of the Bhagavad Gita**.",
      "7 Commands of the Indian Air Force (5 Operational + 2 Functional):\n  • **Western Air Command (WAC)** — HQ: **New Delhi** (Subroto Park)\n  • **South Western Air Command (SWAC)** — HQ: **Gandhinagar** (Gujarat)\n  • **Central Air Command (CAC)** — HQ: **Prayagraj** (Uttar Pradesh)\n  • **Eastern Air Command (EAC)** — HQ: **Shillong** (Meghalaya)\n  • **Southern Air Command (SAC)** — HQ: **Thiruvananthapuram** (Kerala)\n  • **Training Command (Functional)** — HQ: **Bengaluru** (Karnataka)\n  • **Maintenance Command (Functional)** — HQ: **Nagpur** (Maharashtra)",
      "Weapon Systems (WS) Branch: Approved in October 2022 as the **first new operational branch created in the IAF since Independence**, unifying four specialized streams under one commander: (1) **Surface-to-Surface Missiles (SSM)**; (2) **Surface-to-Air Missiles (SAM)** (S-400 Sudarshan Chakra, Akash, MR-SAM); (3) **Remotely Piloted Aircraft (RPA/UAVs)** (MQ-9B SkyGuardian, Heron Mk-II); and (4) **Weapon System Operators (WSO)** in twin-seat combat aircraft (Su-30MKI).",
      "Equivalent Commissioned Ranks (Air Force — Army — Navy):\n  • **Flying Officer** = Lieutenant = Sub-Lieutenant\n  • **Flight Lieutenant** = Captain = Lieutenant\n  • **Squadron Leader** = Major = Lieutenant Commander\n  • **Wing Commander** = Lieutenant Colonel = Commander\n  • **Group Captain** = Colonel = Captain\n  • **Air Commodore** = Brigadier = Commodore\n  • **Air Vice Marshal** = Major General = Rear Admiral\n  • **Air Marshal** = Lieutenant General = Vice Admiral\n  • **Air Chief Marshal** = General = Admiral (5-Star Rank: **Marshal of the Indian Air Force Arjan Singh**)."
    ],
    "institutionalContext": "The Air Force Academy (AFA) at **Dundigal (Hyderabad), Telangana** conducts joint foundational and flying training for all AFCAT and NDA/CDSE Air Force cadets.",
    "strategicImportance": "Every AFCAT, CDS, and NDA paper includes 1–3 direct questions on **Air Force Commands & Headquarters**, **Equivalent Tri-Service Ranks**, and the **Weapon Systems Branch**.",
    "quickSummary": "With the <mark class=\"exam-target\">AFCAT 1 2027 Notification</mark> out (<mark class=\"exam-target\">DEFCON 2</mark>), revise IAF's **7 Commands** (5 Operational + **Training Command in Bengaluru** & **Maintenance Command in Nagpur**), the **Weapon Systems (WS) Branch**, and equivalent Tri-Service officer ranks.",
    "detailedAnalysis": "Watch out for the classic UPSC/AFCAT Command Headquarters trap: The **Indian Navy's Southern Naval Command (Kochi)** is its Training Command, whereas the **Indian Air Force** has a dedicated **Training Command at Bengaluru** and **Maintenance Command at Nagpur** (and its Southern Air Command is at **Thiruvananthapuram**). Also remember that **Current Chief of the Air Staff (CAS)** is **Air Chief Marshal Amar Preet Singh** (28th CAS, who assumed office on September 30, 2024/2026 succeeding ACM V.R. Chaudhari).",
    "backgroundContext": "AFCAT exam pattern: 100 Questions | 300 Marks | 2 Hours (+3 marks for correct, -1 mark for incorrect) across Verbal Ability in English, General Awareness, Numerical Ability, and Reasoning & Military Aptitude Test.",
    "stakeholders": [
      "Indian Air Force (CAS Air Chief Marshal Amar Preet Singh)",
      "Air Force Academy (Dundigal, Hyderabad)",
      "Centre for Development of Advanced Computing (CDAC)"
    ],
    "relatedTopics": [
      "7 Commands of the Indian Air Force & Headquarters",
      "Equivalent Commissioned Ranks (Army, Navy, Air Force)",
      "Weapon Systems (WS) Branch of the IAF"
    ],
    "examRelevanceMatrix": {
      "NDA": "High",
      "CDS": "High",
      "AFCAT": "High",
      "CAPF": "Medium",
      "UPSC": "Medium"
    },
    "mcq": {
      "question": "Consider the following pairs of Indian Air Force (IAF) Commands and their respective Headquarters:\n1. Central Air Command : Prayagraj\n2. Eastern Air Command : Shillong\n3. Maintenance Command : Bengaluru\n4. Training Command : Nagpur\nHow many of the above pairs are correctly matched?",
      "options": [
        "Only one pair",
        "Only two pairs",
        "Only three pairs",
        "All four pairs"
      ],
      "correct": 1,
      "explanation": "Only two pairs (1 and 2) are correctly matched: Central Air Command is at Prayagraj and Eastern Air Command is at Shillong. Pairs 3 and 4 are interchanged: the IAF Maintenance Command is headquartered at Nagpur (Maharashtra), while the Training Command is headquartered at Bengaluru (Karnataka)."
    }
  },
  {
    "id": "nov-2026-028",
    "topic": "Indian Polity, Rule of Law & Fundamental Rights",
    "publicationDate": "2026-11-12",
    "originalSource": "Supreme Court of India",
    "relatedOfficialDocuments": "Supreme Court Pan-India Guidelines Against 'Bulldozer Justice' (In Re: Directions in the Matter of Demolition of Structures — Articles 14, 21 & 142)",
    "text": "Invoking its extraordinary constitutional powers under **Article 142**, the **Supreme Court of India** laid down binding **pan-India guidelines against 'Bulldozer Justice'** (punitive executive demolition of private properties of accused persons without due process), ruling that such arbitrary demolitions violate the **Doctrine of Separation of Powers**, the **Rule of Law**, and the **Right to Shelter under Article 21**.",
    "details": {
      "winner": "Supreme Court of India (Bench of Justices B.R. Gavai & K.V. Viswanathan)",
      "award": "Binding Pan-India Guidelines Against Punitive Demolitions (Articles 14, 21 & 142)",
      "nationality": "India",
      "summary": "Held that the executive cannot replace the judiciary to pronounce guilt or demolish family homes as collective punishment; mandated a 15-day prior show-cause notice, personal hearing, and videographed proceedings."
    },
    "upscHighlights": [
      "Constitutional Principles Invoked:\n  • **Separation of Powers (Basic Structure)**: Adjudicating whether an accused person is guilty is strictly the domain of the **Judiciary**; the **Executive** cannot become a judge and demolish a citizen's property as a penalty for an alleged crime.\n  • **Right to Shelter under Article 21**: The right to a roof over one's head is an integral facet of the Fundamental Right to Life and Personal Liberty under **Article 21** (*Olga Tellis v. Bombay Municipal Corporation, 1985*; *Chameli Singh v. State of UP, 1996*).\n  • **Prohibition of Collective Punishment**: Demolishing a house where innocent family members (spouses, children, elderly parents) reside merely because one member is an accused or even a convict is unconstitutional and violates **Article 14**.",
      "Binding Pan-India Safeguards Issued under Article 142:\n  • (1) **Mandatory 15-Day Prior Show-Cause Notice**: No demolition can take place without serving a registered show-cause notice giving at least 15 days from the date of service (simultaneously uploaded on a designated digital portal).\n  • (2) **Personal Hearing & Speaking Order**: The Collector/Municipal authority must grant a personal hearing and pass a reasoned final order, followed by a further **15-day window** allowing the owner to appeal or remove unauthorized portions voluntarily.\n  • (3) **Personal Liability of Officials**: Officials who carry out demolitions in violation of these directions will be held cited for **Contempt of Court** and ordered to pay **restitution/compensation from their personal salaries**.\n  • **Exception**: Does not apply to unauthorized structures on public roads, footpaths, railway lines, riverbeds, or water bodies, or demolitions ordered by a court of law."
    ],
    "institutionalContext": "Enacted by the Supreme Court under **Article 142(1)** of the Constitution, which empowers the Court to pass any decree or order necessary for doing **\"complete justice\"** in any cause or matter pending before it.",
    "strategicImportance": "Major Indian Polity, Ethics, and CAPF Paper-2 Essay topic on Rule of Law, Due Process vs Procedure Established by Law, and Article 142.",
    "quickSummary": "Using <mark class=\"exam-target\">Article 142</mark>, the Supreme Court banned punitive <mark class=\"exam-target\">'Bulldozer Justice'</mark>, holding that executive demolitions without a <mark class=\"exam-target\">15-day prior show-cause notice</mark> violate the <mark class=\"exam-target\">Separation of Powers</mark> and the <mark class=\"exam-target\">Right to Shelter under Article 21</mark>.",
    "detailedAnalysis": "For UPSC CDS and CAPF Polity, note how the Supreme Court linked three constitutional articles in this judgment: **Article 14** (Rule of Law & non-arbitrariness), **Article 21** (Right to Shelter & fair procedure after *Maneka Gandhi, 1978*), and **Article 300A** (No person shall be deprived of his property save by authority of law), enforced nationwide via **Article 142**.",
    "backgroundContext": "Compare with the *Vishaka v. State of Rajasthan (1997)* and *D.K. Basu v. State of West Bengal (1997)* cases, where the Supreme Court similarly issued binding guidelines under Article 142/32 to protect Fundamental Rights.",
    "stakeholders": [
      "Supreme Court of India (Article 142)",
      "State Governments & Municipal Corporations"
    ],
    "relatedTopics": [
      "Article 21 (Right to Shelter — Olga Tellis Case)",
      "Article 142 (Complete Justice Power of Supreme Court)",
      "Doctrine of Separation of Powers & Rule of Law (Article 14)"
    ],
    "examRelevanceMatrix": {
      "NDA": "Medium",
      "CDS": "High",
      "AFCAT": "Medium",
      "CAPF": "High",
      "UPSC": "High"
    },
    "mcq": {
      "question": "With reference to the Supreme Court's landmark pan-India guidelines on the demolition of properties (November 2026), consider the following statements:\n1. Invoking its powers under Article 142 of the Constitution to do \"complete justice\", the Court held that the executive cannot demolish the residential property of a person merely because they are accused or convicted of a criminal offence.\n2. The judgment affirmed that the Right to Shelter is an integral facet of the Fundamental Right to Life and Personal Liberty under Article 21 of the Constitution.\n3. The Court mandated a minimum 15-day prior show-cause notice and personal hearing before any municipal demolition, except for unauthorized structures on public roads, railway lines, or water bodies.\nWhich of the statements given above are correct?",
      "options": [
        "1 and 2 only",
        "2 and 3 only",
        "1 and 3 only",
        "1, 2 and 3"
      ],
      "correct": 3,
      "explanation": "All three statements are correct. The Supreme Court invoked Article 142, the Doctrine of Separation of Powers, and the Right to Shelter under Article 21 to prohibit punitive demolitions without a 15-day show-cause notice and due process."
    }
  },
  {
    "id": "nov-2026-029",
    "topic": "Sports, Literature Awards & Global Honours",
    "publicationDate": "2026-11-12",
    "originalSource": "FIDE / IBSF / Booker Prize Foundation",
    "relatedOfficialDocuments": "Booker Prize 2026 ('Orbital' by Samantha Harvey), Pankaj Advani's 28th World Billiards Title (Doha) & Arjun Erigaisi Crossing 2800 FIDE ELO",
    "text": "Between November 8 and 12, 2026, three major international cultural and sporting milestones were recorded: (1) British author **Samantha Harvey** won the **2026 Booker Prize** for her space-station novel ***'Orbital'***; (2) Indian cueist **Pankaj Advani** clinched his **28th World Title** at the **IBSF World Billiards Championship in Doha, Qatar**; and (3) Grandmaster **Arjun Erigaisi** became only the **second Indian in history** (after **Viswanathan Anand**) to breach the elite **2800 FIDE Classical Chess Rating** barrier as **Aravindh Chithambaram** won the **Chennai Grand Masters 2026**.",
    "details": {
      "winner": "Samantha Harvey (Booker Prize), Pankaj Advani (28th World Title) & Arjun Erigaisi (2800 ELO)",
      "award": "Booker Prize 2026 ('Orbital'), IBSF World Billiards Title & 2800 FIDE Rating Milestone",
      "nationality": "UK / India",
      "summary": "'Orbital' is the first book set in outer space to win the Booker Prize; Pankaj Advani defeated Sourav Kothari/Robert Hall in Doha for his 28th world crown; Arjun Erigaisi reached World No. 2 / 2800+ ELO."
    },
    "upscHighlights": [
      "1. Booker Prize 2026 — Samantha Harvey for *'Orbital'* (Announced Nov 12, London):\n  • British novelist **Samantha Harvey** won the prestigious £50,000 **Booker Prize** for ***'Orbital'***—a 136-page pastoral novel set over a single 24-hour day (16 sunrises and 16 sunsets) aboard the **International Space Station (ISS)** as six astronauts orbit Earth.\n  • It is the **first book set in outer space** to win the Booker Prize and the second-shortest winning novel in Booker history.",
      "2. Pankaj Advani Wins 28th World Billiards Title (Doha, Qatar — Nov 12):\n  • Padma Bhushan & Khel Ratna cueist **Pankaj Advani** ('Prince of Pune' / 'Golden Boy') defeated England's Robert Hall (4–2) in the final at **Doha, Qatar** to win the **IBSF World Billiards Championship** for the **7th consecutive time**, taking his career tally to an extraordinary **28 World Titles** across Billiards and Snooker.",
      "3. Indian Chess Surge & Cricket Record (Nov 8–11):\n  • At the **Chennai Grand Masters 2026**, GM **Aravindh Chithambaram** won the Masters title (defeating Levon Aronian on tiebreak; **V. Pranav** won the Challengers category), while GM **Arjun Erigaisi** crossed the **2800 FIDE Classical Rating mark** (World No. 2 behind Magnus Carlsen)—becoming only the **2nd Indian after Viswanathan Anand** and the **16th player in world history** to cross 2800.\n  • In T20I Cricket, **Sanju Samson** (107 off 50 balls vs South Africa at Kingsmead, Durban on Nov 8) became the **first Indian cricketer in history** to score **two consecutive T20 International centuries**."
    ],
    "institutionalContext": "Consolidates India's Golden Era in Chess (following the historic Open & Women's Double Gold at the 45th Chess Olympiad in Budapest and D. Gukesh's World Championship challenge against Ding Liren in Singapore).",
    "strategicImportance": "High-yield AFCAT, CDS, and NDA questions on Books & Authors (*Orbital* — Samantha Harvey) and Sports Personalities (Pankaj Advani, Arjun Erigaisi, Aravindh Chithambaram, Sanju Samson).",
    "quickSummary": "British author <mark class=\"exam-target\">Samantha Harvey</mark> won the <mark class=\"exam-target\">Booker Prize</mark> for her ISS novel <mark class=\"exam-target\">'Orbital'</mark>; <mark class=\"exam-target\">Pankaj Advani</mark> won his <mark class=\"exam-target\">28th World Billiards Title</mark> in Doha; and GM <mark class=\"exam-target\">Arjun Erigaisi</mark> became only the 2nd Indian after Viswanathan Anand to cross the <mark class=\"exam-target\">2800 FIDE ELO</mark> barrier.",
    "detailedAnalysis": "Keep the two Booker Prizes distinct for exams: (1) The **Booker Prize** (for original English fiction published in the UK/Ireland) was won by **Samantha Harvey** for ***Orbital*** (Nov 2026; Indian-origin winners in history include Salman Rushdie for *Midnight's Children*, Arundhati Roy for *The God of Small Things*, Kiran Desai for *The Inheritance of Loss*, and Aravind Adiga for *The White Tiger*); whereas (2) The **International Booker Prize** (for fiction translated into English) was won by German author **Jenny Erpenbeck** (translated by Michael Hofmann) for ***Kairos*** (and in 2022 by **Geetanjali Shree** & Daisy Rockwell for the Hindi classic ***Tomb of Sand / Ret Samadhi***).",
    "backgroundContext": "Meanwhile, Bihar hosted the **Women's Asian Champions Trophy Hockey 2026** at the newly built **Rajgir Sports Complex** (Nov 11–20), featuring mascot ***'Gudiya'*** (inspired by the endangered State Bird of Bihar, the **House Sparrow**).",
    "stakeholders": [
      "Booker Prize Foundation (London)",
      "International Billiards and Snooker Federation (IBSF, Doha)",
      "All India Chess Federation (AICF) & FIDE"
    ],
    "relatedTopics": [
      "Booker Prize ('Orbital' by Samantha Harvey) vs International Booker Prize ('Kairos')",
      "Pankaj Advani (28th IBSF World Billiards Title)",
      "Arjun Erigaisi (2800 ELO Club) & Chennai Grand Masters 2026"
    ],
    "examRelevanceMatrix": {
      "NDA": "High",
      "CDS": "High",
      "AFCAT": "High",
      "CAPF": "High",
      "UPSC": "Medium"
    },
    "mcq": {
      "question": "Consider the following statements regarding major literary and sporting achievements in November 2026:\n1. British author Samantha Harvey won the Booker Prize for her novel \"Orbital\", which follows six astronauts aboard the International Space Station over a single 24-hour period.\n2. Indian cueist Pankaj Advani clinched his 28th career World Title by winning the IBSF World Billiards Championship in Doha, Qatar.\n3. Grandmaster Arjun Erigaisi became only the second Indian chess player in history after Viswanathan Anand to cross the 2800 FIDE Classical ELO rating mark.\nWhich of the statements given above are correct?",
      "options": [
        "1 and 2 only",
        "2 and 3 only",
        "1 and 3 only",
        "1, 2 and 3"
      ],
      "correct": 3,
      "explanation": "All three statements are correct. Samantha Harvey won the Booker Prize for 'Orbital', Pankaj Advani won his 28th World Title at the IBSF World Billiards Championship in Doha, and Arjun Erigaisi became only the 2nd Indian after Viswanathan Anand to breach the 2800 FIDE ELO rating barrier."
    }
  },
  {
    "id": "nov-2026-030",
    "topic": "National Education Day, Broadcasting Heritage & Modern History",
    "publicationDate": "2026-11-12",
    "originalSource": "PIB / Ministry of Education & Ministry of Information and Broadcasting",
    "relatedOfficialDocuments": "National Education Day (Nov 11 — Maulana Abul Kalam Azad) & Public Service Broadcasting Day (Nov 12 — Mahatma Gandhi's 1947 AIR Address)",
    "text": "India observed **National Education Day** on **November 11, 2026** (marking the birth anniversary of Bharat Ratna **Maulana Abul Kalam Azad**, Independent India's **first Education Minister**) and **Public Service Broadcasting Day (*Jan Prasaran Diwas*)** on **November 12, 2026** (commemorating **Mahatma Gandhi's historic only live address on All India Radio on 12 November 1947**).",
    "details": {
      "winner": "Maulana Abul Kalam Azad (Nov 11) & Mahatma Gandhi's AIR Broadcast (Nov 12)",
      "award": "National Education Day (Nov 11) & Public Service Broadcasting Day (Nov 12)",
      "nationality": "India",
      "summary": "Connects current national observances with high-yield Modern Indian History: Maulana Azad's journals (Al-Hilal, Al-Balagh), INC Presidencies (1923 & 1940–46), IIT Kharagpur/UGC creation, and Gandhi's 1947 AIR broadcast to Kurukshetra refugees."
    },
    "upscHighlights": [
      "1. National Education Day (November 11) — Maulana Abul Kalam Azad (1888–1958):\n  • Instituted by the Ministry of Education in September 2008 to honour **Maulana Abul Kalam Azad**, who served as **Independent India's 1st Minister of Education** from **15 August 1947 to 2 February 1958** (posthumously awarded the **Bharat Ratna in 1992**).\n  • **Architect of India's Academic Institutions**: Established the first **Indian Institute of Technology (IIT Kharagpur, 1951)**, the **University Grants Commission (UGC, 1953/1956)**, **AICTE**, **Indian Council for Cultural Relations (ICCR, 1950)**, and the three national academies — **Sangeet Natak Akademi (1953)**, **Lalit Kala Akademi (1954)**, and **Sahitya Akademi (1954)**.\n  • **Freedom Struggle & INC Presidencies (UPSC History Staple)**:\n    - Launched the Urdu weekly journals ***Al-Hilal*** (1912) and ***Al-Balagh*** (1915) to rally Indian Muslims into the anti-colonial struggle; authored the classic book ***'India Wins Freedom'*** and the Quranic commentary *Tarjuman-ul-Quran*.\n    - Elected the **youngest President of the Indian National Congress** at the **1923 Delhi Special Session** (aged 35), and served as the **longest-serving continuous INC President before Independence (1940–1946, elected at the 1940 Ramgarh Session)** during the **Quit India Movement (1942)**, **Cripps Mission (1942)**, **Wavell Plan / Simla Conference (1945)**, and **Cabinet Mission (1946)**.",
      "2. Public Service Broadcasting Day / *Jan Prasaran Diwas* (November 12):\n  • Declared in 2000 to commemorate **12 November 1947**, the **first and only time Mahatma Gandhi visited the studios of All India Radio (AIR, Akashvani)** at Broadcasting House, New Delhi.\n  • Unable to travel personally to **Kurukshetra (Haryana)**, Gandhiji addressed nearly 2.5 lakh displaced Partition refugees from West Punjab camped at Kurukshetra via a live radio broadcast.",
      "3. Other Key Observances (Nov 8–12):\n  • **Nov 9**: **National Legal Services Day** (NALSA Act 1987 enforcement in 1995) & **Uttarakhand Foundation Day** (carved out of UP on **9 November 2000** as India's **27th State**, after Chhattisgarh on Nov 1 and before Jharkhand on Nov 15, 2000).\n  • **Nov 10**: **World Science Day for Peace and Development** (UNESCO).\n  • **Nov 12**: **World Pneumonia Day** (India runs the **SAANS** — *Social Awareness and Action to Neutralise Pneumonia Successfully* campaign)."
    ],
    "institutionalContext": "Never confuse **National Education Day (November 11 — Maulana Abul Kalam Azad)** with **National Teachers' Day (September 5 — Dr. S. Radhakrishnan)** or **International Day of Education (January 24 — UNGA)**.",
    "strategicImportance": "Classic UPSC CDS/NDA/AFCAT question linking Important Days with Modern Indian History.",
    "quickSummary": "**November 11** is <mark class=\"exam-target\">National Education Day</mark> (birth anniversary of 1st Education Minister <mark class=\"exam-target\">Maulana Abul Kalam Azad</mark> — author of *India Wins Freedom* & *Al-Hilal*, youngest INC President 1923, founder of UGC & IIT Kharagpur), while **November 12** is <mark class=\"exam-target\">Public Service Broadcasting Day</mark> (marking <mark class=\"exam-target\">Mahatma Gandhi's 1947 AIR broadcast</mark> to Kurukshetra refugees).",
    "detailedAnalysis": "Memorize the chronological creation of the three states formed in **November 2000** (frequently asked in CDS/NDA Geography & Polity): (1) **Chhattisgarh** — **1 November 2000** (26th State, carved from Madhya Pradesh); (2) **Uttarakhand (then Uttaranchal)** — **9 November 2000** (27th State, carved from Uttar Pradesh); and (3) **Jharkhand** — **15 November 2000** (28th State, carved from Bihar on the birth anniversary of **Bhagwan Birsa Munda / Janjatiya Gaurav Divas**).",
    "backgroundContext": "November 12 also marks the birth anniversary of **Dr. Salim Ali (1896–1987)**, revered as the **'Birdman of India'**, celebrated as **National Bird Watching Day** (Salim Ali Bird Sanctuary is located on **Chorao Island along the Mandovi River in Goa**, whereas **Salim Ali National Park** is in **Srinagar, J&K**).",
    "stakeholders": [
      "Ministry of Education (UGC, AICTE, ICCR)",
      "Prasar Bharati & All India Radio (Akashvani)",
      "Ministry of Culture"
    ],
    "relatedTopics": [
      "Maulana Abul Kalam Azad (Al-Hilal, India Wins Freedom, 1923 & 1940 INC Sessions)",
      "National Education Day (Nov 11) vs International Day of Education (Jan 24)",
      "Dr. Salim Ali ('Birdman of India' — Chorao Island, Goa)"
    ],
    "examRelevanceMatrix": {
      "NDA": "High",
      "CDS": "High",
      "AFCAT": "High",
      "CAPF": "High",
      "UPSC": "High"
    },
    "mcq": {
      "question": "Consider the following statements regarding Maulana Abul Kalam Azad, whose birth anniversary is observed as National Education Day on November 11, and Public Service Broadcasting Day (November 12):\n1. Maulana Abul Kalam Azad launched the Urdu weekly journal 'Al-Hilal' in 1912, authored 'India Wins Freedom', and became the youngest person to serve as President of the Indian National Congress at its 1923 Delhi Special Session.\n2. As Independent India's first Education Minister (1947–1958), he spearheaded the establishment of the first Indian Institute of Technology (IIT Kharagpur), the University Grants Commission (UGC), and the Indian Council for Cultural Relations (ICCR).\n3. Public Service Broadcasting Day is observed on November 12 to commemorate the day in 1947 when Mahatma Gandhi visited the All India Radio (AIR) studio in New Delhi for his only live broadcast, addressing Partition refugees camped at Kurukshetra.\nWhich of the statements given above are correct?",
      "options": [
        "1 and 2 only",
        "2 and 3 only",
        "1 and 3 only",
        "1, 2 and 3"
      ],
      "correct": 3,
      "explanation": "All three statements are correct. Maulana Abul Kalam Azad (National Education Day, Nov 11) edited Al-Hilal, wrote India Wins Freedom, was the youngest INC President in 1923 (and longest-serving from 1940–46), and established IIT Kharagpur, UGC, and ICCR; while Nov 12 commemorates Mahatma Gandhi's 1947 live AIR address to refugees at Kurukshetra."
    }
  }
];

// Keep nov-2026-001 through nov-2026-020 and append nov-2026-021 through nov-2026-030
const baseNov20 = (caDb['November 2026'] || []).filter(item => {
  const num = parseInt((item.id || '').split('-').pop(), 10);
  return num >= 1 && num <= 20;
});
caDb['November 2026'] = [...baseNov20, ...NOV_8_TO_12_ITEMS];

fs.writeFileSync('current_affairs_db.js', `window.CURRENT_AFFAIRS_DB = ${JSON.stringify(caDb, null, 2)};\n`, 'utf8');
console.log('1. Updated current_affairs_db.js — November 2026 now has', caDb['November 2026'].length, 'items.');

// ============================================================================
// 2. UPDATE ca_data.js
// ============================================================================
const caDataCtx = { window: {} };
vm.createContext(caDataCtx);
vm.runInContext(fs.readFileSync('ca_data.js', 'utf8'), caDataCtx);

caDataCtx.window.CA_META.lastRefreshed = "November 12, 2026";

const NEW_VISITS = [
  {
    visit: "DRDO Maiden Flight-Test of Long Range Land Attack Cruise Missile (LRLACM) & Tri-Service Exercises 'POORVI PRAHAR' and 'ANTARIKSHA ABHYAS 2026'",
    period: "November 2026",
    purpose: "Maiden flight-test of the 1,000+ km range LRLACM from ITR Chandipur (Nov 12), alongside the 9-day Tri-Service high-altitude Exercise 'Poorvi Prahar' in Arunachal Pradesh (Nov 10–18) and India's 1st Military Space Exercise 'Antariksha Abhyas 2026' in New Delhi (Nov 11–13).",
    deals: "LRLACM (developed by ADE Bengaluru with BDL & BEL) can launch from both mobile ground launchers and Navy warship UVLM cells. Poorvi Prahar integrated Navy P-8I and IAF Rafale/Prachand with Eastern Command troops; Antariksha Abhyas (by Defence Space Agency) war-gamed space situational awareness and anti-satellite resilience."
  },
  {
    visit: "25th India–Russia Intergovernmental Commission (IRIGC-TEC) in New Delhi & UNFCCC COP29 Summit in Baku, Azerbaijan",
    period: "November 2026",
    purpose: "EAM Dr. S. Jaishankar and Russian First Deputy PM Denis Manturov co-chaired the 25th IRIGC-TEC in New Delhi (Nov 12), while the 29th UN Climate Change Conference (COP29 — 'Finance COP') opened in Baku, Azerbaijan (Nov 11–22).",
    deals: "India and Russia targeted $100 billion bilateral trade by 2030 via the INSTC, Chennai–Vladivostok Eastern Maritime Corridor, and Northern Sea Route. At Baku COP29, nations approved Article 6.4 global carbon market rules and negotiated the New Collective Quantified Goal (NCQG) on climate finance."
  },
  {
    visit: "EAM Dr. S. Jaishankar's Visit to Australia — 4th Indian Consulate in Brisbane, 15th FMFD & 1st 'Raisina Down Under'",
    period: "November 2026",
    purpose: "Inaugurating India's 4th Consulate General in Australia at Brisbane (Queensland), co-chairing the 15th Foreign Ministers' Framework Dialogue (FMFD) with Penny Wong in Canberra, and addressing the inaugural 'Raisina Down Under' in Sydney (Nov 3–8).",
    deals: "Deepened Indo-Pacific maritime domain awareness, critical minerals supply chain cooperation under QUAD, and bilateral defence interoperability alongside Exercise AUSTRAHIND 2026."
  }
];

caDataCtx.window.CA_VISITS_DATA = [
  ...NEW_VISITS,
  ...caDataCtx.window.CA_VISITS_DATA.filter(v => !NEW_VISITS.some(nv => nv.visit === v.visit))
];

const NEW_AWARDS = [
  {
    awardName: "Booker Prize 2026 (Fiction)",
    categoryOfWork: "English Literature (Novel)",
    workName: "'Orbital' — A lyrical novel following six astronauts aboard the International Space Station over a single 24-hour day (16 sunrises & sunsets); first book set in space to win the Booker Prize (Announced Nov 12)",
    recipient: "Samantha Harvey",
    recipientCountry: "United Kingdom",
    givingCountry: "United Kingdom (Booker Prize Foundation, London)"
  },
  {
    awardName: "IBSF World Billiards Championship 2026 (28th Career World Title)",
    categoryOfWork: "International Sports (Cue Sports / Billiards)",
    workName: "Clinched his 7th consecutive IBSF World Billiards title (defeating England's Robert Hall 4–2 in the final at Doha on Nov 12), taking his career tally to 28 World Titles",
    recipient: "Pankaj Advani",
    recipientCountry: "India",
    givingCountry: "International Billiards & Snooker Federation (Doha, Qatar)"
  }
];

caDataCtx.window.CA_AWARDS_DATA = [
  ...caDataCtx.window.CA_AWARDS_DATA.slice(0, 6),
  ...NEW_AWARDS,
  ...caDataCtx.window.CA_AWARDS_DATA.slice(6).filter(a => !NEW_AWARDS.some(na => na.awardName === a.awardName))
];

const NEW_DATES = [
  { date: "Nov 8",  name: "World Urbanism Day & International Day of Radiography", theme: "Sustainable & Resilient Cities", significance: "Marks Wilhelm Conrad Röntgen's discovery of X-rays on 8 November 1895 (1st Nobel Prize in Physics, 1901) and global urban planning." },
  { date: "Nov 9",  name: "National Legal Services Day & Uttarakhand Foundation Day (27th State)", theme: "Access to Justice for All", significance: "Marks the enforcement of the Legal Services Authorities Act, 1987 (on 9 Nov 1995) fulfilling Article 39A (Free Legal Aid via NALSA), and the creation of Uttarakhand on 9 Nov 2000." },
  { date: "Nov 10", name: "World Science Day for Peace and Development (UNESCO)", theme: "Youth at the Forefront: Trust and Transformation in Science", significance: "Proclaimed by UNESCO in 2001 to bridge science and society for sustainable peace." },
  { date: "Nov 11", name: "National Education Day", theme: "Inclusive & Equitable Quality Education", significance: "Birth anniversary of Bharat Ratna Maulana Abul Kalam Azad (1888–1958), Independent India's 1st Education Minister (founder of IIT Kharagpur, UGC, AICTE, ICCR; author of 'India Wins Freedom')." },
  { date: "Nov 12", name: "Public Service Broadcasting Day (Jan Prasaran Diwas) & World Pneumonia Day", theme: "Voice of the Nation & Every Breath Counts (SAANS)", significance: "Commemorates Mahatma Gandhi's only live visit and broadcast from All India Radio (New Delhi) on 12 November 1947 to Partition refugees at Kurukshetra; also birth anniversary of 'Birdman of India' Dr. Salim Ali." }
];

caDataCtx.window.CA_DATES_DATA = [
  ...caDataCtx.window.CA_DATES_DATA.filter(d => !NEW_DATES.some(nd => nd.date === d.date)),
  ...NEW_DATES
];

const NEW_SPORTS = [
  {
    event: "IBSF World Billiards Championship 2026",
    winner: "Pankaj Advani (Clinched his 28th Career World Title & 7th Consecutive IBSF Billiards Crown; defeated England's Robert Hall 4–2)",
    country: "India",
    placeHeld: "Doha, Qatar",
    period: "November 12, 2026"
  },
  {
    event: "Chennai Grand Masters 2026 & FIDE 2800 ELO Club",
    winner: "GM Aravindh Chithambaram (Masters Winner); GM V. Pranav (Challengers Winner); GM Arjun Erigaisi Crossed 2800 FIDE ELO Rating (2nd Indian after V. Anand)",
    country: "India",
    placeHeld: "Chennai, Tamil Nadu, India",
    period: "November 5–11, 2026"
  }
];

caDataCtx.window.CA_SPORTS_DATA = [
  ...NEW_SPORTS,
  ...caDataCtx.window.CA_SPORTS_DATA.filter(s => !NEW_SPORTS.some(ns => ns.event === s.event))
];

const caDataOut = `// =============================================================================
// CURRENT AFFAIRS DATA — SINGLE SOURCE OF TRUTH
// =============================================================================
window.CA_META = ${JSON.stringify(caDataCtx.window.CA_META, null, 2)};

window.CA_VISITS_DATA = ${JSON.stringify(caDataCtx.window.CA_VISITS_DATA, null, 2)};

window.CA_AWARDS_DATA = ${JSON.stringify(caDataCtx.window.CA_AWARDS_DATA, null, 2)};

window.CA_FTA_DATA = ${JSON.stringify(caDataCtx.window.CA_FTA_DATA, null, 2)};

window.CA_DATES_DATA = ${JSON.stringify(caDataCtx.window.CA_DATES_DATA, null, 2)};

window.CA_SPORTS_DATA = ${JSON.stringify(caDataCtx.window.CA_SPORTS_DATA, null, 2)};
`;
fs.writeFileSync('ca_data.js', caDataOut, 'utf8');
console.log('2. Updated ca_data.js through November 12, 2026.');

// ============================================================================
// 3. UPDATE military_exercises_db.js
// ============================================================================
const meLive = require('./military_exercises_db.js');
const NEW_NOV_EXERCISES = [
  {
    "tier": 1,
    "year": 2026,
    "date": "November 10–18, 2026",
    "exercise_name": "Poorvi Prahar",
    "edition": "2026 High-Altitude Theatre Edition",
    "type": "Tri-Service Integrated Combat Exercise",
    "participant_nations": [
      "India"
    ],
    "exercise_domain": [
      "Army",
      "Air",
      "Navy",
      "Tri-Service"
    ],
    "location": "Eastern Theatre (Forward Areas of Arunachal Pradesh along LAC)",
    "strategic_significance": "Massive 9-day Tri-Service integrated exercise spearheaded by the Indian Army's Eastern Command across high-altitude mountain sectors of Arunachal Pradesh. Uniquely integrated Indian Navy P-8I Poseidon reconnaissance aircraft with IAF Rafale, Su-30MKI, Chinook, Prachand LCH, and Army swarm drones/loitering munitions under a common Joint Control Structure.",
    "exam_importance": "Top-tier CDS/NDA/AFCAT question: Tri-Service high-altitude exercise in the Eastern Theatre featuring Naval P-8I overland mountain surveillance and indigenous Prachand LCH.",
    "units_and_hardware": {
      "India": [
        "Indian Army Eastern Command (M777 Ultra-Light Howitzers, Swarm Drones, FPV Drones)",
        "Indian Air Force (Rafale, Su-30MKI, LCH Prachand, Chinook, Apache)",
        "Indian Navy (P-8I Poseidon Long-Range Reconnaissance Aircraft)"
      ]
    }
  },
  {
    "tier": 1,
    "year": 2026,
    "date": "November 11–13, 2026",
    "exercise_name": "Antariksha Abhyas – 2026",
    "edition": "1st Edition (Inaugural)",
    "type": "Tri-Service Military Space Exercise",
    "participant_nations": [
      "India"
    ],
    "exercise_domain": [
      "Space",
      "Tri-Service",
      "Cyber & Electronic Warfare"
    ],
    "location": "New Delhi (Hosted by Defence Space Agency, HQ IDS)",
    "strategic_significance": "India's first-ever dedicated Tri-Service military space exercise, conducted by the Defence Space Agency (DSA) under HQ Integrated Defence Staff and inaugurated by CDS General Anil Chauhan. Focuses on Space Situational Awareness (SSA), protecting Indian military satellites, and countering anti-satellite (ASAT) and space-denial threats with ISRO and DRDO.",
    "exam_importance": "Very high yield for CDS, NDA, AFCAT & UPSC: 1st edition conducted by the Defence Space Agency (DSA, HQ IDS) in New Delhi.",
    "units_and_hardware": {
      "India": [
        "Defence Space Agency (DSA) & HQ Integrated Defence Staff (HQ IDS)",
        "Indian Army, Indian Navy & Indian Air Force Space Cells",
        "ISRO & DRDO"
      ]
    }
  },
  {
    "tier": 1,
    "year": 2026,
    "date": "November 12, 2026",
    "exercise_name": "LRLACM Maiden Flight-Test",
    "edition": "Maiden Developmental Trial",
    "type": "Indigenous Cruise Missile Trial",
    "participant_nations": [
      "India"
    ],
    "exercise_domain": [
      "Missile",
      "Navy",
      "Air",
      "Army"
    ],
    "location": "Integrated Test Range (ITR), Chandipur, Odisha",
    "strategic_significance": "DRDO successfully conducted the maiden flight-test of the 1,000+ km range Long Range Land Attack Cruise Missile (LRLACM), developed by ADE Bengaluru with BDL and BEL. Capable of launching from both mobile articulated ground launchers and Indian Navy warships via Universal Vertical Launch Modules (UVLM).",
    "exam_importance": "Guaranteed Defence Tech question for CDS/NDA/AFCAT: LRLACM (1,000+ km subsonic cruise missile, ADE Bengaluru + BDL + BEL, dual ground/naval UVLM launch).",
    "units_and_hardware": {
      "India": [
        "DRDO (ADE Bengaluru & ITR Chandipur)",
        "Bharat Dynamics Limited (BDL) & Bharat Electronics Limited (BEL)",
        "Universal Vertical Launch Module (UVLM) & Mobile Articulated Launcher"
      ]
    }
  }
];

meLive['November 2026'] = [
  ...(meLive['November 2026'] || []).filter(e => !NEW_NOV_EXERCISES.some(ne => ne.exercise_name === e.exercise_name)),
  ...NEW_NOV_EXERCISES
];

const meOut = `let MILITARY_EXERCISES_LIVE = ${JSON.stringify(meLive, null, 2)};\n\nif (typeof window !== "undefined") {\n  window.MILITARY_EXERCISES_LIVE = MILITARY_EXERCISES_LIVE;\n}\nif (typeof module !== "undefined" && module.exports) {\n  module.exports = MILITARY_EXERCISES_LIVE;\n}\n`;
fs.writeFileSync('military_exercises_db.js', meOut, 'utf8');
console.log('3. Updated military_exercises_db.js — November 2026 now has', meLive['November 2026'].length, 'entries.');
