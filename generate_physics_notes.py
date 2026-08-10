import os

os.makedirs("evolved_notes/physics", exist_ok=True)
os.makedirs("evolved_notes/chemistry", exist_ok=True)
os.makedirs("evolved_notes/biology", exist_ok=True)

notes_data = {
    "reflection-refraction.md": """# Optics & Light: Reflection, Refraction & Lenses

---

## **1. Laws of Reflection & Mirror Formulas**

*   **First Law:** The incident ray, reflected ray, and normal at the point of incidence all lie in the same plane.
*   **Second Law:** The angle of incidence equals the angle of reflection ($i = r$).

### **Mirror Formula**
*   **$1/f = 1/v + 1/u$**
    *   $u$ = object distance (always negative according to sign convention).
    *   $v$ = image distance (positive for virtual/behind mirror, negative for real/in front).
    *   $f$ = focal length (**negative for concave**, **positive for convex**).
*   **Linear Magnification ($m$):** $m = -v/u = h_i / h_o$.
    *   $m$ is negative for real and inverted images.
    *   $m$ is positive for virtual and erect images.

---

## **2. Refraction & Lens Formulas**

Refraction is the bending of light as it passes from one medium to another due to a change in speed.

*   **Snell's Law:** $\\frac{\\sin i}{\\sin r} = constant = \\mu_2 / \\mu_1$.
*   **Absolute Refractive Index ($\\mu$):** $\\mu = c / v$ (Speed of light in vacuum / speed in medium). Higher $\\mu$ means optically denser.

### **Lens Formula & Power**
*   **Formula:** **$1/f = 1/v - 1/u$**
*   **Magnification:** $m = v/u$
*   **Power ($P$):** Reciprocal of focal length (in meters). **$P = 1 / f$**.
    *   Unit is **Dioptre (D)**.
    *   **Convex lens:** Converging, positive $f$, positive Power.
    *   **Concave lens:** Diverging, negative $f$, negative Power.

---

## **3. Key Optical Phenomena (Highly Tested)**

*   **Total Internal Reflection (TIR):** Occurs when light travels from a **denser to a rarer** medium and the angle of incidence exceeds the **critical angle** ($i > \\theta_c$).
    *   $\\sin \\theta_c = 1/\\mu$.
    *   **Applications:** Optical fibers, sparkling of diamonds, mirages in deserts.
*   **Dispersion:** Splitting of white light into VIBGYOR (7 colors) by a prism. Red deviates the *least* (longest wavelength), Violet deviates the *most* (shortest wavelength).
*   **Scattering:** Rayleigh's Law states scattering intensity $I \\propto 1/\\lambda^4$.
    *   Explains why the sky is blue (blue scatters more than red).
    *   Explains why the sun looks red at sunrise/sunset (only red, with the longest wavelength, penetrates the thick atmosphere without scattering).

---

## **Visual Summary**

```mermaid
mindmap
  root((Optics))
    Mirrors (1/f = 1/v + 1/u)
      Concave (Converging, f is -ve)
      Convex (Diverging, f is +ve)
    Lenses (1/f = 1/v - 1/u)
      Convex (Converging, P is +ve)
      Concave (Diverging, P is -ve)
    Phenomena
      TIR (Denser -> Rarer)
      Dispersion (Prism VIBGYOR)
      Scattering (Rayleigh 1/λ⁴)
```

> [!WARNING]
> **EXAM TRAP:** Myopia (nearsightedness) is corrected by a **Concave** lens. Hypermetropia (farsightedness) is corrected by a **Convex** lens.
""",
    "newtons-laws.md": """# Mechanics: Newton's Laws of Motion & Friction

---

## **1. Newton's Laws of Motion**

### **First Law (Law of Inertia)**
A body continues in its state of rest or uniform motion in a straight line unless acted upon by a net external force.
*   **Inertia:** The resistance of any physical object to a change in its state of motion. It is directly proportional to **Mass**.
*   **Types:**
    *   *Inertia of Rest:* Dust flying out of a beaten carpet.
    *   *Inertia of Motion:* Passengers falling forward when a bus brakes.
    *   *Inertia of Direction:* An umbrella protecting from rain.

### **Second Law (Law of Force)**
The rate of change of momentum of a body is directly proportional to the applied force.
*   **Momentum ($p$):** Mass × Velocity ($p = mv$).
*   **Force Equation:** $F = \\frac{dp}{dt} = m \\times a$. (Unit: Newton, $1 N = 10^5 \\text{ Dynes}$).
*   **Impulse:** Force acting for a very short time. Impulse = $F \\times \\Delta t = \\text{Change in momentum}$. (E.g., catching a cricket ball by pulling hands back increases $\\Delta t$, reducing force).

### **Third Law (Action & Reaction)**
To every action, there is an equal and opposite reaction.
*   Action and reaction act on **two different bodies**, hence they do not cancel each other out.
*   **Examples:** Recoil of a gun, rocket propulsion, swimming.

---

## **2. Conservation of Momentum & Friction**

### **Law of Conservation of Linear Momentum**
If no external force acts on a system, its total linear momentum remains constant ($p_{initial} = p_{final}$).
*   Used to calculate the recoil velocity of a gun: $m_g V_g + m_b v_b = 0$.

### **Friction**
An opposing force that acts between two surfaces in contact.
*   **Formula:** $f = \\mu N$ (where $\\mu$ = coefficient of friction, $N$ = normal reaction).
*   **Types (Order of magnitude):**
    *   **Static Friction** > **Limiting Friction** > **Kinetic (Sliding) Friction** > **Rolling Friction**.
*   *Note:* Friction is a necessary evil. Without it, we cannot walk, write, or stop vehicles.

---

## **Visual Summary**

```mermaid
mindmap
  root((Mechanics))
    Newton's Laws
      1st: Inertia (Mass)
      2nd: F = ma (dp/dt)
      3rd: Action = -Reaction
    Momentum
      p = mv
      Conservation Law
      Impulse = F × Δt
    Friction
      f = μN
      Static > Kinetic > Rolling
```
""",
    "syl-exercises.md": """# Work, Power, Energy & Gravitation

---

## **1. Work, Power & Energy**

### **Work ($W$)**
*   $W = \\vec{F} \\cdot \\vec{s} = F s \\cos \\theta$
*   **Unit:** Joule (J). $1 J = 10^7 \\text{ Ergs}$.
*   **Zero Work:** If force and displacement are perpendicular ($\\theta = 90^\\circ$), $W=0$. (E.g., centripetal force on a satellite, a porter carrying a load horizontally).

### **Energy**
*   **Kinetic Energy (KE):** $KE = \\frac{1}{2}mv^2$.
    *   Relation with Momentum: **$KE = p^2 / 2m$**. (If momentum is doubled, KE becomes 4 times).
*   **Potential Energy (PE):** $PE = mgh$.
*   **Law of Conservation of Energy:** Energy can neither be created nor destroyed, only transformed (e.g., hydroelectric dam: PE $\\rightarrow$ KE $\\rightarrow$ Electrical).

### **Power ($P$)**
*   Rate of doing work. $P = W/t = \\vec{F} \\cdot \\vec{v}$.
*   **Unit:** Watt (W).
*   **Important Conversion:** **1 Horsepower (HP) = 746 Watts**.

---

## **2. Gravitation & 'g'**

*   **Universal Law of Gravitation:** $F = G \\frac{m_1 m_2}{r^2}$.
    *   $G = 6.67 \\times 10^{-11} \\text{ Nm}^2/\\text{kg}^2$.

### **Acceleration Due to Gravity ($g$)**
*   $g = GM / R^2$ (approx $9.8 \\text{ m/s}^2$ on Earth's surface).
*   **Variation of $g$ (Highly Tested):**
    1.  **Shape of Earth:** Earth is bulged at the equator. Since $g \\propto 1/R^2$, **$g$ is Maximum at Poles and Minimum at the Equator**.
    2.  **Altitude:** $g$ decreases as we go up.
    3.  **Depth:** $g$ decreases as we go down into the Earth. **At the center of the Earth, $g = 0$**.
    4.  **Rotation:** If Earth stops rotating, $g$ at the equator increases, while $g$ at poles remains unchanged.

### **Escape Velocity ($v_e$)**
*   Minimum velocity to escape a planet's gravity. $v_e = \\sqrt{2gR}$.
*   **Earth:** $11.2 \\text{ km/s}$.
*   **Moon:** $2.38 \\text{ km/s}$ (This low escape velocity is why the Moon has no atmosphere; gas molecules easily escape).

---

## **Visual Summary**

```mermaid
mindmap
  root((Work & Gravity))
    Work & Energy
      W = Fscos(θ)
      KE = p²/2m
      Power (1 HP = 746W)
    Gravity (g)
      g = GM/R²
      Max at Poles, Min at Equator
      Zero at Earth's center
    Space
      Escape Vel = √(2gR)
      Earth = 11.2 km/s
      Moon = 2.38 km/s
```
""",
    "physics-sound.md": """# Waves & Acoustics

---

## **1. Types of Waves**

*   **Mechanical Waves:** Require a material medium to propagate (e.g., Sound waves, water waves).
    *   **Longitudinal Waves:** Particles vibrate parallel to the direction of propagation (Compressions and Rarefactions). **Sound is a longitudinal wave in air/fluids.**
    *   **Transverse Waves:** Particles vibrate perpendicular to the direction of propagation (Crests and Troughs). E.g., waves on a string.
*   **Non-Mechanical Waves (Electromagnetic):** Do not require a medium. They are transverse in nature.

---

## **2. Sound Waves**

Sound travels fastest in solids, slower in liquids, and slowest in gases. **(Solid > Liquid > Gas)**. It CANNOT travel in a vacuum.

### **Factors affecting the speed of sound in air:**
*   **Temperature:** Speed increases with an increase in temperature. ($v \\propto \\sqrt{T}$).
*   **Humidity:** Speed increases with humidity (moist air is less dense than dry air).
*   **Pressure:** **No effect** on the speed of sound (if temperature is constant).

### **Characteristics of Sound:**
1.  **Pitch:** Depends on **Frequency**. (Higher frequency = shrill sound, lower = grave).
2.  **Loudness:** Depends on **Amplitude**. Measured in Decibels (dB). (Loudness $\\propto$ Amplitude$^2$).
3.  **Quality/Timbre:** Distinguishes sounds of the same pitch and loudness from different sources (depends on waveforms/overtones).

---

## **3. Echo & Doppler Effect**

### **Echo**
*   Reflection of sound.
*   To hear a distinct echo, the minimum distance to the obstacle must be **~17.2 meters** (at $20^\\circ\\text{C}$), because the human ear retains a sound for 0.1 seconds (persistence of hearing).

### **Doppler Effect**
*   The apparent change in the frequency of sound due to the relative motion between the source and the observer.
*   *Approaching source:* Pitch appears higher.
*   *Receding source:* Pitch appears lower.
*   *Applications:* RADAR, SONAR, measuring speed of stars/galaxies (red-shift/blue-shift).

---

## **Visual Summary**

```mermaid
mindmap
  root((Sound Waves))
    Characteristics
      Mechanical, Longitudinal
      Needs Medium (No vacuum)
      Speed: Solid > Liquid > Gas
    Factors affecting v
      Temp: Direct effect
      Humidity: Direct effect
      Pressure: NO EFFECT
    Properties
      Pitch (Frequency)
      Loudness (Amplitude, dB)
      Echo (Min 17.2m)
```
""",
    "physics-em-waves.md": """# Electromagnetic (EM) Waves & Spectrum

---

## **1. Characteristics of EM Waves**

*   Do not require a material medium. Can travel in a vacuum.
*   They are **Transverse** waves composed of oscillating electric and magnetic fields perpendicular to each other.
*   Travel with the speed of light in vacuum: **$c = 3 \\times 10^8 \\text{ m/s}$**.
*   **Formula:** $c = f \\times \\lambda$ (Frequency × Wavelength). Therefore, Frequency and Wavelength are inversely proportional.

---

## **2. The Electromagnetic Spectrum**

Memorize the order! From **Highest Frequency / Highest Energy / Shortest Wavelength** TO **Lowest Frequency / Lowest Energy / Longest Wavelength**:

### **Gamma Rays $\\rightarrow$ X-Rays $\\rightarrow$ UV $\\rightarrow$ Visible $\\rightarrow$ IR $\\rightarrow$ Microwaves $\\rightarrow$ Radio Waves**

| Wave Type | Discovered By | Key Applications |
| :--- | :--- | :--- |
| **Gamma Rays** | Paul Villard | Cancer treatment (radiotherapy), food irradiation. Highest penetrating power. |
| **X-Rays** | W. Roentgen | Medical imaging (bones), crystallography, security scanners. |
| **Ultraviolet (UV)** | J. Ritter | Sterilizing water, checking forged documents, stimulates Vitamin D. Causes skin tanning/cancer. |
| **Visible Light** | Isaac Newton | VIBGYOR. Vision, photography. |
| **Infrared (IR)** | W. Herschel | Heat waves. TV remote controls, night vision goggles, physical therapy. |
| **Microwaves** | Hertz | Radar systems, satellite communications, Microwave ovens (heats water molecules). |
| **Radio Waves** | Marconi | Radio/TV broadcasting, cellular communication. Lowest energy, longest wavelength. |

> [!TIP]
> **EXAM TRAP:** Remote controls use **Infrared (IR)** waves. RADAR uses **Microwaves**. Do not confuse them!
""",
    "physics-heat.md": """# Thermodynamics & Heat Transfer

---

## **1. Temperature & Scales**

Heat is the form of energy transferred between bodies due to a temperature difference.

*   **Conversion Formula:** $\\frac{C}{5} = \\frac{F - 32}{9} = \\frac{K - 273}{5}$
*   **Absolute Zero:** $0 \\text{ Kelvin}$ (or $-273.15^\\circ\\text{C}$). The temperature at which molecular motion theoretically stops.
*   **Specific Heat Capacity:** The amount of heat required to raise the temperature of 1 kg of a substance by $1^\\circ\\text{C}$. **Water has a very high specific heat**, making it a good coolant.
*   **Latent Heat:** Heat absorbed or released during a phase change (without changing temperature). E.g., Latent heat of vaporization of water is huge, hence steam causes more severe burns than boiling water at the same temperature.

---

## **2. Modes of Heat Transfer**

1.  **Conduction:** Heat transfer through molecular collisions without actual movement of matter. Primary mode in **Solids**. (Metals are good conductors due to free electrons).
2.  **Convection:** Heat transfer by actual movement of the heated particles. Primary mode in **Liquids and Gases**. (e.g., Trade winds, ocean currents, boiling water).
3.  **Radiation:** Heat transfer in the form of Electromagnetic Waves (Infrared). **Requires no medium**. (e.g., Heat from the Sun reaching Earth).

---

## **3. Laws of Thermodynamics**

*   **Zeroth Law:** If body A and B are each in thermal equilibrium with body C, then A and B are in thermal equilibrium with each other. (Defines Temperature).
*   **First Law:** Law of Conservation of Energy. $\\Delta Q = \\Delta U + \\Delta W$ (Heat supplied = Change in internal energy + Work done).
*   **Second Law:** Heat cannot spontaneously flow from a colder body to a hotter body. (Defines Entropy/disorder, which always increases in the universe).
""",
    "physics-electricity-magnetism.md": """# Electricity, Circuits & Magnetism

---

## **1. Current Electricity**

*   **Electric Current ($I$):** Rate of flow of charge. $I = q / t$. Unit: Ampere (A).
*   **Ohm's Law:** At a constant temperature, current is directly proportional to voltage. **$V = IR$**.
*   **Resistance ($R$):** Opposition to current flow. **$R = \\rho L / A$** ($\\rho$ = resistivity, $L$ = length, $A$ = cross-sectional area).
    *   If you stretch a wire to double its length, its resistance becomes 4 times (since area halves).

### **Resistors in Combination**
*   **Series:** $R_s = R_1 + R_2 + R_3$. Current remains the same across all resistors.
*   **Parallel:** $1/R_p = 1/R_1 + 1/R_2 + 1/R_3$. Voltage remains the same across all branches.

### **Joule's Heating & Power**
*   **Heat ($H$):** $H = I^2 R t$. (Joule's Law of Heating).
*   **Power ($P$):** $P = VI = I^2R = V^2/R$. Unit: Watt (W).
*   **Commercial Unit of Energy:** 1 kilo-Watt-hour (kWh) = 1 Unit = **$3.6 \\times 10^6 \\text{ Joules}$**.
*   *Electric Fuse:* Based on heating effect. Made of Sn-Pb alloy. Must have **High Resistance and Low Melting Point**. Connected in Series.

---

## **2. Magnetism**

*   **Earth's Magnetism:** Earth behaves like a giant magnet.
    *   **Angle of Dip:** The angle made by the earth's total magnetic field with the horizontal direction.
    *   At Magnetic Equator: Dip = $0^\\circ$.
    *   At Magnetic Poles: Dip = $90^\\circ$.
*   **Lorentz Force:** The force experienced by a moving charge in a magnetic field. $F = qvB \\sin\\theta$. (Force is zero if moving parallel to the magnetic field).
*   **Electromagnetic Induction (Faraday's Law):** A changing magnetic flux induces an EMF in a coil. Principle used in Generators and Transformers.
*   **Transformers:** Work ONLY on AC (Alternating Current). Used to step-up or step-down voltage.

---

## **Visual Summary**

```mermaid
mindmap
  root((Electricity))
    Ohm's Law
      V = IR
      R = ρL/A
    Circuits
      Series (Constant I, Rs = R1+R2)
      Parallel (Constant V, 1/Rp = 1/R1+1/R2)
    Energy & Power
      P = VI
      1 kWh = 3.6 x 10⁶ J
      Fuse: Low MP, High R
```
""",
    "physics-nuclear-basics.md": """# Modern & Nuclear Physics

---

## **1. Atomic Structure & Radioactivity**

*   **Nucleus:** Contains Protons and Neutrons (together called Nucleons). Electrons revolve in orbits.
*   **Radioactivity:** Spontaneous emission of radiation by unstable nuclei. Discovered by Henri Becquerel.

### **Types of Radioactive Decay**
1.  **Alpha ($\\alpha$) Decay:** Emission of a Helium nucleus ($^4_2\\text{He}$). Reduces Atomic No. by 2, Mass No. by 4. Low penetrating power, high ionizing power.
2.  **Beta ($\\beta$) Decay:** Emission of a fast-moving electron. Atomic No. increases by 1, Mass No. remains same. Medium penetration.
3.  **Gamma ($\\gamma$) Decay:** Emission of high-energy EM photons. No change in Atomic/Mass No. Very high penetrating power, low ionizing power.

*   **Half-Life ($T_{1/2}$):** Time required for half of the radioactive nuclei to decay. $T_{1/2} = 0.693 / \\lambda$.

---

## **2. Nuclear Energy**

Based on Einstein's Mass-Energy Equivalence: **$E = mc^2$**.

### **Nuclear Fission**
*   Splitting of a heavy, unstable nucleus (e.g., U-235) into lighter nuclei, releasing massive energy and neutrons.
*   *Application:* Nuclear Reactors (Controlled chain reaction), Atom Bomb (Uncontrolled).
*   *Reactor Components:*
    *   **Moderator:** Slows down fast neutrons (e.g., Heavy Water $D_2O$, Graphite).
    *   **Control Rods:** Absorbs excess neutrons to control the reaction (e.g., Cadmium, Boron).

### **Nuclear Fusion**
*   Combining of two light nuclei (e.g., isotopes of Hydrogen) to form a heavier nucleus (Helium), releasing energy.
*   Requires extremely high temperature and pressure.
*   *Application:* Source of energy in the Sun and Stars. Hydrogen Bomb. (Fusion produces MORE energy per unit mass than fission).
""",
    "physics-units-everyday.md": """# SI Units & Everyday Physics Phenomenon

---

## **1. Fundamental SI Units (Base Units)**

There are 7 base SI units:
1.  **Length:** Meter (m)
2.  **Mass:** Kilogram (kg)
3.  **Time:** Second (s)
4.  **Electric Current:** Ampere (A)
5.  **Thermodynamic Temperature:** Kelvin (K)
6.  **Amount of Substance:** Mole (mol)
7.  **Luminous Intensity:** Candela (cd)

### **Important Derived Units**
*   **Force:** Newton (N) = $kg \\cdot m/s^2$
*   **Pressure:** Pascal (Pa) = $N/m^2$
*   **Energy/Work:** Joule (J) = $N \\cdot m$
*   **Power:** Watt (W) = $J/s$
*   **Frequency:** Hertz (Hz) = $1/s$
*   **Electric Charge:** Coulomb (C) = $A \\cdot s$
*   **Potential Difference:** Volt (V) = $J/C$
*   **Capacitance:** Farad (F) = $C/V$
*   **Magnetic Flux:** Weber (Wb)

---

## **2. Everyday Physics (Highly Tested)**

*   **Why are raindrops spherical?** Due to **Surface Tension** (liquids tend to minimize their surface area).
*   **Why does a ship float while a needle sinks?** Archimedes' Principle (Buoyancy). The volume of water displaced by the ship's hull weighs more than the ship itself.
*   **Why do stars twinkle?** Atmospheric Refraction. Fluctuations in Earth's atmosphere continuously bend starlight. (Planets don't twinkle because they are closer and appear as extended sources).
*   **Why does a wet towel cool you down?** Evaporation causes cooling. The water absorbs latent heat of vaporization from your body.
*   **Why does water boil at a lower temperature at high altitudes?** Atmospheric pressure is lower at high altitudes, so vapor pressure equals atmospheric pressure at a lower temperature. (Pressure cookers do the opposite: increase pressure $\\rightarrow$ increase boiling point $\\rightarrow$ cooks faster).
""",
    "physics-pyq-trends-topic.md": """# Physics PYQ Trends (NDA/CDS)

---

## **Physics PYQ Analysis & Recurring Themes**

Analysis of UPSC NDA & CDS question papers from the past 5-10 years shows highly consistent patterns in physics. Focus on these high-yield themes to maximize scores:

### **1. Optics & Light (Highest Question Density)**
*   **Total Internal Reflection (TIR):** Highly repeated questions on applications of TIR (e.g., *optical fibers*, *mirage in deserts*, *sparkling of diamonds*). Conditions for TIR (denser to rarer, $i > \\theta_c$) are frequently asked.
*   **Refractive Index & Speed:** Numerical and conceptual questions on refractive index ($n = c/v$). Knowing that the speed of light is highest in a vacuum and decreases in denser media (e.g., speed in water vs glass).
*   **Mirrors & Lenses:** Convex mirrors used as rear-view mirrors (wide field of view, erect, virtual, diminished image) is a standard UPSC question. Human eye defects (Myopia: corrected by *concave* lens; Hypermetropia: corrected by *convex* lens) are tested constantly.
*   **Scattering of Light:** Rayleigh scattering ($I \\propto 1/\\lambda^4$) explaining the *blue color of the sky* and *reddish appearance of the Sun at sunrise/sunset*.

### **2. Mechanics & Motion**
*   **Newton's Laws & Inertia:** Practical examples of inertia of rest, motion, and direction (e.g., passenger falling forward when a bus stops suddenly, dusting a carpet by beating it).
*   **Work, Power, and Energy:** Work done is zero when displacement is perpendicular to the force (e.g., a coolie carrying load on his head walking horizontally). Kinetic Energy ($K = p^2/2m$) and conservation laws.
*   **Gravitation:** Variation of 'g'. It is maximum at poles, minimum at equator, zero at the center of the Earth, and decreases both with altitude and depth.

### **3. Electricity & Magnetism**
*   **Ohm's Law & Resistance:** Factors affecting electrical resistance ($R = \\rho L / A$). Resistance is directly proportional to length and inversely to area. Stretching a wire to double its length increases resistance 4 times.
*   **Joule's Heating & Safety Fuse:** Commercial unit of electrical energy ($1 \\text{ kWh} = 3.6 \\times 10^6 \\text{ Joules}$). Safety fuse wire must have a **low melting point** and **high resistance**.
*   **Earth's Magnetism:** Value of magnetic dip at the magnetic equator ($0^\\circ$) and at the magnetic poles ($90^\\circ$).

---

## **Visualizing the Strategy**

```mermaid
mindmap
  root((Physics PYQs))
    Optics & Light
      TIR applications
      Mirrors & Lenses (Eye defects)
      Rayleigh Scattering
    Mechanics & Motion
      Inertia examples
      Work = Fscosθ (Zero work cases)
      g value variation
    Electricity
      Resistance R = ρL/A
      Fuse: Low MP, High R
      Earth Dip Equator/Poles
```
"""
}

for filename, content in notes_data.items():
    filepath = os.path.join("evolved_notes/physics", filename)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Physics notes generated.")
