# Mock data (Audit R2)

Mock objects here must use the exact field names + enum strings from the
dashboard spec's "Mock Data Shapes" section (e.g. applicant_id,
applied_via_site_id, salary_min/salary_max as numbers, salary_period,
skills as text[], status enums like submitted/viewed/shortlisted).
Inventing different field names here means every dashboard gets rebuilt
in Phase 4.1 when real queries replace these mocks.
