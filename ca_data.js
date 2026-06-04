// =============================================================================
// CURRENT AFFAIRS DATA — SINGLE SOURCE OF TRUTH
// =============================================================================
// HOW TO UPDATE THIS FILE:
//
// AFTER EACH CDS EXAM:
//   1. Update CA_META.examCycle to the next exam (e.g., "CDS II 2026")
//   2. Update CA_META.lastRefreshed to today's date
//   3. Clear CA_VISITS_DATA and CA_FTA_DATA arrays — replace with new entries
//   4. Keep CA_DATES_DATA as-is but update `theme` fields for the current year
//
// WHEN AI GETS NEW INFO:
//   - Simply replace the relevant object in the array below
//   - Old entry out, new entry in — renderers pick up changes automatically
//
// STRUCTURE: Each section is a separate exported array/object
// =============================================================================

window.CA_META = {
  examCycle: "CDS II 2026",        // UPDATE AFTER EACH EXAM
  lastRefreshed: "June 2026",      // UPDATE AFTER EACH REFRESH
  coverageFrom: "January 2026",
  coverageTo: "June 2026",
};

// =============================================================================
// SECTION A: PM VISITS & BILATERAL AGREEMENTS
// UPDATE: Clear and re-populate after each CDS exam cycle
// =============================================================================
window.CA_VISITS_DATA = [
  {
    visit: "French President Emmanuel Macron to India",
    period: "Jan 2026",
    purpose: "Republic Day Chief Guest & Bilateral Summit.",
    deals: "Defence Industrial Roadmap: Co-designing and co-production of military hardware (advanced helicopter and combat aircraft engines), space launch partnerships, and a new consulate in Marseille.",
  },
  {
    visit: "PM Modi to Abu Dhabi, UAE",
    period: "Feb 2026",
    purpose: "Strategic Bilateral Summit & CEPA Review.",
    deals: "Comprehensive Economic Partnership Agreement (CEPA) Review: Strengthening defence ties, joint naval exercises in the Arabian Sea, UPI expansion across UAE, and maritime security partnerships.",
  },
  {
    visit: "PM Modi to Europe (Germany, Denmark, France)",
    period: "Mid 2026",
    purpose: "India-Nordic Summit & Key Bilaterals.",
    deals: "Indo-Pacific Security & Defence Tech: Enhancing strategic autonomy, boosting Make in India in defence, and maritime cooperation in the Indian Ocean Region.",
  },
  {
    visit: "PM Modi to Moscow, Russia",
    period: "Jul 2026",
    purpose: "22nd India-Russia Annual Summit.",
    deals: "RELOS (Reciprocal Logistics Pact): Base replenishment access, localized manufacturing of Russian Su-30MKI/T-90 spare parts in India, Kudankulam NPP fuel supply, and $100B trade target by 2030.",
  },
  {
    visit: "PM Modi to Washington, USA",
    period: "Sep 2026",
    purpose: "Quad Leaders' Summit & Bilateral Meetings.",
    deals: "iCET Expansion: Partnerships in quantum and safe AI, formalization of $3B MQ-9B Predator drone procurement (31 units), NASA flight training for ISRO astronauts, and US CHIPS Act funding for testing fabs in India.",
  },
  {
    visit: "Spanish PM Pedro Sanchez to India",
    period: "Oct 2026",
    purpose: "Inauguration of Vadodara C-295 assembly facility.",
    deals: "Tata-Airbus private military aircraft plant inauguration, and rail infrastructure MoUs between Adif and Indian Railways.",
  },
  {
    visit: "PM Modi to Singapore & Brunei",
    period: "Nov 2026",
    purpose: "Act East Policy Expansion.",
    deals: "Semiconductor Supply Chain Partnership: MoU for tech/talent exchange and supply chain mapping, UPI-PayNow integration for cross-border remittance, and direct flight routes with Brunei.",
  },
];

