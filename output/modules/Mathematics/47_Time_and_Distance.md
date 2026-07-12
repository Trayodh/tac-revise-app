# Time and Distance: High-Yield Topic Module

## Page 1: Core Concepts & Conversions

### 1. Fundamental Relationship
The core of Time and Distance problems revolves around the relationship:
**Distance (D) = Speed (S) × Time (T)**

This can be rearranged as:
*   **Speed (S) = Distance (D) / Time (T)**
*   **Time (T) = Distance (D) / Speed (S)**

### 2. Unit Conversions
It's crucial to maintain consistent units throughout a problem.

*   **km/h to m/s:** Multiply by `5/18`
    *   *Example:* 36 km/h = 36 × (5/18) m/s = 10 m/s
*   **m/s to km/h:** Multiply by `18/5`
    *   *Example:* 5 m/s = 5 × (18/5) km/h = 18 km/h

### 3. Average Speed
Average speed is not simply the average of speeds. It's defined as:
**Average Speed = Total Distance Travelled / Total Time Taken**

**Key Scenarios for Average Speed:**

*   **Rule 1: Different Speeds for Different Times**
    *   If A travels at speed `x` km/h for `t1` h and at speed `y` km/h for `t2` h:
        `Average Speed = (x * t1 + y * t2) / (t1 + t2)`
    *   *Example:* Man walks 5 km/h for 6h and 4 km/h for 12h.
        `Avg Speed = (5*6 + 4*12) / (6+12) = (30+48) / 18 = 78/18 = 4 1/3 km/h`

*   **Rule 2: Two Equal Distances with Different Speeds**
    *   If a man covers two equal distances with speeds `x` km/h and `y` km/h:
        `Average Speed = 2xy / (x + y)`
    *   *Example:* Man covers half journey at 6 km/h, remaining half at 3 km/h.
        `Avg Speed = (2 * 6 * 3) / (6 + 3) = 36 / 9 = 4 km/h`

### 4. Relative Speed
The speed of one object with respect to another.

*   **Case 1: Moving in Opposite Directions**
    *   If two bodies move with speeds `x` km/h and `y` km/h towards each other:
        `Relative Speed = (x + y) km/h` (Speeds add up)
*   **Case 2: Moving in the Same Direction**
    *   If two bodies move with speeds `x` km/h and `y` km/h in the same direction (assuming x > y):
        `Relative Speed = (x - y) km/h` (Faster speed minus slower speed)

    *   *Example:* Two persons 27 km apart.
        *   Same direction, meet in 9h: `9(x - y) = 27` => `x - y = 3`
        *   Opposite direction, meet in 3h: `3(x + y) = 27` => `x + y = 9`
        *   Solving these gives `x = 6 km/h, y = 3 km/h`.

## Page 2: Advanced Rules & Problem Types

### 5. Time/Speed/Distance Relationship Rules (Advanced)

*   **Rule 3: Change in Speed & Time Difference**
    *   If a man changes his speed to `(x/y)` of his usual speed and gets late by `t` min:
        `Usual Time = (t * x) / (y - x)`
    *   If he reaches early by `t` min:
        `Usual Time = (t * x) / (y - x)` (Note: The formula is the same, `y-x` implies `y > x` for early arrival, `x-y` for late arrival if `x` is the new speed multiplier numerator and `y` is denominator, but the textbook uses `y-x` consistently, implying `y` is the denominator of the fraction `x/y` and `y > x` for late, `y < x` for early. Let's stick to the textbook's `(y-x)` for late and `(y-x)` for early, which means `y` is the denominator and `x` is the numerator of the fraction `x/y`. The textbook example `2/5` times speed, `x=2, y=5`, late by 15 min, `(15*2)/(5-2) = 10 min`. This implies `y-x` is correct for late when `x<y`.)
    *   *Example:* Speed `2/5` times original, 15 min late. `x=2, y=5, t=15`.
        `Required Time = (15 * 2) / (5 - 2) = 30 / 3 = 10 min`.

