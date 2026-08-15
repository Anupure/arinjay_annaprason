# Arinjay Annaprashon Interactive Menu – Project Progress Tracker

## 1. Project Overview

This project is a responsive, bilingual website for celebrating Arinjay’s Annaprashon ceremony, the sacred Bengali first-rice ritual. The site is designed to showcase the cultural significance of the ceremony, present the menu in an interactive and engaging way, and help hosts plan the event.

The project is being built in phases:
- Phase 1: Static visual system and foundational layout
- Phase 2: Interactive menu system, guest planner, favorites panel
- Phase 3: Advanced interactions, polish, accessibility, and final refinement

## 2. Goal and Scope

### Core goals
- Create a warm, festive visual identity using Bengali cultural colors and motifs
- Present the ceremony in English and Bengali
- Showcase a curated Annaprashon menu with descriptions and significance
- Add user interaction for searching, filtering, and selecting dishes
- Support party planning with guest and portion guidance
- Provide a favorites/wishlist workflow for menu items
- Ensure the site is responsive and accessible across devices

### High-level project statement
The website should feel celebratory, refined, and culturally respectful while being practical for users who want to browse the ceremony menu and plan the event.

## 3. Requirements and Implementation Alignment

This tracker is aligned to the Annaprashon interactive menu brief and the project direction established in discussion.

### Functional requirements addressed
- Responsive landing page with ceremony hero section
- Sticky navigation with bilingual switching
- Menu sections highlighting traditional items
- Traditional Bengali dish details and symbolism
- Category-based browsing and filtering
- Search functionality for dishes
- Guest planning tools for count and dietary preferences
- Favorites panel / wishlist behavior
- Footer and ritual / significance information

### Design requirements addressed
- Earth-tone palette: brown, cream, gold accents
- Elegant typography for ceremonial feel
- Card-based layout and clear hierarchy
- Motion and hover feedback for interactivity
- Mobile-first and adaptive layout

## 4. Work Completed

## Phase 1 – Completed

### Project setup
- Created the `agentic_web` project directory
- Set up the Next.js app structure
- Installed dependencies and configured the app
- Created base config files:
  - `package.json`
  - `tsconfig.json`
  - `next.config.js`
  - `.gitignore`
  - `README.md`

### Core app foundation
- Created the app shell in `pages/_app.tsx`
- Created the document shell in `pages/_document.tsx`
- Added global styling in `styles/globals.css`
- Set up English/Bengali font loading via Google Fonts

### UI components created
- `components/Header.tsx` and `Header.module.css`
  - Sticky header
  - Navigation links
  - English/Bengali toggle
  - Mobile hamburger menu

- `components/Hero.tsx` and `Hero.module.css`
  - Hero banner for Annaprashon introduction
  - CTA and decorative ornaments
  - Responsive hero layout

- `components/Menu.tsx` and `Menu.module.css`
  - Menu card grid
  - Category filters
  - Expandable details view for each dish

- `components/Rituals.tsx` and `Rituals.module.css`
  - Ceremony ritual progression section
  - Mobile-friendly card timeline layout

- `components/Significance.tsx` and `Significance.module.css`
  - Cultural significance section
  - Family roles and blessings display

- `components/Footer.tsx` and `Footer.module.css`
  - Footer with quick links and traditional message

### Data models and content
- Added ceremonial content in `data/menuItems.ts`
- Included traditional dishes and significance text
- Added multilingual support data in `lib/translations.ts`

### Homepage composition
- Wired all major sections into `pages/index.tsx`
- Integrated page metadata and dynamic language state

### Validation status for Phase 1
- Build passed successfully after fixes
- Type-checking passed

## Phase 2 – Guest Experience and Frontend Interaction

### Guest-focused menu experience
- Refined the website to focus on guest enjoyment rather than organizer logistics
- Kept the menu as the centerpiece, with recipe history, cultural storytelling, and warm visuals
- Added search, filter, and sort capabilities for a smoother food browsing experience
- Added image-like food cards with emoji illustrations to make dishes feel more visually engaging

### Reviews and interactions
- Added per-food review cards so users can leave star ratings and small comments
- Added a small front-end memory game for a playful, family-friendly guest interaction
- Added a favorites panel for users to save dishes they want to revisit during the event

