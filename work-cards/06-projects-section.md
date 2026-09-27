# Work Card 06 — Projects Section

## Goal

Implement the Projects section with accordion panels, same single-open pattern.

## Inputs

- `design.md` — card style
- `content.js` — projects data
- `AccordionPanel` component
- Pattern from Work Cards 04 and 05

## Files likely touched

```
src/components/Projects.jsx
src/styles/projects.css
src/App.jsx (ensure import)
```

## Instructions for the coding agent

1. **Projects.jsx:**
   - `<section id="projects">`
   - `<h2>` "Projects" with accent underline bar
   - Import `projects` from `../content.js`
   - `useState` with `openIndex` (number or null)
   - `.map()` over projects array — one `AccordionPanel` per project
   - Panel title: project `title`, children: show `stack` (muted line) then `details`
   - Unique `id` per panel: `"proj-" + index`

2. **projects.css:**
   - Section spacing consistent with previous sections
   - Inside panel content: `.stack` class with `var(--text-secondary)`, font-size 0.85rem, margin-bottom 0.5rem

## What not to do

- Do not add real project links, screenshots, or logos
- Do not change the single-open pattern

## Done when

- Projects section renders project entries as accordion panels
- Stack label shows inside panel content
- Single-open behavior works

## Verification steps

1. "Projects" heading with accent bar renders
2. Two project entries collapsed
3. Click to open — stack + details shown
4. Single-open behavior works
5. Design check: consistent section rhythm

## Localhost test before continuing

- Open localhost — Projects section renders after Experience
- Both projects show collapsed
- Click first project — opens with stack
- Click second — first closes, second opens

If all pass, reply `continue`.
If anything fails, reply `fix`.

## Status

Not started