import React from "react";
import UseAuth from "./hooks/useAuth";
import { Navigate, Outlet, useLocation } from "react-router";

export default function RequiredAuth() {
  //   const { auth } = UseAuth();
  //   const adminRole = localStorage.getItem("adminRole");
  //   const userRole = localStorage.getItem("userRole");

  const userToken = localStorage.getItem("userToken");

  const location = useLocation();
  return userToken ? (
    <Outlet state={{ from: location }} replace />
  ) : (
    <Navigate to="/Login" state={{ from: location }} replace />
  );
}
