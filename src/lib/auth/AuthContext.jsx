import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { api } from "../api";
import { clearSession, readSession, writeSession } from "./session";

const AuthContext = createContext(null);

function sessionFromAuthResponse(data, profile) {
  const authSession = data?.session;
  if (!authSession?.access_token) return null;
  return {
    accessToken: authSession.access_token,
    refreshToken: authSession.refresh_token || null,
    expiresAt: authSession.expires_at || null,
    user: data?.user || null,
    profile: profile || null,
  };
}

export function AuthProvider({ children }) {
  const [session, setSession] = useState(() => readSession());
  const [loading, setLoading] = useState(Boolean(readSession()?.accessToken));

  const setAndPersist = useCallback((next) => {
    setSession(next);
    writeSession(next);
  }, []);

  const signOut = useCallback(() => {
    clearSession();
    setSession(null);
  }, []);

  const refresh = useCallback(async () => {
    const current = readSession();
    if (!current?.refreshToken) return null;
    try {
      const data = await api("/v1/auth/refresh", {
        method: "POST",
        body: JSON.stringify({ refresh_token: current.refreshToken }),
      });
      const token = data?.session?.access_token;
      if (!token) throw new Error("Session refresh failed");
      const profile = await api("/v1/auth/me", {}, token);
      const next = sessionFromAuthResponse(data, profile);
      setAndPersist(next);
      return next;
    } catch {
      signOut();
      return null;
    }
  }, [setAndPersist, signOut]);

  useEffect(() => {
    let cancelled = false;
    const current = readSession();
    if (!current?.accessToken) {
      setLoading(false);
      return undefined;
    }

    api("/v1/auth/me", {}, current.accessToken)
      .then((profile) => {
        if (cancelled) return;
        setAndPersist({ ...current, profile });
      })
      .catch(async (error) => {
        if (cancelled) return;
        if (error?.status === 401 && current.refreshToken) await refresh();
        else signOut();
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [refresh, setAndPersist, signOut]);

  const signIn = useCallback(async ({ email, password }) => {
    const data = await api("/v1/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    const token = data?.session?.access_token;
    if (!token) throw new Error("Login succeeded but no session was returned.");
    const profile = await api("/v1/auth/me", {}, token);
    const next = sessionFromAuthResponse(data, profile);
    setAndPersist(next);
    return next;
  }, [setAndPersist]);

  const signUp = useCallback(async ({ email, password, fullName, role }) => {
    const data = await api("/v1/auth/register", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        full_name: fullName,
        role,
      }),
    });

    if (!data?.session?.access_token) {
      return { requiresEmailConfirmation: true, data };
    }

    const profile = await api("/v1/auth/me", {}, data.session.access_token);
    const next = sessionFromAuthResponse(data, profile);
    setAndPersist(next);
    return { session: next, requiresEmailConfirmation: false };
  }, [setAndPersist]);

  const value = useMemo(() => ({
    session,
    profile: session?.profile || null,
    token: session?.accessToken || null,
    loading,
    isAuthenticated: Boolean(session?.accessToken),
    signIn,
    signUp,
    signOut,
    refresh,
  }), [session, loading, signIn, signUp, signOut, refresh]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const value = useContext(AuthContext);
  if (!value) throw new Error("useAuth must be used inside AuthProvider");
  return value;
}
