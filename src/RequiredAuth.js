import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function RequiredAuth({ allowedRoles }) {
  const role = localStorage.getItem("userRole");
  const accessToken = localStorage.getItem("userToken");
  return allowedRoles.includes(role) ? (
    <Outlet />
  ) : accessToken ? (
    <Navigate to="/unauthorized" />
  ) : (
    <Navigate to="/login" />
  );
}
