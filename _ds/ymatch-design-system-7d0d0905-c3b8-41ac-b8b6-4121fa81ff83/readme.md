# Ymatch Design System

> **Vakmanschap verbindt.** — Warm. Vakkundig. Direct.
> v4.2 · Juni 2026 · Recruitment & Detachering

This project is the design system for **Ymatch**, a Dutch recruitment & secondment (detachering) agency based in Capelle aan den IJssel (Rotterdam region). Ymatch places skilled professionals — *vakmensen* — across three sectors: **Bouw** (construction), **Techniek** (technical/installation) and **Office**. The brand is built around real, named consultants and a direct, no-nonsense tone: salary always shown, WhatsApp one tap away, "wij bellen je morgen terug."

The product surface is a single **marketing + vacancy website** (ymatch.nl): a search-led homepage, a filterable vacaturebank (job board), and a team/contact page. ~75% of traffic is mobile — design mobile-first (375px), minimum 44×44px touch targets.

---

## Sources

This system was reverse-engineered from a single, comprehensive brand spec document supplied by the client:

- **`Website ymatch/Design_System_Final_Final.html`** — *"Ymatch — Design System v4.2"*, a 1,690-line hand-authored spec covering principles, colors, type, spacing, radius, buttons, the vacaturekaart, sector blocks, forms, tone of voice, recruiter cards, the graphic motif, a dark demo, the hero component, photography guidelines and iconography. All tokens, copy examples and component behaviours in this project trace back to that file.

> ⚠️ **No code repository or Figma file was provided** — only the spec HTML. Component implementations here are faithful re-creations of the spec's CSS, not imports from production source. The spec's **photography** (consultant portraits, office, team culture) referenced external upload paths that are **not** accessible in this project; see *Caveats*.

---

## Content fundamentals

**Language:** Dutch (`lang="nl"`). All UI copy, labels and microcopy are in Dutch.

**Voice — the five principles (Wie zijn wij):**
1. **Vuur** — Warm & persoonlijk. Address people as people, never as "kandidaten". Use *jij/je*, never *u*. Know their name.
2. **Puur** — Eerlijk & direct. Always state the salary. Describe the procedure concretely. Never "marktconform". Say what you mean in the first sentence.
3. **Vakmanschap** — Vakkundig & specifiek. You write for an electrician who knows their trade. No explaining "what detachering is". Respect the craft.
4. **Energie** — Active, never passive. *"Wij bellen je morgen"* — not *"er zal contact worden opgenomen"*. Active sentences. Gas geven.
5. **Verbinding** — Relationship over transaction. Ymatch places for the long term; it should be felt in every CTA and recruiter card.

**What Ymatch is NOT:** big, anonymous, corporate. No stock photos. No "marktleider in talent solutions". No slogans without substance. Never passive.

**Casing & punctuation:** Sentence case for headings and body. Mono labels/eyebrows are UPPERCASE with wide tracking (`.07em`), often dot-separated: `BOUW · ROTTERDAM · ZZP · €3.200/MND`. Salary uses the Dutch format with a period thousands-separator and `/mnd` or `/uur` suffix.

**Tone do / don't (from the spec):**
- ✅ *"Solliciteer nu — wij bellen je morgen terug voor een korte kennismaking."*
  ❌ *"Er kan gesolliciteerd worden via onderstaand formulier, waarna contact wordt opgenomen."*
- ✅ *"Je hebt minimaal 3 jaar ervaring als elektromonteur en werkt graag zelfstandig."*
  ❌ *"Wij zoeken een gedreven teamspeler met passie voor de technische sector."*

**Emoji:** none. The brand never uses emoji. Personality comes from the Caveat hand-font and warm copy, not icons-as-decoration.

---

## Visual foundations

**Palette — "vier kleuren, één hiërarchie".** Orange is the *brand*, not the button.
- **Vuur Oranje `#E94E1B`** (`--orange`) — brand accent, icons, hover, the Y. Never the background of the primary CTA.
- **Ink `#15171C`** (`--ink`) — the primary CTA button + all headings + dark sections. Max contrast; stands out even on an orange-rich page. Max **one** ink CTA per page.
- **Staalgroen `#2D7A4F`** (`--green`) — availability, "nieuw", success, salary blocks.
- **Draft Blauw `#2E4A6B`** (`--blue`) — informational/technical accents, dimension lines. Used sparingly (3rd in hierarchy).
- **WhatsApp `#25D366`** (`--wa`) — only ever the WhatsApp CTA. Always green.
- **Backgrounds:** Warmwit `#EFEAE0` (`--bg`, page) and Card `#F8F5EF` (`--card`) — warm, never cold white. Plus `--bg-2/-3` for hover/sunken.
- Functional tints (`--orange-tint`, `--green-tint`, `--blue-tint`) back badges and feedback blocks.

**Typography — three fonts, each in its place.**
- **Bricolage Grotesque** (`--font-display`) — display + body. Variable optical size. Headings are heavy (800/700) with tight negative tracking (down to `-.05em`); an italic *light (300)* cut is used for emphasis words inside headings (`Vakman<em>schap</em>`).
- **Space Mono** (`--font-mono`) — labels, eyebrows, meta, HEX, salary figures. UPPERCASE, `.07em` tracking.
- **Caveat** (`--font-hand`) — handwritten accents **only**: recruiter taglines, quote attributions, the "Vakmanschap verbindt." sign-off. Never in body or nav.
- Scale: H1 52 · H2 38 · H3 28 · H4 20 · body-lg 18 · body 16 · label 11. Min 24px text on large display surfaces; body never below 14.

