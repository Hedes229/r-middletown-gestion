# Design System Document: Middleton Gestion

## 1. Overview & Creative North Star: "The Editorial Atelier"
The Creative North Star for this design system is **"The Editorial Atelier."** In the world of accounting, we often see cold grids and rigid tables. We are breaking that mold. This system treats financial management with the grace of a high-end French fashion house. 

The aesthetic is defined by **intentional asymmetry** and **tonal depth**. We move away from the "template" look by using a high-contrast typography scale (massive serifs vs. tiny, clean labels) and overlapping elements that break out of their containers. The goal is to make the user feel like they are reading a premium magazine, not a spreadsheet—creating a sense of warmth, femininity, and unshakeable professional authority.

---

## 2. Color & Surface Logic
The palette is a sophisticated journey from the warmth of a sunset (`secondary_fixed`) to the deep authority of an evening sky (`primary`).

### The "No-Line" Rule
**Strict Mandate:** Designers are prohibited from using 1px solid borders for sectioning. Structural boundaries must be defined solely through background color shifts or subtle tonal transitions. For example, a `surface_container_low` section sitting on a `surface` background provides all the definition needed.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of fine vellum paper.
*   **Base:** `surface` (#faf9f6) – The canvas.
*   **Subtle Lift:** `surface_container_low` (#f4f4f0) – For large background areas.
*   **Component Base:** `surface_container` (#eeeeea) – For standard card backgrounds.
*   **The Focal Point:** `surface_container_highest` (#e1e3df) – For active or highlighted elements.

### The "Glass & Gradient" Rule
To elevate beyond a standard flat UI, utilize **Glassmorphism** for floating elements (modals, navigation bars). 
*   **Execution:** Use semi-transparent `surface` colors with a 20px - 40px backdrop-blur.
*   **Signature Textures:** Apply a linear gradient from `primary` (#5948d3) to `tertiary` (#ba0069) at a 45-degree angle for primary CTAs and Hero accents. This "soulful" transition provides a professional polish that flat color cannot mimic.

---

## 3. Typography: The Editorial Voice
We use a high-contrast pairing to balance "Feminine Grace" with "Structural Clarity."

*   **Display & Headlines (Noto Serif):** This is our "Editorial" voice. Use `display-lg` (3.5rem) for hero sections to create an immediate impact. The serif should feel authoritative yet approachable.
*   **Body & Titles (Manrope):** This is our "Functional" voice. Manrope provides a clean, modern counterpoint to the serif. Use `body-lg` (1rem) for readability in financial reports.
*   **Labels (Manrope):** Use `label-md` (0.75rem) in all-caps with 0.05rem letter-spacing for a "boutique" feel on small metadata.

---

## 4. Elevation & Depth: Tonal Layering
Traditional shadows are often "dirty." In this system, we use light and tone to create a sense of space.

*   **The Layering Principle:** Depth is achieved by "stacking." Place a `surface_container_lowest` (#ffffff) card on a `surface_container_low` (#f4f4f0) section. This creates a soft, natural lift without any artificial CSS effects.
*   **Ambient Shadows:** If a floating element (like a dropdown) requires a shadow, it must be an "Ambient Shadow": 
    *   `blur: 40px`, `spread: 0`, `opacity: 6%`, `color: #303330` (on_surface).
*   **The "Ghost Border" Fallback:** If accessibility requires a border, use the `outline_variant` token at **15% opacity**. Never use 100% opaque borders.
*   **Soft Edges:** Adhere strictly to the **Roundedness Scale**. The `lg` (2rem) or `xl` (3rem) radius should be used for main content cards to evoke the "warm and soft" brand identity.

---

## 5. Components

### Buttons
*   **Primary:** A gradient from `primary` (#5948d3) to `tertiary` (#ba0069). Text in `on_primary`. Shape: `full` (9999px) for a soft, pill-like feel.
*   **Secondary:** `surface_container_high` background with `primary` text. No border.
*   **Tertiary:** Ghost style. No background, `primary` text, underlined only on hover.

### Input Fields
*   **Style:** `surface_container_low` background with a `bottom-border` only, using `outline_variant` at 20% opacity. 
*   **State:** When focused, the bottom border transitions to the `primary` indigo.
*   **Labels:** Use `label-md` positioned above the input, never placeholder-only.

### Cards & Lists
*   **Rule:** Forbid the use of divider lines. 
*   **Separation:** Use vertical white space from the **Spacing Scale** (e.g., `8` (2.75rem) between list items) or subtle background shifts between rows (alternating `surface` and `surface_container_low`).
*   **Floral Accents:** Subtle, low-opacity floral motifs (inspired by the logo) can be used as "watermarks" in the bottom-right corner of large cards (opacity 5-10%).

### Interactive Chips
*   **Style:** `surface_container_highest` background, `md` (1.5rem) corner radius. Use for filtering tax categories or document types.

---

## 6. Do's and Don'ts

### Do
*   **Do** use asymmetrical margins. A hero image might be offset to the right while text sits left-aligned with a massive 16-unit (5.5rem) top margin.
*   **Do** use the "French Typography" approach: Large headlines, lots of breathing room (`12` or `16` spacing tokens), and purposeful whitespace.
*   **Do** ensure all interactive elements have a minimum touch target of 44px, even if they appear "delicate."

### Don't
*   **Don't** use pure black (#000000). Use `on_surface` (#303330) for all text to maintain warmth.
*   **Don't** use standard "Drop Shadows." They look cheap. Stick to tonal layering and ambient, low-opacity blurs.
*   **Don't** cram information. If a page feels busy, increase the spacing token by two levels.
*   **Don't** use sharp corners. The minimum radius for any container should be `sm` (0.5rem), but `lg` (2rem) is the preferred standard for the "Middleton" look.