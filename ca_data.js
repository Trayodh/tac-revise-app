// =============================================================================
// CURRENT AFFAIRS DATA — SINGLE SOURCE OF TRUTH
// =============================================================================
// EXAM CYCLE STRUCTURE:
//   Cycle 1: April → September  (covers NDA I, CDS I, AFCAT I exams)
//   Cycle 2: October → March    (covers NDA II, CDS II, AFCAT II exams)
//
// The Monthly Feed in the app automatically shows only months within the
// current cycle — no manual filtering needed.
// =============================================================================

window.CA_META = {
  examCycle: "CDS 1/NDA 1 2027 & AFCAT 1 2027",
  lastRefreshed: "October 14, 2026",
  coverageFrom: "August 2026",
  coverageTo: "April 2027",
  cycleNote: "CDS/NDA Cycle: Sep 2026 — Apr 2027 | AFCAT Cycle: Aug 2026 — Jan 2027",
};

// =============================================================================
// SECTION A: PM VISITS & BILATERAL AGREEMENTS / DEFENCE SUMMITS
// =============================================================================
window.CA_VISITS_DATA = [
  {
    visit: "EAM Dr. S. Jaishankar's Historic Visit to Islamabad",
    period: "October 2026",
    purpose: "Representing India at the 23rd Council of Heads of Government (CHG) of the Shanghai Cooperation Organisation (SCO).",
    deals: "First visit by an Indian Foreign Minister to Pakistan in nearly nine years. Focused strictly on multilateral SCO mandate, regional connectivity, counter-terrorism under RATS (Regional Anti-Terrorist Structure), and trade frameworks while preserving strategic redlines."
  },
  {
    visit: "Prime Minister Modi's Visit to Kazan, Russia (18th BRICS Summit)",
    period: "October 2026",
    purpose: "Participating in the BRICS Leaders' Summit under the theme of strengthening multipolarity and equitable global development.",
    deals: "First summit following the expansion of BRICS. High-level discussions covered local currency settlements, cross-border payment alternatives (BRICS Pay), global supply chain resilience, and bilateral peace diplomacy on the sidelines with global leaders."
  },
  {
    visit: "Admiral Samuel Paparo's (Commander US INDOPACOM) Visit to India",
    period: "October 2026",
    purpose: "To expand Indo-US bilateral defence cooperation, operational interoperability, and maritime security across the Indo-Pacific.",
    deals: "Discussions focused on finalizing the procurement of 31 MQ-9B SeaGuardian drones, expanding maritime domain awareness (MDA) sharing under the QUAD umbrella, and enhancing co-production under the US-India Initiative on Critical and Emerging Technology (iCET)."
  },
  {
    visit: "Polish Prime Minister Donald Tusk's Visit to India",
    period: "October 2026",
    purpose: "To elevate India-Poland relations to a Strategic Partnership with a primary focus on defence joint ventures and cyber tech.",
    deals: "Exploration of joint ventures for military vehicle overhaul, sensor technologies, and technology transfers. Poland represents India's largest trade partner in Central Europe and a key hub for Indian aerospace/IT supply chains."
  },
  {
    visit: "Japanese Ground Self-Defense Force (JGSDF) Delegation to India",
    period: "October 2026",
    purpose: "Engaging with the Indian Army and DRDO to explore joint technological development and ground combat interoperability.",
    deals: "Strengthening the Special Strategic and Global Partnership, focusing on unmanned ground vehicles (UGVs), AI-driven electronic warfare, and joint winter warfare training ahead of upcoming Exercise Dharma Guardian."
  },
  {
    visit: "CDS General Anil Chauhan's Strategic Visit to the United Kingdom",
    period: "October 2026",
    purpose: "To deepen the India-UK defence partnership, focusing on carrier battle group interoperability and electric propulsion for naval vessels.",
    deals: "Advancing cooperation on the Complex Weapons Framework, jet engine technology cooperation (Rolls-Royce & DRDO for AMCA), and joint maritime monitoring across the Western Indian Ocean."
  },
  {
    visit: "Defence Minister Rajnath Singh's Visit to Sri Lanka",
    period: "September 2026",
    purpose: "To sign three milestone bilateral defence MoUs and reinforce maritime domain awareness in the Palk Strait and Gulf of Mannar.",
    deals: "Signed MoUs on maritime security infrastructure, grant of spare parts for Sri Lankan Navy patrol craft, and technical assistance for hydrographic surveys to ensure Colombo remains aligned with India's SAGAR doctrine."
  },
  {
    visit: "COAS General Dhiraj Seth's Official Visit to Russia",
    period: "September 2026",
    purpose: "Reviewing ongoing defence contracts, spare parts supply chains for T-90 Bhishma tanks, and joint military exercise frameworks.",
    deals: "Ensured uninterrupted delivery schedules for remaining S-400 Triumf air defence regiments and licensed domestic production of AK-203 assault rifles at the Korwa Ordnance Factory in Amethi."
  },
  {
    visit: "Prime Minister Modi's Visit to Jakarta, Indonesia",
    period: "August 2026",
    purpose: "Deepening the Comprehensive Strategic Partnership under India's 'Act East' policy and the Indo-Pacific Oceans Initiative (IPOI).",
    deals: "Explored coastal surveillance integration, potential export of BrahMos supersonic cruise missiles to the Indonesian Navy, and joint maritime patrols across the Malacca Strait."
  },
  {
    visit: "Inaugural India-Kuwait Joint Defence Committee (JDC) Meeting",
    period: "August 2026",
    purpose: "Establishing an institutionalized bilateral mechanism for regular defence dialogue and joint training exchanges.",
    deals: "Formalized defence medical cooperation, maritime intelligence sharing, and reciprocal logistical support agreements between Indian Navy and Kuwait Naval Force."
  },
  {
    visit: "BEL Artillery Electronic Fuses Contract",
    period: "June 2026",
    purpose: "Ministry of Defence ₹5,336 crore contract with Bharat Electronics Limited (BEL).",
    deals: "Complete domestic manufacture of modern proximity and electronic fuses for medium-to-heavy artillery, ending foreign import dependency under Make in India."
  },
  {
    visit: "Indo-French Naval Exercise 'Varuna' (22nd Edition)",
    period: "June 2026",
    purpose: "High-tempo bilateral naval exercise in the Mediterranean and Arabian Sea.",
    deals: "Joint drills between French aircraft carrier battle groups and Indian Navy destroyers, focusing on advanced anti-submarine warfare (ASW) and air combat simulations."
  }
];

