import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface booleanProps {
  isAllowed: Boolean;
}
export const ProtectedRoute: React.FC<booleanProps> = ({ isAllowed }) => {
  if (!isAllowed) {
    return <Navigate to="/" replace={true} />;
  }
  return <Outlet />;
};
