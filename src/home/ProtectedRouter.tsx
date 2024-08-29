import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProp {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProp> = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
