import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { api } from "../lib/api";
import { clearSession, readSession, writeSession } from "../lib/auth/session";

const AuthContext = createContext(null);

function identity(data, fallback = null) {
  const profile = data?.profile || fallback?.profile || null;
  const user = data?.user || fallback?.user || null;
  if (!profile && !user) return null;
  return { ...(profile || {}), id: profile?.id || user?.id, email: profile?.email || user?.email, full_name: profile?.full_name || profile?.name || user?.name || "", role: profile?.role || user?.role };
}

function stored(data, profile) {
  const source = data?.session || data || {};
  return { accessToken: source.access_token || data?.accessToken, refreshToken: source.refresh_token || data?.refreshToken || null, expiresAt: source.expires_at || data?.expiresAt || null, user: data?.user || null, profile };
}

export function AuthProvider({ children }) {
  const [session, setSession] = useState(() => readSession());
  const [profile, setProfile] = useState(() => readSession()?.profile || null);
  const [loading, setLoading] = useState(true);
  const signOut = useCallback(() => { clearSession(); setSession(null); setProfile(null); }, []);
  const restore = useCallback(async () => {
    const current = readSession();
    if (!current?.accessToken) { setLoading(false); return null; }
    try {
      const data = await api("/auth/me", {}, current.accessToken);
      const nextProfile = identity(data, current);
      if (!nextProfile) throw new Error("Your account profile is not ready.");
      const next = { ...current, user: data?.user || current.user, profile: nextProfile };
      setSession(next); setProfile(nextProfile); writeSession(next); return nextProfile;
    } catch { signOut(); return null; }
    finally { setLoading(false); }
  }, [signOut]);
  useEffect(() => { queueMicrotask(restore); }, [restore]);

  const signIn = useCallback(async ({ email, password }) => {
    const data = await api("/auth/sign-in", { method: "POST", body: JSON.stringify({ email: String(email || "").trim(), password }) });
    if (!data?.session?.access_token) throw new Error("The server did not return a valid session.");
    const me = await api("/auth/me", {}, data.session.access_token);
    const nextProfile = identity(me, data);
    if (!nextProfile) throw new Error("Your account profile is not ready.");
    const next = stored({ ...data, user: me?.user || data.user }, nextProfile);
    setSession(next); setProfile(nextProfile); writeSession(next); return next;
  }, []);

  const signUp = useCallback(async ({ email, password, fullName, role, companyName, companyWebsite, registrationNumber }) => {
    const data = await api("/auth/sign-up", { method: "POST", body: JSON.stringify({ email: String(email || "").trim(), password, name: String(fullName || "").trim(), role, ...(role === "recruiter" ? { company_name: String(companyName || "").trim(), company_website: String(companyWebsite || "").trim(), company_registration_number: String(registrationNumber || "").trim() } : {}) }) });
    if (!data?.session?.access_token) return { requiresEmailConfirmation: true, data };
    const me = await api("/auth/me", {}, data.session.access_token);
    const nextProfile = identity(me, data);
    const next = stored({ ...data, user: me?.user || data.user }, nextProfile);
    setSession(next); setProfile(nextProfile); writeSession(next);
    return { session: next, requiresEmailConfirmation: false };
  }, []);

  const backendRole = profile?.role || null;
  const role = backendRole === "recruiter" ? "employer" : backendRole === "job_seeker" ? "seeker" : null;
  const currentUser = useMemo(() => profile ? { ...profile, name: profile.full_name || profile.name || profile.email, role } : null, [profile, role]);
  const value = useMemo(() => ({ session, profile, currentUser, token: session?.accessToken || null, loading, isAuthenticated: Boolean(session?.accessToken && profile), role, backendRole, signIn, login: signIn, signUp, signOut, logout: signOut, restore }), [session, profile, currentUser, loading, role, backendRole, signIn, signUp, signOut, restore]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() { const value = useContext(AuthContext); if (!value) throw new Error("useAuth must be used inside AuthProvider"); return value; }
