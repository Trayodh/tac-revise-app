"""
universal_lecture.py  —  Universal Manim Lecture Template
Reads a JSON file describing one topic and renders a full video lecture.

Usage (generated per-topic):
  python universal_lecture.py --topic path/to/topic.json
"""

import json, sys, argparse, textwrap, re, os

# Manim must be imported AFTER path setup
from manim import *

# ─── Colour Palette ────────────────────────────────────────────────────────
BG      = "#060b14"
GREEN   = "#22c55e"
BLUE    = "#3b82f6"
AMBER   = "#f59e0b"
WHITE   = "#f9fafb"
MUTED   = "#9ca3af"
CARD    = "#111827"
RED     = "#ef4444"

SUBJECT_COLORS = {
    "mathematics":      BLUE,
    "history":          AMBER,
    "geography":        GREEN,
    "general_studies":  RED,
    "english":          "#a855f7",
    "polity":           "#ec4899",
    "physics":          BLUE,
    "chemistry":        GREEN,
    "biology":          "#10b981",
}

def subject_color(subject_id):
    for k, v in SUBJECT_COLORS.items():
        if k in subject_id.lower():
            return v
    return GREEN

def wrap(text, width=62):
    """Wrap long text to multiple lines."""
    return "\n".join(textwrap.wrap(str(text), width))

def safe(text, maxlen=80):
    """Truncate long text safely."""
    text = str(text)
    return text[:maxlen] + ("…" if len(text) > maxlen else "")