// =============================================================================
// SECTION B: TRADE DEALS & FREE TRADE AGREEMENTS (FTAs)
// UPDATE: Add new FTAs as concluded; replace entries once terms are finalised
// =============================================================================
window.CA_FTA_DATA = [
  {
    deal: "India-EU Free Trade Agreement (FTA) — 'Mother of All Deals'",
    status: "Under Negotiation (resumed 2023, active rounds 2025-26)",
    scope: "Comprehensive trade pact covering goods, services, investments, and GI protections. EU is India's largest trading partner (~EUR 124 billion trade). Key issues: market access for Indian pharma and IT, EU concerns on IPR and data protection.",
    significance: "Strategically critical for India's manufacturing ambitions and Europe's supply-chain de-risking from China.",
  },
  {
    deal: "India-UK Free Trade Agreement (FTA)",
    status: "Concluded & Ratified (May 2025)",
    scope: "India's most significant FTA in years — covering tariff reductions on 99% of UK exports to India and 90% of Indian goods to UK. Key gains: Scotch whisky & cars duty cuts; India gains easier access for textiles, garments, and IT professionals.",
    significance: "First major Western FTA concluded by India; strategic pivot in post-Brexit UK foreign policy.",
  },
  {
    deal: "India-GCC (Gulf Cooperation Council) FTA",
    status: "Under Negotiation (resumed 2024)",
    scope: "Covers 6 Gulf nations (Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, Oman). Focus areas: energy, petrochemicals, logistics, and digital services. UAE already has a separate CEPA with India (2022).",
    significance: "Gulf region accounts for ~18% of India's total trade and hosts 9 million Indian diaspora.",
  },
  {
    deal: "India-Canada Comprehensive Economic Partnership Agreement (CEPA)",
    status: "Negotiations Suspended (pending diplomatic thaw post-2023 Nijjar crisis)",
    scope: "Covering goods, services, investments. Canada is a key source of pulses, fertilizers, and potash for India. Resumption contingent on bilateral diplomatic normalization.",
    significance: "Highlights how geopolitics directly impacts trade negotiations.",
  },
  {
    deal: "India-ASEAN FTA — Review & Upgrade",
    status: "Review Underway (2024-2026)",
    scope: "Original FTA (2010) led to trade deficit widening; review aims to rebalance — tighter rules of origin, digital trade chapter, and services liberalization.",
    significance: "ASEAN is India's 4th largest trading partner; Act East Policy cornerstone.",
  },
  {
    deal: "India-Australia Economic Cooperation & Trade Agreement (ECTA)",
    status: "In Force (December 2022); Upgraded CECA under negotiation",
    scope: "Interim deal covers 85%+ of trade lines. Comprehensive CECA (Comprehensive Economic Cooperation Agreement) to also cover services and investment.",
    significance: "Part of Quad strategic alignment; supports critical minerals (lithium, cobalt) supply chain for India.",
  },
  {
    deal: "India-Sri Lanka ETCA (Economic and Technology Cooperation Agreement)",
    status: "Negotiations Ongoing (2024-26)",
    scope: "Builds on existing FTA (2000); new ETCA to add services, digital trade, and investment. India is Sri Lanka's largest trading partner.",
    significance: "Critical for India's neighbourhood-first policy and strategic depth in the Indian Ocean.",
  },
];

