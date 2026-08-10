import os

# Create directory
os.makedirs("evolved_notes/polity", exist_ok=True)

notes_data = {
    "preamble.md": """# Preamble & Sources of the Indian Constitution

---

## **1. The Preamble: The Soul of the Constitution**

The Preamble is the introduction or preface to the Constitution, containing its summary, essence, and philosophy. N.A. Palkhivala called it the "Identity Card of the Constitution".

### **1.1. Key Ingredients**
*   **Source of Authority:** Derives authority from the **"People of India"**.
*   **Nature of State:** Sovereign, Socialist, Secular, Democratic, Republic.
*   **Objectives:** Justice, Liberty, Equality, Fraternity.
*   **Date of Adoption:** 26th November 1949.

### **1.2. Decoding the Keywords**
*   **Sovereign:** India is internally supreme and externally free.
*   **Socialist (Added by 42nd Amendment, 1976):** Democratic socialism (mixed economy), not communistic socialism.
*   **Secular (Added by 42nd Amendment, 1976):** Positive secularism; all religions have the same status and support from the state (Articles 25-28).
*   **Democratic:** Supreme power rests with the people (Universal Adult Franchise).
*   **Republic:** The head of the state is always elected (President), not a hereditary monarch.

### **1.3. Key Supreme Court Judgments**
*   **Berubari Union Case (1960):** SC ruled that the Preamble is **NOT** a part of the Constitution.
*   **Kesavananda Bharati Case (1973):** SC rejected the earlier opinion and held that the Preamble **IS a part of the Constitution**. It can be amended under Article 368, subject to the "Basic Structure" doctrine.
*   **LIC of India Case (1995):** Reaffirmed that it is an integral part of the Constitution.

> [!IMPORTANT]
> **EXAM TRAP:** The Preamble is **non-justiciable**, meaning its provisions are not enforceable in courts of law. It is only amended **ONCE** (42nd CAA, 1976) adding Socialist, Secular, and Integrity.

---

## **2. Sources of the Constitution**

The Constitution was heavily borrowed, drawing from the Govt. of India Act 1935 and various other countries.

### **2.1. Major Sources**
| Source Country / Act | Features Borrowed |
| :--- | :--- |
| **Govt. of India Act 1935** | Federal Scheme, Office of Governor, Judiciary, Public Service Commissions, Emergency provisions, Administrative details. |
| **Britain (UK)** | Parliamentary government, Rule of Law, Legislative procedure, **Single Citizenship**, Cabinet system, Prerogative writs, Bicameralism. |
| **USA** | **Fundamental Rights**, Independence of judiciary, Judicial Review, Impeachment of President, Removal of SC/HC judges, Post of VP. |
| **Ireland** | **Directive Principles of State Policy (DPSP)**, Nomination of members to Rajya Sabha, Method of election of the President. |
| **Canada** | Federation with a **strong Centre**, Vesting of residuary powers in the Centre, Appointment of state governors by the Centre, Advisory jurisdiction of SC. |
| **Australia** | **Concurrent List**, Freedom of trade and commerce, **Joint sitting** of the two Houses of Parliament. |
| **Weimar Constitution (Germany)** | **Suspension of Fundamental Rights during Emergency**. |
| **USSR (Russia)** | **Fundamental Duties**, Ideals of justice (social, economic, political) in the Preamble. |
| **France** | Republic, Ideals of liberty, equality, and fraternity in the Preamble. |
| **South Africa** | Procedure for amendment of the Constitution (Article 368), Election of members of Rajya Sabha. |
| **Japan** | Procedure established by law (Article 21). |

---

## **Visual Summary**

```mermaid
mindmap
  root((Preamble & Sources))
    Preamble
      Nature (Sov, Soc, Sec, Dem, Rep)
      Objectives (Justice, Liberty, Eq, Frat)
      Amended ONCE (42nd CAA 1976)
      Kesavananda Bharati (Part of Const)
    Sources (Key)
      UK (Parl, Single Citizen, Writs)
      USA (FRs, Jud Review, Impeachment)
      Ireland (DPSP, RS Nominations)
      Canada (Strong Centre, Residuary)
      USSR (Duties, Justice ideals)
      Australia (Concurrent List, Joint Sit)
```
""",
    "schedules.md": """# The Schedules of the Indian Constitution

---

## **1. Master Cheat Sheet for Schedules**

The Indian Constitution originally had 8 schedules. Presently, it has **12 schedules**. The easiest way to remember them is the mnemonic: **TEARS OF OLD PM**.

### **T E A R S**
*   **1st Schedule (T - Territories):** Names of the States and Union Territories and their territorial jurisdiction. (Articles 1 and 4).
*   **2nd Schedule (E - Emoluments):** Provisions relating to the salaries, allowances, and privileges of: President, Governors, Speaker/Deputy Speaker of LS and State Assemblies, Chairman/Deputy Chairman of RS and State Councils, SC & HC Judges, and CAG. *(Note: Prime Minister and Chief Ministers are NOT listed here).*
*   **3rd Schedule (A - Affirmations & Oaths):** Forms of Oaths or Affirmations for: Union/State Ministers, Election Candidates, MPs/MLAs, SC/HC Judges, CAG. *(Note: Oaths for President, VP, and Governor are in the Articles, NOT in the 3rd Schedule).*
*   **4th Schedule (R - Rajya Sabha):** Allocation of seats in the Rajya Sabha to the States and UTs. (Articles 4 and 80).
*   **5th Schedule (S - Scheduled Areas):** Provisions relating to the administration and control of Scheduled Areas and Scheduled Tribes (except in 4 North-Eastern states). (Article 244).

### **O F O L D P M**
*   **6th Schedule (O - Other Tribal Areas):** Provisions relating to the administration of tribal areas in the states of **Assam, Meghalaya, Tripura, and Mizoram (AMTM)**. (Articles 244 and 275).
*   **7th Schedule (F - Federal Lists):** Division of powers between the Union and the States in terms of three lists:
    *   **Union List:** 98 subjects (originally 97). Defence, Foreign Affairs, Currency.
    *   **State List:** 59 subjects (originally 66). Police, Public Health, Agriculture.
    *   **Concurrent List:** 52 subjects (originally 47). Education, Forests, Marriage. (Article 246).
*   **8th Schedule (O - Official Languages):** Languages recognized by the Constitution. Originally 14, currently **22 languages**.
    *   *Sindhi* (21st CAA, 1967)
    *   *Konkani, Manipuri, Nepali* (71st CAA, 1992)
    *   *Bodo, Dogri, Maithili, Santhali* (92nd CAA, 2003)
    *   *(Note: English and Bhojpuri are NOT in the 8th Schedule).*
*   **9th Schedule (L - Land Reforms):** Acts and regulations dealing with land reforms and abolition of the Zamindari system. Added by the **1st Amendment (1951)** to protect laws from judicial review. (However, in the I.R. Coelho case 2007, SC ruled that laws added after April 24, 1973, are open to judicial review).
*   **10th Schedule (D - Defection):** Anti-Defection Law. Provisions regarding disqualification of members of Parliament and State Legislatures on the ground of defection. Added by the **52nd Amendment (1985)**.
*   **11th Schedule (P - Panchayats):** Specifies the powers, authority, and responsibilities of Panchayats. It has **29 matters**. Added by the **73rd Amendment (1992)**.
*   **12th Schedule (M - Municipalities):** Specifies the powers, authority, and responsibilities of Municipalities. It has **18 matters**. Added by the **74th Amendment (1992)**.

---

## **Visual Summary**

```mermaid
mindmap
  root((12 Schedules))
    TEARS
      1: Territories
      2: Emoluments (Salaries)
      3: Affirmations & Oaths
      4: Rajya Sabha Seats
      5: Scheduled Areas
    OF OLD
      6: Other Tribal (AMTM)
      7: Federal Lists (3 Lists)
      8: Official Languages (22)
      9: Land Reforms (1st CAA)
      10: Defection (52nd CAA)
    PM
      11: Panchayats (29 subjects, 73rd CAA)
      12: Municipalities (18 subjects, 74th CAA)
```

> [!WARNING]
> **EXAM TRAP:** The 6th Schedule applies ONLY to Assam, Meghalaya, Tripura, and Mizoram. (Mnemonic: ATM without Money). Manipur is NOT in the 6th Schedule!
""",
    "fundamental-rights.md": """# Fundamental Rights (Articles 12-35)

---

## **1. Core Concept & Nature**

Contained in **Part III** of the Constitution, often described as the **Magna Carta of India**. They are borrowed from the US Constitution (Bill of Rights).
*   **Justiciable:** They are enforceable by courts.
*   **Not Absolute:** Subject to reasonable restrictions (state security, public order, decency).
*   **Suspension:** Can be suspended during a National Emergency (except Articles 20 and 21). Article 19 is automatically suspended only during war or external aggression, not armed rebellion.

> [!IMPORTANT]
> **FRs available ONLY to Citizens (Not aliens):** Articles 15, 16, 19, 29, and 30.

---

## **2. Classification of Fundamental Rights (14-32)**

### **2.1. Right to Equality (Art. 14-18)**
*   **Art 14:** Equality before the law (UK concept) and equal protection of laws (US concept).
*   **Art 15:** Prohibition of discrimination on grounds ONLY of religion, race, caste, sex, or place of birth.
*   **Art 16:** Equality of opportunity in matters of public employment.
*   **Art 17:** Abolition of Untouchability and prohibition of its practice.
*   **Art 18:** Abolition of titles (except military and academic).

### **2.2. Right to Freedom (Art. 19-22)**
*   **Art 19:** Protection of 6 rights: Speech and expression, Assembly, Association, Movement, Residence, Profession.
*   **Art 20:** Protection in respect of conviction for offences:
    *   No ex-post-facto law (retroactive criminal laws).
    *   No double jeopardy (punished twice for the same offence).
    *   No self-incrimination (cannot be forced to be a witness against oneself).
*   **Art 21:** Protection of life and personal liberty. (No person shall be deprived of his life or personal liberty except according to procedure established by law).
*   **Art 21A:** Right to elementary education (Free & compulsory for 6-14 years). Added by **86th Amendment Act, 2002**.
*   **Art 22:** Protection against arrest and detention (preventive detention safeguards).

### **2.3. Right against Exploitation (Art. 23-24)**
*   **Art 23:** Prohibition of traffic in human beings and forced labour (begar).
*   **Art 24:** Prohibition of employment of children (below 14 years) in factories, mines, or hazardous activities.

### **2.4. Right to Freedom of Religion (Art. 25-28)**
*   **Art 25:** Freedom of conscience and free profession, practice, and propagation of religion. (Includes right of Sikhs to wear Kirpan).
*   **Art 26:** Freedom to manage religious affairs.
*   **Art 27:** Freedom from payment of taxes for promotion of any religion.
*   **Art 28:** Freedom from attending religious instruction in certain educational institutions.

### **2.5. Cultural and Educational Rights (Art. 29-30)**
*   **Art 29:** Protection of interests of minorities (language, script, culture).
*   **Art 30:** Right of minorities to establish and administer educational institutions.

*(Note: Art 31 - Right to Property - was deleted from Part III by the 44th Amendment Act, 1978, and made a legal right under Article 300A).*

### **2.6. Right to Constitutional Remedies (Art. 32)**
Dr. B.R. Ambedkar called Article 32 the **"Heart and Soul of the Constitution"**. It guarantees the right to move the Supreme Court for the enforcement of FRs via Writs.

---

## **3. The Five Prerogative Writs**

Issued by the Supreme Court (Article 32) and High Courts (Article 226).
1.  **Habeas Corpus ("To have the body of"):** Protects against illegal detention. Can be issued against public authorities and private individuals.
2.  **Mandamus ("We command"):** Commands a public official/body to perform their official duties that they failed to do. Cannot be issued against President or Governor.
3.  **Prohibition ("To forbid"):** Issued by a higher court to a lower court to prevent it from exceeding its jurisdiction (Preventive).
4.  **Certiorari ("To be certified"):** Issued by a higher court to a lower court to quash an order already passed due to lack of jurisdiction or error of law (Preventive & Curative).
5.  **Quo Warranto ("By what authority"):** Enquires into the legality of a claim of a person to a public office. Prevents illegal usurpation of public office.

---

## **Visual Summary**

```mermaid
mindmap
  root((Fundamental Rights))
    Equality (14-18)
      14: Eq. before law
      15: No discrimination
      16: Public employment
      17: No Untouchability
      18: No Titles
    Freedom (19-22)
      19: 6 Freedoms
      20: Conviction protection
      21: Life & Liberty
      21A: Education (86th CAA)
      22: Arrest protection
    Exploitation (23-24)
      23: Forced labour/Traffic
      24: Child labour
    Religion (25-28)
      25: Conscience/Practice
      26: Manage affairs
    Culture & Edu (29-30)
      29: Minority interests
      30: Minority institutions
    Remedies (32)
      Habeas Corpus
      Mandamus
      Prohibition
      Certiorari
      Quo Warranto
```
""",
    "dpsp.md": """# Directive Principles of State Policy & Fundamental Duties

---

## **1. Directive Principles of State Policy (DPSP)**

Contained in **Part IV (Articles 36-51)**. Borrowed from the **Irish Constitution** (which borrowed it from Spain). Dr. B.R. Ambedkar called them "Novel Features".

### **1.1. Nature of DPSP**
*   They are the ideals that the State should keep in mind while formulating policies.
*   They are **non-justiciable** (cannot be legally enforced by courts), but they are fundamental in the governance of the country.
*   They aim to establish a "Welfare State" by promoting social and economic democracy.

### **1.2. Classification of Directives**
The Constitution does not formally classify them, but they are generally grouped into three categories:

**A. Socialistic Principles** (Aim at social and economic justice)
*   **Art 38:** Promote the welfare of the people and minimize inequalities in income/status.
*   **Art 39:** Secure equal pay for equal work, equitable distribution of resources, prevention of concentration of wealth.
*   **Art 39A:** Equal justice and free legal aid (Added by 42nd CAA).
*   **Art 41:** Right to work, education, and public assistance.
*   **Art 42:** Just and humane conditions of work and maternity relief.
*   **Art 43A:** Participation of workers in management of industries (Added by 42nd CAA).

**B. Gandhian Principles** (Based on Gandhi's reconstruction program)
*   **Art 40:** Organize Village Panchayats and endow them with power.
*   **Art 43:** Promote cottage industries on an individual or co-operative basis.
*   **Art 43B:** Promote voluntary formation of co-operative societies (Added by 97th CAA).
*   **Art 46:** Promote educational and economic interests of SCs, STs, and weaker sections.
*   **Art 47:** Prohibit consumption of intoxicating drinks and drugs (public health).
*   **Art 48:** Prohibit the slaughter of cows, calves, and other milch cattle.

**C. Liberal-Intellectual Principles**
*   **Art 44:** Secure a **Uniform Civil Code (UCC)** for citizens throughout India.
*   **Art 45:** Early childhood care and education for all children until age 6 (Modified by 86th CAA).
*   **Art 48A:** Protect and improve the environment and safeguard forests and wildlife (Added by 42nd CAA).
*   **Art 50:** Separate the judiciary from the executive in public services.
*   **Art 51:** Promote international peace and security.

---

## **2. Fundamental Duties**

Contained in **Part IV-A (Article 51A)**. Borrowed from the **USSR Constitution**.

### **2.1. Key Facts**
*   They were added by the **42nd Amendment Act (1976)** during the National Emergency, upon the recommendation of the **Swaran Singh Committee**.
*   Originally, there were 10 duties.
*   The **11th Duty** was added by the **86th Amendment Act (2002)**.
*   They are **non-justiciable** and applicable **only to citizens** (not aliens).

### **2.2. The 11 Fundamental Duties**
1.  Abide by the Constitution and respect its ideals, the National Flag, and the National Anthem.
2.  Cherish and follow noble ideals that inspired the national struggle for freedom.
3.  Uphold and protect the sovereignty, unity, and integrity of India.
4.  Defend the country and render national service when called upon to do so.
5.  Promote harmony and the spirit of common brotherhood; renounce practices derogatory to women.
6.  Value and preserve the rich heritage of our composite culture.
7.  Protect and improve the natural environment (forests, lakes, rivers, wildlife).
8.  Develop scientific temper, humanism, and the spirit of inquiry and reform.
9.  Safeguard public property and abjure violence.
10. Strive towards excellence in all spheres of individual and collective activity.
11. **(11th Duty):** Parent or guardian must provide opportunities for education to their child/ward between the ages of **6 and 14 years**. (86th CAA).

---

## **Visual Summary**

```mermaid
mindmap
  root((DPSP & Duties))
    DPSP (Part IV, Art 36-51)
      Socialistic
        Art 39: Equal Pay, Resource Dist
        Art 39A: Free Legal Aid
        Art 42: Maternity Relief
      Gandhian
        Art 40: Village Panchayats
        Art 43: Cottage Industries
        Art 47: No Intoxicants
        Art 48: Ban Cow Slaughter
      Liberal-Intellectual
        Art 44: Uniform Civil Code
        Art 50: Separate Judiciary/Exec
        Art 51: Int. Peace
    Duties (Part IV-A, Art 51A)
      42nd CAA (Swaran Singh Comm)
      86th CAA (11th Duty: Edu 6-14)
      Non-Justiciable
      Citizens Only
```
""",
    "citizenship.md": """# Citizenship (Articles 5-11)

---

## **1. Constitutional Provisions**

Contained in **Part II (Articles 5 to 11)** of the Constitution. India provides for a **Single Citizenship** for the entire country (borrowed from the UK), unlike the USA which has dual citizenship (national + state).

*   **Article 5 to 8:** Dealt with citizenship at the commencement of the Constitution (Jan 26, 1950). (Birth, domicile, migration from Pakistan, persons of Indian origin residing outside).
*   **Article 9:** Persons voluntarily acquiring citizenship of a foreign state are NOT citizens of India (No Dual Citizenship).
*   **Article 11:** Parliament has the absolute power to make provisions with respect to the acquisition and termination of citizenship. (This led to the Citizenship Act, 1955).

---

## **2. Citizenship Act, 1955**

This act outlines the methods for acquiring and losing Indian citizenship.

### **2.1. Acquisition of Citizenship (5 Ways)**
1.  **By Birth:** A person born in India on or after Jan 26, 1950, subject to specific dates and conditions (e.g., currently, at least one parent must be an Indian citizen and the other not an illegal migrant).
2.  **By Descent:** For persons born outside India. Requires the father (later amended to either parent) to be an Indian citizen at the time of birth, and registration at an Indian consulate within one year.
3.  **By Registration:** Persons of Indian Origin (PIOs), spouses of Indian citizens, etc., who have been ordinarily resident in India for 7 years before applying.
4.  **By Naturalization:** Foreigners can acquire citizenship if they have resided in India for a specified period (normally 11 years + 1 year continuous before application, reduced to 5 years for certain categories under CAA 2019), renounce their previous citizenship, have good character, and know a schedule 8 language.
5.  **By Incorporation of Territory:** If any foreign territory becomes part of India, the Govt of India specifies the persons who shall be citizens (e.g., Goa, Puducherry).

### **2.2. Loss of Citizenship (3 Ways)**
1.  **By Renunciation:** A citizen of full age and capacity can voluntarily declare the renunciation of their Indian citizenship.
2.  **By Termination:** When an Indian citizen voluntarily acquires the citizenship of another country, their Indian citizenship automatically terminates.
3.  **By Deprivation:** Compulsory termination by the Central Government if the citizenship was acquired by fraud, or the citizen has shown disloyalty to the Constitution, communicated with the enemy during war, or been imprisoned for 2+ years within 5 years of naturalization.

---

## **3. Citizenship Amendment Act (CAA), 2019**

*   **Objective:** Provides a path to Indian citizenship for persecuted religious minorities from Afghanistan, Bangladesh, and Pakistan who entered India on or before **December 31, 2014**.
*   **Eligible Minorities:** Hindus, Sikhs, Buddhists, Jains, Parsis, and Christians (Muslims are excluded from this specific fast-track provision).
*   **Exemptions:** The Act does NOT apply to tribal areas of Assam, Meghalaya, Mizoram, and Tripura (included in the **6th Schedule**), and the areas under the **Inner Line Permit (ILP)** regime (Arunachal Pradesh, Nagaland, Mizoram, Manipur).

---

## **Visual Summary**

```mermaid
mindmap
  root((Citizenship))
    Constitutional
      Part II (Art 5-11)
      Single Citizenship (UK)
      Art 9 (No Dual Citizenship)
      Art 11 (Parliament Power)
    Acquisition (5 Ways)
      Birth
      Descent
      Registration (7 yrs)
      Naturalization (11+1 yrs)
      Incorporation of Territory
    Loss (3 Ways)
      Renunciation (Voluntary)
      Termination (Acquiring other)
      Deprivation (By Govt/Fraud)
    CAA 2019
      From: Pak, Afg, Ban
      Religions: Hindu, Sikh, Bud, Jain, Parsi, Chris
      Cutoff: Dec 31, 2014
```
""",
    "president.md": """# The President of India (Union Executive)

---

## **1. The Office of the President**

The President is the head of the Indian State, the first citizen of India, and acts as the symbol of unity, integrity, and solidarity of the nation. (Contained in **Part V, Articles 52-78** regarding Union Executive).

*   **Article 52:** There shall be a President of India.
*   **Article 53:** Executive power of the Union is vested in the President and exercised by him directly or through officers subordinate to him.

### **1.1. Qualifications & Term**
*   Must be a citizen of India.
*   Must have completed **35 years of age**.
*   Must be qualified for election as a member of the **Lok Sabha**.
*   Must not hold any office of profit.
*   **Term:** 5 years (Article 56). Eligible for re-election any number of times.

### **1.2. Election of the President (Article 54 & 55)**
The President is elected indirectly by an **Electoral College**.
*   **Who Votes:**
    1.  **Elected** members of both Houses of Parliament (Lok Sabha + Rajya Sabha).
    2.  **Elected** members of the Legislative Assemblies of the States (MLAs).
    3.  **Elected** members of the Legislative Assemblies of UTs of Delhi and Puducherry (and J&K).
*   **Who DOES NOT Vote:** Nominated members of Parliament, nominated members of State Assemblies, and ALL members of State Legislative Councils (MLCs).
*   **Method:** Proportional Representation by means of a Single Transferable Vote; voting is by secret ballot.

### **1.3. Impeachment (Article 61)**
The process to remove the President before the expiry of the term.
*   **Ground:** "Violation of the Constitution".
*   **Initiation:** Can be initiated by **either House** of Parliament.
*   **Process:**
    1.  Charges signed by **1/4th members** of the initiating House.
    2.  **14 days** advance notice given to the President.
    3.  Resolution must pass the first House by a majority of **not less than 2/3rd of the Total Membership** of the House.
    4.  The second House investigates the charges. The President has the right to appear.
    5.  If the second House also passes the resolution by a **2/3rd majority of Total Membership**, the President stands impeached.

---

## **2. Powers of the President**

The President exercises vast powers, but only on the aid and advice of the Council of Ministers headed by the PM (Article 74).

### **2.1. Veto Powers (Article 111)**
When a bill is passed by Parliament and sent to the President, he has three options (Vetoes):
*   **Absolute Veto:** Withholding assent. The bill ends and does not become law. (Used for private member bills or when the cabinet resigns).
*   **Suspensive Veto:** Returning the bill for reconsideration. If Parliament repasses the bill (with or without amendments) by a simple majority, the President **must** give assent. *(Note: Cannot be used for Money Bills).*
*   **Pocket Veto:** Taking no action on the bill indefinitely. (The Indian Constitution prescribes no time limit for the President to act, unlike the US President who has 10 days).

### **2.2. Pardoning Power (Article 72)**
Independent of the judiciary, an executive power.
*   **Pardon:** Completely absolves the offender from all sentences, punishments, and disqualifications.
*   **Commutation:** Substitution of a harsher punishment with a lighter form (e.g., death sentence to life imprisonment).
*   **Remission:** Reducing the period of sentence without changing its character (e.g., 2 years rigorous imprisonment to 1 year rigorous imprisonment).
*   **Respite:** Awarding a lesser sentence in place of one originally awarded due to some special fact (e.g., pregnancy of a woman offender).
*   **Reprieve:** Stay of the execution of a sentence (especially death) for a temporary period.

> [!IMPORTANT]
> **EXAM TRAP:** The President can pardon sentences inflicted by **Court Martial** and can pardon **Death Sentences**. The Governor (Article 161) **CANNOT** pardon a death sentence (though he can suspend, remit, or commute it) and has no power over Court Martial sentences.

### **2.3. Ordinance Making Power (Article 123)**
*   The President can promulgate ordinances when Parliament is not in session (either both houses or one house).
*   Ordinances have the same force and effect as an Act of Parliament.
*   They must be approved by Parliament within **6 weeks of its reassembly**. Maximum life of an ordinance is **6 months and 6 weeks**.

---

## **Visual Summary**

```mermaid
mindmap
  root((President of India))
    Qualifications
      35 years age
      Citizen
      Qualified for Lok Sabha
    Electoral College
      Elected MPs (LS & RS)
      Elected MLAs
      No nominated members!
    Impeachment (Art 61)
      Violation of Constitution
      Initiated in either House
      2/3rd Total Membership
    Powers
      Veto (111): Absolute, Suspensive, Pocket
      Pardon (72): Pardon, Commute, Remit, Respite, Reprieve
      Ordinance (123): Max life 6mo + 6wks
```
""",
    "parliament.md": """# Parliament of India (Articles 79-122)

---

## **1. Structure & Composition**

Under Article 79, the Parliament of India consists of three parts: The **President**, the **Council of States (Rajya Sabha)**, and the **House of the People (Lok Sabha)**. (President is an integral part because a bill cannot become law without their assent).

### **1.1. Rajya Sabha (Upper House / Council of States)**
*   **Strength:** Maximum 250 (238 elected from States/UTs, **12 nominated** by President for expertise in Literature, Science, Art, and Social Service). Currently 245.
*   **Election:** Indirectly elected by the elected members of State Legislative Assemblies using Proportional Representation by Single Transferable Vote.
*   **Duration:** It is a **permanent body** (cannot be dissolved). However, **1/3rd** of its members retire every **second year**.
*   **Member Term:** 6 years.
*   **Qualifications:** Citizen of India, Minimum age **30 years**.
*   **Presiding Officer:** The Vice-President of India is the **ex-officio Chairman** of the Rajya Sabha.

### **1.2. Lok Sabha (Lower House / House of the People)**
*   **Strength:** Maximum 550 (530 from States, 20 from UTs). *(The 2 nominated Anglo-Indian seats were abolished by the 104th Amendment Act, 2019)*. Currently 543.
*   **Election:** Directly elected by the people based on Universal Adult Franchise (voting age reduced from 21 to 18 by the 61st Amendment, 1988).
*   **Duration:** Normal term is **5 years**, but the President can dissolve it earlier on the PM's advice. Term can be extended by 1 year at a time during a National Emergency.
*   **Qualifications:** Citizen of India, Minimum age **25 years**.
*   **Presiding Officer:** The Speaker (elected by members of Lok Sabha from amongst themselves).

---

## **2. Key Parliamentary Terms & Procedures**

*   **Quorum (Article 100):** The minimum number of members required to be present to transact business. It is **1/10th of the total membership** of the House (55 in LS, 25 in RS), including the presiding officer.
*   **Question Hour:** The first hour of a parliamentary sitting, devoted to questions by MPs to ministers. (Starred questions require oral answers, Unstarred require written answers).
*   **Zero Hour:** Immediately follows the Question Hour. It is an informal device available to MPs to raise matters without prior notice. (An Indian innovation since 1962).

### **2.1. Joint Sitting (Article 108)**
*   **Summoned by:** The President.
*   **Reason:** To resolve a deadlock between the two Houses over a bill.
*   **Presided by:** The **Speaker of the Lok Sabha**. (If absent, Deputy Speaker of LS -> Deputy Chairman of RS. *Never* the Chairman of RS/Vice-President).
*   **Applicability:** Can ONLY be summoned for **Ordinary Bills** and **Financial Bills**. It **CANNOT** be summoned for Money Bills or Constitutional Amendment Bills.

---

## **3. Legislative Procedure (Types of Bills)**

### **3.1. Ordinary Bill**
Can be introduced in either House. Requires simple majority. Disagreement leads to a Joint Sitting.

### **3.2. Money Bill (Article 110)**
Contains provisions related to taxation, borrowing, consolidated fund, etc.
*   **Introduction:** Can ONLY be introduced in the **Lok Sabha**, and ONLY on the prior recommendation of the **President**.
*   **Certification:** The **Speaker of the Lok Sabha** decides whether a bill is a money bill, and their decision is final.
*   **Rajya Sabha's Role:** Extremely restricted. RS cannot reject or amend a Money Bill. It can only make recommendations and must return it within **14 days**. If not returned in 14 days, it is deemed passed.
*   **President's Role:** Cannot use Suspensive Veto (cannot return it for reconsideration).

### **3.3. Constitutional Amendment Bill (Article 368)**
*   Can be introduced in either House.
*   Must be passed by each House separately by a **Special Majority** (majority of total membership AND 2/3rd of members present and voting).
*   No provision for Joint Sitting. President must give assent (cannot veto).

---

## **Visual Summary**

```mermaid
mindmap
  root((Parliament))
    Rajya Sabha
      Permanent (No dissolution)
      1/3 retire every 2 yrs
      Age 30+
      VP is Chairman
    Lok Sabha
      5 years (can dissolve)
      Age 25+
      Directly Elected
      Speaker presides
    Procedures
      Quorum: 1/10th
      Joint Sitting: Art 108 (Speaker presides)
      Money Bill: Art 110 (LS only, RS 14 days)
```
""",
    "goverment-executives.md": """# State Executive & Central Ministers (PM, CM, Governor)

---

## **1. The Prime Minister & Council of Ministers**

### **1.1. The Prime Minister (PM)**
*   **Article 74:** There shall be a Council of Ministers with the PM at the head to aid and advise the President. (The advice is binding after the 42nd/44th Amendments).
*   **Article 75:** The PM shall be appointed by the President, and other ministers appointed by the President on the advice of the PM.
*   **De Facto Executive:** The PM is the real executive authority (head of the government), while the President is the nominal executive authority (head of the State).

### **1.2. The Council of Ministers (CoM)**
*   **Size Limit:** The total number of ministers (including PM) shall not exceed **15%** of the total strength of the Lok Sabha. (Added by **91st Amendment Act, 2003**).
*   **Collective Responsibility:** The CoM is collectively responsible to the **Lok Sabha**. If a no-confidence motion is passed in the Lok Sabha, the entire ministry must resign.
*   **Individual Responsibility:** Ministers hold office during the pleasure of the President (meaning the PM can ask them to resign at any time).

---

## **2. The State Executive (Governor & Chief Minister)**

The state executive consists of the Governor, the Chief Minister, the Council of Ministers, and the Advocate General of the State. (Part VI).

### **2.1. The Governor (Articles 153-167)**
*   The nominal executive head of the state. Also acts as an agent of the Central Government. (Dual role).
*   **Appointment:** Appointed by the **President** by warrant under his hand and seal. (Not elected).
*   **Qualifications:** Citizen of India, completed **35 years of age**.
*   **Term:** Holds office during the **pleasure of the President** (No fixed term, can be removed at any time). Normal term is 5 years.
*   **Powers & Functions:**
    *   **Executive:** Appoints CM, Advocate General, State Election Commissioner, Chairman/Members of SPSC.
    *   **Legislative:** Summons/prorogues the state legislature, promulgates ordinances (Art 213).
    *   **Pardoning (Art 161):** Can grant pardons, reprieves, respites, remissions. *Cannot* pardon a death sentence (can only suspend/remit/commute it) and has no power over court-martial.
    *   **Discretionary Powers:** Recommending President's Rule (Art 356), reserving a bill for the President's consideration.

### **2.2. The Chief Minister (CM)**
*   The real executive head of the state government.
*   **Appointment:** The CM is appointed by the Governor. (Governor appoints the leader of the majority party in the assembly).
*   **Role:** Advises the Governor on the appointment of other ministers, communicates all decisions of the CoM to the Governor (Art 167).

---

## **Visual Summary**

```mermaid
mindmap
  root((Executives))
    Union (Centre)
      President (Nominal)
      PM (Real Head)
      CoM: Max 15% (91st CAA)
      CoM responsible to Lok Sabha
    State
      Governor (Nominal, Centre's Agent)
      CM (Real Head)
      Governor appointed by President
      Governor holds office during President's pleasure
    Comparisons
      Pres Pardon (Art 72, Death + Martial)
      Gov Pardon (Art 161, NO Death pardon)
      Pres Age (35), Gov Age (35)
      PM Age (25/30), CM Age (25/30)
```
"""
}

for filename, content in notes_data.items():
    filepath = os.path.join("evolved_notes/polity", filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Batch 1 generated.")