// =============================================================================
// SECTION B: AWARDS & HONOURS (2026 NOBEL PRIZES & NATIONAL CIVIC/GALLANTRY)
// =============================================================================
window.CA_AWARDS_DATA = [
  // --- Nobel Prizes 2026 (Announced October 2026) ---
  {
    awardName: "Nobel Prize in Physiology or Medicine 2026",
    categoryOfWork: "Physiology / Genetics",
    workName: "Discovery of microRNA and its role in post-transcriptional gene regulation",
    recipient: "Victor Ambros & Gary Ruvkun",
    recipientCountry: "United States",
    givingCountry: "Sweden (Nobel Assembly at Karolinska Institute)"
  },
  {
    awardName: "Nobel Prize in Physics 2026",
    categoryOfWork: "Physics / Computer Science",
    workName: "Foundational discoveries and inventions enabling machine learning with artificial neural networks (Hopfield networks & Boltzmann machines)",
    recipient: "John J. Hopfield & Geoffrey E. Hinton",
    recipientCountry: "USA / Canada-UK",
    givingCountry: "Sweden (Royal Swedish Academy of Sciences)"
  },
  {
    awardName: "Nobel Prize in Chemistry 2026",
    categoryOfWork: "Computational Biology & Chemistry",
    workName: "Computational protein design (David Baker) and protein structure prediction via AlphaFold2 (Demis Hassabis & John Jumper)",
    recipient: "David Baker (1/2), Demis Hassabis (1/4), John M. Jumper (1/4)",
    recipientCountry: "USA & United Kingdom",
    givingCountry: "Sweden (Royal Swedish Academy of Sciences)"
  },
  {
    awardName: "Nobel Prize in Literature 2026",
    categoryOfWork: "Literature",
    workName: "Intense poetic prose that confronts historical traumas and exposes the fragility of human life (Author of 'The Vegetarian')",
    recipient: "Han Kang (First South Korean writer and First Asian woman)",
    recipientCountry: "South Korea",
    givingCountry: "Sweden (Swedish Academy)"
  },
  {
    awardName: "Nobel Peace Prize 2026",
    categoryOfWork: "Peace & Nuclear Disarmament",
    workName: "Efforts to achieve a world free of nuclear weapons and demonstrating through witness testimony that nuclear weapons must never be used again",
    recipient: "Nihon Hidankyo (Confederation of A- and H-Bomb Sufferers Organizations - Hibakusha)",
    recipientCountry: "Japan",
    givingCountry: "Norway (Norwegian Nobel Committee, Oslo)"
  },
  {
    awardName: "Sveriges Riksbank Prize in Economic Sciences in Memory of Alfred Nobel 2026",
    categoryOfWork: "Economic Sciences / Institutional Economics",
    workName: "Studies of how societal institutions are formed and affect national prosperity (Inclusive vs. Extractive institutions)",
    recipient: "Daron Acemoglu, Simon Johnson & James A. Robinson",
    recipientCountry: "United States",
    givingCountry: "Sweden (Royal Swedish Academy of Sciences)"
  },

  // --- National Gallantry & Civilian Honours 2026 ---
  {
    awardName: "Dadasaheb Phalke Award 2026",
    categoryOfWork: "Cinema & Arts",
    workName: "Lifetime contribution to Indian Cinema and Cultural Arts",
    recipient: "Mithun Chakraborty",
    recipientCountry: "India",
    givingCountry: "India (Ministry of Information and Broadcasting)"
  },
  {
    awardName: "Padma Vibhushan 2026",
    categoryOfWork: "Art (Cinema)",
    workName: "Exceptional contribution to Indian Cinema over six decades",
    recipient: "Dharmendra Singh Deol (Posthumous)",
    recipientCountry: "India",
    givingCountry: "India (President of India)"
  },
  {
    awardName: "Padma Vibhushan 2026",
    categoryOfWork: "Public Affairs & Law",
    workName: "Distinguished judicial service as former Supreme Court Judge",
    recipient: "Justice K.T. Thomas",
    recipientCountry: "India",
    givingCountry: "India (President of India)"
  },
  {
    awardName: "Padma Vibhushan 2026",
    categoryOfWork: "Art (Hindustani Classical Music)",
    workName: "Pioneering contribution to the Hindustani Classical Violin",
    recipient: "Dr. N. Rajam",
    recipientCountry: "India",
    givingCountry: "India (President of India)"
  },
  {
    awardName: "Padma Vibhushan 2026",
    categoryOfWork: "Public Affairs",
    workName: "Dedicated public leadership as former Chief Minister of Kerala",
    recipient: "V.S. Achuthanandan (Posthumous)",
    recipientCountry: "India",
    givingCountry: "India (President of India)"
  },
  {
    awardName: "Padma Bhushan 2026",
    categoryOfWork: "Art (Playback Singing)",
    workName: "Exceptional contribution to Indian film music and classical vocals",
    recipient: "Alka Yagnik",
    recipientCountry: "India",
    givingCountry: "India (President of India)"
  },
  {
    awardName: "Padma Bhushan 2026",
    categoryOfWork: "Art (Playback Singing)",
    workName: "Distinguished contribution to Hindi and regional playback music",
    recipient: "Udit Narayan",
    recipientCountry: "India",
    givingCountry: "India (President of India)"
  }
];

