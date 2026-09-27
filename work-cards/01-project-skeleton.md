# Work Card 01 — Project Scaffold

## Goal

Scaffold the Vite + React project, remove boilerplate, set up CSS foundation, create empty component files with placeholder exports, and write sample data in `content.js`.

## Inputs

- `build-blueprint.md` — file structure, implementation rules
- `architecture.md` — component map
- `design.md` — CSS variables, color rules, typography

## Files likely touched

```
index.html
src/main.jsx
src/App.jsx
src/components/Hero.jsx
src/components/Bio.jsx
src/components/Skills.jsx
src/components/Experience.jsx
src/components/Projects.jsx
src/components/Education.jsx
src/components/Contact.jsx
src/components/BackToTop.jsx
src/components/AccordionPanel.jsx
src/content.js
src/styles/global.css
vite.config.js
package.json
```

## Instructions for the coding agent

1. Run `npm create vite@latest . -- --template react` to scaffold in the current directory
2. If asked to overwrite files, check each — preserve `START_HERE.md`, `build-status.md`, `project-brief.md`, `architecture.md`, `design.md`, `build-blueprint.md`, and all files under `work-cards/` and `prompts/`
3. After scaffold completes, delete Vite boilerplate:
   - Remove `src/App.css`
   - Remove `src/index.css`
   - Remove `src/assets/` folder if present
   - Clear `src/App.jsx` down to a minimal component that renders a placeholder `<main>Loading...</main>`
   - Remove all default Vite logo/images references
   - Update `index.html` title to "Zharif Don — Resume"
   - Update `index.html` meta description
   - Remove Vite favicon link (or keep if neutral)
4. Create `src/styles/global.css` with:
   - CSS reset (box-sizing, margin/padding zero on body)
   - CSS custom properties from `design.md`:
     ```css
     :root {
       --bg: #fafafa;
       --surface: #ffffff;
       --text-primary: #1d1d1f;
       --text-secondary: #6e6e73;
       --accent: #0071e3;
       --border: #d2d2d7;
       --max-width: 720px;
       --font-stack: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
     }
     ```
   - Body: `background: var(--bg)`, `color: var(--text-primary)`, `font-family`, line-height 1.6
   - Import `global.css` in `main.jsx`
5. Create placeholder components in `src/components/` — each is a function component that returns a `<section>` with the component name as an `<h2>`:
   - `Hero.jsx` — `<header>` role
   - `Bio.jsx`
   - `Skills.jsx`
   - `Experience.jsx`
   - `Projects.jsx`
   - `Education.jsx`
   - `Contact.jsx`
   - `BackToTop.jsx` — renders a button inside a div
   - `AccordionPanel.jsx` — accepts `title` and `children` props, renders a simple wrapper div
6. Create `src/content.js` with sample data arrays — use real-sounding placeholder names, not lorem ipsum:
   ```js
   export const skills = [
     { title: "JavaScript", details: "Experience with ES6+, async/await, DOM manipulation, and modern frameworks." },
     { title: "React", details: "Component architecture, hooks, state management, and prop patterns." },
     { title: "CSS", details: "Responsive layouts, Flexbox, Grid, custom properties, and animations." },
     { title: "Node.js", details: "Server-side JavaScript, Express, REST APIs, and file handling." },
   ];
   export const experience = [
     { title: "Software Engineer — TechCo", period: "Jan 2023 – Present", details: "Built and maintained front-end features for a SaaS platform serving 10k+ users." },
     { title: "Junior Developer — StartUp Inc.", period: "Jun 2021 – Dec 2022", details: "Developed internal tools and contributed to the main web application using React and Node.js." },
   ];
   export const projects = [
     { title: "Project Atlas", stack: "React, Node.js, MongoDB", details: "A real-time collaboration tool for remote teams with live editing and notifications." },
     { title: "WeatherWise", stack: "Vanilla JS, OpenWeather API", details: "A minimalist weather dashboard with 5-day forecast and location search." },
   ];
   export const education = [
     { title: "B.S. Computer Science", institution: "State University", year: "2017 – 2021", details: "Focus on software engineering, algorithms, and human-computer interaction." },
   ];
   ```
7. In `src/App.jsx`, import and render each component (Hero, Bio, Skills, Experience, Projects, Education, Contact, BackToTop) inside a `<main>` element
8. Verify `npm run dev` starts without errors

## What not to do

- Do not implement accordion behavior yet
- Do not add CSS beyond the global reset and variables
- Do not install extra packages beyond the Vite React template
- Do not create per-component CSS files yet
- Do not initialize Git
- Do not deploy

## Done when

- `npm run dev` starts on localhost with no errors
- The browser shows all placeholder sections rendered
- `content.js` exports sample data arrays

## Verification steps

1. `npm run dev` starts without errors
2. Open localhost — all 9 placeholder sections are visible
3. `src/content.js` exports 4 arrays (skills, experience, projects, education)
4. Design check: global.css variables match design.md. No Vite boilerplate remains.

## Localhost test before continuing

After this card, test:
- Run `npm run dev` — terminal prints a localhost URL with no errors
- Open that URL — page loads showing placeholder heading text for each section
- Browser DevTools shows no console errors

If all pass, reply `continue`.
If anything fails, reply `fix` and paste the error.

## Stop condition

If `npm create vite` fails or conflicts with existing files in a way that can't be resolved in 5 minutes, ask the trainer.

## Status

Not started