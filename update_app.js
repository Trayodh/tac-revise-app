const fs = require('fs');

let appJs = fs.readFileSync('app.js', 'utf8');

// 1. Add English subject to NOTES_DATABASE
const englishContent = `
  english: {
    title: "English (NDA/CDS/AFCAT)",
    chapters: [
      {
        id: "grammar-rules",
        title: "Grammar & Usage",
        topics: [
          {
            id: "subject-verb-agreement",
            title: "Subject-Verb Agreement",
            notes: `
              <h3>1. Golden Rules of Subject-Verb Agreement</h3>
              <ul>
                <li><strong>Rule 1:</strong> Two singular subjects joined by 'and' take a plural verb. (e.g., Ram and Shyam <em>are</em> playing.)</li>
                <li><strong>Rule 2:</strong> If two subjects together express one idea, the verb is singular. (e.g., Bread and butter <em>is</em> his only food.)</li>
                <li><strong>Rule 3:</strong> Words joined to a singular subject by 'with', 'as well as', 'along with' do not change the number. (e.g., The captain, along with the soldiers, <em>was</em> killed.)</li>
              </ul>
            \`,
            formulas: `
              <li><strong>Either/Or, Neither/Nor:</strong> The verb agrees with the subject nearest to it.</li>
              <li><strong>Many a:</strong> Takes a singular subject and a singular verb. (e.g., Many a man <em>has</em> done this.)</li>
            \`
          },
          {
            id: "spotting-errors",
            title: "Spotting Errors Techniques",
            notes: `
              <h3>1. Common Tense Errors</h3>
              <p>Conditional sentences are heavily tested:</p>
              <ul>
                <li>If I <em>had seen</em> him, I <em>would have stopped</em> him. (Past Perfect -> Would have + V3)</li>
                <li>If I <em>were</em> a bird, I would fly. (Subjunctive mood takes 'were' for all subjects)</li>
              </ul>
            \`,
            formulas: `
              <li><strong>Scarcely/Hardly... when:</strong> Scarcely had he gone out <em>when</em> it started raining.</li>
              <li><strong>No sooner... than:</strong> No sooner had the bell rung <em>than</em> the boys ran out.</li>
            \`
          }
        ]
      },
      {
        id: "vocabulary",
        title: "Vocabulary & Comprehension",
        topics: [
          {
            id: "synonyms-antonyms",
            title: "High-Frequency Synonyms/Antonyms",
            notes: `
              <h3>1. Must-Know Words</h3>
              <ul>
                <li><strong>Audacious:</strong> Bold, daring (Antonym: Timid)</li>
                <li><strong>Clandestine:</strong> Secret, hidden (Antonym: Open, public)</li>
                <li><strong>Mitigate:</strong> Lessen, ease (Antonym: Aggravate)</li>
              </ul>
            \`,
            formulas: `
              <li><strong>Root Word Hack:</strong> 'Mal' = bad (Malign, Malevolent). 'Bene' = good (Benefactor, Benevolent).</li>
            \`
          }
        ]
      }
    ]
  },
  polity: {`;

appJs = appJs.replace('  polity: {', englishContent);

// 2. Add New Math Chapters
const newMathChapters = `
      {
        id: "algebra-complex",
        title: "Algebra & Complex Numbers",
        topics: [
          {
            id: "quadratic-eq",
            title: "Quadratic Equations",
            notes: `
              <h3>1. Nature of Roots</h3>
              <p>For ax^2 + bx + c = 0, the discriminant D = b^2 - 4ac decides the roots:</p>
              <ul>
                <li>D > 0: Real and distinct roots.</li>
                <li>D = 0: Real and equal roots.</li>
                <li>D < 0: Complex conjugate roots.</li>
              </ul>
            \`,
            formulas: `
              <li><strong>Sum of roots:</strong> \alpha + \beta = -b/a</li>
              <li><strong>Product of roots:</strong> \alpha\beta = c/a</li>
            \`
          },
          {
            id: "complex-numbers",
            title: "Complex Numbers",
            notes: `
              <h3>1. Polar Form and Modulus</h3>
              <p>A complex number z = x + iy has a modulus |z| = \sqrt{x^2 + y^2}.</p>
              <ul>
                <li><strong>Argument:</strong> \theta = \tan^{-1}(y/x)</li>
                <li><strong>De Moivre's Theorem:</strong> (\cos \theta + i\sin \theta)^n = \cos n\theta + i\sin n\theta</li>
              </ul>
            \`,
            formulas: `
              <li><strong>Cube roots of unity:</strong> 1, \omega, \omega^2 where 1 + \omega + \omega^2 = 0 and \omega^3 = 1</li>
            \`
          }
        ]
      },
      {
        id: "2d-geometry",
        title: "Coordinate Geometry (2D & 3D)",
        topics: [
          {
            id: "straight-lines",
            title: "Straight Lines",
            notes: `
              <h3>1. Equations of a Line</h3>
              <ul>
                <li><strong>Slope-Intercept:</strong> y = mx + c</li>
                <li><strong>Point-Slope:</strong> y - y_1 = m(x - x_1)</li>
                <li><strong>Normal Form:</strong> x\cos\alpha + y\sin\alpha = p</li>
              </ul>
            \`,
            formulas: `
              <li><strong>Distance from point to line:</strong> d = \\frac{|Ax_1 + By_1 + C|}{\sqrt{A^2 + B^2}}</li>
            \`
          }
        ]
      },
      {
        id: "statistics-prob",
        title: "Statistics & Probability",
        topics: [
          {
            id: "central-tendency",
            title: "Measures of Central Tendency",
            notes: `
              <h3>1. Mean, Median, Mode</h3>
              <ul>
                <li><strong>Mean:</strong> Sum of observations / Number of observations.</li>
                <li><strong>Median:</strong> Middle value when sorted.</li>
                <li><strong>Empirical Relation:</strong> Mode = 3*Median - 2*Mean</li>
              </ul>
            \`,
            formulas: `
              <li><strong>Variance:</strong> \sigma^2 = \frac{\sum (x_i - \mu)^2}{N}</li>
              <li><strong>Standard Deviation:</strong> \sigma = \sqrt{Variance}</li>
            \`
          }
        ]
      },
      {
        id: "calculus"`;

