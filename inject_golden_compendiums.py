"""
inject_golden_compendiums.py
Injects high-yield, structured, A+ Golden Mastery Compendiums for Indian Polity, Geography,
and History into notes_database.json, then compiles them into frontend modules.
"""

import json
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

NOTES_DB = 'notes_database.json'

golden_notes = [
    # =========================================================================
    # INDIAN POLITY A+ COMPENDIUMS
    # =========================================================================
    {
        "id": "polity-golden-schedules",
        "subject": "Indian Polity",
        "topic": "Master Matrix: 12 Schedules of the Constitution",
        "chapter": "Constitution & Framework",
        "source_book": "UPSC High-Yield Mastery Compendium",
        "page": 1,
        "content": """### Master Matrix: The 12 Schedules of the Constitution of India

Mnemonic for quick recall: **TEARS OF OLD PM**

| Schedule | Mnemonic Letter | Subject / Provisions Covered | High-Yield Exam Traps & Nuances |
| :--- | :--- | :--- | :--- |
| **1st Schedule** | **T** (Territory) | Names of the States and Union Territories with their territorial jurisdictions. | Changing boundaries under Art 3 automatically alters the 1st Schedule. |
| **2nd Schedule** | **E** (Emoluments) | Salaries, allowances, and privileges of President, Governors, Speaker/Dy Speaker, SC/HC Judges, CAG. | **Trap Alert:** Prime Minister and Union Ministers are **NOT** in the 2nd Schedule. |
| **3rd Schedule** | **A** (Affirmations) | Forms of Oaths and Affirmations for Union Ministers, MPs, Judges of SC/HC, CAG, State Legislators. | **Trap Alert:** President (Art 60), Vice-President (Art 69), and Governor (Art 159) oaths are in their respective Articles, **NOT** in 3rd Schedule! |
| **4th Schedule** | **R** (Rajya Sabha) | Allocation of seats in the Rajya Sabha (Council of States) to States and UTs based on population. | Only 3 UTs (Delhi, Puducherry, J&K) have representation in Rajya Sabha. |
| **5th Schedule** | **S** (Scheduled Areas) | Administration and control of Scheduled Areas and Scheduled Tribes in 10 states. | Governed by Tribes Advisory Councils (TAC); Governor can direct laws not to apply. |
| **6th Schedule** | **O** (Other Tribal Areas) | Administration of Tribal areas in **4 North-Eastern States**: **Assam, Meghalaya, Tripura, Mizoram** (`AMTM`). | Features Autonomous District Councils (ADCs) with legislative and judicial powers. **Trap Alert:** Manipur and Nagaland are NOT in the 6th Schedule! |
| **7th Schedule** | **F** (Federal Lists) | Division of powers into 3 Lists: **Union List** (100 subjects), **State List** (61 subjects), **Concurrent List** (52 subjects). | Residuary powers belong to the **Union Parliament** (Article 248), unlike the USA or Australia. |
| **8th Schedule** | **O** (Official Languages)| **22 Recognized Official Languages** (originally 14). | Sindhi added by 21st CAA (1967); Konkani, Manipuri, Nepali by 71st CAA (1992); Bodo, Dongri, Maithili, Santhali (`BDMS`) by 92nd CAA (2003). **Trap:** English is NOT in the 8th Schedule! |
| **9th Schedule** | **L** (Land Reforms) | Validation of certain Acts and Regulations (added by **1st CAA, 1951** to protect land reforms). | **I.R. Coelho Case (2007):** Laws added after 24 April 1973 are open to Judicial Review if they violate Basic Structure. |
| **10th Schedule**| **D** (Defection) | **Anti-Defection Law** (Disqualification of MPs/MLAs) added by **52nd CAA, 1985**. | Decided by Presiding Officer (Speaker/Chairman). Subject to Judicial Review (**Kihoto Hollohan Case, 1992**). 91st CAA removed split exemption (now requires 2/3rd merger). |
| **11th Schedule**| **P** (Panchayats) | **29 Functional Matters** devolved to Panchayati Raj Institutions (added by **73rd CAA, 1992** / Article 243G). | Covers agriculture, drinking water, rural housing, poverty alleviation, rural electrification. |
| **12th Schedule**| **M** (Municipalities) | **18 Functional Matters** devolved to Urban Local Bodies (added by **74th CAA, 1992** / Article 243W). | Covers urban planning, regulation of land use, water supply, public health, fire services. |

### Key Exam Facts
- **Summary:** Complete breakdown of the 12 Constitutional Schedules with mnemonics, exact lists, and UPSC distractor traps.
- **High-Yield Recall:** Remember `AMTM` for 6th Schedule and the distinction that President's oath is in Art 60, not 3rd Schedule.
"""
    },
    {
        "id": "polity-golden-writs",
        "subject": "Indian Polity",
        "topic": "Comparative Anatomy of the 5 Constitutional Writs",
        "chapter": "Fundamental Rights & Judiciary",
        "source_book": "UPSC High-Yield Mastery Compendium",
        "page": 1,
        "content": """### Comparative Anatomy of the 5 Constitutional Writs (Articles 32 & 226)

Dr. B.R. Ambedkar called Article 32 the **"Heart and Soul of the Constitution"**.
- **Supreme Court (Art 32):** Can issue writs ONLY for Fundamental Rights enforcement (Narrower jurisdiction, but mandatory remedy).
- **High Court (Art 226):** Can issue writs for Fundamental Rights AND ordinary legal rights (Broader jurisdiction, discretionary power).

| Writ Name | Literal Meaning | Purpose / Grounds for Issuance | Issued Against | Cannot Be Issued Against |
| :--- | :--- | :--- | :--- | :--- |
| **Habeas Corpus** | *"To have the body of"* | Protects individual liberty against unlawful detention or physical arrest. The court orders the detaining authority to produce the person. | Both **Public Authorities** and **Private Individuals**. | When detention is lawful, for contempt of court/legislature, or outside the court's territorial jurisdiction. |
| **Mandamus** | *"We Command"* | Compels a public official or statutory body to perform an obligatory public or statutory duty which they have failed/refused to do. | Public officials, statutory corporations, inferior courts, tribunals, government. | Private individuals, non-statutory bodies, discretionary duties, to enforce private contract, against **President** or **Governors** (Art 361). |
| **Prohibition** | *"To forbid"* | Issued by a higher court to a lower court/tribunal to **prevent** it from exceeding its jurisdiction or usurping jurisdiction it does not possess. (*Preventive* in nature). | **Judicial and Quasi-Judicial bodies ONLY**. | Administrative authorities, legislative bodies, private individuals. Issued **during pendency** of proceedings. |
| **Certiorari** | *"To be certified"* | Issued by a higher court to quash the order of a lower court/tribunal for excess of jurisdiction, lack of jurisdiction, or violation of Natural Justice. (*Both Preventive and Curative*). | **Judicial, Quasi-Judicial, and Administrative Authorities** affecting rights of individuals. | Legislative bodies and private individuals. Issued **after an order/judgment** has been passed. |
| **Quo-Warranto** | *"By what authority / warrant?"* | Prevents illegal usurpation of a public office by an unqualified person; inquires into the legality of claim of a person to a public office. | Substantive **Public Offices of Permanent Character** created by statute or Constitution. | Ministerial office or Private offices. Can be sought by **any interested person**, not necessarily the aggrieved party! |

### Key Exam Facts
- **Summary:** Rigorous comparison of the 5 Writs under Art 32 & 226, specifying jurisdictional differences and exclusions.
- **Crucial UPSC Distinctions:** Prohibition is issued to *prevent* an action before it happens; Certiorari is issued to *quash* an order already made. Quo-Warranto does not require locus standi.
"""
    },
    {
        "id": "polity-golden-articles",
        "subject": "Indian Polity",
        "topic": "The Essential Articles Master Reference (Articles 1 to 395)",
        "chapter": "Constitutional Articles",
        "source_book": "UPSC High-Yield Mastery Compendium",
        "page": 1,
        "content": """### The Essential Articles Master Reference for Defence Exams

#### Part I: The Union & Its Territory (Art 1–4)
- **Art 1:** India, that is Bharat, shall be a **Union of States** (indestructible union of destructible states).
- **Art 2:** Admission or establishment of new states that were NOT part of India (e.g., Sikkim).
- **Art 3:** Formation of new states, alteration of areas, boundaries, or names of existing states (Passed by **Simple Majority**; President's recommendation mandatory).
- **Art 4:** Laws made under Art 2 and 3 are NOT deemed constitutional amendments under Art 368.

#### Part III: Fundamental Rights (Art 12–35)
- **Citizens ONLY:** Articles **15, 16, 19, 29, 30** (Foreigners do NOT get these).
- **Both Citizens & Foreigners:** Articles **14, 20, 21, 21A, 22, 23, 24, 25, 26, 27, 28** (except enemy aliens).
- **Art 14:** Equality before Law (British origin - negative) & Equal Protection of the Laws (American origin - positive).
- **Art 17:** Abolition of Untouchability (Absolute right; enforceable against private individuals).
- **Art 19:** 6 Democratic Freedoms (Speech, Assembly, Association, Movement, Residence, Profession).
- **Art 20:** Protection against Ex-post facto law, Double Jeopardy, and Self-incrimination (Cannot be suspended during Emergency).
- **Art 21:** Protection of Life and Personal Liberty (Expanded via Maneka Gandhi case to include Right to Privacy, clean environment, speedy trial).
- **Art 21A:** Right to Education (6 to 14 years) added by **86th CAA 2002**.
- **Art 32:** Constitutional Remedies (Dr. Ambedkar: "Heart and Soul of the Constitution").

#### Part IV: Directive Principles of State Policy (DPSP) (Art 36–51)
- Non-justiciable in courts, but fundamental in the governance of the country (Irish Constitution).
- **Socialistic:** Art 38 (Social order), Art 39 (Equal livelihood & wealth distribution), Art 39A (Free legal aid), Art 41 (Right to work), Art 42 (Just & humane conditions, maternity relief), Art 43 (Living wage).
- **Gandhian:** Art 40 (Village Panchayats), Art 43 (Cottage industries), Art 43B (Cooperative societies - 97th CAA), Art 46 (SC/ST educational interests), Art 47 (Prohibition of intoxicating drinks), Art 48 (Prohibition of slaughter of cows/calves).
- **Liberal-Intellectual:** Art 44 (**Uniform Civil Code**), Art 45 (Early childhood care below 6 years), Art 48A (Protection of environment, forests & wildlife - 42nd CAA), Art 50 (**Separation of Judiciary from Executive**), Art 51 (Promotion of International Peace and Security).

#### Part IVA: Fundamental Duties (Art 51A)
- Added by **42nd CAA 1976** on recommendation of **Swaran Singh Committee** (inspired by USSR Constitution).
- Originally 10 duties; **11th Duty added by 86th CAA 2002** (duty of parent/guardian to provide education to child aged 6–14).
- Non-justiciable, enforceable only through parliamentary statutes.

#### Union & State Executives & Legislatures
- **Art 52 & 53:** President of India & Executive power of the Union.
- **Art 61:** Procedure for **Impeachment of the President** (Requires 2/3rd majority of *total membership* of each House; nominated members participate!).
- **Art 72:** Pardoning power of the President (Pardon, Commutation, Remission, Respite, Reprieve). Wider than Governor's (covers court martial and death sentences).
- **Art 74 & 75:** Council of Ministers with PM at the head; **Collective Responsibility to the Lok Sabha**.
- **Art 76:** Attorney General for India (First Law Officer; right to speak in both Houses without right to vote).
- **Art 108:** Joint Sitting of Parliament (Summoned by President, **Presided over by Speaker of Lok Sabha**; applies to Ordinary Bills, NEVER to Money Bills or Constitutional Amendment Bills).
- **Art 110:** Definition of **Money Bill** (Certified conclusively by Speaker; Lok Sabha has exclusive power; Rajya Sabha has only 14 days).
- **Art 112:** Annual Financial Statement (Union Budget).
- **Art 123:** Ordinance-making power of President (Promulgated only when either House is not in session; must be approved within 6 weeks of reassembly).
- **Art 148:** Comptroller and Auditor General of India (CAG - "Guardian of Public Purse").
- **Art 280:** Finance Commission (Quinquennial, recommends sharing of taxes between Centre and States).
- **Art 312:** All India Services (Created exclusively by Rajya Sabha passing a resolution with 2/3rd majority present & voting).
- **Art 324:** Election Commission of India.

#### Emergency & Amendment Provisions
- **Art 352:** National Emergency (Grounds: War, External Aggression, or *Armed Rebellion* [substituted for "Internal Disturbance" by 44th CAA]). Requires written recommendation of Union Cabinet.
- **Art 356:** President's Rule (Failure of constitutional machinery in states; requires approval within 2 months by Simple Majority).
- **Art 360:** Financial Emergency (Never declared in India).
- **Art 368:** Power and procedure of Parliament to amend the Constitution (Special majority of 2/3rd present & voting + absolute majority of total membership; certain federal provisions require ratification by 50% of state legislatures by simple majority).
"""
    },
    {
        "id": "polity-golden-amendments-cases",
        "subject": "Indian Polity",
        "topic": "Landmark Constitutional Amendments & Supreme Court Judgments",
        "chapter": "Constitutional Amendments & Judicial Milestones",
        "source_book": "UPSC High-Yield Mastery Compendium",
        "page": 1,
        "content": """### Landmark Constitutional Amendments & Supreme Court Judgments

#### Top Constitutional Amendments Tested in UPSC / Defence Exams

| Amendment & Year | Key Provisions & Impact | UPSC Focus Area |
| :--- | :--- | :--- |
| **1st CAA, 1951** | Inserted **9th Schedule** to protect land reform laws from judicial review; placed reasonable restrictions on free speech (Art 19(2)). | Added Ninth Schedule. |
| **7th CAA, 1956** | Reorganized States on linguistic basis; abolished Class A, B, C, D states; created 14 States and 6 UTs; allowed common Governor and common HC for multiple states. | State Reorganisation Act 1956 implementation. |
| **24th CAA, 1971** | Affirmed Parliament's power to amend ANY part of Constitution including Fundamental Rights under Art 368; made Presidential assent to CAA compulsory. | Response to Golaknath Case. |
| **42nd CAA, 1976** | Known as the **"Mini-Constitution"**. Added words **"Socialist, Secular, Integrity"** to Preamble. Inserted **Part IVA (Fundamental Duties - Art 51A)**, added Art 39A (Free legal aid), 43A, 48A (Environment). Transferred 5 subjects from State to Concurrent List (Education, Forests, Weights/Measures, Protection of wild animals/birds, Administration of justice). | Highest-yield amendment in all exams. |
| **44th CAA, 1978** | Reversed major distortions of 42nd CAA. Replaced "Internal Disturbance" with **"Armed Rebellion"** for Art 352. Mandated that **Art 20 and 21 can never be suspended** during Emergency. Deleted Right to Property from Fundamental Rights (now a legal right under Art 300A). | Emergency safeguards and Right to Property. |
| **52nd CAA, 1985** | Added **10th Schedule (Anti-Defection Law)**. Disqualification for defecting MPs and MLAs. | 10th Schedule origin. |
| **61st CAA, 1988** | Reduced the voting age from **21 years to 18 years** for Lok Sabha and State Legislative Assemblies (amended Art 326). | Voting age democratization. |
| **73rd CAA, 1992** | Granted constitutional status to **Panchayati Raj Institutions (PRIs)**. Added **Part IX**, Articles 243–243O, and **11th Schedule (29 subjects)**. Mandatory 3-tier structure; 1/3rd reservation for women. | Rural Local Self-Government. |
| **74th CAA, 1992** | Constitutional status to **Urban Local Bodies (Municipalities)**. Added **Part IXA**, Articles 243P–243ZG, and **12th Schedule (18 subjects)**. | Urban Local Governance. |
| **86th CAA, 2002** | Made Elementary Education a Fundamental Right under **Article 21A** (ages 6–14). Added 11th Fundamental Duty to Art 51A(k). Modified DPSP Art 45 (early childhood care below 6 years). | Right to Education triad. |
| **91st CAA, 2003** | Limited the size of Council of Ministers (including PM/CM) to **maximum 15%** of the total strength of Lok Sabha / State Assembly (minimum 12 ministers for States). Removed split exemption from 10th Schedule. | Cabinet size restriction. |
| **101st CAA, 2016** | Introduced the **Goods and Services Tax (GST)**. Inserted Article 246A (concurrent power for GST) and Article 279A (**GST Council** headed by Union Finance Minister). | One Nation, One Tax. |
| **102nd CAA, 2018** | Granted constitutional status to the **National Commission for Backward Classes (NCBC)** under Article 338B. | NCBC constitutional empowerment. |
| **103rd CAA, 2019** | Provided **10% reservation for Economically Weaker Sections (EWS)** in admissions and public employment (amended Art 15(6) and 16(6)). | EWS quota. |
| **104th CAA, 2020** | Extended reservation of seats for SCs and STs in Lok Sabha and State Assemblies for another 10 years (till 2030); **abolished nomination of Anglo-Indians** to Lok Sabha and Assemblies. | Ended Anglo-Indian nomination. |
| **106th CAA, 2023** | **Nari Shakti Vandan Adhiniyam**: Provides **33% (1/3rd) reservation for women** in Lok Sabha, State Legislative Assemblies, and Delhi Assembly for 15 years. | Women's political reservation. |

#### Milestone Supreme Court Judgments

- **Shankari Prasad (1951) & Sajjan Singh (1965):** Parliament has power to amend any part of the Constitution including Fundamental Rights.
- **Golaknath v. State of Punjab (1967):** SC ruled Fundamental Rights are transcendental and sacrosanct; Parliament *cannot* amend or abridge Part III.
- **Kesavananda Bharati v. State of Kerala (1973):** Landmark 13-judge bench established the **"Basic Structure Doctrine"**. Parliament can amend any part of the Constitution (including Preamble and FRs) under Art 368, but CANNOT alter or destroy its Basic Structure.
- **Indira Nehru Gandhi v. Raj Narain (1975):** Reaffirmed Basic Structure; ruled Rule of Law, Judicial Review, and Free and Fair Elections are basic features.
- **Maneka Gandhi v. Union of India (1978):** Overruled Gopalan case; established that "Procedure established by law" in Art 21 must be **"just, fair, and reasonable"** (incorporating American *Due Process of Law*). Interlinked Articles 14, 19, and 21 ("Golden Triangle").
- **Minerva Mills v. Union of India (1980):** Upheld that the Constitution is founded on the bedrock of **harmony and balance between Fundamental Rights and Directive Principles**. Judicial Review is part of Basic Structure.
- **S.R. Bommai v. Union of India (1994):** Set strict guidelines against arbitrary dismissal of state governments under Article 356 (President's Rule). Ruled that **Secularism and Federalism** are basic features of the Constitution.
- **Indira Sawhney v. Union of India (1992 - Mandal Case):** Upheld 27% OBC reservation, excluded "Creamy Layer", and capped total reservation at **50%**, ruling out reservation in promotions.
- **K.S. Puttaswamy v. Union of India (2017):** Unanimous 9-judge bench ruled that the **Right to Privacy is a Fundamental Right** protected under Article 21 and Part III.
- **Navtej Singh Johar v. Union of India (2018):** Decriminalized Section 377 of IPC regarding consensual homosexual acts between adults.
"""
    },

    # =========================================================================
    # GEOGRAPHY A+ COMPENDIUMS
    # =========================================================================
    {
        "id": "geography-golden-rivers",
        "subject": "Geography",
        "topic": "Master Matrix: Complete Indian River Systems & Tributaries",
        "chapter": "Drainage System of India",
        "source_book": "UPSC High-Yield Mastery Compendium",
        "page": 1,
        "content": """### Master Matrix: Complete Indian River Systems & Tributaries

UPSC tests left-bank vs right-bank tributaries, origins, and hydroelectric projects with extreme frequency.

#### 1. The Indus River System
- **Origin:** Bokhar Chu glacier near Lake Mansarovar in Tibet (known as *Singi Khamban* or Lion's Mouth).
- **Course:** Flows through Ladakh between Ladakh Range and Zaskar Range; enters Pakistan near Chillar.
- **Tributaries in Ladakh/Kashmir:** Shyok (known as River of Death), Gilgit, Zaskar, Hunza, Nubra, Shigar, Gasting, Dras.
- **Panjnad (Five Rivers of Punjab) - North to South Order:**
  1. **Jhelum:** Originates at **Verinag spring** (Pir Panjal). Flows through Wular Lake and Srinagar; forms Indo-Pak boundary. *Projects:* Kishanganga, Uri, Tulbul.
  2. **Chenab (Largest Indus tributary):** Formed by confluence of two streams, **Chandra and Bhaga**, at Tandi near Keylong (Himachal Pradesh). *Projects:* Baglihar, Salal, Dulhasti, Ratle.
  3. **Ravi:** Originates near **Rohtang Pass** in Kullu hills (HP). Flows between Pir Panjal and Dhauladhar. *Projects:* Thein (Ranjit Sagar) Dam, Chamera.
  4. **Beas:** Originates from **Beas Kund** near Rohtang Pass. Entirely within India; merges with Sutlej at **Harike Barrage** (origin of Indira Gandhi Canal). *Project:* Pong Dam.
  5. **Sutlej (Antecedent River):** Originates from **Raksas Tal** near Mansarovar (Tibet - *Langqen Zangbo*). Enters India through **Shipki La Pass**. *Projects:* Bhakra-Nangal Dam, Nathpa Jhakri, Koldam.

#### 2. The Ganga River System
- **Origin:** Rises as **Bhagirathi** from Gaumukh (Gangotri Glacier, Uttarkashi, Uttarakhand).
- **The Panch Prayag Confluences (Top to Bottom):**
  1. **Vishnuprayag:** Alaknanda + **Dhauliganga**
  2. **Nandaprayag:** Alaknanda + **Nandakini**
  3. **Karnaprayag:** Alaknanda + **Pindar**
  4. **Rudraprayag:** Alaknanda + **Mandakini**
  5. **Devprayag:** Alaknanda + **Bhagirathi** $\rightarrow$ Officially becomes the **GANGA**.
- **Left-Bank Tributaries (West to East):**
  - **Ramganga:** Joins near Kannauj (flows through Jim Corbett National Park).
  - **Gomti:** Originates from Gomat Taal (Fulhar Jheel, Pilibhit, UP - Plains origin!). Lucknow is on its banks.
  - **Ghaghara (Karnali):** Originates near Gurla Mandhata (Tibet). Largest tributary by volume; joined by Sarda (Kali) and Rapti (Gorakhpur).
  - **Gandak:** Originates in Nepal Himalayas between Dhaulagiri and Mt. Everest (*Narayani* in Nepal).
  - **Kosi ("Sorrow of Bihar"):** Antecedent river; formed by 7 streams (*Saptakoshi*), major being Arun. Known for shifting its course.
  - **Mahananda:** Last left-bank tributary of Ganga in India, rising from Darjeeling hills.
- **Right-Bank Tributaries:**
  - **Yamuna (Longest tributary):** Rises from **Yamunotri Glacier** (Bandarpunch peak). Joins Ganga at Prayagraj (*Triveni Sangam*).
    - *Yamuna's own tributaries:* Tons (largest), Giri, Hindon (Left Bank); **Chambal, Betwa, Ken, Sind** (Right Bank from Malwa plateau).
      - *Chambal:* Originates at Janapao hills (Vindhyas, Mhow). Famous for badland topography (ravines). Projects: Gandhi Sagar, Rana Pratap Sagar, Jawahar Sagar, Kota Barrage.
      - *Betwa:* Originates in Vindhyan range. Ken-Betwa link project connects it to Ken. Projects: Matatila, Rajghat.
  - **Son:** Originates from **Amarkantak Plateau** (MP). Flows north to join Ganga near Patna. Major tributary: Rihand (Govind Ballabh Pant Sagar).
  - **Damodar ("Sorrow of Bengal"):** Rises in Chhota Nagpur Plateau (Palamu, Jharkhand); flows through a rift valley; joins Hugli. Multi-purpose project: Damodar Valley Corporation (DVC - 1948).

#### 3. The Brahmaputra River System
- **Origin:** Chemayungdung glacier / Angsi glacier east of Lake Mansarovar in Tibet. Known as **Tsangpo** ("The Purifier").
- **Entry into India:** Cuts a deep gorge around **Namcha Barwa** (Syntaxial bend) and enters Arunachal Pradesh as **Siang** or **Dihang**.
- **Confluence:** Joined by **Dibang** and **Lohit** at Sadiya to form the **Brahmaputra**.
- **Course & Features:** Braided channel; creates **Majuli Island** (World's largest inhabited river island).
- **Left-Bank Tributaries:** Dibang, Lohit, Burhi Dihing, Dhansiri.
- **Right-Bank Tributaries:** Subansiri (Gold river - antecedent), Kameng, Manas, Sankosh (boundary between Assam and West Bengal), Teesta (originates from Tso Lhamo/Pahunri glacier, Sikkim).
- **In Bangladesh:** Joined by Teesta $\rightarrow$ called **Jamuna**. Confluence of Jamuna + Ganga (Padma) $\rightarrow$ joined by **Meghna** $\rightarrow$ empties into Bay of Bengal forming **Sundarbans Delta** (world's largest delta).

#### 4. Peninsular River Systems: East-Flowing (Delta Formers)
- **Godavari ("Dakshin Ganga" / "Vridha Ganga" - Longest Peninsular river, 1465 km):**
  - *Origin:* **Trimbakeshwar** near Nashik (Maharashtra) in Western Ghats.
  - *Left-Bank Tributaries:* **Dharshan, Penganga, Wardha, Wainganga** (confluence is **Pranhita** - largest tributary), **Indravati** (Chitrakote Falls - "Niagara of India"), **Sabari**.
  - *Right-Bank Tributaries:* Pravara, Mula, **Manjira** (Nizam Sagar).
- **Krishna (Second largest East-flowing river, 1400 km):**
  - *Origin:* Near **Mahabaleshwar** in Western Ghats (Maharashtra).
  - *Left-Bank Tributaries:* **Bhima** (longest), Dindi, Musi (Hyderabad located on its banks), Munneru, Paleru.
  - *Right-Bank Tributaries:* Venna, Koyna (Koyna Dam), Panchganga, Dudhganga, Ghataprabha, Malaprabha, **Tungabhadra** (formed by Tunga and Bhadra near Kudli).
  - *Major Projects:* Almatti Dam, Srisailam Dam, Nagarjuna Sagar Dam, Prakasam Barrage.
- **Kaveri ("Ganges of the South"):**
  - *Origin:* **Talakaveri** on Brahmagiri Hills in Kodagu (Coorg), Karnataka.
  - *Features:* Perennial river (receives rainfall in both Southwest monsoon in upper basin and Northeast monsoon in lower basin). Forms islands of Srirangapatna and Shivanasamudra. Shivanasamudra Falls (second oldest hydel plant in India).
  - *Left-Bank Tributaries:* Harangi, Hemavati, Shimsha, Arkavathi.
  - *Right-Bank Tributaries:* Lakshmantirtha, Kabbani, Suvarnavati, **Bhavani**, Noyyal, **Amaravati**.
  - *Major Projects:* Krishnaraja Sagara (KRS), Mettur Dam.
- **Mahanadi:**
  - *Origin:* Sihawa mountain in Raipur/Dhamtari district of Chhattisgarh. Flows through Odisha.
  - *Tributaries:* Seonath, Hasdeo, Mand, Ib (Left); Ong, Tel, Jonk (Right).
  - *Major Project:* **Hirakud Dam** (one of the longest earthen dams in the world).

#### 5. Peninsular River Systems: West-Flowing (Rift Valley & Estuary Formers)
- **Why No Deltas?** Hard rocky terrain, steep gradient, short courses, and flow through **Rift Valleys** (graben) caused by faulting.
- **Narmada (Largest West-Flowing River, 1312 km):**
  - *Origin:* **Amarkantak Plateau** (Anuppur, MP).
  - *Course:* Flows in a tectonic rift valley between **Vindhyas (North)** and **Satpuras (South)**.
  - *Features:* Dhuandhar Falls (Marble Rocks gorge at Jabalpur). Empties into Gulf of Khambhat.
  - *Major Projects:* Sardar Sarovar Dam (Gujarat), Indira Sagar, Omkareshwar, Maheshwar.
- **Tapi (Tapti - "Twin of Narmada", 724 km):**
  - *Origin:* **Multai** reserve forest in Betul district of MP on Satpura range.
  - *Course:* Flows in a rift valley between **Satpura Range (North)** and **Ajanta/Satmala Hills (South)**.
  - *Major Projects:* Kakrapar Project, Ukai Dam (Gujarat).
- **Other West-Flowing Rivers:**
  - **Luni:** Originates from Naga Hills (Aravalli, Ajmer). Ephemeral river; lost in the Rann of Kutch (Inland drainage).
  - **Sabarmati:** Originates in Aravalli Range (Udaipur, Rajasthan). Ahmedabad and Gandhinagar on its banks.
  - **Mahi:** Originates in Vindhyan range (MP). **Cuts the Tropic of Cancer TWICE** (Unique UPSC question!).
  - **Goa Rivers:** **Mandovi** (Dudh Sagar Falls; life-line of Goa) and **Zuari**.
  - **Karnataka Rivers:** **Sharavathi** (**Jog / Gersoppa Falls** - highest untiered waterfall in India) and Kalinadi.
  - **Kerala Rivers:** **Periyar** (longest river of Kerala, Idukki Dam on its tributary Cheruthoni), **Bharathapuzha** (Ponnani - second longest), **Pamba** (sacred river associated with Sabarimala).
"""
    },
    {
        "id": "geography-golden-passes-winds",
        "subject": "Geography",
        "topic": "Himalayan Passes, Global Winds & Ocean Currents Matrix",
        "chapter": "Physical & Global Geography",
        "source_book": "UPSC High-Yield Mastery Compendium",
        "page": 1,
        "content": """### Mountain Passes, Planetary Winds & Ocean Currents Matrix

#### 1. Strategic Mountain Passes of India

| Pass Name | State / UT | Mountain Range | Strategic Route Connected / Key Significance |
| :--- | :--- | :--- | :--- |
| **Zoji La** | Ladakh | Great Himalayas | Links **Srinagar to Kargil and Leh** (National Highway 1D). |
| **Khardung La** | Ladakh | Ladakh Range | Gateway to **Shyok and Nubra Valleys**; one of highest motorable passes. |
| **Banihal Pass** | Jammu & Kashmir | Pir Panjal Range | Links **Jammu to Srinagar** (Contains **Jawahar Tunnel** and Qazigund rail tunnel). |
| **Pir Panjal Pass** | Jammu & Kashmir | Pir Panjal Range | Traditional Mughal road connecting Jammu with the Kashmir Valley. |
| **Rohtang Pass** | Himachal Pradesh | Pir Panjal Range | Connects **Kullu Valley with Lahaul and Spiti Valleys**; bypassed by **Atal Tunnel**. |
| **Baralacha La** | Himachal Pradesh | Zaskar Range | Connects **Manali (HP) to Leh (Ladakh)** on the Leh-Manali Highway. |
| **Shipki La** | Himachal Pradesh | Zaskar Range | River **Sutlej enters India** from Tibet through this pass; trade route to Tibet. |
| **Lipulekh Pass** | Uttarakhand | Kumaon Himalayas | Tri-junction of **India, Nepal, and China**; route for **Kailash-Mansarovar Yatra**. |
| **Mana & Niti Pass**| Uttarakhand | Great Himalayas | Connects Uttarakhand with Tibet; ancient pilgrim routes. |
| **Nathu La** | Sikkim | Dongkya Range | Strategic trade route between **India (Sikkim) and Tibet (Chumbi Valley)**; reopened in 2006. |
| **Jelep La** | Sikkim | Great Himalayas | Connects Sikkim with Lhasa via Chumbi Valley (Tista river cuts this pass). |
| **Bomdi La** | Arunachal Pradesh | Greater Himalayas | Connects **Arunachal Pradesh with Lhasa (Tibet)**; near Tawang Monastery. |
| **Diphu Pass** | Arunachal Pradesh | Mishmi Hills | Strategic tri-junction of **India, China, and Myanmar** on the MacMahon line. |
| **Thal Ghat (Kasara)**| Maharashtra | Western Ghats (Sahyadri)| Connects **Mumbai to Nashik and Kolkata** (Central Railway / NH-3). |
| **Bhor Ghat** | Maharashtra | Western Ghats (Sahyadri)| Connects **Mumbai to Pune and Chennai** (Mumbai-Pune Expressway / NH-4). |
| **Palghat Gap** | Kerala / Tamil Nadu | Nilgiri & Anaimalai Hills| Major break in Western Ghats connecting **Palakkad (Kerala) to Coimbatore (TN)**. |
| **Shencottah Gap** | Kerala / Tamil Nadu | Cardamom & Agasthyamalai| Connects **Kollam (Kerala) to Madurai (TN)**. |

#### 2. Global Local Winds Matrix

| Wind Name | Nature | Region / Country | Exam Focus & Special Nicknames |
| :--- | :--- | :--- | :--- |
| **Chinook** | Warm, Dry (Föhn-type) | Rocky Mountains (USA & Canada)| Known as **"The Snow Eater"**; melts snow rapidly, opening winter pastures. |
| **Föhn (Foehn)**| Warm, Dry | Alps (Switzerland, Austria, Germany)| Leeward side descending wind; helps in grape ripening. |
| **Harmattan** | Hot, Extremely Dry, Dusty | Sahara Desert $\rightarrow$ Gulf of Guinea (West Africa)| Known as **"The Doctor"**; provides relief from oppressive humid equatorial climate. |
| **Sirocco** | Hot, Dry, Dust-laden | Sahara Desert across Mediterranean $\rightarrow$ S. Italy/Spain| Picks up moisture over Mediterranean; causes red dust rain (**"Blood Rain"** in Italy). |
| **Mistral** | Extremely Cold, Dry | Alps down Rhône Valley $\rightarrow$ Gulf of Lion (Mediterranean)| Violent cold winter wind causing severe frost in Southern France. |
| **Bora** | Cold, Dry, Gusty | Dinaric Alps down to Adriatic Sea (Balkans / Italy)| Sub-zero katabatic wind blowing over northeastern Italy in winter. |
| **Loo** | Extremely Hot, Scorching | Indo-Gangetic Plains (Northern India & Pakistan)| Blows during May-June afternoons; causes heat strokes. |
| **Blizzard** | Extremely Cold, Snow-laden | Canada, Northern USA, Siberia| High-velocity blizzard reducing visibility to near zero. |
| **Pampero** | Cold, Dry polar squall | Pampas of Argentina and Uruguay| Accompanied by thunderstorms and sudden temperature plunge. |
| **Brickfielder**| Hot, Dry, Dusty | Southern Australia | Precedes a cold front, bringing desert heat to Victoria/New South Wales. |

#### 3. Ocean Currents & Desert Linkages

- **General Rule:** Cold currents flow on the **West coast of continents** in subtropical latitudes ($20^\circ - 30^\circ$ N/S), causing desiccating effects (stability and low humidity) that create the world's major **tropical coastal deserts**.

| Ocean Basin | Warm Current | Cold Current | Linked Coastal Desert / Major Phenomenon |
| :--- | :--- | :--- | :--- |
| **North Atlantic** | **Gulf Stream** (continues as North Atlantic Drift, keeps NW European ports ice-free in winter), Florida Current, Antilles Current. | **Canary Current** (flows south along West Africa). **Labrador Current** (flows from Arctic). | Canary Current causes **Sahara Desert** aridity. Confluence of Gulf Stream & Labrador Current at **Grand Banks (Newfoundland)** creates world-famous fishing grounds & dense fog! |
| **South Atlantic** | **Brazil Current** (flows south along Brazil coast). | **Benguela Current** (flows north along SW African coast), **Falkland Current** (cold current from south). | Benguela Current is the direct cause of the hyper-arid **Namib Desert & Kalahari Desert**! |
| **North Pacific** | **Kuroshio (Japan) Current** (warm, deep blue, analogous to Gulf Stream), North Pacific Current, Alaskan Current. | **Oyashio (Kuril) Current** (cold subarctic from Bering Strait), **California Current** (flows south along US West Coast). | Confluence of Kuroshio & Oyashio creates rich fishing grounds around Japan. California Current drives aridity in **Mojave and Sonoran Deserts**. |
| **South Pacific** | **East Australian Current** (flows south along Eastern Australia - popularized in *Finding Nemo*!). | **Humboldt (Peru) Current** (flows north along Chile/Peru coast). | Humboldt current creates the **Atacama Desert** (driest non-polar desert on Earth!). Weakening of Humboldt current leads to **El Niño**. |
| **Indian Ocean** | **Agulhas Current** (warm, along Mozambique/South Africa), Mozambique Current. | **West Australian Current** (cold, along West coast of Australia). | West Australian current causes the **Great Australian Desert** (Gibson, Simpson, Victoria). |
"""
    },

    # =========================================================================
    # HISTORY A+ COMPENDIUMS
    # =========================================================================
    {
        "id": "history-golden-freedom-struggle",
        "subject": "History",
        "topic": "The Master Freedom Struggle Timeline & Milestone Movements (1857-1947)",
        "chapter": "Modern Indian History",
        "source_book": "UPSC High-Yield Mastery Compendium",
        "page": 1,
        "content": """### The Master Freedom Struggle Timeline & Milestone Movements (1857–1947)

Over 70% of UPSC History questions in CDS, NDA, and CAPF come from this Modern Indian History corridor.

#### 1. Chronological Master Timeline

| Year | Milestone Event / Movement | Key Leaders Involved | Core Outcome / Significance |
| :--- | :--- | :--- | :--- |
| **1857** | **The Great Revolt of 1857** (Sepoy Mutiny) | Mangal Pandey, Bahadur Shah Zafar, Nana Saheb (Kanpur), Begum Hazrat Mahal (Lucknow), Rani Lakshmibai (Jhansi), Kunwar Singh (Arrah/Bihar), Bakht Khan (Delhi). | Ended British East India Company rule; British Crown took direct control via **Government of India Act 1858** (Queen's Proclamation). |
| **1885** | **Formation of Indian National Congress** | Allan Octavian Hume (Founder), W.C. Bonnerjee (1st President). | 72 delegates met at Gokuldas Tejpal Sanskrit College, Bombay. Moderate Phase began. |
| **1905** | **Partition of Bengal & Swadeshi Movement** | Lord Curzon (Viceroy), Surendranath Banerjee, Rabindranath Tagore, Lal-Bal-Pal, Aurobindo Ghosh. | Divided Bengal on communal lines (16 Oct 1905 observed as Day of Mourning/Raksha Bandhan). Triggered Swadeshi & Boycott movement; revival of indigenous industry. |
| **1906** | **Formation of All India Muslim League** | Nawab Salimullah (Dacca), Aga Khan, Mohsin-ul-Mulk. | Formed at Dacca to safeguard Muslim political interests and loyalty to British. |
| **1907** | **Surat Split of Congress** | Rash Behari Ghosh (President), Moderates (Gokhale) vs Extremists (Tilak, Bipin Chandra Pal). | Congress split over leadership and extending boycott outside Bengal. Extremists expelled. |
| **1909** | **Morley-Minto Reforms (Indian Councils Act)**| Lord Morley (Secretary of State), Lord Minto (Viceroy - "Father of Communal Electorate"). | Introduced **Separate Electorates for Muslims** (Legalized communalism). |
| **1911** | **Annulment of Partition of Bengal** | Lord Hardinge (Viceroy), King George V (Delhi Durbar). | Partition of Bengal revoked; Capital shifted from Calcutta to Delhi. |
| **1913** | **Formation of Ghadar Party** | Lala Har Dayal, Sohan Singh Bhakna, Kartar Singh Sarabha. | Headquarters at **Yugantar Ashram, San Francisco, USA**. Aimed at armed overthrow of British rule. |
| **1914** | **Komagata Maru Incident** | Gurdit Singh (chartered Japanese ship). | Ship with Indian passengers turned back from Vancouver, Canada; firing at Budge Budge (Calcutta). |
| **1916** | **Home Rule League Movement** | Bal Gangadhar Tilak (Pune/Maharashtra/Karnataka) & Annie Besant (Madras/All India). | Demanded Self-Government within British Empire. Tilak: *"Swaraj is my birthright and I shall have it!"* |
| **1916** | **Lucknow Pact (Congress-League Accord)** | A.C. Majumdar (INC President), Bal Gangadhar Tilak, M.A. Jinnah. | Reunion of Moderates and Extremists; Congress accepted separate electorates for Muslims. |
| **1917** | **Champaran Satyagraha (Bihar)** | **Mahatma Gandhi (First Civil Disobedience)**, Rajkumar Shukla, Rajendra Prasad, J.B. Kripalani. | Gandhi's first satyagraha in India. Protest against *Tinkathia system* (forced indigo cultivation on 3/20th land). European planters agreed to refund 25% money. |
| **1918** | **Ahmedabad Mill Strike (Gujarat)** | **Mahatma Gandhi (First Hunger Strike)**, Anusuya Sarabhai. | Dispute between mill owners and workers over Plague Bonus. Gandhi secured 35% wage hike. |
| **1918** | **Kheda Satyagraha (Gujarat)** | **Mahatma Gandhi (First Non-Cooperation)**, Sardar Vallabhbhai Patel, Indulal Yagnik. | Crop failure; farmers demanded revenue remission under Land Revenue Code. Government suspended tax. |
| **1919** | **Rowlatt Act & Jallianwala Bagh Massacre** | Sir Sidney Rowlatt, General Dyer, Dr. Saifuddin Kitchlew, Dr. Satyapal, Rabindranath Tagore. | Black Act permitted arrest without trial. On **13 April 1919 (Baisakhi)**, Dyer fired on unarmed crowd at Amritsar. Tagore renounced Knighthood; Gandhi returned *Kaiser-i-Hind*. |
| **1919** | **Montagu-Chelmsford Reforms (GoI Act 1919)** | Edwin Montagu (Sec of State), Lord Chelmsford (Viceroy). | Introduced **Dyarchy in Provinces** (Transferred vs Reserved subjects); Bicameral legislature at Centre. |
| **1920** | **Khilafat & Non-Cooperation Movement** | Mahatma Gandhi, Ali Brothers (Shaukat & Mohammad Ali), C.R. Das, Motilal Nehru. | Combined redressal of Punjab wrongs, Khilafat restoration, and Swaraj. Boycott of titles, schools, courts, and foreign cloth. Special Session at Calcutta (Lala Lajpat Rai) and Nagpur (C. Vijaraghavachariar). |
| **1922** | **Chauri Chaura Incident & Suspension** | Peasants of Chauri Chaura (Gorakhpur, UP). | Violent crowd burnt a police station killing 22 policemen on 4 Feb 1922. Gandhi abruptly withdrew Non-Cooperation on 12 Feb 1922 (**Bardoli Resolution**). |
| **1923** | **Formation of Swaraj Party** | C.R. Das (President) and Motilal Nehru (Secretary). | Formed by "Pro-Changers" to enter legislative councils and wreck government from within. |
| **1924** | **Belgaum Session of Congress** | **Mahatma Gandhi (His ONLY term as INC President)**. | Bridged gulf between Swarajists and No-Changers. |
| **1925** | **Kakori Train Action (Conspiracy)** | Ram Prasad Bismil, Ashfaqulla Khan, Roshan Singh, Rajendra Lahiri (HRA). | Looted government railway cash to fund revolutionary activities. Four leaders hanged. |
| **1927** | **Simon Commission Appointment** | Sir John Simon (7-member British Parliamentary group). | All-white commission appointed to review 1919 Act. Boycotted with slogans *"Simon Go Back"*. Lala Lajpat Rai died following lathi charge at Lahore (1928). |
| **1928** | **Nehru Report** | Motilal Nehru (Chairman), Tej Bahadur Sapru. | First major Indian effort to draft a Constitution. Demanded **Dominion Status**, Fundamental Rights, joint electorates with reservation for minorities. Rejected by Jinnah (14 Points). |
| **1929** | **Lahore Session & Purna Swaraj** | **Jawaharlal Nehru (President)**. | Declared **"Purna Swaraj" (Complete Independence)** as Congress objective. Tricolour hoisted on Ravi river on 31 Dec 1929. Decided to observe **26 January 1930 as First Independence Day**. |
| **1930** | **Dandi March & Civil Disobedience Movement**| Mahatma Gandhi (with 78 chosen followers). | Marched 240 miles from Sabarmati Ashram to Dandi (12 March to 6 April 1930). Broke Salt Law. Swept across India (C. Rajagopalachari in Tamil Nadu, K. Kelappan in Malabar, Khan Abdul Ghaffar Khan's *Khudai Khidmatgars / Red Shirts* in NWFP, Sarojini Naidu at Dharasana). |
| **1931** | **Gandhi-Irwin Pact & Karachi Session** | Mahatma Gandhi, Lord Irwin, Sardar Patel (Karachi President). | Pact signed on 5 March 1931: Congress suspended CDM and agreed to attend 2nd Round Table Conference; British released political prisoners. Karachi Session endorsed pact and passed historic resolutions on **Fundamental Rights** and **National Economic Programme**. |
| **1931** | **Second Round Table Conference (London)** | Mahatma Gandhi (Sole representative of INC), B.R. Ambedkar, Sarojini Naidu. | Ended in failure due to dispute over separate electorates for Depressed Classes. |
| **1932** | **Communal Award & Poona Pact** | Ramsay MacDonald (British PM), Mahatma Gandhi, Dr. B.R. Ambedkar. | Award granted separate electorates to Depressed Classes. Gandhi fasted unto death in Yerwada jail. **Poona Pact (Sept 1932)** abandoned separate electorates in favour of **Reserved Seats** for Depressed Classes in general electorates. |
| **1935** | **Government of India Act 1935** | British Parliament. | Provided for All-India Federation (never implemented); **Abolished Dyarchy in Provinces** and introduced **Provincial Autonomy**; introduced Dyarchy at Centre; created Federal Court (precursor to SC) and Reserve Bank of India. |
| **1939** | **Tripuri Crisis & Resignation of Subhas Bose** | Subhas Chandra Bose, Pattabhi Sitaramayya, Mahatma Gandhi. | Bose defeated Gandhi's candidate Sitaramayya for INC Presidency. Due to ideological deadlock with Working Committee, Bose resigned and formed **Forward Bloc** (1939). Rajendra Prasad became President. |
| **1940** | **August Offer & Individual Satyagraha** | Lord Linlithgow (Viceroy), Vinoba Bhave (1st Satyagrahi), Jawaharlal Nehru (2nd Satyagrahi). | Offer promised Dominion status after war; rejected by INC and League. Gandhi launched non-violent Individual Satyagraha. |
| **1942** | **Cripps Mission** | Sir Stafford Cripps. | Offered Dominion status and Constituent Assembly *after* WWII, with right of provinces to secede. Gandhi called it a *"Post-dated cheque on a crashing bank"*. |
| **1942** | **Quit India Movement ("August Kranti")** | Mahatma Gandhi, Aruna Asaf Ali (hoisted flag at Gowalia Tank, Bombay), Usha Mehta (Underground Radio). | Passed on 8 Aug 1942 at Gowalia Tank. Gandhi gave call: **"Do or Die"**. Entire top leadership arrested under *Operation Zero Hour*. Spontaneous mass uprisings, parallel governments (*Prati Sarkar* in Satara, *Jatiya Sarkar* in Tamluk, Ballia under Chittu Pandey). |
| **1945** | **Wavell Plan & Simla Conference** | Lord Wavell. | Plan to reconstitute Viceroy's Executive Council with equal Hindu-Muslim representation. Failed due to Jinnah's veto that Muslim League alone could nominate Muslim members. |
| **1945** | **INA Trials (Red Fort Trials)** | Prem Sahgal, Gurbaksh Singh Dhillon, Shah Nawaz Khan; Defence lawyers: Bhulabhai Desai, Tej Bahadur Sapru, Nehru. | Trial of Indian National Army officers at Red Fort triggered massive nationwide protests and naval solidarity. |
| **1946** | **Royal Indian Navy (RIN) Mutiny** | Ratings of HMIS Talwar (B.C. Dutt). | Naval ratings went on strike in Bombay against racial discrimination, bad food, and INA trials. Ended on Patel and Jinnah's intervention. |
| **1946** | **Cabinet Mission Plan** | Pethick-Lawrence (Sec of State), Stafford Cripps, A.V. Alexander. | Rejected separate Pakistan; proposed 3-tier Union of India (Groups A, B, C); formed **Constituent Assembly** to frame Constitution; Interim Government formed under Nehru. |
| **1947** | **Mountbatten Plan (3rd June Plan)** | Lord Mountbatten. | Plan for **Partition of India into India and Pakistan**. Enacted as **Indian Independence Act 1947**; British rule ended on **15 August 1947**. |
"""
    },
    {
        "id": "history-golden-councils-reforms",
        "subject": "History",
        "topic": "The 4 Buddhist Councils, Socio-Religious Movements & Landmark INC Sessions",
        "chapter": "Ancient & Modern Master Tables",
        "source_book": "UPSC High-Yield Mastery Compendium",
        "page": 1,
        "content": """### The 4 Buddhist Councils, Socio-Religious Movements & Landmark INC Sessions

#### 1. The 4 Buddhist Councils Master Matrix

| Council | Year & Venue | Patron King & Dynasty | Council President | Canonical Outcome & Significance |
| :--- | :--- | :--- | :--- | :--- |
| **1st Council** | **483 BCE** at **Sattapanni Cave, Rajgriha** | **Ajatashatru** (Haryanka Dynasty) | **Mahakassapa** | Held right after Buddha's Mahaparinirvana. Compilation of Buddhist teachings into two Pitakas: **Vinaya Pitaka** (Rules of monastic discipline - recited by Upali) and **Sutta Pitaka** (Teachings/Sermons of Buddha - recited by Ananda). |
| **2nd Council** | **383 BCE** at **Vaishali** | **Kalasoka** (Shishunaga Dynasty) | **Sabakami** | Split in the Sangha over monastic practices into **Theravadins / Sthaviravadins** (Orthodox elders) and **Mahasanghikas** (Liberal majority). |
| **3rd Council** | **250 BCE** at **Pataliputra** | **Emperor Ashoka** (Mauryan Dynasty) | **Moggaliputta Tissa** | Compilation of the third Pitaka: **Abhidhamma Pitaka** (Philosophical analysis of Dhamma). Decisions made to dispatch Buddhist missionaries abroad (Sri Lanka, Burma, Greece). |
| **4th Council** | **72 CE** at **Kundalvana, Kashmir** | **Kanishka** (Kushan Dynasty) | **Vasumitra** (Vice-President: **Ashvaghosha**) | Definitive division of Buddhism into **Hinayana** ("Lesser Vehicle" / Theravada) and **Mahayana** ("Great Vehicle" - idol worship of Buddha and Bodhisattvas). Sanskrit adopted as canonical language. Mahavibhasha shastra composed. |

#### 2. Socio-Religious Reform Movements Matrix

| Organisation / Movement | Year & Place | Founder | Key Publications & Journals | Core Philosophy / Major Reform |
| :--- | :--- | :--- | :--- | :--- |
| **Brahmo Samaj** (Originally Atmiya Sabha, 1814) | **1828**, Calcutta | **Raja Ram Mohan Roy** ("Father of Modern India") | *Sambad Kaumudi*, *Mirat-ul-Akbar*, *Gift to Monotheists*. | Monotheism; crusade against **Sati** (led to Regulation XVII of 1829 by Bentinck), idol worship, child marriage, and caste oppression. Later led by Debendranath Tagore (Tattvabodhini Sabha) and Keshab Chandra Sen. |
| **Young Bengal Movement** | Late 1820s, Calcutta | **Henry Louis Vivian Derozio** | *Hesperus*, *The Enquirer*. | Radical free-thinking movement inspired by French Revolution; fiercely attacked decadent traditions. |
| **Prarthana Samaj** | **1867**, Bombay | **Dr. Atmaram Pandurang** (later energized by **M.G. Ranade** and R.G. Bhandarkar) | *Subodh Patrika*. | Focus on social reform: widow remarriage, upliftment of women, eradication of caste barriers. |
| **Satyashodhak Samaj** (Truth Seekers' Society)| **1873**, Maharashtra | **Jyotirao Phule** (conferred title *Mahatma*) | *Gulamgiri* ("Slavery"), *Shetkaryacha Asud*. | Crusade against Brahminical supremacy and caste exploitation; pioneered female education (opened first girls' school in Pune in 1848 with wife **Savitribai Phule**). |
| **Arya Samaj** | **1875**, Bombay | **Swami Dayanand Saraswati** (Original name: Mool Shankar) | *Satyarth Prakash* ("The Light of Truth"). | Slogan: **"Go Back to the Vedas"**. Rejected idol worship, polytheism, and hereditary caste; initiated **Shuddhi Movement** (reconversion) and DAV schools. |
| **Theosophical Society** | **1875**, New York (Shifted to **Adyar, Madras** in 1882) | **Madam H.P. Blavatsky** & **Colonel H.S. Olcott** (later led by **Annie Besant**) | *New India*, *Commonweal* (by Annie Besant). | Revival of Hindu, Buddhist, and Zoroastrian philosophies; doctrine of Karma and Reincarnation. Annie Besant established Central Hindu College at Varanasi (1898 - later BHU). |
| **Ramakrishna Mission** | **1897**, Belur (near Calcutta) | **Swami Vivekananda** (Narendranath Datta) | *Prabuddha Bharata* (English), *Udbodhana* (Bengali). | Synthesized Vedantic spirituality with selfless service to mankind (*"Service to Jiva is Service to Shiva"*). World-famous speech at World Parliament of Religions, Chicago (1893). |
| **Aligarh Movement** | 1875, Aligarh | **Sir Syed Ahmed Khan** | *Tahzib-ul-Akhlaq* ("Mohammedan Social Reformer"). | Founded **Muhammadan Anglo-Oriental College (1875)** (which became Aligarh Muslim University in 1920); promoted modern scientific Western education among Indian Muslims. |
| **Self-Respect Movement** | **1925**, Tamil Nadu | **E.V. Ramasamy Naicker (Periyar)** | *Kudi Arasu*. | Anti-Brahmin, anti-caste movement advocating self-respect marriages without priests and radical rationalism. |

#### 3. Landmark Indian National Congress (INC) Sessions Matrix

| Year | Venue | President | Historical Significance & Exam Questions |
| :--- | :--- | :--- | :--- |
| **1885** | **Bombay** | W.C. Bonnerjee | First session; 72 delegates attended at Gokuldas Tejpal Sanskrit College. |
| **1886** | **Calcutta** | Dadabhai Naoroji | First non-Hindu President; National Conference merged with INC. |
| **1887** | **Madras** | Badruddin Tyabji | **First Muslim President** of Congress; appeal to Muslims to join INC. |
| **1888** | **Allahabad** | George Yule | **First British / European President** of Congress. |
| **1896** | **Calcutta** | Rahimtulla M. Sayani | National Song **"Vande Mataram"** sung for the first time by Rabindranath Tagore. |
| **1905** | **Benaras** | Gopal Krishna Gokhale | Formal proclamation of **Swadeshi Movement** against Bengal Partition. |
| **1906** | **Calcutta** | Dadabhai Naoroji | Word **"Swaraj"** (Self-Government) used for the first time as Congress goal. |
| **1907** | **Surat** | Rash Behari Ghosh | **The Surat Split**: Historic ideological rupture between Moderates and Extremists. |
| **1911** | **Calcutta** | Bishan Narayan Dar | National Anthem **"Jana Gana Mana"** sung for the first time. |
| **1916** | **Lucknow** | Ambica Charan Majumdar | **The Lucknow Pact**: Reunion of Moderates and Extremists; Joint agreement with Muslim League. |
| **1917** | **Calcutta** | **Annie Besant** | **First Woman President** of Congress. |
| **1920** | **Nagpur** | C. Vijayaraghavachariar | New Congress Constitution adopted; linguistic provincial committees formed; Non-Cooperation ratified. |
| **1924** | **Belgaum** | **Mahatma Gandhi** | **The ONLY session ever presided over by Mahatma Gandhi!** |
| **1925** | **Kanpur** | **Sarojini Naidu** | **First Indian Woman President** of Congress. |
| **1929** | **Lahore** | **Jawaharlal Nehru** | **Purna Swaraj (Complete Independence) Resolution passed**; 26 Jan designated Independence Day. |
| **1931** | **Karachi** | **Sardar Vallabhbhai Patel** | Passed historic resolutions on **Fundamental Rights** and **National Economic Programme**; Gandhi-Irwin Pact endorsed. |
| **1937** | **Faizpur** | Jawaharlal Nehru | **First Congress session held in a rural village**. |
| **1938** | **Haripura** | Subhas Chandra Bose | National Planning Committee set up under Jawaharlal Nehru. |
| **1939** | **Tripuri** | Subhas Chandra Bose | Bose re-elected by defeating Gandhi's nominee Pattabhi Sitaramayya; resigned due to working committee crisis; Rajendra Prasad succeeded. |
| **1946** | **Meerut** | J.B. Kripalani | President of Congress at the time of **Indian Independence in 1947**. |
"""
    }
]

