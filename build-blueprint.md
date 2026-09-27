# Build Blueprint

## Source Files

- `project-brief.md`
- `architecture.md`
- `design.md`
- `build-status.md`

## Project Identity

Zharif Don — Professional Resume Site

## Build Shape

Content-led site

## Version-One Promise

A single-page professional resume for Zharif Don with expandable accordion panels for Skills, Experience, Projects, and Education sections. Visitors scroll through Hero, Bio, Skills, Experience, Projects, Education, and Contact — clicking any panel expands its details (single-open accordion per section). A BackToTop button appears on scroll. The page is responsive down to 320px. All content is sample/filler, ready to replace later.

## Scope Lock

### Now

- Single scrolling page, all 6 sections (Hero, Bio, Skills, Experience, Projects, Education, Contact)
- Accordion expand/collapse (one open at a time per section, toggle to close)
- Sample/filler content in each section
- BackToTop button (appears on scroll)
- Responsive layout with mobile check at 320px
- LinkedIn link as primary action

### Later

- Replace filler content with real data
- Custom domain
- Contact form or email link

### Never

- Backend, database, login, multi-page routing, live API, auth, payments

## Architecture Summary

- **Stack:** Vite + React + plain CSS (no Tailwind)
- **Structure:** Single-page app with one component per section
- **Accordion:** `useState` per section tracking which panel index is open (or `null`)
- **Data:** Static JS arrays/objects in `content.js`
- **No storage:** No `localStorage`, no backend
- **Navigation:** BackToTop only (no sticky nav bar)

## Data / State / Storage Rules

- All content is static and hardcoded in `src/content.js`
- Each section with accordion has its own `useState` — `openIndex` (number or null)
- Clicking a panel: if same index → set to `null` (close); if different → set to new index
- No global state, no context, no storage

## Design Direction Summary

**Inspiration:** Apple-like premium minimal (fallback).
**Borrow:** abundant whitespace, clean system sans-serif, centered hero, subtle shadows/rounded corners, premium/professional feel, neutral background with blue accent (`#0071e3`).
**Do not copy:** Apple branding, logos, product images, device mockups, hero sliders, "Designed by Apple" language.

## Implementation Rules

1. Use Vite default React template conventions
2. One component per file in `src/components/`
3. Plain CSS only — one file per component in `src/styles/`
4. All sample content in `src/content.js`
5. Accordion: CSS `max-height` transition with a class toggle — no JS animation libraries
6. Every interactive element must be keyboard accessible (focus visible, Enter/Space toggle)
7. Accordion panels: `aria-expanded`, `aria-controls`, `id` matching
8. Touch targets: minimum 44px
9. Skip-to-content link (visually hidden until focused)
10. Test at 320px width after each work card
11. BackToTop: appears after scrolling past hero, smooth scroll to top

## File and Folder Expectations

```
index.html
src/
  main.jsx
  App.jsx
  components/
    Hero.jsx
    Bio.jsx
    Skills.jsx
    Experience.jsx
    Projects.jsx
    Education.jsx
    Contact.jsx
    BackToTop.jsx
    AccordionPanel.jsx
  content.js
  styles/
    global.css
    hero.css
    bio.css
    skills.css
    education.css
    experience.css
    projects.css
    contact.css
    back-to-top.css
    accordion-panel.css
vite.config.js
package.json
```

## Work Card Plan

### Work Card 01 — Project scaffold

- `npm create vite@latest` with React template
- Remove default Vite boilerplate (counter, logos, etc.)
- Create `src/styles/global.css` with reset and CSS variables
- Create empty component files with placeholder exports
- Create `src/content.js` with sample data arrays
- Verify `npm run dev` starts cleanly

### Work Card 02 — Hero and Bio

- Implement `Hero.jsx` — name, title, tagline
- Implement `Bio.jsx` — short bio paragraph
- Create corresponding CSS files per design.md
- Verify renders correctly

### Work Card 03 — AccordionPanel component

- Build reusable `AccordionPanel.jsx` with:
  - Click to toggle open/closed
  - `aria-expanded`, `aria-controls`
  - CSS `max-height` transition for smooth open/close
  - Left accent-blue border when open
- Create `accordion-panel.css`
- Test standalone behavior

### Work Card 04 — Skills section

- Implement `Skills.jsx` using `AccordionPanel` for each skill
- Single-open accordion state
- `skills.css`
- Verify expand/collapse works

### Work Card 05 — Experience section

- Implement `Experience.jsx` with accordion for each job
- `experience.css`
- Verify

### Work Card 06 — Projects section

- Implement `Projects.jsx` with accordion for each project
- `projects.css`
- Verify

### Work Card 07 — Education section

- Implement `Education.jsx` with accordion for each degree
- `education.css`
- Verify

### Work Card 08 — Contact and BackToTop

- Implement `Contact.jsx` — LinkedIn link, email, social links with outlined button style
- Implement `BackToTop.jsx` — visibility on scroll, smooth scroll to top
- `contact.css`, `back-to-top.css`
- Verify both work

### Work Card 09 — Polish and responsive check

- Wire all sections into `App.jsx`
- Add skip-to-content link
- Test and fix at 320px
- Verify keyboard navigation through all accordions
- Verify BackToTop appears and works
- Final mobile + desktop proof

## Review Mirror

After each work card, before marking it complete:
1. Does it match the design rules in `design.md`?
2. Are there any hardcoded test values that should be removed?
3. Does it pass mobile 320px?
4. Are interactive elements keyboard-accessible?
5. Does `npm run dev` still work?

## Proof Ladder

1. `npm run dev` starts without errors
2. All 6 sections render on the page
3. Accordion panels expand/collapse per section (single-open)
4. Page is readable and functional at 320px width
5. BackToTop appears, scrolls to top
6. Contact LinkedIn link is clickable and goes to LinkedIn
7. All interactive elements are keyboard-accessible
8. `design.md` checks pass (colors, spacing, typography, contrast)

## 60-Second Explanation Template

"This is a single-page React resume site for Zharif Don. It has sections for Bio, Skills, Experience, Projects, Education, and Contact. Each section with expandable content uses accordion panels — click to open, click again to close, only one open at a time. A BackToTop button appears when you scroll down. It uses Vite + React + plain CSS with a clean minimal Apple-inspired look and a blue accent. Everything is sample content ready to be replaced."

## Guardrails for the Coding Agent

- Read `build-status.md`, `build-blueprint.md`, and the current work card before editing
- Implement only the current work card
- Do not jump ahead
- Stop after verification
- Update `build-status.md` after each work card
- Do not add backend/auth/database/API — the blueprint does not allow it
- Do not add secrets or keys to code
- Do not invent claims, testimonials, logos, or real numbers
- Apply content-led site guardrails: single page, factual content, one primary action, responsive, no invented metrics
- If a legacy file uses `Build Mode`, treat it as `Build Shape` without stopping