### Updated scope decisions
- Removed organizer-oriented planning tools from the core product focus
- Shifted the app toward “guest experience” storytelling instead of logistical planning
- Kept the project frontend-only for now, with no backend or data persistence beyond local browser state

### Validation status for Phase 2
- Production build passed successfully
- Updated frontend scope reviewed and kept aligned with the guest experience brief

## Phase 2 – Completed (Guest Experience Finalization)

### Favorites system fully wired
- Lifted favorites state from `FavoritesPanel` up to `pages/index.tsx`
- Added a heart button on every menu card in `MenuInteractive` to add/remove favorites directly
- Favorites persist in `localStorage` under `annaprashon-favorites`
- Floating heart button shows a live badge count synced with the menu cards
- Favorites panel and menu card hearts now share the same state, so removing from either updates both

### Review system with persistence
- Reviews now persist to `localStorage` under `annaprashon-reviews`
- New reviews are merged over the seeded sample reviews on reload
- Average rating stars render dynamically (filled vs. empty stars match the computed average)
- Per-card meta chips added: serving time and prepared-by labels where available

### Code cleanup
- Removed dead selection/export CSS from `MenuInteractive.module.css` (leftover from the old organizer selection flow)
- Removed the unused checkbox and selection-summary responsive rules
- CSS bundle shrank from 9.93 kB → 9.61 kB

### Intro animation fix – plays exactly once
- Root cause: the GSAP timeline's `useLayoutEffect` depended on the `onComplete` callback.
  Because the parent passes an inline arrow (`() => setIntroComplete(true)`), every parent
  re-render created a new function identity, tearing down and rebuilding the timeline —
  causing the full 20-second intro to replay.
- Fix: stored the latest callback in a `ref` (`onCompleteRef`) and left the effect
  dependency array as `[]`. The timeline is now created exactly once and the intro
  runs a single time, then reveals the site.

### Validation
- `npm run build` passes cleanly (static export, no type errors)
- Linting passes
- All Phase 2 checklist items complete

## Phase 3 – Final polish and refinement

### Planned tasks
- Improve final visual polish across menu cards, story sections, and hero imagery
- Add more distinctive festival-themed sections, such as family moments or tradition cards
- Fine-tune the guest experience for mobile friendliness and readability
- Add final content polish to Bengali phrasing and general storytelling quality
- Review and refine the review interactions to feel natural and smooth
- Ensure the mini-game and favorite actions feel polished and lightweight

### Planned polish items
- Better visual depth and layering
- More compelling illustrative treatment for each food item
- Stronger visual hierarchy in story and menu sections
- Final accessibility check for controls, buttons, and keyboard navigation
- Final content QA across English and Bengali wording

## Language and content completion
- Review Bengali translations for consistency and natural phrasing
- Ensure all labels and content remain celebratory and guest-friendly
- Validate that menu descriptions read naturally and feel culturally respectful

## Accessibility review
- Add `aria-label` improvements where needed
- Review color contrast across all UI states
- Ensure keyboard operability for filters, buttons, and review interactions
- Confirm focus styles are visible for interactive controls

## Final QA pass
- Test all flows on mobile and desktop
- Check search, filter, review, favorites, and mini-game logic
- Review all content text for grammar and style consistency
- Ensure no broken navigation or hidden sections
- Verify the website feels like a guest-facing experience rather than an organizer tool

## 6. Current Status Summary

### Completed
- Project initialized and configured
- Base website structure established
- Core sections built
- Bilingual experience wired in
- Guest-centered menu experience implemented
- Review system added to dishes (now persists in localStorage)
- Favorites panel added (now wired to menu card hearts, shared state)
- Mini-game added for family/fun interaction
- GSAP intro sequence implemented (plays exactly once, gates site reveal)
- Production build validated successfully

### In progress / pending
- Phase 3: Final visual refinement and responsive tuning
- Final content QA and translation polish
- Final accessibility and usability review
- Optional enhancement blocks for more storytelling and imagery

## 7. File Inventory

### Main app files
- `pages/index.tsx`
- `pages/_app.tsx`
- `pages/_document.tsx`
- `styles/globals.css`