*   **Rule 4: Different Speeds, One Late, One Early**
    *   Man travels A to B at `x` km/h, `t1` h late. Travels at `y` km/h, `t2` h early.
        `Distance (A to B) = (x * y * (t1 + t2)) / (y - x)` (Ensure `t1, t2` are in hours)
    *   *Example:* 3 km/h (5 min late), 4 km/h (5 min early). `x=3, y=4, t1=5/60, t2=5/60`.
        `Distance = (3 * 4 * (5/60 + 5/60)) / (4 - 3) = (12 * 10/60) / 1 = 12 * (1/6) = 2 km`.

*   **Rule 5: Different Speeds, Both Late (or Both Early)**
    *   Man travels A to B at `x` km/h, `t1` h late. Increases speed by `y` km/h (new speed `x+y`), still `t2` h late.
        `Distance (A to B) = (x * (x + y) * (t1 - t2)) / y` (Ensure `t1, t2` are in hours)
    *   *Example:* 20 km/h (30 min late). Increases speed by 5 km/h (new speed 25 km/h), still 10 min late. `x=20, y=5, t1=30/60=1/2, t2=10/60=1/6`.
        `Distance = (20 * (20 + 5) * (1/2 - 1/6)) / 5 = (20 * 25 * (3-1)/6) / 5 = (500 * 2/6) / 5 = (500 * 1/3) / 5 = 100/3 km`.

### 6. Problems Based on Trains
The length of the train is a significant factor.

*   **Rule 6 (i): Crossing a Pole/Man/Signal**
    *   Time taken = Time to cover the train's own length.
        `Time = Length of Train / Speed of Train`
    *   *Example:* 100m train, 60 km/h. Speed = 60 * 5/18 = 50/3 m/s.
        `Time = 100 / (50/3) = 100 * 3 / 50 = 6 s`.

*   **Rule 6 (ii): Crossing an Object with Length (Platform, Bridge, Tunnel, another Train)**
    *   Time taken = Time to cover (Length of Train + Length of Object).
        `Time = (Length of Train + Length of Object) / Speed of Train`

*   **Rule 7: Two Trains Crossing Each Other**
    *   Trains of length `l1` and `l2`, speeds `s1` and `s2`.
    *   **Total Distance = `l1 + l2`**
    *   **Relative Speed:**
        *   Opposite directions: `s1 + s2`
        *   Same direction: `|s1 - s2|` (absolute difference)
    *   `Time = (l1 + l2) / Relative Speed`
    *   *Example:* Trains 110m, 130m.
        *   Same direction, 60s: `(110+130) / (v1-v2) = 60` => `240 / (v1-v2) = 60` => `v1-v2 = 4`
        *   Opposite direction, 3s: `(110+130) / (v1+v2) = 3` => `240 / (v1+v2) = 3` => `v1+v2 = 80`
        *   Solving gives `v1 = 42 m/s, v2 = 38 m/s`.

*   **Rule 8: Two Trains Crossing and Reaching Destinations**
    *   If two trains start from A and B towards each other, meet, and then take `t1` and `t2` hours to reach B and A respectively:
        `Ratio of Speeds (S1 / S2) = sqrt(t2 / t1)`
    *   *Example:* After meeting, trains reach destinations in 9h and 16h.
        `Speed A / Speed B = sqrt(16 / 9) = 4 / 3`.

### 7. Problems Based on Boat and Stream
A special application of relative speed.

*   **Definitions:**
    *   **Still Water:** Speed of water is zero.
    *   **Stream Water:** Water moving at a certain speed (current).
    *   **Downstream:** Direction along the stream (with the current).
    *   **Upstream:** Direction against the stream (against the current).

*   **Rule 9: Given Boat Speed in Still Water & Stream Speed**
    *   Let speed of boat in still water = `x` km/h
    *   Let speed of stream = `y` km/h
    *   `Speed Downstream = (x + y) km/h`
    *   `Speed Upstream = (x - y) km/h`
    *   *Example:* Sailor 8 km downstream in 40 min (2/3 h), returns in 1h.
        *   Downstream: `(x+y) = 8 / (2/3) = 12`
        *   Upstream: `(x-y) = 8 / 1 = 8`
        *   Solving gives `x = 10 km/h` (sailor in still water), `y = 2 km/h` (current).

