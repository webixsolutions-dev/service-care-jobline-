# ServiceCare Jobline — Frontend

React 18 + Vite + TypeScript + Tailwind CSS v3 + React Router v6 + Framer Motion + react-icons.

Stack versions and folder layout follow the Jooblie Audit Review
(`Jooblie_Audit_Review.md`): React 18 / Tailwind v3 (Rec1), Node 20 (Rec2),
TypeScript (Rec3), ESLint instead of oxlint (Rec4), brand tokens kept
separate from shared tokens (Rec5), auth code isolated in `src/lib/auth`
(R4), and routes locked to the canonical `/dashboard` + `/recruiter`
scheme (R1).

## Getting started

```bash
npm install
npm run dev       # start dev server
npm run build     # type-check + production build
npm run lint      # eslint
```

## What's implemented

Only the shared **Navbar** and **Footer** are built out, matching the
provided ServiceCare Jobline mockups. Every route renders the shared
`ComingSoon` page with a page-specific title — no page content has been
built yet.

## Folder structure

```
src/
  assets/            Logo and other static assets
  components/
    layout/
      Navbar.tsx     Sticky navbar (desktop + mobile menu)
      Footer.tsx     Site footer (columns + bottom bar)
      Layout.tsx     Navbar + <Outlet /> + Footer wrapper
  config/
    brand.ts         Per-site brand tokens (mirrors tailwind.config.js)
  data/              Mock data lives here (Audit R2 — must match backend schema)
  hooks/             Data-fetching hooks (mock now, Supabase later)
  lib/
    auth/            Isolated auth code only (Audit R4 — swap-in point for @jooblie/core)
  pages/
    ComingSoon.tsx    Reusable placeholder page
    Home.tsx, BrowseJobs.tsx, Employers.tsx, AboutUs.tsx,
    ContactUs.tsx, PostAJob.tsx, SignIn.tsx, NotFound.tsx
    dashboard/DashboardHome.tsx   (/dashboard — job seeker)
    recruiter/RecruiterHome.tsx   (/recruiter — recruiter)
  routes/
    paths.ts          Canonical route map (Audit R1 — locked across all 7 sites)
    AppRoutes.tsx      Route definitions
  App.tsx
  main.tsx
  index.css
```

## Routes

| Path           | Page                  |
|----------------|-----------------------|
| `/`            | Home (Coming Soon)    |
| `/browse-jobs` | Browse Jobs           |
| `/employers`   | Employers             |
| `/about-us`    | About Us              |
| `/contact-us`  | Contact Us            |
| `/post-a-job`  | Post a Job            |
| `/sign-in`     | Sign In               |
| `/dashboard`   | Job seeker dashboard  |
| `/recruiter`   | Recruiter dashboard   |
