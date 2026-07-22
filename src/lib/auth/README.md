# Auth (isolated per Audit R4)

All auth/session/client code must live in this single folder so Phase 4.1
can delete it and swap in `@jooblie/core` cleanly. Do not import Supabase
or write session logic anywhere outside `src/lib/auth/`.

Nothing lives here yet -- this site has no backend wired up.
