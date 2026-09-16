import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { api } from "../api";
import { clearSession, readSession, writeSession } from "./session";

const AuthContext = createContext(null);

function identityFromMe(data) {
  if (!data?.profile) return null;
  return { ...data.profile, id: data.profile.id || data.user?.id, email: data.profile.email || data.user?.email, created_at: data.user?.createdAt };
}

export function AuthProvider({ children }) {
  const [session, setSession] = useState(() => readSession());
  const [profile, setProfile] = useState(() => readSession()?.profile || null);
  const [loading, setLoading] = useState(true);

  const signOut = useCallback(() => {
    clearSession();
    setSession(null);
    setProfile(null);
  }, []);

  const restore = useCallback(async () => {
    const current = readSession();
    if (!current?.accessToken) { setLoading(false); return null; }
    setLoading(true);
    try {
      const me = await api("/auth/me", {}, current.accessToken);
      const identity = identityFromMe(me);
      if (!identity) throw new Error("Your account profile is not ready.");
      const next = { ...current, profile: identity };
      setSession(next);
      setProfile(identity);
      writeSession(next);
      return identity;
    } catch {
      signOut();
      return null;
    } finally {
      setLoading(false);
    }
  }, [signOut]);

  useEffect(() => { queueMicrotask(restore); }, [restore]);

  const signIn = useCallback(async ({ email, password }) => {
    const data = await api("/auth/sign-in", { method: "POST", body: JSON.stringify({ email: email.trim(), password }) });
    if (!data?.session?.access_token) throw new Error("The server did not return a valid session.");
    const me = await api("/auth/me", {}, data.session.access_token);
    const identity = identityFromMe(me);
    if (!identity) throw new Error("Your account profile is not ready.");
    const next = { accessToken: data.session.access_token, refreshToken: data.session.refresh_token || null, expiresAt: data.session.expires_at || null, user: data.user, profile: identity };
    setSession(next); setProfile(identity); writeSession(next);
    return next;
  }, []);

  const signUp = useCallback(async ({ email, password, fullName, role, companyName, companyWebsite, registrationNumber }) => {
    const data = await api("/auth/sign-up", { method: "POST", body: JSON.stringify({ email: email.trim(), password, name: fullName.trim(), role, ...(role === "recruiter" ? { company_name: companyName.trim(), company_website: companyWebsite.trim(), company_registration_number: registrationNumber.trim() } : {}) }) });
    if (!data?.session?.access_token) return { requiresEmailConfirmation: true, data };
    const me = await api("/auth/me", {}, data.session.access_token);
    const identity = identityFromMe(me);
    const next = { accessToken: data.session.access_token, refreshToken: data.session.refresh_token || null, expiresAt: data.session.expires_at || null, user: data.user, profile: identity };
    setSession(next); setProfile(identity); writeSession(next);
    return { session: next, requiresEmailConfirmation: false };
  }, []);

  const value = useMemo(() => ({ session, profile, token: session?.accessToken || null, loading, isAuthenticated: Boolean(session?.accessToken && profile), signIn, signUp, signOut, restore }), [session, profile, loading, signIn, signUp, signOut, restore]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const value = useContext(AuthContext);
  if (!value) throw new Error("useAuth must be used inside AuthProvider");
  return value;
}