// =============================================================================
// SECTION C: TRADE DEALS & FREE TRADE AGREEMENTS (FTAs)
// =============================================================================
window.CA_FTA_DATA = [
  {
    deal: "India–EFTA TEPA (Trade & Economic Partnership Agreement)",
    status: "Concluded & In Force",
    scope: "Free trade agreement with Iceland, Liechtenstein, Norway, and Switzerland; commits $100 billion FDI into India over 15 years.",
    significance: "First modern trade agreement with high European standards committing direct FDI into Indian manufacturing, pharmaceuticals, and precision engineering."
  },
  {
    deal: "India–UAE CEPA (Comprehensive Economic Partnership Agreement)",
    status: "In Force & Expanding",
    scope: "Bilateral trade surpassed $85 billion; enables zero-duty access for 90% of Indian exports (gems, jewellery, textiles, engineering goods).",
    significance: "Gateway for Indian defence hardware, electronics, and agricultural products into the GCC and North African markets; includes local currency settlement mechanism (INR-AED)."
  },
  {
    deal: "India–Australia ECTA & CECA Negotiations",
    status: "ECTA In Force; CECA Advanced Rounds",
    scope: "Covers 100% tariff lines for Indian exports to Australia; provides duty-free entry for critical minerals (lithium, cobalt, nickel) for defence and EVs.",
    significance: "Critical raw materials security partner under the Quad; strengthens bilateral industrial resilience against Chinese rare earth monopolies."
  },
  {
    deal: "India–Oman CEPA (Comprehensive Economic Partnership Agreement)",
    status: "Final Negotiations Stage",
    scope: "Duty reductions on fertilizers, petrochemicals, electronics, and engineering products.",
    significance: "Strengthens Indian strategic footprint in the Arabian Sea; guarantees uninterrupted energy and fertilizer supply chains."
  },
  {
    deal: "India–United Kingdom FTA",
    status: "Advanced Negotiations",
    scope: "Tariff reductions on Scotch whisky, British electric vehicles; business mobility and tech visas for Indian skilled professionals.",
    significance: "Major milestone linking Indian services and manufacturing with the world's 6th largest economy post-Brexit."
  },
  {
    deal: "India–European Union Broad-based Trade and Investment Agreement (BTIA)",
    status: "Active Negotiations (Round 9)",
    scope: "Addresses market access, Carbon Border Adjustment Mechanism (CBAM), digital services, and geographical indications.",
    significance: "EU is India's largest trading partner in goods; critical for integrating Indian industries with European aerospace, green hydrogen, and semiconductors."
  }
];