// =============================================================================
// SECTION C: IMPORTANT DATES & THEMES
// UPDATE: Only update the `theme` field each year — dates and significance stay permanent
// =============================================================================
window.CA_DATES_DATA = [
  // --- JANUARY ---
  { date: "Jan 9",  name: "Pravasi Bharatiya Divas", theme: "\"Reliable Partners for India's Progress in Amrit Kaal\"", significance: "Marks the return of Mahatma Gandhi from South Africa to Mumbai in 1915, honoring the contribution of the overseas Indian community." },
  { date: "Jan 12", name: "National Youth Day", theme: "\"It's all in the mind\"", significance: "Birth anniversary of Swami Vivekananda, celebrating youth leadership and nation-building." },
  { date: "Jan 15", name: "Indian Army Day", theme: "\"In Service of the Nation\"", significance: "Honors the taking over of the Indian Army by Field Marshal K.M. Cariappa in 1949." },
  { date: "Jan 25", name: "National Voters' Day", theme: "\"Nothing Like Voting, I Vote For Sure\"", significance: "Marks the foundation day of the Election Commission of India (1950) to enhance electoral participation." },
  { date: "Jan 26", name: "Republic Day", theme: "\"Viksit Bharat\" (Developed India)", significance: "Marks the adoption of the Constitution of India in 1950." },
  // --- FEBRUARY ---
  { date: "Feb 1",  name: "Indian Coast Guard Day", theme: "\null", significance: "Commemorates the establishment of the Coast Guard in 1977 to protect maritime interests." },
  { date: "Feb 2",  name: "World Wetlands Day", theme: "\"Wetlands and Human Wellbeing\"", significance: "Marks the signing of the Ramsar Convention on Wetlands in 1971 to promote wetland conservation." },
  { date: "Feb 13", name: "World Radio Day", theme: "\"Radio: A century informing, entertaining and educating\"", significance: "Commemorates the anniversary of the first broadcast by United Nations Radio, highlighting radio as a medium for peace." },
  { date: "Feb 20", name: "World Day of Social Justice", theme: "\"Bridging Gaps, Building Alliances\"", significance: "Promotes international efforts in poverty eradication, gender equality, and social justice." },
  { date: "Feb 28", name: "National Science Day", theme: "\"Indigenous Technologies for Viksit Bharat\"", significance: "Marks the discovery of the Raman Effect by Sir C.V. Raman in 1928." },
  // --- MARCH ---
  { date: "Mar 3",  name: "World Wildlife Day", theme: "\"Connecting People and Planet: Exploring Digital Innovation in Wildlife Conservation\"", significance: "Dedicated to celebrating and raising awareness of the world's wild fauna and flora." },
  { date: "Mar 8",  name: "International Women's Day", theme: "\"Invest in women: Accelerate progress\"", significance: "Celebrates social, economic, cultural, and political achievements of women worldwide." },
  { date: "Mar 21", name: "International Day of Forests", theme: "\"Forests and Innovation: New Solutions for a Better World\"", significance: "Proclaimed by the UN to celebrate and raise awareness of all types of forests and woodlands." },
  { date: "Mar 22", name: "World Water Day", theme: "\"Water for Peace\"", significance: "Focuses on the critical importance of freshwater and advocating for its sustainable management." },
  { date: "Mar 23", name: "World Meteorological Day", theme: "\"At the Frontline of Climate Action\"", significance: "Marks the establishment of the World Meteorological Organization (WMO) in 1950." },
  // --- APRIL ---
  { date: "Apr 7",  name: "World Health Day", theme: "\"My health, my right\"", significance: "Promotes global health awareness — marks the foundation of WHO in 1948." },
  { date: "Apr 21", name: "Civil Services Day", theme: "\"Viksit Bharat: Empowering Citizens & Reaching the Last Mile\"", significance: "Marks the historic address of Sardar Vallabhbhai Patel in 1947 to the first batch of civil service officers." },
  { date: "Apr 22", name: "World Earth Day", theme: "\"Planet vs. Plastics\"", significance: "Advocates for environmental protection and reducing single-use plastic." },
  // --- MAY ---
  { date: "May 3",  name: "World Press Freedom Day", theme: "\"A Press for the Planet: Journalism in the Face of the Environmental Crisis\"", significance: "Proclaimed to evaluate press freedom, defend media independence, and pay tribute to journalists." },
  { date: "May 8",  name: "World Red Cross Day", theme: "\"I give for humanity\"", significance: "Celebrates the humanitarian work and principles of the Red Cross and Red Crescent movements." },
  { date: "May 11", name: "National Technology Day", theme: "\"Sustainable Future for a Developed India\"", significance: "Marks the successful Pokhran-II nuclear tests (Operation Shakti) in 1998." },
  { date: "May 21", name: "Anti-Terrorism Day", theme: "\null", significance: "Observed to spread the message of peace and humanity, marking the death anniversary of Rajiv Gandhi." },
  { date: "May 22", name: "International Day for Biological Diversity", theme: "\"Be part of the Plan\"", significance: "Promotes biodiversity conservation, sustainable utilization, and fair sharing of genetic resources." },
  { date: "May 29", name: "International Day of UN Peacekeepers", theme: "\"Fit for the future, building better together\"", significance: "Honors military, police, and civilian personnel serving in UN peacekeeping operations worldwide." },
  // --- JUNE ---
  { date: "Jun 5",  name: "World Environment Day", theme: "\"Land restoration, desertification and drought resilience\"", significance: "Promotes awareness and action to protect nature." },
  { date: "Jun 21", name: "International Yoga Day", theme: "\"Yoga for Women Empowerment\"", significance: "Global observance to celebrate the ancient Indian practice of Yoga." },
  { date: "Jun 29", name: "National Statistics Day", theme: "\"Alignment of State Indicator Framework with National Indicator Framework for Monitoring Sustainable Development Goals\"", significance: "Celebrates the birth anniversary of Professor Prasanta Chandra Mahalanobis, recognizing his role in India's planning." },
  // --- JULY ---
  { date: "Jul 11", name: "World Population Day", theme: "\"Unleashing the power of gender equality: Uplifting the voices of women and girls to unlock our world’s infinite possibilities\"", significance: "Raises global awareness on demographics, population growth, and reproductive health rights." },
  { date: "Jul 26", name: "Kargil Vijay Diwas", theme: "\null", significance: "Honors the victory of the Indian Armed Forces in Operation Vijay (1999) and the sacrifices made by soldiers." },
  // --- AUGUST ---
  { date: "Aug 15", name: "Independence Day", theme: "\"Viksit Bharat\"", significance: "Commemorates India's independence from British rule on 15 August 1947." },
  { date: "Aug 29", name: "National Sports Day", theme: "\"Sports as an enabler for an inclusive and fit society\"", significance: "Birth anniversary of hockey legend Major Dhyan Chand, promoting sports participation." },
  // --- SEPTEMBER ---
  { date: "Sep 5",  name: "National Teachers' Day", theme: "\"Teachers at the heart of education recovery\"", significance: "Commemorates the birth anniversary of India's second President, Dr. Sarvepalli Radhakrishnan." },
  { date: "Sep 8",  name: "International Literacy Day", theme: "\"Promoting literacy for a world in transition: Building the foundation for sustainable and peaceful societies\"", significance: "Proclaimed by UNESCO to raise awareness of the status of literacy and adult learning globally." },
  { date: "Sep 15", name: "Engineers' Day", theme: "\"Engineering for a Sustainable Future\"", significance: "Commemorates the birth anniversary of eminent engineer Bharat Ratna Sir M. Visvesvaraya." },
  { date: "Sep 16", name: "International Ozone Day", theme: "\"Montreal Protocol: Fixing the ozone layer and reducing climate change\"", significance: "Commemorates the signing of the Montreal Protocol in 1987 for global ozone layer protection." },
  { date: "Sep 21", name: "International Day of Peace", theme: "\"Actions for Peace: Our Ambition for the #GlobalGoals\"", significance: "Dedicated to strengthening the ideals of peace and promoting a non-violent world." },
  { date: "Sep 27", name: "World Tourism Day", theme: "\"Tourism and Peace\"", significance: "Focuses on the social, cultural, political, and economic value of tourism globally." },
  // --- OCTOBER ---
  { date: "Oct 8",  name: "Indian Air Force Day", theme: "\null", significance: "Commemorates the official establishment of the Indian Air Force in 1932." },
  { date: "Oct 16", name: "World Food Day", theme: "\"Water is life, water is food. Leave no one behind\"", significance: "Commemorates the founding of the Food and Agriculture Organization (FAO) of the United Nations in 1945." },
  { date: "Oct 24", name: "United Nations Day", theme: "\null", significance: "Marks the entry into force of the UN Charter in 1945, celebrating global cooperation." },
  { date: "Oct 31", name: "National Unity Day", theme: "\"Unity for Nation\"", significance: "Birth anniversary of Sardar Vallabhbhai Patel (Rashtriya Ekta Diwas), celebrating his role in national integration." },
  // --- NOVEMBER ---
  { date: "Nov 10", name: "World Science Day for Peace and Development", theme: "\"Building Trust in Science\"", significance: "Highlights the significant role of science in society and the need to engage the public on scientific issues." },
  { date: "Nov 19", name: "World Toilet Day", theme: "\"Accelerating Change\"", significance: "Raises global awareness and inspires action to tackle the global sanitation crisis." },
  { date: "Nov 26", name: "Constitution Day", theme: "\null", significance: "Marks the historic adoption of the Constitution of India by the Constituent Assembly in 1949 (Samvidhan Divas)." },
  // --- DECEMBER ---
  { date: "Dec 1",  name: "World AIDS Day", theme: "\"Let Communities Lead\"", significance: "Global awareness day to fight HIV and support those affected." },
  { date: "Dec 4",  name: "Indian Navy Day", theme: "\null", significance: "Celebrates the success of Operation Trident against Karachi harbor during the 1971 Indo-Pak war." },
  { date: "Dec 7",  name: "Armed Forces Flag Day", theme: "\null", significance: "Observed to honor martyrs and the men in uniform, and collect funds for their welfare." },
  { date: "Dec 10", name: "Human Rights Day", theme: "\"Freedom, Equality and Justice for All\"", significance: "Marks the adoption of the Universal Declaration of Human Rights in 1948 by the UN." },
  { date: "Dec 16", name: "Vijay Diwas", theme: "\null", significance: "Commemorates India's historic victory over Pakistan in the 1971 war, leading to the liberation of Bangladesh." },
  { date: "Dec 23", name: "National Farmers' Day", theme: "\"Delivering Smart Solutions for Sustainable Food Security and Resilience\"", significance: "Birth anniversary of Chaudhary Charan Singh (Kisan Diwas), celebrating the contribution of India's farmers." },
];
