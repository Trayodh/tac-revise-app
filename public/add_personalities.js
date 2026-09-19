const fs = require('fs');

const notesFile = 'notes_extra_history.js';
let content = fs.readFileSync(notesFile, 'utf8');

const additions = {
  'architecture': `
  <div style="margin-top: 24px; border-top: 1px solid var(--border); padding-top: 16px;">
    <h3 style="color: var(--accent); margin-bottom: 12px;">Notable Personalities & Recognitions</h3>
    <ul style="list-style-type: none; padding-left: 0;">
      <li style="margin-bottom: 12px;"><strong>Balkrishna Vithaldas (B.V.) Doshi:</strong> Pioneer of modernist and brutalist architecture in India. <em>Recognition:</em> First Indian to win the <strong>Pritzker Architecture Prize</strong> (2018) and awarded the Royal Gold Medal (2022).</li>
      <li style="margin-bottom: 12px;"><strong>Charles Correa:</strong> Renowned for adapting Modernism to Indian climates and cultures (e.g., Jawahar Kala Kendra). <em>Recognition:</em> Padma Vibhushan (2006), RIBA Royal Gold Medal (1984).</li>
      <li style="margin-bottom: 12px;"><strong>Laurie Baker:</strong> Known as the "Gandhi of Architecture" for his cost-effective, energy-efficient, and sustainable brick architecture in Kerala.</li>
      <li><em>Key International Award:</em> The <strong>Aga Khan Award for Architecture</strong>, frequently recognizing projects in India for excellence in Islamic and regional architectural contexts.</li>
    </ul>
  </div>`,
  'paintings': `
  <div style="margin-top: 24px; border-top: 1px solid var(--border); padding-top: 16px;">
    <h3 style="color: var(--accent); margin-bottom: 12px;">Notable Personalities & Recognitions</h3>
    <ul style="list-style-type: none; padding-left: 0;">
      <li style="margin-bottom: 12px;"><strong>Raja Ravi Varma:</strong> Fused European academic art with purely Indian sensibilities and iconography. Famous for making lithographs accessible to the masses.</li>
      <li style="margin-bottom: 12px;"><strong>Amrita Sher-Gil:</strong> Pioneer of modern Indian art, often called the "Frida Kahlo of India," blending Western post-impressionism with Indian themes.</li>
      <li style="margin-bottom: 12px;"><strong>Maqbool Fida (M.F.) Husain:</strong> A founding member of the Progressive Artists' Group, known for bold, vibrantly colored narrative paintings. <em>Recognition:</em> Padma Vibhushan.</li>
      <li><em>Key National Award:</em> The <strong>Lalit Kala Akademi Fellowship</strong>, the highest honor in the fine arts conferred by the Government of India.</li>
    </ul>
  </div>`,
  'dance-music': `
  <div style="margin-top: 24px; border-top: 1px solid var(--border); padding-top: 16px;">
    <h3 style="color: var(--accent); margin-bottom: 12px;">Notable Personalities & Recognitions</h3>
    <ul style="list-style-type: none; padding-left: 0;">
      <li style="margin-bottom: 12px;"><strong>Pandit Ravi Shankar (Sitar):</strong> Brought Indian classical music to the global stage. <em>Recognition:</em> Bharat Ratna (1999), 5 Grammy Awards.</li>
      <li style="margin-bottom: 12px;"><strong>M.S. Subbulakshmi (Carnatic Vocal):</strong> Legendary Carnatic singer. <em>Recognition:</em> First musician to receive the <strong>Bharat Ratna</strong> (1998) and the Ramon Magsaysay Award.</li>
      <li style="margin-bottom: 12px;"><strong>Pandit Birju Maharaj (Kathak):</strong> Master of the Lucknow Kalka-Bindadin gharana of Kathak. <em>Recognition:</em> Padma Vibhushan (1986).</li>
      <li style="margin-bottom: 12px;"><strong>Rukmini Devi Arundale:</strong> Visionary who revived Bharatanatyam from its original 'Sadhir' style.</li>
      <li><em>Key National Award:</em> The <strong>Sangeet Natak Akademi Award</strong> and Fellowship (Akademi Ratna), India's highest recognition for performing arts.</li>
    </ul>
  </div>`,
  'literature': `
  <div style="margin-top: 24px; border-top: 1px solid var(--border); padding-top: 16px;">
    <h3 style="color: var(--accent); margin-bottom: 12px;">Notable Personalities & Recognitions</h3>
    <ul style="list-style-type: none; padding-left: 0;">
      <li style="margin-bottom: 12px;"><strong>Rabindranath Tagore:</strong> Poet, writer, and philosopher. <em>Recognition:</em> First non-European to win the <strong>Nobel Prize in Literature</strong> (1913) for Gitanjali.</li>
      <li style="margin-bottom: 12px;"><strong>Arundhati Roy / Salman Rushdie / Amitav Ghosh:</strong> Giants of contemporary Indian-English literature. <em>Recognition:</em> Booker Prize winners (Roy for 'The God of Small Things', Rushdie for 'Midnight's Children'). Amitav Ghosh won the Jnanpith.</li>
      <li style="margin-bottom: 12px;"><strong>Munshi Premchand:</strong> The "Upanyas Samrat" (Emperor of Novels), renowned for his modern Hindi-Urdu literature (e.g., Godaan).</li>
      <li><em>Key National Awards:</em> <strong>Jnanpith Award</strong> (highest Indian literary award) and <strong>Sahitya Akademi Award</strong> (given for 24 Indian languages).</li>
    </ul>
  </div>`,
  'religion-festivals': `
  <div style="margin-top: 24px; border-top: 1px solid var(--border); padding-top: 16px;">
    <h3 style="color: var(--accent); margin-bottom: 12px;">Global Recognitions & Key Figures</h3>
    <ul style="list-style-type: none; padding-left: 0;">
      <li style="margin-bottom: 12px;"><strong>Swami Vivekananda:</strong> Introduced Hindu philosophies of Vedanta and Yoga to the Western world at the 1893 Parliament of the World's Religions in Chicago.</li>
      <li style="margin-bottom: 12px;"><strong>UNESCO Intangible Cultural Heritage:</strong> Several Indian festivals and religious traditions have received global recognition from UNESCO to preserve their legacy.</li>
      <li style="margin-bottom: 12px;"><strong>Durga Puja in Kolkata (2021):</strong> Recognized by UNESCO for its large-scale art installations and public socio-cultural celebration.</li>
      <li><strong>Kumbh Mela (2017):</strong> Recognized by UNESCO as the largest peaceful congregation of pilgrims on earth.</li>
    </ul>
  </div>`,
  'heritage-sites': `
  <div style="margin-top: 24px; border-top: 1px solid var(--border); padding-top: 16px;">
    <h3 style="color: var(--accent); margin-bottom: 12px;">Key Personalities & Global Recognitions</h3>
    <ul style="list-style-type: none; padding-left: 0;">
      <li style="margin-bottom: 12px;"><strong>Alexander Cunningham:</strong> The first Director-General of the Archaeological Survey of India (ASI), often called the "Father of Indian Archaeology".</li>
      <li style="margin-bottom: 12px;"><strong>John Marshall:</strong> ASI Director-General responsible for the excavation of Harappa and Mohenjo-Daro, revealing the Indus Valley Civilization to the world.</li>
      <li style="margin-bottom: 12px;"><strong>UNESCO World Heritage Sites:</strong> India has 40+ recognized sites. Recent additions include <strong>Dholavira</strong> (Harappan City) and the <strong>Sacred Ensembles of the Hoysalas</strong>.</li>
      <li><em>Global Status:</em> A UNESCO designation provides international protection, funding, and tourism boosts to critical historical and natural sites.</li>
    </ul>
  </div>`
};

for (const [key, htmlStr] of Object.entries(additions)) {
  const startStr = 'EXPANDED_NOTES_DATA["' + key + '"] = `';
  const startIdx = content.indexOf(startStr);
  
  if (startIdx === -1) {
    console.log('Key ' + key + ' not found in content.');
    continue;
  }
  
  const endIdx = content.indexOf('\`;', startIdx);
  if (endIdx === -1) {
    console.log('End backtick not found for ' + key + '.');
    continue;
  }
  
  // Inject the new HTML right before the closing backtick
  content = content.slice(0, endIdx) + htmlStr + '\\n' + content.slice(endIdx);
  console.log('Successfully updated ' + key + '.');
}

fs.writeFileSync(notesFile, content, 'utf8');
console.log('Finished updating notes_extra_history.js with personalities and recognitions.');
