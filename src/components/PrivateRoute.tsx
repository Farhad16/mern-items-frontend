// src/components/PrivateRoute.tsx
import React from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const userString = localStorage.getItem("user");

  const user = userString ? JSON.parse(userString) : null;
  const isAuthenticated = user && user.token;

  return isAuthenticated ? <>{element}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
