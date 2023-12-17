import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface booleanProps {
  isAllowed: Boolean;
}
export const ProtectedRoute = ({ isAllowed }: booleanProps) => {
  if (!isAllowed) {
    return <Navigate to="/" replace={true} />;
  }
  return <Outlet />;
};