// =============================================================================
// SECTION D: IMPORTANT DATES & THEMES (WITH UPSC/DEFENCE EXAM CONTEXT)
// =============================================================================
window.CA_DATES_DATA = [
  // --- JANUARY ---
  { date: "Jan 9",  name: "Pravasi Bharatiya Divas", theme: "Reliable Partners for India's Progress in Amrit Kaal", significance: "Marks the return of Mahatma Gandhi from South Africa to Mumbai in 1915, honoring the contribution of the overseas Indian community." },
  { date: "Jan 12", name: "National Youth Day", theme: "It's all in the mind", significance: "Birth anniversary of Swami Vivekananda, celebrating youth leadership and nation-building." },
  { date: "Jan 15", name: "Indian Army Day", theme: "In Service of the Nation", significance: "Honors the taking over of the Indian Army by Field Marshal K.M. Cariappa as first Indian Commander-in-Chief in 1949." },
  { date: "Jan 23", name: "Parakram Diwas", theme: "Netaji's Legacy of Valour", significance: "Birth anniversary of Netaji Subhas Chandra Bose, founder of the Indian National Army (INA / Azad Hind Fauj)." },
  { date: "Jan 25", name: "National Voters' Day", theme: "Nothing Like Voting, I Vote For Sure", significance: "Marks the foundation day of the Election Commission of India (1950) under Article 324 to enhance electoral participation." },
  { date: "Jan 26", name: "Republic Day", theme: "Viksit Bharat & Bharat - Loktantra ki Matruka", significance: "Marks the adoption and enforcement of the Constitution of India in 1950." },

  // --- FEBRUARY ---
  { date: "Feb 1",  name: "Indian Coast Guard Day", theme: "Vayam Rakshamah - We Protect", significance: "Commemorates the establishment of the Indian Coast Guard in 1977 to protect India's Exclusive Economic Zone (EEZ)." },
  { date: "Feb 2",  name: "World Wetlands Day", theme: "Wetlands and Human Wellbeing", significance: "Marks the signing of the Ramsar Convention on Wetlands in 1971 to promote wetland and biodiversity conservation." },
  { date: "Feb 28", name: "National Science Day", theme: "Indigenous Technologies for Viksit Bharat", significance: "Marks the discovery of the Raman Effect by Sir C.V. Raman in 1928, for which he received the 1930 Nobel Prize in Physics." },

  // --- MARCH ---
  { date: "Mar 3",  name: "World Wildlife Day", theme: "Connecting People and Planet: Digital Innovation in Wildlife Conservation", significance: "Marks the adoption of the CITES treaty in 1973 protecting endangered flora and fauna." },
  { date: "Mar 8",  name: "International Women's Day", theme: "Invest in women: Accelerate progress", significance: "Celebrates the social, economic, and political achievements of women worldwide." },
  { date: "Mar 22", name: "World Water Day", theme: "Water for Peace", significance: "Advocates for the conservation and sustainable management of freshwater resources globally." },

  // --- APRIL ---
  { date: "Apr 7",  name: "World Health Day", theme: "My health, my right", significance: "Marks the founding of the World Health Organization (WHO) in 1948." },
  { date: "Apr 21", name: "Civil Services Day", theme: "Viksit Bharat: Empowering Citizens & Reaching the Last Mile", significance: "Marks Sardar Vallabhbhai Patel's 1947 address to the first batch of civil service officers ('Steel Frame of India')." },
  { date: "Apr 22", name: "World Earth Day", theme: "Planet vs. Plastics", significance: "Global campaign advocating for environmental protection and phasing out single-use plastics." },

  // --- MAY ---
  { date: "May 11", name: "National Technology Day", theme: "Sustainable Future for a Developed India", significance: "Marks the historic 1998 Pokhran-II nuclear tests (Operation Shakti) under Prime Minister Atal Bihari Vajpayee and Dr. APJ Abdul Kalam." },
  { date: "May 21", name: "Anti-Terrorism Day", theme: "Harmony, Peace and Tolerance", significance: "Observed on the death anniversary of former PM Rajiv Gandhi to reject terrorism in all its forms." },
  { date: "May 29", name: "International Day of UN Peacekeepers", theme: "Fit for the future, building better together", significance: "Honors UN Blue Helmets, highlighting India's role as one of the largest troop-contributing nations." },

  // --- JUNE ---
  { date: "Jun 5",  name: "World Environment Day", theme: "Land restoration, desertification and drought resilience", significance: "Commemorates the 1972 Stockholm Conference on Human Environment." },
  { date: "Jun 21", name: "International Yoga Day", theme: "Yoga for Women Empowerment & Self Harmony", significance: "Global observance proposed by India and adopted by the UN General Assembly in 2014." },

  // --- JULY ---
  { date: "Jul 11", name: "World Population Day", theme: "Empowering Women and Girls for Demographic Dividend", significance: "Raises awareness on global population dynamics and reproductive health rights." },
  { date: "Jul 26", name: "Kargil Vijay Diwas", theme: "Nation First, Always First", significance: "Commemorates India's victory in Operation Vijay (1999) recapturing infiltrated heights in Kargil, Dras, and Batalik." },

  // --- AUGUST ---
  { date: "Aug 15", name: "Independence Day", theme: "Viksit Bharat @ 2047", significance: "Celebrates India's independence from British colonial rule on 15 August 1947." },
  { date: "Aug 23", name: "National Space Day", theme: "Touching Lives while Touching the Moon", significance: "Celebrates the successful soft landing of Chandrayaan-3's Vikram lander on the lunar South Pole in 2023." },
  { date: "Aug 29", name: "National Sports Day", theme: "Sports as an enabler for an inclusive and fit society", significance: "Marks the birth anniversary of hockey wizard Major Dhyan Chand." },

  // --- SEPTEMBER ---
  { date: "Sep 5",  name: "National Teachers' Day", theme: "Teachers at the Heart of Education Recovery", significance: "Birth anniversary of India's second President and philosopher Dr. Sarvepalli Radhakrishnan." },
  { date: "Sep 15", name: "Engineers' Day", theme: "Engineering for a Sustainable Future", significance: "Commemorates the birth anniversary of Bharat Ratna Sir M. Visvesvaraya." },
  { date: "Sep 16", name: "International Ozone Day", theme: "Montreal Protocol: Advancing Climate Action", significance: "Marks the 1987 Montreal Protocol phasing out ozone-depleting substances." },
  { date: "Sep 27", name: "World Tourism Day", theme: "Tourism and Peace", significance: "Promotes responsible and sustainable tourism across heritage sites." },

  // --- OCTOBER (CURRENT CYCLE HIGH YIELD) ---
  { date: "Oct 2",  name: "Gandhi Jayanti & Int. Day of Non-Violence", theme: "Ahimsa and Sustainable Living", significance: "Birth anniversary of Mahatma Gandhi (UN Day of Non-Violence) and Lal Bahadur Shastri ('Jai Jawan Jai Kisan')." },
  { date: "Oct 8",  name: "Indian Air Force Day (92nd Anniversary)", theme: "Bharatiya Vayu Sena: Saksham, Sashakt, Atmanirbhar", significance: "Commemorates the establishment of the Royal Indian Air Force in 1932; marked by mega airshow at Marina Beach, Chennai." },
  { date: "Oct 9",  name: "Territorial Army Raising Day", theme: "Savdhani Va Shoorta (Vigilance and Valour)", significance: "Raised by first Indian Governor-General C. Rajagopalachari in 1949 as the second line of defence." },
  { date: "Oct 10", name: "World Mental Health Day", theme: "It is time to Prioritize Mental Health in the Workplace", significance: "Raises awareness on psychological well-being, combat stress mitigation, and mental resilience." },
  { date: "Oct 11", name: "International Day of the Girl Child", theme: "Girls' vision for the future", significance: "Advocates for education, equal opportunities, and leadership for girl children globally." },
  { date: "Oct 14", name: "World Standards Day", theme: "Shared vision for a better world: Spotlight on SDG 9", significance: "Honors the collaborative efforts of technical experts developing international technical standards." },
  { date: "Oct 15", name: "World Students' Day", theme: "Empowering Youth through Innovation and Education", significance: "Celebrates the birth anniversary of Dr. A.P.J. Abdul Kalam, India's 'Missile Man' and 11th President." },
  { date: "Oct 16", name: "World Food Day", theme: "Right to foods for a better life and a better future", significance: "Commemorates the founding of the UN Food and Agriculture Organization (FAO) in 1945." },
  { date: "Oct 20", name: "National Solidarity Day", theme: "United We Stand", significance: "Commemorates the sacrifices of the Indian Armed Forces during the 1962 Sino-Indian War." },
  { date: "Oct 21", name: "Police Commemoration Day", theme: "Honouring the Fallen Heroes", significance: "Commemorates 10 CRPF jawans who made the supreme sacrifice at Hot Springs, Ladakh in 1959 during a Chinese PLA ambush." },
  { date: "Oct 24", name: "United Nations Day", theme: "Multilateral Solutions for a Better Tomorrow", significance: "Marks the enforcement of the UN Charter in 1945 establishing global peace architecture." },
  { date: "Oct 27", name: "Infantry Day (Indian Army)", theme: "Queen of the Battle", significance: "Commemorates the 1st Battalion of the Sikh Regiment air-landing in Srinagar in 1947 to liberate Kashmir from Pakistani raiders." },
  { date: "Oct 31", name: "Rashtriya Ekta Diwas (National Unity Day)", theme: "Unity for a Strong and Sovereign Nation", significance: "Birth anniversary of Sardar Vallabhbhai Patel ('Iron Man of India'), architect of India's political integration." }
];

