# Work Card 04 — Skills Section

## Goal

Implement the Skills section using `AccordionPanel` with single-open accordion state per section.

## Inputs

- `design.md` — section heading style, card style
- `architecture.md` — Skills component, accordion state model
- `build-blueprint.md` — data/state rules
- `content.js` — skills data array
- `AccordionPanel` component from Work Card 03

## Files likely touched

```
src/components/Skills.jsx
src/styles/skills.css
src/App.jsx (ensure import)
```

## Instructions for the coding agent

1. **Skills.jsx:**
   - `<section id="skills">`
   - `<h2>` "Skills" with accent underline bar (same style as Bio)
   - Import `skills` from `../content.js`
   - Use `useState` with `openIndex` (number or null) — initial `null`
   - `.map()` over `skills` array, rendering one `<AccordionPanel>` per item
   - Pass `isOpen={openIndex === index}`, `onToggle={() => setOpenIndex(openIndex === index ? null : index)}`
   - Each panel title = skill `title`, children = skill `details`
   - Unique `id` per panel: `"skill-" + index`

2. **skills.css:**
   - Section spacing: margin-top 4rem (2.5rem on mobile)
   - Heading style consistent with bio.css pattern
   - Panel list constrained to max-width

## What not to do

- Do not modify AccordionPanel component
- Do not add other sections
- Do not add multiple-open behavior — single open only

## Done when

- Skills section renders a list of accordion panels
- Clicking a panel opens it, clicking another closes the first and opens the new one
- Clicking the same panel toggles it closed
- `openIndex` state resets to `null` when all closed

## Verification steps

1. Skills section renders with heading "Skills" and blue accent bar
2. Each skill shows as an accordion panel with title only (collapsed)
3. Click first skill — it opens, details visible
4. Click second skill — first closes, second opens
5. Click second skill again — it closes, none open
6. Design check: panels match design.md style, section heading consistent with bio

## Localhost test before continuing

- Open localhost — Skills section appears after Bio
- All 4 skills are listed as collapsed panels
- Click "JavaScript" — panel opens with detail text
- Click "React" — "JavaScript" closes, "React" opens
- Click "React" again — it closes, no panels open

If all pass, reply `continue`.
If anything fails, reply `fix`.

## Stop condition

If AccordionPanel is not working correctly, re-check Work Card 03 before debugging.

## Status

Not started