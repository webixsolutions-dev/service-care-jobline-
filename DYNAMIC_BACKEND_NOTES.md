# ServiceCare dynamic backend integration

UI/CSS design was not changed. Runtime data now comes from the central Jooblie NestJS API.

## Environment

```env
VITE_API_URL=http://localhost:4000/api
VITE_SITE_SLUG=service-care
```

## Connected flows

- Public ServiceCare job listing and job details
- ServiceCare categories (305-308) from taxonomy
- Job view tracking
- Job seeker / Employer registration and login
- Saved jobs
- Job applications using the user's default resume
- Job seeker application dashboard counts
- Employer jobs, applicant counts, and job-view counts
- Employer job posting using a company already linked to the recruiter account
- Jooblie <-> ServiceCare visibility is handled by the backend `job_sites` routing

## Backend prerequisites

- Central backend running at `http://localhost:4000`
- `service-care` active in `sites`
- `category_sites` mappings for 305-308 -> ServiceCare
- Recruiter must already be linked to a company before posting a job
- Job seeker needs a default resume before applying directly from Job Details