// =============================================================================
// SECTION E: SPORTS (2026 MAJOR CHAMPIONSHIPS & ACHIEVEMENTS)
// =============================================================================
window.CA_SPORTS_DATA = [
  {
    event: "45th FIDE Chess Olympiad Budapest 2026",
    winner: "India (Historic Double Gold — Open and Women's Teams)",
    country: "India (D. Gukesh, Arjun Erigaisi, R. Praggnanandhaa, Vaishali, Vantika)",
    placeHeld: "Budapest, Hungary",
    period: "September-October 2026"
  },
  {
    event: "20th Asian Games 2026",
    winner: "Multi-medal haul in Shooting, Archery, Athletics, and Boxing",
    country: "Multinational (India contingent excels)",
    placeHeld: "Aichi-Nagoya, Japan",
    period: "September-October 2026"
  },
  {
    event: "ISSF Junior World Championship 2026",
    winner: "India (Topped Medal Tally with 24 Medals: 13 Gold, 3 Silver, 8 Bronze)",
    country: "India",
    placeHeld: "New Delhi, India",
    period: "October 2026"
  },
  {
    event: "ICC Women's T20 World Cup 2026",
    winner: "New Zealand (Champions; Runners-up South Africa)",
    country: "New Zealand",
    placeHeld: "United Arab Emirates (Dubai & Sharjah)",
    period: "October 2026"
  },
  {
    event: "Irani Cup 2026 (Domestic Cricket)",
    winner: "Mumbai (Claimed title based on first-innings lead vs Rest of India)",
    country: "India",
    placeHeld: "BRSABV Ekana Cricket Stadium, Lucknow",
    period: "October 2026"
  },
  {
    event: "US Open 2026 (Tennis) — Men's Singles",
    winner: "Carlos Alcaraz",
    country: "Spain",
    placeHeld: "Flushing Meadows, New York, USA",
    period: "September 2026"
  },
  {
    event: "US Open 2026 (Tennis) — Women's Singles",
    winner: "Coco Gauff",
    country: "United States",
    placeHeld: "Flushing Meadows, New York, USA",
    period: "September 2026"
  },
  {
    event: "Duleep Trophy 2026 (Cricket)",
    winner: "India A (Captain: Mayank Agarwal)",
    country: "India",
    placeHeld: "Anantapur & Bengaluru, India",
    period: "September 2026"
  },
  {
    event: "FIFA World Cup 2026",
    winner: "Spain",
    country: "Spain",
    placeHeld: "USA, Canada & Mexico",
    period: "July 2026"
  },
  {
    event: "Wimbledon 2026 — Gentlemen's Singles",
    winner: "Jannik Sinner",
    country: "Italy",
    placeHeld: "London, United Kingdom",
    period: "July 2026"
  },
  {
    event: "Wimbledon 2026 — Ladies' Singles",
    winner: "Linda Nosková",
    country: "Czech Republic",
    placeHeld: "London, United Kingdom",
    period: "July 2026"
  },
  {
    event: "Weightlifting World Championships 2026",
    winner: "Mirabai Chanu (Gold in 49kg category)",
    country: "India",
    placeHeld: "Phuket, Thailand",
    period: "August 2026"
  }
];