*   **Rule 10: Given Downstream & Upstream Speeds**
    *   Let speed downstream = `u` km/h
    *   Let speed upstream = `v` km/h
    *   `Speed of Boat in Still Water = (u + v) / 2 km/h`
    *   `Speed of Stream (Current) = (u - v) / 2 km/h`
    *   *Example:* Upstream speed = 7 km/h, Downstream speed = 13 km/h.
        *   `Boat Speed = (13 + 7) / 2 = 10 km/h`
        *   `Stream Speed = (13 - 7) / 2 = 3 km/h`

### 8. Races
Contests of speed over a specified distance.

*   **A beats B by x m:** When A finishes the race of `d` m, B has covered `(d - x)` m.
    `Speed of A / Speed of B = d / (d - x)`
*   **A gives B a start of x m:** B starts `x` m ahead of the starting point. A covers `d` m, B covers `(d - x)` m.
*   **A gives B a start of t s:** A starts `t` seconds after B.
*   *Example:* 200m race. A beats B by 50m. B beats C by 8m.
    *   `SA / SB = 200 / (200-50) = 200 / 150`
    *   `SB / SC = 200 / (200-8) = 200 / 192`
    *   `SA / SC = (SA/SB) * (SB/SC) = (200/150) * (200/192) = 200 / 144`
    *   This means when A covers 200m, C covers 144m. So A beats C by `(200 - 144) = 56 m`.

## Page 3: AI Contextual Enrichment & Strategic Insights

### 1. The Fundamental Triangle: DST (Distance, Speed, Time)

A common mnemonic to remember the core formulas:
```
      D
     / \
    S---T
```
*   To find Distance (D), cover D: `D = S × T`
*   To find Speed (S), cover S: `S = D / T`
*   To find Time (T), cover T: `T = D / S`

This simple visual helps prevent common formula mix-ups.

### 2. Units Consistency: The Silent Killer of Scores

The most frequent mistake in Time and Distance problems is inconsistent units. Always check:
*   **Distance:** km or m?
*   **Speed:** km/h or m/s?
*   **Time:** hours, minutes, or seconds?

**Golden Rule:** Convert all quantities to a consistent set of units (e.g., all to km and hours, or all to meters and seconds) *before* applying any formulas.

*   **Conversion Factors Reminder:**
    *   1 km = 1000 m
    *   1 hour = 60 minutes = 3600 seconds
    *   km/h to m/s: `× (5/18)`
    *   m/s to km/h: `× (18/5)`

### 3. Deeper Dive into Relative Speed: "OASAS" Mnemonic

*   **O**pposite **A**dd, **S**ame **S**ubtract (OASAS)
    *   When objects move in **O**pposite directions, their speeds **A**dd up to find the relative speed.
    *   When objects move in the **S**ame direction, their speeds **S**ubtract to find the relative speed.

**Visualizing Relative Speed:**
*   Imagine two cars approaching each other (opposite directions). They cover the distance between them much faster. Their effective speed is the sum.
*   Imagine one car chasing another (same direction). The distance between them reduces only by the difference in their speeds.

### 4. Boat and Stream: Relative Speed in Water

This topic is simply relative speed applied to a fluid medium.
*   **Boat in Still Water (x):** This is the boat's inherent speed.
*   **Stream/Current (y):** This is the speed of the water.

*   **Downstream (u):** The stream helps the boat. So, `u = x + y`.
*   **Upstream (v):** The stream hinders the boat. So, `v = x - y`.

From these, we can derive:
*   `x = (u + v) / 2` (Average of downstream and upstream speeds)
*   `y = (u - v) / 2` (Half the difference between downstream and upstream speeds)

**Analogy:** Think of walking on a moving walkway (like at an airport).
*   Walking with the walkway: Faster (downstream).
*   Walking against the walkway: Slower (upstream).

### 5. Average Speed: Beyond Simple Averages

A common pitfall is to calculate average speed as `(Speed1 + Speed2) / 2`. This is only true if the *time* spent at each speed is equal.

*   **If Times are Equal:** `Avg Speed = (S1 + S2) / 2`
*   **If Distances are Equal:** `Avg Speed = 2S1S2 / (S1 + S2)` (Harmonic Mean)