### Data and utilities
- `data/menuItems.ts`
- `lib/translations.ts`

### Components
- `components/Header.tsx`
- `components/Hero.tsx`
- `components/Menu.tsx`
- `components/MenuInteractive.tsx`
- `components/GuestPlanner.tsx`
- `components/FavoritesPanel.tsx`
- `components/Rituals.tsx`
- `components/Significance.tsx`
- `components/Footer.tsx`

## 8. Validation Log

### Build validation
- Command run: `npm run build`
- Result: Passed successfully
- Date: August 14, 2026

### Notes
- TypeScript strict checks were resolved during validation
- The app is successfully compiling as a static Next.js production build
- Guest-focused and frontend-only scope confirmed and implemented

## 9. Recommended Next Step

Proceed with a final guest-focused design cleanup pass, including final visual details, story polishing, and a final content QA sweep.

## 10. Short Checklist for Future Work

- [x] App scaffolding
- [x] Foundation UI
- [x] Meal menu cards
- [x] Ritual and significance sections
- [x] Bilingual setup
- [x] Guest menu browse and review interactions
- [x] Favorites panel
- [x] Mini-game / family interaction
- [x] Build validation
- [ ] Final visual refinement
- [ ] Final content refinement
- [ ] Final homepage QA

## 11. Final Note

This tracker should continue to be updated as work progresses. The current project scope is now aligned to a guest-facing experience: menu discovery, cultural storytelling, small interactive moments, and food reviews, without organizer logistics or planning tools.

## Recent Updates and Scope Refinements

### Draggable wandering animals
- Made the wandering animals (rat, tiger, elephant, baby photos) **draggable** with mouse or touch
- Click-and-hold (or touch-and-hold) then move to reposition them anywhere on the screen
- Uses Pointer Events (works for both mouse and touch), with `setPointerCapture` for smooth dragging
- While dragging: transition disabled for instant follow, `cursor: grabbing`, raised z-index, stronger shadow
- A quick click (no movement) still triggers the pop/glow effect; dragging does not
- Balloons and intro images are NOT draggable (as requested)
- Added `touch-action: none` so touch dragging doesn't scroll the page

### Intro: mandala + baby photos + balloons
- Replaced the simple twin rings with a **mandala pattern** (18 paths: rings, petals, decorative arcs) that draws itself and **slowly expands to cover the whole page**
- Removed the ARINJAY name line — the title **অরিঞ্জয়ের শুভ অন্নপ্রাশন** stays centered
- **Baby photos pop in at random spots** (4 circular framed photos with a pop-in animation)
- **Balloons drift in** at the top corners with a gentle float
- Sequence: glow → mandala draws → mandala expands → title fades up → divider grows → baby photos pop → balloons drift → sparkles twinkle → glow pulse → mandala expands further → everything dissolves into an ivory wash
- Kept the ref-based `onComplete` fix (plays exactly once) and reduced-motion support

### Intro animation made more gorgeous
- Enriched the intro with more ceremonial detail while keeping it ~10s
- Added **twin golden rings** that draw themselves, an **alpana-style lotus motif** that draws in the center, and **twinkling sparkles**
- Updated the title text to **অরিঞ্জয়ের শুভ অন্নপ্রাশন** (with ARINJAY below)
- Sequence: glow breathes in → outer ring draws → inner ring draws → lotus motif draws → title fades up → divider grows → ARINJAY reveals → sparkles twinkle → glow pulse → rings expand & everything dissolves into an ivory wash
- Kept the ref-based `onComplete` fix (plays exactly once) and reduced-motion support

### Intro animation redesigned (cleaner & shorter)
- Replaced the busy 20s paddy-field/falling-grain/alpana intro with a calm, elegant ~9s ceremony
- New sequence: warm glow breathes in → golden ring draws itself → অন্নপ্রাশন fades up → golden divider grows → ARINJAY reveals with letter-spacing → glow pulse → ring expands & everything dissolves into an ivory wash
- Removed the paddy stalks, ambient grains, falling rice grain, ripple, and alpana SVG (and their CSS)
- Kept the ref-based `onComplete` fix so the intro still plays exactly once
- Bundle reduced (CSS 7.6 kB → 7.18 kB)

