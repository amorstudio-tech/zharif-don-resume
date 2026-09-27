# Work Card 02 — Hero and Bio

## Goal

Implement the Hero and Bio components with proper styling per `design.md`, including responsive behavior.

## Inputs

- `design.md` — hero layout, typography, colors, mobile rules
- `build-blueprint.md` — component expectations
- `work-cards/01-project-skeleton.md` — existing App structure

## Files likely touched

```
src/components/Hero.jsx
src/components/Bio.jsx
src/styles/hero.css
src/styles/bio.css
src/App.jsx (import added)
```

## Instructions for the coding agent

1. **Hero.jsx** — Replace placeholder with:
   - `<header>` element with class `hero`
   - `<h1>` with the name "Zharif Don" — font-size 2.5rem (scale to 2rem below 480px), font-weight 300
   - `<p>` subtitle: "Professional Resume" or a short tagline — `var(--text-secondary)`
   - Optional small `<p>` below with a brief descriptor
   - Centered text, generous padding (padding: 4rem 1rem)

2. **Bio.jsx** — Replace placeholder with:
   - `<section id="bio">`
   - `<h2>` "About Me" with accent underline bar (2px `var(--accent)`, 40px wide)
   - `<p>` paragraph of sample bio text (2–3 sentences, professional tone, not lorem ipsum)
     Example: "I'm a software engineer with a passion for building clean, user-friendly web applications. I enjoy turning complex problems into simple, beautiful solutions and am always exploring new technologies."
   - Left-aligned, max-width constrained by parent

3. **CSS files:**
   - `hero.css` — `.hero` centered, padding, responsive font sizing
   - `bio.css` — section heading style with accent underline bar, paragraph spacing
   - Import both CSS files in their respective components (or in `App.jsx` per project convention)

4. Wire into App.jsx (already done from Work Card 01 — verify imports are correct)

## What not to do

- No accordion behavior yet
- No other section styling
- Do not change colors/variables from global.css

## Done when

- Hero shows name "Zharif Don" centered, with subtitle
- Bio shows "About Me" heading with blue accent bar, and a bio paragraph
- Font sizes match design.md rules
- Design check: hero and bio follow design.md mood, spacing, and mobile rules.

## Verification steps

1. Browser shows Hero and Bio rendered correctly
2. Hero text is centered, Bio heading has accent underline
3. Resize to 320px — hero name scales down to 2rem, no overflow
4. No console errors

## Localhost test before continuing

- Open localhost — Hero section shows "Zharif Don" centered at top
- Scroll to Bio — "About Me" heading has a blue accent bar beneath it
- Resize browser to 320px width — text is readable, no horizontal scroll

If all pass, reply `continue`.
If anything fails, reply `fix`.

## Stop condition

If styling diverges from design.md, re-read design.md before fixing.

## Status

Not started