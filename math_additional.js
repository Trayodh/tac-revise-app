// Additional Mathematics chapters placeholder
const mathAdditional = {
  id: "additional-math",
  title: "Additional Mathematics (NDA/CDS)",
  topics: [
    {
      id: "vectors",
      title: "Vectors",
      notes: `
        <h3>1. Vector Basics</h3>
        <p>Vector in 2‑D: \( \vec{A} = a\hat{i} + b\hat{j} \). Magnitude: \( |\vec{A}| = \sqrt{a^2 + b^2} \).</p>
        <h3>2. Dot Product</h3>
        <p>\( \vec{A}\cdot\vec{B} = |\vec{A}|\,|\vec{B}|\cos\theta \)</p>
        <h3>3. Cross Product (3‑D)</h3>
        <p>\( \vec{A}\times\vec{B} = (a_2b_3-a_3b_2)\hat{i} + (a_3b_1-a_1b_3)\hat{j} + (a_1b_2-a_2b_1)\hat{k} \)</p>
        `,
      formulas: `\( \vec{A}+\vec{B} = (a_1+b_1)\hat{i} + (a_2+b_2)\hat{j} \)`,
      mindmap: {
        root: "Vectors",
        branches: [
          {title: "Types", subnodes: ["Position", "Velocity", "Acceleration"]},
          {title: "Operations", subnodes: ["Addition", "Scalar Multiplication", "Dot Product", "Cross Product"]}
        ]
      }
    },
    {
      id: "complex-numbers",
      title: "Complex Numbers",
      notes: `
        <h3>1. Standard Form</h3>
        <p>\( z = a + ib \) where \(i^2 = -1\).</p>
        <h3>2. Modulus & Argument</h3>
        <p>Modulus: \( |z| = \sqrt{a^2 + b^2} \). Argument: \( \theta = \tan^{-1}(b/a) \).</p>
        <h3>3. Polar Form</h3>
        <p>\( z = r(\cos\theta + i\sin\theta) \) or \( z = re^{i\theta} \).</p>
        `,
      formulas: `\( (a+ib)(c+id) = (ac-bd) + i(ad+bc) \)`,
      mindmap: {
        root: "Complex Numbers",
        branches: [
          {title: "Forms", subnodes: ["Standard", "Polar", "Exponential"]},
          {title: "Operations", subnodes: ["Addition", "Multiplication", "Conjugate", "Modulus"]}
        ]
      }
    }
  ]
};
module.exports = mathAdditional;