def main():
    print("Loading notes_database.json...")
    with open(NOTES_DB, 'r', encoding='utf-8') as f:
        notes = json.load(f)

    existing_ids = {n.get('id') for n in notes}
    added_count = 0

    for gn in golden_notes:
        if gn['id'] not in existing_ids:
            notes.append(gn)
            added_count += 1
            print(f"Added Golden Compendium: [{gn['subject']}] {gn['topic']}")
        else:
            # Update existing note with fresh comprehensive content
            for i, n in enumerate(notes):
                if n.get('id') == gn['id']:
                    notes[i] = gn
                    print(f"Updated existing Golden Compendium: [{gn['subject']}] {gn['topic']}")
                    break

    with open(NOTES_DB, 'w', encoding='utf-8') as f:
        json.dump(notes, f, indent=2, ensure_ascii=False)

    print(f"\nSuccessfully processed {len(golden_notes)} Golden Modules ({added_count} newly added).")
    print(f"Total notes in notes_database.json: {len(notes)}")

    # Now compile into ai_generated_notes.js and public/ai_generated_notes.js
    print("\nRunning generate_frontend_notes.run()...")
    import generate_frontend_notes
    generate_frontend_notes.run()
    print("Frontend notes compilation complete!")

if __name__ == "__main__":
    main()
