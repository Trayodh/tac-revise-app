// 5. AI GENERATOR DATA TEMPLATES
// ==========================================
const AI_TOPIC_TEMPLATES = {
  "matrices": {
    topic: "Matrices and Determinants",
    questions: [
      {
        question: "If A is a square matrix of order 3 and |A| = 5, what is the value of |2A|?",
        options: ["10", "40", "20", "80"],
        correct: 1,
        explanation: "For a matrix A of order n, the property is |kA| = kⁿ|A|. Here, n = 3, k = 2, and |A| = 5. So, |2A| = 2³ * 5 = 8 * 5 = 40. Option B is correct."
      },
      {
        question: "If A and B are symmetric matrices of same order, then AB - BA is always a:",
        options: ["Symmetric matrix", "Skew-symmetric matrix", "Identity matrix", "Zero matrix"],
        correct: 1,
        explanation: "Let X = AB - BA. Take transpose: Xᵀ = (AB - BA)ᵀ = (AB)ᵀ - (BA)ᵀ = BᵀAᵀ - AᵀBᵀ. Since A and B are symmetric, Aᵀ = A and Bᵀ = B. So Xᵀ = BA - AB = -(AB - BA) = -X. Since Xᵀ = -X, the matrix is skew-symmetric. Option B is correct."
      },
      {
        question: "If the determinant of matrix [[x, 2], [3, x]] is 10, what are the possible values of x?",
        options: ["±4", "±2", "±16", "0"],
        correct: 0,
        explanation: "Det = (x * x) - (2 * 3) = x² - 6. Set this to 10: x² - 6 = 10 => x² = 16 => x = ±4. Option A is correct."
      }
    ]
  },
  "fundamental-rights": {
    topic: "Fundamental Rights (Polity)",
    questions: [
      {
        question: "Which Fundamental Right cannot be suspended even during a National Emergency declared under Article 352?",
        options: ["Article 19", "Articles 20 and 21", "Articles 14 and 19", "Article 21 and 22"],
        correct: 1,
        explanation: "By the 44th Amendment Act, the right to protection in respect of conviction for offences (Article 20) and the right to life and personal liberty (Article 21) cannot be suspended during emergency. Option B is correct."
      },
      {
        question: "Which Writ is issued by a court to command a public official to perform a duty they have failed or refused to do?",
        options: ["Habeas Corpus", "Mandamus", "Certiorari", "Quo Warranto"],
        correct: 1,
        explanation: "Mandamus literally means 'We Command'. It is issued to a public authority to perform legal duties which they have failed/refused to do. Option B is correct."
      }
    ]
  },
  "optics": {
    topic: "Lenses & Reflection (Physics)",
    questions: [
      {
        question: "A concave mirror produces a real image of size 3 times that of the object. If the object is placed 10 cm from the mirror, where is the image formed?",
        options: ["-30 cm", "-10 cm", "+30 cm", "+10 cm"],
        correct: 0,
        explanation: "Magnification m = -v/u. Since the image is real, m = -3. The object distance u = -10 cm. So, -3 = -v / (-10) => v = -30 cm. The negative sign implies the image is formed in front of the mirror. Option A is correct."
      },
      {
        question: "What is the refractive index of a medium if the speed of light in it is 2 * 10⁸ m/s? (Speed of light in vacuum c = 3 * 10⁸ m/s)",
        options: ["1.5", "1.2", "2.0", "1.33"],
        correct: 0,
        explanation: "Refractive index n = c / v. n = (3 * 10⁸) / (2 * 10⁸) = 1.5. Option A is correct."
      }
    ]
  },
  "commands": {
    topic: "Military Commands & Headquarters",
    questions: [
      {
        question: "Where is the headquarters of the Eastern Command of the Indian Navy located?",
        options: ["Chennai", "Kochi", "Visakhapatnam", "Kolkata"],
        correct: 2,
        explanation: "The Eastern Naval Command is headquartered in Visakhapatnam, Andhra Pradesh. The Western is in Mumbai, and Southern in Kochi. Option C is correct."
      },
      {
        question: "The Maintenance Command of the Indian Air Force is located at:",
        options: ["Bengaluru", "New Delhi", "Nagpur", "Shillong"],
        correct: 2,
        explanation: "The Maintenance Command of the Indian Air Force has its headquarters in Nagpur, Maharashtra. Option C is correct."
      }
    ]
  },
  "schedules-constitution": {
    topic: "Schedules of the Constitution",
    questions: [
      {
        question: "Which amendment added the Ninth Schedule to the Constitution of India?",
        options: ["First Amendment, 1951", "Forty-Second Amendment, 1976", "Forty-Fourth Amendment, 1978", "Seventh Amendment, 1956"],
        correct: 0,
        explanation: "The Ninth Schedule was added by the 1st Constitutional Amendment in 1951 to protect land reform laws from judicial review. Option A is correct."
      },
      {
        question: "The provision for the administration of scheduled tribes in the states of Assam, Meghalaya, Tripura, and Mizoram is contained in which Schedule?",
        options: ["Fifth Schedule", "Sixth Schedule", "Seventh Schedule", "Eighth Schedule"],
        correct: 1,
        explanation: "The Sixth Schedule specifically addresses administrative provisions for tribal areas in Assam, Meghalaya, Tripura, and Mizoram. Option B is correct."
      }
    ]
  },
  "newton-laws": {
    topic: "Newton's Laws of Motion (Physics)",
    questions: [
      {
        question: "The working principle of a rocket propulsion system is based on which law of Newton?",
        options: ["First Law", "Second Law", "Third Law", "Law of Gravitation"],
        correct: 2,
        explanation: "Rocket propulsion is based on Newton's Third Law (Action & Reaction). The escaping exhaust gases exert an equal and opposite upward thrust on the rocket body. Option C is correct."
      },
      {
        question: "The coefficient of static friction is always:",
        options: ["Less than coefficient of kinetic friction", "Greater than coefficient of kinetic friction", "Equal to coefficient of kinetic friction", "Zero"],
        correct: 1,
        explanation: "Static friction is generally higher than kinetic friction because surfaces interlock more deeply when stationary. Therefore, μs > μk. Option B is correct."
      }
    ]
  },
  "joint-exercises": {
    topic: "Joint Military Exercises",
    questions: [
      {
        question: "Bilateral military exercise 'Surya Kiran' is conducted between India and which of the following nations?",
        options: ["Bangladesh", "Sri Lanka", "Nepal", "Bhutan"],
        correct: 2,
        explanation: "Exercise Surya Kiran is a bilateral infantry exercise between the Indian Army and the Nepalese Army. Option C is correct."
      },
      {
        question: "Which of the following is a joint tri-service exercise of India with Russia?",
        options: ["Exercise Indra", "Exercise Vajra Prahar", "Exercise Hand-in-Hand", "Exercise Shakti"],
        correct: 0,
        explanation: "Exercise Indra is a joint tri-services military exercise conducted between India and Russia. Option A is correct."
      }
    ]
  },
  "acids-bases": {
    topic: "Acids, Bases & Salts (Chemistry)",
    questions: [
      {
        question: "Which chemical compound is known as Plaster of Paris?",
        options: ["CaSO₄ · 2H₂O", "CaSO₄ · 0.5H₂O", "Na₂CO₃ · 10H₂O", "NaHCO₃"],
        correct: 1,
        explanation: "Plaster of Paris is Calcium Sulphate Hemihydrate (CaSO₄ · 0.5H₂O). Gypsum is CaSO₄ · 2H₂O. Option B is correct."
      },
      {
        question: "What color is phenolphthalein indicator in a basic/alkaline solution?",
        options: ["Colorless", "Deep Pink/Red", "Yellow", "Blue"],
        correct: 1,
        explanation: "Phenolphthalein turns deep pink in basic solutions (pH > 8.2) and remains completely colorless in acidic and neutral solutions. Option B is correct."
      }
    ]
  },
  "history-movement": {
    topic: "Indian National Movement",
    questions: [
      {
        question: "Which session of the Indian National Congress passed the famous 'Purna Swaraj' (Complete Independence) resolution?",
        options: ["Surat Session, 1907", "Lucknow Session, 1916", "Lahore Session, 1929", "Karachi Session, 1931"],
        correct: 2,
        explanation: "The Purna Swaraj declaration was promulgated by the Indian National Congress at the Lahore Session in December 1929, presided over by Jawaharlal Nehru. Option C is correct."
      },
      {
        question: "In which year did Mahatma Gandhi lead the Dandi March (Salt Satyagraha)?",
        options: ["1919", "1922", "1930", "1942"],
        correct: 2,
        explanation: "The Dandi March started from Sabarmati Ashram on March 12, 1930, and concluded at Dandi on April 6, 1930, marking the launch of the Civil Disobedience Movement. Option C is correct."
      },
      {
        question: "Who was the Governor-General of India during the Partition of Bengal in 1905?",
        options: ["Lord Ripon", "Lord Curzon", "Lord Chelmsford", "Lord Irwin"],
        correct: 1,
        explanation: "Lord Curzon was the Governor-General (Viceroy) who announced the Partition of Bengal in 1905, which triggered the Swadeshi and Boycott Movement. Option B is correct."
      }
    ]
  },
  "indian-monsoon": {
    topic: "Monsoon & Soils of India",
    questions: [
      {
        question: "Which winds are responsible for winter rainfall on the Coromandel Coast (Tamil Nadu) of India?",
        options: ["South-West Monsoon", "Western Disturbances", "North-East Monsoon (Retreating Monsoon)", "Local Land Breezes"],
        correct: 2,
        explanation: "The North-East Monsoon (retreating monsoon) picks up moisture over the Bay of Bengal and brings rainfall to the Coromandel coast (Tamil Nadu) during October-December. Option C is correct."
      },
      {
        question: "Which type of soil in India is self-ploughing in character and develops deep cracks when dry?",
        options: ["Alluvial Soil", "Laterite Soil", "Black Soil (Regur)", "Red Soil"],
        correct: 2,
        explanation: "Black soil (also called Regur or Black Cotton soil) is highly argillaceous (clayey) and expands when wet, contracting when dry to form deep cracks, which aids in self-aeration (self-ploughing). Option C is correct."
      },
      {
        question: "Through which of the following mountain passes does the River Sutlej enter India from Tibet?",
        options: ["Zoji La", "Shipki La", "Nathu La", "Lipulekh"],
        correct: 1,
        explanation: "The Sutlej River enters India from Tibet through the Shipki La pass in Himachal Pradesh. Option B is correct."
      }
    ]
  },
  "rbi-monetary": {
    topic: "RBI & Monetary Policy",
    questions: [
      {
        question: "What is the interest rate at which the RBI lends short-term money to commercial banks against government securities?",
        options: ["Reverse Repo Rate", "Repo Rate", "Bank Rate", "Statutory Liquidity Rate (SLR)"],
        correct: 1,
        explanation: "Repo Rate (Repurchase Option Rate) is the rate at which the RBI lends money to commercial banks for short terms. Option B is correct."
      },
      {
        question: "Which of the following is classified as an indirect tax in India?",
        options: ["Corporate Income Tax", "Wealth Tax", "Goods and Services Tax (GST)", "Personal Income Tax"],
        correct: 2,
        explanation: "GST is a comprehensive, multi-stage, destination-based indirect tax in India, whereas income taxes are direct taxes. Option C is correct."
      },
      {
        question: "The Harrod-Domar model formed the basis of which Five Year Plan of India?",
        options: ["First Five Year Plan", "Second Five Year Plan", "Third Five Year Plan", "Fourth Five Year Plan"],
        correct: 0,
        explanation: "The First Five Year Plan (1951-1956) was based on the Harrod-Domar model and focused heavily on agriculture. The Second was based on the Mahalanobis model. Option A is correct."
      }
    ]
  },
  "biology": {
    topic: "Cell Biology & Human Physiology",
    questions: [
      {
        question: "Which of the following cell organelles is known as the 'Suicide Bag' of the cell?",
        options: ["Ribosome", "Mitochondria", "Lysosome", "Golgi Apparatus"],
        correct: 2,
        explanation: "Lysosomes contain highly active hydrolytic enzymes. Under cellular stress or damage, these lysosomes may burst, digesting the cell itself. Hence they are called 'Suicide Bags'. Option C is correct."
      },
      {
        question: "Which blood group is considered the 'Universal Donor' because it lacks A, B, and Rh antigens on the RBC surface?",
        options: ["AB Positive", "O Positive", "AB Negative", "O Negative"],
        correct: 3,
        explanation: "O-negative blood lacks A, B, and Rh antigens. Therefore, it does not trigger an immune reaction in any recipient, making it the universal donor. Option D is correct."
      },
      {
        question: "Insulin, which regulates blood glucose levels, is secreted by which cells of the pancreas?",
        options: ["Alpha cells", "Beta cells", "Delta cells", "F cells"],
        correct: 1,
        explanation: "Beta cells of the Islets of Langerhans in the pancreas secrete insulin to lower blood sugar. Alpha cells secrete glucagon to raise it. Option B is correct."
      }
    ]
  }
};

// ==========================================