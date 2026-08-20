# ServiceCare Jobline (Frontend)

Canada's trusted platform for hospitality, healthcare, and service-industry careers — React frontend.

## Tech Stack
- React (Vite)
- React Router v6
- CSS Modules
- lucide-react / react-icons

## Getting Started

### Prerequisites
- Node.js v18+
- npm or yarn

### Installation
```bash
git clone <repo-url>
cd servicecare-jobline
npm install
```

### Run the dev server
```bash
npm run dev
```
App runs at http://localhost:5173 by default.

### Build for production
```bash
npm run build
npm run preview
```

## Project Structure
- `/src/components` — reusable UI (Navbar, Footer, Button, cards, badges)
- `/src/pages` — page compositions; About Us lives in `/src/pages/AboutUs`, Browse Jobs in `/src/pages/BrowseJobs`, Contact Us in `/src/pages/ContactUs`, Employers in `/src/pages/Employers`, Home in `/src/pages/Home`, Post a Job in `/src/pages/PostAJob`
- `/src/data` — nav links, footer configs, contact info, About copy, and mock job listings
- `/src/styles` — design tokens (`variables.css`) and global resets (`globals.css`)

## Current Modules
- ✅ Module 1: About Us page, global Navbar & Footer
- ✅ Module 2: Browse Jobs page (search, filters, job listings, pagination, job alerts)
- ✅ Module 3: Contact Us page (contact form, support info cards, map/office info, FAQ teaser)
- ✅ Module 4: Employers page (hero, why-choose-us, how it works, pricing plans, testimonials)
- ✅ Module 5: Home page (hero + search, job categories, featured jobs, how it works, why choose us, testimonial carousel)
- ✅ Module 6: Post a Job page (job posting form, why post with us, how it works, posting plans, testimonials)

All core pages are now built. Future modules may add auth (Sign In), a job detail page, employer/candidate dashboards, and real backend integration.

## Notes
- The Home page search bar navigates to `/browse-jobs?keyword=&location=&category=` — Browse Jobs should read these query params (via `useSearchParams`) and pre-fill its own search/filter state when that module is revisited/polished.
- Testimonial carousel is a lightweight custom implementation (no external library) — swap for a carousel library later if more advanced behavior (swipe gestures, autoplay) is needed.
- Place page images in `/public` as `img1`–`img14` (`.png`, `.jpg`, or `.webp`).
  - `img1` hero · `img2` healthcare employers · `img3` hospitality employers
  - `img4` job seekers · `img5` service professionals · `img6` hiring team / Sign In panel
  - `img7` Mark D. · `img8` Priya S. · `img9` James L. · `img10` Browse Jobs hero mark
  - `img11` Contact Us hero · `img12` Employers hero
  - `img13` Post a Job closing CTA · `img14` Post a Job hero
- Design tokens (colors, spacing, fonts) are centralized in `src/styles/variables.css`.
- `Footer` now supports optional `uppercaseHeaders`, `bulletStyle`, and per-link `isActive` flags in `footerConfig` for page-specific styling variants — see `src/data/footerConfigs.js`.
- Pricing plan data (`src/data/pricingPlans.js`) is static for now; connect to a real pricing/billing API when available.
- Job listing data is currently mocked in `src/data/jobsData.js`; swap for real API data when the backend is ready.
- `MapPreview` currently renders a stylized static map mockup — swap in a real Google Maps/Mapbox embed when an API key is available.
- Contact form currently logs submissions to the console — connect to a real endpoint when the backend is ready.
- Match the screenshots **pixel-for-pixel**: spacing, font sizes/weights, colors, corner radii, icon choices, and layout ratios.
- Reuse Modules 1 & 2's `Navbar`, tokens, `Button`, `IconBadge`, and `Footer` (with the new config) — do not duplicate or recreate them.
- Shared form primitives (`src/components/FormFields/`) are now used by both the Contact Us and Post a Job forms — build any future forms (e.g. Sign In, candidate application) on these same primitives.
- The job-posting "Continue / Submit Job Details" button currently just logs form data — this is a natural place to introduce a multi-step posting flow (e.g. details → plan selection → payment → confirmation) once the backend exists.
- `PricingCard` now supports a `checkIconColor` prop; `StepItem`'s connector now supports `'chevron' | 'dotted-line' | 'line'`.
- Keep everything modular — this is page 4 of a multi-module build; upcoming prompts will add more pages reusing these same components.