### Real dish photos in the menu
- Added real dish images from `images/menu/` to every menu card
- Each of the 19 dishes now shows its photo at the top of the card (water, salad, cutlet, kasundi, fried rice, paneer/chicken, sak, sada bhat, daal, alu potol, ilish bhapa, mutton/katla, chutney, poromanno, komola bhog, sondesh, baked rosogolla, ice cream, hajmola)
- Images use `next/image` with `fill` + `object-fit: cover` in a 200px rounded wrapper
- Gentle zoom on hover; warm gradient placeholder while loading

### Temporary font selector
- Added a floating **font picker** (bottom-left "Aa" button) to preview different fonts
- 5 font choices: current (Poppins + Playfair Display), Tiro Bangla (traditional), Noto Serif Bengali (classic), Baloo Da 2 (fun, rounded), Hind Siliguri (modern)
- Selection applies instantly via CSS variables (`--font-body` / `--font-heading`) on `:root`
- Choice persists in `localStorage` (`annaprashon-font`) and survives refresh
- New fonts loaded from Google Fonts in `_document.tsx`
- The picker is a temporary tool to evaluate which font fits the ceremony best

### Removed Rituals & Significance sections
- Removed the "Ceremony Rituals" section (`Rituals.tsx/css`) and "About Annaprashon / Significance" section (`Significance.tsx/css`) from the homepage
- Deleted the unused component files
- Removed "Rituals" and "About" links from the navbar and footer quick links (footer now links Menu → My Family → Game)
- Updated the footer sign-off: "Made with love for our little **angel**" → "Made with love for our little **prince**"
- Bundle reduced (CSS 8.15 kB → 7.04 kB); homepage is now: Hero → Menu → Family Tree → Game → Footer

### Game tuned to 4×4 with confetti cannon
- Reverted the board to a **4×4 grid** (16 tiles = 8 festive pairs)
- Removed the baby wildcard concept — it's now a clean match-all-pairs game
- **Confetti cannon** on win: ~140 pieces **burst radially outward from the screen center**, each flying to a random angle/distance with spin, fading out
- Kept the Matched (X/8) counter, turns counter, win banner pop, and the navbar "Game" link

### Game upgraded to 5×5 with confetti (superseded)

### Family tree section (replaces menu filtering & reviews)
- Removed the guest food explorer (`MenuInteractive`) with its search/filter/sort and review system
- Removed the `FavoritesPanel` (heart favorites + clipboard list) which was coupled to the interactive menu
- Added a new **Family Tree** component showing the family generations welcoming baby Arinjay
- Tree structure (top → bottom): Great Grandparents → Grandparents → Parents & Uncles → **Baby**
- Paternal side (Datta family) renders on the left, maternal side (Chowdhury family) on the right
- Baby Arinjay Datta (অরিঞ্জয় দত্ত) sits at the bottom-center with a highlighted golden avatar and gentle pulse animation
- All 13 family members included with bilingual relation labels and names
- Photos are **placeholders** for now — each member shows a colored circular avatar with an emoji (👶👨👩👴👵) that can be swapped for real photos later
- Warm cream background with subtle dot pattern and Bengali color accents
- Deleted now-unused `MenuInteractive.tsx/css` and `FavoritesPanel.tsx/css` files; bundle size reduced (~10 kB)

### Wandering animal mascots
- Added a `WanderingAnimals` decorative layer with 4 animal mascots (rat, tiger, 2 baby elephants)
- Each animal drifts to random screen positions on random intervals (6–20s), with gentle bobbing/swaying idle animations
- Layer uses `position: fixed` with `pointer-events: none` so it never blocks interaction
- Placed inside the `site-shell` so animals appear only after the intro completes
- Hidden on very small screens (< 480px) to avoid visual clutter

### Interactive animal & balloon pop
- Made the wandering animals and balloons **clickable** (previously `pointer-events: none` blocked all clicks)
- On click, the image **pops** — scales up ~18% and glows with a warm golden drop-shadow for 0.7s, then returns to normal
- Balloons pop with a ~12% scale-up and a soft golden glow
- Added accessibility: elements have `role="button"`, `tabIndex={0}`, keyboard support (Enter/Space), and visible focus rings
- Added `aria-labels` for screen readers ("Rat", "Tiger", "Baby Elephant", "Arinjay photo", "Balloon")
- Containers keep `pointer-events: none` while the individual images opt in with `pointer-events: auto`, so decorative areas still don't block underlying page content