**Why the difference?**
If you travel 10 km at 10 km/h (1 hr) and 10 km at 20 km/h (0.5 hr), your total distance is 20 km and total time is 1.5 hr. Average speed = 20/1.5 = 13.33 km/h.
Simple average = (10+20)/2 = 15 km/h (Incorrect).
Using the formula for equal distances: `(2 * 10 * 20) / (10 + 20) = 400 / 30 = 13.33 km/h` (Correct).

### 6. Train Problems: The "Effective Length" Concept

When a train crosses an object, the key is to determine the "effective distance" it needs to cover.

*   **Point Object (Pole, Man, Signal):** The train only needs to cover its own length.
    *   *Diagram Descriptor:* Imagine the front of the train reaching the pole, and the back of the train leaving the pole. The distance covered is the train's length.
*   **Lengthy Object (Platform, Bridge, Tunnel, another Train):** The train needs to cover its own length *plus* the length of the object.
    *   *Diagram Descriptor:* Imagine the front of the train reaching the start of the platform, and the back of the train leaving the end of the platform. The total distance covered is `Length_Train + Length_Platform`.

### 7. Strategic Problem-Solving Steps

1.  **Read Carefully:** Understand what is given and what needs to be found.
2.  **Identify Type:** Is it a basic D=S*T, relative speed, train, or boat problem?
3.  **Check Units:** Convert all quantities to consistent units immediately.
4.  **Draw a Diagram (Optional but Recommended):** For complex problems (trains, relative motion), a simple sketch can clarify directions and distances.
5.  **Apply Formula(s):** Use the appropriate formulas based on the problem type.
6.  **Solve Systematically:** Break down multi-step problems.
7.  **Review Answer:** Does the answer make sense in the context of the problem?

## Page 4: AI Contextual Enrichment (Continued)

### 8. Time Difference Scenarios (Rules 3, 4, 5)

These rules are essentially applications of the `Time = Distance / Speed` formula, but rearranged for specific scenarios involving delays or early arrivals.

*   **Rule 3 (Speed changed by a fraction):**
    *   Let usual speed be `S` and usual time be `T`. Distance `D = S * T`.
    *   New speed `S' = (x/y) * S`.
    *   New time `T' = D / S' = (S * T) / ((x/y) * S) = (y/x) * T`.
    *   If late by `t`: `T' - T = t` => `(y/x) * T - T = t` => `T * (y/x - 1) = t` => `T * (y-x)/x = t` => `T = (t * x) / (y-x)`. This matches the textbook's formula for usual time.
    *   This derivation confirms the formula and helps understand its logic.

*   **Rule 4 (Two different speeds, one late, one early):**
    *   Let `D` be the distance and `T` be the fixed time.
    *   Time at speed `x`: `T1 = D/x`. Time at speed `y`: `T2 = D/y`.
    *   `T1 = T + t1` (late)
    *   `T2 = T - t2` (early)
    *   Subtracting the two equations: `T1 - T2 = (T + t1) - (T - t2) = t1 + t2`.
    *   So, `D/x - D/y = t1 + t2`.
    *   `D * (1/x - 1/y) = t1 + t2`
    *   `D * (y - x) / (xy) = t1 + t2`
    *   `D = (xy * (t1 + t2)) / (y - x)`. This matches the textbook.

*   **Rule 5 (Two different speeds, both late/early):**
    *   Let `D` be the distance and `T` be the fixed time.
    *   Speed `x`, time `T1 = D/x`. `T1 = T + t1` (late).
    *   Speed `x+y`, time `T2 = D/(x+y)`. `T2 = T + t2` (late).
    *   Subtracting: `T1 - T2 = (T + t1) - (T + t2) = t1 - t2`.
    *   So, `D/x - D/(x+y) = t1 - t2`.
    *   `D * ((x+y - x) / (x * (x+y))) = t1 - t2`
    *   `D * y / (x * (x+y)) = t1 - t2`
    *   `D = (x * (x+y) * (t1 - t2)) / y`. This matches the textbook.

Understanding these derivations helps in recalling the formulas and applying them correctly, even if you forget the exact form. The key is to set up equations based on the time differences.

### 9. Races: Understanding "Beats by" and "Gives a Start"