**Spacing:** strict **8pt grid** (`--space-*`, multiples of 8; 4px is the only half-step for fine detail). Content max-width 1080px, 52px desktop gutters.

**Radius — "rond maar niet speels":** badges 4px (`--r-xs`), buttons/inputs 8px (`--r-sm`), **cards 14px** (`--r`, the standard ★), modals/hero 20px (`--r-lg`), pills for chips/tags.

**Backgrounds & texture:** the signature surface is a **dotted grid** (radial-dot, 24×24px, ink at 6%) on warm-white — applied to the whole page (`body`). A secondary **blueprint grid** (blue lines, 7%, 20×20px → `.ym-blueprint`) is used on dark marketing/CTA surfaces, paired with Caveat handwriting. Dark sections (`--ink` bg) use a faint white dotted grid + concentric "bolt/cross-section" circle decorations at 5–12% opacity. No photographic full-bleed heros in the spec; no gradients.

**Shadows:** warm, ink-tinted (never pure black). `--shadow-sm` at rest, `--shadow-lg` on hover-lift.

**Animation & states:** subtle and quick (~.14–.2s). Cards lift on hover (`translateY(-3px)` + `--shadow-lg`) and reveal an **orange top-border**. Buttons: ink → ink-2 with a 1px lift; orange → orange-deep; outline darkens border + fills `--bg-2`. **Focus** = orange border + soft orange glow (`--ring`). **Error** = red border + inline message (no modal validation). No bounces, no infinite loops.

**Graphic motif:** concentric circles (bolt / pipe cross-section) and blueprint **dimension lines** (`320px` measure marks in blue) — "bouwtekening als taal", referencing construction & engineering without literal hard-hats or stock clichés.

---

## Iconography

- **Set:** **Lucide Icons** (lucide.dev) — the fixed icon set for ymatch.nl. Open-source, 1400+ icons.
- **Style:** **1.5px stroke**, round caps/joins, `none` fill. Sizes: **20px** in UI, **24px** decorative.
- **Usage:** inline SVG (or `lucide-react` in production). Core set in use: `search`, `map-pin`, `briefcase`, `user`, `home` (Bouw), `wrench` (Techniek), `monitor` (Office), `phone`. The UI kit ships a small Lucide-style `Icons` map in `ui_kits/website/SiteChrome.jsx`.
- **WhatsApp** is the one brand glyph (filled, not stroked) — see `assets/icon-whatsapp.svg`. Always rendered in/with `--wa` green.
- **No emoji, no unicode-as-icon.** Icons are always real SVG.
- Since the source spec rendered Lucide as inline SVG (no icon-font binary shipped), this system **substitutes the canonical Lucide paths** for the handful of icons used and otherwise recommends pulling from `lucide.dev` / `lucide-react`. No substitution of *style* — the spec specifies Lucide directly.

---

## Index / manifest

**Root**
- `styles.css` — the single entry point consumers link. `@import`s only.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill front-matter for use in Claude Code.

**`tokens/`** (all reached from `styles.css`)
- `fonts.css` — Google Fonts `@import` for Bricolage Grotesque / Space Mono / Caveat.
- `colors.css` · `typography.css` · `spacing.css` · `radius.css` — CSS custom properties (base + semantic aliases).
- `base.css` — page defaults + the dotted-grid canvas + `.ym-blueprint` utility.

**`assets/`**
- `ymatch-logo.svg` (orange Y + ink wordmark, for light bg) · `ymatch-logo-light.svg` (for ink bg) · `icon-whatsapp.svg`.

**`components/`** — reusable React primitives (exported on `window.YmatchDesignSystem_7d0d09`)
- `core/` — **Button** (primary/brand/outline/ghost/whatsapp), **Badge**, **FilterChip**
- `forms/` — **TextField**, **Select**, **Textarea**
- `recruitment/` — **Avatar**, **VacatureCard**, **SectorCard**, **RecruiterCard**

**`ui_kits/website/`** — interactive ymatch.nl recreation
- `index.html` (run this) · `SiteChrome.jsx` (header/footer/icons) · `HomeView.jsx` · `VacaturesView.jsx` · `TeamView.jsx` · `README.md`

**`guidelines/`** — Design System tab specimen cards (Colors, Type, Spacing, Brand).

---

## Caveats

- **No production code / Figma** was available — only the spec HTML. Components are faithful CSS re-creations, not imports. If a Ymatch repo or Figma exists, re-attach it and components can be aligned 1:1.
- **Photography is missing.** The spec's `Fotografie` section referenced external upload paths (consultant portraits, office, team culture) that aren't in this project. Avatars therefore default to initials circles, and views use copy/colour panels instead of imagery. **Please share the real Ymatch photo library** so I can wire it into avatars, the hero and the office panel.
- **Fonts load via Google Fonts CDN** (`tokens/fonts.css`), so the manifest shows "Fonts: (none)" — there are no self-hosted `@font-face` binaries. All three are free Google Fonts, so no substitution was needed. If you want fully self-hosted woff2 files, say so and I'll vendor them.
