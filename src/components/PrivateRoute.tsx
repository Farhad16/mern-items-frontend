// src/components/PrivateRoute.tsx
import React from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const userString = localStorage.getItem("user");
  const intendedRoute = localStorage.getItem("intendedRoute");

  const user = userString ? JSON.parse(userString) : null;
  const isAuthenticated = user && user.token;

  if (!isAuthenticated) {
    // If not authenticated, store the intended route and redirect to login
    localStorage.setItem("intendedRoute", window.location.pathname);
    return <Navigate to="/login" />;
  }

  if (intendedRoute) {
    // If authenticated and there's an intended route, clear it from localStorage
    localStorage.removeItem("intendedRoute");
    return <Navigate to={intendedRoute} />;
  }

  // If authenticated and no intended route, show the element
  return <>{element}</>;
};

export default PrivateRoute;
