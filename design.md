# Design Direction

## Design Inspiration URL

Apple-like premium minimal (fallback choice — no designmd.ai URL)

## What We Borrow

- Abundant whitespace and breathing room between sections
- Clean sans-serif typography with generous letter-spacing on headings
- Centered hero with name as the primary focal point
- Subtle shadows and rounded corners on cards/panels
- Focused, premium, professional overall vibe

## What We Do Not Copy

- No Apple branding, logos, product images, or claims
- No Apple-specific layout patterns (no device mockups, no hero sliders)
- No exact copy of any Apple page structure
- No "Designed by Apple" language or iconography

## Visual Mood

Premium, minimal, professional, focused. Neutral background with a restrained blue accent used only for interactive elements (panel borders, hover states, links).

## Layout Rules

- Max content width: 720px centered
- Sections separated by generous vertical spacing (4rem–6rem)
- Hero: centered, name in large light weight, subtitle below
- Each section has a left-aligned heading with a thin accent line beneath
- Cards/Panels: full-width within the content column, subtle border, light shadow
- BackToTop: fixed bottom-right, circular, no text — just a subtle arrow icon

## Color / Contrast Rules

- Background: `#fafafa` (off-white)
- Card/surface: `#ffffff`
- Text primary: `#1d1d1f` (near-black)
- Text secondary: `#6e6e73` (muted gray)
- Accent: blue `#0071e3` (Apple-style blue) — used for panel borders, hover states, link color, BackToTop
- Panel border: `#d2d2d7` (light gray)
- All text/background pairs pass WCAG AA contrast

## Typography Feel

- System font stack: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- Hero name: 2.5rem, font-weight 300 (light)
- Section headings: 1.5rem, font-weight 600 (semibold), letter-spacing: -0.01em
- Body: 1rem, font-weight 400, line-height 1.6
- Panel titles: 1.05rem, font-weight 500

## Component Style

- **AccordionPanel:** White card with 1px `#d2d2d7` border, 8px border-radius, 2px accent-blue left border when open, smooth max-height CSS transition, padding 1rem inside
- **BackToTop:** 40px circle, `#0071e3` background, white arrow, fixed bottom-right 1.5rem, appears after scrolling past hero
- **Contact:** Social link buttons — outlined style with accent-blue border, rounded, icon + label
- **Section headings:** Left-aligned, underline accent bar (2px `#0071e3`, 40px wide, margin-bottom 0.5rem)

## Mobile Rules

- Max-width on mobile: full-width with 1rem padding on each side
- Hero name: scales down to 2rem on screens under 480px
- Section spacing: reduced to 2.5rem
- Accordion panels: full width, no side margins
- BackToTop: 36px circle, bottom-right 1rem
- Touch targets: minimum 44px for any clickable area
- Test at 320px width

## Accessibility Basics

- Semantic HTML (`<header>`, `<section>`, `<h1>`–`<h2>`)
- All interactive elements keyboard-accessible (focus visible, Enter/Space to toggle)
- Accordion panels use `aria-expanded` and `aria-controls`
- Skip-to-content link (visually hidden, visible on focus)
- Color not the only indicator of state (panel open also uses border highlight + content visibility)

## Anti-Slop Rules

- No fake logos
- No fake testimonials
- No fake stats — sample data is clearly placeholder
- No "lorem ipsum" in final proof — sample content reads like real resume text even if fictional
- One clear primary action: LinkedIn link in Contact
- Readable on phone width (320px tested)
- No generic stock photos or avatars

## Design Verification Checklist

- [ ] Hero renders centered with name and subtitle
- [ ] Section rhythm is consistent — headings, accent bar, content
- [ ] Accordion panels have border, shadow, open state with blue left border
- [ ] BackToTop appears after scroll and is functional
- [ ] Contact links are styled and clickable
- [ ] Mobile 320px: no overflow, text is readable, touch targets ≥44px
- [ ] Color contrast passes WCAG AA
- [ ] Keyboard navigation works through all accordion panels