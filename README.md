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
- ✅ Module 7: Job Seeker Dashboard (v3 Spec) — private workspace featuring Overview, Find Jobs, My Applications, Saved Jobs, My Profile, and Settings pages.
- ✅ Module 8: Employer / Recruiter Dashboard — private workspace featuring Overview, Job Postings (Active/Draft/Closed), Post/Edit Job, Applicants (scoped & unscoped), Candidate Drawer, Company Profile, and Employer Settings.

## Job Seeker Dashboard (v3 Spec)
- **Route Group (`/dashboard/*`)**:
  - `/dashboard` → redirects to `/dashboard/overview`
  - `/dashboard/overview` → `OverviewPage`
  - `/dashboard/find-jobs` → `FindJobsPage`
  - `/dashboard/applications` → `MyApplicationsPage`
  - `/dashboard/saved-jobs` → `SavedJobsPage`
  - `/dashboard/profile` → `MyProfilePage`
  - `/dashboard/settings` → `SettingsPage`
- **Auth Gating & Protection**:
  - Protected via `RequireAuth` route guard and `AuthContext`.
  - Redirects logged-out visitors to `/sign-in`.
  - Redirects Employer-role users to `/employer-dashboard/overview`.
- **State Management**:
  - `DashboardDataContext` holds in-memory application records, saved jobs, and profile state.
  - Action handlers (`applyToJob`, `withdrawApplication`, `toggleSaveJob`, `updateProfile`) perform optimistic updates ready for future API wiring.
- **v3 Spec Omissions & Simplifications**:
  - **My Profile**: Intentionally simplified for non-technical newcomers (Full Name, Email Address prominently under name, Phone, City/Location, Skills tag input, optional Work Experience & Education). Resume upload and professional headline fields were explicitly removed.
  - **Settings**: Contains Account credentials and Notification switches only. Account deletion / Danger Zone actions were explicitly omitted.
  - **Sidebar**: Features a single **Workspace** nav group plus pinned Settings & Sign Out items. The Community/Network nav section was explicitly removed.

## Employer / Recruiter Dashboard
- **Route Group (`/employer-dashboard/*`)**:
  - `/employer-dashboard` → redirects to `/employer-dashboard/overview`
  - `/employer-dashboard/overview` → `EmployerOverviewPage`
  - `/employer-dashboard/job-postings` → `JobPostingsPage`
  - `/employer-dashboard/post-a-job` → `PostJobDashboardPage` (creates or edits a posting)
  - `/employer-dashboard/job-postings/:jobId/applicants` → `JobApplicantsPage` (posting-scoped candidates)
  - `/employer-dashboard/applicants` → `AllApplicantsPage` (unscoped candidates across all postings)
  - `/employer-dashboard/company-profile` → `CompanyProfilePage`
  - `/employer-dashboard/settings` → `EmployerSettingsPage`
- **Auth Protection & Shell Reuse**:
  - Protected via `RequireAuth` (`allowedRole="employer"`). Redirects job seekers to `/dashboard/overview`.
  - Reuses the exact same `DashboardLayout`, `DashboardSidebar`, `DashboardTopBanner`, and `StatCardRow` shell components, parameterizing sidebar nav links and role labels.
- **Pipeline Stage Mapping (Seeker ↔ Employer)**:
  - Employer-facing pipeline stages map 1:1 to seeker-facing labels:
    - **New** ↔ **Applied**
    - **Reviewed** / **Shortlisted** ↔ **In Review**
    - **Interview** ↔ **Interview**
    - **Offer** ↔ **Offer**
    - **Rejected** ↔ **Not Selected**
- **State Management**:
  - `EmployerDataContext` manages postings (`Active`, `Draft`, `Closed`), applicants, company profile, candidate stage advancement, recruiter notes, and posting deletion.


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

