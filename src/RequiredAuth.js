import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function RequiredAuth({ allowedRoles }) {
  const role = localStorage.getItem("userRole");
  const email = localStorage.getItem("email");
  return allowedRoles.includes(role) ? (
    <Outlet />
  ) : email ? (
    <Navigate to="/unauthorized" />
  ) : (
    <Navigate to="/login" />
  );
}
