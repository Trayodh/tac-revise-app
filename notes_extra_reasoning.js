window.EXPANDED_NOTES_DATA = window.EXPANDED_NOTES_DATA || {};\n\nwindow.EXPANDED_NOTES_DATA["afcat-r-cube-dice"] = String.raw`\n<h1>Cubes and Dice</h1>
<hr />

<p>The <strong>Cubes and Dice</strong> topic is a cornerstone of the Non-Verbal Reasoning section in Indian Defence Examinations such as <strong>AFCAT (Air Force Common Admission Test)</strong> and <strong>NDA (National Defence Academy)</strong>. Questions in this section test your spatial visualization, 3D mental rotation, and logical pattern recognition.</p>

<h2>1. Fundamental Structure of a Cube / Dice</h2>
<p>A cube or a standard die is a three-dimensional symmetrical solid with the following structural properties:</p>
<ul>
  <li><strong>Faces (Surfaces):</strong> 6 faces (Top, Bottom, Front, Back, Left, Right).</li>
  <li><strong>Edges:</strong> 12 straight edges where two faces intersect.</li>
  <li><strong>Corners (Vertices):</strong> 8 corner points where three edges intersect.</li>
  <li>At any given viewpoint, a maximum of <strong>3 faces</strong> can be seen simultaneously, while the opposite 3 faces remain hidden.</li>
</ul>

<h2>2. Types of Dice</h2>
<h3>A. Standard (Conventional) Dice</h3>
<p>In a standard die, the sum of numbers on any two opposite faces is always equal to <strong>7</strong>.</p>
<ul>
  <li>1 is opposite to 6 (1 + 6 = 7)</li>
  <li>2 is opposite to 5 (2 + 5 = 7)</li>
  <li>3 is opposite to 4 (3 + 4 = 7)</li>
  <li><em>Condition:</em> The sum of any two adjacent visible faces can <strong>never</strong> equal 7.</li>
</ul>

<h3>B. General / Ordinary Dice</h3>
<p>In an ordinary die, the sum of adjacent faces can be 7, and numbers/symbols/letters are placed arbitrarily. Defence exam questions are almost exclusively based on <strong>General Dice</strong> logic unless specified otherwise.</p>

<div style="background-color:rgba(255, 193, 7, 0.15); padding: 10px; border-left: 4px solid #ffc107; margin-bottom: 15px;">
  <strong>EXAM TIP / TRAP:</strong> Never assume a die is standard unless the question explicitly mentions it. If numbers on adjacent faces sum to 7 (e.g., 4 and 3 visible together), it is strictly a General Die.
</div>

<h2>3. Core Rules for Closed Dice (Finding Opposite Faces)</h2>

<h3>Rule 1: One Common Face (Clockwise Rotation Rule)</h3>
<p>When two different positions of the same die share <strong>only one common face</strong>:</p>
<ul>
  <li>Keep the common face as the starting pivot.</li>
  <li>Move in a <strong>clockwise</strong> (or counter-clockwise) direction on both dice views and list the numbers in sequence.</li>
  <li>The numbers that align in the sequence are opposite to each other.</li>
  <li>The number missing from the visible set is opposite to the common pivot face.</li>
</ul>

<h3>Rule 2: Two Common Faces</h3>
<p>When two different positions of the same die share <strong>two common faces</strong>:</p>
<ul>
  <li>The remaining third unshared faces on both views are <strong>strictly opposite</strong> to each other.</li>
</ul>

<h3>Rule 3: Same Face in the Same Position</h3>
<p>When one face is identical and in the exact same orientation/position in two views, the corresponding adjacent faces on identical positions are opposite to each other.</p>

<div style="background-color:rgba(255, 193, 7, 0.15); padding: 10px; border-left: 4px solid #ffc107; margin-bottom: 15px;">
  <strong>EXAM TIP / TRAP:</strong> Adjacent faces can NEVER be opposite to each other. Whenever solving multiple choice questions, use the elimination technique: eliminate any option that appears adjacent to your target number in any of the views.
</div>

<h2>4. Open Dice (Unfolded Cube Patterns)</h2>
<p>An open die displays all 6 faces laid flat. To determine opposite pairs upon folding:</p>
<ul>
  <li><strong>The Alternate Face Rule:</strong> In any straight row or column of three or more squares, alternate faces (separated by one box) are opposite to each other.</li>
  <li><strong>The "Z" Rule:</strong> The two ends of a 'Z' formation that are not connected by an edge are opposite to each other.</li>
  <li><strong>Corner Rule:</strong> Two faces that touch at a corner or share an edge can never be opposite when folded.</li>
</ul>

<h2>5. Painted and Cut Cube Formulas</h2>
<p>A frequent NDA and AFCAT question type involves a large solid cube of edge length $L$ painted on all outside faces and cut uniformly into smaller cubes of edge length $l$.</p>
<p>First, calculate the division factor <strong>$n$</strong>:</p>
<p style="text-align: center; font-weight: bold;">$n = \frac{\text{Length of Bigger Cube}}{\text{Length of Smaller Cube}} = \sqrt[3]{\text{Total Number of Smaller Cubes}}$</p>

<ul>
  <li><strong>Total Smaller Cubes:</strong> $N = n^3$</li>
  <li><strong>3 Faces Painted (Corner Cubes):</strong> Always <strong>8</strong> (located at the 8 vertices, provided $n \ge 2$).</li>
  <li><strong>2 Faces Painted (Middle Edge Cubes):</strong> $12(n - 2)$ (located along the 12 edges).</li>
  <li><strong>1 Face Painted (Central Face Cubes):</strong> $6(n - 2)^2$ (located on the 6 surfaces).</li>
  <li><strong>0 Faces Painted (Colorless / Inner Core Cubes):</strong> $(n - 2)^3$</li>
  <li><strong>Total Cuts Required:</strong> $3(n - 1)$ cuts (i.e., $n - 1$ parallel cuts along each of the 3 dimensions).</li>
</ul>

<h2>6. Solved Exam-Level Practice Questions</h2>

<h3>Example 1: Dice Rotation (AFCAT Pattern)</h3>
<p><strong>Question:</strong> Two positions of a single die are shown below. Which number is opposite to the face showing <strong>3</strong>?</p>
<ul>
  <li><strong>Position I:</strong> Faces showing <strong>2, 4, 1</strong> (Top: 2, Front: 4, Right: 1)</li>
  <li><strong>Position II:</strong> Faces showing <strong>2, 3, 5</strong> (Top: 2, Front: 3, Right: 5)</li>
</ul>

<p><strong>Solution:</strong></p>
<ol>
  <li>Identify the common face between both positions. The common number is <strong>2</strong>.</li>
  <li>Write the numbers in <strong>clockwise order</strong> starting from the common number 2:
    <ul>
      <li>From Position I: $2 \rightarrow 1 \rightarrow 4$</li>
      <li>From Position II: $2 \rightarrow 5 \rightarrow 3$</li>
    </ul>
  </li>
  <li>Pair the corresponding numbers from the clockwise sequences:
    <ul>
      <li>$1$ is opposite to $5$</li>
      <li>$4$ is opposite to $3$</li>
      <li>$2$ is opposite to the remaining number, which is $6$</li>
    </ul>
  </li>
</ol>
<p><strong>Answer:</strong> The number opposite to <strong>3</strong> is <strong>4</strong>.</p>

<hr />

<h3>Example 2: Painted Cube (NDA / AFCAT Pattern)</h3>
<p><strong>Question:</strong> A wooden cube of side $6\text{ cm}$ is painted blue on all its six faces. It is then sliced into smaller cubes of side $1\text{ cm}$ each. Find:
<br />(a) The total number of small cubes obtained.
<br />(b) The number of cubes with exactly 2 faces painted.
<br />(c) The number of cubes with no face painted.</p>

<p><strong>Solution:</strong></p>
<ol>
  <li>Calculate $n$:
    <p>$$n = \frac{\text{Side of large cube}}{\text{Side of small cube}} = \frac{6}{1} = 6$$</p>
  </li>
  <li><strong>(a) Total smaller cubes:</strong>
    <p>$$N = n^3 = 6^3 = 216\text{ cubes}$$</p>
  </li>
  <li><strong>(b) Cubes with exactly 2 faces painted:</strong>
    <p>$$\text{Formula} = 12(n - 2) = 12(6 - 2) = 12 \times 4 = 48\text{ cubes}$$</p>
  </li>
  <li><strong>(c) Cubes with no face painted (0 faces painted):</strong>
    <p>$$\text{Formula} = (n - 2)^3 = (6 - 2)^3 = 4^3 = 64\text{ cubes}$$</p>
  </li>
</ol>
<p><strong>Verification:</strong> $\text{Total} = 8\text{ (3-face)} + 48\text{ (2-face)} + [6 \times (4)^2 = 96]\text{ (1-face)} + 64\text{ (0-face)} = 216\text{ cubes}$.</p>

<div style="background-color:rgba(255, 193, 7, 0.15); padding: 10px; border-left: 4px solid #ffc107; margin-bottom: 15px;">
  <strong>EXAM TIP / TRAP:</strong> When questions specify that opposite pairs of faces are painted with different colors (e.g., 2 red, 2 green, 2 black), standard formulas for 1-face and 2-face painted cubes must be broken down face-by-face or edge-by-edge rather than multiplied by 6 or 12.
</div>\n`;\n\n