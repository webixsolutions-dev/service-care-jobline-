import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../lib/auth/AuthContext";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

export default function ProtectedRoute({ role, children }) {
  const { loading, isAuthenticated, profile } = useAuth();
  const location = useLocation();
  if (loading) return <LoadingSpinner label="Checking your account" full />;
  if (!isAuthenticated) return <Navigate to="/sign-in" replace state={{ returnTo: location.pathname }} />;
  if (role && profile?.role !== role) return <Navigate to={profile?.role === "recruiter" ? "/recruiter" : "/dashboard"} replace />;
  return children;
}
