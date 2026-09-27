# Architecture

## Build Shape

Content-led site

## Stack Decision

Default stack per KDBM Lite:
- **Vite** — fast dev server and build
- **React** — component-based UI
- **Plain CSS** — no Tailwind in this session
- No backend, database, auth, or `localStorage`

## Structure Overview

Single scrolling HTML page. Each major section is a React component. Interactive panels use React state (`useState`) for accordion expand/collapse.

## Component Map

- `App` — root layout, renders all sections
- `Hero` — name and title
- `Bio` — short about-me paragraph
- `Skills` — list of skill items, each expandable on click
- `Experience` — job entries, each expandable on click
- `Projects` — project entries, each expandable on click
- `Education` — degree entries, each expandable on click
- `Contact` — email link and social links (LinkedIn primary)
- `BackToTop` — floating button, scrolls to top
- `AccordionPanel` — reusable expand/collapse wrapper used by Skills, Experience, Projects, Education

## Data / State Model

- Section content stored as static JS arrays/objects in a `content.js` file
- Accordion state managed per-section with `useState` tracking which panel index is open (or null)
- No global state or context needed

## Storage Logic

None. No `localStorage`, no backend. Content is hardcoded sample data.

## User Flow

1. Visitor opens page → Hero with name/title
2. Scrolls down through Bio, Skills, Experience, Projects, Education
3. Clicks any panel → it expands; clicking another collapses the first and opens the new one (or toggles the same one closed)
4. Reaches Contact section → clicks LinkedIn link
5. `BackToTop` button visible after scrolling past Hero

## File Expectations

```
index.html          — Vite entry HTML
src/
  main.jsx          — React DOM root
  App.jsx           — root component
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
  content.js        — sample data arrays
  styles/
    global.css      — reset, base styles, variables
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

## Constraints

- One page only — no React Router
- All sample content — clearly labelled as sample if ambiguous
- Accordion = single open at a time per section (or toggle closed)
- Responsive — works on mobile down to 320px width
- No external CSS frameworks or icon libraries

## Technical Non-Goals

- No backend, database, login, payments, live API
- No multi-page routing
- No animations library — CSS transitions only
- No `localStorage`, cookies, or service workers

## Verification Notes

- `npm run dev` starts without errors
- Page loads, all sections visible
- Accordion panels expand/collapse on click
- Layout passes mobile viewport check (320px+)
- BackToTop button appears and works