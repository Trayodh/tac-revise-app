import os

os.makedirs("evolved_notes/polity", exist_ok=True)

notes_data = {
    "judiciary.md": """# Integrated Judiciary: Supreme Court & High Courts

---

## **1. The Supreme Court of India (Articles 124-147)**

India has a single, unified, integrated judicial system (borrowed from the Govt of India Act 1935).

*   **Establishment:** Jan 28, 1950. Replaced the Federal Court of India.
*   **Composition:** Currently, 34 Judges (1 Chief Justice of India + 33 other judges).
*   **Qualifications (Art 124):**
    *   Citizen of India.
    *   Judge of a High Court for 5 years OR Advocate of a High Court for 10 years OR a distinguished jurist in the opinion of the President.
    *   *No minimum age prescribed.*
*   **Appointment:** Appointed by the President. (Collegium system applies).
*   **Tenure:** Holds office until the age of **65 years**.
*   **Removal (Impeachment):** Can be removed by the President on the recommendation of Parliament. Requires a **Special Majority** in both houses. Grounds: *Proved misbehaviour or incapacity*.

### **1.1. Jurisdiction and Powers of Supreme Court**
1.  **Original Jurisdiction (Art 131):** Settles disputes between Centre vs State, or State vs State. (Exclusive to SC).
2.  **Writ Jurisdiction (Art 32):** To enforce Fundamental Rights. (Not exclusive; HCs also have it under 226).
3.  **Appellate Jurisdiction (Art 132-136):** Highest court of appeal in constitutional, civil, and criminal matters. (Art 136 - Special Leave Petition).
4.  **Advisory Jurisdiction (Art 143):** The President can seek the SC's opinion on matters of public importance or pre-constitution treaties. (Opinion is NOT binding on the President).
5.  **Court of Record (Art 129):** Judgments are recognized as legal precedents, and it has the power to punish for its contempt.

---

## **2. The High Courts (Articles 214-231)**

The highest judicial court in a state. Currently, there are 25 High Courts in India.

*   **Qualifications:** Citizen of India, held a judicial office in India for 10 years OR advocate of an HC for 10 years.
*   **Appointment:** Appointed by the President (after consulting CJI and State Governor).
*   **Tenure:** Holds office until the age of **62 years**.
*   **Removal:** Same process as a Supreme Court judge.

### **2.1. Jurisdiction of High Court**
*   **Writ Jurisdiction (Art 226):** Can issue writs for the enforcement of Fundamental Rights **AND for any other purpose** (legal rights).
    > [!IMPORTANT]
    > The Writ Jurisdiction of a High Court is **WIDER** than that of the Supreme Court, as the SC can only issue writs for Fundamental Rights.

---

## **Visual Summary**

```mermaid
mindmap
  root((Judiciary))
    Supreme Court
      Age Limit: 65 years
      Appointed by: President
      Removal: Special Majority
      Original Juris (131)
      Advisory Juris (143)
    High Courts
      Age Limit: 62 years
      Appointed by: President
      Writ Juris (226) -> Wider than SC
    Key Concepts
      Integrated System
      Collegium System
      Independence (Salaries from Consolidated Fund)
```
""",
    "panchayati-raj.md": """# Local Self-Government & Panchayati Raj

---

## **1. Evolution of Panchayati Raj Institutions (PRI)**

The directive to organize village panchayats was given in **Article 40** (Gandhian Principle).
To implement this, various committees were formed:
*   **Balwant Rai Mehta Committee (1957):** Recommended a **3-tier system** (Gram Panchayat at village, Panchayat Samiti at block, Zila Parishad at district level). First established in Nagaur, Rajasthan (1959).
*   **Ashok Mehta Committee (1977):** Recommended a 2-tier system.
*   **L.M. Singhvi Committee (1986):** Recommended Constitutional status for PRIs.

---

## **2. The 73rd Amendment Act, 1992 (Rural Local Govt)**

Added a new **Part IX** to the Constitution entitled "The Panchayats" (Articles 243 to 243O) and a new **11th Schedule** containing 29 functional items.

### **2.1. Salient Features**
*   **Gram Sabha:** The foundation of the system. A body consisting of all registered voters in the village.
*   **Three-Tier System:** Village, Intermediate (Block), and District levels. (Intermediate tier may not be constituted in states with a population < 20 lakhs).
*   **Election:** Direct elections for all seats at all three levels. (Chairpersons at intermediate and district levels elected indirectly). Minimum age to contest: **21 years**.
*   **Reservation of Seats:**
    *   SCs and STs: Reserved in proportion to their population.
    *   **Women:** Not less than **1/3rd (33%)** of the total seats and offices of chairpersons must be reserved for women.
*   **Duration:** Fixed term of **5 years**. Elections must be held before the expiry of the term, or within 6 months if dissolved early.
*   **State Election Commission (SEC):** Created to conduct elections to panchayats.
*   **State Finance Commission (SFC):** Constituted every 5 years to review the financial position of panchayats.

---

## **3. The 74th Amendment Act, 1992 (Urban Local Govt)**

Added a new **Part IX-A** entitled "The Municipalities" (Articles 243P to 243ZG) and a new **12th Schedule** containing 18 functional items.

### **3.1. Types of Municipalities**
1.  **Nagar Panchayat:** For a transitional area (rural to urban).
2.  **Municipal Council:** For a smaller urban area.
3.  **Municipal Corporation:** For a larger urban area (e.g., Delhi, Mumbai).

*Other features (reservation, 5-year term, SEC, SFC, 21-year age limit) mirror the 73rd Amendment.*

---

## **Visual Summary**

```mermaid
mindmap
  root((Local Self Govt))
    Committees
      Balwant Rai Mehta (3-tier)
      Ashok Mehta (2-tier)
      L.M. Singhvi (Const. Status)
    73rd CAA (Rural)
      Part IX, 11th Schedule
      29 Subjects
      Gram Sabha
      3-tier structure
    74th CAA (Urban)
      Part IX-A, 12th Schedule
      18 Subjects
      Nagar, Council, Corporation
    Common Features
      Age to contest: 21
      Women Reservation: 1/3 (33%)
      5 year term
      State Election Commission
```
""",
    "amendments-parts.md": """# Important Constitutional Amendments & Parts

---

## **1. Important Constitutional Amendments**

Article 368 in Part XX deals with the power of Parliament to amend the Constitution.
*(Note: A constitutional amendment bill can be introduced in either house, requires a special majority, and the President CANNOT veto it - made mandatory by 24th CAA 1971).*

| Amendment | Year | Major Changes / Additions |
| :--- | :--- | :--- |
| **1st** | 1951 | Added **9th Schedule** to protect land reform laws from judicial review. |
| **7th** | 1956 | Reorganized states on a linguistic basis; introduced Zonal Councils. |
| **21st** | 1967 | Included **Sindhi** as the 15th language in the 8th Schedule. |
| **42nd** | 1976 | **"Mini-Constitution"**. Added *Socialist, Secular, Integrity* to Preamble. Added **Fundamental Duties** (Part IVA). Made President bound by Cabinet advice. |
| **44th** | 1978 | Restored democratic norms post-Emergency. Deleted Right to Property from FRs (made legal right Art 300A). Changed "internal disturbance" to "armed rebellion" for National Emergency. |
| **52nd** | 1985 | Added **10th Schedule** (Anti-Defection Law). |
| **61st** | 1989 | Reduced the voting age from **21 to 18 years**. |
| **73rd & 74th** | 1992 | Gave constitutional status to **Panchayats** (Part IX, 11th Sch) and **Municipalities** (Part IXA, 12th Sch). |
| **86th** | 2002 | Made **Right to Education** a Fundamental Right (Art 21A) for children 6-14 years. Added 11th Fundamental Duty. |
| **91st** | 2003 | Capped the size of the Council of Ministers to **15%** of the Lok Sabha / State Assembly. |
| **97th** | 2011 | Gave constitutional protection to **Co-operative Societies** (Art 19, Art 43B, Part IXB). |
| **100th** | 2015 | Land Boundary Agreement between **India and Bangladesh**. |
| **101st** | 2016 | Introduction of **Goods and Services Tax (GST)**. |
| **102nd** | 2018 | Constitutional status to **National Commission for Backward Classes (NCBC)**. |
| **103rd** | 2019 | **10% EWS Quota** (Economically Weaker Sections). |
| **104th** | 2020 | Extended SC/ST quota in LS/Assemblies by 10 years; **Abolished Anglo-Indian reserved seats**. |
| **106th** | 2023 | **Women's Reservation Bill (Nari Shakti Vandan Adhiniyam):** 33% reservation for women in Lok Sabha and State Assemblies. |

---

## **2. Important Parts of the Constitution**

Originally 22 parts; presently 25 parts.

*   **Part I:** Union and its Territory (Art 1-4)
*   **Part II:** Citizenship (Art 5-11)
*   **Part III:** Fundamental Rights (Art 12-35)
*   **Part IV:** Directive Principles of State Policy (Art 36-51)
*   **Part IVA:** Fundamental Duties (Art 51A)
*   **Part V:** The Union Government (President, Parliament, SC, CAG) (Art 52-151)
*   **Part VI:** The State Government (Governor, State Legis, HC) (Art 152-237)
*   *(Part VII deleted)*
*   **Part VIII:** Union Territories (Art 239-242)
*   **Part IX:** Panchayats (Art 243)
*   **Part IXA:** Municipalities (Art 243)
*   **Part IXB:** Co-operative Societies (Art 243)
*   **Part X:** Scheduled and Tribal Areas (Art 244)
*   **Part XI:** Centre-State Relations (Art 245-263)
*   **Part XII:** Finance, Property (Art 264-300A)
*   **Part XIV:** Services under Union & States (UPSC) (Art 308-323)
*   **Part XIVA:** Tribunals (Art 323A-323B)
*   **Part XV:** Elections (Art 324-329A)
*   **Part XVII:** Official Language (Art 343-351)
*   **Part XVIII:** Emergency Provisions (Art 352-360)
*   **Part XX:** Amendment of the Constitution (Art 368)

> [!TIP]
> **EXAM TRAP:** Know the exact Part Roman Numerals. They often ask "Which Part deals with Elections?" (Answer: Part XV).
""",
    "important-articles.md": """# High-Yield Special Articles Cheat Sheet

---

## **1. The Most Frequently Tested Articles**

This is a curated list of articles that appear repeatedly in match-the-following or direct questions in NDA/CDS.

### **The Foundations**
*   **Art 14-18:** Right to Equality
*   **Art 19:** Six Freedoms
*   **Art 21:** Right to Life and Personal Liberty
*   **Art 32:** Constitutional Remedies (Writs by SC)
*   **Art 40:** Organization of Village Panchayats (DPSP)
*   **Art 44:** Uniform Civil Code (DPSP)
*   **Art 51A:** Fundamental Duties

### **Union & State Executives**
*   **Art 72:** Pardoning power of the President.
*   **Art 74:** Council of Ministers to aid and advise the President.
*   **Art 76:** Attorney-General of India.
*   **Art 108:** Joint sitting of both Houses of Parliament.
*   **Art 110:** Definition of "Money Bills".
*   **Art 112:** Annual Financial Statement (Budget).
*   **Art 123:** Power of President to promulgate Ordinances.
*   **Art 148:** Comptroller and Auditor-General of India (CAG).
*   **Art 161:** Pardoning power of the Governor.
*   **Art 213:** Power of Governor to promulgate Ordinances.

### **Judiciary**
*   **Art 124:** Establishment of Supreme Court.
*   **Art 129:** Supreme Court as a Court of Record.
*   **Art 143:** Power of President to consult Supreme Court (Advisory Jurisdiction).
*   **Art 214:** High Courts for states.
*   **Art 226:** Power of High Courts to issue certain writs.

### **Federal Structure & Bodies**
*   **Art 249:** Power of Parliament to legislate on a subject in the State List in the national interest (requires Rajya Sabha resolution).
*   **Art 262:** Adjudication of disputes relating to waters of inter-state rivers.
*   **Art 263:** Inter-State Council.
*   **Art 280:** Finance Commission.
*   **Art 300A:** Right to Property (Not a fundamental right).
*   **Art 312:** All-India Services (Rajya Sabha power).
*   **Art 324:** Superintendence, direction, and control of elections vested in the Election Commission.
*   **Art 326:** Universal Adult Suffrage (Voting age).

### **Emergencies & Amendments**
*   **Art 352:** Proclamation of Emergency (National Emergency).
*   **Art 356:** Provisions in case of failure of constitutional machinery in States (President's Rule).
*   **Art 360:** Provisions as to Financial Emergency.
*   **Art 368:** Power of Parliament to amend the Constitution.

---

## **2. Article 371: Special Provisions for States**
(Mnemonic: **NAMAS** - Nagaland, Assam, Manipur, Andhra, Sikkim)
*   **371:** Maharashtra & Gujarat
*   **371A:** Nagaland
*   **371B:** Assam
*   **371C:** Manipur
*   **371D/E:** Andhra Pradesh / Telangana
*   **371F:** Sikkim
*   **371G:** Mizoram
*   **371H:** Arunachal Pradesh
*   **371-I:** Goa
*   **371J:** Karnataka
""",
    "positions-tenures.md": """# Elections, Appointments & Terms of Office Matrix

---

## **1. Minimum Age Qualifications**

A highly tested topic. Memorize these age thresholds:

*   **21 Years:** Member of Panchayat, Member of Municipality.
*   **25 Years:** Member of Lok Sabha (MP), Member of State Legislative Assembly (MLA), Prime Minister (if from LS), Chief Minister (if from Assembly).
*   **30 Years:** Member of Rajya Sabha, Member of State Legislative Council (MLC).
*   **35 Years:** President of India, Vice-President of India, Governor of a State.

*Note: There is NO minimum age prescribed for Supreme Court or High Court judges in the Constitution.*

---

## **2. Terms of Office & Retirement Ages**

*   **President, VP, Governor:** 5 Years (Governor holds office during President's pleasure).
*   **Lok Sabha & State Assembly:** 5 Years (Can be dissolved earlier).
*   **Rajya Sabha & State Council:** 6 Years (Permanent body, 1/3rd retire every 2 years).
*   **Supreme Court Judge:** Retires at **65 Years**.
*   **High Court Judge:** Retires at **62 Years**.
*   **Comptroller and Auditor General (CAG):** **6 Years or 65 Years of age**, whichever is earlier.
*   **Chief Election Commissioner (CEC):** **6 Years or 65 Years of age**, whichever is earlier.
*   **Chairman/Members of UPSC:** **6 Years or 65 Years of age**, whichever is earlier.
*   **Chairman/Members of State PSC:** **6 Years or 62 Years of age**, whichever is earlier.
*   **Attorney General of India:** No fixed term. Holds office during the **pleasure of the President**.

---

## **3. Oaths and Resignations Matrix**

Who administers the oath and to whom do they submit their resignation?

| Office | Administers Oath | Submits Resignation To |
| :--- | :--- | :--- |
| **President** | Chief Justice of India (CJI) | Vice-President |
| **Vice-President** | President | President |
| **Governor** | Chief Justice of High Court | President |
| **Prime Minister** | President | President |
| **Chief Minister** | Governor | Governor |
| **SC Judge (incl. CJI)** | President | President |
| **HC Judge** | Governor | President |
| **Lok Sabha Speaker** | *(No separate oath as Speaker, only as MP by Pro-tem Speaker)* | Deputy Speaker of Lok Sabha |

> [!WARNING]
> **EXAM TRAP:** A High Court Judge is appointed by the President, resigns to the President, and is removed by the President. However, their **oath is administered by the GOVERNOR** of the state.
""",
    "constitutional-bodies.md": """# Constitutional & Non-Constitutional Bodies

---

## **1. Constitutional Bodies**

These bodies derive their authority directly from the Constitution.

### **1.1. Election Commission (Article 324)**
*   **Role:** Superintends, directs, and controls elections to Parliament, State Legislatures, Office of President, and VP. *(Does NOT conduct Panchayat/Municipality elections - that is the State Election Commission).*
*   **Composition:** CEC + 2 other Election Commissioners.
*   **Appointment:** President.
*   **Term:** 6 years or 65 years of age.
*   **Removal:** CEC removed in the same manner as a Supreme Court Judge.

### **1.2. Finance Commission (Article 280)**
*   **Role:** Recommends distribution of tax revenues between Union and States.
*   **Composition:** Chairman + 4 members.
*   **Appointment:** President, constituted every 5 years.

### **1.3. Comptroller and Auditor General - CAG (Article 148)**
*   **Role:** Guardian of the public purse; audits accounts of the Centre and States. Submits reports to the President/Governor, who lay them before the legislature.
*   **Appointment:** President.
*   **Term:** 6 years or 65 years.
*   **Restriction:** Not eligible for further office under Govt of India or States after retirement.

### **1.4. Attorney General of India (Article 76)**
*   **Role:** Highest law officer in the country. Advises the Union Govt on legal matters.
*   **Privilege:** Has the right to speak and take part in proceedings of both Houses of Parliament (without right to vote).
*   **Term:** Holds office during the **pleasure of the President**.

### **1.5. Union Public Service Commission (Article 315-323)**
*   **Role:** Central recruiting agency.
*   **Appointment:** President.
*   **Term:** 6 years or 65 years.

---

## **2. Non-Constitutional (Statutory & Executive) Bodies**

Derived from acts of Parliament or executive resolutions.

*   **NITI Aayog:** Executive body (formed by cabinet resolution on Jan 1, 2015, replacing Planning Commission). PM is the ex-officio Chairman. Acts as a think-tank.
*   **National Human Rights Commission (NHRC):** Statutory body (Protection of Human Rights Act, 1993). Watchdog of human rights.
*   **Central Vigilance Commission (CVC):** Statutory body (CVC Act, 2003). Main agency for preventing corruption in the Central govt.
*   **Central Bureau of Investigation (CBI):** NOT a statutory body. Derives power from the Delhi Special Police Establishment Act, 1946.
*   **Lokpal & Lokayuktas:** Statutory bodies (Act of 2013) to inquire into corruption charges against public functionaries (including the PM).

---

## **Visual Summary**

```mermaid
mindmap
  root((Key Bodies))
    Constitutional (In Constitution)
      ECI (Art 324)
      UPSC (Art 315)
      Finance Comm (Art 280)
      CAG (Art 148)
      Attorney Gen (Art 76)
    Statutory (Act of Parliament)
      NHRC
      CVC
      Lokpal
    Executive (Govt Order)
      NITI Aayog (PM is Chair)
      CBI
```
""",
    "governance-emergency.md": """# Emergency Provisions (Articles 352-360)

---

## **1. Core Concept**

Contained in **Part XVIII** of the Constitution. Enables the federal structure to transform into a unitary one during crises. Borrowed from the Govt of India Act 1935 (Suspension of FRs during emergency is from Weimar Germany).

---

## **2. National Emergency (Article 352)**

*   **Grounds:** War, External Aggression, or **Armed Rebellion**. (The term "internal disturbance" was replaced by "armed rebellion" by the **44th Amendment Act, 1978**).
*   **Declaration:** By the President, but ONLY upon receiving a **written recommendation** from the Cabinet (44th CAA).
*   **Parliamentary Approval:** Must be approved by BOTH Houses within **1 month** by a **Special Majority**.
*   **Duration:** Once approved, it continues for **6 months** and can be extended indefinitely with approval every 6 months.
*   **Impact on FRs:**
    *   **Art 358:** Article 19 (6 freedoms) is automatically suspended when declared on grounds of war/external aggression (NOT armed rebellion).
    *   **Art 359:** President can suspend the right to move courts for enforcement of other FRs.
    *   *EXCEPTION:* **Articles 20 and 21 CANNOT be suspended** under any circumstances (44th CAA).
*   **Occurrences:** Declared 3 times (1962 China war, 1971 Pak war, 1975 Internal disturbance).

---

## **3. President's Rule / State Emergency (Article 356 & 365)**

*   **Grounds:**
    *   **Art 356:** Failure of constitutional machinery in a State (Governor's report).
    *   **Art 365:** Failure of the State to comply with directions of the Union.
*   **Parliamentary Approval:** Must be approved by BOTH Houses within **2 months** by a **Simple Majority**.
*   **Duration:** Approved for 6 months. Maximum period is **3 years** (requires ECI certification to extend beyond 1 year).
*   **Impact:** State executive is dismissed, state legislature is suspended or dissolved. The Governor administers on behalf of the President. FRs are NOT suspended.

---

## **4. Financial Emergency (Article 360)**

*   **Grounds:** Financial stability or credit of India is threatened.
*   **Parliamentary Approval:** Must be approved by BOTH Houses within **2 months** by a **Simple Majority**.
*   **Duration:** Continues indefinitely until revoked by the President. (No repeated parliamentary approval needed).
*   **Impact:** Salaries/allowances of all government servants (including SC/HC judges) can be reduced. Money bills of states can be reserved for President's consideration.
*   **Occurrences:** Has **NEVER** been declared in India so far.

---

## **Visual Summary**

```mermaid
mindmap
  root((Emergencies))
    National (352)
      War, Ext. Aggression, Armed Reb
      Approve: 1 month (Special Maj)
      FRs: Art 20 & 21 immune
    President's Rule (356/365)
      State Govt Breakdown
      Approve: 2 months (Simple Maj)
      Max limit: 3 years
    Financial (360)
      Financial Threat
      Approve: 2 months (Simple Maj)
      Never declared!
```
""",
    "polity-federal-structure.md": """# Federal Structure & Centre-State Relations

---

## **1. The Federal System of India**

India is a "Union of States". K.C. Wheare described it as **"Quasi-Federal"** (federal in form but unitary in spirit).

### **1.1. Unitary Features (Strong Centre bias)**
*   Single Constitution, Single Citizenship, Integrated Judiciary.
*   Appointment of Governors by the Centre.
*   All-India Services (IAS, IPS, IFS).
*   Emergency provisions transform the system into a unitary one.
*   Destructible nature of states (Parliament can change state borders/names under Art 3).

### **1.2. Federal Features**
*   Dual Government (Centre and States).
*   Written and Rigid Constitution.
*   Division of powers (Schedule 7).
*   Supremacy of the Constitution & Independent Judiciary.
*   Bicameralism (Lok Sabha and Rajya Sabha).

---

## **2. Division of Powers (7th Schedule)**

Article 246 deals with the division of legislative powers across 3 lists:
1.  **Union List (98 subjects):** National importance (Defence, Foreign Affairs, Banking, Communication, Currency). Only Parliament can legislate.
2.  **State List (59 subjects):** Regional importance (Public Order, Police, Public Health, Agriculture, Local Govt). Only State Legislature can legislate (normally).
3.  **Concurrent List (52 subjects):** Common interest (Criminal Law, Education, Forests, Marriage/Divorce, Protection of wild animals). Both can legislate, but Central law prevails in case of conflict.
4.  **Residuary Powers (Art 248):** Subjects not in any list (e.g., Cyber laws). Vested in the **Union Parliament** (unlike USA where it's with states).

### **When can Parliament legislate on State List?**
*   **Art 249:** If Rajya Sabha passes a resolution (by 2/3rd majority) that it is necessary in the national interest.
*   **Art 250:** During a National Emergency.
*   **Art 252:** If two or more states request Parliament to legislate.
*   **Art 253:** To implement international treaties/agreements.
*   **Art 356:** During President's Rule in a state.

---

## **3. Key Committees on Centre-State Relations**

*   **Sarkaria Commission (1983):** Most famous. Recommended strong Centre, proper use of Art 356, establishing Inter-State Council.
*   **Punchhi Commission (2007):** Recommended changes in Governor's appointment/removal, localizing emergency provisions.
*   **Rajamannar Committee (1969):** Appointed by TN Govt. Recommended curtailing Centre's powers.

---

## **Visual Summary**

```mermaid
mindmap
  root((Federal Structure))
    Features
      Federal (Dual Govt, Written Const, Bi-cameral)
      Unitary (Strong Centre, Single Citizen, Gov Appt)
    7th Schedule (Lists)
      Union List (Defence, Foreign)
      State List (Police, Agri)
      Concurrent (Edu, Forest)
      Residuary -> Centre (Art 248)
    Parliament on State List
      RS Resolution (249)
      Emergency (250)
      States Request (252)
      Treaties (253)
```
""",
    "polity-rpa.md": """# Election Laws & Anti-Defection

---

## **1. Representation of the People Act (RPA)**

Article 327 empowers Parliament to make provisions regarding elections to Legislatures. Two major acts govern the electoral process:

### **1.1. RPA, 1950**
Focuses on the PRE-ELECTION phase:
*   Preparation and revision of electoral rolls.
*   Delimitation of constituencies.
*   Allocation of seats in the Lok Sabha and State Legislative Assemblies.
*   Qualifications of voters.

### **1.2. RPA, 1951**
Focuses on the ACTUAL CONDUCT of elections:
*   Qualifications and disqualifications for membership of Parliament/State Legislatures.
*   Conduct of elections and by-elections.
*   Registration of political parties.
*   Declaration of assets and liabilities by candidates.
*   Corrupt practices and electoral offences (e.g., promoting enmity, booth capturing).
*   Dispute resolution via Election Petitions (handled by High Courts).

---

## **2. Anti-Defection Law (10th Schedule)**

Added by the **52nd Amendment Act (1985)** to combat the "Aaya Ram, Gaya Ram" political culture of floor-crossing.

### **2.1. Grounds for Disqualification**
A member of Parliament or State Legislature incurs disqualification if:
1.  **Elected Member:** Voluntarily gives up membership of their political party, OR votes/abstains contrary to party whips without prior permission.
2.  **Independent Member:** Joins ANY political party after election.
3.  **Nominated Member:** Joins any political party AFTER the expiry of **6 months** from taking their seat.

### **2.2. Exceptions (When is it NOT defection?)**
*   **Merger:** If a party merges with another, and at least **two-thirds (2/3rd)** of its legislative members agree to the merger (earlier it was 1/3rd, changed by 91st CAA 2003).
*   **Presiding Officer:** If a member is elected as Speaker/Chairman and voluntarily gives up party membership to maintain neutrality.

### **2.3. Deciding Authority**
*   The question of disqualification is decided by the **Presiding Officer** of the House (Speaker of LS/Assembly, Chairman of RS/Council).
*   *Kihoto Hollohan Case (1992):* Supreme Court ruled that the decision of the Presiding Officer is subject to **Judicial Review** (it cannot be exempt from court scrutiny).
"""
}

for filename, content in notes_data.items():
    filepath = os.path.join("evolved_notes/polity", filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Batch 2 generated.")
