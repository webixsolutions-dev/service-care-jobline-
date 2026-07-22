# Hooks (mock data layer)

Data-fetching hooks (useApplications, useSavedJobs, useProfile, etc.) go
here. Each hook should have a clear "connect your backend here" boundary
so Phase 4.1 can swap the mock implementation for real Supabase queries
without touching the components that call them.