appJs = appJs.replace('      {\n        id: "calculus"', newMathChapters);

// 3. Add New CBT Exams
const newExams = `
  {
    id: "nda-english-mock-1",
    title: "NDA English Mock Test 1",
    timeLimitMins: 10,
    passingScore: 10,
    markingScheme: { correct: +4, incorrect: -1.33 },
    tags: ["NDA", "English", "Grammar"],
    questions: [
      {
        text: "Identify the part with an error: (A) Neither of the two boys / (B) are going / (C) to the market / (D) No Error",
        options: ["A", "B", "C", "D"],
        correctIndex: 1,
        explanation: "Neither takes a singular verb. 'Are going' should be 'is going'."
      },
      {
        text: "Select the synonym of 'Clandestine'.",
        options: ["Open", "Secret", "Ugly", "Beautiful"],
        correctIndex: 1,
        explanation: "Clandestine means kept secret or done secretively."
      },
      {
        text: "Identify the part with an error: (A) Scarcely had he gone out / (B) than it started / (C) raining heavily / (D) No Error",
        options: ["A", "B", "C", "D"],
        correctIndex: 1,
        explanation: "Scarcely is always followed by 'when', not 'than'."
      },
      {
        text: "Select the antonym of 'Mitigate'.",
        options: ["Alleviate", "Aggravate", "Soothe", "Calm"],
        correctIndex: 1,
        explanation: "Mitigate means to make less severe. Aggravate means to make worse."
      },
      {
        text: "Fill in the blank: The captain, along with the soldiers, _____ killed.",
        options: ["was", "were", "have been", "are"],
        correctIndex: 0,
        explanation: "When subjects are joined by 'along with', the verb agrees with the first subject."
      }
    ]
  },
  {
    id: "nda-math-mock-2",
    title: "NDA Mathematics Mock Test 2",
    timeLimitMins: 15,
    passingScore: 15,
    markingScheme: { correct: +2.5, incorrect: -0.83 },
    tags: ["NDA", "Mathematics", "Algebra", "Geometry"],
    questions: [
      {
        text: "If 1, omega, omega^2 are cube roots of unity, what is the value of (1 - omega + omega^2)^5 + (1 + omega - omega^2)^5?",
        options: ["32", "-32", "16", "0"],
        correctIndex: 0,
        explanation: "Substitute 1+omega^2 = -omega and 1+omega = -omega^2. We get (-2omega)^5 + (-2omega^2)^5 = -32omega^2 - 32omega = -32(omega+omega^2) = -32(-1) = 32."
      },
      {
        text: "What is the distance between the parallel lines 3x + 4y - 9 = 0 and 6x + 8y - 15 = 0?",
        options: ["3/10", "3/5", "1/2", "3/2"],
        correctIndex: 0,
        explanation: "Make coefficients same: 6x + 8y - 18 = 0 and 6x + 8y - 15 = 0. Distance = |-15 - (-18)| / sqrt{36+64} = 3/10."
      },
      {
        text: "If the roots of the equation ax^2+bx+c=0 are equal, then what is c equal to?",
        options: ["-b/2a", "b/2a", "-b^2/4a", "b^2/4a"],
        correctIndex: 3,
        explanation: "For equal roots, D=0 implies b^2 - 4ac = 0 implies c = b^2/4a."
      },
      {
        text: "What is the mode of the dataset if Mean = 5 and Median = 6?",
        options: ["7", "8", "9", "10"],
        correctIndex: 1,
        explanation: "Mode = 3*Median - 2*Mean = 3(6) - 2(5) = 18 - 10 = 8."
      },
      {
        text: "If z = 1 + i, what is the argument of z?",
        options: ["pi/4", "pi/2", "pi/3", "pi/6"],
        correctIndex: 0,
        explanation: "Argument theta = tan^{-1}(y/x) = tan^{-1}(1/1) = pi/4."
      }
    ]
  },
  {
    id: "nda-math-mock-1",`;

appJs = appJs.replace('  {\n    id: "nda-math-mock-1",', newExams);

fs.writeFileSync('app.js', appJs);
console.log('Successfully updated app.js!');
