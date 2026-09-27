# Work Card 05 — Experience Section

## Goal

Implement the Experience section with accordion panels, same single-open pattern as Skills.

## Inputs

- `design.md` — section style
- `content.js` — experience data
- `AccordionPanel` component
- Pattern established in Work Card 04

## Files likely touched

```
src/components/Experience.jsx
src/styles/experience.css
src/App.jsx (ensure import)
```

## Instructions for the coding agent

1. **Experience.jsx:**
   - `<section id="experience">`
   - `<h2>` "Experience" with accent underline bar
   - Import `experience` from `../content.js`
   - `useState` with `openIndex` (number or null)
   - `.map()` over experience array — one `AccordionPanel` per job
   - Panel title: job `title`, children: show `period` (as a muted line) then `details`
   - Unique `id` per panel: `"exp-" + index`

2. **experience.css:**
   - Section spacing: margin-top 4rem (2.5rem on mobile)
   - Inside panel content: `.period` class styled with `var(--text-secondary)`, font-size 0.85rem, margin-bottom 0.5rem

## What not to do

- Do not change the single-open pattern
- Do not add other sections

## Done when

- Experience section renders job entries as accordion panels
- Single-open behavior works identically to Skills
- Period is displayed as a muted subtitle inside the panel

## Verification steps

1. "Experience" heading with accent bar renders
2. Two job entries as collapsed panels
3. Click to open — period and details show
4. Single-open behavior matches Skills section
5. Design check: consistent with design.md section rhythm

## Localhost test before continuing

- Open localhost — Experience section appears after Skills
- Both jobs show collapsed
- Click first job — it opens, shows period + details
- Click second — first closes, second opens

If all pass, reply `continue`.
If anything fails, reply `fix`.

## Status

Not started