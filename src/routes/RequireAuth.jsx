import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { paths } from "../data/navLinks";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

export default function RequireAuth({ allowedRole = "seeker" }) {
  const { isAuthenticated, role, loading } = useAuth();

  if (loading) return <LoadingSpinner label="Checking your account" full />;

  if (!isAuthenticated) {
    return <Navigate to={paths.signIn || "/sign-in"} replace />;
  }

  if (allowedRole && role !== allowedRole) {
    if (role === "employer") {
      return <Navigate to="/employer-dashboard/overview" replace />;
    }
    return <Navigate to="/dashboard/overview" replace />;
  }

  return <Outlet />;
}
