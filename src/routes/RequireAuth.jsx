import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { paths } from "../data/navLinks";

export default function RequireAuth({ allowedRole = "seeker" }) {
  const { isAuthenticated, role } = useAuth();

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