class UniversalLecture(Scene):
    """Render one topic as a multi-slide animated lecture."""

    def __init__(self, topic_data, **kwargs):
        self.topic = topic_data
        self.accent = subject_color(topic_data.get("subjectId", ""))
        super().__init__()

    def construct(self):
        self.camera.background_color = BG
        self._slide_title()
        for i, block in enumerate(self.topic.get("blocks", [])[:5]):
            if block.get("tableRows") and len(block["tableRows"]) >= 2:
                self._slide_table(block)
            else:
                self._slide_content(block, i)
        if self.topic.get("formulas"):
            self._slide_formulas()
        self._slide_end()

    # ── Helpers ────────────────────────────────────────────────────────────

    def _card(self, w=13, h=7.2, stroke=None):
        stroke = stroke or self.accent
        r = RoundedRectangle(corner_radius=0.3, width=w, height=h)
        r.set_fill(CARD, opacity=0.55)
        r.set_stroke(stroke, width=1.5, opacity=0.45)
        return r

    def _heading(self, text, color=None, size=30):
        color = color or self.accent
        t = safe(text, 70)
        return Text(t, font="Arial", font_size=size, color=color, weight=BOLD)

    def _divider(self, color=None, w=11):
        color = color or self.accent
        l = Line(LEFT * w/2, RIGHT * w/2)
        l.set_stroke(color, width=1, opacity=0.35)
        return l

    def _bullet_row(self, text, size=20, color=WHITE):
        text = safe(text, 90)
        wrapped = wrap(text, 72)
        ico  = Text("▸", font_size=size, color=self.accent)
        body = Text(wrapped, font="Arial", font_size=size, color=color,
                    line_spacing=1.15)
        body.next_to(ico, RIGHT, buff=0.18, aligned_edge=UP)
        return VGroup(ico, body)

    def _fade_out_all(self, *mobs):
        self.play(*[FadeOut(m, shift=UP * 0.4) for m in mobs], run_time=0.55)

    # ── Slide 0: Title Card ────────────────────────────────────────────────

    def _slide_title(self):
        ring = Circle(radius=3).set_stroke(self.accent, width=1, opacity=0.1)

        badge_txt = Text(
            f"{self.topic['subject']}  ·  {self.topic['chapter']}",
            font="Courier New", font_size=16, color=self.accent)
        badge_box = SurroundingRectangle(
            badge_txt, corner_radius=0.2, buff=0.14,
            color=self.accent, fill_color=self.accent, fill_opacity=0.1,
            stroke_width=1)
        badge = VGroup(badge_box, badge_txt)
        badge.to_edge(UP, buff=1.0)

        title_str = self.topic["title"]
        if len(title_str) > 35:
            title_str = wrap(title_str, 28)
        title = Text(title_str, font="Arial", font_size=52, weight=BOLD,
                     line_spacing=1.2)
        title.set_color_by_gradient(WHITE, self.accent)

        div = self._divider(w=7)
        div.next_to(title, DOWN, buff=0.4)

        sub = Text("NDA · CDS · AFCAT  Revision Lecture",
                   font="Courier New", font_size=18, color=MUTED)
        sub.next_to(div, DOWN, buff=0.3)

        self.play(Create(ring), run_time=0.8)
        self.play(FadeIn(badge, shift=DOWN*0.2))
        self.play(Write(title), run_time=1.2)
        self.play(GrowFromCenter(div), FadeIn(sub))
        self.wait(2)
        self._fade_out_all(ring, badge, title, div, sub)

    # ── Slide N: Content ───────────────────────────────────────────────────

    def _slide_content(self, block, idx):
        card    = self._card()
        heading = self._heading(block.get("heading") or self.topic["title"], size=28)
        heading.to_edge(UP, buff=0.45)
        div = self._divider().next_to(heading, DOWN, buff=0.08)

        rows = VGroup()

        # Intro paragraph
        intro = block.get("intro", "").strip()
        if intro and len(intro) > 10:
            intro_txt = Text(wrap(safe(intro, 160), 80),
                             font="Arial", font_size=19, color=MUTED,
                             line_spacing=1.2)
            rows.add(intro_txt)

        # Bullets (max 7 per slide)
        for bul in block.get("bullets", [])[:7]:
            if bul.strip():
                rows.add(self._bullet_row(bul, size=20))

        if len(rows) == 0:
            rows.add(Text("Content for this topic is in the notes.",
                          font="Arial", font_size=20, color=MUTED))

        rows.arrange(DOWN, aligned_edge=LEFT, buff=0.28)
        rows.next_to(div, DOWN, buff=0.28)
        rows.to_edge(LEFT, buff=0.5)

        # Clamp within screen
        if rows.get_bottom()[1] < -3.5:
            rows.scale(0.88)
            rows.next_to(div, DOWN, buff=0.22)
            rows.to_edge(LEFT, buff=0.4)

        self.play(FadeIn(card))
        self.play(Write(heading), GrowFromCenter(div))
        for r in rows:
            self.play(FadeIn(r, shift=RIGHT*0.2), run_time=0.4)
        self.wait(2.2)
        self._fade_out_all(card, heading, div, rows)

    # ── Slide N: Table ─────────────────────────────────────────────────────

    def _slide_table(self, block):
        card    = self._card()
        heading = self._heading(block.get("heading") or "Key Facts Table", size=28)
        heading.to_edge(UP, buff=0.45)
        div = self._divider().next_to(heading, DOWN, buff=0.08)

        rows = block["tableRows"]
        # Limit columns & rows for display
        max_cols = min(len(rows[0]), 3)
        max_rows = min(len(rows), 8)
        data     = [[safe(c, 40) for c in r[:max_cols]] for r in rows[:max_rows]]

        header_row = data[0]
        body_rows  = data[1:] if len(data) > 1 else data

        try:
            tbl = Table(
                body_rows,
                col_labels=[Text(h, font="Arial", font_size=16,
                                 color=self.accent, weight=BOLD)
                             for h in header_row],
                include_outer_lines=True,
                line_config={"stroke_width": 0.7, "color": "#374151"},
                element_to_mobject=lambda t: Text(
                    t, font="Arial", font_size=16, color=WHITE),
            )
            tbl.scale(0.68)
            tbl.next_to(div, DOWN, buff=0.25)
            tbl.to_edge(LEFT, buff=0.3)

            self.play(FadeIn(card))
            self.play(Write(heading), GrowFromCenter(div))
            self.play(Create(tbl), run_time=1.8)
        except Exception:
            # Fallback to bullet list if table creation fails
            self.play(FadeIn(card))
            self.play(Write(heading), GrowFromCenter(div))
            bullets = VGroup(*[self._bullet_row(" · ".join(r)) for r in data[:6]])
            bullets.arrange(DOWN, aligned_edge=LEFT, buff=0.3)
            bullets.next_to(div, DOWN, buff=0.28).to_edge(LEFT, buff=0.5)
            for b in bullets:
                self.play(FadeIn(b, shift=RIGHT*0.2), run_time=0.4)

        self.wait(2.5)
        self._fade_out_all(card, heading, div)
        self.clear()

    # ── Slide: Formulas ────────────────────────────────────────────────────

    def _slide_formulas(self):
        card    = self._card(stroke=AMBER)
        heading = self._heading("⚡  High-Yield Formulas & Facts", color=AMBER, size=28)
        heading.to_edge(UP, buff=0.45)
        div = self._divider(color=AMBER).next_to(heading, DOWN, buff=0.08)

        formulas = self.topic.get("formulas", [])[:8]
        rows = VGroup()
        for i, f in enumerate(formulas):
            num  = Text(f"{i+1}.", font="Courier New",
                        font_size=19, color=AMBER, weight=BOLD)
            body = Text(safe(f, 90), font="Courier New",
                        font_size=19, color=WHITE, line_spacing=1.1)
            body.next_to(num, RIGHT, buff=0.15)
            rows.add(VGroup(num, body))

        rows.arrange(DOWN, aligned_edge=LEFT, buff=0.32)
        rows.next_to(div, DOWN, buff=0.28).to_edge(LEFT, buff=0.5)

        self.play(FadeIn(card))
        self.play(Write(heading), GrowFromCenter(div))
        for r in rows:
            self.play(FadeIn(r, shift=RIGHT*0.25), run_time=0.38)
        self.wait(2.5)
        self._fade_out_all(card, heading, div, rows)

    # ── Slide: End Card ────────────────────────────────────────────────────

    def _slide_end(self):
        icon  = Text("🎓", font_size=72)
        title = Text("Lecture Complete!", font="Arial",
                     font_size=46, weight=BOLD)
        title.set_color_by_gradient(self.accent, BLUE)
        title.next_to(icon, DOWN, buff=0.25)

        sub = Text(safe(self.topic["title"], 55),
                   font="Courier New", font_size=20, color=MUTED)
        sub.next_to(title, DOWN, buff=0.35)

        tip = Text("Review · Practice Quiz · Move to Next Topic",
                   font="Arial", font_size=18, color=self.accent)
        tip.next_to(sub, DOWN, buff=0.5)

        VGroup(icon, title, sub, tip).center()

        ring = Circle(radius=1.8).set_stroke(self.accent, width=2, opacity=0.2)
        self.play(Create(ring), FadeIn(icon, scale=0.5))
        self.play(Write(title))
        self.play(FadeIn(sub), FadeIn(tip, shift=UP*0.15))
        self.play(ring.animate.scale(1.4).set_stroke(opacity=0),
                  run_time=1.5, rate_func=there_and_back)
        self.wait(2)


# ─── Entry Point ───────────────────────────────────────────────────────────
if __name__ == "__main__":
    p = argparse.ArgumentParser()
    p.add_argument("--topic", required=True, help="Path to topic JSON file")
    p.add_argument("--quality", default="l", help="l=low, m=medium, h=high")
    args = p.parse_args()

    with open(args.topic, "r", encoding="utf-8") as f:
        topic_data = json.load(f)

    config.background_color   = BG
    config.pixel_height        = 720  if args.quality == "h" else 480
    config.pixel_width         = 1280 if args.quality == "h" else 854
    config.frame_rate          = 30   if args.quality == "h" else 15
    config.output_file         = topic_data["id"]
    config.media_dir           = os.path.join(os.path.dirname(args.topic), "media")

    scene = UniversalLecture(topic_data)
    scene.render()
