import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  // Case 1: No user → redirect to Sign-In page
  if (!user) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  // Case 2: User logged in but has not entered config key → 
  // redirect to Configuration page (unless already on it)
  if (!user.configKey && location.pathname !== "/configuration") {
    return <Navigate to="/configuration" replace />;
  }

  // Case 3: Everything valid → allow access
  return children;
}