*   **A beats B by x meters:** This means when A completes the full race distance, B is `x` meters behind the finish line. So, A covers `D` meters, while B covers `(D - x)` meters in the *same amount of time*. This is crucial for speed ratios.
*   **A gives B a start of x meters:** This means B starts `x` meters ahead of the starting line. If the race is `D` meters, A runs `D` meters, but B only needs to run `(D - x)` meters to win. This is about *distance advantage*.
*   **A gives B a start of t seconds:** This means A starts `t` seconds *after* B. B gets a head start in time. This is about *time advantage*.

These distinctions are important for setting up the correct equations.

### 10. Importance for Exams (NDA, CDS, AFCAT)

Time and Distance is a fundamental topic that frequently appears in competitive exams.
*   **NDA:** Often involves basic D=S*T, average speed, and sometimes relative speed.
*   **CDS:** More complex problems, including trains, boats & streams, and advanced time difference scenarios, are common.
*   **AFCAT:** Generally, questions are straightforward, focusing on conversions, average speed, and basic relative speed.

Mastering this topic ensures you can tackle a significant portion of the quantitative aptitude section. Practice with various types of problems is key.

## Page 5: Practice Exercises & Solutions

### Multiple Choice Questions (MCQs)

1.  A car completes a journey in 6 h with a speed of 50 km/h. At what speed must it travel to complete the journey in 5 h?
    (a) 60 km/h
    (b) 55 km/h
    (c) 45 km/h
    (d) 61 km/h

2.  Kiran covers a certain distance at 80 km/h and returns back to the same point at 20 km/h. Then, the average speed during the whole journey is
    (a) 35 km/h
    (b) 32 km/h
    (c) 30 km/h
    (d) 28 km/h

3.  Normally Sarita takes 3 h to travel between two stations with a constant speed. One day her speed was reduced by 12 km/h and she took 45 min more to complete the journey. Then, the distance between the two stations is
    (a) 60 km
    (b) 120 km
    (c) 180 km
    (d) 95 km

4.  Rani goes to school at 10 km/h and reaches the school 6 min late. Next day, she covers this distance at 12 km/h and reaches the school 9 min earlier than the scheduled time. What is the distance of her school from her house?
    (a) 16 km
    (b) 12 km
    (c) 10 km
    (d) 15 km

5.  A man travels first 50 km at 25 km/h next 40 km at 20 km/h and then 90 km at 15 km/h. His average speed (in m/s) for the whole journey is
    (a) 18
    (b) 5
    (c) 10
    (d) 36

6.  A boy is running at a speed of p km/h to cover a distance of 1 km. But due to the slippery ground, his speed is reduced by q km/h (`p > q`). If he takes r h to cover the distance, then
    (a) `1/r = pq / (p+q)`
    (b) `1/r = p+q`
    (c) `r = p-q`
    (d) `1/r = p-q`

7.  A train passes telegraph post in 40 s moving at a rate of 36 km/h. Then, the length of the train is
    (a) 400 m
    (b) 500 m
    (c) 450 m
    (d) 395 m

