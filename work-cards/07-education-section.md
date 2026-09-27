# Work Card 07 — Education Section

## Goal

Implement the Education section with accordion panels, same single-open pattern.

## Inputs

- `design.md` — section style, consistent rhythm
- `content.js` — education data
- `AccordionPanel` component
- Pattern established in Work Cards 04–06

## Files likely touched

```
src/components/Education.jsx
src/styles/education.css
src/App.jsx (ensure import)
```

## Instructions for the coding agent

1. **Education.jsx:**
   - `<section id="education">`
   - `<h2>` "Education" with accent underline bar
   - Import `education` from `../content.js`
   - `useState` with `openIndex` (number or null)
   - `.map()` over education array — one `AccordionPanel` per degree
   - Panel title: degree `title`, children: show `institution` + `year` (muted line) then `details`
   - Unique `id` per panel: `"edu-" + index`

2. **education.css:**
   - Section spacing consistent with other sections
   - Inside panel content: `.meta` class with `var(--text-secondary)`, font-size 0.85rem, margin-bottom 0.5rem

## What not to do

- Do not add other sections
- Do not change the single-open pattern

## Done when

- Education section renders degree entries as accordion panels
- Institution and year display inside panel content
- Single-open behavior works

## Verification steps

1. "Education" heading with accent bar renders
2. Degree entry collapsed
3. Click to open — institution/year + details shown
4. Single-open behavior works
5. Design check: consistent with design.md

## Localhost test before continuing

- Open localhost — Education section renders after Projects
- Degree panel is collapsed
- Click to open — institution, year, and details appear
- Click again — closes

If all pass, reply `continue`.
If anything fails, reply `fix`.

## Status

Not started