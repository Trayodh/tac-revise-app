"""
Manim Video Lecture: Indus Valley Civilization
Defence Exams (NDA / CDS / AFCAT) — History Series
Run with: python -m manim -pql indus_valley.py IndusValleyCivilization
"""

from manim import *

# ─── Colour palette matching the app ───────────────────────────────────────
BG       = "#060b14"
GREEN    = "#22c55e"
BLUE     = "#3b82f6"
AMBER    = "#f59e0b"
RED      = "#ef4444"
WHITE    = "#f9fafb"
MUTED    = "#9ca3af"
CARD_BG  = "#111827"


class IndusValleyCivilization(Scene):
    def construct(self):
        self.camera.background_color = BG
        self._title_card()
        self._discovery_slide()
        self._town_planning_slide()
        self._sites_slide()
        self._economy_script_slide()
        self._exam_tips_slide()
        self._end_card()

    # ─────────────────────────────────────────────────────────────────────────
    # HELPERS
    # ─────────────────────────────────────────────────────────────────────────
    def _card(self, width=12, height=6.5, color=CARD_BG, stroke=GREEN, opacity=0.6):
        rect = RoundedRectangle(corner_radius=0.3, width=width, height=height)
        rect.set_fill(color, opacity=opacity)
        rect.set_stroke(stroke, width=1.5, opacity=0.5)
        return rect

    def _badge(self, text, color=GREEN):
        label = Text(text, font="Courier New", font_size=16, color=color)
        box = SurroundingRectangle(label, corner_radius=0.2, buff=0.15,
                                   color=color, fill_color=color,
                                   fill_opacity=0.12, stroke_width=1)
        return VGroup(box, label)

    def _heading(self, text, color=GREEN, size=36):
        return Text(text, font="Arial", font_size=size,
                    color=color, weight=BOLD)

    def _body(self, text, color=WHITE, size=24):
        return Text(text, font="Arial", font_size=size, color=color)

    def _bullet(self, icon, text, color=WHITE, size=22):
        ico  = Text(icon, font_size=size + 2)
        body = Text(text, font="Arial", font_size=size, color=color)
        body.next_to(ico, RIGHT, buff=0.2)
        return VGroup(ico, body)

    def _divider(self, width=10, color=GREEN):
        line = Line(LEFT * width / 2, RIGHT * width / 2)
        line.set_stroke(color, width=1, opacity=0.4)
        return line

    def _slide_out(self, *mobjects):
        self.play(*[FadeOut(m, shift=UP * 0.5) for m in mobjects], run_time=0.6)

    # ─────────────────────────────────────────────────────────────────────────
    # SLIDE 1 — Title Card
    # ─────────────────────────────────────────────────────────────────────────
    def _title_card(self):
        # Glow ring
        ring1 = Circle(radius=3.5).set_stroke(GREEN, width=1, opacity=0.08)
        ring2 = Circle(radius=2.8).set_stroke(BLUE,  width=1, opacity=0.06)

        badge = self._badge("HISTORY SERIES  ·  NDA / CDS / AFCAT")
        badge.to_edge(UP, buff=1.2)

        title = Text("Indus Valley\nCivilization",
                     font="Arial", font_size=60, weight=BOLD,
                     color=WHITE, line_spacing=1.2)
        title.set_color_by_gradient(WHITE, "#86efac", "#60a5fa")

        sub = Text("India's First Urban Revolution  ·  Bronze Age  ·  ~2500 BCE",
                   font="Courier New", font_size=20, color=MUTED)
        sub.next_to(title, DOWN, buff=0.5)

        divider = self._divider(8)
        divider.next_to(sub, DOWN, buff=0.5)

        # Animate
        self.play(Create(ring1), Create(ring2), run_time=1)
        self.play(FadeIn(badge, shift=DOWN * 0.3))
        self.play(Write(title), run_time=1.5)
        self.play(FadeIn(sub), GrowFromCenter(divider))
        self.wait(2)
        self._slide_out(ring1, ring2, badge, title, sub, divider)

    # ─────────────────────────────────────────────────────────────────────────
    # SLIDE 2 — Discovery & Chronology
    # ─────────────────────────────────────────────────────────────────────────
    def _discovery_slide(self):
        card = self._card(12.5, 7)
        heading = self._heading("🏛  Discovery & Chronology")
        heading.to_edge(UP, buff=0.5)
        divider = self._divider().next_to(heading, DOWN, buff=0.1)

        facts = [
            ("🔍", "Harappa (1921) — Daya Ram Sahni, under John Marshall"),
            ("🔍", "Mohenjo-daro (1922) — R.D. Banerji"),
            ("📅", "Mature Phase: 2600 – 1900 BCE  (Carbon-14 dated)"),
            ("🌊", "Also called Harappan Civilization — river-based culture"),
            ("📍", "Spread: 1.3 million km²  —  larger than Egypt + Mesopotamia"),
        ]

        bullets = VGroup()
        for icon, text in facts:
            b = self._bullet(icon, text, size=22)
            bullets.add(b)
        bullets.arrange(DOWN, aligned_edge=LEFT, buff=0.38)
        bullets.next_to(divider, DOWN, buff=0.3)
        bullets.to_edge(LEFT, buff=0.6)

        self.play(FadeIn(card))
        self.play(Write(heading), GrowFromCenter(divider))
        for b in bullets:
            self.play(FadeIn(b, shift=RIGHT * 0.3), run_time=0.5)
        self.wait(2.5)
        self._slide_out(card, heading, divider, bullets)

    # ─────────────────────────────────────────────────────────────────────────
    # SLIDE 3 — Town Planning
    # ─────────────────────────────────────────────────────────────────────────
    def _town_planning_slide(self):
        card = self._card(12.5, 7)
        heading = self._heading("🏙  Town Planning  — Exam Favourite", size=32)
        heading.to_edge(UP, buff=0.5)
        divider = self._divider().next_to(heading, DOWN, buff=0.1)

        features = [
            ("📐", "Grid System",      "Streets at right angles, rectangular city blocks"),
            ("🏰", "Citadel + Lower",  "Citadel (west, elites) & Lower Town (east, commoners)"),
            ("🚰", "Drainage",         "Underground covered drains → manholes/soak pits"),
            ("🧱", "Bricks",           "Standardized burnt bricks in ratio  4 : 2 : 1"),
            ("💧", "Great Bath",        "Mohenjo-daro  —  waterproof, ritual bathing"),
            ("🏚",  "Exception",        "Dholavira had THREE divisions (Citadel, Middle, Lower)"),
        ]

        rows = VGroup()
        for icon, key, value in features:
            ico  = Text(icon, font_size=24)
            k    = Text(key + " — ", font="Arial", font_size=21, color=GREEN, weight=BOLD)
            v    = Text(value, font="Arial", font_size=21, color=MUTED)
            k.next_to(ico, RIGHT, buff=0.15)
            v.next_to(k,   RIGHT, buff=0.05)
            rows.add(VGroup(ico, k, v))

        rows.arrange(DOWN, aligned_edge=LEFT, buff=0.32)
        rows.next_to(divider, DOWN, buff=0.3)
        rows.to_edge(LEFT, buff=0.5)

        self.play(FadeIn(card))
        self.play(Write(heading), GrowFromCenter(divider))
        for row in rows:
            self.play(FadeIn(row, shift=RIGHT * 0.25), run_time=0.45)
        self.wait(2.5)
        self._slide_out(card, heading, divider, rows)

    # ─────────────────────────────────────────────────────────────────────────
    # SLIDE 4 — Key Sites Table
    # ─────────────────────────────────────────────────────────────────────────
    def _sites_slide(self):
        card = self._card(12.5, 7)
        heading = self._heading("📍  Key Sites — High-Yield Table", size=32)
        heading.to_edge(UP, buff=0.5)
        divider = self._divider().next_to(heading, DOWN, buff=0.1)

        data = [
            ["Site",         "Location",     "Signature Discovery"],
            ["Harappa",      "Punjab / Ravi", "6 Granaries in a row"],
            ["Mohenjo-daro", "Sindh / Indus", "Great Bath · Bronze Girl"],
            ["Lothal",       "Gujarat",       "Artificial Dockyard (trade)"],
            ["Kalibangan",   "Rajasthan",     "Ploughed field surface 🌾"],
            ["Dholavira",    "Gujarat/Kutch", "Water reservoirs · Stadium"],
            ["Chanhudaro",   "Sindh",         "Only site WITHOUT a Citadel"],
            ["Surkotada",    "Gujarat",       "Only site with Horse Bones 🐴"],
        ]

        table = Table(
            [row for row in data[1:]],
            col_labels=[Text(h, font="Arial", font_size=18, color=GREEN, weight=BOLD)
                        for h in data[0]],
            include_outer_lines=True,
            line_config={"stroke_width": 0.8, "color": "#374151"},
            element_to_mobject=lambda t: Text(t, font="Arial", font_size=17, color=WHITE),
        )
        table.scale(0.72)
        table.next_to(divider, DOWN, buff=0.25)
        table.to_edge(LEFT, buff=0.3)

        self.play(FadeIn(card))
        self.play(Write(heading), GrowFromCenter(divider))
        self.play(Create(table), run_time=2)
        self.wait(3)
        self._slide_out(card, heading, divider, table)

    # ─────────────────────────────────────────────────────────────────────────
    # SLIDE 5 — Economy, Script & Decline
    # ─────────────────────────────────────────────────────────────────────────
    def _economy_script_slide(self):
        card = self._card(12.5, 7)
        heading = self._heading("⚖  Economy, Script & Decline", size=32)
        heading.to_edge(UP, buff=0.5)
        divider = self._divider().next_to(heading, DOWN, buff=0.1)

        points = [
            ("🌾", "Agriculture", "Wheat, Barley, Cotton — FIRST to grow cotton (called Sindon by Greeks)"),
            ("🚢", "Trade",       "Traded with Mesopotamia — called Meluhha in cuneiform texts"),
            ("📜", "Script",      "Pictographic — UNDECIPHERED. Written Boustrophedon (R→L then L→R)"),
            ("🔷", "Seals",       "Made of Steatite (soapstone). Pashupati Seal = proto-Shiva"),
            ("⬇", "Decline",     "Mortimer Wheeler (Aryan Invasion) — now mostly rejected"),
            ("⬇", "",            "Ecological imbalance / drying of Saraswati River — widely accepted"),
        ]

        bullets = VGroup()
        for icon, key, val in points:
            ico = Text(icon, font_size=22)
            if key:
                k = Text(key + ": ", font="Arial", font_size=20, color=AMBER, weight=BOLD)
                v = Text(val, font="Arial", font_size=20, color=WHITE)
                v.next_to(k, RIGHT, buff=0.05)
                k.next_to(ico, RIGHT, buff=0.15)
                row = VGroup(ico, k, v)
            else:
                v = Text(val, font="Arial", font_size=20, color=MUTED)
                v.next_to(ico, RIGHT, buff=0.15)
                row = VGroup(ico, v)
            bullets.add(row)

        bullets.arrange(DOWN, aligned_edge=LEFT, buff=0.32)
        bullets.next_to(divider, DOWN, buff=0.3)
        bullets.to_edge(LEFT, buff=0.5)

        self.play(FadeIn(card))
        self.play(Write(heading), GrowFromCenter(divider))
        for b in bullets:
            self.play(FadeIn(b, shift=RIGHT * 0.25), run_time=0.45)
        self.wait(2.5)
        self._slide_out(card, heading, divider, bullets)

    # ─────────────────────────────────────────────────────────────────────────
    # SLIDE 6 — Exam Tips
    # ─────────────────────────────────────────────────────────────────────────
    def _exam_tips_slide(self):
        card = self._card(12.5, 7, stroke=AMBER)
        heading = self._heading("⚡  High-Yield Exam Tips", color=AMBER, size=34)
        heading.to_edge(UP, buff=0.5)
        divider = self._divider(color=AMBER).next_to(heading, DOWN, buff=0.1)

        tips = [
            "Deciphered Ashokan script (Brahmi) → James Prinsep 1837 — NOT IVC script",
            "IVC people did NOT use iron — Bronze Age civilization",
            "Kalibangan = Black Bangles  |  Lothal = Dockyard  |  Chanhudaro = No Citadel",
            "First to produce Cotton globally — Greeks called it Sindon",
            "Great Bath → Mohenjo-daro   NOT Harappa",
            "Surkotada = Only site with HORSE bones (disproves horse-less theory)",
        ]

        tip_group = VGroup()
        for i, tip in enumerate(tips):
            num  = Text(f"{i+1}.", font="Courier New", font_size=20, color=AMBER, weight=BOLD)
            text = Text(tip, font="Arial", font_size=19, color=WHITE)
            text.next_to(num, RIGHT, buff=0.15)
            row = VGroup(num, text)
            tip_group.add(row)

        tip_group.arrange(DOWN, aligned_edge=LEFT, buff=0.35)
        tip_group.next_to(divider, DOWN, buff=0.3)
        tip_group.to_edge(LEFT, buff=0.5)

        self.play(FadeIn(card))
        self.play(Write(heading), GrowFromCenter(divider))
        for tip in tip_group:
            self.play(FadeIn(tip, shift=RIGHT * 0.3), run_time=0.4)
        self.wait(3)
        self._slide_out(card, heading, divider, tip_group)

    # ─────────────────────────────────────────────────────────────────────────
    # SLIDE 7 — End Card
    # ─────────────────────────────────────────────────────────────────────────
    def _end_card(self):
        ring = Circle(radius=2).set_stroke(GREEN, width=2, opacity=0.3)
        icon = Text("🎓", font_size=80)

        title = Text("Lecture Complete!", font="Arial",
                     font_size=52, weight=BOLD)
        title.set_color_by_gradient(GREEN, BLUE)
        title.next_to(icon, DOWN, buff=0.3)

        sub = Text("Indus Valley Civilization — History Series",
                   font="Courier New", font_size=22, color=MUTED)
        sub.next_to(title, DOWN, buff=0.4)

        next_tip = Text("Next: Vedic Age ▶", font="Arial",
                        font_size=20, color=GREEN)
        next_tip.next_to(sub, DOWN, buff=0.6)

        group = VGroup(icon, title, sub, next_tip)
        group.center()

        self.play(Create(ring), FadeIn(icon, scale=0.5))
        self.play(Write(title))
        self.play(FadeIn(sub), FadeIn(next_tip, shift=UP * 0.2))
        self.play(ring.animate.scale(1.3).set_stroke(opacity=0),
                  run_time=1.5, rate_func=there_and_back)
        self.wait(2.5)