8.  A person can run around a circular p (Incomplete question in source text, assuming it's a general Time & Distance problem for now, will provide a general solution approach if possible or state incompleteness.)

---

### Solution Matrix

**1. Solution:**
*   **Step 1: Calculate total distance.**
    *   Given: Time `T1 = 6 h`, Speed `S1 = 50 km/h`.
    *   Distance `D = S1 × T1 = 50 km/h × 6 h = 300 km`.
*   **Step 2: Calculate required speed for new time.**
    *   Given: Distance `D = 300 km`, New Time `T2 = 5 h`.
    *   Required Speed `S2 = D / T2 = 300 km / 5 h = 60 km/h`.
*   **Answer:** (a) 60 km/h

**2. Solution:**
*   **Step 1: Identify the scenario.**
    *   The man covers a certain distance and returns, meaning he covers two equal distances with different speeds. This is Rule 2 for average speed.
*   **Step 2: Apply the average speed formula for equal distances.**
    *   Given: `x = 80 km/h`, `y = 20 km/h`.
    *   Average Speed = `2xy / (x + y)`
    *   Average Speed = `(2 × 80 × 20) / (80 + 20) = 3200 / 100 = 32 km/h`.
*   **Answer:** (b) 32 km/h

**3. Solution:**
*   **Step 1: Define variables and set up equations.**
    *   Let usual speed be `S` km/h and distance be `D` km.
    *   Usual time `T = D/S = 3 h`. So, `D = 3S`. (Equation 1)
    *   New speed `S' = S - 12` km/h.
    *   New time `T' = 3 h + 45 min = 3 + 45/60 h = 3 + 3/4 h = 15/4 h`.
    *   `D = S' × T' = (S - 12) × (15/4)`. (Equation 2)
*   **Step 2: Solve the equations.**
    *   Substitute `D = 3S` into Equation 2:
        `3S = (S - 12) × (15/4)`
        `12S = 15S - 180`
        `3S = 180`
        `S = 60 km/h`.
*   **Step 3: Calculate the distance.**
    *   Using `D = 3S`: `D = 3 × 60 = 180 km`.
*   **Answer:** (c) 180 km

**4. Solution:**
*   **Step 1: Identify the scenario and apply Rule 4.**
    *   This is a case where different speeds lead to being late and early.
*   **Step 2: Convert time differences to hours.**
    *   `t1 = 6 min = 6/60 h = 1/10 h` (late)
    *   `t2 = 9 min = 9/60 h = 3/20 h` (early)
*   **Step 3: Apply the distance formula.**
    *   Given: `x = 10 km/h`, `y = 12 km/h`.
    *   Distance `D = (x * y * (t1 + t2)) / (y - x)`
    *   `D = (10 * 12 * (1/10 + 3/20)) / (12 - 10)`
    *   `D = (120 * (2/20 + 3/20)) / 2`
    *   `D = (120 * (5/20)) / 2`
    *   `D = (120 * 1/4) / 2`
    *   `D = 30 / 2 = 15 km`.
*   **Answer:** (d) 15 km

**5. Solution:**
*   **Step 1: Calculate time taken for each segment.**
    *   Time for first 50 km: `T1 = 50 km / 25 km/h = 2 h`.
    *   Time for next 40 km: `T2 = 40 km / 20 km/h = 2 h`.
    *   Time for last 90 km: `T3 = 90 km / 15 km/h = 6 h`.
*   **Step 2: Calculate total distance and total time.**
    *   Total Distance = `50 + 40 + 90 = 180 km`.
    *   Total Time = `2 + 2 + 6 = 10 h`.
*   **Step 3: Calculate average speed in km/h.**
    *   Average Speed = Total Distance / Total Time = `180 km / 10 h = 18 km/h`.
*   **Step 4: Convert average speed to m/s.**
    *   Average Speed in m/s = `18 km/h × (5/18) m/s = 5 m/s`.
*   **Answer:** (b) 5

**6. Solution:**
*   **Step 1: Understand the problem.**
    *   Original speed = `p` km/h.
    *   Reduced speed = `(p - q)` km/h.
    *   Distance = `1` km.
    *   Time taken = `r` h.
*   **Step 2: Apply the fundamental formula.**
    *   `Time = Distance / Speed`
    *   `r = 1 / (p - q)`
*   **Step 3: Rearrange to match options.**
    *   `1/r = p - q`.
*   **Answer:** (d) `1/r = p-q`

**7. Solution:**
*   **Step 1: Convert speed to m/s.**
    *   Speed of train = `36 km/h = 36 × (5/18) m/s = 2 × 5 = 10 m/s`.
*   **Step 2: Identify distance for crossing a post.**
    *   When a train crosses a telegraph post, the distance covered is equal to the length of the train.
*   **Step 3: Calculate the length of the train.**
    *   Length of train = Speed × Time
    *   Length of train = `10 m/s × 40 s = 400 m`.
*   **Answer:** (a) 400 m

**8. Solution:**
*   **Note:** The question "A person can run around a circular p" is incomplete in the provided text. Assuming it's a general time and distance problem, the approach would depend on the complete question (e.g., finding speed, time, or distance given other parameters). Without further context, a specific solution cannot be provided.
*   **General Approach for Circular Track Problems:**
    *   **Distance:** Usually the circumference of the circular track (`2πr`).
    *   **Relative Speed:** If two persons run in the same direction, relative speed is `|S1 - S2|`. If in opposite directions, `S1 + S2`.
    *   **Meeting Points:** Time to meet for the first time at the starting point, or anywhere on the track.
    *   **Units:** Ensure consistency (e.g., meters and seconds).