### Baby photos in the wandering layer
- Added Arinjay's baby photos (`finger_up.png`, `look.png`, `sophesticated.png`) to the wandering layer
- Baby photos are displayed as circular framed images with a golden border and a gentle floating animation
- Reduced the wander timer so images move more frequently (now every 3–8s instead of 6–20s)
- The layer now has 6 wandering elements: rat, tiger, elephant, and 3 baby photos

### Fixed top-corner balloons
- Added `balloon.png` (from the baby folder) as two decorative balloons at the top-left and top-right page corners
- Balloons now scroll with the page (positioned inside the page flow, wrapping div at the top of the site)
- Size increased 4× (400×480px) for a bolder festive look
- Opacity reduced to ~50% so they don't interfere with text readability
- Gentle floating animation and soft shadow for a festive feel
- `pointer-events: none` so they never block interaction

### Review stars centered
- Fixed the star buttons in the review picker so the star glyph is perfectly centered inside the round yellow button
- Added `display: inline-flex`, `align-items: center`, `justify-content: center`, `line-height: 1`, and `padding: 0` to `.starBtn`

### Menu item names and digestive section
- Updated "Mutton / Fish" → **Mutton-Khasi / Fish-Katla Kalia** (মাটন-খাসি / মাছ-কাতলা কালিয়া)
- Updated "Poromanno" → **Paramanna** (পরমান্ন)
- Moved **Hajmola** into its own **Digestive** category (হজম সহায়ক)
- Added the `digestive` category to the data model, both menu components' filter lists, and the translations file

### Real menu items in serving order
- Replaced the placeholder menu with the actual Annaprashon serving list (19 items)
- Every item now has a `servingOrder` field (1–19) matching the order the dishes are served
- The interactive guest menu now defaults to **Serving Order** sorting, so guests always see the dishes in the sequence they will be served
- Added a "Serving Order" option to the sort dropdown; alphabetical/category/meaning sorting remain available as alternatives
- Updated category filters to match the real spread (Starters, Rice Dishes, Vegetables, Non-Veg, Desserts, Beverages)
- Refreshed ritual steps and family contribution content to reference the actual dishes (sada bhat & daal, poromanno, etc.)

### Family contribution section removed
- Removed the "Family Contributions" section from the Significance page per updated scope
- Deleted the `familyContribution` data export from `data/menuItems.ts`
- Removed the family section JSX from `components/Significance.tsx` and its styles from `Significance.module.css`
- The Significance section now displays only the cultural meaning and traditions in a single centered column

### Guest-first product direction
- Shifted the project to a guest-facing experience focused on food discovery, tradition, stories, and celebration moments
- Removed organizer-oriented planning logic from the core user journey
- Kept the user experience centered around browsing food, reading tradition, leaving reviews, and engaging with light playful interactions

### Animation milestone
- Implemented a premium GSAP-led intro sequence for the opening experience
- Included paddy movement, falling rice grain motion, ripple effect, alpana line drawing, title reveal, and menu transition scenes
- Organized these motions using a master timeline and separate scene functions to keep the timing easy to tune

### Layout refinement
- Corrected food-card spacing and three-column composition so the menu reads more cleanly on desktop
- Improved card rhythm, vertical spacing, and review block layout to better match the reference design
- Kept the design light, calm, and premium without overcrowding the interface

### Frontend-only validation
- Confirmed the current direction remains frontend-only and does not depend on organizer workflows or backend planning features
- Build validation continues to pass after the intro and layout refinements

### Intro completion gating
- The full app shell is now held behind the intro sequence until the GSAP animation completes
- The site begins with a hidden, non-interactive shell and fades in only after the ceremonial opening sequence finishes
- This ensures the interactive guest experience becomes available only once the opening motion is complete
- The sequence remains lightweight and premium, while keeping the rest of the page responsive and ready to engage afterward
