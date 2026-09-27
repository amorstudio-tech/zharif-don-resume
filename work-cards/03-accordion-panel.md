# Work Card 03 — AccordionPanel Component

## Goal

Build the reusable `AccordionPanel` component with expand/collapse behavior, smooth CSS transition, keyboard accessibility, and ARIA attributes.

## Inputs

- `design.md` — component style, mobile rules, accessibility basics
- `architecture.md` — component map, accordion behavior rules
- `build-blueprint.md` — implementation rules for accordion

## Files likely touched

```
src/components/AccordionPanel.jsx
src/styles/accordion-panel.css
```

## Instructions for the coding agent

1. **AccordionPanel.jsx** — Accepts these props:
   - `title` (string) — panel header text
   - `children` (node) — content to show when expanded
   - `isOpen` (boolean) — controlled open state from parent
   - `onToggle` (function) — called on click/Enter/Space
   - `id` (string) — unique ID for `aria-controls` linkage

2. Structure:
   - Outer `<div>` with class `accordion-panel`
   - `<button>` element as the header (not a div) — contains the title text
     - `onClick` calls `onToggle`
     - `onKeyDown` — Enter and Space trigger `onToggle`
     - `aria-expanded={isOpen}`
     - `aria-controls={contentId}`
   - `<div>` with `id={contentId}` and `role="region"` — the collapsible content area
     - When `isOpen` is false: `max-height: 0`, `overflow: hidden`, `opacity: 0`
     - When `isOpen` is true: `max-height` set to a large value (e.g., 500px), `opacity: 1`
     - CSS transition: `max-height 0.3s ease, opacity 0.2s ease`

3. **accordion-panel.css:**
   - `.accordion-panel`: white background (`var(--surface)`), 1px `var(--border)` border, 8px border-radius, margin-bottom 0.5rem, overflow hidden
   - `.accordion-panel.open`: 2px accent-blue left border (`border-left: 2px solid var(--accent)`)
   - `.accordion-panel button`: full width, text-align left, padding 1rem, font-weight 500, background none, border none, cursor pointer, font-size 1.05rem, color `var(--text-primary)`, display flex, justify-content space-between
   - `.accordion-panel button:focus-visible`: outline 2px `var(--accent)`, outline-offset 2px
   - `.accordion-panel .panel-content`: padding 0 1rem 1rem, color `var(--text-secondary)`, font-size 0.95rem, line-height 1.6

4. Do not add a "+"/"–" icon yet unless it's a simple CSS `::after` on the button

## What not to do

- Do not wire AccordionPanel into any section yet — keep it standalone for testing
- Do not add section-specific content or styling
- Do not use JavaScript animation libraries

## Done when

- AccordionPanel renders a button header and collapsible content area
- Click toggles open/closed
- Enter and Space keys toggle it
- `aria-expanded` reflects state
- Smooth max-height CSS transition works
- Open state shows blue left border

## Verification steps

1. Render AccordionPanel with sample title+content in App.jsx temporarily
2. Click to open — content slides down smoothly, blue left border appears
3. Click again — content slides up, border returns to default
4. Tab to button, press Enter — toggles
5. Tab to button, press Space — toggles
6. `aria-expanded` is `true` when open, `false` when closed
7. Design check: panel matches design.md component style (border, radius, shadow, open accent border, mobile touch target 44px)

## Localhost test before continuing

- Temporary test in App.jsx: render `<AccordionPanel title="Test Skill" isOpen={false} onToggle={() => {}} id="test-1"><p>Test content</p></AccordionPanel>`
- Click the panel — it opens, content reveals smoothly
- Click again — it closes, content hides
- Tab to panel button, press Enter — opens
- Tab again, press Space — closes

If all pass, remove the temporary test code and reply `continue`.
If anything fails, reply `fix`.

## Stop condition

If the CSS transition is janky, use `transform` + `scaleY` instead of `max-height`. If still broken, ask the trainer.

## Status

Not started