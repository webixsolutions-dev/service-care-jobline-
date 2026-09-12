# ServiceCare dynamic backend integration

UI/CSS design is preserved. Runtime data now comes from the common Jooblie Express API.

## Environment

```env
VITE_API_URL=http://localhost:4000
VITE_SITE_SLUG=service-care
```

## Connected flows

- Public ServiceCare job listing and job details
- ServiceCare categories from the portal category registry
- Job view tracking through public job details
- Job seeker / Employer registration and login
- Saved jobs
- Job applications using the user's default resume
- Job seeker application dashboard counts
- Employer jobs, applicant counts, pipeline status, and job-view counts
- Employer job posting using a company already linked to the recruiter account
- Jooblie <-> ServiceCare visibility is handled by the backend `job_sites` routing

## Backend prerequisites

- Common backend running at `http://localhost:4000`; the frontend adds `/api/v1`
- `service-care` active in `sites`
- `category_sites` mappings for 305-308 -> ServiceCare
- Recruiter must already be linked to a company before posting a job
- Job seeker needs a default resume before applying directly from Job Details
