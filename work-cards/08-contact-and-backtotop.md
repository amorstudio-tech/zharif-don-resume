# Work Card 08 — Contact and BackToTop

## Goal

Implement the Contact section with LinkedIn link (primary action) plus email and social links, and the BackToTop button with scroll-based visibility.

## Inputs

- `design.md` — contact button style, BackToTop style, primary action rules
- `build-blueprint.md` — implementation rules for BackToTop

## Files likely touched

```
src/components/Contact.jsx
src/components/BackToTop.jsx
src/styles/contact.css
src/styles/back-to-top.css
src/App.jsx (ensure imports)
```

## Instructions for the coding agent

1. **Contact.jsx:**
   - `<section id="contact">`
   - `<h2>` "Contact" with accent underline bar
   - `<p>` intro text: "Let's connect!"
   - Social link buttons using outlined-style `<a>` tags:
     - LinkedIn: `href="https://linkedin.com/in/"` (placeholder), `target="_blank"`, `rel="noopener"`
     - GitHub: optional secondary link
     - Email: `href="mailto:zharifamor.studio@gmail.com"` (use the git email as sample)
   - Each link styled as an outlined button — `var(--accent)` border, rounded, padding 0.5rem 1.25rem, `var(--accent)` text, hover fills with accent background and white text

2. **contact.css:**
   - `.contact-links` flex container, gap 1rem, wrap on mobile
   - `.contact-link` anchor — `display: inline-block`, `border: 1px solid var(--accent)`, `border-radius: 8px`, `color: var(--accent)`, `padding`, `text-decoration: none`, `transition: background 0.2s, color 0.2s`
   - `.contact-link:hover, .contact-link:focus-visible` — `background: var(--accent)`, `color: #fff`

3. **BackToTop.jsx:**
   - Renders a `<button>` fixed to bottom-right of viewport
   - Use `useEffect` + `useState` with `scroll` event listener:
     - `show` state (boolean) — `true` when `window.scrollY > window.innerHeight * 0.5`
   - When `show` is true, button is visible (opacity 1); when false, hidden (opacity 0, pointer-events none)
   - `onClick` calls `window.scrollTo({ top: 0, behavior: 'smooth' })`
   - Button content: a simple upward arrow character `↑` or `^`
   - Clean up scroll listener on unmount

4. **back-to-top.css:**
   - `.back-to-top`: 40px × 40px circle, `var(--accent)` background, white text, border none, cursor pointer, fixed bottom-right 1.5rem, border-radius 50%, display flex, align-items center, justify-content center, font-size 1.25rem, transition opacity 0.3s, z-index 100
   - `.back-to-top.hidden`: `opacity: 0`, `pointer-events: none`
   - `.back-to-top:focus-visible`: outline 2px `var(--accent)`, outline-offset 2px
   - On mobile (below 480px): 36px, bottom-right 1rem

## What not to do

- Do not add a contact form (out of scope)
- Do not add real LinkedIn URL unless learner provides it
- Do not use external icon libraries
- Do not add scroll animations beyond CSS transitions

## Done when

- Contact section shows LinkedIn, GitHub, and email link buttons
- Links open in new tab (for external) or default mail client (for email)
- BackToTop button appears after scrolling past hero, scrolls to top on click
- Button is hidden at top of page

## Verification steps

1. Contact section renders with outlined link buttons
2. LinkedIn link opens linkedin.com in new tab (placeholder URL)
3. Email link opens default mail client
4. Scroll down — BackToTop appears
5. Click BackToTop — page scrolls smoothly to top, button hides
6. Button is keyboard accessible (tab to it, Enter to activate)
7. Design check: contact buttons match design.md outlined style; BackToTop matches design.md specs (40px circle, blue, bottom-right)

## Localhost test before continuing

- Scroll past hero — BackToTop button appears in bottom-right corner
- Click BackToTop — scrolls to top, button disappears
- Contact section shows LinkedIn, GitHub, and Email as outlined buttons
- Hover over a contact link — background fills blue, text turns white
- Tab to BackToTop — focus ring visible, Enter triggers scroll

If all pass, reply `continue`.
If anything fails, reply `fix`.

## Stop condition

If scroll listener causes performance issues, use `{ passive: true }` option on `addEventListener`.

## Status

Not started