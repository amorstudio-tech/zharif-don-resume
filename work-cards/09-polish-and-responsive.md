# Work Card 09 — Polish and Responsive Check

## Goal

Final polish: ensure all sections work together, add skip-to-content link, verify responsive layout at 320px, keyboard navigation works end-to-end, and run the full verification checklist.

## Inputs

- `design.md` — accessibility basics, mobile rules, full verification checklist
- `build-blueprint.md` — review mirror, proof ladder
- All previous work cards

## Files likely touched

```
src/App.jsx
src/styles/global.css
src/styles/hero.css
src/styles/bio.css
src/styles/skills.css
src/styles/experience.css
src/styles/projects.css
src/styles/education.css
src/styles/contact.css
src/styles/back-to-top.css
src/styles/accordion-panel.css
```

## Instructions for the coding agent

1. **Skip-to-content link:**
   - In `src/App.jsx`, add a `<a>` tag at the very top of the rendered output:
     ```jsx
     <a href="#main-content" className="skip-link">Skip to content</a>
     ```
   - Add a `<div id="main-content">` wrapper around all sections (or put `id="main-content"` on `<main>`)
   - CSS in `global.css`:
     ```css
     .skip-link {
       position: absolute;
       top: -100%;
       left: 0;
       padding: 0.5rem 1rem;
       background: var(--accent);
       color: #fff;
       z-index: 1000;
       text-decoration: none;
     }
     .skip-link:focus {
       top: 0;
     }
     ```

2. **Ensure consistent section styling across all sections:**
   - All section headings use the same pattern (h2 + accent bar)
   - All section content is constrained to `var(--max-width)` centered
   - Section spacing is consistent

3. **Mobile 320px check:**
   - Open DevTools at 320px width
   - Check every section for:
     - No horizontal scroll
     - Text is readable (not too small, not overflowing)
     - Touch targets minimum 44px
     - Accordion panels are full width
     - BackToTop is 36px
     - Section spacing is 2.5rem on mobile
   - Fix any issues found

4. **Keyboard navigation check:**
   - Tab through the entire page
   - All accordion panels are reachable and toggleable with Enter/Space
   - BackToTop is reachable and activates with Enter
   - Contact links are reachable and activate with Enter
   - Focus ring is visible on all interactive elements
   - Skip link appears on first Tab press

5. **Remove any temporary test code** from earlier work cards if present

## What not to do

- Do not add animations beyond CSS transitions
- Do not add new features or content
- Do not install new packages
- Do not change design direction

## Done when

- Skip-to-content link works (press Tab on page load, link appears, Enter jumps past nav to main content)
- All sections render consistently
- Page is fully functional and readable at 320px width
- Keyboard navigation works through all interactive elements
- No console errors

## Verification steps

1. Press Tab on page load — skip link appears, press Enter — focus jumps to main content
2. Resize to 320px — no overflow, all text readable, touch targets ≥ 44px
3. Tab through entire page — every accordion, button, and link is reachable
4. Open/close each section's accordions via keyboard (Enter/Space)
5. BackToTop appears on scroll, keyboard-accessible
6. Contact links open in new tab / mail client
7. Design check: full design.md verification checklist passes

## Localhost test before continuing

- Tab immediately on page load — "Skip to content" link appears at top
- Press Enter — focus jumps to main content
- Tab through all accordion panels — each opens/closes with Enter or Space
- Resize to 320px width — entire page is readable, no cut-off, no sideways scroll
- BackToTop visible on scroll, works via mouse and keyboard
- All 6 sections render with consistent heading + accent bar style

If all pass, reply `continue`.
If anything fails, reply `fix`.

## Stop condition

If mobile layout has unresolvable overflow, reduce padding or font sizes until it fits 320px. If a CSS fix takes more than 5 minutes, ask the trainer.

## Status

Not started