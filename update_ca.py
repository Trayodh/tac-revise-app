import sys

try:
    with open('ca_data.js', 'r', encoding='utf-8') as f:
        content = f.read()

    new_data = '''window.CA_VISITS_DATA = [
  {
    visit: "PM Modi\\'s State Visit to Indonesia",
    period: "July 2026",
    purpose: "State visit at the invitation of President Prabowo Subianto.",
    deals: "Reaffirmed the Comprehensive Strategic Partnership. Signed agreements on maritime security, defense (BrahMos and Astra missiles), critical minerals, technology, and food security. PM Modi was conferred with Indonesia\\'s highest honor, the \\'Bintang Adipurna\\'."
  },
  {
    visit: "PM Modi to Australia",
    period: "July 2026",
    purpose: "Bilateral meeting with PM Anthony Albanese in Melbourne.",
    deals: "Focused on strengthening the Comprehensive Strategic Partnership, defense, security, trade, investment, and emerging technologies."
  },
  {
    visit: "PM Modi\\'s State Visit to New Zealand",
    period: "July 2026",
    purpose: "State visit at the invitation of PM Christopher Luxon.",
    deals: "First state visit by an Indian PM to New Zealand in four decades, focusing on enhancing bilateral relations and Indo-Pacific cooperation."
  },
  {
    visit: "Japanese PM Sanae Takaichi to India",
    period: "July 2026",
    purpose: "16th India-Japan Annual Summit.",
    deals: "Focused on defense, security, and the \\'Japan-India Cooperative Biogas for Growth Initiative\\'."
  },
  {
    visit: "PM Modi\\'s State Visit to Seychelles",
    period: "June 2026",
    purpose: "State Visit.",
    deals: "Strengthened maritime security and capacity building in the Indian Ocean region."
  },
  {
    visit: "PM Modi to France and Slovakia",
    period: "June 2026",
    purpose: "Bilateral Visits.",
    deals: "Elevated bilateral relationship with Slovakia to a \\'Comprehensive Partnership\\'. Strengthened strategic ties with France."
  },
  {
    visit: "President of Myanmar to India",
    period: "May 2026",
    purpose: "Official Visit.",
    deals: "Discussions on border security, connectivity projects, and bilateral cooperation."
  },
  {
    visit: "PM Modi to Malaysia",
    period: "Feb 2026",
    purpose: "Bilateral Visit.",
    deals: "Strengthened Comprehensive Strategic Partnership with Prime Minister Anwar Ibrahim."
  }
];

// =============================================================================
// SECTION: AWARDS & HONOURS
// =============================================================================
window.CA_AWARDS_DATA = [
  {
    awardName: "Padma Vibhushan",
    categoryOfWork: "Art",
    workName: "Contribution to Indian Cinema",
    recipient: "Dharmendra Singh Deol (Posthumous)",
    recipientCountry: "India",
    givingCountry: "India"
  },
  {
    awardName: "Padma Vibhushan",
    categoryOfWork: "Public Affairs",
    workName: "Distinguished Public Service",
    recipient: "K.T. Thomas",
    recipientCountry: "India",
    givingCountry: "India"
  },
  {
    awardName: "Padma Vibhushan",
    categoryOfWork: "Art",
    workName: "Contribution to Hindustani Classical Music",
    recipient: "N. Rajam",
    recipientCountry: "India",
    givingCountry: "India"
  },
  {
    awardName: "Padma Vibhushan",
    categoryOfWork: "Public Affairs",
    workName: "Distinguished Public Service",
    recipient: "V.S. Achuthanandan (Posthumous)",
    recipientCountry: "India",
    givingCountry: "India"
  },
  {
    awardName: "Bintang Adipurna",
    categoryOfWork: "Diplomacy and Bilateral Relations",
    workName: "Strengthening India-Indonesia ties",
    recipient: "Narendra Modi",
    recipientCountry: "India",
    givingCountry: "Indonesia"
  },
  {
    awardName: "UN Military Gender Advocate of the Year",
    categoryOfWork: "Military Peacekeeping",
    workName: "Advancing gender equality in UN operations",
    recipient: "Major Abhilasha Barak",
    recipientCountry: "India",
    givingCountry: "United Nations"
  },
  {
    awardName: "Dag Hammarskjöld Medal",
    categoryOfWork: "Military Peacekeeping",
    workName: "Supreme sacrifice in UN peacekeeping missions",
    recipient: "Havildar Sanjay Singh & Constable Sushil Kumar Khadka",
    recipientCountry: "India",
    givingCountry: "United Nations"
  },
  {
    awardName: "AIAA Goddard Astronautics Award",
    categoryOfWork: "Space Exploration",
    workName: "Chandrayaan-3 Mission",
    recipient: "ISRO",
    recipientCountry: "India",
    givingCountry: "United States (AIAA)"
  }
];'''

    start_idx = content.find('window.CA_VISITS_DATA = [')
    end_marker = '];\\n\\n// =============================================================================\\n// SECTION B: TRADE DEALS & FREE TRADE AGREEMENTS (FTAs)'
    end_idx = content.find(end_marker)

    if start_idx != -1 and end_idx != -1:
        new_content = content[:start_idx] + new_data + '\\n\\n// =============================================================================\\n// SECTION B: TRADE DEALS & FREE TRADE AGREEMENTS (FTAs)' + content[end_idx + len(end_marker):]
        with open('ca_data.js', 'w', encoding='utf-8') as f:
            f.write(new_content)
        print('Successfully updated ca_data.js')
    else:
        print('Failed to find start or end marker')
        sys.exit(1)
except Exception as e:
    print('Error:', e)
    sys.exit(1)
