import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getUser, isAuthenticated } from "../utils/auth";

const ProtectedRoute = ({
  children,
  requireSuperuser = false,
  requireStaffOnly = false,
}) => {
  const location = useLocation();
  const user = getUser();

  // 🔐 Not logged in
  if (!isAuthenticated()) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 👑 Superuser only routes
  if (requireSuperuser && !user.is_superuser) {
    return <Navigate to="/unauthorized" replace />;
  }

   // 👑 admin and super user only routes
  if (requireAdminAndSuper && !( user.is_superuser || user.is_admin )) {
    return <Navigate to="/unauthorized" replace />;
  }

  // 👨‍💼 Staff-only (BUT exclude superuser)
  if (requireStaffOnly) {
    if (user.is_superuser) {
      // 🔥 redirect superuser to admin dashboard
      return <Navigate to="/admin/dashboard" replace />;
    }

    if (!user.is_staff) {
      return <Navigate to="/unauthorized" replace />;
    }
  }

  return children;
};

export default ProtectedRoute;